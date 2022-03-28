setInterval(showTime, 1000);

function showTime(){
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    changeBg(hour);
    getHr(hour);    

    $(".hr").text(plusZero(hour));
    $(".min").text(plusZero(min));
    $(".sec").text(plusZero(sec));    
}

function getHr(hour){
    if(hour<12){
        $(".day").text("am");
    }else{
        $(".day").text("pm");
    }
}

function plusZero(time){
    ( time < 10 ) ? time = "0"+time : time;
    return time; 
}

function changeBg(hour){
    if(hour >=5 && hour<11){
        $("#wrap").removeClass().addClass("morning");
    }
    if(hour >=11 && hour<16){
        $("#wrap").removeClass().addClass("afternoon");
    }
    if(hour >=16 && hour<21){
        $("#wrap").removeClass().addClass("evening");
    }
    if(hour >=21 || hour<5){
        $("#wrap").removeClass().addClass("night");
    }
}