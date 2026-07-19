"use strict";

// All visible interface text lives here so the page stays easy to translate.
const translations = {
  en: {
    meta: {
      title: "Minecraft Control Center — A modern control platform for Minecraft",
      description: "Minecraft Control Center connects Minecraft to a lightweight Fabric Bridge, a Python Core and a modern web dashboard."
    },
    accessibility: { skip: "Skip to content" },
    nav: {
      homeLabel: "Minecraft Control Center home",
      open: "Open navigation",
      close: "Close navigation",
      primary: "Primary navigation",
      home: "Home",
      features: "Features",
      architecture: "Architecture",
      roadmap: "Roadmap",
      documentation: "Documentation",
      faq: "FAQ",
      github: "GitHub"
    },
    language: { label: "Language" },
    common: {
      version: "Version",
      codename: "Codename",
      earlyDevelopment: "Early Development",
      protocol: "Protocol"
    },
    hero: {
      eyebrow: "SYSTEM FOUNDATION ACTIVE",
      tagline: "A modern control platform for Minecraft.",
      description: "MCC connects Minecraft to an external control system through a lightweight Fabric Bridge, a Python Core and a modern web dashboard.",
      metadata: "Project metadata",
      githubButton: "View on GitHub",
      docsButton: "Read Documentation",
      roadmapButton: "Explore Roadmap",
      flowLabel: "Minecraft Control Center data flow",
      live: "LIVE",
      local: "LOCAL",
      flowClient: "Java client",
      flowCapabilities: "Capability layer",
      flowProtocol: "Versioned transport",
      flowIntelligence: "Intelligence layer",
      flowInterface: "Interface layer",
      terminalMessage: "architecture mapped"
    },
    status: {
      tag: "SYSTEM STATUS",
      title: "Built in the open, one layer at a time.",
      intro: "MCC is in early development. The foundation is documented; implementation begins with the Fabric Bridge.",
      planned: "Planned",
      protocolName: "Communication Protocol",
      designed: "Designed",
      documentationName: "Documentation",
      inProgress: "In Progress",
      online: "Online",
      estimate: "ESTIMATED OVERALL DEVELOPMENT",
      estimateNote: "Directional estimate — not a release commitment",
      progressLabel: "Estimated overall development: 12 percent"
    },
    features: {
      tag: "PLANNED CAPABILITIES",
      title: "Control, observe, automate.",
      intro: "A focused toolkit for understanding Minecraft state and acting on it through clear, validated controls.",
      telemetry: { title: "Real-time player telemetry", text: "Live health, position, movement and game-state data." },
      inventory: { title: "Inventory monitoring", text: "A clear view of slots, equipment and item changes." },
      entities: { title: "Entity scanning", text: "Structured awareness of nearby entities." },
      blocks: { title: "Block scanning", text: "Query nearby blocks and local environment data." },
      controls: { title: "Player controls", text: "Validated movement, interaction and action commands." },
      stop: { title: "Emergency stop", text: "A direct, visible way to halt active automation." },
      screenshot: { title: "Screenshot capture", text: "Request visual snapshots through the Bridge." },
      automation: { title: "Automation engine", text: "Coordinate repeatable workflows from MCC Core." },
      profiles: { title: "Profiles", text: "Keep environments and preferences organized." },
      statistics: { title: "SQLite statistics", text: "Store focused historical data locally." },
      lua: { title: "Lua scripting", text: "Create restricted scripts in a controlled environment." },
      plugins: { title: "Plugin system", text: "Extend MCC through defined integration points." },
      discord: { title: "Discord integration", text: "Optional notifications and webhook workflows." },
      relay: { title: "Remote relay", text: "Secure remote access as a later ecosystem layer." },
      responsive: { title: "Responsive dashboard", text: "A practical interface across desktop and mobile." }
    },
    architecture: {
      tag: "OFFICIAL ARCHITECTURE",
      title: "Separated by responsibility. Connected by protocol.",
      intro: "Each component has one clear role, keeping MCC modular, maintainable and ready to evolve.",
      label: "Official MCC architecture",
      clientShort: "GAME STATE",
      bridgeShort: "CAPABILITIES",
      protocolTitle: "Versioned WebSocket Protocol",
      coreShort: "INTELLIGENCE",
      dashboardShort: "INTERFACE",
      bridgePrinciple: "The Fabric Bridge provides capabilities.",
      bridgeOne: "Reads telemetry and game events",
      bridgeTwo: "Executes validated commands",
      bridgeThree: "Reports supported capabilities",
      corePrinciple: "MCC Core contains the intelligence.",
      coreOne: "Coordinates connections and state",
      coreTwo: "Runs automation and profiles",
      coreThree: "Manages local data, logs and configuration",
      dashboardPrinciple: "The Web Dashboard provides the user interface.",
      dashboardOne: "Presents live Minecraft data",
      dashboardTwo: "Provides manual and emergency controls",
      dashboardThree: "Adapts to desktop and mobile screens"
    },
    roadmap: {
      tag: "DELIVERY SEQUENCE",
      title: "From bridge to ecosystem.",
      intro: "Six focused phases turn the documented foundation into a complete control platform.",
      phase: "PHASE",
      next: "Next Step",
      one: {
        summary: "Establish the lightweight Fabric connection between Minecraft and MCC.",
        itemOne: "Local WebSocket connection",
        itemTwo: "Telemetry and scanning",
        itemThree: "Validated controls and emergency stop"
      },
      two: {
        summary: "Build the Python coordination layer where state and automation live.",
        itemOne: "Connection and event management",
        itemTwo: "Profiles and SQLite data",
        itemThree: "Automation-ready architecture"
      },
      three: {
        summary: "Deliver the responsive interface for visibility and control.",
        itemOne: "Live dashboard and console",
        itemTwo: "Inventory and manual controls",
        itemThree: "Bilingual responsive interface"
      },
      four: {
        title: "Advanced Features",
        summary: "Expand automation, navigation, scripting and integrations.",
        itemOne: "Mini-map and waypoints",
        itemTwo: "Restricted Lua scripting",
        itemThree: "Plugins and Discord workflows"
      },
      five: {
        summary: "Connect multiple environments through secure optional services.",
        itemOne: "Secure remote relay",
        itemTwo: "Multiple Minecraft instances",
        itemThree: "Community and public documentation"
      },
      six: {
        summary: "Unify installation, updates, profiles and launches.",
        itemOne: "Guided MCC installation",
        itemTwo: "Component and Fabric updates",
        itemThree: "Unified profile and launch control"
      },
      full: "View the full roadmap"
    },
    security: {
      tag: "SECURITY & PRIVACY",
      title: "Safety is part of the architecture.",
      intro: "MCC is designed around local control, explicit access and constrained capabilities.",
      local: "Local-only by default",
      validation: "Strict command validation",
      stop: "Emergency stop",
      collection: "No hidden data collection",
      minimal: "Minimal stored information",
      execution: "No arbitrary code execution",
      auth: "Authentication required for remote access",
      logs: "Clear logs",
      scripting: "Restricted scripting environment"
    },
    documentation: {
      tag: "PROJECT FILES",
      title: "Start with the source of truth.",
      intro: "Read the project goals, architecture, protocol and delivery plan directly in the repository.",
      readme: "Project overview and goals",
      roadmap: "Development phases and features",
      version: "Current version and compatibility",
      vision: "Principles and long-term direction",
      architecture: "Components and responsibilities",
      protocol: "WebSocket communication model"
    },
    faq: {
      tag: "FREQUENT QUESTIONS",
      title: "Clear answers, current scope.",
      intro: "What MCC is today, what it is planned to become and where to follow its progress.",
      one: {
        question: "What is MCC?",
        answer: "Minecraft Control Center is a planned external control platform that connects a Minecraft client to a Python Core and a modern web dashboard through a lightweight Fabric Bridge."
      },
      two: {
        question: "Is MCC currently available?",
        answer: "Not yet. MCC is currently in early development, with work focused on architecture, documentation and protocol design."
      },
      three: {
        question: "Which Minecraft version will be supported first?",
        answer: "The first version targets Minecraft Java 1.21.11 with Fabric."
      },
      four: {
        question: "Is MCC a Minecraft mod?",
        answer: "MCC includes a Fabric mod, but the complete project also includes a Python Core and a web dashboard."
      },
      five: {
        question: "Does MCC require a server?",
        answer: "No dedicated server is planned for normal use. MCC is designed to run locally by default alongside the Minecraft client."
      },
      six: {
        question: "Will MCC work remotely?",
        answer: "Secure remote access is planned for a later ecosystem phase. It will require authentication and will remain optional."
      },
      seven: {
        question: "Is MCC open source?",
        answer: "The repository is publicly accessible. Distribution and licensing terms will be defined separately."
      },
      eight: {
        question: "Does MCC collect personal data?",
        answer: "MCC is designed with no hidden data collection and minimal local storage. Clear logs will make system activity visible."
      },
      nine: {
        question: "Will MCC support automation?",
        answer: "Yes. Automation is a core goal, with workflows managed by MCC Core and a restricted scripting environment planned for a later phase."
      },
      ten: {
        question: "Where can I follow development?",
        answer: "Follow the public GitHub repository and its roadmap for the latest project updates."
      }
    },
    contact: {
      tag: "CONTACT CHANNEL",
      title: "Connect with the project.",
      intro: "Questions about MCC, its roadmap or future collaboration are welcome.",
      copyLabel: "Copy MCCproject@proton.me to clipboard",
      emailLabel: "OFFICIAL EMAIL",
      github: "Open GitHub",
      discord: "Discord community — Coming later",
      copied: "Email copied to clipboard.",
      copyFailed: "Copy failed. Select the address manually."
    },
    footer: {
      description: "A modern control platform for Minecraft.",
      navigation: "Footer navigation",
      contact: "Contact",
      legal: "Minecraft Control Center is an independent project and is not affiliated with Mojang Studios or Microsoft."
    },
    error: {
      metaTitle: "Page not found — Minecraft Control Center",
      description: "The requested Minecraft Control Center page could not be found.",
      title: "Page not found",
      message: "The requested route is outside the mapped system. Return to the MCC home page to continue.",
      home: "Return home"
    },
    backToTop: "Back to top"
  },

  fr: {
    meta: {
      title: "Minecraft Control Center — Une plateforme de contrôle moderne pour Minecraft",
      description: "Minecraft Control Center relie Minecraft à un Bridge Fabric léger, un Core Python et un tableau de bord web moderne."
    },
    accessibility: { skip: "Aller au contenu" },
    nav: {
      homeLabel: "Accueil de Minecraft Control Center",
      open: "Ouvrir la navigation",
      close: "Fermer la navigation",
      primary: "Navigation principale",
      home: "Accueil",
      features: "Fonctionnalités",
      architecture: "Architecture",
      roadmap: "Feuille de route",
      documentation: "Documentation",
      faq: "FAQ",
      github: "GitHub"
    },
    language: { label: "Langue" },
    common: {
      version: "Version",
      codename: "Nom de code",
      earlyDevelopment: "Développement initial",
      protocol: "Protocole"
    },
    hero: {
      eyebrow: "FONDATION DU SYSTÈME ACTIVE",
      tagline: "Une plateforme de contrôle moderne pour Minecraft.",
      description: "MCC relie Minecraft à un système de contrôle externe grâce à un Bridge Fabric léger, un Core Python et un tableau de bord web moderne.",
      metadata: "Métadonnées du projet",
      githubButton: "Voir sur GitHub",
      docsButton: "Lire la documentation",
      roadmapButton: "Explorer la feuille de route",
      flowLabel: "Flux de données de Minecraft Control Center",
      live: "ACTIF",
      local: "LOCAL",
      flowClient: "Client Java",
      flowCapabilities: "Couche de capacités",
      flowProtocol: "Transport versionné",
      flowIntelligence: "Couche d’intelligence",
      flowInterface: "Couche d’interface",
      terminalMessage: "architecture cartographiée"
    },
    status: {
      tag: "ÉTAT DU SYSTÈME",
      title: "Construit publiquement, une couche à la fois.",
      intro: "MCC est au début de son développement. La fondation est documentée ; l’implémentation commencera par le Bridge Fabric.",
      planned: "Planifié",
      protocolName: "Protocole de communication",
      designed: "Conçu",
      documentationName: "Documentation",
      inProgress: "En cours",
      online: "En ligne",
      estimate: "ESTIMATION DU DÉVELOPPEMENT GLOBAL",
      estimateNote: "Estimation indicative — aucun engagement de livraison",
      progressLabel: "Estimation du développement global : 12 pour cent"
    },
    features: {
      tag: "CAPACITÉS PRÉVUES",
      title: "Contrôler, observer, automatiser.",
      intro: "Une boîte à outils ciblée pour comprendre l’état de Minecraft et agir grâce à des commandes claires et validées.",
      telemetry: { title: "Télémétrie du joueur en temps réel", text: "Santé, position, mouvements et état du jeu en direct." },
      inventory: { title: "Surveillance de l’inventaire", text: "Une vue claire des emplacements, de l’équipement et des changements d’objets." },
      entities: { title: "Analyse des entités", text: "Une perception structurée des entités à proximité." },
      blocks: { title: "Analyse des blocs", text: "Interrogation des blocs proches et des données de l’environnement local." },
      controls: { title: "Contrôles du joueur", text: "Commandes validées de mouvement, d’interaction et d’action." },
      stop: { title: "Arrêt d’urgence", text: "Un moyen direct et visible d’interrompre toute automatisation active." },
      screenshot: { title: "Capture d’écran", text: "Demande d’instantanés visuels par l’intermédiaire du Bridge." },
      automation: { title: "Moteur d’automatisation", text: "Coordination de processus reproductibles depuis MCC Core." },
      profiles: { title: "Profils", text: "Organisation des environnements et des préférences." },
      statistics: { title: "Statistiques SQLite", text: "Stockage local de données historiques ciblées." },
      lua: { title: "Scripts Lua", text: "Création de scripts restreints dans un environnement contrôlé." },
      plugins: { title: "Système d’extensions", text: "Extension de MCC au moyen de points d’intégration définis." },
      discord: { title: "Intégration Discord", text: "Notifications et processus webhook facultatifs." },
      relay: { title: "Relais distant", text: "Accès distant sécurisé dans une future couche de l’écosystème." },
      responsive: { title: "Tableau de bord adaptatif", text: "Une interface pratique sur ordinateur et mobile." }
    },
    architecture: {
      tag: "ARCHITECTURE OFFICIELLE",
      title: "Séparée par responsabilité. Reliée par protocole.",
      intro: "Chaque composant possède un rôle précis, pour que MCC reste modulaire, maintenable et prêt à évoluer.",
      label: "Architecture officielle de MCC",
      clientShort: "ÉTAT DU JEU",
      bridgeShort: "CAPACITÉS",
      protocolTitle: "Protocole WebSocket versionné",
      coreShort: "INTELLIGENCE",
      dashboardShort: "INTERFACE",
      bridgePrinciple: "Le Bridge Fabric fournit les capacités.",
      bridgeOne: "Lit la télémétrie et les événements du jeu",
      bridgeTwo: "Exécute les commandes validées",
      bridgeThree: "Déclare les capacités prises en charge",
      corePrinciple: "MCC Core contient l’intelligence.",
      coreOne: "Coordonne les connexions et l’état",
      coreTwo: "Exécute les automatisations et les profils",
      coreThree: "Gère les données locales, les journaux et la configuration",
      dashboardPrinciple: "Le tableau de bord web fournit l’interface utilisateur.",
      dashboardOne: "Présente les données Minecraft en direct",
      dashboardTwo: "Fournit les contrôles manuels et d’urgence",
      dashboardThree: "S’adapte aux écrans d’ordinateur et de mobile"
    },
    roadmap: {
      tag: "SÉQUENCE DE LIVRAISON",
      title: "Du Bridge à l’écosystème.",
      intro: "Six phases ciblées transformeront la fondation documentée en une plateforme de contrôle complète.",
      phase: "PHASE",
      next: "Prochaine étape",
      one: {
        summary: "Établir la connexion Fabric légère entre Minecraft et MCC.",
        itemOne: "Connexion WebSocket locale",
        itemTwo: "Télémétrie et analyses",
        itemThree: "Contrôles validés et arrêt d’urgence"
      },
      two: {
        summary: "Construire la couche de coordination Python où résident l’état et l’automatisation.",
        itemOne: "Gestion des connexions et des événements",
        itemTwo: "Profils et données SQLite",
        itemThree: "Architecture prête pour l’automatisation"
      },
      three: {
        summary: "Fournir l’interface adaptative de visibilité et de contrôle.",
        itemOne: "Tableau de bord et console en direct",
        itemTwo: "Inventaire et contrôles manuels",
        itemThree: "Interface bilingue et adaptative"
      },
      four: {
        title: "Fonctionnalités avancées",
        summary: "Étendre l’automatisation, la navigation, les scripts et les intégrations.",
        itemOne: "Mini-carte et points de passage",
        itemTwo: "Scripts Lua restreints",
        itemThree: "Extensions et processus Discord"
      },
      five: {
        summary: "Relier plusieurs environnements grâce à des services facultatifs sécurisés.",
        itemOne: "Relais distant sécurisé",
        itemTwo: "Plusieurs instances Minecraft",
        itemThree: "Communauté et documentation publique"
      },
      six: {
        summary: "Unifier l’installation, les mises à jour, les profils et les lancements.",
        itemOne: "Installation guidée de MCC",
        itemTwo: "Mises à jour des composants et de Fabric",
        itemThree: "Gestion unifiée des profils et du lancement"
      },
      full: "Voir la feuille de route complète"
    },
    security: {
      tag: "SÉCURITÉ ET CONFIDENTIALITÉ",
      title: "La sécurité fait partie de l’architecture.",
      intro: "MCC est conçu autour du contrôle local, d’un accès explicite et de capacités limitées.",
      local: "Fonctionnement local par défaut",
      validation: "Validation stricte des commandes",
      stop: "Arrêt d’urgence",
      collection: "Aucune collecte de données cachée",
      minimal: "Informations stockées au minimum",
      execution: "Aucune exécution de code arbitraire",
      auth: "Authentification obligatoire pour l’accès distant",
      logs: "Journaux clairs",
      scripting: "Environnement de scripts restreint"
    },
    documentation: {
      tag: "FICHIERS DU PROJET",
      title: "Commencez par la source de vérité.",
      intro: "Consultez les objectifs, l’architecture, le protocole et le plan de livraison directement dans le dépôt.",
      readme: "Présentation et objectifs du projet",
      roadmap: "Phases de développement et fonctionnalités",
      version: "Version actuelle et compatibilité",
      vision: "Principes et direction à long terme",
      architecture: "Composants et responsabilités",
      protocol: "Modèle de communication WebSocket"
    },
    faq: {
      tag: "QUESTIONS FRÉQUENTES",
      title: "Des réponses claires, un périmètre actuel.",
      intro: "Ce qu’est MCC aujourd’hui, ce qu’il est prévu de devenir et où suivre sa progression.",
      one: {
        question: "Qu’est-ce que MCC ?",
        answer: "Minecraft Control Center est une plateforme de contrôle externe prévue pour relier un client Minecraft à un Core Python et à un tableau de bord web moderne grâce à un Bridge Fabric léger."
      },
      two: {
        question: "MCC est-il actuellement disponible ?",
        answer: "Pas encore. MCC est au début de son développement, avec des travaux centrés sur l’architecture, la documentation et la conception du protocole."
      },
      three: {
        question: "Quelle version de Minecraft sera prise en charge en premier ?",
        answer: "La première version cible Minecraft Java 1.21.11 avec Fabric."
      },
      four: {
        question: "MCC est-il un mod Minecraft ?",
        answer: "MCC comprend un mod Fabric, mais le projet complet inclut également un Core Python et un tableau de bord web."
      },
      five: {
        question: "MCC nécessite-t-il un serveur ?",
        answer: "Aucun serveur dédié n’est prévu pour un usage normal. MCC est conçu pour fonctionner localement par défaut, aux côtés du client Minecraft."
      },
      six: {
        question: "MCC fonctionnera-t-il à distance ?",
        answer: "Un accès distant sécurisé est prévu dans une phase ultérieure de l’écosystème. Il nécessitera une authentification et restera facultatif."
      },
      seven: {
        question: "MCC est-il open source ?",
        answer: "Le dépôt est accessible publiquement. Les conditions de distribution et de licence seront définies séparément."
      },
      eight: {
        question: "MCC collecte-t-il des données personnelles ?",
        answer: "MCC est conçu sans collecte de données cachée et avec un stockage local minimal. Des journaux clairs rendront l’activité du système visible."
      },
      nine: {
        question: "MCC prendra-t-il en charge l’automatisation ?",
        answer: "Oui. L’automatisation est un objectif central, avec des processus gérés par MCC Core et un environnement de scripts restreint prévu dans une phase ultérieure."
      },
      ten: {
        question: "Où puis-je suivre le développement ?",
        answer: "Suivez le dépôt GitHub public et sa feuille de route pour connaître les dernières évolutions du projet."
      }
    },
    contact: {
      tag: "CANAL DE CONTACT",
      title: "Entrez en contact avec le projet.",
      intro: "Les questions sur MCC, sa feuille de route ou une future collaboration sont les bienvenues.",
      copyLabel: "Copier MCCproject@proton.me dans le presse-papiers",
      emailLabel: "COURRIEL OFFICIEL",
      github: "Ouvrir GitHub",
      discord: "Communauté Discord — Disponible plus tard",
      copied: "Adresse copiée dans le presse-papiers.",
      copyFailed: "Échec de la copie. Sélectionnez l’adresse manuellement."
    },
    footer: {
      description: "Une plateforme de contrôle moderne pour Minecraft.",
      navigation: "Navigation du pied de page",
      contact: "Contact",
      legal: "Minecraft Control Center est un projet indépendant qui n’est affilié ni à Mojang Studios ni à Microsoft."
    },
    error: {
      metaTitle: "Page introuvable — Minecraft Control Center",
      description: "La page demandée de Minecraft Control Center est introuvable.",
      title: "Page introuvable",
      message: "La route demandée se trouve hors du système cartographié. Revenez à l’accueil de MCC pour continuer.",
      home: "Retour à l’accueil"
    },
    backToTop: "Retour en haut"
  }
};

