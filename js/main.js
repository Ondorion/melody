$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $('.home-image path');
  var flatsPath = $('.flats path');
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  $('.flat-link').on('mouseover', function () { // функция при наведении мыши на ссылку на квартиру
    $('.flat-link').removeClass('current-flats');
    dataFt = $(this).attr("data-link");
    console.log(dataFt);
    $('.flats path').removeClass('flats-img-current');
    $(`[data-flat=${dataFt}]`).toggleClass('flats-img-current'); // подсвечиваем текущую квартиру
  });


  // функция при наведении мыши на этаж
  $('.home-image path').on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // выводим значение этажа в счетчик
  });

  $('.flats path').on('mouseover', function () { // функция при наведении мыши на квартиру
    $('.flats path').removeClass('flats-img-current');
    dataFlatLi = $(this).attr("data-flat");
    $('.flat-link').removeClass('current-flats');
    $(`[data-link=${dataFlatLi}]`).toggleClass('current-flats');
  });





  floorPath.on('click', toggleModel); // при клике на этаж вызвать окно

  modalCloseButton.on('click', toggleModel); //клик на кнопку закрыть

  viewFlatsButton.on('click', toggleModel);

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

  function toggleModel() { //функция открыть закрыть окно
    modal.toggleClass('is-open');
  }

});