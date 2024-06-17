document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementById("video1");

    document.querySelector("button[onclick='playPause()']").addEventListener("click", playPause);
    document.querySelector("button[onclick='makeBig()']").addEventListener("click", makeBig);
    document.querySelector("button[onclick='makeSmall()']").addEventListener("click", makeSmall);
    document.querySelector("button[onclick='makeNormal()']").addEventListener("click", makeNormal);

    function playPause() {
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
        }
    }

    function makeBig() {
        myVideo.width = 560;
    }

    function makeSmall() {
        myVideo.width = 320;
    }

    function makeNormal() {
        myVideo.width = 420;
    }

    // For smooth fade-out transition on navigation
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
