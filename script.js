const filtros = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {

        filtros.forEach(function (item) {
            item.classList.remove("active");
        });

        filtro.classList.add("active");

        const categoria = filtro.getAttribute("data-filter");

        cards.forEach(function (card) {

            const categoriaCard = card.getAttribute("data-category");

            if (categoria === "todos" || categoria === categoriaCard) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});