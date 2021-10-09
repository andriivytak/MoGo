"use strict";

let item = document.querySelectorAll('.accord__item'),
    content = document.querySelectorAll('.accord__content');



item.forEach(elem => {
    elem.addEventListener('click', function (a) {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            content.classList.add('active');
        }
        else {
            for (let el of item) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

