$(document).ready(function () {
    /* завдання 1 */
    $('#my_button').button();
    /* завдання 2 */
    $("#clear_form").button();
    $("#clear_form").click(function (event) {
        $('#div_form_1 input[type=checkbox]').prop('checked', false).button("refresh");
        $('#div_form_1 input[type=radio]').prop('checked', false).button("refresh"); // Додайте цей рядок
        $('input[type=text], textarea').val('');

        $("#progressbar").progressbar({ value: 0 });
        event.preventDefault();
    })
    /* завдання 3 */

    $('input[type=checkbox]').checkboxradio();
    $('#radio input[type=radio]').checkboxradio();

    /* завдання 4 */
    $("#motoSelect, #daysSelect").selectmenu();

    /* завдання 5 */
 /*   $.widget("custom.iconselectmenu", $.ui.selectmenu, {
    _renderItem: function (ul, item) {
        var li = $("<li>", {
                "class": item.disabled ? "ui-state-disabled" : ""
            }),
            wrapper = $("<div>", { text: item.label });

        $("<span>", {
            style: item.element.attr("data-style"),
            "class": "ui-icon " + item.element.attr("data-class")
        }).appendTo(wrapper);

        return li.append(wrapper).appendTo(ul);
    }
}); */

// Ініціалізація віджета
$("#motoSelect").iconselectmenu();
    
    

})