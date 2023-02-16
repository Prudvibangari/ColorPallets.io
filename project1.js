var onclick1=document.querySelectorAll('.items');
var i=4;
function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor1()
{
    var onclick1=document.querySelectorAll('.items');
    for(var i=0;i<onclick1.length;i++)
    {
        onclick1[i].style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
    }
   
}
onclick1[i].addEventListener('click',changecolor1);

/*var onclick2=document.getElementById('2');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor2(){
   onclick2.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick2.addEventListener('click',changecolor2);

var onclick3=document.getElementById('3');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor3(){
   onclick3.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick3.addEventListener('click',changecolor3);

var onclick4=document.getElementById('4');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor4(){
   onclick4.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick4.addEventListener('click',changecolor4);

var onclick5=document.getElementById('5');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor5(){
   onclick5.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick5.addEventListener('click',changecolor5);

var onclick6=document.getElementById('6');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor6(){
   onclick6.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick6.addEventListener('click',changecolor6);

var onclick7=document.getElementById('7');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor7(){
   onclick7.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick7.addEventListener('click',changecolor7);

var onclick8=document.getElementById('8');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor8(){
   onclick8.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick8.addEventListener('click',changecolor8);

var onclick9=document.getElementById('9');

function randomnumbers(){
    return Math.floor(Math.random() * 255);   
}
function changecolor9(){
   onclick9.style.backgroundColor='rgba('+randomnumbers()+',' + randomnumbers() + ','+randomnumbers()+')';
}
onclick9.addEventListener('click',changecolor9);


console.log(document.querySelectorAll('.items'));*/