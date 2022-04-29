// project site hosted on wix: https://hhovsepi8.wixsite.com/my-site-1?experiments=se_disableCorvidVideo

// Returns a number between 0 and 255
function generateRandomNumber() {
	return Math.floor(Math.random() * 256);
}

// Create a random color in RGB format

function createRandomColor() {
	let newColor = [];
	for(let i = 0; i < 3; i++) {
		newColor.push(generateRandomNumber())
	}
	return newColor.join(',')
}

$w.onReady(function () {
	// Selectors for all the Container boxes
	const bigBox = $w('#box0');
	const firstCircle = $w('#box1');
	const secondCircle = $w('#box2');
	const thirdCircle = $w('#box3');
	const fourthCircle = $w('#box4');
	const fifthCircle = $w('#box5');
	
	// Selector for the first button
	const changeBoxBtn = $w('#changeBox');

	// change box colors on click

	changeBoxBtn.onClick(event => {
		let newRGBvalue = createRandomColor();
		bigBox.style.backgroundColor = `rgb(${newRGBvalue})`;
		bigBox.style.borderColor = `rgb(${newRGBvalue})`;
	});

	const allBoxes = [
			bigBox, 
			firstCircle, 
			secondCircle, 
			thirdCircle, 
			fourthCircle, 
			fifthCircle
	];

	// randomize everything button

	const changeAllBtn = $w('#changeAll');

	changeAllBtn.onClick(event => {
		allBoxes.forEach(box => {
			let boxRGBvalue = createRandomColor();
			bigBox.style.backgroundColor = `rgb(${boxRGBvalue})`;
			bigBox.style.borderColor = `rgb(${boxRGBvalue})`;
		});
	});

});
