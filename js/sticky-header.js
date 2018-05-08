(function() {

    var header = document.querySelector(".page_header");
    var headerHeight = header.getBoundingClientRect().bottom + window.pageYOffset;

    window.addEventListener("scroll", function() {

        if (header.classList.contains("page_header-sticky") && (window.pageYOffset < pageHeaderHeight)) {

            header.classList.remove("page_header-sticky");

        } else if (window.pageYOffset > headerHeight) {

            header.classList.add("page_header-sticky");

        }

    }, false);

})();