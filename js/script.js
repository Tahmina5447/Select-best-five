
function clickButton(nameId,btnId){
    const playerNameId=document.getElementById(nameId);
    const playerName=playerNameId.innerText;

    const node = document.createElement("li");
    const textnode = document.createTextNode(playerName);
    node.appendChild(textnode);
    document.getElementById("ol").appendChild(node);

    let lists=document.querySelectorAll('li');
    let listQuantity=lists.length;
    
    
    if(listQuantity===6){
        alert('You can not select more than 5 players.')
     }
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
    playerExpenses.innerText=playercost;

    if(isNaN){
        alert('Please set proper value.')
    }

})

document.getElementById('calculateTotal-btn').addEventListener('click',function(){

    const perPlayer=input('perPlayer-input');
    

    let lists=document.querySelectorAll('li');
    let listQuantity=lists.length;
    const playercost=perPlayer*listQuantity;

    const manager=input('manager-input');
    const coach=input('coach-input');
    

    const total=document.getElementById('total');
    total.innerText=playercost+manager+coach;
    if(isNaN){
        alert('Please set proper value.');
    }

})
