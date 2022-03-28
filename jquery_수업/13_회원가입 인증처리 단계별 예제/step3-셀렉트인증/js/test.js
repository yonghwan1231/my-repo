$(function(){

  $("input[type=submit]").click(function(e){

    if(!idCheck()){
      e.preventDefault()
      return false
    }

    if(!pwdCheck()){
      e.preventDefault()
      return false
    }

  })

  // ----------함수모음----------

  function idCheck(){

    if($("#id").val()==""){
      alert($("#id").attr("placeholder"))
      $("#id").addClass("error")
      return false
    } 
    else if($("#id").val().length<5){
      alert("ID는 5자 이상 입력하세요.")
      $("#id").addClass("error")
      return false
    } 
    else{
      $("#id").removeClass("error")
      return true
    }

  }

  // --------------------

  function pwdCheck(){
    if($("#pwd1").val()==""){
      alert($("#pwd1").attr("placeholder"))
      $("#pwd1").addClass("error")
      return false
    } 
    else{
      return true
    }
  }

})