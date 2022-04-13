import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';
import '@scullyio/scully-plugin-puppeteer';

import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';


const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
    urlPrefix: 'https://amineamellouk.com',
    sitemapFilename: 'sitemap.xml',
    merge: false,
    trailingSlash: true,
    changeFreq: 'monthly',
    priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
    ignoredRoutes: ['/404', '/en/unavailable', '/fr/unavailable', '/en/404', '/fr/404'],
    routes: {
        // '/products/:productId': {
        //     changeFreq: 'daily',
        //     priority: '0.9',
        //     sitemapFilename: 'sitemap-products.xml',
        //     merge: true
        // },
    }
});

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
    // '/en/portfolio': {
    '/en': {
      type: 'json',
      postRenderers: [getFlashPreventionPlugin()],
    },
    // '/fr/portfolio': {
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