$(document).ready(function() {

$("#sortable").sortable({
    placeholder: 'ui-state-highlight',
    
})
$("#selectable").selectable({
    
})

/* Завдання 1-2 */
let helmetsCount = 0;
let suma =0;

$("#draggable1").draggable({ helper: 'clone'});
$("#draggable2").draggable({ helper: 'clone'});
$("#draggable3").draggable({ helper: 'clone'});
$("#draggable4").draggable({ helper: 'clone'});

var $gallery = $('.features-grids')
var $trash = $('.koshik-wrapper')

$trash.droppable({
    accept: ".features-grids > div",
    classes: {
        'ui-droppable-active': 'ui-state-highlight'
    },
    drop: function(event, ui){
        // рахуємо кількість мото
        helmetsCount++;
        if(helmetsCount>0) {$("#myclear").show()}
        $('#helmetsCount strong').text(helmetsCount);
        // рахуємо суму мото
        var helmet = $(ui.draggable).children();
        suma += parseInt(helmet.attr('price'));
        $('#helmetsSumm strong').text(suma);

        deleteImage(ui.draggable)
    }
})
/* Функція видалення зображення з галереї і додання у кошик */
function deleteImage($item) {
    $item.fadeOut(function(){
        let $list = $('ul',$trash).length ? 
                    $('ul',$trash) : 
                    $('<ul class="gallery ui-helper-reset">').appendTo($trash);
        
        $item.appendTo($list).fadeIn(function(){
            $item 
                .animate({width: '140px'})
                .find('img')
                    .animate({height:"103px", width:"120px"})
            $item
                .find('h3')
                    .animate({fontSize: '12px'})
        })
})
}

/* Перетягування з кошика назад у галерею */
$gallery.droppable({
    accept: ".koshik-wrapper  div",
    classes: {
        'ui-droppable-active': 'ui-state-highlight'
    },
    drop: function(event, ui){
        // рахуємо кількість мото
        helmetsCount--;
        if(helmetsCount == 0) {$("#myclear").hide()}
        $('#helmetsCount strong').text(helmetsCount);
        // рахуємо суму мото
        var helmet2 = $(ui.draggable).children();
        suma -= parseInt(helmet2.attr('price'));
        $('#helmetsSumm strong').text(suma);

        recycleImage(ui.draggable);
    }
})
/* Функція відновлення зображення в галереї */
function recycleImage( $item){
    $item.fadeOut(function(){
        $item
            .css("width","25%")
            .find('img')
                .css({height:"125px", width:"160px"})
            .end()
            .find('h3')
                .animate({fontSize: '24px'})
            .end()
            .appendTo($gallery)
            .fadeIn()

    })
}




})