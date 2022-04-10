var i=0;
function NextPic(){
    const pict = document.querySelectorAll('.slider img');
    pict[i].style.display = "none";
    const c = (i!=pict.length-1)?i++:i=0;pict[i].style.display = "block";
}

function BackPic(){
    const pict = document.querySelectorAll('.slider img');
    if(i>0){
        pict[i].style.display = "none";
        i--;pict[i].style.display = "block";}
    else{
        pict[i].style.display = "none";
        i=pict.length-1;
        pict[i].style.display = "block";}
}


setInterval(NextPic,5000);