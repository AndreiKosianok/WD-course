let xEdge = 100,
	yEdge =	100;

function calcSpace(){
	let area = xEdge * yEdge
	console.log(area)
};

for (let i = 0; i < 10; i++){
	xEdge += 10
	calcSpace();
};

