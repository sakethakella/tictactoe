let box=document.querySelectorAll(".button");
let reset=document.querySelector(".but");
let turno=true;
let turnx=true;
let turn_count=0;
const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

box.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turno){
            box.innerHTML='O';
            turno=false;
        }
        else{box.innerHTML='X';turno=true;}
        box.disabled=true;
        turn_count++;
        if(turn_count>=3){
            checkwinner()
        }
    })
})
const checkwinner=()=>{
    for(let i of winpatterns){
        if((box[i[0]].innerHTML==='X')&&(box[i[1]].innerHTML==='X')&&(box[i[2]].innerHTML==='X')){
            console.log('The winner is X');
            box.forEach((val)=>{
                val.disabled=true;
            });
            document.querySelector('p').innerHTML='The winner is X';
        }
        else if((box[i[0]].innerHTML==='O')&&(box[i[1]].innerHTML==='O')&&(box[i[2]].innerHTML==='O')){
            console.log('the winner is O');
            box.forEach((val)=>{
                val.disabled=true;
            });
            document.querySelector('p').innerHTML='The winner is O';
        }
        else if(turn_count===9){
            console.log('Draw');
        }
    }
}

reset.addEventListener('click',()=>{
    box.forEach((val)=>{
         val.innerHTML='';
         val.disabled=false;
         turn_count=0;
    })
    document.querySelector('p').innerHTML='';
})