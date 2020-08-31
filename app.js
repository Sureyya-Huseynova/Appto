var Cards_div = document.querySelector('.cardes');
var index = 0;
function Add_Card() {
    index++;
    newcard = `
    <div class="card">
    <span class="delete_card" onclick="DeleteCard()">X</span>
        <div class="head">
            <span class="date"></span>
        </div>
        <hr>
        <div class="card_body" id = "${index}">  
             <div class="mytodo_area">
                <span class="clear" onclick = "Clear()">
                <i class="fas fa-trash-alt"  id = "${index}"></i>
                </span>
                 <div class="mytodo_move" id = "${index}"></div>
                 <input type="text" placeholder="Enter your task" class="mytodo_input"  id = "${index}"  onkeypress="return KeyPressEnter(event);">
                 <span class="save" onclick = "return SaveInputValue(event)">
                 <i class="fas fa-download" id = "${index}"></i>
                 </span>
            </div>
        </div>
        <div class="foot">
            <p class="add_input">
                <i class="fas fa-plus-circle"  id = "${index}"></i>
            </p>
        </div>
    </div>
    `
    Cards_div.innerHTML += newcard;
    add_inputes = document.querySelectorAll('.add_input');
    add_inputes.forEach(add_input => {
        add_input.addEventListener("click", ShowInput)
    });
};

// bu funksiyada +  click etdikde card da input yaranacaq :)
function ShowInput(e) {
    document.querySelectorAll('.card_body').forEach(card_body => {
        if (card_body.id == e.target.id) {
            card_body.style.display = "block";
        }
    })
};

// Enter ile save etmek
function KeyPressEnter(event) {
    if (event.keyCode === 13) {
        SaveInputValue();
        event_input.click();
    }
};

var i = 0;
function SaveInputValue() {
    i++;
    event_input = event.target.parentElement.parentElement.querySelector('.mytodo_input');    // bura save click etdikde icin doldurduqumuz inputu verir yalniz :) 
    event_mytodo_move = event.target.parentElement.parentElement.querySelector('.mytodo_move'); // bura eyni id beraer olan value kocureceyimiz hisse
    var onetodo = document.createElement('p');
    onetodo.className = "onetask";
    onetodo.id = i;
    radio = document.createElement('input');
    radio.type = "checkbox";
    radio.id = i;
    radio.style.marginRight = "1rem";
    if (event_input.value.length > 0) {
        onetodo.appendChild(radio);
        onetodo.innerHTML += event_input.value;
        event_mytodo_move.appendChild(onetodo);
        event_input.value = "";
    }
};

// isharelediyimiz to do lari silmek
function Clear() {
    radioinputes = event.target.parentElement.parentElement.querySelectorAll('input[type=checkbox]');
    onetodolines = event.target.parentElement.parentElement.querySelectorAll('.onetask');
    for (j = 0; j < radioinputes.length; j++) {
        if (radioinputes[j].checked == true) {
            onetodolines[j].remove();
            radioinputes[j].remove();
        }
    }
};

// acib istifade etmedyimiz cardi silmek
function DeleteCard(){
    event.target.parentElement.remove();
}