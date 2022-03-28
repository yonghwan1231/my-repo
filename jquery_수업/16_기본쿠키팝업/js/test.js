$(function(){

  $(".close").click(function(e){
    e.preventDefault()
    $(".popup").fadeOut()
  })



  function makingCookie(){
    today=new Date()
    date=today.getDate()
    today.setDate(date+1)
    duedate=today.toGMTString()

    document.cookie = "popup=done; path=/; expires="+duedate  
  }

})