const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router({
    mergeParams: true
});
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('Api running!');
});

module.exports = router;