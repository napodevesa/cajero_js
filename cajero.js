
var dinero = 0;
var div = 0;
var papeles = 0;

class Billete
{

	constructor (v,c,imagenes)
	{

	this.valor = v;
	this.cantidad = c;
	this.imagenes = imagenes;
	
	}

	
}


function entregarDinero()
{
 	var t = document.getElementById("dinero");
 	dinero = parseInt (t.value);

 	for (var bi of caja)
 	{

 		if (dinero > 0)
 		{
 			div = Math.floor(dinero / bi.valor);
 			
 			if (div > bi.cantidad)
 			{
 				papeles = bi.cantidad;
 			}

 			else
 			{
 				papeles = div;
 			}

 	entregado.push(new Billete (bi.valor, papeles));
 	dinero -= (bi.valor * papeles);

 		}
 	}

 	if (dinero > 0)
 	{
 		resultado.innerHTML = "No money";
 	}

 	else

 	{

 		for (var e of entregado)
 		{
 			resultado.innerHTML += + e.cantidad + " billetes de $ " + e.valor + " \n <br/> " ;
 		}

 	}

}



var imagenes = [];
imagenes ["5"]= "5.png";
imagenes ["10"]= "10.png";
imagenes ["20"]= "20.png"; 
imagenes ["50"]= "50.png";
imagenes ["100"]= "100.png"; 


var caja = [];
var entregado = [];

caja.push(new Billete(100,10,"100.png" ));
caja.push(new Billete(50,10, "50.png"));
caja.push(new Billete(20,10, "20.png"));
caja.push(new Billete(10,10, "10.png"));
caja.push(new Billete(5,10, "5.png"));
caja.push(new Billete(1,100));

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener ("click", entregarDinero);


