/**
 * Created by user on 12.03.2016.
 */
function Person(id, fname, lname, age) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    this.toXML = function () {
        xmlData += "<id>" + id + "</id><fname>" + fname + "</fname><lname>" + lname + "</lname><age>" + age + "</age>";
        return xmlData;
    }
    this.toHTML = function () {
        return $get(Person).innerHTML;
    }
    this.toJSON = function () {
        var testObject = {id: id, fname: fname, lname: lname, age: age};
        return testObject;
    }
}