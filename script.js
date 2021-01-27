const removeButton = document.querySelectorAll('.button-remove');
const sortButton = document.querySelector('.button-sort');
const item = document.querySelector('.item');
const buttonAdd = document.querySelector('.button-add');
let itemBox = document.querySelector('.item-box');
let input = document.querySelectorAll('.input-zone');

let tracker = 'sort';

// Новая строка
buttonAdd.addEventListener('click', () => {
    const newItem = item.cloneNode(true);
    newItem.children[1].value = '';
    itemBox.append(newItem);
    changeColor(newItem.lastElementChild);
    let removeString = newItem.querySelector('.button-remove');
    removeItem(removeString);
})
//Смена цвета
function changeColor(item) {
    item.addEventListener('mouseover', (e) => {
        e.target.src='img/removeColored.png';
    })
    item.addEventListener('mouseout', (e) => {
        e.target.src='img/remove.png';
    })
}

changeColor(removeButton[0]);
//Удаление строки
function removeItem (removeButton) {
    removeButton.addEventListener('click', () => {
        removeButton.parentElement.remove();
    })
}

removeItem(removeButton[0])
//Сортировка
sortButton.addEventListener('click', (e) => {
    if (tracker!='sortUp') {
        e.target.src = 'img/sortUp.png';
        let updInput = document.querySelectorAll('.input-zone');
        let arr = [];
        updInput.forEach((item) => {
            arr.push(item.value);
        });
        arr.sort((a, b) => {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        
        })
        for (let i = 0; i < arr.length; i++) {
            updInput[i].value = arr[i];
        }
        tracker = 'sortUp';
    } else {
        e.target.src = 'img/sort.png';
        let updInput = document.querySelectorAll('.input-zone');
        let arr = [];
        updInput.forEach((item) => {
            arr.push(item.value);
        });
        arr.sort((a, b) => {
            if (a < b) {
                return 1;
            } else {
                return -1;
            }
        
        })
        for (let i = 0; i < arr.length; i++) {
            updInput[i].value = arr[i];
        }
        tracker = 'sort';
    }
})

sortButton.addEventListener('mouseover', (e) => {
    if (tracker == 'sort') {
        e.target.src='img/sortColored.png';
    } else {
        e.target.src='img/sortUpColored.png';
    }
})
sortButton.addEventListener('mouseout', (e) => {
    if (tracker == 'sort') {
        e.target.src='img/sort.png';
    } else {
        e.target.src='img/sortUp.png';
    }
})
