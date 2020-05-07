function wait(ms) {
    var d = new Date();
    var d2 = null;
    do {
        d2 = new Date();
    }
    while (d2 - d < ms);
}

//OnClick LogInButton display bg-modal (LogIn Form PopUP)

document.getElementById('LogInButton').addEventListener('click',
    function () {
        $('.form-container').addClass('animated fadeInRight');
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    });

//OnClick LogInButton hide (close) bg-modal (LogIn Form PopUP)
document.querySelector('.close').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'none';
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
        $('.form-container').addClass('temp').removeClass('animated fadeOutRight');
    });

//OnClick LogInButton display BG1-modal (Side Navigation)

document.getElementById('SideNavToggler').addEventListener('click',
    function () {
        document.querySelector('.BG1-modal').style.display = 'flex';
        $('.SideNav').addClass('animated fadeInLeft')
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    });

//OnClick LogInButton hide (close) BG1-modal (Side Navigation)

document.querySelector('.closeSideNav').addEventListener('click',
    function () {
        document.querySelector('.BG1-modal').style.display = 'none';
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
    });


/* CLOSE PopUP When clicking out of it */

var mouse_is_inside = false;

$(document).ready(function () {
    $('.form-container').hover(function () {
        mouse_is_inside = true;
    }, function () {
        mouse_is_inside = false;
    });

    $("body").mouseup(function () {
        if (!mouse_is_inside) {
            $('.bg-modal').hide();
            document.getElementsByTagName("body")[0].style.overflowY = "auto";
        }
    });
});

$(document).ready(function () {
    $('.SideNav').hover(function () {
        mouse_is_inside = true;
    }, function () {
        mouse_is_inside = false;
    });

    $("body").mouseup(function () {
        if (!mouse_is_inside) {
            $('.BG1-modal').hide();
            document.getElementsByTagName("body")[0].style.overflowY = "auto";
        }
    });
});
$(document).keyup(function (e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        document.querySelector('.BG1-modal').style.display = 'none';
        document.querySelector('.bg-modal').style.display = 'none';
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }
});
