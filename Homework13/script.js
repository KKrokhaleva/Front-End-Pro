'use strict'
function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function validateSectionsInput(part, section, style) {
    if (!isNumber(part)) {
        console.warn('part getSections function must be a number');
        return false;
    }
    if (!isNumber(section)) {
        console.warn('section getSections function must be a number');
        return false;
    }
    if (typeof style!== 'string') {
        console.warn('style getSections function must be a String ');
        return false;
    }
    if (style !== 'number' && style !== 'dash' && style !== 'current') {
        console.warn('style getSections function must be a current or dash or number ');
        return false;
    }
    if (part > 3 || part < 1) {
        console.warn('part getSections function must be more then 0 and less then 4');
        return false;
    }
    if (part === 1) {
        if (section < 0 || section > 14) {
            console.warn('section getSections function in this part must be more then 0 and less then 15');
            return false;
        }
    }
    if (part === 2) {
        if (section < 0 || section > 6) {
            console.warn('section getSections function in this part must be more then 0 and less then 7');
            return false;
        }
    }
    if (part === 3) {
        if (section < 0 || section > 8) {
            console.warn('section getSections function in this part must be more then 0 and less then 9');
            return false;
        }
    }
    return true;
}

function getSections(part, section, style) {
    if (!validateSectionsInput(part, section, style)) {
        return;
    }
    let tub = document.querySelector(`#tab-${part}`);
    let result = tub.querySelector(`.list__item:nth-child(${section})`);
    let sectionResults = result.querySelectorAll('.list-sub__item');
    let values = [];
    for (let i = 0; sectionResults.length > i; i++) {
        let resultIndex = sectionResults.item(i);
        let resultText = resultIndex.querySelector(`.list-sub__link`);
        if (resultText) {
            values.push(resultText.textContent);
        }
    }
    switch (style) {
        case "number" :
            for (let i = 0; values.length > i; i++) {
                console.log(((i + 1) + "." + " " + values[i]));
            }
            break;
        case "dash" :
            for (let i = 0; values.length > i; i++) {
                console.log("-" + " " + values[i]);
            }
            break;
        case"current" :
            for (let i = 0; values.length > i; i++) {
                console.log(section + "." + (i + 1) + " " + values[i]);
            }
            break;
    }

}
getSections(1, 1, "current");

