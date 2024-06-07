$ (function(){
  let add = $('.add');
  let hide = $('.hide');
  let toggle = $('.toggle');
  let box = $('.box');

  add.on('click', function(){
   
   box.slideDown();
  });

  hide.on('click', function(){
    box.slideUp();
  });
  toggle.on('click', function(){
   box.toggle();
  });
  
});
$ (function(){
    let start = $('.start');
    let stop = $('.stop');
    let pack = $('.pack');

    start.on('click' , function(){
      pack.animate({
        width:'500px',
        
        
      },5000);
    });
    stop.on('click', function(){
     pack.stop();
    });
    
    
  });
  $(function(){
    let qsn = $('.qsn');

    qsn.on('click', function(){
     if($(this).hasClass('active')){
      $(this).removeClass('active');
     }else{
      qsn.removeClass('active');
      $(this).addClass('active');
     }



      qsn.removeClass('active');
      $(this).addClass('active');
    });
  });