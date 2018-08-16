// Navbar
$(".navT").on("click", function(){
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("navT")[0].style.top = "0";
      document.getElementById("menu").style.top = "65px";
      

    } else {
      document.getElementsByClassName("navT")[0].style.top = "-65px";
      document.getElementById("menu").style.top = "-220px";
    }
    prevScrollpos = currentScrollPos;
  }
//   $(window).scroll(function() {
//     if ($(window).scrollTop() > 75) {
//         $('.navT').css("opacity", 0);
//         $('#menu').css("opacity", 0);
//     }
//     else {
//         // $('.navT').css("opacity", 1);
//         // $('#menu').css("opacity", 1);
//     }
//   });
  
  $(document).ready(function(){
    $('.navT').live("mouseover", function () {
            $(this).css("opacity", 1);
            });
    $('#menu').live("mouseover", function () {
            $(this).css("opacity", 1);
            });
  
    $('.navT').live("mouseleave", function () {
        if($(window).scrollTop() > 75) { 
            $(this).css("opacity", 0);
        }
    });
    $('#menu').live("mouseover", function () {
      $(this).css("opacity", 0);
      });
  
  })
// Contact Us
$(".form").on('click', function(){
    $(this).addClass('active');
  });
  
  $(".submit").on('click', function(e) {
    $(this).parent().parent().hide(300);
    $(".ok_message").addClass("active");
    
    
  });
  
  $(".ok_message").on('click', function() {
    $(this).removeClass("active");
    $(".form").removeClass("active").show();
  });

  //contact form
  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            school_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Please supply your School Name. If u dont want to continue, just go'
                  }
              }
          },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            website: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your School Website'
                  }
                }        
          },
          planet: {
            validators: {
                notEmpty: {
                    message: 'Please select which planet you live on'
                }
            }
        },
          comment: {
                validators: {
                        stringLength: {
                            min: 10,
                         max: 200,
                    message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply your messgae'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // 
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
// firebase 

const firstnameElement = document.getElementById("firstnameform");
const lastnameElement = document.getElementById("lastnameform");
const schoolnameElement = document.getElementById("schoolnameform");
const emailElement = document.getElementById("emailform");
const phoneElement = document.getElementById("phoneform");
const addressElement = document.getElementById("addressform");
const cityElement = document.getElementById("cityform");
const stateElement = document.getElementById("stateform");
const zipcodeElement = document.getElementById("zipcodeform");
const schoolwebsiteElement = document.getElementById("schoolwebsiteform");
const planetElement = document.getElementById("planetform");
const yourmessageElement = document.getElementById("yourmessageform");
const button = document.getElementsByClassName("btn")[0];
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const firstname       = firstnameElement.value;
    const lastname        = lastnameElement.value;
    const schoolname      = schoolnameElement.value;
    const email           = emailElement.value;
    const phone           = phoneElement.value;
    const address         = addressElement.value;
    const city            = cityElement.value;
    const state           = stateElement.value;
    const zipcode         = zipcodeElement.value;
    const schoolwebsite   = schoolwebsiteElement.value;
    const planet          = planetElement.value;
    const yourmessage     = yourmessageElement.value;

    firstnameElement.value = "";
    lastnameElement.value = "";
    schoolnameElement.value = "";
    emailElement.value = "";
    phoneElement.value = "";
    addressElement.value = "";
    cityElement.value = "";
    stateElement.value = "";
    zipcodeElement.value = "";
    schoolwebsite.value = "";
    planetElement.value = "";
    yourmessageElement.value = "";
    
    
    // make myJson to push 
    let messageJson = {
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        SCHOOLNAME: schoolname,
        EMAIL: email,
        PHONE: phone,
        ADDRESS: address,
        CITY: city,
        STATE: state,
        ZIPCODE: zipcode,
        SCHOOLWEBSITE: schoolwebsite,
        PLANET: planet,
        YOURMESSAGE: yourmessage

        // MESSAGE: message
    }
    
  if(firstname == "" || lastname== ""  || schoolname == "" || email=="" || phone=="" || address=="" || city == "" || state=="" || zipcode=="" || schoolwebsite == "" || planet== "" || yourmessage== ""){
    alert("Hey, you should be mature, right? You shouldn't press submit as long as you didn't compelete the form.");
  }else{
    console.log(firstname + lastname + schoolname + email + phone + address + city + state + zipcode + schoolwebsite + planet + yourmessage);
    database.push(messageJson)
    confirm("You are about to be redirected to your daily schedule for the following week. Please, press ok to be redirected");
    setTimeout(function () {
        window.location.replace("rest.html"); 
     }, 1000);
    
  }
    

}
