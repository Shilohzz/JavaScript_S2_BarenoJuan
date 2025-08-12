document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    
    async function fetchData(){
        const res =  await fetch('https://689a16fffed141b96ba1d3ac.mockapi.io/api/tareas/tarea');
        let data = await res.json();
        return data;
    }


    async function addNewTask(){
        const task = taskInput.ariaValueMax;
        console.log(task);
        if (task.trim()==='') return;
        await fetch('https://689a16fffed141b96ba1d3ac.mockapi.io/api/tareas/tarea', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify ({
                task, status: 'On hold'
            })
        })
    }


    //console.log(fetchData());
    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap =>{
            const capDiv = document.createElement('div')
            if(cap.status==="ready"){
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML =`
                <div class="infoTextNegativo">
                <p>${cap.task}</p>
            </div>
            <div class="botones">
                <div class="terminadoNegativo">
                    <img src="./storage/img/pngwing.com (2).png" alt="">
                </div>
                <div class="eliminadoNegativo">
                    <img src="./storage/img/pngwing.com (4).png" alt="">
                </div>
            </div>
                `
            }else if(cap.status==="On hold"){
                capDiv.classList.add('capsula');
                capDiv.innerHTML=`
                 <div class="capsula">
            <div class="infoText">
                <p>${cap.task}</p>
            </div>
            <div class="botones">
                <div class="terminado">
                    <img src="./storage/img/pngwing.com (2).png" alt="">
                </div>
                <div class="eliminado">
                    <img src="./storage/img/pngwing.com (4).png" alt="">
                </div>
            </div>`
            }
            datosContenedor.appendChild(capDiv);
        });
    }
    fetchData().then(data =>{
        displayCapsula(data);
    })
    addTaskButton.addEventListener('click', addNewTask);
});