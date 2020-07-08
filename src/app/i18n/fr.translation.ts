import { Translation } from './utils';

export const fr: Translation = {
  language: 'Français',
  welcome: {
    home: {
      title: 'Développeur Full-Stack',
      resume: 'Voir CV',
    },
    projects: {
      title: 'Projets',
      instructions1stPart: 'Vous pouvez',
      instructions2ndPart: 'sur un projet pour plus de détails'
    },
    about: {
        title: 'je vais vous parler de moi',
        parOne1stPart: "Salut, je m'appelle Amine, ingénieur développement informatique de",
        parOne2ndPart: 'Rabat, Maroc',
        parOne3rdPart: 'qui aime construire des choses, je développe des applications web et des applications mobiles',
        parTwo: "Je me spécialise actuellement en tant qu'ingénieur d'applications mobiles du IT Learning Campus de l'Université de Hassan I",
        parThree: "Voici quelques technologies et outils avec lesquels j'ai travaillé récemment:",
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
    education: 'Éducation',
    courses: 'Cours',
    skills: 'Compétences',
    development: 'Développement',
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