// 메인 배너
$(function () {
  var swiper = new Swiper('.slide ', {
    speed: 3500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 1500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.slide .swiper-button-next',
      prevEl: '.slide .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.slide .swiper-pagination',
      clickable: true,
    },
  });
});

$(function () {
  $(document).ready(function () {

    var scrollOffset = $('#sub').offset();

    $(window).scroll(function () {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('#sub').addClass('scroll-fixed');
      }
      else {
        $('#sub').removeClass('scroll-fixed');
      }
    });
  });
});



// 슬라이드 배너1
$(function () {
  var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 30,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.gallery .swiper-button-next',
      prevEl: '.gallery .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.gallery .swiper-pagination',
      clickable: true,
    },
  });
});


// 슬라이드 배너2
$(function () {
  var swiper = new Swiper('.gallery2 .gallery_inner ', {
    slidesPerView: 6,//보여지는 갤러리 수
    spaceBetween: 0,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.gallery2 .swiper-button-next',
      prevEl: '.gallery2 .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.gallery2 .swiper-pagination',
      clickable: true,
    },
  });
});

// 슬라이드 배너3
$(function () {
  var swiper = new Swiper('.gallery3 .gallery_inner ', {
    slidesPerView: 5,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.gallery3 .swiper-button-next',
      prevEl: '.gallery3 .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.gallery3 .swiper-pagination',
      clickable: true,
      type: "progressbar"
    },
  });

  var sw = 0;
  $('.btn_pause').click(function () {
    if (sw == 0) {
      $('.btn_pause').addClass('on');
      swiper.autoplay.stop();
      sw = 1;
    } else {
      $('.btn_pause').removeClass('on');
      swiper.autoplay.start();
      sw = 0;
    }
  });
});

// aos
AOS.init({
  duration: 2000 //aos 나타나는 속도
});


// 탑버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top_btn').fadeIn();
  } else {
    $('.top_btn').fadeOut();
  }
});

$('.top_btn').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 400);
  return false;
});

//바텀버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.bottom_btn').fadeIn();
  } else {
    $('.bottom_btn').fadeOut();
  }
});

$('.bottom_btn').click(function () {
  $('html, body').animate({ scrollTop: 6000 }, 400);
  return false;
});


// 검색
$(function () {
  $('input').click(function () {
    $(this).addClass('search');
  });
});


// shop 필터
$(function () {
  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('#filter1').click(function () {
    $('.filter_content div').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
    $(".tittle .text").text("ALL");
  });
  $('#filter2').click(function () {
    $('.filter2').show();
    $('.filter_content div').not('.filter2').hide();
    $(".tittle .text").text("식품");
  });
  $('#filter3').click(function () {
    $('.filter3').show();
    $('.filter_content div').not('.filter3').hide();
    $(".tittle .text").text("의류");
  });
  $('#filter4').click(function () {
    $('.filter4').show();
    $('.filter_content div').not('.filter4').hide();
    $(".tittle .text").text("용품");
  });
  $('#filter5').click(function () {
    $('.filter5').show();
    $('.filter_content div').not('.filter5').hide();
    $(".tittle .text").text("굿즈");
  });
});

// 밑줄효과
// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('on');
    }
    // 그 외의 경우 'on' 클래스 제거
    else {
      entry.target.classList.remove('on');
    }
  });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
  io.observe(el);
});


// IntersectionObserver 를 등록한다.
const io2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 관찰 대상이 viewport 안에 들어온 경우 'on2' 클래스를 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('on2');
    }
    // 그 외의 경우 'on2' 클래스 제거
    else {
      entry.target.classList.remove('on2');
    }
  });
});

const boxElList2 = document.querySelectorAll('.highlight2');
boxElList2.forEach((el) => {
  io2.observe(el);
});

// 숫자 올라가는 효과
$(function () {
  var executed1 = false;

  $('.con2_in').waypoint(function () {
    var targetNumber = $('.number').attr('data-rate');
    if (!executed1) {
      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') 
      $('.number').animateNumber({
        number: targetNumber,
        numberStep: comma_separator_number_step
      }, 1500);
      executed2 = true;
    }
  },
    {
      offset: '80%'
    }
  );

  $('.con2_in').waypoint(function () {
    var targetNumber = $('.number1').attr('data-rate');
    if (!executed1) {
      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') 
      $('.number1').animateNumber({
        number: targetNumber,
        numberStep: comma_separator_number_step
      }, 1500);
      executed2 = true;
    }
  },
    {
      offset: '80%'
    }
  );

  

  $('.con2_in').waypoint(function () {
    var targetNumber = $('.number2').attr('data-rate');
    if (!executed1) {
      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') 
      $('.number2').animateNumber({
        number: targetNumber,
        numberStep: comma_separator_number_step
      }, 1500);
      executed2 = true;
    }
  },
    {
      offset: '80%'
    }
  );
  
});

// magazine 필터
$(function () {
  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('#filter6').click(function () {
    $('.filter6').show();
    $('.filter_content div').not('.filter6').hide();
  });
  $('#filter7').click(function () {
    $('.filter7').show();
    $('.filter_content div').not('.filter7').hide();
  });
  $('#filter8').click(function () {
    $('.filter8').show();
    $('.filter_content div').not('.filter8').hide();
  });
  $('#filter9').click(function () {
    $('.filter9').show();
    $('.filter_content div').not('.filter9').hide();
  });
});

// 팝업
$(function () {
    $('.banner>a:nth-child(1)').click(function () {
        $('.popup').fadeIn();
    });

  //   $('.banner>a:nth-child(1)').click(function () {
  //     $('.pop1').fadeIn();
  // });

    $('.popup a').click(function () {
        $('.popup').fadeOut();
    });
});