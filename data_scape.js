let data;

let cols, rows;
let scl = 5;
let num, num2;
let rc, m, m2, caps;
let img;

let terrain = [];

function preload() {
	data = loadTable('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/ap.csv', 'csv', 'header');
	img = loadImage('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/ME.png');
}

function setup() {

	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(15);
	
	img.resize(width/2, height/2);


	rc = data.getRowCount();
	cols = rc;
	rows = rc;

	for(let x = 0; x < cols; x++) {
		terrain[x] = [];
		for(let y = 0; y < rows; y++) {
			terrain[x][y] = 0;
		}
	}
	// print(rc);

	for(let y = 0; y < rows; y++) {
		for(let x = 0; x < cols; x++) {

			num = data.getNum(x, 'num');
			num2 = data.getNum(y, 'num');

			m = map(y, 0, cols, 0, num);
			m2 = map(x, 0, rows, 0, num2);

			// caps = map(1, 0, 1, 0, 20, true);
			caps = 8;

			terrain[x][y] = map(m + m2, 0, 1, 0, caps);
		}
	}

	// background(0);

	fill(200, 200, 200);
	// noFill();
	noStroke();
	// strokeWeight(.2);
	// stroke(0);

	// directionalLight(255, 255, 255, 0, height, 0);

	// sphere(200);


}


function draw() {
		// background(0);

	translate(0, height / 2.2);
	rotateY(PI / 1.335);
	rotateX(PI / 2);
	// let manip = sin(random(-width*2, width*2)+frameCount*.005);
	let manip = frameCount*.005 + (mouseX + mouseY)/100;
	rotateY(manip);
	rotateX(manip);


	// lights();

	textureMode(IMAGE);
	// textureMode(NORMAL);
	texture(img);
	// normalMaterial();

	for(let y = 0; y < rows - 1; y++) {

		beginShape(TRIANGLE_STRIP);

		for(let x = 0; x < cols; x++) {

			let u = x;
			let v = y;

			// scl = map(1, 0, x, 0, width, true);
			// scl2 = map(1, 0, y, 0, width, true);

			vertex(x * scl, y * scl, terrain[x][y], u, v);
			vertex(x * scl, (y + 1) * scl, terrain[x][y + 1], u, v);

		}

		endShape();
	}


}

function mouseClicked() {
	location.reload(true);
}