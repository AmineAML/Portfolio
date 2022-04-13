import { ScullyConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio-website",
  outDir: './dist/static',
  guessParserOptions: {
    // This route causes an error for the guess parser and therefore blocks scully generating pages https://stackoverflow.com/questions/63109915/import-module-in-angular-and-get-error-from-scully
    excludedFiles: ['src/app/layouts/error/error-routing.module.ts']
  },
  routes: {
    '/': {
      type: 'json',
      postRenderers: [getFlashPreventionPlugin()],
    },
    '/en': {
      type: 'json',
      postRenderers: [getFlashPreventionPlugin()],
    },
    '/fr': {
      type: 'json',
      postRenderers: [getFlashPreventionPlugin()],
    },
  },
  puppeteerLaunchOptions: {
    executablePath: process.env.CHROME_PATH || 'chromium'
  },
  // defaultPostRenderers : [getFlashPreventionPlugin()],
};