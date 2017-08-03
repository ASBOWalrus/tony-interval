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

		if(i2 + 1 > i1)
		{
			var ivl = i2 - i1 + 1;

			if(ivl == 2)
			{
				ivl += "nd";
			}
			else if(ivl == 3)
			{
				ivl += "rd";
			}
			else
			{
				ivl += "th";
			}

			var audio1 = new Audio(loc + note1 + ext);
			var audio2 = new Audio(loc + note2 + ext);

			audio1.play();

			audio1.addEventListener('ended', function() {
				audio2.play();
			});

			$('#notes-played').html(note1 + " " + note2);
			$('#int-played').html(ivl);
		}
		else if(i1 > i2)
		{
			var ivl = i1 - i2 + 1;

			if(ivl == 2)
			{
				ivl += "nd";
			}
			else if(ivl == 3)
			{
				ivl += "rd";
			}
			else
			{
				ivl += "th";
			}

			var audio1 = new Audio(loc + note2 + ext);
			var audio2 = new Audio(loc + note1 + ext);

			audio1.play();

			audio1.addEventListener('ended', function() {
				audio2.play();
			});

			$('#notes-played').html(note2 + " " + note1);
			$('#int-played').html(ivl);
		}
	});
});