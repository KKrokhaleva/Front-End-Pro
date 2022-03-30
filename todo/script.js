'use strict';

!(function () {
    function createElement({tagName = 'div', classes = [], attributes = {}, textContent = '',}) {
        if (typeof tagName  !== 'string') {
            console.warn('tagName createElement method of app must be string');
            let errorElement = document.createElement('div');
            errorElement.textContent = 'tagName createElement method of app must be string';
            return errorElement;
        }

        let element = document.createElement(tagName);

        if ( typeof textContent === 'string') {
            element.textContent = textContent;
        } else {
            console.warn('textContent createElement method of app must be string');
        }

        if (Array.isArray(classes)) {
            classes.forEach((className) => {
                if (typeof className === 'string') {
                    element.classList.add(className);
                } else {
                    console.warn('classes element of app createElement method must be string');
                }
            });
        }

        if (typeof attributes === 'object' && attributes) {
            Object.entries(attributes).forEach((pair) => {
                if (typeof pair[0] === 'string' || typeof pair[1]==='string') {
                    element.setAttribute(pair[0], pair[1]);
                } else {
                    console.warn('attributes element of app createElement method must be string');
                }
            });
        }
        return element;
    }

    class App {
        constructor() {
            this.cardsArr = [];
            this.init = function () {
                this._init();
            };
            this._body = document.querySelector('body');
        }

        _appendBlocks = () => {
            this.undoneArr = [];
            this.doneArr = [];
            this.importantUndoneArr = [];
            this.importantDoneArr = [];

            this.cardsArr.forEach((card) => {
                if (card.isDone && !card.isImportant) {
                    this.doneArr.push(card);
                }
                if (!card.isDone && !card.isImportant) {
                    this.undoneArr.push(card);
                }
                if (!card.isDone && card.isImportant) {
                    this.importantUndoneArr.push(card);
                }
                if (card.isDone && card.isImportant) {
                    this.importantDoneArr.push(card);
                }
            });

            this.undoneArr.forEach((card) => {
                if (!card.isDone && !card.isImportant) {
                    this._undoneCardsBlock.prepend(card.element);
                }
            });

            this.doneArr.forEach((card) => {
                if (card.isDone && !card.isImportant) {
                    this._doneCardsBlock.prepend(card.element);
                }
            });

            this.importantUndoneArr.forEach((card) => {
                if (card.isImportant && !card.isDone) {
                    this._importantUndoneCardsBlock.prepend(card.element);
                }
            });

            this.importantDoneArr.forEach((card) => {
                if (card.isImportant && card.isDone) {
                    this._importantDoneCardsBlock.prepend(card.element);
                }
            });
        };

        _getCards = () => {

            let cardsJSON = localStorage.getItem('cards');
            if (cardsJSON) {
                let cardsDataArr = JSON.parse(cardsJSON);
                this.cardsArr = cardsDataArr.map((cardData) => {
                    return new Card({
                        cardTittle: cardData.tittle,
                        cardText: cardData.text,
                        isImportant: cardData.isImportant,
                        isDone: cardData.isDone,
                    });
                });

                this._appendBlocks();
                this._sortCards();

            }
        };

        _init = () => {
            this._createApp();
            this._getCards();
            this._attachEvents();
        };

        _sortCards = () => {

            this.sortOption.addEventListener('click', () => {
                this.importantUndoneArr.sort((a, b) => (b.tittle > a.tittle ? 1 : -1));
                this.importantUndoneArr.forEach(card => {
                    this._importantUndoneCardsBlock.prepend(card.element);
                });

                this.undoneArr.sort((a, b) => (b.tittle > a.tittle ? 1 : -1));
                this.undoneArr.forEach((card) => {
                    this._undoneCardsBlock.prepend(card.element);
                });

                this.importantDoneArr.sort((a, b) => (b.tittle > a.tittle ? 1 : -1));
                this.importantDoneArr.forEach((card) => {
                    this._importantDoneCardsBlock.prepend(card.element);
                });

                this.doneArr.sort((a, b) => (b.tittle > a.tittle ? 1 : -1));
                this.doneArr.forEach((card) => {
                    this._doneCardsBlock.prepend(card.element);
                });
            })

            this.reverseSortOption.addEventListener('click', () => {
                this.importantUndoneArr.reverse();
                this.importantUndoneArr.forEach((card) => {
                    this._importantUndoneCardsBlock.prepend(card.element);
                });

                this.undoneArr.reverse();
                this.undoneArr.forEach((card) => {
                    this._undoneCardsBlock.prepend(card.element);
                });

                this.importantDoneArr.reverse();
                this.importantDoneArr.forEach((card) => {
                    this._importantDoneCardsBlock.prepend(card.element);
                });

                this.doneArr.reverse();
                this.doneArr.forEach((card) => {
                    this._doneCardsBlock.prepend(card.element);
                });
            })

        };

        _attachEvents = () => {
            this.formButton.addEventListener('click', this._formAction);
            this.selectSortBlock.addEventListener('change', this._sortCards);
        };

        _createApp = () => {
            let appBlock = createElement({ classes: ['container'] });
            let tittle = createElement({tagName: 'h1', textContent: 'Awesome TODO app'});
            this.formButton = createElement({ tagName: 'button', classes: ['btn', 'btn-primary'], textContent: 'Create card',
                attributes: { 'data-role': 'create' }});
            this._undoneCardsBlock = createElement({classes: ['container', 'cards-block', 'undone']});
            this._doneCardsBlock = createElement({classes: ['container', 'cards-block', 'done'] });
            this._importantUndoneCardsBlock = createElement({classes: ['container', 'cards-block', 'undone', 'important']});

            this._importantDoneCardsBlock = createElement({classes: ['container', 'cards-block', 'done', 'important']});
            this._cardsBlock = createElement({classes: ['container', 'cards-block']});
            this.cardTittle = createElement({tagName: 'input', classes: ['form-control'],
                attributes: { placeholder: 'Name', autocomplete: 'autocomplete' } });

            this.cardText = createElement({tagName: 'textarea', classes: ['form-control'],
                attributes: {placeholder: 'Description', autocomplete: 'autocomplete'}});

            this.selectSortBlock = createElement({tagName: 'div'});
            this.box = createElement({tagName: 'div',classes: ['box']});


            this.sortOption = createElement({tagName: 'button', textContent: '↓ А-Я',classes: ['btn', 'btn-primary'] });
            this.reverseSortOption = createElement({tagName: 'button', textContent: '↓ Я-А',classes: ['btn', 'btn-primary'] });

            this.box.append(this.formButton, this.selectSortBlock);
            this.selectSortBlock.prepend(this.sortOption, this.reverseSortOption);
            this._cardsBlock.prepend(this._importantUndoneCardsBlock, this._undoneCardsBlock,  this._importantDoneCardsBlock,this._doneCardsBlock);
            appBlock.append(tittle, this.cardTittle, this.cardText, this.box, this._cardsBlock);
            this._body.append(appBlock);
        };

        _checkingSuchCard = (cardTittle) => {
            return this.cardsArr.some((card) => card.tittle === cardTittle);
        };

        _validateForm = () => {
            let textFieldStates = [];
            textFieldStates.push(this._validateTextFields(this.cardTittle));
            textFieldStates.push(this._validateTextFields(this.cardText));

            return textFieldStates.some((state) => state === false);
        };

        _formAction = () => {
            let cardTittle = this.cardTittle.value;
            let cardText = this.cardText.value;
            let isCreate;
            if (this._validateForm()) {
                return;
            }

            if (this._checkingSuchCard(cardTittle)) {
                isCreate = confirm('Do you have such a card, do you want to make one more?');
                if (!isCreate) {
                    return;
                }
            }

            if (this.formButton.dataset.role === 'create') {
                this.card = new Card({ cardTittle, cardText });
                this.cardsArr.push(this.card);
                this._updateLS();

            } else if (this.formButton.dataset.role === 'update') {
                this.editableCard.tittle = cardTittle;
                this.editableCard.text = cardText;
                this._updateLS();
                this.editableCard._updateCard();
                this._resetForm();
            }
            document.querySelector('body').innerHTML = '';
            this._init();
        };

        _resetForm = () => {
            this.cardTittle.value = '';
            this.cardText.value = '';
            this.formButton.setAttribute('data-role', 'create');
            this.formButton.innerText = 'Create card';
        };

        _updateLS = () => {
            this.cardsStates = this.cardsArr.map(card => {
                return {
                    tittle: card.tittle,
                    text: card.text,
                    isImportant: card.isImportant,
                    isDone: card.isDone,
                };
            });
            localStorage.setItem('cards', JSON.stringify(this.cardsStates));
        };

        _validateTextFields = (field) => {
            if (field.value === '') {
                field.classList.add('is-invalid');
                return false;
            } else {
                field.classList.remove('is-invalid');
                return true;
            }
        };

        deleteCard = (card) => {
            this.cardsArr = this.cardsArr.filter(appCard => {
                return card !== appCard;
            });
            this._updateLS();
        };

        updateCard = (card, importanceChange) => {
            if (importanceChange) {
                this._updateLS();
            }
            this.cardTittle.value = card.tittle;
            this.cardText.value = card.text;
            this.formButton.textContent = 'Save card';
            this.formButton.setAttribute('data-role', 'update');
            this.editableCard = card;
        };

        completeCard = (card) => {
            if (card.isDone === false) {
                card.isDone = true;
            } else if (card.isDone === true) {
                card.isDone = false;
            }
        };
    }

    class Card {
        constructor({
                        cardTittle = '',
                        cardText = '',
                        isImportant = false,
                        isDone = false,
                    }) {
            this.tittle = cardTittle;
            this.text = cardText;
            this.isImportant = isImportant;
            this.isDone = isDone;
            this._init();
        }

        _init() {
            this.element = this._createElement();
            this._attachEvents();
        }
        _createElement = () => {
            let cardElement = createElement({ classes: ['cards'] });
            this.tittleElement = createElement({tagName: 'h5', classes: ['card-tittle'], textContent: this.tittle});
            this.textElement = createElement({tagName: 'p', classes: ['card-text'], textContent: this.text});

            let controlsContainer = createElement({classes: ['controls-container']});

            this._updateButton = createElement({tagName: 'button', classes: ['btn', 'btn-primary'], textContent: 'Update card'});
            this._deleteButton = createElement({tagName: 'button', classes: ['btn', 'btn-primary'], textContent: 'Delete card'});
            this._importanceCheckbox = createElement({tagName: 'input', classes: ['form-check-input'],
                attributes: {Type: 'checkbox', id: 'flexCheckDefault'}});

            if (this.isImportant) {
                this._importanceCheckbox.setAttribute('checked', 'checked');
                cardElement.classList.add('card--important');
            }

            let importanceCheckboxLabel = createElement({tagName: 'label', classes: ['form-check-label'], attributes: { for: 'flexCheckDefault' },
                textContent: '!'});

            this._doneCheckbox = createElement({tagName: 'input', classes: ['form-check-input'],
                attributes: {Type: 'checkbox', id: 'flexCheckDefault'}});
            if (this.isDone) {
                this._doneCheckbox.setAttribute('checked', 'checked');
                this._updateButton.setAttribute('disabled', 'disabled');
                this._importanceCheckbox.setAttribute('disabled', 'disabled');
            }
            let doneCheckboxLabel = createElement({tagName: 'label', classes: ['form-check-label'], attributes: { for: 'flexCheckDefault' },
                textContent: 'V'});

            controlsContainer.append(this._updateButton, this._deleteButton, this._importanceCheckbox, importanceCheckboxLabel, this._doneCheckbox,doneCheckboxLabel);
            cardElement.append(this.tittleElement, this.textElement, controlsContainer);
            return cardElement;
        };

        _attachEvents = () => {
            this._doneCheckbox.addEventListener('click', this._сompleteСard);
            this._deleteButton.addEventListener('click', this._deleteCard);
            this._updateButton.addEventListener('click', this._updateCard);
            this._importanceCheckbox.addEventListener('change', (event) => {
                this.isImportant = this._importanceCheckbox.checked;
                app.updateCard(this, true);
                if (this.isImportant) {
                    this.element.classList.add('card--important');
                } else {
                    this.element.classList.remove('card--important');
                }
                document.querySelector('body').innerHTML = '';
                app._init();
            });
        };

        _updateCard = () => {
            this.tittleElement.innerHTML = this.tittle;
            this.textElement.innerHTML = this.text;
            app.updateCard(this);
        };

        _deleteCard = () => {
            this.element.remove();
            app.deleteCard(this);
            document.querySelector('body').innerHTML = '';
            app._init();
        };
        _сompleteСard = () => {
            app.completeCard(this);
            app._updateLS(this);
            document.querySelector('body').innerHTML = '';
            app._init();
        };
    }

    let app = new App();
    app.init();
})();