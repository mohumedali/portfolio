let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let create=document.getElementById('create');

//get total
function getTotal(){
    if(price.value!=''){
        let result= (+price.value+ +taxes.value+ +ads.value)- +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor='green';
    }else{
        total.innerHTML='';
        total.style.backgroundColor='rgb(135, 2, 11)';
    }
}
//create product
let dataPro;
try {
    dataPro = JSON.parse(localStorage.getItem('product')) || [];
} catch (e) {
    dataPro = [];
    localStorage.setItem('product', JSON.stringify(dataPro)); 
}
    create.onclick = function () {
        let newData = {
            title: title.value.toLowerCase(),
            price: price.value,
            taxes: taxes.value,
            ads: ads.value,
            discount: discount.value,
            total: total.innerHTML,
            count: count.value,
            category: category.value.toLowerCase(),
        };
        let countValue = parseInt(count.value) || 1;
        for (let i = 0; i < countValue; i++) {
            dataPro.push(newData);
        }
        localStorage.setItem('product', JSON.stringify(dataPro));
        cleardata();
        ReadData();
    };



//clear inputs
function cleardata(){
    title.value='';
    price.value='';
    discount.value='';
    ads.value='';
    taxes.value='';
    category.value='';
    total.innerHTML='';
    count.value='';
    total.style.backgroundColor='rgb(135, 2, 11)';
}


//read data 
function ReadData(){
    let table='';
    for(let i=0;i< dataPro.length;i++){
        table +=`
        <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updatedata(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
        console.log(dataPro[i].taxes)
    }
    document.getElementById('tbody').innerHTML=table;
    let btndelete=document.getElementById('deleteall');
    if(dataPro.length>0)
    {
        btndelete.innerHTML =`
        <button onclick="deleteall()"> Delete All (${dataPro.length})</button>
        `
    }
    else{
        btndelete.innerHTML=''
    }

}
ReadData()



//delete
function deleteData(i) {
    dataPro.splice(i, 1); 
    localStorage.setItem('product', JSON.stringify(dataPro));
    ReadData();
}

function deleteall(){
    localStorage.clear();
    dataPro.splice(0);
ReadData()
}


//update
function updatedata(i){
        title.value=dataPro[i].title;
        price.value=dataPro[i].price;
        taxes.value=dataPro[i].taxes;
        ads.value=dataPro[i].ads;
        discount.value=dataPro[i].discount;
        total.innerHTML=dataPro[i].total;
        category.value=dataPro[i].category;
        count.value=dataPro[i].count;
        total.style.backgroundColor='green'
        ReadData();
}

//search
let searchMood='title';
function getsearchmood(id){
    let search=document.getElementById('search');
    if(id=='searchbytit')
    {
        searchMood='title';
        search.placeholder='Search By Title';
    }
    else
    {
        searchMood='category';
        search.placeholder='Search By Category';
    }
    console.log(searchMood)
search.focus();   
} 

function searchdata(value){
    let table='';
    if(searchMood=='title')
    {
        for(let i=0;i < dataPro.length; i++)
        {
            if(dataPro[i].title.includes(value))
            {
                table +=`
                <tr>
                <td>${i+1}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].count}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick="updatedata(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `;
            }
        }
    }
    else if(searchMood=='category')
    {
        for(let i=0;i < dataPro.length; i++)
        {
                if(dataPro[i].category.includes(value))
                {
                    table +=`
                    <tr>
                    <td>${i+1}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updatedata(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>
                    `;
                }
        }
    }
    document.getElementById('tbody').innerHTML=table;
}
//clean data

