$(function(){
	var cbtn = $('#curv-text');
	var state = 0; /* 0 => Start, 1 => Calling, 2 => Connected, 3 => Really ? */
	var tout = [];
	$('.card').click(function(){
		if(state == 0) {
			cleartout();
			cbtn.text('Calling').addClass('calling');
			state = 1;

			tout.push(setTimeout(function(){
				cbtn.text('Connected').removeClass('calling');
				state = 2;
			}, 3500));

			tout.push('fast',setTimeout(function(){
				cbtn.fadeOut(function(){
					cbtn.text('End Call').fadeIn('fast');
				})
			}, 4700));
		}
		else if(state == 1) {
			cbtn.text('Call Stranger').removeClass('calling');
			cleartout();
			state = 0;
		}
		else if(state == 2) {
			cbtn.text('Really ?');
			state = 3;
			cleartout();
		}
		else if(state == 3) {
			cbtn.text('Call Stranger');
			cleartout();
			state = 0;
		}
	});

	var cleartout = function() {
		for (var i = 0, len = tout.length; i < len; i++) {
			  clearTimeout(tout[i]);
			}
		tout = [];
	}


})