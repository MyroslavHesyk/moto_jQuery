
    $(document).ready(function () {
  $("#my_form").submit(function (e) {
e.preventDefault();

            var formData = {
                'shlem': $('#shlem').is(':checked'),
                'bag': $('#bag').is(':checked'),
                'od': $('#od').is(':checked'),
                'inch': $('input[name=inch]:checked').val(),
                'moto': $('#motoSelect').val(),
                'slider_value': $('#slider').slider('value'),
                'from': $('#from').val(),
                'to': $('#to').val(),
                'distance': $('#amount').val(),
                'tags': $('#tags').val(),
                 'email': $('#email').val(),
                'mytextarea': $('#mytextarea').val()
  // Додайте всі інші поля форми за необхідністю
            };

            $.ajax({
                type: "POST",
                url: "6862467655:AAGLQ2wtslVfrJd37IrfkNXnNVYT885eLMc",
                data: formData,
                success: function (data) {
                    // Виведення повідомлення про успішну відправку
                    $("#success-dialog").html("Форма успішно відправлена!");
                    $("#success-dialog").dialog();
                },
                error: function (error) {
                    // Виведення повідомлення про помилку
                    $("#error-dialog").html("Помилка при відправці форми!");
                    $("#error-dialog").dialog();
                }
            });

            // ... (відправка в телеграм-бота)

        });

        // Ініціалізація діалогових вікон
        $("#success-dialog").dialog({
            autoOpen: false,
            modal: true,
            buttons: {
                "OK": function () {
                    $(this).dialog("close");
                }
            }
        });

        $("#error-dialog").dialog({
            autoOpen: false,
            modal: true,
            buttons: {
                "OK": function () {
                    $(this).dialog("close");
                }
            }
        });
    });


