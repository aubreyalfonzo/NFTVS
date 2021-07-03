let data;
let rc;

function preload(){
	data = loadTable('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/NFTV2/BTC_USD_VALUE_20_21.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	background(0);
	
	rc = data.getRowCount();
	
	
	push();
		let px = 0;
		let py = height;
		
	for(let i = 0; i<rc; i++){
		
		let num = data.getNum(i, "24h High (USD)")/5500;
		
		let m = map(i, 0, rc-1, 0, width);
		
		let x = m;
		let y = height/num;
		
		noFill();
    	stroke(255);
    	line(px, py, x, y);
    	
    	px = x;
    	py = y;
    	
	}
	pop();
	
	
	// print(rc);
}