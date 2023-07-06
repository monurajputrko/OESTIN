import navbar from '../components/navbar.js'
document.getElementById("homepage-section1").innerHTML= navbar() 

import footer from '../components/footer.js'
document.getElementById("footer").innerHTML= footer() 

import infiniteSlider from '../components/infiniteSlidelogo.js'
document.getElementById("logos").innerHTML= infiniteSlider() 

import secondfooter from '../components/secondfooter.js'
document.getElementById("secondfooter").innerHTML= secondfooter() 
 
 
 
 
 
 


  window.addEventListener("scroll",()=>{
    var scrolled  = window.scrollY;
    // console.log(scrolled)
    if(scrolled>150){

        document.querySelector(".wrapperH").style.display= "none"
        document.querySelector(".wrapperH").style.transition= "0.7s ease"
        document.querySelector(".wrapper").style.height="80px"
        document.querySelector(".wrapper").style.transition= "0.5s ease"
        document.querySelector(".wrapper").style.backgroundColor= "black"
        document.getElementById("changelogo").textContent= "OESTIN"
        // document.getElementById("changelogo").style.backgroundColor= "rgba(0,0,0,.7)"
        document.querySelector("#changelogo").style.transition= "0.5s ease"

        // var arhant =document.getElementById("arhant")
        // var sticky = navbar.offsetTop;
        // navbar.classList.add("sticky")
    }
    if(scrolled<100){
        document.querySelector(".wrapperH").style.display= "flex"
        document.querySelector(".wrapper").style.height=""
        document.querySelector(".wrapper").style.backgroundColor= " rgba(0,0,0,.7)"
        document.getElementById("changelogo").textContent= "MENU"
    }

  })



  var runCounter = document.querySelector("#CounterButton1");
	var count = 0;

	window.addEventListener("scroll", function () {
		const scrolled = window.scrollY;
		console.log(scrolled);
		if (scrolled > 2300) {
			setInterval(function () {
				if (count == 112) {
					return;
				}
				count++;
				runCounter.innerHTML = count;
			}, 45);
		}
	});

	var runCounter2 = document.querySelector("#CounterButton2");
	var count2 = 0;

	window.addEventListener("scroll", function () {
		const scrolled = window.scrollY;
		if (scrolled > 2300) {
			setInterval(function () {
				if (count2 == 158) {
					return;
				}
				count2++;
				runCounter2.innerHTML = count2;
			}, 45);
		}
	});
	var runCounter3 = document.querySelector("#CounterButton3");
	var count3 = 0;

	window.addEventListener("scroll", function () {
		const scrolled = window.scrollY;
		if (scrolled > 2300) {
			setInterval(function () {
				if (count3 == 430) {
					return;
				}
				count3++;
				runCounter3.innerHTML = count3;
			}, 40);
		}
	});

  var runCounter4 = document.querySelector("#CounterButton4");
	var count4 = 0;

	window.addEventListener("scroll", function () {
		const scrolled = window.scrollY;
		if (scrolled > 2300) {
			setInterval(function () {
				if (count4 == 745) {
					return;
				}
				count4++;
				runCounter4.innerHTML = count4;
			}, 25);
		}
	});


  var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);