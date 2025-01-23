const inputbox = document.getElementById("addbox");
const listcontainer = document.getElementById("listcontainer");

function addTaks(){
    if (inputbox.value === '') {
        alert('kamu harus memasukan sesuatu!')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span)
    }
    inputbox.value = "";
    savedata()
}

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtaks(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtaks();

