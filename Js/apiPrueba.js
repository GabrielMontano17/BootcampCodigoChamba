let urlBase = "https://localhost:44370";

const metodoGet = () => {
    fetch(`${urlBase}/api/Prueba`)
        .then(response => response.text())
        .then(data => console.log(data))
};

const metodoPost = () => {
    let participantes= ["Sarahi","Fernando","Juan","Carlos"];
    fetch(`${urlBase}/api/Prueba`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log("Metodo post", data))
};

const metodoPost2 = () => {
    let participantes = 
    [   {
            Nombre: "Sarahi",
            Edad: 21,
            FechaNacimiento: "2000-05-17"
        },
        {
            Nombre: "Fernado",
            Edad: 21,
            FechaNacimiento: "2000-06-26"
        },
        {
            Nombre: "Juan",
            Edad: 21,
            FechaNacimiento: "2000-04-28"
        },
        {
            Nombre: "Carlos",
            Edad: 21,
            FechaNacimiento: "2000-03-28"
        }
    ];
    fetch(`${urlBase}/api/Prueba/post2`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log("Metodo post2", data))
};

const metodoPut = () => {
    fetch(`${urlBase}/api/Prueba`, {
        method: 'PUT',
    })
        .then(response => response.text())
        .then(data => console.log("Metodo PUT", data))
};

const metodoDelete = () => {
    fetch(`${urlBase}/api/Prueba`, {
        method: 'DELETE',
    })
        .then(response => response.text())
        .then(data => console.log("Metodo delete", data))
};

metodoPut();
metodoGet();
metodoPost();
metodoPost2();
metodoDelete();