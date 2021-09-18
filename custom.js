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



var substringMatcher = function(strs) {
    console.log('strs', strs);
    return function findMatches(q, cb) {
      console.log('q', q);
      var matches, substringRegex;
  
      // an array that will be populated with substring matches
      matches = [];
      console.log('matches', matches);
  
      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');
  
      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      
      console.log('matches', matches);
  
      cb(matches);
    };
  };
  
  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });