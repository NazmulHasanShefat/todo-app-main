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
    <div class="crose-icon"><img src="./images/icon-cross.svg" alt=""></div>
    </li>
    `;
   todo_list.appendChild(toducoll);
  };
  // ${todou_text}