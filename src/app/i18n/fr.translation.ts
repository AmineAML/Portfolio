import { Translation } from './utils';

export const fr: Translation = {
  language: 'Français',
  welcome: {
    home: {
      name: 'Amine Amellouk',
      title: 'Développeur Logiciel',
      preTitle: 'Développeur Front-End',
      anotherPreTitle: 'Développeur Back-End',
      resume: 'CV',
      viewProjects: 'Voir les projets',
      slogan: 'Je suis un développeur de logiciels avec une formation en économie spécialisée dans la conception et le développement de présence et de solutions numériques. Je me concentre sur les API, le DevOps et l\'exploration des nouvelles tendances de codage.'
    },
    projects: {
      title: 'Projets distinctifs',
      instructions1stPart: 'Vous pouvez',
      instructions2ndPart: 'sur un projet pour un demo',
      previewButton: 'Aperçu en direct'
    },
    about: {
      title: 'À propos de moi',
      paragOne: `En tant que développeur Full-Stack polyvalent avec une solide formation en économie et une passion pour l'ingénierie DevOps, j'apporte une riche expérience dans la réalisation de projets allant des applications mobiles aux systèmes d'entreprise à grande échelle. J'ai réussi à migrer des architectures backend vers des frameworks modernes en utilisant NestJS et les microservices, améliorant ainsi la scalabilité et les performances. Mon expertise s'étend au développement et à la maintenance d'applications robustes avec Angular, .NET et SQL. Je maîtrise également les processus CI/CD, ayant utilisé Jenkins et GitHub Actions pour rationaliser les workflows de développement. Tout au long de ma carrière, j'ai excellé dans les environnements Agile Scrum, collaborant efficacement avec les équipes pour livrer des solutions de haute qualité.`,
      paragTwo: `Dans mes rôles précédents, j'ai dirigé des efforts pour transformer les spécifications en tâches concrètes, plaidant pour un code propre, maintenable et une documentation approfondie. J'ai intégré des outils tels que ceux pour la messagerie et les images, mis en œuvre des architectures de microservices avec des outils comme Netflix Eureka et Zuul, et établi des pipelines CI/CD avec Docker et Jenkins. Mon approche proactive inclut le mentorat des développeurs juniors et la contribution à des projets open-source. J'ai également expérimenté l'apprentissage continu avec des projets comme une plateforme de livraison et un système de newsletter pour des recommandations de recettes saines, démontrant ma capacité à apprendre rapidement et à innover dans des environnements dynamiques et rapides.`,
      paragThree: 'Vous pouvez avoir un aperçu de mon expérience et de mes intérêts pour le codage en explorant la section de mes projets et sur la page moodboard de ce portfolio.',
      paragFour: 'Je suis un apprenant actif, une personne orientée vers les solutions et voici quelques technologies avec lesquelles j\'ai travaillé récemment:'
      // partOne1stPart: "Salut, je m'appelle Amine,",
      // partOne2ndPart: "développeur full-stack",
      // partOne3rdPart: "de",
      // partOne4thPart: 'Maroc',
      // partOne5thPart: "qui aime construire des choses, je développe des applications web et des applications mobiles. Je suis un",
      // partOne6thPart: "apprenant actif",
      // partOne7thPart: "qui apprécie",
      // partOne8thPart: "l'esprit critique et logique",
      // partOne9thPart: ",",
      // partOne10thPart: "résolution des problèmes",
      // partOne11thPart: "et",
      // partOne12thPart: "l'attention au détail",
      // partTwo1stPart: "Je suis diplômé de",
      // partTwo2ndPart: "l'université Mohammed V",
      // partTwo3rdPart: "et",
      // partTwo4thPart: "l'université Hassan I",
      // partTwo5thPart: "avec une",
      // partTwo6thPart: "licence en économie",
      // partTwo7thPart: "et une",
      // partTwo8thPart: "licence en ingénierie des applications mobiles",
      // partTwo9thPart: "et je cherche maintenant à travailler sur des projets intéressants",
      // partThree: "Voici quelques technologies et outils avec lesquels j'ai travaillé récemment:",
    },
    contact: {
      titleAndButtonText: 'Contactez-moi',
      name: 'Nom',
      button: 'Envoyer',
    },
  },
  error: {
    title: 'Page non trouvée',
    buttonText: "Page d'accueil",
  },
  shared: {
    header: {
      theme: {
        light: "Mode d'éclairage",
        dark: 'Mode sombre',
      }
    },
    footer: {
      text1stPart: 'Réalisé avec',
      text2ndPart: 'par Amine',
    }
  },
  resume: {
    phone: 'Téléphone',
    website: 'Site web',
    about: 'À propos',
    profiles: 'Profils',
    work: 'Expérience',
    education: 'Éducation',
    courses: 'Projet de fin d\'étude',
    skills: 'Compétences',
    development: 'Développement',
    experienceWith: 'Expérimenté avec',
    familiarWith: "Familier avec",
    languages: 'Langues'
  },
  nav: {
    home: 'Acceuil',
    projects: 'Projets',
    about: 'À propos',
    resume: 'CV'
  },
  moodboard: {
    title: 'Moodboard est une collection de projets qui mettent en valeur une variété de mes compétences, il peut s\'agir de projets construits pour le plaisir, de projets d\'études de fin d\'année ou d\'autres projets d\'expérimentation avec de nouvelles technologies et domaines de développement de logiciels.'
}

  /*// function using string literal and interpolation with constant determining the plural postfix
  // in more complicated cases you could use this function to implement logic yourself or integrate ICU message format
  langsSupported: (n: number) => {
    const plural = n === 1 ? '' : n >= 2 && n <= 4 ? 'y' : 'ů';
    return `Tohle demo podporuje ${n} jazyk${plural}.`;
  },
  */
};