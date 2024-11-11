jQuery(document).ready(function(){
  backgroundImageSize = 1920;
  
  elem = jQuery(".row1 .col1, .row2 .col1, .row3 .col1"); 
  for(ind = 0; ind < 3; ind++) {
    elem[ind].getBoundingClientRect();
   
      elem[ind].style.setProperty('background-position', (elem[ind].getBoundingClientRect().left + jQuery(".col1").width() / 2 - (backgroundImageSize/2))+'px center', 'important');
  }

  var width = $(window).width();
  $(window).on('resize', function(){
     if($(this).width() != width){
        width = $(this).width();
        elem = jQuery(".row1 .col1, .row2 .col1, .row3 .col1"); 
        
        for(ind = 0; ind < 3; ind++) {
          elem[ind].getBoundingClientRect();
          elem[ind].style.setProperty('background-position', (elem[ind].getBoundingClientRect().left + jQuery(".col1").width() / 2 - (backgroundImageSize/2))+'px center', 'important');
        }
     }
  });
});