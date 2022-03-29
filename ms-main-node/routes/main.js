/**
 * Created at 09/01/2018
 * By Adrien Fenech
 */

module.exports = (app, jsonParser) => {
    app.get('/', (req, res) => {
        res.render('main', {
            context: {
                hello: 'world'
            }
        });
    });
};