import { ScullyConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfoliowebsite",
  outDir: './dist/static',
  routes: {
    '/': {
      type: 'json',
      postRenderers: [getFlashPreventionPlugin()],
    },
  },
  puppeteerLaunchOptions: {
    executablePath: process.env.CHROME_PATH || 'chromium'
  },
  // defaultPostRenderers : [getFlashPreventionPlugin()],
};