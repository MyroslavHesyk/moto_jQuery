$(document).ready(function () {
    //завдання1
 /*    $('#about-moto').addClass('new'); */

    //завдання2
 /*    $('#about-moto').prepend('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b> prepend </b> </p>');
    $('#about-moto').append('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b>append </b></p>');

    $('#about-moto').before('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b>before </b> </p>');
    $('#about-moto').after('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b>after </b> </p>');
 */
    //завдання3
/*     $('li').hover(
        function () {
            $(this).toggleClass('svitlo');
        }
    ); */

    //завдання4-5
    /*   
      $('.head-moto-img').click(
            function () {
                $(this).clone().appendTo('.koshik-wrapper');
                $(this).remove();
                $('.koshik-wrapper').addClass('full-koshik');
            }
        )
    */

    //завдання 6
    /*     
    $('.head-moto-img').click(
            function () {
                let moto = $(this);
                $('.koshik-wrapper-items').each(
                    function(){
                        if (moto.attr('nomer') == $(this).attr('nomer')) 
                        {
                            $(this).html(moto.clone());
                            moto.remove();
                            $('.koshik-wrapper').addClass('full-koshik');
                        }
                    }
                )
            }
        ) 
    */
   /* Завдання 6 */
   $('.head-moto-img').click(function(){
    let moto = $(this);

    $('.koshik-wrapper-items').each(
        function(){
            if(moto.attr('nomer') == $(this).attr('nomer'))
            {
                $(this).html(moto.clone().dblclick(function(){
                    $(this).remove();
                    rahunok();
                }));
                moto.remove();
             /*    $('.koshik-wrapper').addClass('full-koshik'); */
            }
        }
    );
    rahunok();
});
function rahunok(){
    let count = 0;
    let suma = 0;
    $('.koshik-wrapper-items>.head-moto-img').each(
        function(){
            count++;
            suma= suma+ parseInt($(this).attr('price'));
        }
    )

    $("#suma").html("Всього <b>"+count+"</b> мотоциклів на суму <b>"+suma+"</b> грн");
    if(count>0){
        $('.koshik-wrapper').addClass('full-koshik');
    } else {
        $('.koshik-wrapper').removeClass('full-koshik');
    }
}

})