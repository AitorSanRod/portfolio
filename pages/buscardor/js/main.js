document.addEventListener('DOMContentLoaded', function () {
  let listaPokemon = [];
  let input = document.getElementById('buscador');
  let limiteBusquedaAPI = 1008; //Limite de la busqueda en la api 
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limiteBusquedaAPI}`;
  const getDatos = () => {//Fetch de datos
    return new Promise((resolve) => {

      fetch(URL)
        .then(respuesta => respuesta.json())
        .then(miDocumento => {
          resolve(miDocumento);

        })
    });
  };

  async function esperarDatos() {//Función asincrona para mandar los datos
    const datosAPI = await getDatos();

    datosAPI.results.forEach(item => {
      listaPokemon.push(item.name.charAt(0).toUpperCase() + item.name.slice(1));

    });

    mostrarContenido(listaPokemon);
  }

  //Curso de la aplicación
  input.addEventListener('keyup', function () {
    let buscar = input.value.toLowerCase();

    searchPokemon(listaPokemon, buscar);

  });

  esperarDatos();
});