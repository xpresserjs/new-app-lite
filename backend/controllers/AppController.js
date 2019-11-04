/**
 * @type Xpresser.Controller.Handler
 */
const AppController = $.handler({

    /**
     * Index Method for "/"
     * @returns {string}
     */
    index: () => "<h1>Hello World</h1>",

});

module.exports = AppController;
