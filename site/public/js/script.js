var el = document.querySelector('.menu-mobile-icon');

el.addEventListener('click', () => {
    var menuItems = document.querySelector('.menu-items');
        if (menuItems.classList.contains('show')) {
            menuItems.classList.add('hide');

            menuItems.classList.remove('show');
        } else {
            menuItems.classList.add('show');

            menuItems.classList.remove('hide');
        }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 78850a6478b7fdcf211d20bcd34d73f0cda7c687
});

var modal = document.getElementById("minhaModal");

var btn = document.getElementById("btn_modal");

var span = document.getElementsByClassName("fechar");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function proximaCuriosidade() {
    sortear = parseInt(1 + Math.random() * curiosidades.length)

    img_curiosidade.src = curiosidades[sortear - 1].imagem
    p_curiosidade.innerHTML = curiosidades[sortear - 1].texto
<<<<<<< HEAD
}
=======
}
=======
});
>>>>>>> 2e217ac96a85df2d80717ea2670138e28def4719
>>>>>>> 78850a6478b7fdcf211d20bcd34d73f0cda7c687
