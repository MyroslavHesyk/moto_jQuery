$(document).ready(function () {
    //завдання 1
    /*  $('.slide-text > h1').fadeOut(3000);
     $('.slide-text > h1').fadeIn(1500); */

    //завдання 2
    /*   $('.head-moto-img').fadeTo('slow', 0.05);
      $('.head-moto-img').fadeTo(7000, 1); */

    //завдання 3
    /*  $('.head').slideUp(2000);
     $('.head').slideDown(1000); */

    //завдання 4
    // самостійно

    //завдання 5
    function zr(name_obj, t1, t2) {
        obj = $(name_obj);
        t1 = t1;
        t2 = t2;
        obj.slideUp(t1);
        obj.slideDown(t2);
    }

   /*  zr('#my_form', 2000, 1000);
    zr('#blog>.container>.head', 3000, 2000)
 */

    //завдання 6
    // самостійно
    function  prozor(name_obj, time, opacity){
        obj = $(name_obj);
        time = time;
        opacity = opacity;
        obj.fadeTo(time, opacity);
        obj.slideUp(time);
        obj.slideDown(time);
        obj.fadeTo(time, 1);
    }
    prozor('.slide-text > h1', 2000, 0.1)
})