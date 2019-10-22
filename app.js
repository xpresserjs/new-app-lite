// Import Xpresser
const xpresser = require("xpresser");

/**
 * Boot Xpresser with your config
 *
 * Get config from config.js
 * See https://xpresserjs.com/configuration/
 */
const config = require("./config");
xpresser(config).boot();

// END File
