let data, data2;
let rc, rc2;

function preload(){
	data = loadTable('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/NFTV2/ETH_USD_VALUE_20_21.csv', 'csv', 'header');
	data2 = loadTable('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/NFTV2/BTC_USD_VALUE_20_21.csv', 'csv', 'header');
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
		
		let num = data.getNum(i, "24h High (USD)")/200;
		
		let m = map(i, 0, rc-1, 0, width);
		
		let x = m;
		let y = height/num;
		
		noFill();
    	stroke(0, 255, 0);
    	line(px, py, x, y);
    	
    	px = x;
    	py = y;
    	
	}
	pop();
	
	
	
	rc2 = data2.getRowCount();
	
	push();
		let px2 = 0;
		let py2 = height;
		
	for(let i = 0; i<rc2; i++){
		
		let num = data.getNum(i, "24h High (USD)")/5500;
		
		let m = map(i, 0, rc-1, 0, width);
		
		let x = m;
		let y = height/num2;
		
		noFill();
    	stroke(0, 0, 255);
    	line(px, py, x, y);
    	
    	px2 = x;
    	py2 = y;
    	
	}
	pop();
	
	
	// print(rc);
}