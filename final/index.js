

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "45px";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function submitForm() {
    event.preventDefault();
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("otherInput").value = "";
  }

  function validateForm() {
       var lname = document.getElementById("fname").value;
       var fname = document.getElementById("lname").value;
       var subject = document.getElementById("subject").value;
       var email = document.getElementById("email").value;
       var warningMessage = document.getElementById("warningMessage");

       if (fname === "" || email === "" || lname === "" || subject === "") {
         warningMessage.style.color = "red";
         warningMessage.style.fontSize = "x-large";
         warningMessage.textContent = "Please fill in all fields.";
         return false;
       } else {
         warningMessage.style.color = "#5959b3";
         warningMessage.style.fontSize = "x-large";
         warningMessage.textContent = "Thanks for your feedback!";
         submitForm();
       }
     }



     function submitQuiz() {
    var answers = [];
    for (var i = 1; i <= 10; i++) {
        var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null);
        }
    }


    var score = 0;
        if (answers[0] === 'b') {
            score++;
        }
        if (answers[1] === 'd') {
            score++;
        }
        if (answers[2] === 'a') {
            score++;
        }
        if (answers[3] === 'a') {
            score++;
        }
        if (answers[4] === 'c') {
            score++;
        }
        if (answers[5] === 'b') {
            score++;
        }
        if (answers[6] === 'a') {
            score++;
        }
        if (answers[7] === 'd') {
            score++;
        }
        if (answers[8] === 'c') {
            score++;
        }
        if (answers[9] === 'd') {
            score++;
        }


    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Your score is: ' + score + '/10';
}

       var textInput1 = document.getElementById('fname');
       var textInput2 = document.getElementById('lname');
       var textInput3 = document.getElementById('email');
       var textInput4 = document.getElementById('subject');
       var textInput5 = document.getElementById('otherInput');
       var submission = document.getElementById('submission');


       textInput1.addEventListener('keypress', function(event) {
           if (event.key === 'Enter') {
              event.preventDefault();
              validateForm();
           }
       });

       textInput2.addEventListener('keypress', function(event) {
           if (event.keyCode === 13) {
             event.preventDefault();
             validateForm();
           }
       });

       textInput3.addEventListener('keypress', function(event) {
           if (event.keyCode === 13) {
             event.preventDefault();
             validateForm();
           }
       });

       textInput4.addEventListener('keypress', function(event) {
           if (event.keyCode === 13) {
             event.preventDefault();
             validateForm();
           }
       });

       textInput5.addEventListener('keypress', function(event) {
           if (event.keyCode === 13) {
             event.preventDefault();
             validateForm();
           }
       });


       document.addEventListener("DOMContentLoaded", function () {
           var imageContainer = document.getElementById("image-container1");
           var hoverImage = document.getElementById("hoverimage1");
           var overlay = document.getElementById("overlay1");

           imageContainer.addEventListener("mouseover", function () {
               hoverImage.style.transform = "scale(1.1)";
               overlay.style.opacity = 1;
           });

           imageContainer.addEventListener("mouseout", function () {
               hoverImage.style.transform = "scale(1)";
               overlay.style.opacity = 0;
           });
       });

       document.addEventListener("DOMContentLoaded", function () {
           var imageContainer = document.getElementById("image-container2");
           var hoverImage = document.getElementById("hoverimage2");
           var overlay = document.getElementById("overlay2");
           imageContainer.addEventListener("mouseover", function () {
               hoverImage.style.transform = "scale(1.1)";
               overlay.style.opacity = 1;
           });

           imageContainer.addEventListener("mouseout", function () {
               hoverImage.style.transform = "scale(1)";
               overlay.style.opacity = 0;
           });
       });

       document.addEventListener("DOMContentLoaded", function () {
           var imageContainer = document.getElementById("image-container3");
           var hoverImage = document.getElementById("hoverimage3");
           var overlay = document.getElementById("overlay3");
           imageContainer.addEventListener("mouseover", function () {
               hoverImage.style.transform = "scale(1.1)";
               overlay.style.opacity = 1;
           });

           imageContainer.addEventListener("mouseout", function () {
               hoverImage.style.transform = "scale(1)";
               overlay.style.opacity = 0;
           });
       });

       document.addEventListener("DOMContentLoaded", function () {
                  var countrySelect = document.getElementById("country");
                  var otherInput = document.getElementById("otherInput");
                  var countryContainer = document.getElementById("countryContainer");

                  countrySelect.addEventListener("click", function () {
                      if (countrySelect.value === "other") {

                          countrySelect.style.display = "none";
                          otherInput.style.display = "block";
                      } else {
                          countrySelect.style.display = "block";
                          otherInput.style.display = "none";
                      }
                  });
              });
