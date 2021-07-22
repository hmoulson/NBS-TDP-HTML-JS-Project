let Reftable = document.createElement("table");
let form = document.createElement("form");
let i;

function showrecords() //show all records form. Runs createTable() and saveRecordToTable() at runtime.
{
    Reftable.innerHTML="";
    createTable();

    for(i=0;i<QArecords.length;i++)
    {
        saveRecordToTable(i)
    }

    tablecolumn.appendChild(Reftable);
}

function ShowFilterRecords() //show filtered records form. Runs createTable() and saveRecordToTable() at runtime.
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

    tablecolumn.appendChild(Reftable);
}

function createTable() //creates showRecords table headers
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

function saveRecordToTable(i) //add records to showRecords table
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

function selectrecord(id) //select record from showrecord table. Runs createupdateform() and populates with appropriate table data.
    {
        createupdateform();
        document.getElementById("recordID").value=id;
        document.getElementById("recordID").readOnly=true;
        document.getElementById("niNumberEdit").value=QArecords[id].ninumber;
        document.getElementById("fullNameEdit").value=QArecords[id].fullname;
        document.getElementById("phoneEdit").value=QArecords[id].phone;
        document.getElementById("addressEdit").value=QArecords[id].address;
        document.getElementById("departmentEdit").value=QArecords[id].department;
    }

function updaterecord() //updates values against a record. Runs showrecords() to conclude.
{
    let ch=confirm("Please confirm your changes");
    if (ch==true)
    {
        let id = document.getElementById("recordID").value;
        QArecords[id].ninumber=document.getElementById("niNumberEdit").value;
        QArecords[id].fullname=document.getElementById("fullNameEdit").value;
        QArecords[id].phone=document.getElementById("phoneEdit").value;
        QArecords[id].address=document.getElementById("addressEdit").value;
        QArecords[id].department=document.getElementById("departmentEdit").value;
    }
    showrecords();
    form.innerHTML="";
}

function deleterecord() //deletes a record. Runs showrecords() to conclude.
{
    let ch=confirm("Please confirm you wish to delete the record");
    if (ch==true)
    {
        let id=document.getElementById("recordID").value;
        QArecords.splice(id,1);
    }
    showrecords();
    form.innerHTML="";
}

function createupdateform() //creates manage record form - offers buttons to update and delete records using updaterecord() and deleterecord().
{
    form.innerHTML = "";

    let recordid = document.createElement("div");
        recordid.innerHTML = "Record ID: ";
        let idbox = document.createElement("input");
            idbox.type="text";
            idbox.id="recordID";
            idbox.value="";
        recordid.appendChild(idbox);

    let ninumedit = document.createElement("div");
        ninumedit.innerHTML = "NI Number: ";
        let nibox = document.createElement("input");
            nibox.type="text";
            nibox.id="niNumberEdit";
            nibox.value="";
        ninumedit.appendChild(nibox);
    
    let fullnameedit = document.createElement("div");
        fullnameedit.innerHTML="Full Name: "
        let namebox=document.createElement("input");
            namebox.type="text"
            namebox.id="fullNameEdit";
            namebox.value="";
        fullnameedit.appendChild(namebox);

        let phoneedit = document.createElement("div");
        phoneedit.innerHTML="Phone Number: "
        let phoneBox = document.createElement("input");
            phoneBox.type="text";
            phoneBox.id="phoneEdit";
            phoneBox.value="";
        phoneedit.appendChild(phoneBox);

        let addressedit = document.createElement("div");
        addressedit.innerHTML="Address: "
        let addressbox = document.createElement("input");
            addressbox.type="text";
            addressbox.id="addressEdit";
            addressbox.value="";
        addressedit.appendChild(addressbox);

    let departmentedit = document.createElement("div");
        departmentedit.innerHTML="Department: "
    let departmentbox = document.createElement("input");
        departmentbox.type="text";
        departmentbox.id="departmentEdit";
        departmentbox.value="";
        departmentedit.appendChild(departmentbox);

    let recordmanage = document.createElement("div");
    let updateButton = document.createElement("input");
        updateButton.type="button";
        updateButton.id="updateButton";
        updateButton.value="Update Record";

        updateButton.onclick=function(){
            if(updateButton.value=="Update Record")
            {
                updaterecord(document.getElementById("recordID").value);
            }
            else
            {
                updateButton.value="Update Record"
            }
        };

        
    let deleteButton = document.createElement("input");
        deleteButton.type="button";
        deleteButton.id="deleteButton";
        deleteButton.value="Delete Record";

        deleteButton.onclick=function(){
            if(deleteButton.value=="Delete Record")
            {
                deleterecord(document.getElementById("recordID").value);
            }
            else
            {
                deleteButton.value="Delete Record"
            }
        };


    recordmanage.appendChild(updateButton);
    recordmanage.appendChild(deleteButton);


    form.appendChild(recordid);
    form.appendChild(ninumedit);
    form.appendChild(fullnameedit);
    form.appendChild(phoneedit);
    form.appendChild(addressedit);
    form.appendChild(departmentedit);
    form.appendChild(recordmanage);

    RecordEditColumn.appendChild(form);
}

