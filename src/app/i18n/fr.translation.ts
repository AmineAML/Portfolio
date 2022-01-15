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
      contact: 'Me Parlez',
      slogan: 'Je suis un développeur de logiciels avec une formation en économie spécialisée dans la conception et le développement de présence et de solutions numériques. Je me concentre sur les API, le DevOps et l\'exploration des nouvelles tendances de codage.'
    },
    projects: {
      title: 'Projets distinctifs',
      instructions1stPart: 'Vous pouvez',
      instructions2ndPart: 'sur un projet pour un demo'
    },
    about: {
      title: 'À propos de moi',
      paragOne: 'Salut! Je m\'appelle Amine et j\'aime plonger dans la création et la présence d\'idées et de réflexions sur Internet. Mon intérêt pour le codage a commencé en 2015 lorsque j\'ai commencé à faire des modification sur des site web avec les outils de développement du navigateur. Depuis 2017, je transforme chaque année des idées ou/et j\'apprends des technologies en codant des projets sur desktop, mobile et sur le web ! tout en poursuivant des études d\'économie.',
      paragTwo: 'Avance rapide jusqu\'à aujourd\'hui, et j\'ai construit et travaillé sur des projets qui touchaient au cloud, aux bases de données, aux tests, au DevOps, à la modélisation logicielle, à l\'architecture, au SEO et aux écosystèmes de plusieurs langages de programmation. Mon objectif principal ces jours-ci est la construction web optimisée pour le SEO, la performance, les produits sécurisés et la présence online en mettant l\'accent sur le côté des API et DevOps.',
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