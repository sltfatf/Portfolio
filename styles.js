// Smooth scrolling with local links
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
   e.preventDefault();

   var target = this.hash;
   var $target = $(target);

   $('html, body').stop().animate({
     'scrollTop': $target.offset().top
   }, 900, 'swing', function () {
     window.location.hash = target;
   });
 });
});

// Hover over link to colorize project images
$(document).ready(function () {
  $(".project1").hover(function () {
   $("img.color1").removeClass('gray');
 });
  $(".project1").mouseleave(function () {
   $("img").addClass('gray');

 });
});

$(document).ready(function () {
  $(".project2").hover(function () {
   $("img.color2").removeClass('gray');
 });
  $(".project2").mouseleave(function () {
   $("img").addClass('gray');

 });
});

$(document).ready(function () {
  $(".project3").hover(function () {
   $("img.color3").removeClass('gray');
 });
  $(".project3").mouseleave(function () {
   $("img").addClass('gray');

 });
});


//Typewriter effect on About page
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };

 //Scroll to top
 var t1=0;
 window.onscroll = scroll;

 function scroll()
 {
  var toTop = document.getElementById('toTop');
  window.scrollY>200 ? toTop.style.display='Block' :  toTop.style.display='none';
}
function abcd()
{
  var y1 = window.scrollY;
  y1 = y1-1000;
  window.scrollTo(0,y1);
  if(y1>0)
  {
    t1 = setTimeout("abcd()",100);  
  }
  else
  {
    clearTimeout(t1);   
  }
}

//
function changeText(submitId){
        var submit = document.getElementById(submitId);
        submit.value = 'Loading...';
        return false;
    };

