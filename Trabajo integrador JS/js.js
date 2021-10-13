function borrar()
{
    document.getElementById("formTickets").reset();
}

function resumen()
{
    var cantidad = document.getElementById("inputCantidad").value;
    var opcion = document.getElementById("inputSeleccion").value;
    var valorTicket = 200; 
    var valorTotal = 0;

    switch(opcion)
    {
        case "Estudiante":
            var descuento1 = ((valorTicket*cantidad)*80)/100;
            valorTotal = (valorTicket*cantidad)-descuento1;
        break;
        
        case "Trainee":
            var descuento2 = ((valorTicket*cantidad)*50)/100;
            valorTotal = (valorTicket*cantidad)-descuento2;
        break;

        case "Junior":
            var descuento3 = ((valorTicket*cantidad)*15)/100;
            valorTotal = (valorTicket*cantidad)-descuento3;
        break;

        default:
            alert("Por favor indicar la opcion y la cantidad corresponiente.");
    }

    document.getElementById("total").innerHTML= valorTotal;
}