function getSections(part, section,style ) {

let tub = document.querySelector(`#tab-${part}`);
let result = tub.querySelector(`.list__item:nth-child(${section})`);
let sectionResults = result.querySelectorAll('.list-sub__item');
let values = [];
     for( let i=0; sectionResults.length > i; i++) {
         let resultIndex = sectionResults.item(i);
         let resultText = resultIndex.querySelector(`.list-sub__link`);
         if (resultText){  values.push(resultText.textContent);}
    }
         switch (style) {
             case "number" :
                 for( let i=0; values.length > i; i++){
                     console.log( ((i+1)+"."  + " " + values[i]));
                 }
                 break;
             case "dash" :
                 for( let i=0; values.length > i; i++){
                     console.log( "-"  + " " + values[i]);
                 }
                 break;
             case"current" :
                 for( let i=0; values.length > i; i++){
                     console.log( section  + "."+(i+1)+ " " + values[i]);
                 }
                 break
         }

}
getSections(1, 1 ,  "current");

