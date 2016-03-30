/**
 * Created by user on 18.03.2016.
 */
QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});
function Person(id, fname, lname, age)
{
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

test("Добавляем новый элемент div", function () {
    var $fixture = $("#qunit-fixture");
    $fixture.append("&lt;div&gt;Это новый див&lt;/div&gt;");
    equal($("div", $fixture).length, 1, "Новый div успешно добавлен!");
});