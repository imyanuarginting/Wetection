jQuery(document).ready(function() {
  jQuery('#On-btn').on('submit',function(e)
                   {
      e.preventDefault();
      $.ajax({
        type:'POST',
        url:'/requests',
        data:{
          On:$("#On").val(),
          sw:1
        },
        success:function()
      })
    });
});