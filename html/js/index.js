$(document).ready(callAimation)

function isMandatory(len) {
    var valid = true;
    var re = /\S+@\S+\.\S+/;
    for (var i = 0; i < len; i++) {
        var id = $("span").eq(i).attr("id");
        var value = $("input").eq(i).val();
        if (i == 3) {
            value = $("input").eq(2).val();
        }
        if (i == 2) {
            value = $("input").eq(i).val();
            if (value == "") {
                $("#errornumber").css({ "display": "inline-block" });
                $("#errornumber").html("Please fill this field!");
                valid = false;
            } else if (!(((isNaN($("#invitemail").val()) == false) && ($("#invitemail").val().length == 10)) || (re.test($("#invitemail").val())))) {
                $("#errornumber").css({ "display": "inline-block" });
                $("#errornumber").html("Invalid input!");
                valid = false;
            }
        }
        if (value == "") {
            if (i != 2) {
                $("#" + id).css({
                    "display": "inline-block"
                });
                valid = false;
            }
        } else {
            $("#" + id).hide();
        }
    }
    return valid;
}

function callAimation() {
    $(".left-section").css({
        "margin-left": "0"
    });
}

function displayThankyou() {
    var valid = isMandatory(3);
    if (valid == false) return;
    var re = /\S+@\S+\.\S+/;
    if (((isNaN($("#invitemail").val()) == false) && ($("#invitemail").val().length == 10)) || (re.test($("#invitemail").val()))) {
        $("#numberlabel").show();
        $(".get-invite-form").hide();
        $(".invited").show();
    } else {
        $("#errornumber").css({ "display": "inline-block" });
        $("#errornumber").html("Invalid input!");
    }
}

function displayLoginform() {
    $("span").hide();
    $(".label").html("Mobile Number/Email");
    $("input").val("");
    $(".get-invite-form").hide();
    $(".login-form").show();
}


function displayGetInvite() {
    $("span").hide();
    $(".label").html("Mobile Number/ Email");
    $("input").val("");
    $(".get-invite-form").show();
    $(".login-form").hide();
}

function verifyOtp() {
    $(".invitation-text").hide();
    if ($("#password").val() == "") {
        $("#errorfield").show();
        return;
    }
    var re = /\S+@\S+\.\S+/;
    if (((isNaN($("#password").val()) == false) && ($("#password").val().length == 10)) || (re.test($("#password").val()))) {
        $(".otp").text("Login");
        $(".back").show();
        $(".login").hide();
        $(".otp-input").show();
        $(".cross").hide();
    } else {
        $("#errorfield").show();
        $("#errorfield").html("Invalid input!");
        return;
    }
}

function showPassword() {
    var x = $(".pass");
    for (var i = 0; i < x.length; i++)
        if (x[i].type == "password") {
            x[i].type = "text";
        } else {
            x[i].type = "password";
        }
}

function goBack() {
    $("span").hide();
    $(".label").html("Mobile Number/ Email");
    $("input").val("");
    $(".otp").text("Proceed");
    $(".back").hide();
    $(".cross").show();
    $(".login").show();
    $(".otp-input").hide();
}
var container = $(".otp-input")[0];
container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        $(next).select();
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    } else if (e.key == "Backspace") {
        var prev = target;
        $(prev).select();
        while (prev = prev.previousElementSibling) {
            if (prev == null) break;
            if (prev.tagName.toLowerCase() == "input") {
                prev.focus();
                break;
            }
        }
    }
}

container.onpaste = function(event) {
    var value = event.clipboardData.getData('text') || window.clipboardData.getData('text');
    console.log(value);
    var x = $(".otp-input").find("input");
    console.log(value[0]);
    if (value.length != 4) {
        event.preventDefault();
    } else {
        for (var i = 0; i < value.length; i++)
            $(x[i]).val(value[i]);
    }
    x[3].focus();
    console.log(x[0]);
}

// var container = $(".otp-input")[0];
// container.onkeyup = function(e) {

//     $('.digit-group').find('input').each(function() {
//         $(this).attr('maxlength', 1);
//         $(this).on('keyup', function(e) {
//             var parent = $($(this).parent());

//             if (e.keyCode === 8 || e.keyCode === 37) {
//                 var prev = parent.find('input#' + $(this).data('previous'));

//                 if (prev.length) {
//                     $(prev).select();
//                 }
//             } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
//                 var next = parent.find('input#' + $(this).data('next'));

//                 if (next.length) {
//                     $(next).select();
//                 } else {
//                     if (parent.data('autosubmit')) {
//                         parent.submit();
//                     }
//                 }
//             }
//         });
//     });
// }

function validateName(event, self) {
    var key = event.keyCode;
    if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key == 16) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        event.preventDefault();
    } else {
        if ($.trim($(self).val()) == "") {
            ($(self)).val('');
        }
    }
    $("#" + $(event.target).attr('class')).hide();
}

function verifyNumberEmail(event, self) {
    var value = $(self).val();
    if (value != "") {
        $("#errornumber").hide();
        $("#errorfield").hide();
    }
    if (value == "") {
        $("#errorfield").html("Please fill this field!");
    }
    if ((value.length >= 1 && value.length <= 10)) {
        if (value[0] >= 6 && (!isNaN(value))) {
            $(".numberlabel").show();
            $(".label").text("Mobile Number");
        } else {
            $(".numberlabel").hide();
            $(".label").text("Email");
        }
    } else {
        if (event.keyCode == 50) {
            if ((value.split("@").length - 1) == 2) {
                $(self).val(value.substring(0, value.length - 1));
            }
        }
        if ((!(isNaN(value))) && (value.length <= 10)) {
            if ((event.key >= 0 && event.key <= 9) || (event.key == "Backspace" && value != "")) {
                $(".numberlabel").show();
                $(".label").text("Mobile Number");
            } else {
                $(".numberlabel").hide();
                $(".label").text("Mobile Number/Email");
            }
        } else {
            $(".label").text("Email");
            $(".numberlabel").hide();
        }
    }
}

function preventInvalidInput(event) {
    var value = event.clipboardData.getData('text') || window.clipboardData.getData('text');
    var val = event.target.value + value;
    if ((value.split("@").length - 1) == 1) {
        if ((val.split("@").length - 1) >= 2) {
            event.preventDefault();
        }
    }
    var re = /\S+@\S+\.\S+/;
    if (isNaN(value)) {
        if (!re.test(value)) {
            event.preventDefault();
        } else {
            $(".label").text("Email");
            $(".numberlabel").hide();
        }
    } else {
        if (value.length != 10) {
            event.preventDefault();
        } else {
            if (value[0] < 6 || value[0] == "@" || value[0] == ".") {
                event.preventDefault();
            } else {
                $(".numberlabel").show();
                $(".label").text("Mobile Number");
            }
        }
    }
}

function preventPasteDigits(event) {
    var value = event.clipboardData.getData('text') || window.clipboardData.getData('text');
    var regEx = new RegExp("^[a-zA-Z]+$");
    if (regEx.test(value) == false) event.preventDefault();
}

function preventCharacters(event) {
    var x = event.which || event.keyCode;
    if (x < 48 || x > 57) event.preventDefault();
}