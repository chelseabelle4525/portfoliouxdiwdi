console.log('script loaded')
  "use strict";		

 $('.nav-menu').click(function () {
 	console.log('magic worked')
 	$('.nav-show').toggle('magictime slideRight');
 	$('.nav-show').addClass('magictime slideRight');
 
});
