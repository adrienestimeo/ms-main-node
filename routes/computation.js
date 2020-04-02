/**
 * Created by Adrien on 03/04/2020
 */

const MM = require('ms-manager');
module.exports = (app, jsonParser) => {
    app.get('/computation', (req, res) => {
        res.render('computation', {
            context: {
                hello: 'world'
            }
        });
    });

    app.post('/computation', (req, res) => {
        console.log(req.body);
        MM.send('ms-number-computer')
            .for('add')
            .with({
                a: req.body.a,
                b: req.body.b
            })
            .done((err, obj) => {
            if (err) {
                return res.status(500).send(err.toString());
            }
            return res.status(200).json({ result: obj.result });
        });
    });
};