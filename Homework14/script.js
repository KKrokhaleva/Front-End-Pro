//Модальное окно

// Находим все необходимые элементы
const button = document.querySelector(".button");
const popup = document.querySelector("#popup");
const close = document.querySelector(".popup_close");

// Открытие модального окна при клике
button.addEventListener("click", () => {
    popup.style.display = 'block';
})

// Закрытие модального окна при клике
close.addEventListener("click", () => {
    popup.style.display = 'none';
})

// Закрытие модального окна при клике в не области модального окна
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

//Аккордеон

// Находим все необходимые элементы
const names = document.querySelectorAll(".accordion_name");
const accordionItems = document.querySelectorAll(".accordion_item")

names.forEach ( (item) =>
item.addEventListener("click",() =>{
    const parent = item.parentNode;
//Раскрытие и закрытие списка с условием, что открытым может быть только одно окно
    if (  parent.classList.contains("accordion_item__active")){
        parent.classList.remove("accordion_item__active");
    } else{
        accordionItems.forEach((child) =>{
            child.classList.remove("accordion_item__active");
        })
        parent.classList.add("accordion_item__active");
    }
})
)
