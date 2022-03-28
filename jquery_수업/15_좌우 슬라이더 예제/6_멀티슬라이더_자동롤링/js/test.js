$(function(){

  $(".slide1>li:last").prependTo($(".slide1"))
  $(".slide2>li:last").prependTo($(".slide2"))
  
  var eventTrigger = true


  $(".next").click(function(e){
    e.preventDefault()
    clearInterval(timer)
    if(eventTrigger){
      eventTrigger = false
      slide()
    }
  })


  $(".prev").click(function(e){
    e.preventDefault()
    clearInterval(timer)
    if(eventTrigger){
      eventTrigger = false
      slide_r()
    }
  })

  function slide(){
    $(".slide1").animate({"margin-left":"-200%"},1000,function(){
      $(this).children("li:first").appendTo(this)
      $(this).css("margin-left","-100%")
      eventTrigger = true
    })
    $(".slide2").animate({"margin-left":"-200%"},1000,function(){
      $(this).children("li:first").appendTo(this)
      $(this).css("margin-left","-100%")
      eventTrigger = true
    })
  }

  function slide_r(){
    $(".slide1").animate({"margin-left":"0%"},1000,function(){
      $(this).children("li:last").prependTo(this)
      $(this).css("margin-left","-100%")
      eventTrigger = true
    })
    $(".slide2").animate({"margin-left":"0%"},1000,function(){
      $(this).children("li:last").prependTo(this)
      $(this).css("margin-left","-100%")
      eventTrigger = true
    })
  }

  var timer = setInterval(slide,2000)


  var autoTrigger = true

  $(".auto").click(function(e){
    e.preventDefault()
    if(autoTrigger){
      autoTrigger=false;
      return timer
    }
  })

  // 포기

})
