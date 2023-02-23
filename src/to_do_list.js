

const ar = "Working".split()

ar.forEach(u =>{
    console.log("Is it" + " " + u)
})




const gettinguserinput =  document.getElementById("userinput");

const usebutton = document.getElementsByTagName("input");



const one = 1;

usebutton[one].addEventListener("click",(event) =>{
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv)
    newDiv.innerHTML = gettinguserinput['value']

    newDiv.style.marginLeft = "580px"
    newDiv.style.fontFamily = "Verdana";
    newDiv.style.fontSize = "30px";
    
    console.log(gettinguserinput['value'].length)


    if (gettinguserinput['value'] == ''){
        alert("Please enter a item to the to-do-list".toString())
    }

    
    
    
    
    setTimeout((e)=>{
    gettinguserinput['value'] = '';

    },200)
    
    






function removeinguserinput(){
    
    newDiv.addEventListener("click",(event)=>{
        /*
        let promise = new Promise((resolve,reject) =>{
            resolve(
                newDiv.style.color = "red"
            );
        })

        promise.then((yea)=>{
            console.log(yea)
        }).catch((error)=>{
            console.log(error)
        })

        */

        
        newDiv.style.textDecoration = "line-through"
        newDiv.style.color = "red";
        

        newDiv.addEventListener("click", (event)=>{
            asking = prompt("Do you want to remove this item please Say Yes or No?")
        
            const normalA = "Yes"
            if (asking == normalA | asking == normalA.toLowerCase()) {
                console.log("Yea")
                
                newDiv.parentNode.removeChild(newDiv);
            }
            else if (asking == "No" | asking == "no"){
                alert("User doesnt want to remove the item")
                console.log("User doesn't want to remove the iteam");
                newDiv.style.textDecoration = "none";
                newDiv.style.color = "black";
            } else{
                alert("Type enter Yes or No");
                newDiv.style.textDecoration = "none";
                newDiv.style.color = "black";
            }
        
            
        })
        
        


        
        
    })

    
}
    


removeinguserinput();





    
    
    
})





/************************************************************************************************
    gettinguserinput.addEventListener("keypress", function (e) {
            const ent = "Enter"
            if (e.key == ent) {
                setInterval((e)=>{
                    gettinguserinput['value'] = '';
                },2000)
            }
           
            

            
    });


function Askingtoremove(){
    newDiv.addEventListener("mouseenter",(event)=>{
        asking = prompt("Do you want to remove this iteam:")
        const normalA = "Yes"
        if (asking == normalA){
            removeinguserinput();
        }
    })
}


Askingtoremove();

*/