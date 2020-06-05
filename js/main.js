
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

    let msg = "<h2>Form Data<h2>"
    msg +=  `<h3>Name : ${name}<h3>`
    msg +=  `<h3>Contact : ${contact}<h3>`
    msg +=  `<h3>Address : ${address}<h3>`
    msg +=  `<h3>Email : ${email}<h3>`
    msg +=  `<h3>Quantity : ${quantity}<h3>`

    $('#bt').empty();
    $('#bt').append(`<div class="text-center py-5 my-5">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>`);

     Email.send({
        Host : "smtp-relay.sendinblue.com",
        // Host : "smtp.mailgun.org",  //maiil gun
        Username : "lucidexclientsangeeth@gmail.com",
        // Username : "postmaster@sandbox9c534e2d0ddf4c2682f7136c3a174bc3.mailgun.org",
        Port : "587",
        // Password : "9ada06242d1ffb1d0bf5e355d5d92af9-a2b91229-886763b0", //maiil gun
        Password : "FpygaT1A4Z8xECb7",
        To : 'brandcleopatra@gmail.com',
        From : "lucidexclientsangeeth@gmail.com",
        Subject : "Form Data Submit",
        Body : msg
    }).then(
      message => {
        $('#bt').empty();
        $('#bt').append(`<div class="text-center py-5 my-2">
        <img src="/img/su.png" style="width : 10%"/>
        <h4 class="mt-2 mb-0 font-weight-bold text-success">Successful !</h4>
        <h6 class="mt-2 text-mute">Your form has been submitted.</h6>
      </div>`);
      }
    );
}

