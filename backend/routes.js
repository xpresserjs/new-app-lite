/**
 * See https://xpresserjs.com/router/
 * @type {XpresserRouter}
 */
const Route = $.router;

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get('/', 'App@index').name('index');
