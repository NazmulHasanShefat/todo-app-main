let myform = document.querySelector("form");
let fuld_text = document.getElementById("input_box");
  myform.addEventListener("submit", (e)=>{
    e.preventDefault();
    addtodu();
  });

  function addtodu(){
    let todo_list = document.querySelector(".list_container");
    let toducoll = document.createElement("li");
    let todou_text = fuld_text.value;
    toducoll.innerHTML = `
    <li class="mycheck"><div class="cercle"><img src="./images/icon-check.svg" class="check-image" alt=""></div>
    <div class="list-content-text">${todou_text}</div> 
    <div class="crose-icon"><img src="./images/icon-cross.svg" alt=""></div></li>
    `;
   todo_list.appendChild(toducoll);

   let close=toducoll.querySelector(".crose-icon");
   close.addEventListener("click", ()=>{
    toducoll.remove();
   });

   let check_todu=toducoll.querySelector(".cercle");
   let check_icon=toducoll.querySelector(".check-image");
    check_todu.addEventListener("click", ()=>{
      check_icon.classList.toggle("checked-icon");
      check_todu.classList.toggle("checked-background");
      toducoll.classList.toggle("clecked");
    });
  };
  
  
  
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