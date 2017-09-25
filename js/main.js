 $(document).ready(function() {

     slider();
     lightBox();
     lightBoxClose();
     toggleMenu ();

 });



 function slider() {
     //initialize swiper when document ready  
     var mySwiper = new Swiper('.swiper-container', {

     });
 }

 function lightBox() {
     $('[data-modal]').click(function() {
         $('.modal').fadeIn(300);
         $('.overlay').fadeIn(300);
     });
 }

 function lightBoxClose() {
     $('.close').click(function() {
         $(this).closest('.modal').fadeOut(300);
         $('.overlay').fadeOut(300);
     });

     $('.overlay').click(function() {
         $(this).fadeOut(300);
         $('.modal').fadeOut(300);
     });
 }

function toggleMenu () {
	$('.js-toggle').click(function () {
		$('.navbar ul').addClass('active');
	});

	$('.js-navbar-close').click(function () {
		$(this).closest('ul').removeClass('active');
	});
}