const PAGINAS = [{ enlace: 'pages/buscardor/indexBuscador.html', titulo: 'Buscador', rutaImg: 'media/buscador.png'}];
let divPaginas = document.getElementById('paginas');
let enlace;
let divCarta;
let imagenCarta;
let divCuerpoCarta;
let tituloCarta;

PAGINAS.forEach(link => {
    enlace = document.createElement('a');
    divCarta = document.createElement('div');
    imagenCarta = document.createElement('img');
    divCuerpoCarta = document.createElement('div');
    tituloCarta = document.createElement('h5');

    //Enlace
    enlace.href = link.enlace;
    enlace.className = 'btn cartasProyectos';

    //carta
    divCarta.className = 'card';

    //Imagen
    imagenCarta.src = link.rutaImg;
    imagenCarta.className = 'card-img-top';

    //Cuerpo de la carta
    divCuerpoCarta.className = 'card-body';

    //Titulo
    tituloCarta.className = 'card-title text-center';
    tituloCarta.innerText = link.titulo;

    //Montar carta
    divCuerpoCarta.appendChild(tituloCarta);
    divCarta.appendChild(imagenCarta);
    divCarta.appendChild(divCuerpoCarta);
    enlace.appendChild(divCarta)


    //Incluir a la pagina
    divPaginas.appendChild(enlace);
});