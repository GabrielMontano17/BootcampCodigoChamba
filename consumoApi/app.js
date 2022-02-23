var urlBase= "https://localhost:44363";
const MetodoGet =()=>{
    fetch(`${urlBase}/api/prueba`)
    .then(response => response.text())
    .then(data => console.log("Metodo GET Api ",data))
}
const MetodoPost=()=>{
    let participantes =["nicolas","sofia","susna"];
    fetch(`${urlBase}/api/prueba`,{
        method: 'POST',
        body:JSON.stringify(participantes),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log("Metodo POST Api ",data))
}
const MetodoPost2=()=>{
    let participantes =[
        {
            Nombre:"nicolas",
            Edad:13,
            FechaDeNacimineto: '1990-10-21'
        },
        {
            Nombre:"sofia",
            Edad:18,
            FechaDeNacimineto: '1990-10-21'
        },
        {
            Nombre:"nicolas",
            Edad:23,
            FechaDeNacimineto: '1990-10-21'
        },
        {
            Nombre:"nicolas",
            Edad:13,
            FechaDeNacimineto: '1990-10-21'
        },
        ];
    fetch(`${urlBase}/api/prueba/post2`,{
        method: 'POST',
        body:JSON.stringify(participantes),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log("Metodo POST2 Api ",data))
}
const MetodoPut=()=>{
    let participantes =["nicolas","sofia","susna"];
    fetch(`${urlBase}/api/prueba`,{
        method:'PUT'       
    })
    .then(response => response.text())
    .then(data => console.log("Metodo PUT Api ",data))
}
const MetodoDELETE=()=>{
    let participantes =["nicolas","sofia","susna"];
    fetch(`${urlBase}/api/prueba`,{
        method:'DELETE'       
    })
    .then(response => response.text())
    .then(data => console.log("Metodo DELETE Api ",data))
}
const ListarParticipantes =()=>{
    fetch(`${urlBase}/api/prueba/obtenerparticipantes`)
    .then(response => response.json())
    .then(data => console.log("Lista de participantes ",data))

}
const ListarMayoresEdad =()=>{
    fetch(`${urlBase}/api/prueba/mayoresdeedad`)
    .then(response => response.json())
    .then(data => console.log("Lista de participantes Mayores de edad",data))

}
MetodoGet();
MetodoPost();
MetodoPost2();
MetodoPut();
MetodoDELETE();
ListarParticipantes();
ListarMayoresEdad();