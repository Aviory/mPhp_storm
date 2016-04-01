/**
 * Created by user on 01.04.2016.
 */
function addRecept(){
    var edit = document.getElementById("edits");
    edit.innerHTML="";

    var h2_Ingridients = document.createElement("h2");
    h2_Ingridients.innerText = "Ingridients";
    edit.appendChild(h2_Ingridients);

    var newTxtIng    = document.createElement('textarea');
    newTxtIng.type   = "text";
    newTxtIng.id     = "newIngridient";
    newTxtIng.rows   = 11;
    newTxtIng.cols   = 35;
    newTxtIng.maxLength = 500;
    edit.appendChild(newTxtIng);

    var h2_Cooking = document.createElement("h2");
    h2_Cooking.innerText = "Cooking";
    edit.appendChild(h2_Cooking);

    var newTxtCook   = document.createElement('textarea');
    newTxtCook.type  = "text";
    newTxtCook.id    = "newIngridient";
    newTxtCook.rows  = 15;
    newTxtCook.cols  = 100;
    newTxtIng.maxLength = 3000;
    edit.appendChild(newTxtCook);

    var newBtnAdd     = document.createElement("button");
    newBtnAdd.onclick = "btnAdd()";
    newBtnAdd.innerText = "Ok";
    edit.appendChild(newBtnAdd);
}
function btnAdd(){
    var main    = document.getElementById("main");

    var section = document.createElement("article");
    main.appendChild(section);
    var h1_name = document.createElement("h1");
    h1_name.innerText = "Header";
    section.appendChild("h1_name");

    var ingridient   = document.createElement("article");
    ingridient.class = "ingridients";
    section.appendChild(ingridient);
    var h2_Ingridients = document.createElement("h2");
    h2_Ingridients.innerText = "Ingridients";
    ingridient.appendChild(h2_Ingridients);
    ingridient.appendChild(add_ul());

    var cooking   = document.createElement("article");
    cooking.class = "Cooking";
    section.appendChild(cooking);
    var h2_Cooking = document.createElement("h2");
    h2_Cooking.innerText = "Cooking";
    cooking.appendChild(h2_Cooking);
    var p = document.createElement("p");
    p.innerText = "text";
    cooking.appendChild(p);

}
function add_ul(){
    var ul = document.createElement("ul");
    for(var i=0;i<2;i++){
        var li = document.createElement("li");
        li.innerText = "ul";
        ul.appendChild(li);
    }
    return ul;
}