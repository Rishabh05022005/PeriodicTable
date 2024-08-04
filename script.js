const elements = document.querySelectorAll('.element');

elements.forEach(element => {
    element.addEventListener('click', () => {
        alert(`You clicked on ${element.querySelector('.name').innerText}`);
    });
});