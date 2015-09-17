var avion = require('./avion');

var pdxlax = {
	number: 890,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = avion(pdxlax);

pl.triggerDepart();

console.log(pl.getInformation());


var ausdca = {
	number: 388,
	origin: 'AUS',
	destination: 'DCA'
};


var ad = avion(ausdca);

console.log(ad.getInformation());

console.log(pl.getInformation());