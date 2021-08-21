const h2 = document.getElementById("inner");
const newp = document.createElement("p");

h2.appendChild(newp);

newp.innerHTML = " Task you want to accomplished today ";
newp.style.color = "#fff";
newp.style.fontSize = 10 + "px";


/*--------------------------------------------------------------*/

const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

debugger;

function Addtotbody(event) {
    event.preventDefault();
    const taskvalue = document.getElementById("task").value;
    const timevalue = document.getElementById("time").value;
    if (taskvalue === "" || timevalue === "") {
        alert("need to insert")
    }
    else{
        tbodyEl.innerHTML += `
        <tr>
            <td>${taskvalue}</td>
            <td>${timevalue}</td>
            <td><button class = "deleteBtn">Done</button></td>
        </tr>
    `;

    }
    
}

function onDeleteRow(event){
    if(!event.target.classList.contains("deleteBtn")){
        return;
    }

    const btn = event.target;
    btn.closest("tr").remove();
}

formEl.addEventListener("submit", Addtotbody);
tableEl.addEventListener("click",onDeleteRow);