function createaddrecordform() //creates add record form - offers buttons to addrecord and cancel records using pushrecord() and createaddrecordform().
{
    form.innerHTML = "";

    let newninum = document.createElement("div");
        newninum.innerHTML = "NI Number: ";
        let nibox = document.createElement("input");
            nibox.type="text";
            nibox.id="newNiNumber";
            nibox.value="";
        newninum.appendChild(nibox);
    
    let newfullname = document.createElement("div");
        newfullname.innerHTML="Full Name: "
        let namebox=document.createElement("input");
            namebox.type="text"
            namebox.id="newFullName";
            namebox.value="";
        newfullname.appendChild(namebox);

        let newphone = document.createElement("div");
        newphone.innerHTML="Phone Number: "
        let phoneBox = document.createElement("input");
            phoneBox.type="text";
            phoneBox.id="newPhone";
            phoneBox.value="";
        newphone.appendChild(phoneBox);

        let newaddress = document.createElement("div");
        newaddress.innerHTML="Address: "
        let addressbox = document.createElement("input");
            addressbox.type="text";
            addressbox.id="newAddress";
            addressbox.value="";
        newaddress.appendChild(addressbox);

    let newdepartment = document.createElement("div");
        newdepartment.innerHTML="Please select the Person's Department:"
    
    
    
        let ItDept = document.createElement("div");
            ItDept.innerHTML="IT: "
            let ITDeptBox=document.createElement("input");
                ITDeptBox.type="radio";
                ITDeptBox.name="newdepartment";
                ITDeptBox.value="IT";
            ItDept.appendChild(ITDeptBox);

        let HRDept = document.createElement("div");
            HRDept.innerHTML="HR: "
            let HRDeptBox=document.createElement("input");
                HRDeptBox.type="radio";
                HRDeptBox.name="newdepartment";
                HRDeptBox.value="HR";
            HRDept.appendChild(HRDeptBox);

        let SalesDept = document.createElement("div");
            SalesDept.innerHTML="Sales: "
            let SalesDeptBox=document.createElement("input");
                SalesDeptBox.type="radio";
                SalesDeptBox.name="newdepartment";
                SalesDeptBox.value="Sales";
            SalesDept.appendChild(SalesDeptBox);

        newdepartment.appendChild(ItDept);
        newdepartment.appendChild(HRDept);
        newdepartment.appendChild(SalesDept);


/*
        Please select the Person's Department: <br>
        IT - <input type=radio value=IT name=newdepartment> <br>
        Sales - <input type=radio value=Sales name=newdepartment> <br>
        HR - <input type=radio value=HR name=newdepartment> <br>
*/
    
    let addRecordManage = document.createElement("div");
    let addRecordButton = document.createElement("input");
        addRecordButton.type="button";
        addRecordButton.id="addRecordButton";
        addRecordButton.value="Add Record";

        addRecordButton.onclick=function(){
            if(addRecordButton.value=="Add Record")
            {
                pushrecord();
            }
            else
            {
                addRecordButton.value="Add Record"
            }
        };

        
    let cancelAddButton = document.createElement("input");
        cancelAddButton.type="button";
        cancelAddButton.id="cancelAddButton";
        cancelAddButton.value="Cancel";

        cancelAddButton.onclick=function(){
            if(deleteButton.value=="Cancel")
            {
                createaddrecordform();
            }
            else
            {
                deleteButton.value="Cancel"
            }
        };


    addRecordManage.appendChild(addRecordButton);
    addRecordManage.appendChild(cancelAddButton);


    form.appendChild(newninum);
    form.appendChild(newfullname);
    form.appendChild(newphone);
    form.appendChild(newaddress);
    form.appendChild(newdepartment);
    form.appendChild(addRecordManage);

    RecordEditColumn.appendChild(form);
}

function pushrecord() //pushes completed addrecordform record into file. Runs showrecords() at runtime.
{
    QArecords.push(
        {
            "ninumber":document.getElementById("newNiNumber").value,
            "fullname":document.getElementById("newFullName").value,
            "phone":document.getElementById("newPhone").value,
            "address":document.getElementById("newAddress").value,
            "department":document.querySelector('input[name="newdepartment"]:checked').value
        }
    )
    form.innerHTML="";
    showrecords();
}






