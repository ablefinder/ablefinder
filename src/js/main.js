$(document).ready(function () {
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('#sidebarNav').toggleClass('open');
    $('#PageOverlay').toggleClass('open');
    $('body').toggleClass('open');
  });
  $(document).on('scroll', onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
//  $(document).off('scroll');

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
    $target = $(target);
    if ($target.length) {
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
        window.location.hash = target;
      });
    }

  });

  var lastScrollTop = $(window).scrollTop();

  $(window).scroll(function(){
    var st = $(this).scrollTop();
    if (st < 0)
      st = 0;
//    if (st > maxScrollTop) // $(document).height()
//      st = maxScrollTop;
    if (st > lastScrollTop){
      $('.header, body').addClass('fixed');
    } else {
      $('.header, body').removeClass('fixed');
    }
    lastScrollTop = st;
  });

  if ($('#ourHistory').length) {
    var owlItemCount = $('#ourHistory .owl-carousel .carousel-content').length;
    var $rangeInput = $('#ourHistory input[type="range"]');
    var $owlContainer = $('#ourHistory .owl-carousel');
    var rangeCoef = 50;
    var rangeTouched = false;
    var rangeMax = (owlItemCount-1)*rangeCoef;
    var rangeMin = 0;//1*rangeCoef;
    var rangeValToIndex = function(input) {
      return Math.round(input / rangeCoef);
    }
    var rangeScrollTo = function(index) {
      var to = index*rangeCoef;
      if (to < rangeMin)
        to = rangeMin;
      if (to > rangeMax)
        to = rangeMax;
      $({ val: $rangeInput.val() }).animate({ val: index*rangeCoef }, {
          duration: 300,
          easing: 'linear',
          step: function(val) {
            $rangeInput.val(Math.ceil(val));
          }
      });
    }

    $owlContainer.on('changed.owl.carousel initialized.owl.carousel', function(e) {
      if (e.item) {
          var index = e.item.index;
          var count = e.item.count;
          if (index >= count) {
              index = index - count;
          } else if (index < 0) {
              index = index + count;
          }
          console.log('scrollto', index);
          if ((rangeValToIndex($rangeInput.val()) != index) && (!rangeTouched)){
            rangeScrollTo(index);
          }
      }
    });

    $owlContainer.owlCarousel({
        loop:false,
        margin:24,
        responsiveClass:true,
        dots:false,
//        center: true,
        startPosition: 1,
        responsive:{
          0:{
            items:1,
            nav:true
          },
          500:{
            items:2,
            nav:true
          },
          768:{
            items:3,
            nav:true
          },
          980:{
            items:4,
            nav:true
          }
        }
      });

    $rangeInput.prop('min', rangeMin);
    $rangeInput.val(2*rangeCoef);
    $rangeInput.prop('max', rangeMax);

    $rangeInput.on('change input', function(e) {
      $owlContainer.trigger('to.owl.carousel', [rangeValToIndex($(this).val()), 300 ]);
    });
    $rangeInput.on('mousedown', function(e) {
      rangeTouched = true;
    });
    $rangeInput.on('mouseup', function(e) {
      rangeTouched = false;
    });

    setTimeout(function() {
      $owlContainer.trigger('to.owl.carousel', [owlItemCount, 1 ]);
    }, 1);

  }


  var modalCloseAll = function() {
    $('.show-modal').removeClass('show-modal');
    $('body').removeClass('no-scroll');
  }

  var modalOpen = function(id) {
    console.log('modal open ', id);
    var $modal = $('#' + id);
    if ($modal.length) {
      $('body').addClass('no-scroll');
      $modal.addClass('show-modal');
    }
  }

  $('.trigger').on('click', function() {
    modalOpen($(this).data('target'));
    return false;
  });

  $('.close-button').on('click', function() {
    modalCloseAll();
  });
  $('body').on('click', function(e) {
    if ($(e.target).is('.modal')) {
      modalCloseAll();
    }
  });

  if ($('select[name="country_id"]').length) {
    $.get('/countries.json').done(function(result) {
      $('select[name="country_id"]').each(function() {
        var $this = $(this);
        $.each(result, function(key, value) {
          $this.append($("<option />").val(key).text(value));
        });
      });
    });
  }
  $('select').on('blur', function() {
    $(this).attr('value', $(this).val());
  });
 });

function playVideo(holder) {
  video = $(holder).find('video').get(0);
  if (!video)
    return true;

  var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
  if (!isPlaying) {
    video.play();
  }
}

