(function(){

    var screenHeight = document.documentElement.clientHeight;
    var btnToUp = document.querySelector(".toup");
    var scrollHeight;
    var timer;

    function showBtn(){

        var scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

        if ((scrollHeight > screenHeight) && !btnToUp.classList.contains("toup-visible")) {

            btnToUp.classList.add("toup-visible");

        } else if ((scrollHeight < screenHeight) && btnToUp.classList.contains("toup-visible")) {

            btnToUp.classList.remove("toup-visible");

        }

    }

    function scrollPage() {

        if (scrollHeight > 25) {

            window.scrollTo(0, scrollHeight);
            scrollHeight = scrollHeight - 25;
            timer = setTimeout(scrollPage, 10);

        } else {

            clearTimeout(timer);
            window.scrollTo(0, 0);

        }

    }

    window.addEventListener("scroll", showBtn);
    btnToUp.addEventListener("click", function(event) {

        event = event || window.event;
        event.preventDefault();
        scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
        scrollPage();

    });

})();