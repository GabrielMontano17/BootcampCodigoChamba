let urlBase = "https://localhost:";

const MetodoGet = () => {
    fetch(`${urlBase}/api/prueba`)
    .then(response => response.text())
    .then(data => console.log("Método Get api", data));
};

const MetodoPost = () => {
    let participantes = ["qwertyuio", "asdfghjk", "zxcvbnm"];

    fetch(`${urlBase}/api/prueba`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Método Post api", data));
};

const MetodoPost2 = () => {
    let participantes = [{
        Nombre: "asdfg",
        Edad: 16,
        FechaNacimiento: '1990-09-15'
    },
    {
        Nombre: "asdfg",
        Edad: 16,
        FechaNacimiento: '1990-09-15'
    },
    {
        Nombre: "asdfg",
        Edad: 16,
        FechaNacimiento: '1990-09-15'
    },
    ];

    fetch(`${urlBase}/api/prueba/post2`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Método Post2 api", data));
};

const MetodoPut = () => {
    fetch(`${urlBase}/api/prueba/`, {
        method: 'PUT'
    })
    .then(response => response.text())
    .then(data => console.log("Método PUT api", data));
};

const MetodoDelete = () => {
    fetch(`${urlBase}/api/prueba/`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => console.log("Método DELETE api", data));
};

const ListaParticipantes = () => {
    fetch(`${urlBase}/api/prueba/obtenerparticipantes`)
    .then(response => response.json())
    .then(data => console.log("Método lista de participantes api", data))
};

const MayoresDeEdad = () => {
    fetch(`${urlBase}/api/prueba/mayoresdeedad`)
    .then(response => response.json())
    .then(data => console.log("Método lista de mayores de edad api", data))
};

MetodoGet();
MetodoPost();
MetodoPost2();
MetodoPut();
MetodoDelete()
ListaParticipantes();
MayoresDeEdad();