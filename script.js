const inputbox=document.querySelector("#inputbox");
const toDoList=document.querySelector("#todolist");

const saving=()=>{
    const allLiLists=document.querySelectorAll("#todolist li");
        // console.log(allLiLists[0].firstChild)
    const Data=[];
    for (let index = 0; index < allLiLists.length; index++) {
                // console.log(index)
                Data[index]=allLiLists[index].textContent;
    }
    localStorage.setItem("keyIsText", JSON.stringify(Data))        
}

inputbox.addEventListener(
    "keyup",
    function(event){
        // console.log(event.key);
        if(event.key== 'Enter'){
            // console.log(this.value)
           runFunction(this.value);
           this.value="";
        }
    }
)
const runFunction = (valuepasskarle) => {
    const elementCreate= document.createElement("li");
    elementCreate.innerHTML=`${valuepasskarle}<i class="fa-solid fa-xmark">`;
    toDoList.appendChild(elementCreate);
    elementCreate.querySelector("i").addEventListener(
        'click',
        function(){
        elementCreate.remove();
        saving();
        }
    )
    saving();
}




// Function on reloading

(
    function(){
        const getData=JSON.parse(localStorage.getItem("keyIsText"));
        alert("Welcome Chief");
        if(getData.length !=0 || getData.length != null){
            getData.forEach((getData) => {
                runFunction(getData);
            }); 
        }
    }
)()
