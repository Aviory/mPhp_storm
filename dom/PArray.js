/**
 * Created by user on 14.03.2016.
 */
function PArray()
{
    this.tooXML = function () {
        xmlData += "<id>" + id + "</id><fname>" + fname + "</fname><lname>" + lname + "</lname><age>" + age + "</age>";
        return xmlData;
    }
    this.tooHTML = function () {
        return document.getElementsByName("Person").innerHTML;
    }
    this.tooJSON = function () {
        var data = JSON.stringify(this);
        return data;
    }
    this.frommJSON = function () {
        var data   = JSON.parse(this);
        return data;
    }
}
PArray.prototype = Object.create(Array.prototype);
