

// Скрипт для управления попапом
document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.querySelectorAll('[data-btn-open-popup]');
    const closeButton = document.querySelector('[data-btn-close-popup]');
    const popup = document.querySelector('[data-popup]');

    // Открытие попапа
    openButton.forEach(item => {
        item.addEventListener('click', function () {
            popup.classList.add('show') // Показываем попап
        });
    })

    // Закрытие попапа
    closeButton.addEventListener('click', function () {
        popup.classList.remove('show') // Скрываем попап
    });

    // Закрытие попапа кликом вне области содержимого
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.remove('show') // Скрываем попап
        }
    });
});

$(document).ready(function () {
	$(".sertificate__slider").slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  speed: 500,
	  centerMode: true,
	   responsive: [
		  {
			breakpoint: 1000,
			settings: {
			   slidesToShow: 3,
			}
		  },
	  {
			breakpoint: 780,
			settings: {
			   slidesToShow: 2,
			}
		  },
		  {
		  breakpoint: 500,
			settings: {
			   slidesToShow: 1,
			}
		  }
		  
	  ]
	});
  });
  

