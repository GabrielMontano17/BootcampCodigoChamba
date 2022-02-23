let urlBase = "https://localhost:44376";

const metodoGet = () => {
    fetch(`${urlBase}/api/prueba`)
        .then(response => response.text())
        .then(data => console.log(data))
};

const metodoPost = () => {
    let participantes= ["Carlos","Alfredo","Capriel","Gabriel"];
    fetch(`${urlBase}/api/prueba`, {
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
            Nombre: "Carlos",
            Edad: 21,
            FechaNacimiento: "2000-03-28"
        },
        {
            Nombre: "Alfredo",
            Edad: 21,
            FechaNacimiento: "2000-03-28"
        },
        {
            Nombre: "Capriel",
            Edad: 21,
            FechaNacimiento: "2000-03-28"
        },
        {
            Nombre: "Gabriel",
            Edad: 21,
            FechaNacimiento: "2000-03-28"
        }
    ];
    fetch(`${urlBase}/api/prueba/post2`, {
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
    fetch(`${urlBase}/api/prueba`, {
        method: 'PUT',
    })
        .then(response => response.text())
        .then(data => console.log("Metodo PUT", data))
};

const metodoDelete = () => {
    fetch(`${urlBase}/api/prueba`, {
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