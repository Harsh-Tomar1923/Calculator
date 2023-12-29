const buttons = document.querySelectorAll('button');
const inp = document.querySelector('input');
for(let button of buttons){
    button.addEventListener('click',(e)=>{
        const text = e.target.innerText;
        if(text==='AC'){
            inp.value="";
        }
        else if(text==='D'){
            inp.value=inp.value.slice(0,-1);
        }
        else if(text==='x'){
            inp.value+='*';
        }
        else if(text==='^'){
            inp.value+='**';
        }
        else if(text==='='){
            try{
                inp.value=eval(inp.value);
            }
            catch{
                inp.value="Invalid Operation";
            }
        }
        else{
            inp.value+=text;  
        }
    })
    
}
