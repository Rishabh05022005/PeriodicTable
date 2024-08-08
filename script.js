window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    }, 3000); // Preloader visible for 3 seconds
});

document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        const number = element.getAttribute('data-number');
        const symbol = element.getAttribute('data-symbol');
        const name = element.getAttribute('data-name');
        const description = element.getAttribute('data-description');

        Swal.fire({
            title: `${name} (${symbol})`,
            html: `<p><strong>Atomic Number:</strong> ${number}</p><p>${description}</p>`,
            confirmButtonText: 'OK',
            customClass: {
                popup: 'small-alert',
                container: 'full-screen-overlay'
            },
            willOpen: () => {
                // Prevent scrolling to the top when the alert opens
                document.body.style.overflow = 'hidden';
            },
            didClose: () => {
                // Re-enable scrolling after the alert closes
                document.body.style.overflow = '';
            }
        });
    });
});
