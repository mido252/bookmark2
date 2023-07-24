let siteName = document.getElementById('siteName');
let siteUrl = document.getElementById('siteLink');
let btn = document.getElementById('submitBtn');
let table = document.getElementById('show');

let data;


if(localStorage.links != null){
    data = JSON.parse(localStorage.links)
}else{
    data = [];
}


btn.onclick=function add(){
    let newUrl = {
        name:siteName.value,
        url:siteUrl.value
    }
    data.push(newUrl);
    localStorage.setItem( "links", JSON.stringify(data) )
    showData()
    clearData()
}


function showData(){
    let table='';

    for (let i = 0; i < data.length; i++) {
    table += `
    <tr>
    <td>${i}</td>
    <td>${data[i].name}</td>
    <td><a href="${data[i].url}" target="_blank" class="btn btn-outline-success text-capitalize"> <span><i class="fa-solid fa-eye p-1"></i></span>visit</a></td>
    <td>
    <button onclick="deleteItem(${i})" class="btn btn-outline-danger text-capitalize">
        <span><i class="fa-solid fa-trash p-1"></i></span>
        delete
    </button>
</td>
</tr>
    `;
    }

    document.getElementById('tbody').innerHTML= table;

    let btnDelete = document.getElementById('deleteAll')
    if (data.length > 0){
        btnDelete.innerHTML= `
            <button class="btn btn-danger text-capitalize mt-3" onclick="deleteAll()"> <i class="fa-solid fa-trash"></i> delete all</button>
        `
    }else{
        btnDelete.innerHTML=""
    }
}

function clearData(){
    siteName.value='';
    siteUrl.value='';
}

showData()


function deleteItem(i){
   data.splice(i,1);
    localStorage.links =JSON.stringify(data);
    showData()
}


function deleteAll(){
    localStorage.clear();
    data.splice(0);
    showData();
}

















































// function handleSubmit() {
//     const name = siteName.value;
//     const url = siteUrl.value;

//     if(/[a-zA-Z]+\d*-*/gi.test(name) && /www\.\w+\.\w+/.test(url)) {
//         const myObj = { name, url}
//         data.push(myObj);
//         siteName.value = "";
//         siteUrl.value = "";
//         handleGenerate();
//         siteName.classList.remove('is-invalid');
//         siteUrl.classList.remove('is-invalid');
//     } else if(!/[a-zA-Z]+\d*-*/gi.test(name) && /www\.\w+\.\w+/.test(url)) {
//         siteName.classList.add('is-invalid');
//         siteUrl.classList.remove('is-invalid');
//     } else if(!/www\.\w+\.\w+/.test(url) && /[a-zA-Z]+\d*-*/gi.test(name)) {
//         siteUrl.classList.add('is-invalid');
//         siteName.classList.remove('is-invalid');
//     } else {
//         siteName.classList.add('is-invalid');
//         siteUrl.classList.add('is-invalid');
//     }
// }
// function handleGenerate() {
//     let tableData = "";
//     data.forEach((obj, i) => {
//         const line = `<tr>
//         <td>${i}</td>
//         <td>${obj.name}</td>
//         <td><a href=${obj.url} target="_blank">Visit</a></td>
//         <td><button class="btn btn-danger" onclick="handleDelete(${i})">Delete</button></td>
//         </tr>`;
//         tableData += line;
//     });
//     table.innerHTML = tableData;
// }

// function handleDelete(index) {
//     data.splice(index, 1);
//     handleGenerate();
// }





