window.onload = function() {
	initColorPicker();
};

function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb,  colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
	for (let i = 0; i < pickerElements.length; i++) {
		pickerElements[i].addEventListener('change', () => {
			setBoxColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
		});
	}
}

function setBoxColor(colorBox, red, green, blue) {
	rgbVal = [red, green, blue].join(',');
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}