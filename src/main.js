import '@picocss/pico/css/pico.min.css'
import { qs } from './utils/dom'
async function loadStudents() {
    const resp = await fetch('http://127.0.0.1:8090' + '/api/collections/students/records', {
        method: 'GET'
    });
    const data = await resp.json();
    const tbody = qs('tbody');
    console.log(tbody)

    let result = '';
    for (const item of data.items) {
        result += `<tr>
            <td>${item.id}</td>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.isActive}</td>
            <td>edit, delete</td>
        </tr>`
    }
    tbody.innerHTML = result;
}

loadStudents();

qs('#addStudent').addEventListener('click', async e => {
    const resp = await fetch('http://127.0.0.1:8090' + '/api/collections/students/records', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName: 'Siavash',
            lastName: 'Nemati',
            isActive: true
        })
    });

    loadStudents();
})