let currentLanguage = "en";
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function translate(key, language = currentLanguage) {
  return key.split(".").reduce((value, part) => value && value[part], translations[language]) || key;
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  currentLanguage = selectedLanguage;
  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n, selectedLanguage);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel, selectedLanguage));
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
  });

  const isErrorPage = Boolean(document.querySelector(".error-page"));
  document.title = translate(isErrorPage ? "error.metaTitle" : "meta.title", selectedLanguage);
  const description = translate(isErrorPage ? "error.description" : "meta.description", selectedLanguage);
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const openGraphDescription = document.querySelector('meta[property="og:description"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  if (descriptionMeta) descriptionMeta.setAttribute("content", description);
  if (openGraphDescription) openGraphDescription.setAttribute("content", description);
  if (twitterDescription) twitterDescription.setAttribute("content", description);

  try {
    localStorage.setItem("mcc-language", selectedLanguage);
  } catch (error) {
    // The preference remains active for this page even if storage is unavailable.
  }
}

function initLanguage() {
  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("mcc-language") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  setLanguage(savedLanguage);

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
}

function initMobileNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");
  const header = document.querySelector(".site-header");

  if (!toggle || !navigation || !header) return;

  const closeNavigation = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.dataset.i18nAriaLabel = "nav.open";
    toggle.setAttribute("aria-label", translate("nav.open"));
    navigation.classList.remove("is-open");
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.dataset.i18nAriaLabel = willOpen ? "nav.close" : "nav.open";
    toggle.setAttribute("aria-label", translate(willOpen ? "nav.close" : "nav.open"));
    navigation.classList.toggle("is-open", willOpen);
    header.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("nav-open", willOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeNavigation();
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 52rem)").addEventListener("change", closeNavigation);
}

