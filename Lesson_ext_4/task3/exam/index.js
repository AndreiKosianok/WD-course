function getCountNumber(start, end) {

	let bitNumbScope = 0;

	for (; start <= end; start++) {
		if (start.toString(2).split('').filter(number => number == 1).length == 2) {
			bitNumbScope++
		};
	};

	if (bitNumbScope > 0 ) {
		return bitNumbScope;
	} else {
		return false
	}
}


 module.exports = {
     firstName: 'Andrei',
     secondName: 'Kosianok',
	task: getCountNumber
}

/*const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6);*/

/*alert( (20).toString(2) ); // 10100
alert( parseInt( "10100", 2 ) ); // 20*/

/*(function(){
    let ConvertBase = function (num) {
	        function convertBase(baseFrom, baseTo) {
	        return function (num) {
	            return parseInt(num, baseFrom).toString(baseTo);

	        };
    	}
    };

    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };

    this.ConvertBase = ConvertBase;

})(this);
console.log(ConvertBase.dec2bin(5))*/