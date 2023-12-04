const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, __dirname + '/uploads');
    },
    filename: (req, res, cb) => {
        cb(null, `IMG${Date.now()}`);
    }
});

const upload = multer({ storage });

module.exports = upload;