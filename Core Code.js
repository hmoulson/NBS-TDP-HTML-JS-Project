//removeelement

let Reftable = document.createElement("table");
let i;

function showrecords()
{
    Reftable.innerHTML="";
    createTable();

    for(i=0;i<QArecords.length;i++)
    {
        saveRecordToTable(i)
    }

    document.body.appendChild(Reftable);
}

function ShowFilterRecords()
{
    Reftable.innerHTML="";
    createTable();

    for(i=0;i<QArecords.length;i++)
    {
        if(QArecords[i].department==Department_Select.value)
        {
            saveRecordToTable(i)
        }
        else
        {
            continue;
        }
    }   

    document.body.appendChild(Reftable);
}

function managingrecords(id)
{
    alert(id);
}



function addrecord()
{
    QArecords.push(
        {
            "ninumber":document.getElementById("newninumber").value,
            "fullname":document.getElementById("newfullname").value,
            "phone":document.getElementById("newphone").value,
            "address":document.getElementById("newaddress").value,
            "department":document.getElementById("newdepartment").value,
        }
    )
}

function createTable()
{
    Reftable.border=4;

    let Trow=document.createElement("tr");
    Trow.style.backgroundColor="black";
    let td_ninumber=document.createElement("td");
    let td_fullname=document.createElement("td");
    let td_phone=document.createElement("td");
    let td_address=document.createElement("td");
    let td_department=document.createElement("td");
    let td_operations=document.createElement("td");

    td_ninumber.innerHTML="<b> <font color=white> NI Number </color> </b>";
    td_fullname.innerHTML="<b> <font color=white> Name </color> </b>";
    td_phone.innerHTML="<b> <font color=white> Phone Number </color> </b>";
    td_address.innerHTML="<b> <font color=white> Address </color> </b>";
    td_department.innerHTML="<b> <font color=white> Department </color> </b>";
    td_operations.innerHTML="<b> <font color=white> Operations </color> </b>";

    Trow.appendChild(td_ninumber);
    Trow.appendChild(td_fullname);
    Trow.appendChild(td_phone);
    Trow.appendChild(td_address);
    Trow.appendChild(td_department);
    Trow.appendChild(td_operations);

    Reftable.appendChild(Trow);
}


function saveRecordToTable(i)
{
    let Trow=document.createElement("tr");
    let td_ninumber=document.createElement("td");
    let td_fullname=document.createElement("td");
    let td_phone=document.createElement("td");
    let td_address=document.createElement("td");
    let td_department=document.createElement("td");
    let td_operations=document.createElement("td");

    td_ninumber.innerHTML=QArecords[i].ninumber;
    td_fullname.innerHTML=QArecords[i].fullname;
    td_phone.innerHTML=QArecords[i].phone;
    td_address.innerHTML=QArecords[i].address;
    td_department.innerHTML=QArecords[i].department;
    td_operations.innerHTML='<input type="button" value="amend record" id=i onclick=managingrecords(id)>'

    /*
    let btn = document.createElement('input');
    btn.type = "button";
    btn.id = i;
    btn.value = "update";
    //btn.onClick=managingrecords(i);
    btn.onClick=(function() {return function() {managingrecords(i);}})(i);
    
    td_operations.appendChild(btn);

    */

    Trow.appendChild(td_ninumber);
    Trow.appendChild(td_fullname);
    Trow.appendChild(td_phone);
    Trow.appendChild(td_address);
    Trow.appendChild(td_department);
    Trow.appendChild(td_operations);

    Reftable.appendChild(Trow);
}

function selectrecord()
    {
        let id = document.getElementById("num").value;
        document.getElementById("oldninumber").value=QArecords[id].ninumber;
        document.getElementById("oldfullname").value=QArecords[id].fullname;
        document.getElementById("oldphone").value=QArecords[id].phone;
        document.getElementById("oldaddress").value=QArecords[id].address;
        document.getElementById("olddepartment").value=QArecords[id].department;
        let updatebtn=document.createElement("button");
        updatebtn.innerHTML='<value="update" onclick=updaterecord()>'
        let removebtn=document.createElement("button");
        removebtn.innerHTML='<value="delete" onclick=deleterecord()>'

        document.appendChild(updatebtn);
        document.appendChild(removebtn);

    }

    function updaterecord()
    {
        let id = document.getElementById("num").value;
        QArecords[id].ninumber=document.getElementById("oldninumber").value;
        QArecords[id].fullname=document.getElementById("oldfullname").value;
        QArecords[id].phone=document.getElementById("oldphone").value;
        QArecords[id].address=document.getElementById("oldaddress").value;
        QArecords[id].department=document.getElementById("olddepartment").value;
    }








