import Markdown from "markdown-it";
import { parse as parseToml } from "toml";

import resume from "$lib/assets/resume.toml?raw";
import { visit } from "$lib/object";

import type { Resume } from "./types";

export async function load() {
  const md = new Markdown();
  md.renderer.rules.strong_open = () =>
    '<span class="font-semibold text-indigo-800">';
  md.renderer.rules.strong_close = () => "</span>";
  const resumeToml = parseToml(resume) as Resume;
  visit(resumeToml, (value) => md.renderInline(value));
  return { resume: resumeToml };
}
