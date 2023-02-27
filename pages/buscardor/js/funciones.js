function mostrarContenido(nuevosDatosLista) {//Enseña el contenido del array del parametro
  let lista = document.getElementById('lista');
  let cabeceraCuenta = document.getElementById('cuenta');
  let nuevo;
  let cuenta = 0;

  lista.innerHTML = '';

  if (nuevosDatosLista != undefined) {
    nuevosDatosLista.forEach(item => {
      nuevo = document.createElement('p');
      nuevo.innerText = item;
      nuevo.className = 'indiceLista';
      cuenta++;
      cabeceraCuenta.innerText = cuenta;

      lista.appendChild(nuevo);
    });

  } else {
    cabeceraCuenta.innerText = cuenta;
    lista.innerHTML = '<h2>No hay ningún item con esa convinación.</h2>';
  }
}

function searchPokemon(lista, busqueda) {//Crea un array que contenga los datos del input y los manda a mostrar
  let nuevaLista = [];

  lista.forEach(item => {
    if (item.toLowerCase().includes(busqueda)) {
      nuevaLista.push(item);

    }
  });

  if (nuevaLista.length != 0) {
    mostrarContenido(nuevaLista);

  } else if (busqueda == '') {
    esperarDatos();

  } else {
    mostrarContenido();
  }
}