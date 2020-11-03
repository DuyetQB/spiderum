window.onscroll = function() {myFunction()};

var nav = document.querySelector("#wrapper .header_title2");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

function clickWomen(){
  window.location.href ="./great women.html";

}
function aboutSex(){
  window.location.href ="./aboutsex.html";

}
function powerofalone(){
  window.location.href ="./power-of-alone.html";

}
function youngage(){
  window.location.href ="./20years-old.html";

}
function carinvn(){
  window.location.href ="./car-in-vn.html";

}

$(document).ready(function () {
  $(".small1").click(function () {
    $(".cover-image1").show();
$(".small1").hide();
  });
});
$(document).ready(function () {
  $(".close1").click(function () {
    $(".cover-image1").hide();
    $(".small1").show();
  });
});

$(document).ready(function () {
  $(".small2").click(function () {
    $(".cover-image2").show();
$(".small2").hide();
  });
});
$(document).ready(function () {
  $(".close2").click(function () {
    $(".cover-image2").hide();
    $(".small2").show();
  });
});

$(document).ready(function () {
  $(".small3").click(function () {
    $(".cover-image3").show();
$(".small3").hide();
  });
});
$(document).ready(function () {
  $(".close3").click(function () {
    $(".cover-image3").hide();
    $(".small3").show();
  });
});


$(document).ready(function () {
  $(".small4").click(function () {
    $(".cover-image4").show();
$(".small4").hide();
  });
});
$(document).ready(function () {
  $(".close4").click(function () {
    $(".cover-image4").hide();
    $(".small4").show();
  });
});

$(document).ready(function () {
  $(".small5").click(function () {
    $(".cover-image5").show();
$(".small5").hide();
  });
});
$(document).ready(function () {
  $(".close5").click(function () {
    $(".cover-image5").hide();
    $(".small5").show();
  });
});


$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".content > .cover-book").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});






