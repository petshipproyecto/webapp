const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM petship.perfil', (err, rows) => {
            if (err) {
                res.json(err); // next(err)
            }
            console.log(rows);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    data = req.query
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO petship.perfil SET ?', [data], (err, rows) => {
            console.log(rows);
            res.send('Done');
        });
    });
};

module.exports = controller;