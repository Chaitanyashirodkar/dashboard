$(function() {
    $(".sidebar-link").click(function() {
        $(".sidebar-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(window)
    .resize(function() {
        if ($(window).width() > 1090) {
            $(".sidebar").removeClass("collapse");
        } else {
            $(".sidebar").addClass("collapse");
        }
    })
    .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
    v.addEventListener("mouseover", () => {
        const video = v.querySelector("video");
        video.play();
    });
    v.addEventListener("mouseleave", () => {
        const video = v.querySelector("video");
        video.pause();
    });
});

$(function() {
    $(".logo, .logo-expand, .discover").on("click", function(e) {
        $(".main-container").removeClass("show");
        $(".main-container").scrollTop(0);
    });
    $(".trending, .video").on("click", function(e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".trending").addClass("is-active");
    });

    $(".video").click(function() {
        var source = $(this).find("source").attr("src");
        var title = $(this).find(".video-name").text();
        var person = $(this).find(".video-by").text();
        var img = $(this).find(".author-img").attr("src");
        $(".video-stream video").stop();
        $(".video-stream source").attr("src", source);
        $(".video-stream video").load();
        $(".video-p-title").text(title);
        $(".video-p-name").text(person);
        $(".video-detail .author-img").attr("src", img);
    });
});


$(function () {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.tabs-content li'),
        $tabslis = $('.tabs li');
    
    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();
  
    $('.tabs').on('click', 'li', function (e) {
      var $current = $(e.currentTarget),
          index = $current.index();
      
      $tabslis.removeClass('active-tab');
      $current.addClass('active-tab');
      $contentlis.hide().eq(index).show();
       });
  });

$('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.sidebar').toggleClass('add-translate');
    $('.hamburger-close').removeClass('hide').addClass('show');
    $('.hamburger').removeClass('show').addClass('hide');

    
    $('.main-container').toggleClass('add-padding');

});
$('.hamburger-close').click(function (e) { 
    e.preventDefault();
    $('.sidebar').toggleClass('add-translate');
   
    $('.hamburger-close').removeClass('show').addClass('hide');
    $('.hamburger').removeClass('hide').addClass('show');

    
    $('.main-container').toggleClass('add-padding');

});


$('.inner-links').slideUp();
$('.discover').click(function (e) { 
    e.preventDefault();
    $('.inner-links').slideDown();
});