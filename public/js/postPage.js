
jQuery(document).ready(function() {


  /* created a json object to send it to the Server */
  var json = {};

    /*
        Fullscreen background
    */
    $.backstretch("img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });

    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
      // console.log("Okay it is in here!");
    });


    // next step on first button
    // .registration-form .btn-next
    $('.registration-form .btn-next').on('click', function() {
      // console.log($('.radio .radio-primary'));
      // console.log($(this));

      /* set an if statement for the first fieldset, second,
      thirds and fourth to grab the value*/
      if($(this).parent().closest('fieldset').is('#first-form')){
        // get the option of the first-value of the input button
        var type = $('input[name=first-form]:checked').val();
        console.log("here is the value:", type);
        if(type === 'hire'){
          json.type = 'I want to hire someone';
        } else {
          json.type = 'I have a service to offer';
        }
      } else if ($(this).parent().closest('fieldset').is('#second-form')){
      // get the second form for radio button
        var category = $('input[name=radio2]:checked').val();
        console.log("here is the second value: ", category);
        switch (category){
          case 'option1':
            json.category = 'Creative gigs';
            break;
          case 'option2':
            json.category = 'Computer gigs';
            break;
          case 'option3':
            json.category = 'Talent gigs';
            break;
          case 'option4':
            json.category = 'Household gigs';
            break;
          case 'option5':
            json.category = 'Event gigs';
            break;
          case 'option6':
            json.category = 'Labor gigs';
            break;
        }
      } else if( $(this).parent().closest('fieldset').is('#third-form')){

      // get the third form for radio button and all the value
      var emailAddress = $('#form-email').val();
      var telephonNum = $('#form-tel').val();
      var city = $('#form-city').val();
      var contactOption = $('input[name=radioInline]:checked').val();
      json.email = emailAddress;
      json.phone = telephonNum;
      json.contactOption = contactOption;
      json.city = city;
      console.log('form email', emailAddress);
      console.log('form tel', telephonNum);
      console.log('contact option', contactOption);
      }

    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;



    	parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}

    });

    // previous step
    $('.registration-form .btn-previous').on('submit', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });

    // submit
    $('.registration-form').on('submit', function(e) {
      console.log("here");
      e.preventDefault();


    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
          // insert the value to json and push it to the file
          if($(this).is('input[type="text"]')){
            json.title = $(this).val();
            console.log(json.title);
          } else if ($(this).is('#comment')){
            json.info = $(this).val();
            console.log(json.info);
          }
    		}



    	});

      console.log(json);
      /* get the route from the action in form */
      var $form = $('.registration-form').attr('action');

      var posting = $.post($form, json, (data, status)=>{
        this.submit();
      });


    });


});
