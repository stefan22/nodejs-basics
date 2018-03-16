/*
    fn creates the routes. Passes 'app' cause we need to pass the endpoints that'll
    be created in index.js
*/

const routes = (app) => {
    app.route('/contact')
    .get((req, res) =>
    res.send('GET request successful!'))
}