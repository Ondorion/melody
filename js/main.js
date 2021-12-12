$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $('.home-image path');
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */

  // функция при наведении мыши на этаж
  $('.home-image path').on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // выводим значение этажа в счетчик
  });

  counterUp.on('click', function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа, которое должно быть не больше 18
      currentFloor++; //увеличиваем значение этажа на 1
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false // форматируем переменную с этажом что бы было 01 а не 1
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }

  })

});