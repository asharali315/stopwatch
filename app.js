var Laps = document.getElementById('laps');
var milliSecond=document.getElementById('msec') 
var second=document.getElementById('sec') 
var minute=document.getElementById('min') 
 document.getElementById('start')
 document.getElementById('stop').disabled=true
 document.getElementById('reset').disabled=true
 document.getElementById('split').disabled=true

var msec=0,sec=0,min=0;
var interval;

function timeCount()
{
    msec++;
milliSecond.innerHTML=msec;
if(msec >=100)
{
    msec=0;
    sec++;
    milliSecond.innerHTML=msec;
    second.innerHTML=sec;
}
else if(sec >= 60)
{
    min++;
    minute.innerHTML=min;
    sec=0;
    second.innerHTML=sec;
}

}

function start()
{
    interval = setInterval(timeCount,10);
    document.getElementById('start').disabled=true
    document.getElementById('stop').disabled=false
    document.getElementById('reset').disabled=false
    document.getElementById('split').disabled=false
   
}


function stop()
{
    document.getElementById('start').disabled=false
    document.getElementById('stop').disabled=true
    document.getElementById('reset').disabled=false
    document.getElementById('split').disabled=false
    clearInterval(interval)
}

function reset()
{
    document.getElementById('start').disabled=false
    document.getElementById('stop').disabled=false
    document.getElementById('reset').disabled=true
    document.getElementById('split').disabled=true
    clearInterval(interval)
    min=0
    sec=0
    msec=0
    milliSecond.innerHTML=min
    second.innerHTML=sec
    minute.innerHTML=min    
}


function split()
{
    
    Laps.innerHTML = "<li>" + minute.innerHTML + ":" + second.innerHTML +":"+milliSecond.innerHTML +"</li>";
}