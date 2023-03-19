const buttonElem = document.querySelector('.btn_account');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem) {
        modalElem.style.visibility = 'hidden';
        modalElem.style.opacity =  0;
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity =  1;
};

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);