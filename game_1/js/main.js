var SPACE = 20;

var BB8 = $('#bb8');

function printMessage(msg) {
	$('#messages').html(msg);
}

function moveUp() {
	var pos = BB8.position();
	pos.top = pos.top - SPACE;
	BB8.css(pos);
	pos = BB8.position();
	printMessage('top:'+ pos.top +', left:'+ pos.left);
}

function moveDown() {
	var pos = BB8.position();
	pos.top = pos.top + SPACE;
	BB8.css(pos);
	printMessage('top:'+ pos.top +', left:'+ pos.left);
}

function moveRight() {
	var pos = BB8.position();
	if (pos.left > 620) {
		pos.left = -200;
	} else {
		pos.left = pos.left + SPACE;
	}

	BB8.css(pos);
	printMessage('top:'+ pos.top +', left:'+ pos.left);
}

function moveLeft() {
	var pos = BB8.position();

	if (pos.left < -200) {
		pos.left = 620;
	} else {
		pos.left = pos.left - SPACE;
	}

	BB8.css(pos);
	printMessage('top:'+ pos.top +', left:'+ pos.left);
}


$('#space').height(SPACE).width(SPACE);

$(window).keydown(function (ev) {

	if (ev.key === 'ArrowRight'
		|| ev.key === 'ArrowLeft'
		|| ev.key === 'ArrowUp'
		|| ev.key === 'ArrowDown') {

		ev.preventDefault();
		ev.stopPropagation();

		switch (ev.key) {
			case 'ArrowLeft':
				moveLeft();
				break;
			case 'ArrowRight':
				moveRight();
				break;
			case 'ArrowUp':
				moveUp();
				break;
			case 'ArrowDown':
				moveDown();
				break;
		}

		return false;
	}
});

