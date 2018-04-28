/*
$(document).ready(function(){
	//Greet
	var name = prompt("First name");
		if(name === " " || name === null || name === undefined){
			alert("Please enter a name next time. :D!");
		} else {
			$("#greet").text(name);
		}
*/

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
