$(document).ready(function() {
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "puff",
      duration: 1000
    }
  });

  $("#my_button").on("click", function (event) {
    event.preventDefault();
    //створюємо змінну з умовами які вибрав користувач
    let umovu = "";
    //додаємо до змінної пункти кнопки які обрав користувач
    if ($("input[type='checkbox']").eq(0).prop("checked") == true) {
      umovu += "Шолом: так <br>";
    }
    if ($("input[type='checkbox']").eq(1).prop("checked") == true) {
      umovu += "Багажник: так <br>";
    }
    if ($("input[type='checkbox']").eq(2).prop("checked") == true) {
      umovu += "Мотоодяг: так <br>";
    }
    //додаємо до змінної пункти
    if ($("#inch_yes").prop("checked") == true) {
      umovu += "Страхування: так <br>";
    } else {
      umovu += "Страхування: ні <br>";
    }
/* ТУТ ОСНОВНЕ ОНОВЛЕННЯ коду */
    $("#dialog").html(
      $("#motoSelect option:selected").text() +
        "<br> Кількість товару: " + $("#custom-handle").text() + "<br>" +
        " на " + $("#from").val() + " до " + $("#to").val() + "<br>" +
        "Запланована відстань: " + $("#amount").val() + "<br>" +
        "Місце оренди: " + $("#tags").val() + "<br>" +
        umovu
    );
  
    let value = $("#progressbar").progressbar("value");
    if (value < 100) {
      alert('Вам потрібно заповнити анкетування');
    } else {
      $("#dialog").dialog("open");
    }
  });


  $("#menu").dmenu();



});
