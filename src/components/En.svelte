<script lang="ts">
  import { asset } from "$app/paths";
  import {
    Mail,
    MapPin,
    Linkedin,
    Github,
    Database,
    Server,
    GraduationCap,
    Globe,
    Monitor,
    Briefcase,
    Calendar,
  } from "lucide-svelte";
</script>

<div class="flex min-h-screen justify-center print:bg-white">
  <div
    class="my-0 flex w-full flex-col bg-white px-8 py-8 lg:my-6 lg:w-[1000px] lg:shadow-xl print:my-0 print:h-full print:shadow-none"
  >
    <div
      class="flex flex-col items-center gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-start md:text-left"
    >
      <img
        class="h-32 w-32 shrink-0 rounded-full object-cover shadow-md"
        src={asset("/mwa.png")}
        alt="COMBRIAT Kévin"
      />

      <div class="flex flex-col gap-3">
        <div>
          <div class="text-3xl font-bold tracking-wide">COMBRIAT Kévin</div>
          <div class="text-lg text-amber-600">Senior Full-Stack Engineer</div>
        </div>

        <p class="max-w-xl text-sm text-gray-600">
          I'm a <span class="font-semibold">Senior Full-Stack Engineer</span> with 14 years of
          experience building fast backends and complex interfaces. I enjoy designing and optimizing
          <span class="font-semibold">APIs</span> and distributed systems. I'm passionate about
          <span class="font-semibold">observability</span> tools.
        </p>

        <div class="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
          <a
            class="flex items-center gap-1"
            href="mailto:japan.combriat.kevin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail class="h-4 w-4 text-amber-600" /> japan.combriat.kevin@gmail.com
          </a>
          <div class="flex items-center gap-1">
            <MapPin class="h-4 w-4 text-amber-600" /> Kyoto, Japan
          </div>
          <a
            class="flex items-center gap-1"
            href="https://www.linkedin.com/in/k%C3%A9vin-combriat-62555699/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin class="h-4 w-4 text-amber-600" /> LinkedIn
          </a>
          <a
            class="flex items-center gap-1"
            href="https://github.com/gaku-sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github class="h-4 w-4 text-amber-600" /> GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="mt-6 grid gap-8 md:grid-cols-3">
      <div class="border-l-4 border-amber-500 pl-4">
        <h2 class="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800">
          <Database class="h-5 w-5 text-amber-600" />
          Data Engineering & Observability
        </h2>
        <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>
            High-throughput data lakehouse built in Rust (Arrow, DataFusion, Parquet), processing
            billions of events daily
          </li>
          <li>ETL pipelines enabling search and alerting</li>
          <li>Leveraged Arrow, DataFusion, and Parquet for efficient data processing</li>
          <li>Custom Grafana data sources for observability</li>
          <li>Arrow, DataFusion, and Parquet</li>
        </ul>
      </div>

      <div class="border-l-4 border-sky-500 pl-4">
        <h2 class="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800">
          <Server class="h-5 w-5 text-sky-600" />
          High-Performance Backends
        </h2>
        <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Optimized APIs in Rust and Node.js</li>
          <li>Scalable distributed pipelines and data lakehouse integration</li>
          <li>
            Latency-sensitive, performance-critical systems (real-time observability platform)
          </li>
          <li>AWS infrastructure (ECS, S3) and databases (Aurora) managed with Terraform</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-500 pl-4">
        <h2 class="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800">
          <Monitor class="h-5 w-5 text-emerald-600" />
          Frontend & Interfaces
        </h2>
        <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>14+ years building dashboards and complex back-office systems</li>
          <li>Expertise in React, Svelte, and TypeScript</li>
          <li>Real-time, high-fidelity data visualization</li>
          <li>Advanced 2D/3D rendering for analytics dashboards and monitoring tools</li>
          <li>Real-time streaming with WebRTC (60fps)</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 space-y-10 border-t border-slate-200 pt-6">
      <div class="space-y-8">
        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Haven Studios – Sony</span>
            <span class="font-semibold text-slate-800">Senior Full-Stack Engineer</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Remote, Kyoto</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2022 – Present</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              <strong>Telemetry & Observability</strong>
              <ul class="ml-4 list-inside list-disc space-y-1">
                <li>
                  Implemented company-wide telemetry and observability pipelines for timelines,
                  metrics, and logs, processing GBs of data per process.
                </li>
                <li>
                  Managed full <span class="font-medium text-teal-700">Grafana</span> infra and custom
                  data sources (Rust/Go).
                </li>
                <li>
                  Designed custom GUI for Just-In-Time (JIT) bug/situation analysis with Arrow and
                  DataFusion.
                </li>
                <li>
                  Built Rust-based <span class="font-medium text-indigo-700"
                    >WebAssembly plugins</span
                  > for browser integration, fully integrated with our observability stack.
                </li>
              </ul>
            </li>
            <li>
              <strong>Backend & Infrastructure</strong>
              <ul class="ml-4 list-inside list-disc space-y-1">
                <li>
                  Built scalable AWS infrastructure (ECS, S3, Terraform) for hundreds of thousands
                  of concurrent players.
                </li>
                <li>
                  Developed high-performance online services in <span
                    class="font-medium text-indigo-700">Rust</span
                  >.
                </li>
                <li>
                  Handled large datasets with <span class="font-medium text-emerald-700"
                    >Arrow, DataFusion, Parquet</span
                  >.
                </li>
                <li>
                  Optimized performance (Level of Detail (LOD), heap-free algorithms) for sub-second
                  response times.
                </li>
                <li>
                  Scaled systems for <span class="font-medium text-rose-700">Fairgames</span>, a AAA
                  GaaS (Game as a Service).
                </li>
              </ul>
            </li>
            <li>
              <strong>Frontend</strong>
              <ul class="ml-4 list-inside list-disc space-y-1">
                <li>Led front-end architecture (TypeScript and Svelte).</li>
              </ul>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">Rust</span>
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">Svelte</span>
            <span class="rounded-md bg-amber-100 px-2 py-1 text-amber-700">AWS</span>
            <span class="rounded-md bg-amber-100 px-2 py-1 text-amber-700">Terraform</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Python</span>
            <span class="rounded-md bg-emerald-100 px-2 py-1 text-emerald-700">Arrow</span>
            <span class="rounded-md bg-emerald-100 px-2 py-1 text-emerald-700">DataFusion</span>
            <span class="rounded-md bg-emerald-100 px-2 py-1 text-emerald-700">Parquet</span>
            <span class="rounded-md bg-teal-100 px-2 py-1 text-teal-700">Grafana</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Legion Labs</span>
            <span class="font-semibold text-slate-800">Senior Full-Stack Engineer</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Montréal, Canada</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2021 – 2022</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Designed and built a <span class="font-medium text-indigo-700">game engine GUI</span> (Rust,
              Tauri, Svelte) with ultra-low latency streaming via WebRTC similar to GeForce Now.
            </li>
            <li>
              Developed <span class="font-medium text-slate-700">REST and gRPC services</span> in Rust,
              minimizing CPU/memory usage with fine-grained memory control.
            </li>
            <li>
              Created advanced <span class="font-medium text-rose-700">CLI tools</span> in Rust, including
              multi-language code generation (Rust, TypeScript, Python) from OpenAPI.
            </li>
            <li>
              Contributed to the <span class="font-medium text-emerald-700">Telemetry project</span
              >, focusing on performance analysis and system optimization.
            </li>
            <li>
              Implemented <span class="font-medium text-teal-700">WebRTC streaming</span> from engine
              to client with &lt; 4-frame latency.
            </li>
            <li>Explored next-gen protocols (HTTP/3, WebTransport) to further cut latency.</li>
            <li>
              Built rich, interactive apps with multiple widgets (color pickers, complex forms,
              script editor).
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">Rust</span>
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">Svelte</span>
            <span class="rounded-md bg-amber-100 px-2 py-1 text-amber-700">Tauri</span>
            <span class="rounded-md bg-teal-100 px-2 py-1 text-teal-700">WebRTC</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">AWS</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Terraform</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Node.js</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Python</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Scoville</span>
            <span class="font-semibold text-slate-800">Front-End Engineer - Web Team Lead</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"
              ><MapPin class="h-4 w-4" /> Tokyo & Kyoto, Japan</span
            >
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2018 – 2021</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Led front-end development and acted as <span class="font-medium text-amber-700"
                >Scrum Master</span
              >
              for the <span class="font-medium text-sky-700">Encourage project</span>.
            </li>
            <li>
              Drove adoption of <span class="font-medium text-blue-700">TypeScript + React</span>
              and contributed to the
              <span class="font-medium text-indigo-700">ATS (Applicant Tracking System)</span> project,
              managing tech direction and backlog.
            </li>
            <li>
              Architected and implemented full-stack features using <span
                class="font-medium text-blue-700">TypeScript</span
              >, <span class="font-medium text-indigo-700">ReScript</span>,
              <span class="font-medium text-pink-700">React</span>,
              <span class="font-medium text-green-700">GraphQL</span>, and
              <span class="font-medium text-violet-700">Next.js</span>.
            </li>
            <li>
              Led code reviews, onboarding, and introduced Agile/DDD practices, resulting in
              improved team collaboration and enhanced UX across 4+ web apps.
            </li>
            <li>
              Developed a <span class="font-medium text-indigo-700"
                >Rust-based "REST to GraphQL" API</span
              > for performance and efficiency.
            </li>
          </ul>
          <li>Managed ATS tech direction including backlog, Jira flow and user stories.</li>
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">GraphQL</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Node.js</span>
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">Rust</span>
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">ReScript</span>
            <span class="rounded-md bg-orange-100 px-2 py-1 text-orange-700">Elm</span>
            <span class="rounded-md bg-violet-100 px-2 py-1 text-violet-700">Next.js</span>
            <span class="rounded-md bg-emerald-100 px-2 py-1 text-emerald-700">Go</span>
            <span class="rounded-md bg-yellow-100 px-2 py-1 text-yellow-700">AWS</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Soat</span>
            <span class="font-semibold text-slate-800"
              >Full-Stack Web Engineer - Lead - Trainer</span
            >
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2014 – 2018</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Contributed as <span class="font-medium text-blue-700">Full-Stack Engineer</span> on multiple
              client projects.
            </li>
            <li>
              Delivered <span class="font-medium text-emerald-700">training sessions</span> in
              <span class="font-medium text-pink-700">React</span>
              and <span class="font-medium text-green-700">Node.js</span>, mentoring junior and
              mid-level devs.
            </li>
            <li>
              Actively involved in growing the web department as part of the <span
                class="font-medium text-amber-700">"Expert Team"</span
              >.
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Training</span>
            <span class="rounded-md bg-amber-100 px-2 py-1 text-amber-700">Leadership</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">BNP</span>
            <span class="font-semibold text-slate-800">Lead Engineer - Architect</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2018</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Architected the front-end with <span class="font-medium text-blue-700"
                >TypeScript</span
              >, <span class="font-medium text-pink-700">React</span>, Redux, and RxJS.
            </li>
            <li>
              Enhanced <span class="font-medium text-emerald-700">CI/CD pipelines</span> with CircleCI
              for faster delivery.
            </li>
            <li>
              Created AWS infrastructure templates using <span class="font-medium text-indigo-700"
                >CloudFormation</span
              >.
            </li>
            <li>
              Collaborated in product planning with the <span class="font-medium text-amber-700"
                >Swiss Knife</span
              > team and Product Owner.
            </li>
            <li>Supported QA automation by integrating Katalon-based test suites.</li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">AWS</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">CloudFormation</span>
            <span class="rounded-md bg-emerald-100 px-2 py-1 text-emerald-700">CI/CD</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Société Générale</span>
            <span class="font-semibold text-slate-800">Senior Full-Stack Web Engineer</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2017 – 2018</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Developed new features with <span class="font-medium text-pink-700">React</span> and
              <span class="font-medium text-blue-700">TypeScript</span>.
            </li>
            <li>
              Contributed to backend services in <span class="font-medium text-indigo-700">C#</span
              >.
            </li>
            <li>Worked on a large-scale app supporting foreign currency exchange operations.</li>
            <li>Collaborated within a team of 10 experienced developers.</li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">C#</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Radio France</span>
            <span class="font-semibold text-slate-800">Senior Full-Stack Web Engineer</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2016 – 2017</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Led the in-house <span class="font-medium text-amber-700">RTE project</span> with TypeScript,
              React, and Draft.js.
            </li>
            <li>
              Introduced <span class="font-medium text-blue-700">TypeScript</span> across the team and
              mentored adoption.
            </li>
            <li>Refactored core projects for maintainability and long-term scalability.</li>
            <li>Built and optimized a Node.js backend with Express.</li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
            <span class="rounded-md bg-yellow-100 px-2 py-1 text-yellow-700">Draft.js</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">TF1</span>
            <span class="font-semibold text-slate-800">
              Lead Full-Stack Web Engineer - Lead Front-End Engineer
            </span>
          </h2>
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2014 – 2016</span>
          </div>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Led developments on TF1 and LCI backoffice apps.</li>
            <li>Built with AngularJS, React/Redux, and Node.</li>
            <li>Developed APIs with Hapi and Express.</li>
            <li>Managed teams of 5+ engineers.</li>
            <li>Implemented a scalable tag system for front-end resources.</li>
          </ul>
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Tibanne</span>
            <span class="font-semibold text-slate-800">Front-End Engineer</span>
          </h2>
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Tokyo, Japan</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2013 – 2014</span>
          </div>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Developed front-end features for VPS hosting.</li>
            <li>HTML/CSS integration and dynamic forms.</li>
            <li>Created and tested newsletters.</li>
          </ul>
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">JavaScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">PHP</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">~</span>
            <span class="font-semibold text-slate-800">Full-Stack Engineer</span>
          </h2>
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2012 – 2013</span>
          </div>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Authored a full-featured functional library in JavaScript.</li>
            <li>Built <em>Mango</em>, an ORM for MongoDB in Clojure.</li>
            <li>Developed a GMail POP3 client in Rust.</li>
            <li>Prototyped apps in Node.</li>
          </ul>
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Rust</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node</span>
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">Go</span>
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">Scala</span>
            <span class="rounded-md bg-amber-100 px-2 py-1 text-amber-700">Clojure</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">QuelleEnergie</span>
            <span class="font-semibold text-slate-800">Full-Stack Engineer</span>
          </h2>
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2012</span>
          </div>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Developed features with Ruby on Rails.</li>
            <li>Front-end with jQuery.</li>
            <li>Wrote MySQL migrations.</li>
            <li>Tested with RSpec.</li>
            <li>Analyzed requirements and authored specs.</li>
          </ul>
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-rose-100 px-2 py-1 text-rose-700">Ruby on Rails</span>
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">JavaScript</span>
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">jQuery</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 space-y-3 border-t border-slate-200 pt-6">
      <h2 class="flex items-center gap-2 font-semibold">
        <span class="text-xl text-amber-600"><GraduationCap class="h-5 w-5" /></span>
        <span class="text-xl text-amber-600">Education</span>
      </h2>
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
        <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2010 – 2012</span>
      </div>
      <div class="text-gray-700">
        <p class="font-semibold">Epitech Paris</p>
        <p>Software Development</p>
      </div>
    </div>

    <div class="mt-6 space-y-3 border-t border-slate-200 pt-6">
      <h2 class="flex items-center gap-2 font-semibold">
        <span class="text-xl text-amber-600"><Globe class="h-5 w-5" /></span>
        <span class="text-xl text-amber-600">Languages</span>
      </h2>
      <ul class="list-inside list-disc space-y-1 text-gray-700">
        <li><span class="font-semibold text-slate-800">French</span>: Native</li>
        <li>
          <span class="font-semibold text-slate-800">English</span>: Professional working
          proficiency
        </li>
        <li>
          <span class="font-semibold text-slate-800">Japanese</span>: Conversational proficiency
        </li>
      </ul>
    </div>
  </div>
</div>
