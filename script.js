document.addEventListener("DOMContentLoaded", function() {
    if (!window.location.hash) {
        document.body.classList.remove('fade-out');
    }

    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const href = this.getAttribute('href');
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location = href;
                }, 500);
            });
        }
    });
});
