let data;
let rc;

function preload(){
	data = loadTable('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/NFTV4/ANNUAL_GLOBAL_TEMP_ANOM_1880_2016.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	background(0);
	
	rc = data.getRowCount();

	translate(0, height/2);
	
	
	push();
		let px = 0;
		let py = height;
		
	for(let i = 0; i<rc; i++){
		
		let num = data.getNum(i, "Mean")*300;
		
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