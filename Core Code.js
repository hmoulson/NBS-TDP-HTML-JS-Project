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

function addrecordform()
{
    document.getElementById("addrecordform").style.visibility="visible";
}

function addrecord()
{
    QArecords.push(
        {
            "ninumber":document.getElementById("newninumber").value,
            "fullname":document.getElementById("newfullname").value,
            "phone":document.getElementById("newphone").value,
            "address":document.getElementById("newaddress").value,
            "department":document.querySelector('input[name="newdepartment"]:checked').value
        }
    )
    document.getElementById("addrecordform").style.visibility="hidden";
    showrecords();
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

    let btn_manage = document.createElement('input');
        btn_manage.type = "button";
        btn_manage.id = i;
        btn_manage.value = "manage record";

        btn_manage.onclick=function(){
            if(btn_manage.value=="manage record")
            {
                selectrecord(btn_manage.id);
            }
            else
            {
                btn_manage.value="manage record"
            }
        };
    
    td_operations.appendChild(btn_manage);

    Trow.appendChild(td_ninumber);
    Trow.appendChild(td_fullname);
    Trow.appendChild(td_phone);
    Trow.appendChild(td_address);
    Trow.appendChild(td_department);
    Trow.appendChild(td_operations);

    Reftable.appendChild(Trow);
}

function selectrecord(id)
    {
        document.getElementById("recordid").value=id;
        document.getElementById("oldninumber").value=QArecords[id].ninumber;
        document.getElementById("oldfullname").value=QArecords[id].fullname;
        document.getElementById("oldphone").value=QArecords[id].phone;
        document.getElementById("oldaddress").value=QArecords[id].address;
        document.getElementById("olddepartment").value=QArecords[id].department;
    }

function updaterecord()
{
    let ch=confirm("Please confirm your changes");
    if (ch==true)
    {
        let id = document.getElementById("recordid").value;
        QArecords[id].ninumber=document.getElementById("oldninumber").value;
        QArecords[id].fullname=document.getElementById("oldfullname").value;
        QArecords[id].phone=document.getElementById("oldphone").value;
        QArecords[id].address=document.getElementById("oldaddress").value;
        QArecords[id].department=document.getElementById("olddepartment").value;
    }
    showrecords();
    clearselectrecord();
}

function deleterecord()
{
    let ch=confirm("Please confirm you wish to delete the record");
    if (ch==true)
    {
        let id=document.getElementById("recordid").value;
        QArecords.splice(id,1);
    }
    showrecords();
    clearselectrecord();
}

function clearselectrecord()
{
    document.getElementById("recordid").value="";
        document.getElementById("oldninumber").value="";
        document.getElementById("oldfullname").value="";
        document.getElementById("oldphone").value="";
        document.getElementById("oldaddress").value="";
        document.getElementById("olddepartment").value="";
}








