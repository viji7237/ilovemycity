var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {
        title: 'I Love My City',
        description: 'We believe that every city has something to say',
        count: ['img/main.jpg']
    });
});

router.get('/:city', function (req, res) {
    var count = 4;
    var location = req.params.city;
    var desc = '';
    switch (location) {
        case "berlin":
            desc = 'Where love is in the air';
            break;
        case "london":
            desc = 'Sparkling, Still, Food, Gorgeous';
            break;
        case "madrid":
            desc = 'Buzz, Beautiful architecture and Football';
            break;
        case "newyork":
            count = 6;
            desc = 'Come to New York to become someone new';
            break;
        case "paris":
            desc = 'Good talkers are only found in Paris';
            break;
    }

    var result = {
        title: location,
        description: desc,
        imageCount: count
    };

    res.render('city', result)
})

module.exports = router;
