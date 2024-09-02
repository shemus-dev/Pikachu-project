// fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if(!response.ok){
//         throw new Error("Couldnot fetch resources")
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

fetchData();



async function fetchData(){
    try {

        const pokemonName = document.getElementById("pokemon").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Couldnot fetch resources")
        }
        const data = await response.json();
        const sprite = data.sprites.front_default;
        const img_Element = document.getElementById("pokemonSprite");

        img_Element.src = sprite;
        img_Element.style.display = "block";
    } catch (error) {
        console.log(error);
        
    }
}