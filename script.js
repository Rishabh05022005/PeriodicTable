

document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        const number = element.getAttribute('data-number');
        const symbol = element.getAttribute('data-symbol');
        const name = element.getAttribute('data-name');
        
        Swal.fire({
            title: `${name} (${symbol})`,
            text: `Atomic Number: ${number}`,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    });
});