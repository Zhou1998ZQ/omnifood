(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}




function save(){
    //check();
    let fname = document.getElementById("name").value;
    let  birth = document.getElementById("birthDate").value;
    let  email = document.getElementById("email").value;
    let  pass = document.getElementById("password").value;
    let person = {
        fname : fname,
        birth : birth,
        pass : pass
    }

    
        if (search() == true){
            window.alert("This User Already Has an Account, Try to Log in");
        }else{
            if (ValidateEmail(email) == false)
            {
                
                document.getElementById("email").style.color = "red"; 
                
            }else
            {
                localStorage.setItem(email,JSON.stringify(person));
                window.alert("Your Account Has Been Created, Log in to Your Account");
                window.location.href = "../en/login.html";
            }
            
        }


    

   
}

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let person = JSON.parse(localStorage.getItem(email));

    if (search() == true && password !="" && person.pass == password){
        window.location.href ="../en/home_signin.html";
        sessionStorage.setItem("email",email);
    }else window.alert("User Name or Password Incorrect");

    
}

function search(){

    let  email = document.getElementById("email").value;
    let find = false;
    for (let i = 0 ; i < localStorage.length; i++){
        if (localStorage.key(i) != email){
            find = false;
        }else{
            find = true;
            break;
        }
    } return find;
}

function loadhome(){
    let email = sessionStorage.getItem("email");
    let person = JSON.parse(localStorage.getItem(email));
    document.getElementById("loginbtn").value = "Welcome "+person.fname;

}

function ValidateEmail(email) 
{
 if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
  {
    return (true)
  }else
    
    return (false)
}

function check(){
    let items = document.getElementsByTagName("input");
    for (let index = 0; index < items.length; index++) {
        if (items[index].value == ""){
            let v = document.getElementsByClassName("invalid-feedback");
            v.style.display = "block";
        }
        
    }
}

function reset(){
    if (search() == true){
        window.alert("Reset Link Has Been Sent To Your Email");
    }else
    {
        window.alert("The Email Address You Entered, Not Found");
    }
}