function pauseVideo(holder) {
  video = $(holder).find('video').get(0);
  if (!video)
    return true;
  var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
  if (isPlaying) {
    video.pause();
  }
}

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#secondNav li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    var video = null;
    if (refElement.position().top-200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      if (currLink.not('.active')) {
        $('#secondNav li a').removeClass('active');
        currLink.addClass('active');
        if ((currLink.offset().left < 0) || (currLink.offset().left > ($(window).width() - 50) ))
          $('#secondNav').animate( { scrollLeft : currLink.offset().left }, 300 );
      }
      playVideo(refElement);
    } else {
      currLink.removeClass('active');
      pauseVideo(refElement);
    }
  });
}


/*forms*/
$(document).ready(function() {
  $('#modalFeedback form').on('submit', function() {
    var $form = $(this);
    $form.find('.field').removeClass('error-block');
    $.post(window.URL_FORM_FEEDBACK, $(this).serialize()).done(function(done) {
        $('#modalFeedback .modal-header').html('');
        $('#modalFeedback .modal-content').html('<p class="finish-text">Thank you for your feedback!</p>');
    }).fail(function(fail) {
      if (fail.responseJSON) {
        $.each(fail.responseJSON, function(key, value) {
          $form.find('[name="'+key+'"]').closest('.field').addClass('error-block').find('p').text(value.join(', '));
        });
      }
    });
    return false;
  });
  $('#modalStory form').on('submit', function() {
    var $form = $(this);
    $form.find('.field').removeClass('error-block');
    $.post(window.URL_FORM_STORY, $(this).serialize()).done(function(done) {
        $('#modalStory .modal-header').html('');
        $('#modalStory .modal-content').html('<p class="finish-text">Тhank you, your story has been sent!</p>');
    }).fail(function(fail) {
      if (fail.responseJSON) {
        $.each(fail.responseJSON, function(key, value) {
          $form.find('[name="'+key+'"]').closest('.field').addClass('error-block').find('p').text(value.join(', '));
        });
      }
    });
    return false;
  });
  $('#modalContact form').on('submit', function() {
    var $form = $(this);
    $form.find('.field').removeClass('error-block');
    $.post(window.URL_FORM_CONTACT, $(this).serialize()).done(function(done) {
        $('#modalContact .modal-header').html('');
        $('#modalContact .modal-content').html('<p class="finish-text">Тhank you, your story has been sent!</p>');
    }).fail(function(fail) {
      if (fail.responseJSON) {
        $.each(fail.responseJSON, function(key, value) {
          $form.find('[name="'+key+'"]').closest('.field').addClass('error-block').find('p').text(value.join(', '));
        });
      }
    });
    return false;
  });
});

$(document).ready(function () {
  size_li = $(".inf_scroll .inf_wrap").length;
  x = 10;
  $('.inf_scroll .inf_wrap:lt(' + x + ')').fadeIn();
  $('#loadMore').click(function () {
    x = (x + 10 <= size_li) ? x + 10 : size_li;
    $('.inf_scroll .inf_wrap:lt(' + x + ')').fadeIn();
    $(this).toggle(x < size_li);
  });

  var delay = 0;
  var offset = 150;

  document.addEventListener('invalid', function (e) {
    $(e.target).addClass("invalid");
    $('html, body').animate({ scrollTop: $($(".invalid")[0]).offset().top - offset }, delay);
  }, true);
  document.addEventListener('change', function (e) {
    $(e.target).removeClass("invalid")
  }, true);
});

$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 327;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Hide";
    
    $('.more').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

$(document).ready(function() {
  $('.expand_all_toggle').on('click', function() {
    if ($(this).hasClass('open')) {
      $('.acc_content').slideUp();
      $(this).removeClass('open');
      $(this).text('Expand all');
      $('.acc_toggle').removeClass('active');
    }else{
      $(this).text('Collapse all');
      $('.acc_content').slideDown();
      $(this).addClass('open');
      $('.acc_toggle').addClass('active');
    }
  });
  (function($) {
      var allPanels = $('.acc_wrapper .acc_content').hide();
      $('.acc_wrapper .acc_toggle.first').next().addClass('active').slideDown();
      $('.acc_wrapper .acc_toggle').click(function() {
          $this = $(this);
          $target = $this.next();
          if ($target.hasClass('active')) {
              $this.removeClass('active');
              $target.removeClass('active').slideUp();
          } else {
              allPanels.removeClass('active').slideUp();
              $this.addClass('active');
              $target.addClass('active').slideDown();
          }
          return false;
      });
  })(jQuery);
}); 