
document.querySelector(".addbtn1").onclick = function() {

    let addInput = document.querySelector("#add1").value.trim();
    console.log(addInput);
    if (addInput.length > 0) {
        let addElement = document.createElement("p");
        addElement.innerHTML = addInput;
        console.log(addElement);

        let addContainer = document.querySelector("#e1");
		addContainer.appendChild(addElement);
		document.querySelector("#add1").value = "";

    }

}

function myFunction() {
    let table = document.getElementById("Timetable");
    var input, filter,  txtValue;
    input = document.getElementById("search");

    filter = input.value.toUpperCase();
    let tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

document.querySelector(".addbtn2").onclick = function() {

    let addInput = document.querySelector("#add2").value.trim();
    console.log(addInput);
    if (addInput.length > 0) {
        let addElement = document.createElement("p");
        addElement.innerHTML = addInput;
        console.log(addElement);

        let addContainer = document.querySelector("#e2");
		addContainer.appendChild(addElement);
		document.querySelector("#add2").value = "";

    }

}

document.querySelector(".addbtn3").onclick = function() {

    let addInput = document.querySelector("#add3").value.trim();
    console.log(addInput);
    if (addInput.length > 0) {
        let addElement = document.createElement("p");
        addElement.innerHTML = addInput;
        console.log(addElement);

        let addContainer = document.querySelector("#e3");
		addContainer.appendChild(addElement);
		document.querySelector("#add3").value = "";

    }

}
document.querySelector(".addbtn4").onclick = function() {

    let addInput = document.querySelector("#add4").value.trim();
    console.log(addInput);
    if (addInput.length > 0) {
        let addElement = document.createElement("p");
        addElement.innerHTML = addInput;
        console.log(addElement);

        let addContainer = document.querySelector("#e4");
		addContainer.appendChild(addElement);
		document.querySelector("#add4").value = "";

    }

}

document.querySelector(".addbtn5").onclick = function() {

    let addInput = document.querySelector("#add5").value.trim();
    console.log(addInput);
    if (addInput.length > 0) {
        let addElement = document.createElement("p");
        addElement.innerHTML = addInput;
        console.log(addElement);

        let addContainer = document.querySelector("#e5");
		addContainer.appendChild(addElement);
		document.querySelector("#add5").value = "";

    }

}
document.querySelector("#btn0").onclick = function() {

    let editInput = document.querySelector("#edit0").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row0").innerHTML = editInput;
    }

}
document.querySelector("#btn1").onclick = function() {

    let editInput = document.querySelector("#edit1").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row1").innerHTML = editInput;
    }

}
document.querySelector("#btn2").onclick = function() {

    let editInput = document.querySelector("#edit2").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row2").innerHTML = editInput;
    }

}

document.querySelector("#btn3").onclick = function() {

    let editInput = document.querySelector("#edit3").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row3").innerHTML = editInput;
    }

}

document.querySelector("#btn4").onclick = function() {

    let editInput = document.querySelector("#edit4").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row4").innerHTML = editInput;
    }

}

document.querySelector("#btn5").onclick = function() {

    let editInput = document.querySelector("#edit5").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row5").innerHTML = editInput;
    }

}

document.querySelector("#btn6").onclick = function() {

    let editInput = document.querySelector("#edit6").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row6").innerHTML = editInput;
    }

}

document.querySelector("#btn7").onclick = function() {

    let editInput = document.querySelector("#edit7").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row7").innerHTML = editInput;
    }
}

document.querySelector("#btn8").onclick = function() {

    let editInput = document.querySelector("#edit8").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row8").innerHTML = editInput;
    }

}
document.querySelector("#btn9").onclick = function() {

    let editInput = document.querySelector("#edit9").value.trim();
    if (editInput.length > 0) {
        document.querySelector("#row9").innerHTML = editInput;
    }

}

document.querySelector("#delete0").onclick = function() {
    let delContainer = document.querySelector("#row0");
    delContainer.replaceChildren();
}

document.querySelector("#delete1").onclick = function() {
    let delContainer = document.querySelector("#row1");
    delContainer.replaceChildren();
}

document.querySelector("#delete2").onclick = function() {
    let delContainer = document.querySelector("#row2");
    delContainer.replaceChildren();
}

document.querySelector("#delete3").onclick = function() {
    let delContainer = document.querySelector("#row3");
    delContainer.replaceChildren();
}

document.querySelector("#delete4").onclick = function() {
    let delContainer = document.querySelector("#row4");
    delContainer.replaceChildren();
}

document.querySelector("#delete5").onclick = function() {
    let delContainer = document.querySelector("#row5");
    delContainer.replaceChildren();
}
document.querySelector("#delete6").onclick = function() {
    let delContainer = document.querySelector("#row6");
    delContainer.replaceChildren();
}
document.querySelector("#delete7").onclick = function() {
    let delContainer = document.querySelector("#row7");
    delContainer.replaceChildren();
}
document.querySelector("#delete8").onclick = function() {
    let delContainer = document.querySelector("#row8");
    delContainer.replaceChildren();
}
document.querySelector("#delete9").onclick = function() {
    let delContainer = document.querySelector("#row9");
    delContainer.replaceChildren();
}