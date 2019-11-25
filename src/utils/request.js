export default function getData(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(function (response) {
      return response.json();
    }).then((data) => {

    })
}