$(document).ready(function() {
	var notes = ['gs', 'a', 'as', 'b', 'c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g'];
	var loc = 'sounds/';
	var ext = '.wav';

	$('#play-btn').click(function() {
		var i2got = false;

		var arr = notes.slice();
		var i1 = Math.floor(Math.random() * arr.length);
		var note1 = arr[i1];
		
		while(i2got != true)
		{
			var i2 = Math.floor(Math.random() * arr.length);

			if(i2 != i1)
			{
				i2got = true;
			}
			else
			{
				i2got = false;
			}
		}

		var note2 = arr[i2];

		if(i2 > i1)
		{
			var ivl = i2 - i1;
		}
		else
		{
			var ivl = i1 - i2;
		}

		var int;

		switch(ivl)
		{
			case 1:
				int = "Minor 2nd";
				break;
			case 2:
				int = "Major 2nd";
				break;
			case 3:
				int = "Minor 3rd";
				break;
			case 4:
				int = "Major 3rd";
				break;
			case 5:
				int = "Perfect 4th";
				break;
			case 6:
				int = "Diminshed 5th";
				break;
			case 7:
				int = "Perfect 5th";
				break;
			case 8:
				int = "Augmented 5th";
				break;
			case 9:
				int = "Major 6th";
				break;
			case 10:
				int = "Minor 7th";
				break;
			case 11:
				int = "Major 7th";
				break;
			default:
				int = "Error, try again";
				break;
		}

		var audio1 = new Audio(loc + note1 + ext);
		var audio2 = new Audio(loc + note2 + ext);

		audio1.play();

		audio1.addEventListener('ended', function() {
			audio2.play();
		});

		note1 = convSharp(note1);
		note2 = convSharp(note2);

		$('#notes-played').html(note1.toUpperCase() + " " + note2.toUpperCase());
		$('#int-played').html(int);
	});

	// function getInt() {
	// 	var i2got = false;

	// 	var arr = notes.slice();
	// 	var i1 = Math.floor(Math.random() * arr.length);
	// 	var note1 = arr[i1];
		
	// 	while(i2got != true)
	// 	{
	// 		var i2 = Math.floor(Math.random() * arr.length);

	// 		if(i2 != i1)
	// 		{
	// 			i2got = true;
	// 		}
	// 		else
	// 		{
	// 			i2got = false;
	// 		}
	// 	}

	// 	var note2 = arr[i2];

	// 	if(i2 > i1)
	// 	{
	// 		var ivl = i2 - i1;
	// 	}
	// 	else
	// 	{
	// 		var ivl = i1 - i2;
	// 	}

	// 	var int;

	// 	switch(ivl)
	// 	{
	// 		case 1:
	// 			int = "Minor 2nd";
	// 			break;
	// 		case 2:
	// 			int = "Major 2nd";
	// 			break;
	// 		case 3:
	// 			int = "Minor 3rd";
	// 			break;
	// 		case 4:
	// 			int = "Major 3rd";
	// 			break;
	// 		case 5:
	// 			int = "Perfect 4th";
	// 			break;
	// 		case 6:
	// 			int = "Diminshed 5th";
	// 			break;
	// 		case 7:
	// 			int = "Perfect 5th";
	// 			break;
	// 		case 8:
	// 			int = "Augmented 5th";
	// 			break;
	// 		case 9:
	// 			int = "Major 6th";
	// 			break;
	// 		case 10:
	// 			int = "Minor 7th";
	// 			break;
	// 		case 11:
	// 			int = "Major 7th";
	// 			break;
	// 		default:
	// 			int = "Error, try again";
	// 			break;
	// 	}

	// 	return int;
	// };
});

function convSharp(note) {
	var arr = note.split("");

	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] == "s")
		{
			arr[i] = "#";
		}
	}

	var newNote = arr.join("");

	return newNote;
}