express = require('express');
cors = require('cors');

const app = express();
app.use(cors())
app.get('/', function(req,res){

	var data = {
		Apellido:"Morales",
		Email:"damian@gmail.com",
		Id_ubicacion:"1",
		Nombre:"damian",
		Password:"1234"
	}
	
	setTimeout(()=>res.send(data), 3000);
	
})

app.get('/animal/:id', function(req,res){

	console.log(req.params)
	var data = {
		1 : [{Id_raza:1 ,Descripcion:"Caniche"},{Id_raza:1 ,Descripcion:"Bulldog"}],
		2 : [{Id_raza:1, Descripcion:"Siames"},{Id_raza:2, Descripcion: "Negro"}]
	}
	
	setTimeout(()=>res.send(data[req.params.id]), 3000);
	
})

app.get('/raza', function(req,res){

	console.log(req.params)
	var data = [{Id_raza:1 ,Descripcion:"Caniche", Id_animal:6},{Id_raza:2 ,Descripcion:"Bulldog",Id_animal:6},{Id_raza:3, Descripcion:"Siames",Id_animal:4},{Id_raza:4, Descripcion: "Negro",Id_animal:4},{Id_raza:5, Descripcion: "Mediterranea",Id_animal:8}]
	
		
	
	setTimeout(()=>res.send(data), 3000);
	
})


app.get('/animal/:id', function(req,res){

	console.log(req.params)
	var data = {
		1 : [{Id_raza:1 ,Descripcion:"Caniche"},{Id_raza:1 ,Descripcion:"Bulldog"}],
		2 : [{Id_raza:1, Descripcion:"Siames"},{Id_raza:2, Descripcion: "Negro"}]
	}
	
	setTimeout(()=>res.send(data[req.params.id]), 3000);
	
})

app.get('/perfil/:id', function(req,res) {
	var data = [
	{
		Id_perfil:4,
		Nombre: "Tomi",
		Edad:2,
		Id_raza:2,
		Id_genero: 1,
		Id_usuario:1
	}
	]
	setTimeout(()=>res.send(data), 3000);
});




app.listen(3001, () => {
      console.log('Server on port');
  });

