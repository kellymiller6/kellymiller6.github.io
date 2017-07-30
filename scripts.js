$('.resume').on('click', function(){
  $(this).parents().children('iframe').toggleClass('clicked');
});

$('.resume').on('click', function(){
  $(this).parents().children('button').toggleClass('active');
});

$('article, h1, div').on('click', function(){
  const resFrame = $(this).parents().children().children().children('nav').children('iframe');
  const resBtn = $(this).parents().children().children().children('nav').children('button');

  if(resFrame.hasClass('clicked')){
    resFrame.removeClass('clicked');
  }

  if(resBtn.hasClass('active')){
    resBtn.removeClass('active');
  }
});
