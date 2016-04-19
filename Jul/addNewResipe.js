/**
 * Created by user on 18.04.2016.
 */
function rowRecipeAndFillData(rec) {
    var section = document.createElement("article");<!-- внешний артикль всего блока -->

    var headerName = document.createElement("h1");<!-- заголовок рецепта -->
    headerName.innerText = rec.name;
    section.appendChild(headerName);
    <!-- section.appendChild(saveFile()) -->

    var ingridient = document.createElement("article");<!-- внутринний артикль ингридиентов -->
    ingridient.setAttribute("class", "ingridients");
    section.appendChild(ingridient);

    var h2_Ingridients = document.createElement("h2");
    h2_Ingridients.innerText = "Ingridients";
    ingridient.appendChild(h2_Ingridients);
    ingridient.appendChild(add_ul(rec));

    var cooking = document.createElement("article");<!-- внутренний артикль приготовления -->
    cooking.setAttribute("class", "cooking");
    section.appendChild(cooking);
    var h2_Cooking = document.createElement("h2");
    h2_Cooking.innerText = "Cooking";
    cooking.appendChild(h2_Cooking);
    cooking.appendChild(addCooking(rec));

    var edit = document.getElementById("edits"); <!-- очистить поле добавления и добавить кнопку -->
    edit.innerHTML = "";

    var newBtnAdd = document.createElement("button");
    newBtnAdd.setAttribute("onclick", "addRecept()");
    newBtnAdd.innerText = "new recept";
    edit.appendChild(newBtnAdd);
    return section;
}
function add_ul(rec) {<!-- пробег по ингридиентам -->
    var ul = document.createElement("ul");
    var strIng = rec.ingridients;
    ul.innerText = strIng;
    //.val().split(/[\n\r]+/);

    // for (var i = 0; i < strIng.length; i++) {
    //     var li = document.createElement("li");
    //     if (i > 0) {
    //         li.innerText = strIng[i];
    //         ul.appendChild(li);
    //     }
    //     if (i == 0) {<!-- add заголовок рецепта -->
    //         document.getElementById('main').lastElementChild.firstElementChild.innerText = strIng[i];
    //     }
    // }
    return ul;
}

function addCooking(rec) {<!-- пробег по приготовлению -->
    var p = document.createElement("p");
    p.innerText = rec.cooking;
    // var strCooking = $('#newCooking').val().split(/[\n\r]+/);
    // for (var i = 0; i < strCooking.length; i++) {
    //     p.innerHTML += strCooking[i];
    //     p.innerHTML += "<br/>";
    // }
    return p;
}