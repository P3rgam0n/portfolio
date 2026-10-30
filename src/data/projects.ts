export type ProjectStatus = 'Production' | 'Active' | 'Commercial' | 'PoC' | 'Experiment';
export type ProjectCategory = 'AI & Automation' | 'ComfyUI Plugins' | 'Windows Utilities' | 'Web Development' | 'Experiments';

export interface Project {
  id: string;
  name: string;
  nameDisplay: string;
  isPublic: boolean;
  repoUrl?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tagline: { en: string; pl: string; };
  description: { en: string; pl: string; };
  features: { en: string[]; pl: string[]; };
  tech: string[];
  featured: boolean;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'notebooklm-deep-agy',
    name: 'notebooklm-deep-agy',
    nameDisplay: 'NotebookLM Deep Research',
    isPublic: false,
    category: 'AI & Automation',
    status: 'Production',
    tagline: { en: 'Autonomous multi-agent research pipeline', pl: 'Autonomiczny wieloagentowy system badań' },
    description: {
      en: 'An autonomous, deterministic multi-agent research pipeline orchestrating five specialized agents — Planner, Source Curator, NotebookLM Operator, Quality Critic, and Report Writer — to produce structured research outputs. Built on the AGY Native framework, the system enforces Quality Gates at each stage, with results exported to an Obsidian-compatible Markdown knowledge vault. 143/143 tests passing, v1.2.0 production release.',
      pl: 'Autonomiczny, deterministyczny pipeline wieloagentowy orkiestrujący pięciu wyspecjalizowanych agentów — Planner, Source Curator, NotebookLM Operator, Quality Critic i Report Writer. System wymusza bramki jakości (Quality Gates) na każdym etapie, a wyniki trafiają do skarbca wiedzy kompatybilnego z Obsidian. 143/143 testy zaliczone, wersja produkcyjna v1.2.0.',
    },
    features: {
      en: ['5-agent pipeline with enforced Quality Gates between stages', 'Dual interface: CLI automation + interactive Web GUI', 'Obsidian Vault output with Mermaid diagram generation', 'Google NotebookLM + Gemini flash/pro model integration', '143/143 tests — production-grade reliability'],
      pl: ['5-agentowy pipeline z bramkami jakości Quality Gates', 'Podwójny interfejs: CLI + interaktywne Web GUI', 'Eksport do Obsidian Vault z diagramami Mermaid', 'Integracja Google NotebookLM + modele Gemini flash/pro', '143/143 testów — niezawodność klasy produkcyjnej'],
    },
    tech: ['Python', 'Google NotebookLM', 'Gemini', 'AGY Native', 'Multi-agent', 'FastAPI'],
    featured: true, gradient: 'from-blue-600 to-indigo-700', icon: '🤖',
  },
  {
    id: 'image-gen',
    name: 'image-gen',
    nameDisplay: 'Vertex AI Image Studio',
    isPublic: false,
    category: 'AI & Automation',
    status: 'Production',
    tagline: { en: 'Local production platform for Gemini 3 image synthesis', pl: 'Lokalna platforma syntezy obrazów Gemini 3' },
    description: {
      en: 'A local, production-grade image synthesis platform built around Google Gemini 3 Image Models, providing a unified interface for humans, developer pipelines, and autonomous AI agents. Delivers a dark-themed Web Studio SPA with live prompt composition, A/B comparison slider, and instant code snippet generation; a full Typer CLI; a typed Pydantic v2 Python SDK; and a FastMCP server for agent integrations.',
      pl: 'Lokalna, produkcyjna platforma syntezy obrazów zbudowana wokół modeli Gemini 3 Image, oferująca zunifikowany interfejs dla ludzi, pipeline\'ów deweloperskich i agentów AI. Zawiera ciemne Web Studio SPA z suwakiem A/B, pełne CLI Typer, typowany SDK Python (Pydantic v2) oraz serwer FastMCP.',
    },
    features: {
      en: ['4 Gemini Image models — 512 px to 4K resolution', 'Dark Web Studio SPA with A/B comparison slider', 'Typer CLI + typed Python SDK + FastMCP server', '8-block modular prompt builder + code snippet export', '5-tier auth waterfall: OAuth → ADC → API key → bearer'],
      pl: ['4 modele Gemini Image — 512 px do 4K', 'Ciemne Web Studio SPA ze suwakiem A/B', 'Typer CLI + typowany SDK Python + serwer FastMCP', '8-blokowy builder promptów + eksport snippetów kodu', '5-poziomowy waterfall: OAuth → ADC → klucz API → bearer'],
    },
    tech: ['Python', 'FastAPI', 'Vertex AI', 'Gemini 3', 'Pydantic v2', 'Typer', 'FastMCP'],
    featured: true, gradient: 'from-sky-500 to-cyan-600', icon: '🖼️',
  },
  {
    id: 'bedrock-router',
    name: 'bedrock-router',
    nameDisplay: 'Bedrock Router (MCP)',
    isPublic: false,
    category: 'AI & Automation',
    status: 'Production',
    tagline: { en: 'Cost-aware Amazon Bedrock model router for Cline', pl: 'Router modeli Bedrock świadomy kosztów dla Cline' },
    description: {
      en: 'An MCP Server for Cline that classifies tasks locally — at zero API cost — and routes them to the most cost-effective Amazon Bedrock model, from Nova Micro ($0.035/1M tokens) to Claude Opus ($15/1M). A budget tracking system hard-blocks execution when spending limits are reached, with model selection logic fully configurable through a YAML routing rules file.',
      pl: 'Serwer MCP dla Cline klasyfikujący zadania lokalnie — bez kosztów API — i kierujący je do optymalnego modelu Amazon Bedrock: od Nova Micro ($0.035/1M tokenów) do Claude Opus ($15/1M). System śledzenia budżetu twardą blokadą zatrzymuje wykonanie po przekroczeniu limitu.',
    },
    features: {
      en: ['Local task classification — zero API cost', '4 MCP tools: classify, route & invoke, budget, list models', 'Hard budget limiter with JSONL spend log', 'YAML routing rules — transparent model selection', '29 unit tests; Cline v4.x native integration'],
      pl: ['Lokalna klasyfikacja — zerowy koszt API', '4 narzędzia MCP: klasyfikuj, wywołaj, budżet, lista modeli', 'Twardy limit budżetu z logiem JSONL', 'Reguły routingu YAML — przejrzysty dobór modeli', '29 testów; natywna integracja z Cline v4.x'],
    },
    tech: ['Python', 'Amazon Bedrock', 'MCP stdio', 'boto3', 'YAML', 'pytest'],
    featured: false, gradient: 'from-orange-500 to-amber-600', icon: '⚡',
  },
  {
    id: 'asset-generator',
    name: 'asset-generator',
    nameDisplay: '2K Asset Generator',
    isPublic: false,
    category: 'AI & Automation',
    status: 'Production',
    tagline: { en: 'AI-powered 2K furniture packshot generation pipeline', pl: 'Pipeline generowania packszotów mebli 2K' },
    description: {
      en: 'A 2K product packshot generation pipeline for furniture and interior design, powered by Gemini Flash Image. Generates photorealistic 2×2 grid sheets or single Hero shots against pure white backgrounds, validated by a 4-pillar Visual QA gate. An integrated Alpha Cutout Engine produces zero-cost transparent PNGs via flood-fill edge processing, with direct export to the Studio asset pipeline.',
      pl: 'Pipeline generowania packszotów 2K dla meblarstwa, zasilany modelem Gemini Flash Image. Tworzy fotorealistyczne arkusze siatki 2×2 lub ujęcia Hero na białym tle, weryfikowane przez 4-filarową bramkę Visual QA. Zintegrowany Alpha Cutout Engine produkuje przezroczyste PNG zerowym kosztem.',
    },
    features: {
      en: ['2K packshot generation: 2×2 grid + Hero 1×1', '4-pillar Visual QA gate (purity, count, clearance, orientation)', 'Alpha Cutout Engine — flood-fill RGBA, zero token cost', '15+ furniture and decor categories', 'Dark Web UI + CLI; manifest-synced Studio export'],
      pl: ['Generowanie 2K: siatka 2×2 + Hero 1×1', '4-filarowa bramka Visual QA', 'Alpha Cutout Engine — RGBA zerowym kosztem tokenów', 'Ponad 15 kategorii mebli i dekoracji', 'Ciemny Web UI + CLI; eksport zsynchronizowany z manifest.json'],
    },
    tech: ['Python', 'FastAPI', 'Vertex AI', 'Gemini Flash Image', 'Pillow', 'pytest'],
    featured: false, gradient: 'from-emerald-500 to-teal-600', icon: '📦',
  },
  {
    id: 'comfyui-vertex-studio',
    name: 'ComfyUI-Vertex-Studio',
    nameDisplay: 'ComfyUI Vertex Studio',
    isPublic: false,
    repoUrl: 'https://github.com/P3rgam0n/ComfyUI-Vertex-Studio',
    category: 'ComfyUI Plugins',
    status: 'Production',
    tagline: { en: 'Enterprise ComfyUI node for Google Cloud Vertex AI + Gemini', pl: 'Profesjonalny węzeł ComfyUI dla Vertex AI i Gemini' },
    description: {
      en: 'An enterprise-grade ComfyUI custom node for Google Cloud Vertex AI image generation, supporting Gemini flash-image, Gemini pro-image, and Imagen 3 with resolution tiers from 512 px to 4K. A 4-strategy authentication waterfall covers all GCP patterns without manual configuration. Supports chaining up to 14 reference images with semantic role conditioning. MIT licensed.',
      pl: 'Profesjonalny węzeł niestandardowy ComfyUI dla generowania obrazów w Google Cloud Vertex AI, obsługujący Gemini flash-image, Gemini pro-image oraz Imagen 3 w rozdzielczościach 512 px–4K. Czteropoziomowy waterfall autentykacji obsługuje wszystkie wzorce GCP. Do 14 obrazów referencyjnych z rolami semantycznymi. Licencja MIT.',
    },
    features: {
      en: ['4 Gemini / Imagen models — 512 px to 4K resolution', '4-strategy auth: gcloud OAuth → ADC → API key → bearer', 'Up to 14 chained reference images with semantic roles', 'Intelligent aspect ratio detection and resolution snapping', 'Prompt Enhancer node (Gemini 2.0 Flash); MIT license'],
      pl: ['4 modele Gemini / Imagen — 512 px do 4K', '4-poziomowy waterfall: OAuth → ADC → API key → bearer', 'Do 14 łańcuchowanych obrazów z rolami semantycznymi', 'Inteligentne dopasowanie proporcji i rozdzielczości', 'Węzeł Prompt Enhancer (Gemini 2.0 Flash); licencja MIT'],
    },
    tech: ['Python 3.10+', 'ComfyUI', 'Vertex AI', 'Gemini 3', 'Imagen 3', 'OAuth2'],
    featured: true, gradient: 'from-violet-600 to-purple-700', icon: '🎨',
  },
  {
    id: 'comfyui-imageagent-studio',
    name: 'ComfyUI-ImageAgent-Studio',
    nameDisplay: 'ComfyUI ImageAgent Studio',
    isPublic: false,
    category: 'ComfyUI Plugins',
    status: 'Production',
    tagline: { en: 'Multi-provider ComfyUI node with anti-hallucination prompt architecture', pl: 'Węzeł ComfyUI łączący 5 dostawców AI' },
    description: {
      en: 'A commercial-grade ComfyUI custom node suite unifying five AI provider backends — Antigravity CLI, OpenAI, Anthropic Claude, Google Gemini, and Ollama — through a single node interface. The ImageAgent Prompt Architect preserves visual reference tags with 100% fidelity via a Unicode tag guard and eliminates generic AI filler through an anti-buzzword layer. Zero heavy dependencies.',
      pl: 'Profesjonalny pakiet węzłów ComfyUI łączący pięciu dostawców AI — AGY CLI, OpenAI, Anthropic Claude, Google Gemini i Ollama — w jednym interfejsie. ImageAgent Prompt Architect zachowuje wizualne tagi referencyjne ze 100% wiernością i eliminuje generyczne wypełniacze promptów. Zero ciężkich zależności.',
    },
    features: {
      en: ['Unified 5-provider hub: OpenAI · Anthropic · Gemini · Ollama · AGY', '100% visual reference tag preservation via Unicode guard', 'Knowledge Vault 3D rendering physics (AO, penumbra)', 'Anti-hallucination geometry guardrails + anti-buzzword sanitizer', 'Zero heavy dependencies — clean ComfyUI installation'],
      pl: ['Hub 5 dostawców: OpenAI · Anthropic · Gemini · Ollama · AGY', '100% zachowanie tagów referencyjnych przez strażnika Unicode', 'Fizyka renderowania 3D z Bazy Wiedzy (AO, półcień)', 'Guardrails antyhalucynacyjne + sanitizer antybuzzword', 'Zero ciężkich zależności — czysta instalacja'],
    },
    tech: ['Python 3.10-3.12', 'ComfyUI', 'OpenAI', 'Anthropic Claude', 'Google Gemini', 'Ollama'],
    featured: false, gradient: 'from-fuchsia-600 to-pink-700', icon: '🧠',
  },
  {
    id: 'comfyui-furniture-studio',
    name: 'ComfyUI-Furniture-Studio',
    nameDisplay: 'ComfyUI Furniture Studio',
    isPublic: false,
    category: 'ComfyUI Plugins',
    status: 'Production',
    tagline: { en: 'PBR-physics ComfyUI nodes for photorealistic furniture visualization', pl: 'Węzły ComfyUI z fizyką PBR do wizualizacji mebli' },
    description: {
      en: 'A professional ComfyUI node suite for photorealistic furniture visualization implementing PBR material physics, including Fresnel reflection and microsurface modeling. A 3-stage contact shadow and ambient occlusion engine grounds objects in architectural scenes. Three lens profiles and a multi-view turnaround matrix enable full product photography workflows. 48 tests.',
      pl: 'Profesjonalny pakiet węzłów ComfyUI do fotorealistycznej wizualizacji mebli, implementujący fizykę materiałów PBR z odbiciami Fresnela. 3-etapowy silnik cieni kontaktowych i okluzji otoczenia. Trzy profile obiektywów i macierz obrotów widoków do pełnych sesji fotografii produktowej. 48 testów.',
    },
    features: {
      en: ['PBR microsurface physics: Fresnel reflection for 20+ materials', '3-stage contact shadow + ambient occlusion grounding engine', 'Lens profiles: 85 mm hero · 50 mm standard · 100 mm macro', 'Multi-view turnaround matrix for 360° catalogue photography', 'Native dark UI: swatch picker, lens selector, light dial; 48 tests'],
      pl: ['Fizyka PBR: Fresnel dla ponad 20 typów materiałów', '3-etapowy silnik cieni kontaktowych + AO', 'Profile obiektywów: 85 mm · 50 mm · 100 mm makro', 'Macierz widoków 360° do fotografii katalogowej', 'Natywny ciemny UI: próbniki, selektor obiektywu; 48 testów'],
    },
    tech: ['Python', 'ComfyUI', 'PBR physics', 'JavaScript UI widgets', 'pytest'],
    featured: false, gradient: 'from-amber-500 to-orange-600', icon: '🛏️',
  },
  {
    id: 'wintiles',
    name: 'WinTiles',
    nameDisplay: 'WinTiles',
    isPublic: true,
    repoUrl: 'https://github.com/P3rgam0n/WinTiles',
    category: 'Windows Utilities',
    status: 'Production',
    tagline: { en: 'Windows 11 productivity launcher with 14 action types', pl: 'Launcher produktywności Windows 11 z 14 typami akcji' },
    description: {
      en: 'A lightweight Windows 11 productivity launcher built with Python and Tkinter, providing tile-based access to 14 categories of actions — websites, folders, applications, scripts, WSL commands, VS Code workspaces, and clipboard snippets. Tiles support drag-and-drop reordering, six sort modes, and optional info tooltips. Distributed as a standalone .exe via GitHub Releases — no Python installation required.',
      pl: 'Lekki launcher produktywności dla Windows 11 w Python i Tkinter, oferujący kafelkowy dostęp do 14 kategorii akcji — strony, foldery, aplikacje, skrypty, komendy WSL, workspace\'y VS Code i snippety. Kafelki obsługują przeciąganie, sześć trybów sortowania i tooltopy z opisami. Standalone .exe przez GitHub Releases.',
    },
    features: {
      en: ['14 action types: URL · path · exe · ps1 · python · bat · wsl · clipboard · vscode and more', 'Drag-and-drop reorder + 6 sort modes (manual, most used, recent, A–Z)', 'Ctrl+scroll for live window transparency (10–100%)', 'Tri-state window lock: normal / always-on-top / click-through', 'Standalone .exe — no Python required; GitHub Actions CI/CD releases'],
      pl: ['14 typów akcji: URL · ścieżka · exe · ps1 · python · bat · wsl · schowek · vscode i inne', 'Przeciąganie kafelków + 6 trybów sortowania', 'Ctrl+scroll do przezroczystości okna (10–100%)', 'Trójstanowa blokada okna: normalne / na wierzchu / click-through', 'Standalone .exe bez instalacji Python; releasy przez GitHub Actions'],
    },
    tech: ['Python', 'Tkinter', 'Win32 API', 'ctypes', 'PyInstaller', 'GitHub Actions'],
    featured: true, gradient: 'from-green-500 to-emerald-600', icon: '🪟',
  },
  {
    id: 'monitor-window-relocator',
    name: 'MonitorWindowRelocator',
    nameDisplay: 'Monitor Window Relocator',
    isPublic: true,
    repoUrl: 'https://github.com/P3rgam0n/MonitorWindowRelocator',
    category: 'Windows Utilities',
    status: 'Production',
    tagline: { en: 'Multi-monitor window rescue utility for Windows', pl: 'Narzędzie do ratowania okien na wielu monitorach Windows' },
    description: {
      en: 'A Windows multi-monitor utility that rescues windows disappearing off-screen after display configuration changes. Provides a GUI with a live window list and display map, silent CLI mode for scripting, and configurable global hotkeys. Ships with 63 automated tests, GitHub Actions release automation, and full EN/PL localization.',
      pl: 'Narzędzie Windows ratujące okna znikające poza ekranem po zmianie konfiguracji monitorów. GUI z listą okien i mapą monitorów, tryb CLI i konfigurowalne skróty globalne. 63 testy automatyczne, releasy przez GitHub Actions, pełna obsługa PL/EN.',
    },
    features: {
      en: ['One-click recovery of all off-screen windows', 'Move active window: to cursor monitor / to monitor N / gather all', 'Configurable global hotkeys via GUI settings', 'CLI: --gather · --to-cursor · --mon N · --lang · --theme', '63 tests; EN/PL i18n; dark / light / system theme'],
      pl: ['Jednym kliknięciem odzysk okien poza ekranem', 'Przenoszenie okna: do monitora kursora / do monitora N / zbierz', 'Konfigurowalne skróty globalne przez GUI', 'CLI: --gather · --to-cursor · --mon N · --lang · --theme', '63 testy; i18n PL/EN; motyw ciemny / jasny / systemowy'],
    },
    tech: ['Python', 'Win32 API', 'ctypes', 'Tkinter', 'PyInstaller', 'GitHub Actions'],
    featured: false, gradient: 'from-blue-500 to-indigo-600', icon: '🖥️',
  },
  {
    id: 'deskirozdzielcze-pl',
    name: 'deskirozdzielcze.pl',
    nameDisplay: 'Airbagsystems — Commercial Web Project',
    isPublic: false,
    category: 'Web Development',
    status: 'Commercial',
    tagline: { en: 'Multilingual commercial website — Astro + Tailwind', pl: 'Wielojęzyczna strona komercyjna — Astro + Tailwind' },
    description: {
      en: 'A commercial multilingual website for an automotive parts supplier, built with Astro and Tailwind CSS for performance-first static generation. Available in four languages (PL/EN/DE/RU) with automated FTP deployment via a Python sync script. Demonstrates production Astro architecture with reusable component patterns and multi-language routing.',
      pl: 'Komercyjna wielojęzyczna strona dla dostawcy części motoryzacyjnych, zbudowana w Astro i Tailwind CSS. Dostępna w 4 językach (PL/EN/DE/RU) z automatycznym wdrożeniem FTP przez skrypt Python. Demonstruje produkcyjną architekturę Astro z wielokrotnym użytkiem komponentów.',
    },
    features: {
      en: ['4-language support: PL · EN · DE · RU with routing structure', 'Astro static generation + Tailwind CSS', 'PHP contact form + WhatsApp integration + Cookie banner', 'Automated Python FTP deploy script', 'Commercial client delivery — production deployment'],
      pl: ['4 języki: PL · EN · DE · RU ze strukturą routingu', 'Astro generacja statyczna + Tailwind CSS', 'Formularz PHP + WhatsApp + baner RODO', 'Automatyczny skrypt wdrożenia FTP w Pythonie', 'Dostarczony klientowi — wdrożenie produkcyjne'],
    },
    tech: ['Astro', 'Tailwind CSS', 'PHP', 'Python', 'FTP deployment'],
    featured: false, gradient: 'from-slate-500 to-gray-600', icon: '🌐',
  },
  {
    id: 'georgia-flight-monitor',
    name: 'georgia-flight-monitor',
    nameDisplay: 'Georgia Flight Monitor',
    isPublic: false,
    category: 'Experiments',
    status: 'Active',
    tagline: { en: 'Flight price tracker POZ ↔ KUT with multi-channel alerts', pl: 'Tracker cen lotów POZ ↔ KUT z wielokanałowymi alertami' },
    description: {
      en: 'A production-grade flight price monitoring system for the Poznań ↔ Kutaisi route, built around a 3-tier resilient scraper cascading from the Wizz Air API through Google Flights (Playwright) to Kiwi. Prices persist in SQLite WAL with round-trip optimization for 4–8 day stays. Multi-channel notifications on price drops and historical minimums. 44 tests.',
      pl: 'Produkcyjny system monitorowania cen lotów POZ ↔ KUT z 3-poziomowym scraperem: Wizz Air API → Google Flights (Playwright) → Kiwi. SQLite WAL z optymalizacją round-trip dla pobytów 4–8 dni. Wielokanałowe powiadomienia przy spadkach cen i minimach historycznych. 44 testy.',
    },
    features: {
      en: ['3-tier resilient scraper: Wizz Air API → Google Flights → Kiwi', 'Round-trip matching for 4–8 day stay windows', 'SQLite WAL: price drop + historical minimum detection', 'Telegram · Discord · Email notifications', 'Daemon loop + cron / GitHub Actions modes; 44 tests'],
      pl: ['3-poziomowy scraper: Wizz Air API → Google Flights → Kiwi', 'Matching lotów powrotnych 4–8 dni', 'SQLite WAL: spadki cen + historyczne minima', 'Telegram · Discord · Email', 'Daemon + cron / GitHub Actions; 44 testy'],
    },
    tech: ['Python', 'Playwright', 'SQLite', 'Telegram Bot API', 'Discord Webhooks', 'SMTP'],
    featured: false, gradient: 'from-rose-500 to-red-600', icon: '✈️',
  },
  {
    id: 'chinczyk',
    name: 'chinczyk',
    nameDisplay: 'Chińczyk RL Bot',
    isPublic: false,
    category: 'Experiments',
    status: 'Active',
    tagline: { en: 'Reinforcement learning Ludo bot for kurnik.pl', pl: 'Bot do Chińczyka z uczeniem ze wzmocnieniem' },
    description: {
      en: 'A reinforcement learning bot for the Ludo board game on the kurnik.pl platform, combining a Python game engine with Node.js/Playwright browser automation via a custom WebSocket protocol decoder. The Q-learning engine extracts tactical features from live game state and maintains trained weight checkpoints. 197 Python tests + 147 JavaScript tests.',
      pl: 'Bot z uczeniem ze wzmocnieniem do gry Chińczyk na kurnik.pl, łączący silnik gry w Pythonie z automatyzacją przeglądarki Node.js/Playwright przez dekoder protokołu WebSocket. Silnik Q-learning wyodrębnia cechy taktyczne ze stanu gry na żywo. 197 testów Python + 147 testów JavaScript.',
    },
    features: {
      en: ['Live browser automation via Playwright + WebSocket protocol', 'Q-learning engine with tactical FeaturePolicy extraction', 'Python simulator with self-play training (2000+ episodes)', 'Trained weight checkpoints for deployment', '197 Python tests + 147 Jest tests'],
      pl: ['Automatyzacja przeglądarki przez Playwright + WebSocket', 'Silnik Q-learning z ekstrakcją FeaturePolicy', 'Symulator Python z treningiem self-play (2000+ epizodów)', 'Checkpointy wytrenowanych wag do wdrożenia', '197 testów Python + 147 testów Jest'],
    },
    tech: ['Python', 'Node.js', 'Playwright', 'WebSocket', 'Q-learning', 'Jest', 'pytest'],
    featured: false, gradient: 'from-yellow-500 to-amber-600', icon: '🎲',
  },
];

