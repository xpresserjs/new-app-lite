// Import Xpresser
const {init} = require("xpresser");

/**
 * Boot Xpresser with your config
 *
 * Get config from config.js
 * See https://xpresserjs.com/configuration/
 */
const config = require("./config");

// Boot Xpresser
init(config).boot();
