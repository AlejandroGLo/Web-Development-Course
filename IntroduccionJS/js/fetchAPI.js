// JSON - Javascript Object Notation

async function obtenerEmpleados(){
    const file = 'employees.json';
    /* fetch(file)
        .then(result => {
            return result.json();
        })
        .then( data => {
            //console.log(data.employees);

            const { employees } = data;
            console.log(employees);
            
        })*/
    const result = await fetch(file);
    const data = await result.json();
    console.log(data);
}

obtenerEmpleados();