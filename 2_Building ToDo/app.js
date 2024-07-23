let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value=""; //for the reset initialize as empty string.

    });
    
    ul.addEventListener("click",function(event){
        // console.log(event.target);
        // console.log(event.target.nodeName);
        if(event.target.nodeName == "BUTTON"){
          let listItem=event.target.parentElement;
        //   console.log(listItem);
        listItem.remove();
        console.log("deleted");
        }
    

    });
    
        // let delbtns=document.querySelectorAll(".delete");
        // for(delBtn of delbtns){
        //     delBtn.addEventListener("click",function(){
        //         let parent=this.parentElement; //delbtn.parentelement
        //         console.log(parent);
        //         parent.remove();
        //     });
        // }