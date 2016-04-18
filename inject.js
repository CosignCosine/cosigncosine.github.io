window.setInterval(function(){
    var blocked = JSON.parse(localStorage.getItem("blocked")) || [];
    for(var i = 0; i < blocked.length; i++){
      const q = ".author-nickname:contains(" + blocked[i] + ")";
      $(q).each(function(){
        if($(this).parent().hasClass("discussion-meta-info")){
          $(this).parent().parent().parent().hide();
        }else if($(this).parent().parent().hasClass("fork-info")){
          $(this).parent().parent().parent().hide();
        }
      });
    }
  }, 1000)
