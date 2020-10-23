//Детальное описание всех функций можно найти здесь: https://docs.google.com/spreadsheets/d/1JMMU4gqVLFlIQXALS3GcwCdmOX6NgfQlqC4DJBy08zs/
const htmlElements = {};

function initHTMLElements() {
    htmlElements.selectColor = getHTMLElement("select");
    htmlElements.addButton = getHTMLElement("button.add-button");
    htmlElements.input = getHTMLElement("input.input-color");
    htmlElements.removeButton = getHTMLElement("button.remove-button");
    htmlElements.removeSelectedButton = getHTMLElement("button.remove-selected");
    htmlElements.body = document.body;
}

function initEvenHandles() {
    htmlElements.selectColor.addEventListener("change", selectColorValueChanged); //то же самое, что и https://i.imgur.com/EThboJy.png
    htmlElements.addButton.addEventListener("click", addButtonClicked); //то же самое, что и https://i.imgur.com/lQPEyrM.png
    htmlElements.removeButton.addEventListener("click", removeColorClicked); //то же самое, что и https://i.imgur.com/1BNCoem.png
    htmlElements.removeSelectedButton.addEventListener(
        "click",
        removeSelectedColorClicked
    ); //то же самое что и https://i.imgur.com/SpWNYt7.png
}

initHTMLElements();
initEvenHandles();

function selectColorValueChanged() {
    setColor;
    let value = htmlElements.selectColor.value;
    setColor(value);
    // 1. Вызывает setColor, передает знчение выпадающего списка в качестве входного параметра
}

function addButtonClicked(color) {
    const colorCanAdded = checkIfColorCanBeAdded(color)
    const inputValue = htmlElements.input.value;
    if (colorCanAdded === true) {
        if (colorCanAdded === false) {
            addColor(inputValue);
            chooseColor(inputValue);
            setColor(inputValue);
        } else {
            alert("There's no such a color");
        }
    } else {
        alert("There's no such a color");
    }

    // 1. Вызывает checkIfColorCanBeAdded, чтобы проверить, существует ли название цвета, которое пользователь ввел в текстовом поле, или нет.
    // 1.1. Если такого названия цвета не существует, показывает сообщение ""There's no such a color"".
    // 1.2. Если же такое название цвета существует, вызывает checkIfColorAdded, чтобы проверить наличие добавляемого цвета выпадающем списке.
    // 1.2.1. Если выпадающий список еще не содержит добавляемое значение, последовательно вызывает функции addColor, chooseColor и setColor,
    // передавая им в качестве входного параметра значение, которое пользователь ввел в текстовое поле.
    // 1.2.2. Если значение уже добавлено, показывает сообщение 'Color has been already added'
}

function removeColorClicked() {
    if (!(htmlElements.input === "")) {
        if ((htmlElements.input === "")) {
            alert('Please enter a value first');
        } else {
            removeColor(htmlElements.input);
            reset();
        }
    }
}
// 1. Проверяет, ввел ли пользователь какой-то текст в текстовое поле
// 1.1. Если не ввел, показывает сообщение 'Please enter a value first'
// 1.2. Если ввел, вызвает removeColor, передавая значение текстового поля в качестве входного параметра. После чего вызывает reset.

function removeSelectedColorClicked() {
    let selectedIdx = htmlElements.selectColor.selectedIndex;
    getSelectedValue();
    if (!(selectedIdx.value = "not selected")) {
        removeColor(selectedIdx);
    }
    if (selectedIdx.value = "not selected") {
        alert("Please choose a value to remove")
    }
}
// 1. Вызывает getSelectedValue, чтобы получить значение выбранного option в выпадающем списке.
// 1.1. Если значение выбранного option равно 'not selected', показывает сообщение 'Please choose a value to remove'.
// 1.2. Если же значение выбранного option не равно 'not selected', вызывает removeColor,
// передавая значение выбранного option в качестве входного параметра.
// дописывал и не работает

function getSelectedValue() {
    let selectedIdx = htmlElements.selectColor.selectedIndex;
    return htmlElements.selectColor[selectedIdx].value;
}

function getHTMLElement(selector) {
    let element = document.querySelector(selector);
    return element;
    // 1. находит HTML элемент по селектору
    // 2. возвращает найденный HTML элемент
}

function checkIfColorAdded(color) {
    let colorAdded = false;
    for (let i = 1; i < htmlElements.selectColor.length; i++) {
        if (htmlElements.selectColor[i].value === color) {
            colorAdded = true;
        }
    }
    return colorAdded;
}

function addColor() {
    let option = new option("htmlElements.input.value", "color");
    htmlElements.selectColor.appendChild.option;
    reset();

    // 1. Создает новый HTML элмент option через new Option (https://mzl.la/createOption)
    // 2. Вызывает appendChild (https://mzl.la/2J1CTEo) на выпадающем списке, указывая созданный элмент option в качестве входящего параметра
    // 3. Вызывает функцию reset
    //это добавленная
}

function chooseColor(color) {
    let checkIfColorAdded = false;
    for (let i = 1; i < htmlElements.selectColor.length; i++) {
        if (htmlElements.selectColor[i].value === color) {
            checkIfColorAdded = true;
        }
    }
    setSelectedIndex(htmlElements.selectColor[selectedIdx]);
    // 1. Так же, как и в функции checkIfColorAdded, пробегает по всем option выпадающего списка начиная со второго элемента
    // (начальное условие цикла будет let i = 1, т.к. элементы коллекций в JavaScript считаются с 0, а нулевой option имеет значение -- Select a value --,
    // поэтому мы не учитываем его в расчетах)
    // 1.1. Как только i-тое значение одного из option совпало со значением цвета, указанного в качестве входного параметра,
    // вызывает функцию setSelectedIndex, передавая в нее индекс i итератора цикла.
    //это добавленная
}

function setSelectedIndex(idx) {
    htmlElements.selectColor.selectedIndex = idx;
}

function setColor(color) {
    htmlElements.body.style.setProperty("--color", color);
    // меняет цвет у body через CSS переменную --color
}

function removeColor(color) {
    let colorAdded = checkIfColorAdded(color);
    if (colorAdded === true) {
        for (let i = 1; i < htmlElements.selectColor.length; i++) {
            if (htmlElements.selectColor[i].value === color) {
                htmlElements.selectColor.removeChild(htmlElements.selectColor[i]);
                htmlElements.selectColor.selectedIndex = 0;
            }
        }
    } else {
        alert("There's no such a color");
    }
}

function reset() {
    htmlElements.input = "";
    document.body.style = "";
};
// 1. Устанавливает значение текстового поля в ''
// 2. Удаляет CSS переменную --color на body
// Это добавленнаяы


function checkIfColorCanBeAdded(color) {
    if (color.indexOf("rgb") > -1 || color === "") {
        return false;
    }

    let div = document.createElement("div");
    div.style.backgroundColor = color;
    let colorIsSetCorrectly = div.style.backgroundColor === color;
    return colorIsSetCorrectly;
}