export const techStack = [
  { name: 'Python', icon: '🐍', level: 'Expert' as const },
  { name: 'Google Cloud / Vertex AI', icon: '☁️', level: 'Expert' as const },
  { name: 'Gemini / LLM APIs', icon: '✨', level: 'Expert' as const },
  { name: 'ComfyUI', icon: '🎨', level: 'Expert' as const },
  { name: 'Amazon Bedrock', icon: '🦙', level: 'Advanced' as const },
  { name: 'Astro', icon: '🚀', level: 'Advanced' as const },
  { name: 'Tailwind CSS', icon: '💨', level: 'Advanced' as const },
  { name: 'FastAPI', icon: '⚡', level: 'Advanced' as const },
  { name: 'MCP Protocol', icon: '🔌', level: 'Advanced' as const },
  { name: 'Playwright', icon: '🎭', level: 'Advanced' as const },
  { name: 'Kotlin / Android', icon: '📱', level: 'Intermediate' as const },
  { name: 'Node.js', icon: '🟢', level: 'Intermediate' as const },
  { name: 'SQLite', icon: '🗄️', level: 'Advanced' as const },
  { name: 'GitHub Actions', icon: '🤖', level: 'Advanced' as const },
  { name: 'Win32 API', icon: '🪟', level: 'Advanced' as const },
  { name: 'TypeScript', icon: '📘', level: 'Intermediate' as const },
];

export const categories: ProjectCategory[] = [
  'AI & Automation',
  'ComfyUI Plugins',
  'Windows Utilities',
  'Web Development',
  'Experiments',
];
