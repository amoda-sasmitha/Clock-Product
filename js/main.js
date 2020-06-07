
(function ($) {

    /*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    
    /*------------------
		Single Product
	--------------------*/
	$('.product-thumbs-track .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}
	});

    $('.product-pic-zoom').zoom();
    
})(jQuery);

function submitform(event){
     event.preventDefault();
     let name = $('#name').val()
     let contact = $('#contact').val()
     let address = $('#address').val()
     let email = $('#email').val()
     let quantity = $('#quantity').val()
     let data = { name : name , contact : contact , address : address , email : email , quantity : quantity };

    $('#bt').empty();
    $('#bt').append(`<div class="text-center py-5 my-5">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>`);

  $.ajax({
    type: 'post',
    url: 'mail.php',
    data: data,
    success: function (data) {
      console.log(data);
    }
  });

  setTimeout(function() {
    $('#bt').empty();
    $('#bt').append(`<div class="text-center py-5 my-2">
    <img src="/img/su.png" style="width : 10%"/>
    <h4 class="mt-2 mb-0 font-weight-bold text-success">Successful !</h4>
    <h6 class="mt-2 text-mute">Your form has been submitted.</h6>
  </div>`);
  }, 2000 );
  
}

