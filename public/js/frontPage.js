$(document).ready(function(e){

		// Slideshow
		var count = count = Math.floor(Math.random() * 18);;
		var images = [
			"img/img1.jpg",
			"img/img2.jpg",
			"img/img3.jpg",
			"img/img4.jpg",
			"img/img5.jpg",
			"img/img6.jpg",
			"img/img7.jpg",
			"img/img8.jpg",
			"img/img9.jpg",
			"img/img10.jpg",
			"img/img11.jpg",
			"img/img12.jpg",
			"img/img13.jpg",
			"img/img14.jpg",
			"img/img15.jpg",
			"img/img16.jpg",
			"img/img17.jpg",
			"img/img18.jpg",
		];

		var image = $(".fader");

		image.css("background-image", "url(" + images[count] + ")");

		setInterval(function() {
			count = Math.floor(Math.random() * 18);
			//
			// if(count == images.length) {
			// 	count = 0;
			// }

			image.fadeOut(300, function(){
				image.css("background-image", "url(" + images[count] + ")");
				image.fadeIn(300);
			});

		}, 9000);

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});

function processClick() {
	// clear the text field after entering something
	$("#text-search").val("");
	console.log("yay");
	// window.location.href = "secondPage";
}

// Trigger a click when Enter key is pressed
document.getElementById("text-search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();

    if (event.keyCode == 13) {
        processClick();
    }
});
