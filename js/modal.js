$('.galeriaimg').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal"><img src="'+ img +'"class="modalimg"><div id="modalbotton">X</div></div>';
	$('body').append(modal);
	$('#modalbotton').click(function(){
		$('.modal').remove();
	})
});
$(document).keyup(function(e){
	if (e.which==27) {
		$('.modal').remove();
		}
	}); 