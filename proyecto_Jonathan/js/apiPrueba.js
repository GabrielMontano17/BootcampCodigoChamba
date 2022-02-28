let urlBase = "https://localhost:44355";

const MetodoGet = () =>
{
    fetch (`${urlBase}/api/Prueba`)
    .then(response => response.text())
    .then(data => console.log("Metodo Get api",data))
};

const MetodoPost = () =>
{
    let participantes = ["gabo", "vic","raul"];
    fetch (`${urlBase}/api/Prueba`,{
        method: 'POST',
        body: JSON.stringify(participantes),
        headers:{
            'Content-Type':'application/json'
        }})
    .then(response => response.json())
    .then(data => console.log("Metodo Post api",data))
};

const MetodoPost2 = () =>
{
    let participantes = [
        {
            Nombre:"gabo1",
            Edad: 17,
            FechaNacimiento: "1994-09-20"
        },
        {
            Nombre:"gabo2",
            Edad: 27,
            FechaNacimiento: "1994-09-20"
        },
        {
            Nombre:"gabo3",
            Edad: 12,
            FechaNacimiento: "1994-09-20"
        },
        {
            Nombre:"gabo4",
            Edad: 37,
            FechaNacimiento: "1994-09-20"
        }
    ];

    fetch (`${urlBase}/api/Prueba/post2`,{
        method: 'POST',
        body: JSON.stringify(participantes),
        headers:{
            'Content-Type':'application/json'
        }})
    .then(response => response.json())
    .then(data => console.log("Metodo Post2 api",data))
};


const MetodoPut = () =>
{
    fetch (`${urlBase}/api/Prueba`,{
        method: 'PUT'
    })
    .then(response => response.text())
    .then(data => console.log("Metodo Put api",data))
};

const MetodoDelete = () =>
{
    fetch (`${urlBase}/api/Prueba`,{
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => console.log("Metodo Delete api",data))
};

const MetodoObtenerDatos = () =>
{
    fetch (`${urlBase}/api/Prueba/obtenerparticipantes`)
    .then(response => response.json())
    .then(data => console.log("Metodo Get completa api",data))
}

const MetodoObtenerDatosMayores = () =>
{
    fetch (`${urlBase}/api/Prueba/mayoresdeedad`)
    .then(response => response.json())
    .then(data => console.log("Metodo Get mayores de edad api",data))
}

MetodoGet();
MetodoPost();
MetodoPost2();
MetodoPut();
MetodoDelete();
MetodoObtenerDatos();
MetodoObtenerDatosMayores();