
function clickButton(nameId,btnId){
    const playerNameId=document.getElementById(nameId);
    const playerName=playerNameId.innerText;

    let lists=document.querySelectorAll('li');
    let listQuantity=lists.length;

    if(listQuantity>4){
        alert('You can not select more than 5 players.')
        return;
     }

    const node = document.createElement("li");
    const textnode = document.createTextNode(playerName);
    node.appendChild(textnode);
    document.getElementById("ol").appendChild(node);

    
    
    
    
    document.getElementById(btnId).disabled = true;
    document.getElementById(btnId).style.backgroundColor='gray';
}


function input(inputField){
    const Input=document.getElementById(inputField);
    const InputString=Input.value;
    const inputValue=parseInt(InputString);
    return inputValue;
}



document.getElementById('calculate-btn').addEventListener('click',function(){
  
    const perPlayer=input('perPlayer-input')
    
    let lists=document.querySelectorAll('li');
    let listQuantity=lists.length;
    const playercost=perPlayer*listQuantity;

    const playerExpenses=document.getElementById('playerExpenses-input');
    if(perPlayer>0){
        playerExpenses.innerText=playercost;
    }else{
        alert('set proper value')
    }
    // playerExpenses.innerText=playercost;
        
})

document.getElementById('calculateTotal-btn').addEventListener('click',function(){

    const perPlayer=input('perPlayer-input');
    

    let lists=document.querySelectorAll('li');
    let listQuantity=lists.length;
    const playercost=perPlayer*listQuantity;

    const manager=input('manager-input');
    const coach=input('coach-input');
    

    const total=document.getElementById('total');
    if(manager>0 && coach>0 && playercost>0){
        total.innerText=playercost+manager+coach;
    }else(
        alert('please set proper value')
    )
    
    

})



