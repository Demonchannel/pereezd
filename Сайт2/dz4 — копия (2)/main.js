let htmlElements;
let divs = [];
let spb = document.querySelector("div.hello-world");
let buttons = document.querySelectorAll("button.delete-button");
let adbutton = document.getElementById("add-button")
    //     if (!bgColorInput.value.includes("@")) {
    //         bgColorInput.classList.add("invalid");
    //         error.innerHTML = "Пожалуйста, введите правильный email.";
    //     }
    // };
function GGbet(color) {
    if (color.indexOf("rgb") > -1 || color === "") {
        return false;
    } else {
        return true
    }
}

bzzz.onblur = function() {
    if (GGbet(this.value) === false) {
        this.classList.add("error");
        bzzz.focus();
    } else {
        this.classList.remove("error");
    }
};
bttt.onblur = function() {
    if (GGbet(this.value) === false) {
        this.classList.add("error");
        bttt.focus();
    } else {
        this.classList.remove("error");
    }
};

let itemsArray = [{
        color: "white",
        bgColor: "blue",
    },
    {
        color: "black",
        bgColor: "yellow",
    },
    {
        color: "green",
        bgColor: "whitesmoke",
    },
];

function init() {
    htmlElements = {
        bgColorInput: document.querySelector("input.bg-color-input"),
        textColorInput: document.querySelector("input.text-color-input"),
        addButton: document.querySelector("button.add-button"),
        items: document.querySelector("div.items"),
    };

    render1();
}

init();


function validTextColour(stringToTest) {
    if (stringToTest === "") { return false; }
    if (stringToTest === "inherit") { return false; }
    if (stringToTest === "transparent") { return false; }

    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") { return true; }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
}

// document.getElementById("testField").addEventListener("input", function() {
//     document.getElementById("result").textContent = validTextColour(this.value);
// });

function render() {
    if ((validTextColour(bzzz.value) === false) || (validTextColour(bttt.value) === false)) { alert("Молодые люди, цвет напишите плз") } else {
        let element = document.querySelector(".items");
        let div = document.createElement("div");
        let span = document.createElement("span");
        let inp = document.querySelector("input.bg-color-input").value;
        const button = document.createElement("button");
        div.appendChild(span);
        div.classList.add("item");
        span.setAttribute("class", "item-text");
        div.setAttribute("background-color", inp);
        div.appendChild(button);
        button.innerText = "X";
        button.classList.add("delete-button");
        div.style.backgroundColor = document.querySelector(
            "input.bg-color-input"
        ).value;
        span.innerText = document.querySelector("input.text-color-input").value;
        span.style.color = document.querySelector("input.text-color-input").value;
        console.log(element);
        element.appendChild(div);
        console.log(divs);
        // .addEventListener("click", deleteElementsClicked, true);
        button.addEventListener("click", deleteElementsClicked);
        div.addEventListener("click", foo1, true);

        function foo1() {
            document.body.style.backgroundColor = div.style.backgroundColor;
            spb.style.color = span.style.color;
        }
        divs.push(div);
    }
}


function render1() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = "blue";
    span.innerText = "white";
    span.style.color = "white";
    element.appendChild(div);
    divs.push(div);
    button.addEventListener("click", deleteElementsClicked);
    render2();
    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
}

function render2() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = "yellow";
    span.innerText = "black";
    span.style.color = "black";
    console.log(element);
    element.appendChild(div);
    divs.push(div);
    render3();
    button.addEventListener("click", deleteElementsClicked);

    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
}

function render3() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = "whitesmoke";
    span.innerText = "green";
    span.style.color = "green";
    element.appendChild(div);
    button.addEventListener("click", deleteElementsClicked);
    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
    divs.push(div);
}

function deleteElementsClicked() {
    let buttons = document.querySelectorAll("button.delete-button");
    let index = Array.from(buttons).indexOf(this);
    itemsArray.splice(index, 1);
    document.querySelector(".items").childNodes[index].remove();
}




// function example() {
//     var x = document.getElementById("bzzz").value
//     if
// };

// function example2() {
//     var y = document.getElementById("bttt").value
//     if
// };


// document.querySelector(".item").addEventListener("click", function(event) {
//             if (event.target.ClassName == "delete-button") {
//                 event.target.closest("#div").remove();
//             }
//         }



// function deletediv(event) {
//     if (event.target.ClassName == "delete-button") {
//         event.target.closest("#div").remove();
//     }
// // }
// buttons.onclick = function(event) {
//     if (event.target.ClassName == "delete-button") {
//         let index = Array.from(buttons).indexOf(this);
//         items.splice(index, 1);
//     }
// };

// var x = document.getElementById("myForm");
// x.addEventListener("focusin", myFocusFunction);
// x.addEventListener("focusout", myBlurFunction);

// function myFocusFunction() {
//     document.getElementById("inputbg").style.backgroundColor = "yellow";
// }

// function myBlurFunction() {
//     document.getElementById("inputbg").style.backgroundColor = "red";
// }
//     if (GGbet(bzzz.value) === true && GGbet(bttt.value) === false) {
//         alert("Проверьте ввод")
//     }
//     if (GGbet(bzzz.value) === false && GGbet(bttt.value) === true) {
//         alert("Проверьте ввод")
//     }
//     if (GGbet(bzzz.value) === false && GGbet(bttt.value) === false) {
//         alert("Проверьте ввод")
//     }
//     if (GGbet(bzzz.value) === true || GGbet(bttt.value) === true) {
//         validTextColour()
//     }
// }
// validTextColour
// function (stringToTest)