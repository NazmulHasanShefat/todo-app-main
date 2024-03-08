let myform = document.querySelector("form");
let fuld_text = document.getElementById("input_box");
  myform.addEventListener("submit", (e)=>{
    e.preventDefault();
    addtodu();
  });

  let todos=JSON.parse(localStorage.getItem("todos"));
  if(todos){
    todos.forEach(element => {
      addtodu(element);
    });
  }

  function addtodu(elem){
    let todo_list = document.querySelector(".list_container");
    let toducoll = document.createElement("li");
    let todou_text = fuld_text.value;

   if(elem){
     todou_text=elem.fuld_text;
   }
    if(todou_text){
    toducoll.innerHTML = `
    <li class="mycheck"><div class="cercle"><img src="./images/icon-check.svg" class="check-image" alt=""></div>
    <div class="list-content-text"><p class="pTag">${todou_text}</p></div> 
    <div class="crose-icon"><img src="./images/icon-cross.svg" alt=""></div></li>
    `;
   todo_list.appendChild(toducoll);
   updateLs();
    }

   let close=toducoll.querySelector(".crose-icon");
   close.addEventListener("click", ()=>{
    toducoll.remove();
   });

   let check_todu=toducoll.querySelector(".cercle");
   let check_icon=toducoll.querySelector(".check-image");
   let todo_text_color=toducoll.querySelector(".list-content-text");
    check_todu.addEventListener("click", ()=>{
      check_icon.classList.toggle("checked-icon");
      check_todu.classList.toggle("checked-background");
      toducoll.classList.toggle("clecked");
      todo_text_color.classList.toggle("line-throu_text_color");
      updateLs();
    });
  };
  
  function updateLs(){
    let pTag =document.querySelectorAll(".pTag");
    let arr=[];
    pTag.forEach(element => {
      arr.push({
        fuld_text:element.innerText,
        complete:element.classList.contains("checked-icon")

      })
    });
    localStorage.setItem("todos",JSON.stringify(arr));
  }
  
  // let check_icon = document.querySelectorAll(".check-image");
  // check_icon.forEach( function(e){
  //   console.log(e);
  // });
  
  // var checkup_button = document.querySelectorAll(".cercle");
  // checkup_button.forEach(function(elem){
  //   elem.addEventListener("click", function(){
  //     let check_icon = document.querySelector(".check-image");
  //       check_icon.classList.toggle("checked-icon");
  //     });
  //   });
  // var cros_icon = document.querySelector(".crose-icon");
// var check_background = document.querySelector(".check-image");
// ${todou_text}

// importent
 
// <li class="mycheck"><div class="cercle"><img src="./images/icon-check.svg" class="check-image" alt=""></div>
// <div class="list-content-text"><p class="pTag ${elem && elem.complete?"complete":""}">${todou_text}</p></div> 
// <div class="crose-icon"><img src="./images/icon-cross.svg" alt=""></div></li>
// `;