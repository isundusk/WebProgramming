
document.querySelector("#mypic").onmouseenter = function() {
    this.style.height = "160px";
    this.style.width = "160px";
}

document.querySelector("#mypic").onmouseout = function() {
    this.style.height = "130px";
    this.style.width = "130px";
}

var counter = 3;

document.querySelector("#form").onsubmit = function(event) {

    event.preventDefault();
    console.log("form is submitted!");

    let titleInput = document.querySelector("#title").value.trim();
    console.log(titleInput);
    
    if( titleInput.length < 1) {
        console.log("name is empty!!");
        document.querySelector("#title").nextElementSibling.innerHTML = "Title cannot be empty";
        document.querySelector("#title").nextElementSibling.style.visibility = "visible";

    }
    else {
        document.querySelector("#title").nextElementSibling.style.visibility = "hidden";
    }

    let yearInput = document.querySelector("#year").value.trim();
    console.log(yearInput);
    
    if(isNaN(yearInput) || yearInput.length < 1) {
        console.log("year is not a number!!");
        document.querySelector("#year").nextElementSibling.innerHTML = "Enter year";
        document.querySelector("#year").nextElementSibling.style.visibility = "visible";

    }
    else {
        document.querySelector("#year").nextElementSibling.style.visibility = "hidden";
    }

    let techInput = document.querySelector("#tech").value.trim();
    console.log(techInput);
    
    if (techInput === 'Choose') {
        console.log("tech not selected!!");
        document.querySelector("#tech").nextElementSibling.innerHTML = "Choose technology";
        document.querySelector("#tech").nextElementSibling.style.visibility = "visible";

    }
    else {
        document.querySelector("#tech").nextElementSibling.style.visibility = "hidden";
    }

    let descInput = document.querySelector("#desc").value.trim();
    console.log(descInput);
    
    if( descInput.length < 1) {
        console.log("desc is empty!!");
        document.querySelector("#desc").nextElementSibling.innerHTML = "description cannot be empty";
        document.querySelector("#desc").nextElementSibling.style.visibility = "visible";

    }
    else {
        document.querySelector("#desc").nextElementSibling.style.visibility = "hidden";
    }

    if ( descInput.length > 1 && techInput != 'Choose' && (!isNaN(yearInput) || yearInput.length > 1) && titleInput.length > 1){
        console.log("All inputs correct");

        let divElement = document.createElement("div");
        console.log(divElement);

        divElement.innerHTML = "Project: " + titleInput + "<br >" + "Year: " + yearInput + "<br >" + "Technology: " + techInput + "<br >" + "Description: " + descInput ;
        console.log(divElement)
        let projectContainer = document.querySelector("#sec1");
        projectContainer.appendChild(divElement);
        document.querySelector("#title").value = "";
        document.querySelector("#year").value = "";
        document.querySelector("#tech").value = "";
        document.querySelector("#desc").value = "";

        counter++;
        document.querySelector('#count').innerHTML = "PROJECTS  " + counter;

    }

}




