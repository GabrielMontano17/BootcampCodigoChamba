let urlBase = "https://localhost:44355";
const MetodoGet=() =>{
fetch(`${urlBase}/api/prueba`)
.then(response => response.text ())
.then(data => console.log("Metodo get api",data))
};


const MetodoPost = () =>{
let participantes = ["gabo", "vic","raul"];

fetch(`${urlBase}/api/prueba`,{
    method:'POST',
    body: JSON.stringify(participantes),
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log("Metodo post api",data))
};

const MetodoPost2 = () =>{
    let participantes = [
        {
            Nombre : "gabriel",
            Edad : 28,
            fechaNacimiento :"1995-11-10"
        },
        {
            nombre : "gabriel 2",
            Edad : 17,
            fechaNacimiento :"1995-11-10"
            
        }
        
    ];
    
    fetch(`${urlBase}/api/prueba/post2`,{
        method:'POST',
        body: JSON.stringify(participantes),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log("Metodo post api",data))
    };

    const MetodoPut = () =>{
        
        fetch(`${urlBase}/api/prueba`,{
            method:'PUT'
        })
        .then(response => response.text())
        .then(data => console.log("Metodo put api",data))
        };
        
        
    const MetodoDelete = () =>{
    
        fetch(`${urlBase}/api/prueba`,{
            method:'DELETE'
        })
        .then(response => response.text())
        .then(data => console.log("Metodo delete api",data))
        };
    const ListaPArticipantes = () =>{
            
                fetch(`${urlBase}/api/prueba/obtenerparticipantes`)
                .then(response => response.json())
                .then(data => console.log("Metodo Participantes Api",data))
                };

                const MayoresDeEdad = () =>{
            
                    fetch(`${urlBase}/api/prueba/mayoresdeedad`)
                    .then(response => response.json())
                    .then(data => console.log("Metodo mayores Api",data))
                    };


MetodoGet();
MetodoPost(); 
MetodoPost2(); 
MetodoPut(); 
MetodoDelete(); 
ListaPArticipantes();
MayoresDeEdad();