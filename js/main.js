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
		}
		else if(i1 > i2)
		{
			var ivl = 0 - (i1 - i2 + 1);
		}

		new Audio(loc + note1 + ext).play();

		setTimeout(function() {
			new Audio(loc + note2 + ext).play();
		}, 3000);

		console.log(note1 + " " + note2 + " " + ivl);
	});
});