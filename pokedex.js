/*funcion fetch para consultar api*/

const fetchPokemon =() =>{
    const nomPokemon = document.getElementById("pokeName");
    let pokeInput = nomPokemon.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            imgPokemon("./img/confuse.gif");
            imgShiny("");
        }
        else{
            return res.json();
        }
    }).then((data) => {
        /*let pokeImgShiny = data.sprites.other.home.front_shiny;
        let pokeImg = data.sprites.other.dream_world.front_default;
        let peso = data.weight/10;
        let altura = data.height/10;
        let numpokemon = data.order;
        let nombre = data.name;
        let tipo = data.types;
        console.log(peso + " KG")
        console.log("altura " + altura +" m");*/
        imgPokemon(data);
        infoPokemon(data);
        //imgShiny(pokeImgShiny);
    })
}

//fetchPokemon();



const imgPokemon = (data)=>{
    let pokeImg = data.sprites.other.dream_world.front_default; //trae la url de la imagen que está en la api
    const pokeImgN = document.getElementById("pokeImg"); //seleccionas el elemento de HTML que tiene el ID
    pokeImgN.src = pokeImg;  //al elemento html en su funcion src le colocarás la url
}


const infoPokemon = (data) =>{
    let numPok = data.id;
    let nombrePok = data.name;
    let altura = (data.height / 10)+ " mts";
    let peso = (data.weight / 10)+ " kg";

    let hp = data.stats;
    /*let Ataq = data.stats.1.base_stat;
    let Def = data.stats.2.base_stat;
    let AtaqEsp = data.stats.3.base_stat;
    let DefEsp = data.stats.4.base_stat;
    let Vel = data.stats.5.base_stat;*/

    console.log(hp);

    document.getElementById("idPokemon").innerHTML = numPok;
    document.getElementById("nomPokemon").innerHTML = nombrePok;
    document.getElementById("alturaPokemon").innerHTML = altura;
    document.getElementById("pesoPokemon").innerHTML = peso;
}

