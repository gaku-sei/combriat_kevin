import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname } from "path";

import {
  Document,
  ExternalHyperlink,
  ISectionOptions,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import Markdown from "markdown-it";
import { parse as parseToml } from "toml";

import { formatDate } from "../src/lib/date";
import { visit } from "../src/lib/object";
import type { Highlight, Resume } from "../src/routes/resume/types";

const resumePath = "./src/lib/assets/resume.toml";
const outputPath = "./generated-docs/combriat_kevin_cv.docx";

async function parseResume(resumeContent: string) {
  const md = new Markdown();
  md.renderer.rules.strong_open = () =>
    '<span class="font-semibold text-indigo-800">';
  md.renderer.rules.strong_close = () => "</span>";
  const resumeToml = parseToml(resumeContent) as Resume;
  // TODO: Create proper Paragraph with style
  visit(resumeToml, (value) => {
    const [{ children: tokens }] = md.parseInline(value, {});
    const content = tokens?.map((token) => token.content).join("") ?? "";

    return content;
  });
  return resumeToml;
}

function formatHighlight(highlight: Highlight): string {
  if (typeof highlight === "string") {
    return highlight;
  }

  if (highlight[1]) {
    return `${highlight[0]} - ${highlight[1]}`;
  }

  return highlight[0];
}

function generateProfile(resume: Resume): ISectionOptions[] {
  return [
    {
      children: [
        new Paragraph({
          text: `${resume.basics.last_name
            .split("")
            .map((c) => c.toUpperCase())
            .join("")} ${resume.basics.first_name}`,
          heading: "Title",
        }),
        new Paragraph({
          text: resume.basics.position,
          heading: "Heading2",
        }),
        new Paragraph({
          text: `${resume.basics.location.city} - ${resume.basics.location.country}`,
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new ExternalHyperlink({
              children: [
                new TextRun({ text: resume.basics.email, style: "Hyperlink" }),
              ],
              link: `mailto:${resume.basics.email}`,
            }),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: resume.basics.profiles.map(
            (profile, index) =>
              new ExternalHyperlink({
                children: [
                  ...(index > 0 ? [new TextRun({ text: " - " })] : []),
                  new TextRun({ text: profile.network, style: "Hyperlink" }),
                ],
                link: profile.url,
              }),
          ),
          bullet: { level: 0 },
        }),
      ],
    },
    {
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: resume.basics.about.join(" "),
              italics: true,
            }),
          ],
        }),
      ],
    },
    {
      children: [
        new Paragraph({
          text: "Main Skills",
          heading: "Heading2",
        }),
        ...(resume.basics.skills?.map(
          (skill) =>
            new Paragraph({
              text: `${skill.name} - ${skill.duration}`,
              bullet: { level: 0 },
            }),
        ) ?? []),
      ],
    },
  ];
}

function generateWorks(resume: Resume): ISectionOptions[] {
  const sections: ISectionOptions[] = [
    {
      children: [
        new Paragraph({
          text: "Work Experience",
          heading: "Title",
        }),
      ],
    },
  ];

  for (const work of resume.works) {
    const title = [work.company, work.position];
    // if (work.context) {
    //   title.push(work.context);
    // }

    const dates = [work.place, formatDate(new Date(work.start_date))];
    if (work.end_date) {
      dates.push(formatDate(new Date(work.end_date)));
    } else {
      dates.push("Present");
    }

    const skills = work.skills?.map((skill) => skill);

    const children: ISectionOptions["children"] = [
      new Paragraph({
        text: title.join(" - "),
        heading: "Heading1",
      }),
      new Paragraph({
        text: dates.join(" - "),
        heading: "Heading2",
      }),
      ...(skills
        ? [
            new Paragraph({
              text: skills.join(", "),
              heading: "Heading6",
            }),
          ]
        : []),
      ...work.highlights.map((highlight) => {
        const content = formatHighlight(highlight);

        return new Paragraph({
          text: content,
          bullet: { level: 0 },
          alignment: "both",
        });
      }),
    ];

    sections.push({ children });
  }

  return sections;
}

function generateEducation(resume: Resume): ISectionOptions[] {
  const sections: ISectionOptions[] = [
    {
      children: [
        new Paragraph({
          text: "Education",
          heading: "Title",
        }),
      ],
    },
  ];

  for (const education of resume.educations) {
    const title = [education.institution, education.area];
    const dates = [
      education.place,
      formatDate(new Date(education.start_date)),
      formatDate(new Date(education.end_date)),
    ];

    const children: ISectionOptions["children"] = [
      new Paragraph({
        text: title.join(" - "),
        heading: "Heading1",
      }),
      new Paragraph({
        text: dates.join(" - "),
      }),
    ];

    sections.push({ children });
  }

  return sections;
}

function generateSkills(resume: Resume): ISectionOptions[] {
  const sections: ISectionOptions[] = [
    {
      children: [
        new Paragraph({
          text: "Skills & Expertise",
          heading: "Title",
        }),
      ],
    },
  ];

  const children: ISectionOptions["children"] = resume.skills.map(
    (skill) =>
      new Paragraph({
        children: [
          new TextRun({ text: `${skill.name}: `, bold: true }),
          new TextRun({ text: skill.keywords.join(", ") }),
        ],
        bullet: { level: 0 },
      }),
  );

  sections.push({ children });

  return sections;
}

function generateLanguages(resume: Resume): ISectionOptions[] {
  const sections: ISectionOptions[] = [
    {
      children: [
        new Paragraph({
          text: "Skills & Expertise",
          heading: "Title",
        }),
      ],
    },
  ];

  const children: ISectionOptions["children"] = resume.languages.map(
    (language) =>
      new Paragraph({
        children: [
          new TextRun({ text: `${language.language}: `, bold: true }),
          new TextRun({ text: language.fluency }),
        ],
        bullet: { level: 0 },
      }),
  );

  sections.push({ children });

  return sections;
}

function generateResume(resume: Resume): Document {
  return new Document({
    sections: [
      ...generateProfile(resume),
      ...generateWorks(resume),
      ...generateEducation(resume),
      ...generateSkills(resume),
      ...generateLanguages(resume),
    ],
  });
}

async function generateFile() {
  const resumeContent = await readFile(resumePath, { encoding: "utf8" });

  const resume = await parseResume(resumeContent);

  const doc = generateResume(resume);

  const buffer = await Packer.toBuffer(doc);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
}

await generateFile();
