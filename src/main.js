import '@picocss/pico/css/pico.min.css'
import { qs } from './utils/dom'
import { api } from './api';
import "toastify-js/src/toastify.css"

//CORS
/*
    Domain -> host name + port
        front: http://localhost:5174
        front: http://127.0.0.1:5174

        back:  http://127.0.0.1:8090

        fad.ir
        fad.ir:9090

    - Backend bayad CORS ro handle konad

 */


qs("#avatarInput").addEventListener('change', e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = event => {
        qs('#preview').setAttribute('src', event.target.result)
    }

    fileReader.readAsDataURL(file);

    // fileReader.readAsText("c:\\windows\\xyz.txt")

})

async function loadStudents() {
    // const resp = await fetch('http://127.0.0.1:8090' + '/api/collections/students/records', {
    //     method: 'GET'
    // });
    // const data = await resp.json();


    const data = (await api.get('/api/collections/students/records')).data


    const tbody = qs('tbody');
    //Tamrin: handlebars
    let result = '';
    for (const item of data.items) {
        result += `<tr>
            <td>${item.id}</td>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.isActive}</td>
            <td><img src="${item.Avatar}"></td>
            <td>edit, 
                <button onClick="deleteStudent('${item.id}')">❌</button>
                <button onClick="toggleStudent('${item.id}', ${item.isActive})">☀️</button>
            </td>
        </tr>`
    }
    tbody.innerHTML = result;
}

globalThis.toggleStudent = async (id, active) => {
    await api.patch('/api/collections/students/records/' + id, { isActive: !active });



    // await fetch('http://127.0.0.1:8090' + '/api/collections/students/records/' + id, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         isActive: !active
    //     })
    // });
    loadStudents();
}
globalThis.deleteStudent = async (id) => {
    if (confirm('are you sure?')) {
        await api.delete('/api/collections/students/records/' + id);
        // await fetch('http://127.0.0.1:8090' + '/api/collections/students/records/' + id, {
        //     method: 'DELETE'
        // });
        loadStudents();
    }
}

loadStudents();


qs('#addStudent').addEventListener('click', async e => {
    const data = {
        firstName: 'Siavash',
        lastName: 'Nemati',
        isActive: true,
        Avatar: qs('#preview').getAttribute('src')
    };

    await api.post('/api/collections/students/records', data);
    // const resp = await fetch('http://127.0.0.1:8090' + '/api/collections/students/records', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // });
    loadStudents();
})


