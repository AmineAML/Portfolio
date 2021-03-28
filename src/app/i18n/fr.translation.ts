import { Translation } from './utils';

export const fr: Translation = {
  language: 'Français',
  welcome: {
    home: {
      name: 'Amine AMELLOUK',
      title: 'Développeur Full-Stack',
      preTitle: 'Développeur Front-End',
      anotherPreTitle: 'Développeur Back-End',
      resume: 'CV',
    },
    projects: {
      title: 'Projets',
      instructions1stPart: 'Vous pouvez',
      instructions2ndPart: 'sur un projet pour un demo'
    },
    about: {
      title: 'je vais vous parler de moi',
      partOne1stPart: "Salut, je m'appelle Amine,",
      partOne2ndPart: "développeur full-stack",
      partOne3rdPart: "de",
      partOne4thPart: 'Maroc',
      partOne5thPart: "qui aime construire des choses, je développe des applications web et des applications mobiles. Je suis un",
      partOne6thPart: "apprenant actif",
      partOne7thPart: "qui apprécie",
      partOne8thPart: "l'esprit critique et logique",
      partOne9thPart: ",",
      partOne10thPart: "résolution des problèmes",
      partOne11thPart: "et",
      partOne12thPart: "l'attention au détail",
      partTwo1stPart: "Je suis diplômé de",
      partTwo2ndPart: "l'université Mohammed V",
      partTwo3rdPart: "et",
      partTwo4thPart: "l'université Hassan I",
      partTwo5thPart: "avec une",
      partTwo6thPart: "licence en économie",
      partTwo7thPart: "et une",
      partTwo8thPart: "licence en ingénierie des applications mobiles",
      partTwo9thPart: "et je cherche maintenant à travailler sur des projets intéressants",
      partThree: "Voici quelques technologies et outils avec lesquels j'ai travaillé récemment:",
    },
    contact: {
      titleAndButtonText: 'Contactez moi',
      name: 'Nom',
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
  }

  /*// function using string literal and interpolation with constant determining the plural postfix
  // in more complicated cases you could use this function to implement logic yourself or integrate ICU message format
  langsSupported: (n: number) => {
    const plural = n === 1 ? '' : n >= 2 && n <= 4 ? 'y' : 'ů';
    return `Tohle demo podporuje ${n} jazyk${plural}.`;
  },
  */
};