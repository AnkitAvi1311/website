var menuref=document.getElementById("ham");
menuref.addEventListener("click",function(){
    document.getElementById("ham-content").style.width="75%";
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("ham-content").style.width="0";
});

//displaying the categories when clicked
var catref=document.getElementById("drop");
catref.addEventListener("click",function(){
    this.classList.toggle("show-cat");  
});

//closing the update application modal
var close=document.getElementsByClassName("close-button");
for(var i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        var modals=document.getElementsByClassName("modal");
        for(var i=0;i<modals.length;i++){
            modals[i].style.display="none";
        }
    });
}


//opening the update modal when clicked on the update applications 

document.getElementById("update").addEventListener("click",function(){
    document.getElementById("update-content").style.display="block";
});

document.getElementById("password").addEventListener("click",function(){
    document.getElementById("password-content").style.display="block";
});


document.getElementById("login").addEventListener("click",function(){
    document.getElementById("login-content").style.display="block";
});

//opening the contact modal and closing part of it
function myfunction(){
        setTimeout(function(){
            document.getElementById("contact-container").style.display="block";
        },1000);
}

document.getElementById("contact-me").addEventListener("click",function(){
    document.getElementById("contact-container").style.display="block";
});

//closing the contact-container when clicked on the close button
document.getElementById("close-contact").addEventListener("click",function(){
    document.getElementById("contact-container").style.display="none";
});

//adding smooth scrolling function
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


//closing the hamburger menu when the user clicks on any of the links

var cl=document.getElementsByClassName("cl");
for(var i=0;i<cl.length;i++){
    cl[i].addEventListener("click",function(){
        setTimeout(function(){
            document.getElementById("ham-content").style.width="0";
        },500);
    });
}