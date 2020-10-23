"use strict";

function a() {
    let first_name;
    while (!(first_name = prompt("Скажите ваше Имя", "")))
        alert("Девочка не имеет имени?");
    console.log(first_name);
    let last_name;
    while (!(last_name = prompt("Скажите вашу Фамилию", "")))
        alert("Девочка не имеет Фамилии?");
    console.log(last_name);
    let middle_name;
    while (!(middle_name = prompt("Скажите ваше Отчество", "")))
        alert("Девочка не имеет Отчества?");
    console.log(middle_name);
    let age;
    do {
        age = prompt("Сколько вам лет?", "");
    } while (age.replace(/\d/g, "").length);

    let gender = confirm("Вы мужчина?");
    let pension;
    let age1 = age * 1 + 5;
    let gendergen;
    if (gender == true) {
        gendergen = "вы мужчина";
    } else if (gender == false) {
        gendergen = "вы женщина";
    }
    if (gender == 1 && age <= 60) {
        pension = "нет";
    } else if (gender == 0 && age <= 55) {
        pension = "нет";
    } else if (gender == 1 && age >= 60) {
        pension = "да";
    } else if (gender == 0 && age >= 55) {
        pension = "да";
    }
    alert(
        "Ваше ФИО:" +
        last_name +
        first_name +
        middle_name +
        "\r\n" +
        "Ваш возраст:" +
        age +
        "\r\n" +
        "Ваш возраст в днях:" +
        age * "365" +
        "\r\n" +
        "Сколько вам будет через 5 лет:" +
        age1 +
        "\r\n" +
        "Вы на пенсии:" +
        pension +
        "\r\n" +
        "Ваш пол:" +
        gendergen
    );
}