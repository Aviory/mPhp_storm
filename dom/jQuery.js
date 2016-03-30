/**
 * Created by user on 18.03.2016.
 */
var tmpNode;
function tmpPerson()
{
    tmpNode = document.getElementById("rowTmp");
    tPerson.removeChild(tPerson.rows[0]);
}

function createPerson()
{
    var person = new Object();
    person.id = txtId.value;
    person.fname = txtFname.value;
    person.lname = txtLname.value;
    person.age = txtAge.value;
    return person;
}
function createRowAndFillData(person)
{
    var row = tmpNode.cloneNode(true);

    row.cells[0].children[0].value = person.id;
    row.cells[1].children[0].value = person.fname;
    row.cells[2].children[0].value = person.lname;
    row.cells[3].children[0].value = person.age;
    return row;
}
function createRowAndFillDataInnerHTML(person)
{
    var row = document.createElement("tr");
    row.innerHTML = "<td>"+person.id+"</td>"+"<td>"+person.fname+"</td>"+"<td>"+person.lname+"</td>"+"<td>"+person.age+"</td>";
    return row;
}
function addFirst()
{
    var row = createRowAndFillData(createPerson());
    tPerson.insertBefore(row, tPerson.rows[0]);
}
function delFirst()
{
    tPerson.removeChild(tPerson.rows[0]);
}
function addLast()
{
    var row = createRowAndFillData(createPerson());
    document.getElementById("tPerson").appendChild(row);
}
function delLast()
{
    tPerson.removeChild(tPerson.rows[tPerson.rows.length-1]);
}

function addMidle()
{
    var row = createRowAndFillData(createPerson());
    var index = tPerson.rows.length % 2 == 0 ? tPerson.rows.length/2:tPerson.rows.length/2+1;
    tPerson.insertBefore(row, tPerson.rows[index]);
}
function delMidle()
{
    var index = tPerson.rows.length / 2 -1;
    tPerson.removeChild(tPerson.rows[index]);
}
function toLocalStorageJSON()
{
    var list = new PArray();
    for (var i=0; i<document.getElementById("tPerson").childElementCount;i++)
    {
        var row = document.getElementById("tPerson").children[i];
        var id    = row.cells[0].children[0].value;
        var fname = row.cells[1].children[0].value;
        var lname = row.cells[2].children[0].value;
        var age   = row.cells[3].children[0].value;

        var mPerson = {id : id, fname: fname, lname: lname, age : age };
        localStorage.setItem('personRow'+i, JSON.stringify(mPerson));
    }
}
function toLocalStoragePArra()
{
    var list = new PArray();
    for (var i=0; i<document.getElementById("tPerson").childElementCount;i++)
    {
        var person = new Object();
        var row = document.getElementById("tPerson").children[i];
        person.id    = row.cells[0].children[0].value;
        person.fname = row.cells[1].children[0].value;
        person.lname = row.cells[2].children[0].value;
        person.age   = row.cells[3].children[0].value;

        list.push(person);
    }
    var data = list.tooJSON();
    localStorage.setItem('personListPArrayJSON', data );
}
function fromJSON()
{
    fillClear();
    for (var i=0; i<localStorage.length;i++)
    {
        var data = localStorage.getItem('personRow'+i);
        var retrievedObject = JSON.parse(data);
        var row = createRowAndFillData(retrievedObject);
        tPerson.appendChild(row);
    }
}
function fromJSON_PArray()
{
    fillClear();
    var data = localStorage.getItem('personListPArrayJSON');
    var list = data.frommJSON();
    for (var i=0; i<list.length;i++)
    {
        var row = createRowAndFillData(data[i]);
        document.getElementById("tPerson").appendChild(row);
    }
}
function fillClear()
{
    document.getElementById("tPerson").innerHTML="";
}
function tableToXML()
{
    var xmlData = "<tPerson>";
    for (var i=0; i<document.getElementById("tPerson").childElementCount;i++)
    {
        var row = document.getElementById("tPerson").children[i];
        var id    = row.cells[0].children[0].value;
        var fname = row.cells[1].children[0].value;
        var lname = row.cells[2].children[0].value;
        var age   = row.cells[3].children[0].value;
        xmlData  += "<tr><td>"+id+"</td><td>"+fname+"</td><td>"+lname+"</td><td>"+age+"</td></tr>";
    }
    return xmlData  += "</tPerson>";
}
function toXSLT()
{

}
function DOMToLS ()
{
    localStorage.setItem('bodyHTML', document.getElementById("tPerson").innerHTML);
}
