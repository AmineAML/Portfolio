import { ScullyConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio-website",
  outDir: './dist/static',
  routes: {
    '/': {
      type: 'json',
      // slug: {
      //   url: 'https://europe-west6-project-owlly.cloudfunctions.net/owlly/',
      //   property: 'data.slug',
      // },
      postRenderers: [getFlashPreventionPlugin()],
    },
  },
  puppeteerLaunchOptions: {
    executablePath: 'chromium'
  },
  // defaultPostRenderers : [getFlashPreventionPlugin()],
};