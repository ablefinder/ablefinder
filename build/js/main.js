function playVideo(e){if(video=$(e).find("video").get(0),!video)return!0;0<video.currentTime&&!video.paused&&!video.ended&&2<video.readyState||video.play()}function pauseVideo(e){if(video=$(e).find("video").get(0),!video)return!0;0<video.currentTime&&!video.paused&&!video.ended&&2<video.readyState&&video.pause()}function onScroll(e){var t=$(document).scrollTop();$("#secondNav li a").each(function(){var e=$(this),o=$(e.attr("href"));o.position().top-200<=t&&o.position().top+o.height()>t?(e.not(".active")&&($("#secondNav li a").removeClass("active"),e.addClass("active"),(e.offset().left<0||e.offset().left>$(window).width()-50)&&$("#secondNav").animate({scrollLeft:e.offset().left},300)),playVideo(o)):(e.removeClass("active"),pauseVideo(o))})}$(document).ready(function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$("#sidebarNav").toggleClass("open"),$("#PageOverlay").toggleClass("open"),$("body").toggleClass("open")}),$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(e){e.preventDefault(),$("a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var o=this.hash,t=$(o);t.length&&$("html, body").stop().animate({scrollTop:t.offset().top},500,"swing",function(){window.location.hash=o})});var e,s,o,i,l,r,t=$(window).scrollTop();$(window).scroll(function(){var e=$(this).scrollTop();e<0&&(e=0),t<e?$(".header, body").addClass("fixed"):$(".header, body").removeClass("fixed"),t=e}),$("#ourHistory").length&&(e=$("#ourHistory .owl-carousel .carousel-content").length,s=$('#ourHistory input[type="range"]'),o=$("#ourHistory .owl-carousel"),i=!50,l=50*(e-1),r=function(e){return Math.round(e/50)},o.on("changed.owl.carousel initialized.owl.carousel",function(e){var o,t,n,a;e.item&&(o=e.item.index,(t=e.item.count)<=o?o-=t:o<0&&(o+=t),console.log("scrollto",o),r(s.val())==o||i||((a=50*(n=o))<0&&(a=0),l<a&&(a=l),$({val:s.val()}).animate({val:50*n},{duration:300,easing:"linear",step:function(e){s.val(Math.ceil(e))}})))}),o.owlCarousel({loop:!1,margin:24,responsiveClass:!0,dots:!1,startPosition:1,responsive:{0:{items:1,nav:!0},500:{items:2,nav:!0},768:{items:3,nav:!0},980:{items:4,nav:!0}}}),s.prop("min",0),s.val(100),s.prop("max",l),s.on("change input",function(e){o.trigger("to.owl.carousel",[r($(this).val()),300])}),s.on("mousedown",function(e){i=!0}),s.on("mouseup",function(e){i=!1}),setTimeout(function(){o.trigger("to.owl.carousel",[e,1])},1));function n(){$(".show-modal").removeClass("show-modal"),$("body").removeClass("no-scroll")}$(".trigger").on("click",function(){return function(e){console.log("modal open ",e);var o=$("#"+e);o.length&&($("body").addClass("no-scroll"),o.addClass("show-modal"))}($(this).data("target")),!1}),$(".close-button").on("click",function(){n()}),$("body").on("click",function(e){$(e.target).is(".modal")&&n()}),$('select[name="country_id"]').length&&$.get("/countries.json").done(function(e){$('select[name="country_id"]').each(function(){var t=$(this);$.each(e,function(e,o){t.append($("<option />").val(e).text(o))})})}),$("select").on("blur",function(){$(this).attr("value",$(this).val())})}),$(document).ready(function(){$("#modalFeedback form").on("submit",function(){var t=$(this);return t.find(".field").removeClass("error-block"),$.post(window.URL_FORM_FEEDBACK,$(this).serialize()).done(function(e){$("#modalFeedback .modal-header").html(""),$("#modalFeedback .modal-content").html('<p class="finish-text">Thank you for your feedback!</p>')}).fail(function(e){e.responseJSON&&$.each(e.responseJSON,function(e,o){t.find('[name="'+e+'"]').closest(".field").addClass("error-block").find("p").text(o.join(", "))})}),!1}),$("#modalStory form").on("submit",function(){var t=$(this);return t.find(".field").removeClass("error-block"),$.post(window.URL_FORM_STORY,$(this).serialize()).done(function(e){$("#modalStory .modal-header").html(""),$("#modalStory .modal-content").html('<p class="finish-text">Тhank you, your story has been sent!</p>')}).fail(function(e){e.responseJSON&&$.each(e.responseJSON,function(e,o){t.find('[name="'+e+'"]').closest(".field").addClass("error-block").find("p").text(o.join(", "))})}),!1}),$("#modalContact form").on("submit",function(){var t=$(this);return t.find(".field").removeClass("error-block"),$.post(window.URL_FORM_CONTACT,$(this).serialize()).done(function(e){$("#modalContact .modal-header").html(""),$("#modalContact .modal-content").html('<p class="finish-text">Тhank you, your story has been sent!</p>')}).fail(function(e){e.responseJSON&&$.each(e.responseJSON,function(e,o){t.find('[name="'+e+'"]').closest(".field").addClass("error-block").find("p").text(o.join(", "))})}),!1})}),$(document).ready(function(){size_li=$(".inf_scroll .inf_wrap").length,x=10,$(".inf_scroll .inf_wrap:lt("+x+")").fadeIn(),$("#loadMore").click(function(){x=x+10<=size_li?x+10:size_li,$(".inf_scroll .inf_wrap:lt("+x+")").fadeIn(),$(this).toggle(x<size_li)});document.addEventListener("invalid",function(e){$(e.target).addClass("invalid"),$("html, body").animate({scrollTop:$($(".invalid")[0]).offset().top-150},0)},!0),document.addEventListener("change",function(e){$(e.target).removeClass("invalid")},!0)}),$(document).ready(function(){var t="Read more";$(".more").each(function(){var e,o=$(this).html();327<o.length&&(e=o.substr(0,327)+'<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>'+o.substr(327,o.length-327)+'</span><a href="" class="morelink">'+t+"</a></span>",$(this).html(e))}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(t)):($(this).addClass("less"),$(this).html("Hide")),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})}),$(document).ready(function(){var e,o;$(".expand_all_toggle").on("click",function(){$(this).hasClass("open")?($(".acc_content").slideUp(),$(this).removeClass("open"),$(this).text("Expand all"),$(".acc_toggle").removeClass("active")):($(this).text("Collapse all"),$(".acc_content").slideDown(),$(this).addClass("open"),$(".acc_toggle").addClass("active"))}),e=jQuery,o=e(".acc_wrapper .acc_content").hide(),e(".acc_wrapper .acc_toggle.first").next().addClass("active").slideDown(),e(".acc_wrapper .acc_toggle").click(function(){return $this=e(this),$target=$this.next(),$target.hasClass("active")?($this.removeClass("active"),$target.removeClass("active").slideUp()):(o.removeClass("active").slideUp(),$this.addClass("active"),$target.addClass("active").slideDown()),!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJCgnI25hdi1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQoJyNzaWRlYmFyTmF2JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQoJyNQYWdlT3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAkKGRvY3VtZW50KS5vZmYoJ3Njcm9sbCcpO1xyXG5cclxuICAgICQoJ2EnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmhhc2gsXHJcbiAgICAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xyXG4gICAgaWYgKCR0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgJ3Njcm9sbFRvcCc6ICR0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sIDUwMCwgJ3N3aW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIHZhciBsYXN0U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHN0IDwgMClcclxuICAgICAgc3QgPSAwO1xyXG4vLyAgICBpZiAoc3QgPiBtYXhTY3JvbGxUb3ApIC8vICQoZG9jdW1lbnQpLmhlaWdodCgpXHJcbi8vICAgICAgc3QgPSBtYXhTY3JvbGxUb3A7XHJcbiAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgJCgnLmhlYWRlciwgYm9keScpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmhlYWRlciwgYm9keScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xyXG4gIH0pO1xyXG5cclxuICBpZiAoJCgnI291ckhpc3RvcnknKS5sZW5ndGgpIHtcclxuICAgIHZhciBvd2xJdGVtQ291bnQgPSAkKCcjb3VySGlzdG9yeSAub3dsLWNhcm91c2VsIC5jYXJvdXNlbC1jb250ZW50JykubGVuZ3RoO1xyXG4gICAgdmFyICRyYW5nZUlucHV0ID0gJCgnI291ckhpc3RvcnkgaW5wdXRbdHlwZT1cInJhbmdlXCJdJyk7XHJcbiAgICB2YXIgJG93bENvbnRhaW5lciA9ICQoJyNvdXJIaXN0b3J5IC5vd2wtY2Fyb3VzZWwnKTtcclxuICAgIHZhciByYW5nZUNvZWYgPSA1MDtcclxuICAgIHZhciByYW5nZVRvdWNoZWQgPSBmYWxzZTtcclxuICAgIHZhciByYW5nZU1heCA9IChvd2xJdGVtQ291bnQtMSkqcmFuZ2VDb2VmO1xyXG4gICAgdmFyIHJhbmdlTWluID0gMDsvLzEqcmFuZ2VDb2VmO1xyXG4gICAgdmFyIHJhbmdlVmFsVG9JbmRleCA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKGlucHV0IC8gcmFuZ2VDb2VmKTtcclxuICAgIH1cclxuICAgIHZhciByYW5nZVNjcm9sbFRvID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgdmFyIHRvID0gaW5kZXgqcmFuZ2VDb2VmO1xyXG4gICAgICBpZiAodG8gPCByYW5nZU1pbilcclxuICAgICAgICB0byA9IHJhbmdlTWluO1xyXG4gICAgICBpZiAodG8gPiByYW5nZU1heClcclxuICAgICAgICB0byA9IHJhbmdlTWF4O1xyXG4gICAgICAkKHsgdmFsOiAkcmFuZ2VJbnB1dC52YWwoKSB9KS5hbmltYXRlKHsgdmFsOiBpbmRleCpyYW5nZUNvZWYgfSwge1xyXG4gICAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXHJcbiAgICAgICAgICBzdGVwOiBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgJHJhbmdlSW5wdXQudmFsKE1hdGguY2VpbCh2YWwpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJG93bENvbnRhaW5lci5vbignY2hhbmdlZC5vd2wuY2Fyb3VzZWwgaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5pdGVtKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSBlLml0ZW0uaW5kZXg7XHJcbiAgICAgICAgICB2YXIgY291bnQgPSBlLml0ZW0uY291bnQ7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPj0gY291bnQpIHtcclxuICAgICAgICAgICAgICBpbmRleCA9IGluZGV4IC0gY291bnQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgIGluZGV4ID0gaW5kZXggKyBjb3VudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGx0bycsIGluZGV4KTtcclxuICAgICAgICAgIGlmICgocmFuZ2VWYWxUb0luZGV4KCRyYW5nZUlucHV0LnZhbCgpKSAhPSBpbmRleCkgJiYgKCFyYW5nZVRvdWNoZWQpKXtcclxuICAgICAgICAgICAgcmFuZ2VTY3JvbGxUbyhpbmRleCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRvd2xDb250YWluZXIub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOjI0LFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG4gICAgICAgIGRvdHM6ZmFsc2UsXHJcbi8vICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbjogMSxcclxuICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDUwMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgIG5hdjp0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgICAgbmF2OnRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA5ODA6e1xyXG4gICAgICAgICAgICBpdGVtczo0LFxyXG4gICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgJHJhbmdlSW5wdXQucHJvcCgnbWluJywgcmFuZ2VNaW4pO1xyXG4gICAgJHJhbmdlSW5wdXQudmFsKDIqcmFuZ2VDb2VmKTtcclxuICAgICRyYW5nZUlucHV0LnByb3AoJ21heCcsIHJhbmdlTWF4KTtcclxuXHJcbiAgICAkcmFuZ2VJbnB1dC5vbignY2hhbmdlIGlucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkb3dsQ29udGFpbmVyLnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsIFtyYW5nZVZhbFRvSW5kZXgoJCh0aGlzKS52YWwoKSksIDMwMCBdKTtcclxuICAgIH0pO1xyXG4gICAgJHJhbmdlSW5wdXQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgcmFuZ2VUb3VjaGVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgJHJhbmdlSW5wdXQub24oJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHJhbmdlVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgJG93bENvbnRhaW5lci50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCBbb3dsSXRlbUNvdW50LCAxIF0pO1xyXG4gICAgfSwgMSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHZhciBtb2RhbENsb3NlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc2hvdy1tb2RhbCcpLnJlbW92ZUNsYXNzKCdzaG93LW1vZGFsJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG1vZGFsT3BlbiA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbW9kYWwgb3BlbiAnLCBpZCk7XHJcbiAgICB2YXIgJG1vZGFsID0gJCgnIycgKyBpZCk7XHJcbiAgICBpZiAoJG1vZGFsLmxlbmd0aCkge1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAkbW9kYWwuYWRkQ2xhc3MoJ3Nob3ctbW9kYWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoJy50cmlnZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBtb2RhbE9wZW4oJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jbG9zZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIG1vZGFsQ2xvc2VBbGwoKTtcclxuICB9KTtcclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKCQoZS50YXJnZXQpLmlzKCcubW9kYWwnKSkge1xyXG4gICAgICBtb2RhbENsb3NlQWxsKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmICgkKCdzZWxlY3RbbmFtZT1cImNvdW50cnlfaWRcIl0nKS5sZW5ndGgpIHtcclxuICAgICQuZ2V0KCcvY291bnRyaWVzLmpzb24nKS5kb25lKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAkKCdzZWxlY3RbbmFtZT1cImNvdW50cnlfaWRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgJC5lYWNoKHJlc3VsdCwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgJHRoaXMuYXBwZW5kKCQoXCI8b3B0aW9uIC8+XCIpLnZhbChrZXkpLnRleHQodmFsdWUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgJCgnc2VsZWN0Jykub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuYXR0cigndmFsdWUnLCAkKHRoaXMpLnZhbCgpKTtcclxuICB9KTtcclxuIH0pO1xyXG5cclxuZnVuY3Rpb24gcGxheVZpZGVvKGhvbGRlcikge1xyXG4gIHZpZGVvID0gJChob2xkZXIpLmZpbmQoJ3ZpZGVvJykuZ2V0KDApO1xyXG4gIGlmICghdmlkZW8pXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgdmFyIGlzUGxheWluZyA9IHZpZGVvLmN1cnJlbnRUaW1lID4gMCAmJiAhdmlkZW8ucGF1c2VkICYmICF2aWRlby5lbmRlZCAmJiB2aWRlby5yZWFkeVN0YXRlID4gMjtcclxuICBpZiAoIWlzUGxheWluZykge1xyXG4gICAgdmlkZW8ucGxheSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF1c2VWaWRlbyhob2xkZXIpIHtcclxuICB2aWRlbyA9ICQoaG9sZGVyKS5maW5kKCd2aWRlbycpLmdldCgwKTtcclxuICBpZiAoIXZpZGVvKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgdmFyIGlzUGxheWluZyA9IHZpZGVvLmN1cnJlbnRUaW1lID4gMCAmJiAhdmlkZW8ucGF1c2VkICYmICF2aWRlby5lbmRlZCAmJiB2aWRlby5yZWFkeVN0YXRlID4gMjtcclxuICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICB2aWRlby5wYXVzZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25TY3JvbGwoZXZlbnQpIHtcclxuICB2YXIgc2Nyb2xsUG9zID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgJCgnI3NlY29uZE5hdiBsaSBhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY3VyckxpbmsgPSAkKHRoaXMpO1xyXG4gICAgdmFyIHJlZkVsZW1lbnQgPSAkKGN1cnJMaW5rLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICB2YXIgdmlkZW8gPSBudWxsO1xyXG4gICAgaWYgKHJlZkVsZW1lbnQucG9zaXRpb24oKS50b3AtMjAwIDw9IHNjcm9sbFBvcyAmJiByZWZFbGVtZW50LnBvc2l0aW9uKCkudG9wICsgcmVmRWxlbWVudC5oZWlnaHQoKSA+IHNjcm9sbFBvcykge1xyXG4gICAgICBpZiAoY3Vyckxpbmsubm90KCcuYWN0aXZlJykpIHtcclxuICAgICAgICAkKCcjc2Vjb25kTmF2IGxpIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgY3VyckxpbmsuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmICgoY3Vyckxpbmsub2Zmc2V0KCkubGVmdCA8IDApIHx8IChjdXJyTGluay5vZmZzZXQoKS5sZWZ0ID4gKCQod2luZG93KS53aWR0aCgpIC0gNTApICkpXHJcbiAgICAgICAgICAkKCcjc2Vjb25kTmF2JykuYW5pbWF0ZSggeyBzY3JvbGxMZWZ0IDogY3Vyckxpbmsub2Zmc2V0KCkubGVmdCB9LCAzMDAgKTtcclxuICAgICAgfVxyXG4gICAgICBwbGF5VmlkZW8ocmVmRWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIHBhdXNlVmlkZW8ocmVmRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vKmZvcm1zKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgJCgnI21vZGFsRmVlZGJhY2sgZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkZm9ybSA9ICQodGhpcyk7XHJcbiAgICAkZm9ybS5maW5kKCcuZmllbGQnKS5yZW1vdmVDbGFzcygnZXJyb3ItYmxvY2snKTtcclxuICAgICQucG9zdCh3aW5kb3cuVVJMX0ZPUk1fRkVFREJBQ0ssICQodGhpcykuc2VyaWFsaXplKCkpLmRvbmUoZnVuY3Rpb24oZG9uZSkge1xyXG4gICAgICAgICQoJyNtb2RhbEZlZWRiYWNrIC5tb2RhbC1oZWFkZXInKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kYWxGZWVkYmFjayAubW9kYWwtY29udGVudCcpLmh0bWwoJzxwIGNsYXNzPVwiZmluaXNoLXRleHRcIj5UaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shPC9wPicpO1xyXG4gICAgfSkuZmFpbChmdW5jdGlvbihmYWlsKSB7XHJcbiAgICAgIGlmIChmYWlsLnJlc3BvbnNlSlNPTikge1xyXG4gICAgICAgICQuZWFjaChmYWlsLnJlc3BvbnNlSlNPTiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgJGZvcm0uZmluZCgnW25hbWU9XCInK2tleSsnXCJdJykuY2xvc2VzdCgnLmZpZWxkJykuYWRkQ2xhc3MoJ2Vycm9yLWJsb2NrJykuZmluZCgncCcpLnRleHQodmFsdWUuam9pbignLCAnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gICQoJyNtb2RhbFN0b3J5IGZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpO1xyXG4gICAgJGZvcm0uZmluZCgnLmZpZWxkJykucmVtb3ZlQ2xhc3MoJ2Vycm9yLWJsb2NrJyk7XHJcbiAgICAkLnBvc3Qod2luZG93LlVSTF9GT1JNX1NUT1JZLCAkKHRoaXMpLnNlcmlhbGl6ZSgpKS5kb25lKGZ1bmN0aW9uKGRvbmUpIHtcclxuICAgICAgICAkKCcjbW9kYWxTdG9yeSAubW9kYWwtaGVhZGVyJykuaHRtbCgnJyk7XHJcbiAgICAgICAgJCgnI21vZGFsU3RvcnkgLm1vZGFsLWNvbnRlbnQnKS5odG1sKCc8cCBjbGFzcz1cImZpbmlzaC10ZXh0XCI+0KJoYW5rIHlvdSwgeW91ciBzdG9yeSBoYXMgYmVlbiBzZW50ITwvcD4nKTtcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24oZmFpbCkge1xyXG4gICAgICBpZiAoZmFpbC5yZXNwb25zZUpTT04pIHtcclxuICAgICAgICAkLmVhY2goZmFpbC5yZXNwb25zZUpTT04sIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICRmb3JtLmZpbmQoJ1tuYW1lPVwiJytrZXkrJ1wiXScpLmNsb3Nlc3QoJy5maWVsZCcpLmFkZENsYXNzKCdlcnJvci1ibG9jaycpLmZpbmQoJ3AnKS50ZXh0KHZhbHVlLmpvaW4oJywgJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICAkKCcjbW9kYWxDb250YWN0IGZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpO1xyXG4gICAgJGZvcm0uZmluZCgnLmZpZWxkJykucmVtb3ZlQ2xhc3MoJ2Vycm9yLWJsb2NrJyk7XHJcbiAgICAkLnBvc3Qod2luZG93LlVSTF9GT1JNX0NPTlRBQ1QsICQodGhpcykuc2VyaWFsaXplKCkpLmRvbmUoZnVuY3Rpb24oZG9uZSkge1xyXG4gICAgICAgICQoJyNtb2RhbENvbnRhY3QgLm1vZGFsLWhlYWRlcicpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RhbENvbnRhY3QgLm1vZGFsLWNvbnRlbnQnKS5odG1sKCc8cCBjbGFzcz1cImZpbmlzaC10ZXh0XCI+0KJoYW5rIHlvdSwgeW91ciBzdG9yeSBoYXMgYmVlbiBzZW50ITwvcD4nKTtcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24oZmFpbCkge1xyXG4gICAgICBpZiAoZmFpbC5yZXNwb25zZUpTT04pIHtcclxuICAgICAgICAkLmVhY2goZmFpbC5yZXNwb25zZUpTT04sIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICRmb3JtLmZpbmQoJ1tuYW1lPVwiJytrZXkrJ1wiXScpLmNsb3Nlc3QoJy5maWVsZCcpLmFkZENsYXNzKCdlcnJvci1ibG9jaycpLmZpbmQoJ3AnKS50ZXh0KHZhbHVlLmpvaW4oJywgJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgc2l6ZV9saSA9ICQoXCIuaW5mX3Njcm9sbCAuaW5mX3dyYXBcIikubGVuZ3RoO1xyXG4gIHggPSAxMDtcclxuICAkKCcuaW5mX3Njcm9sbCAuaW5mX3dyYXA6bHQoJyArIHggKyAnKScpLmZhZGVJbigpO1xyXG4gICQoJyNsb2FkTW9yZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIHggPSAoeCArIDEwIDw9IHNpemVfbGkpID8geCArIDEwIDogc2l6ZV9saTtcclxuICAgICQoJy5pbmZfc2Nyb2xsIC5pbmZfd3JhcDpsdCgnICsgeCArICcpJykuZmFkZUluKCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZSh4IDwgc2l6ZV9saSk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBkZWxheSA9IDA7XHJcbiAgdmFyIG9mZnNldCA9IDE1MDtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKGUudGFyZ2V0KS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgkKFwiLmludmFsaWRcIilbMF0pLm9mZnNldCgpLnRvcCAtIG9mZnNldCB9LCBkZWxheSk7XHJcbiAgfSwgdHJ1ZSk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKVxyXG4gIH0sIHRydWUpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gQ29uZmlndXJlL2N1c3RvbWl6ZSB0aGVzZSB2YXJpYWJsZXMuXHJcbiAgICB2YXIgc2hvd0NoYXIgPSAzMjc7ICAvLyBIb3cgbWFueSBjaGFyYWN0ZXJzIGFyZSBzaG93biBieSBkZWZhdWx0XHJcbiAgICB2YXIgZWxsaXBzZXN0ZXh0ID0gXCIuLi5cIjtcclxuICAgIHZhciBtb3JldGV4dCA9IFwiUmVhZCBtb3JlXCI7XHJcbiAgICB2YXIgbGVzc3RleHQgPSBcIkhpZGVcIjtcclxuICAgIFxyXG4gICAgJCgnLm1vcmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgaWYoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcclxuICAgICAgICAgICAgdmFyIGggPSBjb250ZW50LnN1YnN0cihzaG93Q2hhciwgY29udGVudC5sZW5ndGggLSBzaG93Q2hhcik7XHJcbiBcclxuICAgICAgICAgICAgdmFyIGh0bWwgPSBjICsgJzxzcGFuIGNsYXNzPVwibW9yZWVsbGlwc2VzXCI+JyArIGVsbGlwc2VzdGV4dCsgJyZuYnNwOzwvc3Bhbj48c3BhbiBjbGFzcz1cIm1vcmVjb250ZW50XCI+PHNwYW4+JyArIGggKyAnPC9zcGFuPjxhIGhyZWY9XCJcIiBjbGFzcz1cIm1vcmVsaW5rXCI+JyArIG1vcmV0ZXh0ICsgJzwvYT48L3NwYW4+JztcclxuICAgICAgICAgICAgJCh0aGlzKS5odG1sKGh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gXHJcbiAgICAkKFwiLm1vcmVsaW5rXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhcImxlc3NcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChtb3JldGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImxlc3NcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChsZXNzdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnRvZ2dsZSgpO1xyXG4gICAgICAgICQodGhpcykucHJldigpLnRvZ2dsZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoJy5leHBhbmRfYWxsX3RvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAkKCcuYWNjX2NvbnRlbnQnKS5zbGlkZVVwKCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgJCh0aGlzKS50ZXh0KCdFeHBhbmQgYWxsJyk7XHJcbiAgICAgICQoJy5hY2NfdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykudGV4dCgnQ29sbGFwc2UgYWxsJyk7XHJcbiAgICAgICQoJy5hY2NfY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICQoJy5hY2NfdG9nZ2xlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIChmdW5jdGlvbigkKSB7XHJcbiAgICAgIHZhciBhbGxQYW5lbHMgPSAkKCcuYWNjX3dyYXBwZXIgLmFjY19jb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAkKCcuYWNjX3dyYXBwZXIgLmFjY190b2dnbGUuZmlyc3QnKS5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNsaWRlRG93bigpO1xyXG4gICAgICAkKCcuYWNjX3dyYXBwZXIgLmFjY190b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICR0YXJnZXQgPSAkdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnYWN0aXZlJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhbGxQYW5lbHMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnYWN0aXZlJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH0pKGpRdWVyeSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJwbGF5VmlkZW8iLCJob2xkZXIiLCJ2aWRlbyIsIiQiLCJmaW5kIiwiZ2V0IiwiY3VycmVudFRpbWUiLCJwYXVzZWQiLCJlbmRlZCIsInJlYWR5U3RhdGUiLCJwbGF5IiwicGF1c2VWaWRlbyIsInBhdXNlIiwib25TY3JvbGwiLCJldmVudCIsInNjcm9sbFBvcyIsImRvY3VtZW50Iiwic2Nyb2xsVG9wIiwiZWFjaCIsImN1cnJMaW5rIiwidGhpcyIsInJlZkVsZW1lbnQiLCJhdHRyIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCJub3QiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib2Zmc2V0IiwibGVmdCIsIndpbmRvdyIsIndpZHRoIiwiYW5pbWF0ZSIsInNjcm9sbExlZnQiLCJyZWFkeSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImhhc2giLCIkdGFyZ2V0IiwibGVuZ3RoIiwic3RvcCIsImxvY2F0aW9uIiwib3dsSXRlbUNvdW50IiwiJHJhbmdlSW5wdXQiLCIkb3dsQ29udGFpbmVyIiwicmFuZ2VUb3VjaGVkIiwicmFuZ2VNYXgiLCJyYW5nZVZhbFRvSW5kZXgiLCJsYXN0U2Nyb2xsVG9wIiwic2Nyb2xsIiwic3QiLCJpbnB1dCIsIk1hdGgiLCJyb3VuZCIsImluZGV4IiwiY291bnQiLCJ0byIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidmFsIiwiZHVyYXRpb24iLCJlYXNpbmciLCJzdGVwIiwiY2VpbCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsImRvdHMiLCJzdGFydFBvc2l0aW9uIiwicmVzcG9uc2l2ZSIsIjAiLCJpdGVtcyIsIm5hdiIsIjUwMCIsIjc2OCIsIjk4MCIsInByb3AiLCJ0cmlnZ2VyIiwic2V0VGltZW91dCIsIm1vZGFsQ2xvc2VBbGwiLCJpZCIsIiRtb2RhbCIsIm1vZGFsT3BlbiIsImRhdGEiLCJpcyIsImRvbmUiLCJyZXN1bHQiLCIkdGhpcyIsImtleSIsInZhbHVlIiwiYXBwZW5kIiwidGV4dCIsIiRmb3JtIiwicG9zdCIsIlVSTF9GT1JNX0ZFRURCQUNLIiwic2VyaWFsaXplIiwiaHRtbCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJjbG9zZXN0Iiwiam9pbiIsIlVSTF9GT1JNX1NUT1JZIiwiVVJMX0ZPUk1fQ09OVEFDVCIsInNpemVfbGkiLCJ4IiwiZmFkZUluIiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vcmV0ZXh0IiwiY29udGVudCIsInN1YnN0ciIsImhhc0NsYXNzIiwicGFyZW50IiwicHJldiIsImFsbFBhbmVscyIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJqUXVlcnkiLCJoaWRlIiwibmV4dCJdLCJtYXBwaW5ncyI6IkFBbUxBLFNBQVNBLFVBQVVDLEdBRWpCLEdBREFDLE1BQVFDLEVBQUVGLEdBQVFHLEtBQUssU0FBU0MsSUFBSSxJQUMvQkgsTUFDSCxPQUFPLEVBRTJCLEVBQXBCQSxNQUFNSSxjQUFvQkosTUFBTUssU0FBV0wsTUFBTU0sT0FBNEIsRUFBbkJOLE1BQU1PLFlBRTlFUCxNQUFNUSxPQUlWLFNBQVNDLFdBQVdWLEdBRWxCLEdBREFDLE1BQVFDLEVBQUVGLEdBQVFHLEtBQUssU0FBU0MsSUFBSSxJQUMvQkgsTUFDSCxPQUFPLEVBQzJCLEVBQXBCQSxNQUFNSSxjQUFvQkosTUFBTUssU0FBV0wsTUFBTU0sT0FBNEIsRUFBbkJOLE1BQU1PLFlBRTlFUCxNQUFNVSxRQUlWLFNBQVNDLFNBQVNDLEdBQ2hCLElBQUlDLEVBQVlaLEVBQUVhLFVBQVVDLFlBQzVCZCxFQUFFLG1CQUFt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