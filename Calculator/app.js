const btns= document.getElementsByClassName('text');
const inp= document.querySelector('input');

for(let button of btns){
    button.addEventListener('click',(e)=>{
        const text = e.target.innerText;
        if(text=='AC'){
            inp.val="";
        }
        else if(text=='D'){
            inp.value=inp.value.slice(0,-1);
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
