const $addClass = (elem, className) => {
    const elements = document.querySelectorAll(elem);
    elements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add(className);
        });
    });
}

const $removeClass = (elem, className) => {
    const elements = document.querySelectorAll(elem);
    elements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.remove(className);
        });
    });
}

const $toggleClass = (elem, className) => {
    const elements = document.querySelectorAll(elem);
    elements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle(className);
        });
    });
}



const $toggleClassNew = (triggerElement, targetElement, className) => {
    const triggerElements = document.querySelectorAll(triggerElement);
    const targetElements = document.querySelectorAll(targetElement);

    triggerElements.forEach((el , i) => {
        el.addEventListener('click', () => {
            targetElements[i].classList.toggle(className);
        });
        
    });

}





// slice

const $sliceWord = (elem, length) => {
    const element = document.querySelector(elem)
    element.addEventListener('click', () => {
        const newElem = element.textContent.slice(0, length)
        element.textContent = newElem
    })
}






const $sliceWordPerSecond = (elem) => {
    const element = document.querySelector(elem)
    let newElem = element.textContent

    for (let i = 0; i < newElem.length; i++) {
        setTimeout(() => {
            newElem = newElem.slice(0, -1)
            element.textContent = newElem
        }, i * 100);
    }
}







const $sliceWordPerSecond2 = (elem) => {
    const element = document.querySelector(elem);
    let newElem = element.textContent;

    setInterval(() => {
        newElem = newElem.slice(0, -1);
        element.textContent = newElem;
    }, 100);

};




/**
 * 
 * @param {*} elem 
 */
const $sliceWordPerSecond3 = (elem) => {
    const element = document.querySelector(elem);

    setInterval(() => {
        element.textContent = element.textContent.slice(0, -1);
    }, 100);
};






/**
 * Описываешь ф-ую
 * @param {*} elem 
 * 
 */
const $sliceWordPerSecond4 = (elem) => {
    const elements = document.querySelectorAll(elem);

    elements.forEach(element => {
        setInterval(() => {
            element.textContent = element.textContent.slice(0, -1);
        }, 100);
    });
};







function $truncateText(selector, maxLength) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        const trimText = element.textContent.trim();
        const truncatedText = trimText.substring(0, maxLength) + '...';
        element.textContent = truncatedText;

    });

}












function changeImg(selector, newSrc) {
    const image = document.querySelector(selector);
    const oldSrc = image.src;

    image.addEventListener('mouseover', function () {
        image.src = `./img/${newSrc}`;
    });

    image.addEventListener('mouseout', function () {
        image.src = oldSrc;
    });
}


















// for (let i = 3; i < 10000; i *= 3) {
//     console.log(i);
// }


// let i = 3
// while (i < 10000) {
//     console.log(i);
//     i = i * 3
// }






// const animals = ['Кот', 'Рыба', 'Лемур', 'Варан']

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i] = animals[i] + ' - прекрасное животное');
// }

// console.log(animals);





