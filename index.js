//Define variable for button
var btn = document.querySelector("#love-btn");
//when user click on btn
btn.addEventListener("click", function () {
    //Define variables for take values
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    //Check input fields empty or not
    if (n1 === "" && n2 === "") {
        document.querySelector(".alert-danger").style.display="block";
    } else {
        var emoji;
        var result = Math.floor(Math.random() * 101);
        
        if(result > 90) {
            emoji = "😍 ";
        }
        else if(result > 50 && result < 90) {
            emoji = "😎 ";
        }
        else if (result > 20 && result < 50){
            emoji = "🙂 ";
        }
        else if (result > 10 && result < 20) {
            emoji = "😯 ";
        }
        else {
            emoji = "😪 ";
        }

        var couples = emoji + "<br><br> Love between " + n1 + " and " + n2;
        document.querySelector("#couples").innerHTML = couples;
        document.querySelector("#result").innerHTML =  result;
        $('#exampleModal').modal('show');

        //Number Animation
        $({ Counter: 0 }).animate({
            Counter: $('#result').text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $('#result').text(Math.ceil(this.Counter));
            }
          });

    }
});

//Close alert box
var close_btn = document.querySelector("#close-btn");
close_btn.addEventListener("click", function(){
    document.querySelector(".alert-danger").style.display="none";
});




