'use strict'

!(function () {
    function createElement({tagName = 'div', classes = [], dataAttributes = {}, textContent = ' '}) {
        if (typeof tagName !== 'string') {
            console.warn('tagName _createElement method of App must be string');
            let errorElement = document.createElement('div');
            errorElement.textContent = 'tagName _createElement method of App must be string';
            return errorElement;
        }

        let element = document.createElement(tagName);

        if (typeof  textContent === 'string') {
            element.textContent = textContent;
        } else {
            console.warn('tagName _createElement method of App must be string');
        }

        if (Array.isArray(classes)) {
            classes.forEach(className => {
                if (typeof className === 'string') {
                    element.classList.add(className);
                } else {
                    console.warn('classes element of App _createElement method must be string');
                }
            })
        }

        if(typeof  dataAttributes === 'object' && dataAttributes ) {
            Object.entries(dataAttributes).forEach(pair => {
                if (typeof pair[0] === 'string' || typeof pair[1]==='string') {
                    element.setAttribute(pair[0],pair[1]);
                } else {
                    console.warn('dataAttributes element of App _createElement method must be a string');
                }
            })
        }

        return element;
    }


    function App() {
        let LS = localStorage;
        let _body = document.querySelector('body');
        let _nameField, _descriptionField, _cardsBlock;

        //Read
        function _getCards() {
            let cardsJSON = LS.getItem('cards');
            if (cardsJSON) {
                let cardsData = JSON.parse(cardsJSON);

                this.cardsArr = cardsData.map(cardData => {
                    return Card({cardTitle: cardData.title, cardText: cardData.text});
                });

                this.cardsArr.forEach(card => {
                    _cardsBlock.append(card.elemet);
                });
            }
        }

        function _init() {
            let appBlock = createElement({classes: ['container']});
            let title = createElement({tagName: 'h1', textContent: 'Awesome TODO app'});
            let createCardButton = createElement({tagName: 'button', textContent: 'Create card', classes: ['btn', 'btn-primary']});
            _cardsBlock = createElement({classes: ['container', 'cards-block']});

            _nameField = createElement({tagName: 'input', classes: ['form-control'], dataAttributes: {placeholder: 'Name', autocomplete: 'autocomplete'}});
            _descriptionField = createElement({tagName: 'input', classes: ['form-control'], dataAttributes: {placeholder: 'Description', autocomplete: 'autocomplete'}});

            appBlock.append(title, _nameField, _descriptionField, createCardButton, _cardsBlock);
            _body.append(appBlock);

            createCardButton.addEventListener('click', _createCard.bind(this));

            _getCards.call(this);
        }

        function _createCard() {
            let cardTitle = _nameField.value;
            let cardText = _descriptionField.value;

            let textFieldStates = [];
            textFieldStates.push(_validateTextField(_nameField));
            textFieldStates.push(_validateTextField(_descriptionField));

            if (textFieldStates.some(state => state === false)) {
                return;
            }

            let isExist = this.cardsArr.some(card => card.title === cardTitle);
            let isCreate;
            if(isExist) {
                isCreate = confirm('You have a card with current title.Do you want to add one more?');
                if(!isCreate) return;
            }

            let card = Card({cardTitle,cardText});

            this.cardsArr.push(card);

            let cardsStates = this.cardsArr.map(card =>{
                return {
                    title: card.title,
                    text: card.text
                }
            })

            LS.setItem('cards', JSON.stringify(cardsStates));

            _cardsBlock.append(card.element);
        }

        function _validateTextField (field) {
            if (field.value === ' ') {
                field.classList.add('is-invalid');
                return false;
            } else {
                field.classList.remove('is-invalid');
                return true;
            }
        }

        return {
            cardsArr: [],
            init() {
                _init.call(this);
            }
        }
    }

    function  Card({cardTitle = '', cardText = ''}) {


        function  _createElement () {
            let cardElement = createElement({classes: ['card']});
            let cardTitleElement = createElement({tagName: 'h5', classes:['card-title'],
                textContent: cardTitle});
            let cardTextElement = createElement({tagName: 'p', classes:['card-text'],
                textContent: cardText});

            let controlsContainer = createElement({classes: ['controls-container']});
            cardElement.append(cardTitleElement, cardTextElement, controlsContainer);
            return cardElement;
        }

        let _element = _createElement();
        return{
            title: cardTitle,
            text: cardText,
            element: _element,
        }
    }

    let app= App();
    app.init();
}());




