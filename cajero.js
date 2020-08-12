
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
	//this.imagenes.src = imagenes [this.n];
	this.imagen = new Image();
	this.valor = v;
	this.cantidad = c;
	this.nombre = n; 
	this.imagen.src = imagenes[this.nombre];
	
	}

	mostrar(cantidad)

	{		
		var cant = cantidad;
		for (var v =0; v < cant; v++)

			document.body.appendChild(this.imagen);

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
 				
 				e.mostrar(e.cantidad);

 				console.log (e.imagen)
 			 	
 			}
 			
 		}

 	}

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


