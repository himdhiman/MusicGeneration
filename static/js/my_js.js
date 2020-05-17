VANTA.HALO({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    baseColor: 0x0,
    backgroundColor: 0x2,
    amplitudeFactor: 3.00,
    xOffset: 0.17,
    yOffset: 0.43,
    size: 3.00
  })

  $(document).on('submit', "#music_form" , function(e){
    e.preventDefault();
    var token = $(":input[name='csrfmiddlewaretoken']").val();
    var data = {
      csrfmiddlewaretoken : token,
    };
    $(".lds-facebook").css("display", "inline-block");
    $.ajax({
        url: "",
        data : data,
        type : "POST",
        success : function(json){
          $(".lds-facebook").css("display", "none");
        },
        failure : function(data){
            alert("Error Occured");
        },
    
    });
});