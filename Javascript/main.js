let contratar = prompt('¿Quieres promocionar un tema?')

if (contratar == 'si') {
    const precio = 200;
    let temas = parseFloat(prompt('Cuantos temas quieres promocionar? máximo 3'));

    if (temas == 1) {
        alert(`'El valor es ${precio}'`);
    } else if (temas == 2) {
        alert(`El precio es ${precio * 2}`);
    } else if (temas == 3) {
        alert(`El precio es ${precio * 3}`);
    } else {
        alert('Consigue mas informacion en la web')
    }
} else {
    alert("Bienvenido a la web")
}

