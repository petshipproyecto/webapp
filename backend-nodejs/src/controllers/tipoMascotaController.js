const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM petship.tipomascota', (err, rows) => {
            if (err) {
                res.json(err); // next(err)
            }
            console.log(rows);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    
};

module.exports = controller;