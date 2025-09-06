<script lang="ts">
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

<div
  class="text-md pointer-events-none sticky top-4 ml-auto flex justify-end gap-x-1 bg-transparent pr-6 md:text-sm print:hidden"
>
  <a href="/" class="pointer-events-auto hover:underline">EN</a> /
  <a href="/fr" class="pointer-events-auto hover:underline">FR</a>
</div>

<div class="flex min-h-screen justify-center print:bg-white">
  <div
    class="my-0 flex w-full flex-col bg-white px-8 py-8 lg:my-6 lg:w-[1000px] lg:shadow-xl print:my-0 print:h-full print:shadow-none"
  >
    <div
      class="flex flex-col items-center gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-start md:text-left"
    >
      <img
        class="h-32 w-32 shrink-0 rounded-full object-cover shadow-md"
        src="mwa.png"
        alt="COMBRIAT Kévin"
      />

      <div class="flex flex-col gap-3">
        <div>
          <div class="text-3xl font-bold tracking-wide">COMBRIAT Kévin</div>
          <div class="text-lg text-amber-600">Ingénieur Full-Stack Senior</div>
        </div>

        <p class="max-w-xl text-sm text-gray-600">
          <span class="font-semibold">Ingénieur Full-Stack Senior</span> avec 14 ans d’expérience,
          j’ai développé des <span class="font-semibold">backends haute performance</span> et des
          <span class="font-semibold">interfaces complexes</span>. J’aime concevoir et optimiser des
          API, des systèmes distribués et des outils d’observabilité.
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
            <MapPin class="h-4 w-4 text-amber-600" /> Kyoto, Japon
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
          Data ingénierie et observabilité
        </h2>
        <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Data lakehouse haute performance construit en Rust</li>
          <li>Des milliards d'événements traités quotidiennement</li>
          <li>Pipelines ETL permettant des recherches précises et des alertes</li>
          <li>Datasource Grafana personnalisée pour l'observabilité</li>
          <li>
            Utilisation d'<span class="font-medium text-emerald-700"
              >Arrow, DataFusion et Parquet</span
            > pour le traitement et l'analyse big data
          </li>
        </ul>
      </div>

      <div class="border-l-4 border-sky-500 pl-4">
        <h2 class="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800">
          <Server class="h-5 w-5 text-sky-600" />
          Backends haute performance
        </h2>
        <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>API optimisées en Rust et Node.js</li>
          <li>Pipelines distribuées et intégration de data lakehouse</li>
          <li>Systèmes sensibles à la latence et critiques pour la performance</li>
          <li>AWS (ECS, S3, Aurora) avec Terraform</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-500 pl-4">
        <h2 class="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800">
          <Monitor class="h-5 w-5 text-emerald-600" />
          Frontend et interfaces
        </h2>
        <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>14+ ans de création de dashboards et back-offices complexes</li>
          <li>Expertise en React, Svelte et TypeScript</li>
          <li>Visualisation de données en temps réel et haute fidélité</li>
          <li>Rendu 2D/3D avancé pour analytics et monitoring</li>
          <li>Streaming avec WebRTC (à 60fps)</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 space-y-10 border-t border-slate-200 pt-6">
      <div class="space-y-8">
        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Haven Studios – Sony</span>
            <span class="font-semibold text-slate-800">Ingénieur Full-Stack Senior</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Remote, Kyoto</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2022 – Présent</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Développement des outils de télémétrie et d'observabilité à l'échelle de l'entreprise
              (timelines, métriques, logs) en traitant des giga octets de données par processus.
            </li>
            <li>
              Création d'une infrastructure AWS scalable (ECS, S3, Terraform) pour des centaines de
              milliers de joueurs simultanés.
            </li>
            <li>
              Développement de services en ligne haute performance en <span
                class="font-medium text-indigo-700">Rust</span
              >.
            </li>
            <li>
              Big data avec <span class="font-medium text-emerald-700"
                >Arrow, DataFusion, Parquet</span
              >.
            </li>
            <li>
              Optimisation des performances (LOD, algorithmes sans heap allocation) pour des temps
              de réponse GUI personnalisés inférieurs à la seconde.
            </li>
            <li>
              Scalabilité des systèmes pour <span class="font-medium text-rose-700">Fairgames</span
              >, un AAA GaaS (Game as a Service).
            </li>
            <li>
              Gestion complète de l'infrastructure <span class="font-medium text-teal-700"
                >Grafana</span
              > et sources de données personnalisées (Rust/Go).
            </li>
            <li>
              Conception d'une GUI personnalisée pour l'analyse JIT (Just In Time) des bugs avec
              Arrow et DataFusion.
            </li>
            <li>
              Direction de l'architecture front-end (TypeScript + Svelte), permettant le rendu de
              millions de points en temps réel.
            </li>
            <li>
              Développement de <span class="font-medium text-indigo-700">plugins Rust Wasm</span> pour
              navigateur, intégrés au stack d'observabilité.
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-indigo-100 px-2 py-1 text-indigo-700">Rust</span>
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">Svelte</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
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
            <span class="font-semibold text-slate-800">Ingénieur Full-Stack Senior</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Montréal, Canada</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2021 – 2022</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Conception et création d'une <span class="font-medium text-indigo-700"
                >GUI de moteur de jeu</span
              > (Rust, Tauri, Svelte) avec streaming faible latence via WebRTC similaire à GeForce Now.
            </li>
            <li>
              Développement de <span class="font-medium text-slate-700">services REST et gRPC</span>
              en Rust, minimisant l'usage CPU/mémoire.
            </li>
            <li>
              Création d'outils <span class="font-medium text-rose-700">CLI avancés</span> en Rust, y
              compris génération de code multi-langages (Rust, TypeScript, Python) compatible OpenAPI.
            </li>
            <li>
              Contribution au <span class="font-medium text-emerald-700">projet Telemetry</span>,
              axé sur l'analyse des performances et l'optimisation système.
            </li>
            <li>
              Mise en place du <span class="font-medium text-teal-700">streaming WebRTC</span> du moteur
              vers le client avec moins de 4 frames de latence.
            </li>
            <li>
              Exploration des protocoles next-gen (HTTP/3, WebTransport) pour réduire davantage la
              latence.
            </li>
            <li>
              Création d'applications interactives riches avec multiples widgets (sélecteurs de
              couleurs, formulaires complexes, éditeur de scripts, etc...).
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
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Python</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Scoville</span>
            <span class="font-semibold text-slate-800">Ingénieur Front-End - Chef d'équipe Web</span
            >
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"
              ><MapPin class="h-4 w-4" /> Tokyo et Kyoto, Japon</span
            >
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2018 – 2021</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Direction du développement front-end et rôle de <span
                class="font-medium text-amber-700">Scrum Master</span
              >
              sur le <span class="font-medium text-sky-700">projet Encourage</span>.
            </li>
            <li>
              Promotion de l'adoption de <span class="font-medium text-blue-700"
                >TypeScript et React</span
              > sur plusieurs projets.
            </li>
            <li>
              Contribution aux développements full-stack au projet <span
                class="font-medium text-indigo-700">ATS (Applicant Tracking System)</span
              >.
            </li>
            <li>Product owner aux débuts du projet ATS : backlog, flux Jira et user stories.</li>
            <li>
              Architecture de la stack front-end <span class="font-medium text-indigo-700"
                >React et ReScript</span
              >
              et back-end <span class="font-medium text-blue-700">Node.js et TypeScript</span>
            </li>
            <li>
              Conception et implémentation des fonctionnalités front-end pour Mikketa avec <span
                class="font-medium text-pink-700">React</span
              >, <span class="font-medium text-blue-700">TypeScript</span>,
              <span class="font-medium text-indigo-700">ReScript</span>
              et <span class="font-medium text-green-700">GraphQL</span>.
            </li>
            <li>
              Responsable des fonctionnalités critiques, leader des revues de code et intégration
              des nouveaux ingénieurs.
            </li>
            <li>
              Utilisation des méthodes <span class="font-medium text-emerald-700"
                >Domain-Driven Design (DDD)</span
              > et du framework Agile.
            </li>
            <li>Supervision de 4 applications web liées au projet Encourage</li>
            <li>Développement des fonctionnalités côté client et amélioration de l'UX.</li>
            <li>
              Développement d'une <span class="font-medium text-indigo-700"
                >API "REST to GraphQL" en Rust</span
              >.
            </li>
          </ul>

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
              >Ingénieur Web Full-Stack - Lead - Formateur</span
            >
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2014 – 2018</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Contribution en tant qu'<span class="font-medium text-blue-700"
                >Ingénieur Full-Stack</span
              > sur plusieurs projets clients.
            </li>
            <li>
              Dispense de <span class="font-medium text-emerald-700">sessions de formation</span>
              en <span class="font-medium text-pink-700">React</span> et
              <span class="font-medium text-green-700">Node.js</span>, mentoring des développeurs
              juniors et intermédiaires.
            </li>
            <li>
              Participation active au développement du département web au sein de l'<span
                class="font-medium text-amber-700">"Expert Team"</span
              >.
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node.js</span>
            <span class="rounded-md bg-purple-100 px-2 py-1 text-purple-700">Formation</span>
            <span class="rounded-md bg-amber-100 px-2 py-1 text-amber-700">Leadership</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">BNP</span>
            <span class="font-semibold text-slate-800">Ingénieur Principal - Architecte</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2018</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Architecture du front-end avec <span class="font-medium text-blue-700"
                >TypeScript</span
              >, <span class="font-medium text-pink-700">React</span>, Redux et RxJS.
            </li>
            <li>
              Amélioration des <span class="font-medium text-emerald-700">pipelines CI/CD</span> avec
              CircleCI.
            </li>
            <li>
              Création des templates d'infrastructure AWS avec <span
                class="font-medium text-indigo-700">CloudFormation</span
              >.
            </li>
            <li>
              Collaboration à la planification produit avec l'équipe, la Swiss Knife et la Product
              Owner.
            </li>
            <li>Aide à l'automatisation QA en intégrant des suites de tests basées sur Katalon.</li>
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
            <span class="font-semibold text-slate-800">Ingénieur Full-Stack Senior</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2017 – 2018</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Développement de nouvelles fonctionnalités en <span class="font-medium text-pink-700"
                >React</span
              >
              et <span class="font-medium text-blue-700">TypeScript</span>.
            </li>
            <li>
              Contribution aux développement back-end en <span class="font-medium text-indigo-700"
                >C#</span
              >.
            </li>
            <li>Amélioration d'une application permettant les opérations de change.</li>
            <li>Collaboration au sein d'une équipe de 10 développeurs expérimentés.</li>
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
            <span class="font-semibold text-slate-800">Ingénieur Full-Stack Senior</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2016 – 2017</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Direction du projet interne <span class="font-medium text-amber-700"
                >RTE (Rich Text Editor)</span
              > avec TypeScript, React et Draft.js.
            </li>
            <li>
              Introduction de <span class="font-medium text-blue-700">TypeScript</span> dans l'équipe
              et accompagnement de son adoption.
            </li>
            <li>Refactorisation des projets principaux pour une meilleure maintenabilité.</li>
            <li>Conception et optimisation au back-end Node.js avec Express.</li>
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
            <span class="font-semibold text-slate-800"
              >Lead Ingénieur Full-Stack - Lead Front-End</span
            >
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2014 – 2016</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Direction du développement des applications backoffice TF1 et LCI.</li>
            <li>Développement avec AngularJS puis React/Redux et Node.</li>
            <li>Création d'API avec Hapi et Express.</li>
            <li>Encadrement d'une équipes de 5 ingénieurs.</li>
            <li>Implémentation d'un système de tags évolutif pour les ressources front-end.</li>
          </ul>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="rounded-md bg-blue-100 px-2 py-1 text-blue-700">TypeScript</span>
            <span class="rounded-md bg-pink-100 px-2 py-1 text-pink-700">React</span>
            <span class="rounded-md bg-green-100 px-2 py-1 text-green-700">Node</span>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="flex items-center gap-2 font-semibold">
            <span class="text-xl text-amber-600"><Briefcase class="h-5 w-5" /></span>
            <span class="text-xl text-amber-600">Tibanne</span>
            <span class="font-semibold text-slate-800">Ingénieur Front-End</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Tokyo, Japon</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2013 – 2014</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Développement des fonctionnalités front-end pour l'hébergement VPS.</li>
            <li>Intégration HTML/CSS et formulaires dynamiques.</li>
            <li>Création et tests des newsletters.</li>
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
            <span class="font-semibold text-slate-800">Ingénieur Full-Stack</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2012 – 2013</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Auteur d'une bibliothèque functionelle JavaScript.</li>
            <li>Développement d'un ORM <em>Mango</em> pour MongoDB en Clojure.</li>
            <li>Développement d'un client POP3 GMail en Rust.</li>
            <li>Prototypage d'applications en Node.</li>
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
            <span class="font-semibold text-slate-800">Ingénieur Full-Stack</span>
          </h2>

          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
            <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2012</span>
          </div>

          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>Développement des fonctionnalités avec Ruby on Rails.</li>
            <li>Front-end avec jQuery.</li>
            <li>Rédaction des migrations MySQL.</li>
            <li>Tests avec RSpec.</li>
            <li>Analyse des besoins et rédaction des spécifications.</li>
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
        <span class="text-xl text-amber-600">Éducation</span>
      </h2>
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <span class="flex items-center gap-1"><MapPin class="h-4 w-4" /> Paris, France</span>
        <span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> 2010 – 2012</span>
      </div>
      <div class="text-gray-700">
        <p class="font-semibold">Epitech Paris – Programme universitaire</p>
        <p>Programme de développement logiciel</p>
      </div>
    </div>

    <div class="mt-6 space-y-3 border-t border-slate-200 pt-6">
      <h2 class="flex items-center gap-2 font-semibold">
        <span class="text-xl text-amber-600"><Globe class="h-5 w-5" /></span>
        <span class="text-xl text-amber-600">Langues</span>
      </h2>
      <ul class="list-inside list-disc space-y-1 text-gray-700">
        <li><span class="font-semibold text-slate-800">Français</span> : Langue maternelle</li>
        <li>
          <span class="font-semibold text-slate-800">Anglais</span> : Compétence professionnelle
        </li>
        <li>
          <span class="font-semibold text-slate-800">Japonais</span> : Compétence élémentaire
        </li>
      </ul>
    </div>
  </div>
</div>
