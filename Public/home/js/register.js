$(function(){
	var verifyimg = $("form .captcha").attr("src");
    
    $("input[type='submit']").click(function(){
     var self = $("#register");
      $.post(self.attr("action"), self.serialize(), success, "json");
      return false;
      function success(data){
          if(!data.status){
             $('.problem').replaceWith('<div class="problem">请解决以下问题然后再提交：<ul><li>'+data.info+'</li></ul></div>');
             $("form .captcha").click();
          }else{
             window.location.href = data.url;
          }

      }
    });
    
    $("form .captcha").click(function(){
         if( verifyimg.indexOf('?')>0){
              $(this).attr("src", verifyimg+'&random='+Math.random());
         }else{
              $(this).attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
        }
    });
});



