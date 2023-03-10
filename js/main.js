$(function () {
  $(".design-slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<img src="images/Arrowleft.svg" alt="leftarrow" class="arrow arrow-left" />',
    nextArrow:
      '<img src="images/Arrowright.svg" alt="rightarrow" class="arrow arrow-right" />',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });
});