function initSmoothNavigation() {
  document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotionQuery.matches ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      if (!answer) return;

      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = isOpen;
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -5%" });

  elements.forEach((element) => observer.observe(element));
}

function initCopyEmail() {
  const button = document.querySelector(".email-copy");
  const feedback = document.querySelector(".copy-feedback");

  if (!button || !feedback) return;

  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const succeeded = document.execCommand("copy");
    textarea.remove();
    return succeeded;
  };

  button.addEventListener("click", async () => {
    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(button.dataset.email);
        copied = true;
      } else {
        copied = fallbackCopy(button.dataset.email);
      }
    } catch (error) {
      copied = false;
    }

    feedback.textContent = translate(copied ? "contact.copied" : "contact.copyFailed");
    window.setTimeout(() => { feedback.textContent = ""; }, 3200);
  });
}

function initBackToTop() {
  const button = document.querySelector(".back-to-top");
  const header = document.querySelector(".site-header");

  const updateScrollState = () => {
    if (button) button.hidden = window.scrollY < 650;
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  if (button) {
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reducedMotionQuery.matches ? "auto" : "smooth" });
    });
  }
}

function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileNavigation();
  initSmoothNavigation();
  initFaq();
  initScrollAnimations();
  initCopyEmail();
  initBackToTop();
  initFooterYear();
});
