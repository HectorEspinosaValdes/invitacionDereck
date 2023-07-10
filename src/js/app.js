const $days = document.getElementById('dias');
$hours = document.getElementById('horas');
$minutes = document.getElementById('minutos');
$seconds = document.getElementById('segundos');

const countdownDate = new Date('August 12, 2023 11:15:00').getTime();

let interval = setInterval(function(){
    const now = new Date().getTime();
    let distance = countdownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) );
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60) );
    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60 ));
    let second = Math.floor((distance % (1000 * 60))/(1000));

    $days.innerHTML = days;
    $hours.innerHTML= hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0'+second).slice(-2);

    if(distance<0){
        clearInterval(interval);
    }

},1000);
