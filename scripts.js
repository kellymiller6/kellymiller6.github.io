$('.resume').on('click', function(){
  $(this).parents().children('iframe').toggleClass('clicked')
})

$('.resume').on('click', function(){
  $(this).parents().children('button').toggleClass('active')
})
