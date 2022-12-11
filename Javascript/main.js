const precio = 200;
const tax = 0.19;

let contratar = prompt('¿Quieres promocionar un tema con nosotros?')

if (contratar.toLowerCase() == 'si') {
    const persona = {
        nombre: String,
        apellido: String,
        telefono: parseInt,
        cantidadTemas: parseInt
    }

    let precios = [precio, precio * 2, precio * 3]

    persona.nombre = prompt("Cuál es tu nombre?")
    persona.apellido = prompt("cuál es tu apellido?")
    persona.telefono = prompt("Cuál es tu número telefónico")
    persona.cantidadTemas = prompt("cuántos temas quieres promocionar, máximo 3")



    const precioTema = precios.filter((precio,index) => {
        if (
            index == persona.cantidadTemas - 1
        ) {
            return true;
        }
        return false;
    })

    console.log(precioTema[0] * tax)
    console.log(precioTema)

    let iva = precioTema[0] * tax 
    let total = precioTema[0] + iva
    alert(`el precio de promocion de tus productos es ${total}`)
    alert(`serás contactado al ${persona.telefono}`)


} else {
    alert("Bienvenido a la web")
}







