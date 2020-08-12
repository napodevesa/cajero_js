
var dinero = 0;
var div = 0;
var papeles = 0;

var caja = [];
var entregado = [];


var imagenes = [];
imagenes ["cien"]= "100.png";
imagenes ["cincuenta"]= "50.png";
imagenes ["veinte"]= "20.png";
imagenes ["diez"]= "10.png";
imagenes ["cinco"]= "5.png";
imagenes ["uno"]= "1.png";

class Billete
{

	constructor (v,c, n)
	{

	this.imagen = new Image();
	this.valor = v;
	this.cantidad = c;
	this.nombre = n; 
	this.imagen.src = imagenes[this.nombre];
	
	}

	mostrar()

	{	
	
	 	document.body.appendChild(this.imagen);
	 			
	}				
	
}



function entregarDinero()
{
	var t = document.getElementById("dinero");
 	dinero = parseInt (t.value);

 	var total = 0;
 	var final = dinero ;

 	for (var bi of caja)
 	{

 	total += bi.valor * bi.cantidad;
 	final -= bi.valor * bi.cantidad ;

 	resultado.innerHTML = "Actualmente hay en caja: " + total + "<br />" 
 	+ "Luego de la extracción quedan: " + final + "<br />" ;

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


 	entregado.push(new Billete (bi.valor, papeles, bi.nombre));
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
 			if (e.cantidad > 0 )

 			{

 			resultado.innerHTML += + e.cantidad + " billetes de $ " + e.valor + " \n  " + e.nombre + " \n <br/> ";
	 				
		 		for (var v = 0; v < e.cantidad ; v ++)

		 		{
		 			resultado.innerHTML += "<img src=" + e.imagen.src + " />";


		 		}
 			 	
 			}

 		}

 	}

}


function darSaldoBillete(indice)

{
	var indice = indice;
	res = caja[indice].cantidad * caja[indice].valor;
	return res;
}

function darSaldoTotal(darSaldoBillete)

{
	res1 = darSaldoBillete(0) + darSaldoBillete(1) + darSaldoBillete(2) + darSaldoBillete(3)
	+ darSaldoBillete(4) + darSaldoBillete(5)
	return res1;
}



caja.push(new Billete(100,10, "cien"));
caja.push(new Billete(50,10, "cincuenta"));
caja.push(new Billete(20,10, "veinte"));
caja.push(new Billete(10,10, "diez"));
caja.push(new Billete(5,10, "cinco"));
caja.push(new Billete(1,100, "uno"));

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener ("click", entregarDinero);


