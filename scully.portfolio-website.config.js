"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_plugin_flash_prevention_1 = require("@scullyio/scully-plugin-flash-prevention");
require("@scullyio/scully-plugin-puppeteer");
exports.config = {
    projectRoot: "./src",
    projectName: "portfolio-website",
    outDir: './dist/static',
    routes: {
        '/': {
            type: 'json',
            postRenderers: [scully_plugin_flash_prevention_1.getFlashPreventionPlugin()],
        },
    },
    puppeteerLaunchOptions: {
        executablePath: process.env.CHROME_PATH || 'chromium'
    },
};
