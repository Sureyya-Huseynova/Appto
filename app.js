
var Cardes = document.querySelector('.cardes');
function Add_Card() {
    var card = `
    <div class="card">
        <div class="head">
            <span class="date"></span>
        </div>
        <hr>
        <div class="card_body">
             <p class="add_input" onclick="Add_new_todo()">
             <i class="fas fa-plus-circle" 
             ></i>
             </p>   
        </div>
    </div>  
 `
    Cardes.innerHTML += card;

};

function Add_new_todo() { // +  btn click etmek yeni app to do yazmaq ucun 
    var card_body = Cardes.querySelector('.card_body');
    var newtodo = `
        <div class="mytodo_move"> </div>    <!-- inputa elave edeceyimiz to do save edib input sildikde bura daxil olacaq-->
        <div class="mytodo_area">           <!--  buradaki inputa yazib save etmek -->
            <input type="text" placeholder="Enter your task" class="mytodo_input">
            <span class="save">
            <i class="fas fa-download"></i>
            </span>
        </div>  
        `
    card_body.innerHTML += newtodo;
    var mytodo_move = document.querySelector('.mytodo_move');
    var mytodo_area = document.querySelector('.mytodo_area');
    var mytodo_input = document.querySelector('.mytodo_input');
    var save = document.querySelector('.save');
    mytodo_move.style.marginBottom = "2rem";
    save.addEventListener("click", SaveInputValue);
    function SaveInputValue() {
        var onetodo = document.createElement('p'); // inputa yazdiqim her to do app 1 p tag icine elave etmek ve mytodo_area gondermek.
        onetodo.className = "onetask";
        radio = document.createElement('input');
        radio.type = "checkbox";
        radio.style.marginRight = "1rem";
        onetodo.appendChild(radio);
        onetodo.innerHTML += mytodo_input.value ;
        mytodo_move.appendChild(onetodo);
        mytodo_area.remove();
        mytodo_input.innerHTML = '';
    }
};
