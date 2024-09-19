const app = document.getElementById("app")
const url = "https://piscum.photos/id/"
const size = "/200/200"
const Picture = parametros => {
    const src = url + parametro + size;
    return`
    <figure>
        <img src="https://picsum.photos/id/${parametros}/200/200" alt="" id="${parametros}"class= "">
        <figcaption>${parametros}</figcaption>
    </figure>
    `
}
//console.log(picture());
app.innerHTML=picture(1) + picture(2) + picture(3)

//const elemento1 = document.getElementById$("")
//const elemento2 = document.getElementById$("")
//const elemento3 = document.getElementById$("")
//elemento1.addEventListener("click", mifuncion)
//elemento2.addEventListener("click", mifuncion)
//elemento3.addEventListener("click", mifuncion)

const lista = document.querySelectorAll("img")
for (let i = 0; i < lista.length; i++){
    lista(i).addEvenListener("click",(evento)=>(evento.target.classList.toggle("redonda")))
}

function mifuncion(evento){
    console.log("hayyyyyyy")
    console.log(evento)
    var imagen = evento.target
    imagen.classList.toggle("redonda")

}