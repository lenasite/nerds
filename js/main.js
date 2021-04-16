$(document).ready(function(){
    $('.slider__items').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        autoplay: true
    });
    $('.header__nav-item').on('click', function(){
        $('.header__nav-item.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.header__basket').on('click', function(){
        $(this).toggleClass('selected');
    });

    $('.location__item-btn').on('click', function(){
        $('.location__popup.hidden').removeClass('hidden');
    });
    $('.location__popup-close').on('click', function(){
        $('.location__popup').addClass('hidden');
    });

    $('.sort__items-link').on('click', function(){
        $('.sort__items-link.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.products__pagination-link').on('click', function(){
        $('.products__pagination-link.active').removeClass('active');
        $(this).addClass('active');
    });


    ymaps.ready(init);		
    function init() {
	var myMap = new ymaps.Map("map", {
		center: [59.939304, 30.322132],
        zoom: 17,
        controls: []
	}, {
		searchControlProvider: 'yandex#search'
	});
 
    var myPlacemark = new ymaps.Placemark([59.938627, 30.323192], null,{
        iconLayout: 'default#image',
        iconImageHref: "images/map-marker.png",
        iconImageSize: [231, 190],
        iconImageOffset: [-60, -200]
    });
    myMap.geoObjects.add(myPlacemark);
    }


    var inputLeft = document.getElementById("left");
    var inputRight = document.getElementById("right");

    var thumbLeft = document.querySelector(".scroll > .thumb.left");
    var thumbRight = document.querySelector(".scroll > .thumb.right");
    var range = document.querySelector(".scroll > .range");

    function setLeftValue() {
        var _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";
    }
    setLeftValue();

    function setRightValue() {
        var _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbRight.style.right = (100 - percent) + "%";
        range.style.right = (100 - percent) + "%";
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    inputLeft.addEventListener("mouseover", function() {
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function() {
        thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function() {
        thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function() {
        thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function() {
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function() {
        thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function() {
        thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function() {
        thumbRight.classList.remove("active");
    });

  });