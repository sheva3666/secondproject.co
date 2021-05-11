jQuery(document).ready(function ($) {
const $burger = $(".burger");    
const $links = $(".header__nav-container");
const $arrowUp = $(".arrowUp");
const $headerNav = $(".header__nav");
const $html = $("html");
const $headerNavLink = $(".header__nav a");
    
        $burger.on("click", function () {
        $links.fadeToggle();
        $html.toggleClass("overflow-hidden")
            
        });


        $(window).on(
            "scroll",
            $.debounce(100, function () {
              if ($(this).scrollTop() > 200) {
                $arrowUp.addClass("active");
              } else {
                $arrowUp.removeClass("active");
              }
            })
          );

          $arrowUp.on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
          });

          
          $headerNav.on("click", ".header__link", function () {
            const target = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(target).offset().top - 75 }, 500);
          });

          $headerNavLink.on("click", function () {
            $links.hide();
            
          });

          const $projectsCardsSlider = $(".projects__cards");
          $projectsCardsSlider.slick({
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

          const projectsCardsNew = {
            slidesToShow: 3,
            prevArrow: "<button class=`slick-prev`>></button>",
            prevArrow: "<button class=`slick-next`><</button>",
            mobilefirst: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: "unslick"
              }
            ]
          }; 

          $(window).on("resize", function () {
            if($(this).width >=992) {
              $projectsCardsSlider.slick(projectsCardsNew);
            };
            
          });
        });
       
          