function demo() {
    const Data = class {
        constructor(email, nombrecompleto, telefono, temas) {
            this.email = email;
            this.nombrecompleto = nombrecompleto;
            this.telefono = telefono;
            this.temas = temas;
            this.precio = 200;
        }

        get price() {
            return this.calcPrice();
        }

        calcPrice() {
            return this.temas * this.precio;
        }
    };

    let email = document.getElementById("email").value;

    localStorage.setItem("email", email);

    let nombrecompleto = document.getElementById("nombrecompleto").value;

    localStorage.setItem("nombre completo", nombrecompleto);

    let telefono = document.getElementById("telefono").value;

    // Validacion de telefono
    if (telefono.length > 11 || telefono.length < 11) {
        Toastify({
            text: "El telefono debe tener 11 digitos!",
            className: "error",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #cb3234, #ff0000)",
            },
            offset: {
                x: 50,
                y: 50
            },
        }).showToast();
        return 0;
    }

    localStorage.setItem("telefono", telefono);

    let temas = + document.getElementById("cTemas").value;

    const informacion = new Data(email, nombrecompleto, telefono, temas);

    if (informacion.temas == 1) {

        document.getElementById("precio").textContent = "El valor es " + informacion.price;
        document.getElementById("presupuesto").textContent = "seras contactado al " + localStorage.getItem('telefono');

    } else if (informacion.temas == 2) {

        document.getElementById("precio").textContent = "El valor es " + informacion.price;
        document.getElementById("presupuesto").textContent = "seras contactado al " + localStorage.getItem('telefono');

    } else if (informacion.temas == 3) {

        document.getElementById("precio").textContent = "El valor es " + informacion.price;
        document.getElementById("presupuesto").textContent = "seras contactado al " + localStorage.getItem('telefono');

    } else {
        alert("Consigue mas informacion en la web");
    }



    document.getElementById("info2").innerHTML = localStorage.getItem('nombre completo');
    document.getElementById("info3").innerHTML = localStorage.getItem('telefono');

    const ul = document.getElementById('authors');
    const url = 'https://randomuser.me/api/?results=5';

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let authors = data.results;
            document.getElementById("recomendacion").textContent = "Te recomendamos seguir algunos de nuestros autores:  ";

            return authors.map(function (author) {
                let li = createNode('li');
                let img = createNode('img');
                let span = createNode('span');
                img.src = author.picture.medium;
                span.innerHTML = `${author.name.first} ${author.name.last}`;
                append(li, img);
                append(li, span);
                append(ul, li);
            })
        })
        .catch(function (error) {
            console.log(error);
        });

}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}