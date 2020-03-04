openFacebook = require('./main').openFacebook
openTwitter = require('./main').openTwitter
openInstagram = require('./main').openInstagram


$('#facebook').addEventListener('click', openFacebook);

$('#twitter').addEventListener('click', openTwitter);

$('#instagram').addEventListener('click', openInstagram);
