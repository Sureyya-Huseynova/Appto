var Cards = document.querySelector('.cardes');
var index = 0;
function Add_Card() {
    index++;
    var card = `
    <div class="card">
        <div class="head">
            <span class="date"></span>
        </div>
        <hr>
        <div class="card_body" id="${index}">
             <p class="add_input"  onclick="return Add_new_todo(event)" >
             <i class="fas fa-plus-circle" id="${index}"
             ></i>
             </p>   
        </div>
    </div>  
 `
    Cards.innerHTML += card;
};
var i = 0;
function Add_new_todo() {
    i++;
    var card_bodies = Cards.querySelectorAll('.card_body');
    card_bodies.forEach(card_body => {
        if (event.target.id == card_body.id) {
            newtodo = `
        <div class="mytodo_move" id="${i}"> </div>           <!-- inputa elave edeceyimiz to do save edib input sildikde bura daxil olacaq-->
        <div class="mytodo_area">                                <!--  buradaki inputa yazib save etmek -->
            <input type="text" placeholder="Enter your task" class="mytodo_input" onkeypress="return KeyPressEnter(event);" id="${i}">
            <span class="save">
            <i class="fas fa-download" id="${i}"></i>
            </span>
        </div>  
        `
            card_body.innerHTML += newtodo;
            mytodo_move = document.querySelector('.mytodo_move');
            mytodo_area = document.querySelector('.mytodo_area');
            mytodo_input = document.querySelector('.mytodo_input');
            save = document.querySelector('.save');
            mytodo_move.style.marginBottom = "2rem";
            save.addEventListener("click", SaveInputValue);

        }
    })
};
function KeyPressEnter(event) {
    if (event.keyCode === 13) {
        SaveInputValue();
        mytodo_input.click();
    }
};
function SaveInputValue() {                                          // +  btn click etmek yeni app to do yazmaq ucun
    var onetodo = document.createElement('p'); // inputa yazdiqim her to do app 1 p tag icine elave etmek ve mytodo_area gondermek.
    onetodo.className = "onetask";
    radio = document.createElement('input');
    radio.type = "checkbox";
    radio.style.marginRight = "1rem";
    onetodo.appendChild(radio);
    onetodo.innerHTML += mytodo_input.value;
    document.querySelectorAll(".mytodo_move").forEach(mytodo_move_one => {
        if (mytodo_move_one.id == event.target.id) {
            mytodo_move_one.appendChild(onetodo);
            mytodo_area.remove();
            mytodo_input.innerHTML = '';
        }
    })
};