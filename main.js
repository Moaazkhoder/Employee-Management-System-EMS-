let Name=document.getElementById('Name');
let MissingDays = document.getElementById('MissingDays');
let MissingHours = document.getElementById('MissingHours');
let MissingMinuts = document.getElementById('MissingMinuts');
let ExtraHours=document.getElementById('ExtraHours');
let ExtraMinuts=document.getElementById('ExtraMinuts');
let result =document.getElementById('Result');
let count =document.getElementById('count');
let category =document.getElementById('category');
let submit =document.getElementById('submit');
let mworkinghours =document.getElementById('mworkinghours');
let salary =document.getElementById('sal');
let TSalary =document.getElementById('TSalary');
let DoublePaid =document.getElementById('DoublePaid'); 
let DoublePaidDate =document.getElementById('DoublePaidDate');
let DaysOffDate =document.getElementById('DaysOffDate');
let MissingHoursDate =document.getElementById('MissingHoursDate');
let MissingMinutsDate =document.getElementById('MissingMinutsDate');
let ExtraHoursDate =document.getElementById('ExtraHoursDate');
let ExtraMinutsDate =document.getElementById('ExtraMinutsDate');
let mood ='create';
let tmp;



function getTotal(){
     let resulttt = +DoublePaid.value*8+ +ExtraHours.value+ +ExtraMinuts.value/60
        let resultt= +mworkinghours.value-(+MissingDays.value*4+ +MissingHours.value+ +MissingMinuts.value/60)
        let result =+resulttt + +resultt
   Result.innerHTML=result
   Result.style.background='#040'
Result.style.background='##a00d02'

let res = salary.value*result
TSalary.innerHTML=res
TSalary.style.background='#01b40a'
TSalary.style.background='##a00d02'



}


/*function getTotal(){
    let result=(+MissingDays.value*4+ +ExtraDays.value*4+ +ExtraHours.value+
        +MissingHours.value+'.'+ +MissingMinuts.value+ +ExtraMinuts.value
        )- +mworkinghours.value

   Result.innerHTML=result
   Result.style.background='#040';
Result.style.background='##a00d02'

let res =(+MissingDays.value*4+ +ExtraDays.value*4+ +ExtraHours.value+ +MissingHours.value+'.'+ +MissingMinuts.value+ +ExtraMinuts.value)- +mworkinghours.value *salary.value

TSalary.innerHTML=res
TSalary.style.background='#01b40a';
TSalary.style.background='##a00d02'
}*/


/*function getTotal(){

    let result=(+MissingDays.value*4+ +MissingHours.value+'.'+ +MissingMinuts.value)
    - +mworkinghours.value
   Result.innerHTML=result
   Result.style.background='#040';
Result.style.background='##a00d02'

let res =(+MissingDays.value*4+ +MissingHours.value+'.'+ +MissingMinuts.value)
- +mworkinghours.value *salary.value
TSalary.innerHTML=res
TSalary.style.background='#040';
TSalary.style.background='##a00d02'

}*/

/* create*/
let dataPro;
if(localStorage.product != null){
dataPro = JSON.parse(localStorage.product)

}else{
dataPro=[] ;  
}

submit.onclick =function(){
    let newPro= {
        Name:Name.value,
        MissingDays:MissingDays.value,
        MissingHours:MissingHours.value,
        MissingMinuts:MissingMinuts.value,
        ExtraHours:ExtraHours.value,
        ExtraHoursDate:ExtraHoursDate.value,
        ExtraMinuts:ExtraMinuts.value,
        ExtraMinutsDate:ExtraMinutsDate.value,
        TSalary:TSalary.innerHTML,
        DoublePaid:DoublePaid.value,
        DoublePaidDate:DoublePaidDate.value,
        DaysOffDate:DaysOffDate.value,
        MissingHoursDate:MissingHoursDate.value,
        MissingMinutsDate:MissingMinutsDate.value,
       mworkinghours:mworkinghours.value,
       salary:salary.value
    }
    if(mood === 'create'){

        dataPro.push(newPro);  
    }else{
        dataPro[tmp]=newPro
        mood='create';
        submit.innerHTML= 'create';

    }
localStorage.setItem('product',   JSON.stringify(dataPro))
/*
    if(mood === 'create'){
        if(newPro.count > 1){
            for(let i=0;i < newPro.count;i++){
                dataPro.push(newPro);
            }
        }else{
            dataPro.push(newPro);
        }
        
    }else{

        dataPro[tmp]=newPro
    }
*/


/*
    dataPro.push(newPro)
    localStorage.setItem('product', JSON.stringify(dataPro))
*/

   clearData();
   ShowData()
}





