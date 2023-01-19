console.log(precioTema[0] * tax);
console.log(precioTema);

let iva = precioTema[0] * tax;
let total = precioTema[0] + iva;
alert(`el precio de promocion de tus productos es ${total}`);
alert(`serás contactado al ${persona.telefono}`);

function demo() {
    let email = document.getElementById("email").value;

    localStorage.setItem("email", email);

    let nombrecompleto = document.getElementById("nombrecompleto").value;

    localStorage.setItem("nombre completo", nombrecompleto);

    let telefono = document.getElementById("telefono").value;

    localStorage.setItem("telefono", telefono);

    const precio = 200;

    let temas = +document.getElementById("cTemas").value;

    if (temas == 1) {

        document.getElementById("precio").textContent = "El valor es" + precio;
        document.getElementById("presupuesto").textContent = "seras contactado al " + localStorage.getItem('telefono');

    } else if (temas == 2) {

        document.getElementById("precio").textContent = "El valor es " + precio * 2;
        document.getElementById("presupuesto").textContent = "seras contactado al " + localStorage.getItem('telefono');

    } else if (temas == 3) {

        document.getElementById("precio").textContent = "El valor es " + precio * 3;
        document.getElementById("presupuesto").textContent = "seras contactado al " + localStorage.getItem('telefono');

    } else {
        alert("Consigue mas informacion en la web");
    }



    document.getElementById("info2").innerHTML = localStorage.getItem('nombre completo');
    document.getElementById("info3").innerHTML = localStorage.getItem('telefono');

}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let authors = data.results;
        return authors.map(function (author) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${ author.name.first } ${ author.name.last }`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function (error) {
        console.log(error);
    });