/*clear*/
function clearData(){
Name.value='';
MissingDays.value='';
MissingHours.value='';
MissingMinuts.value='';
MissingHoursDate.value='';
ExtraHours.value='';
ExtraHoursDate.value='';
ExtraMinuts.value='';
ExtraMinutsDate.value='';
DoublePaid.value='';
DoublePaidDate.value='';
DaysOffDate.value='';
salary.value='';
MissingMinutsDate.value='';
mworkinghours.value='';
TSalary.value='';
}



/*showData*/
function ShowData(){

let table='';

for(let i=0;i<dataPro.length;i++){
    table += `<tr>
    <td>${i}</td>
    <td>${dataPro[i].Name}</td>
    <td>${dataPro[i].salary}</td>
    <td>${dataPro[i].mworkinghours}</td>
    <td>${dataPro[i].DoublePaid}</td>
    <td>${dataPro[i].DoublePaidDate}</td>
    <td>${dataPro[i].MissingDays}</td>
    <td>${dataPro[i].DaysOffDate}</td>
    <td>${dataPro[i].MissingHours}</td>
    <td>${dataPro[i].MissingHoursDate}</td>
    <td>${dataPro[i].MissingMinuts}</td>
    <td>${dataPro[i].MissingMinutsDate}</td>
    <td>${dataPro[i].ExtraHours}</td>
    <td>${dataPro[i].ExtraHoursDate}</td>
    <td>${dataPro[i].ExtraMinuts}</td>
    <td>${dataPro[i].ExtraMinutsDate}</td>
    <td>${dataPro[i].TSalary}</td>
      <td> <button onclick="updateData(${i})" id="update">Update</button>
      <td> <button onclick="deleteData(${i})" id="delete">Delete</button>
      </td>
    
        </tr>
    `
    
}

document.getElementById('tbody').innerHTML=table
let btnDelete =document.getElementById('deleteAll');
if(dataPro.length >0 ){

    btnDelete.innerHTML = `<button onclick="deleteAll()" >Delete All</button>`
}else{
    btnDelete.innerHTML = '';
}
}  
ShowData()


function deleteData(i){
dataPro.splice(i,1);
localStorage.product = JSON.stringify(dataPro);
ShowData()
}



 function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    ShowData()
 }
 

function updateData(i){
    Name.value=dataPro[i].Name;
    MissingDays.value=dataPro[i].MissingDays;
    MissingHours.value=dataPro[i].MissingHours;
    MissingMinuts.value=dataPro[i].MissingMinuts;
    MissingHoursDate.value=dataPro[i].MissingHoursDate;
    ExtraHours.value=dataPro[i].ExtraHours;
    ExtraHoursDate.value=dataPro[i].ExtraHoursDate;
    ExtraMinuts.value=dataPro[i].ExtraMinuts;
    ExtraMinutsDate.value=dataPro[i].ExtraMinutsDate;
    DoublePaid.value=dataPro[i].DoublePaid;
    DoublePaidDate.value=dataPro[i].DoublePaidDate;
    DaysOffDate.value=dataPro[i].DaysOffDate;
    salary.value=dataPro[i].salary;
    MissingMinutsDate.value=dataPro[i].MissingMinutsDate;
    mworkinghours.value=dataPro[i].mworkinghours;
 getTotal()
submit.innerHTML='Update';
mood= 'update';
tmp=i;

 }





