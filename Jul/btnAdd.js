/**
 * Created by user on 01.04.2016.
 */
 var qpost{
	 var query;
	 var con = new XMLHttprequest();
	 con.open('GET', 'dao.php?'+query, false);
	 con.send();
 }

var newRecept
{
    function addRecept() {<!-- форма для добавления нового рецепта -->
        var edit = document.getElementById("edits");
        edit.innerHTML = "";

        var h2_Ingridients = document.createElement("h2"); <!-- создание заголовок ингридиенты -->
        h2_Ingridients.innerText = "Ingridients";
        edit.appendChild(h2_Ingridients);

        edit.appendChild(fileLoad());<!--add картинка -->

        var newTxtIng = document.createElement('textarea'); <!-- создание нгридиенты блок -->
        newTxtIng.setAttribute("id", "newIngridient");
        newTxtIng.rows = 11;
        newTxtIng.cols = 35;
        newTxtIng.maxLength = 500;
        edit.appendChild(newTxtIng);

        var h2_Cooking = document.createElement("h2");
        <!-- создание риготовление заголовок -->
        h2_Cooking.innerText = "Cooking";
        edit.appendChild(h2_Cooking);

        var newTxtCook = document.createElement('textarea');
        <!-- создание приготовление блок -->
        newTxtCook.setAttribute("id", "newCooking");
        newTxtCook.rows = 15;
        newTxtCook.cols = 100;
        newTxtIng.maxLength = 3000;
        edit.appendChild(newTxtCook);

        var newBtnAdd = document.createElement("button");
        <!-- кнопка добавления -->
        newBtnAdd.setAttribute("onclick", "btnAdd()");
        newBtnAdd.innerText = "Ok";
        edit.appendChild(newBtnAdd);
    }

    function btnAdd() {<!-- кнопка добавить новый рецепт -->
        var main = document.getElementById("main");

        var section = document.createElement("article");
        <!-- внешний артикль всего блока -->
        main.appendChild(section);

        var headerName = document.createElement("h1");
        <!-- заголовок рецепта -->
        headerName.innerText = "Header name rec";
        section.appendChild(headerName);
        <!-- section.appendChild(saveFile()) -->

        var ingridient = document.createElement("article");
        <!-- внутринний артикль ингридиентов -->
        ingridient.setAttribute("class", "ingridients");
        section.appendChild(ingridient);
        var h2_Ingridients = document.createElement("h2");
        h2_Ingridients.innerText = "Ingridients";
        ingridient.appendChild(h2_Ingridients);
        ingridient.appendChild(add_ul());

        var cooking = document.createElement("article");
        <!-- внутренний артикль приготовления -->
        cooking.setAttribute("class", "cooking");
        section.appendChild(cooking);
        var h2_Cooking = document.createElement("h2");
        h2_Cooking.innerText = "Cooking";
        cooking.appendChild(h2_Cooking);
        cooking.appendChild(addCooking());

        var edit = document.getElementById("edits"); <!-- очистить поле добавления и добавить кнопку -->
        edit.innerHTML = "";

        var newBtnAdd = document.createElement("button");
        newBtnAdd.setAttribute("onclick", "addRecept()");
        newBtnAdd.innerText = "new recept";
        edit.appendChild(newBtnAdd);
    }

    function add_ul() {<!-- пробег по ингридиентам -->
        var ul = document.createElement("ul");
        var strIng = $('#newIngridient').val().split(/[\n\r]+/);

        for (var i = 0; i < strIng.length; i++) {
            var li = document.createElement("li");
            if (i > 0) {
                li.innerText = strIng[i];
                ul.appendChild(li);
            }
            if (i == 0) {<!-- add заголовок рецепта -->
                document.getElementById('main').lastElementChild.firstElementChild.innerText = strIng[i];
            }
        }
        return ul;
    }

    function addCooking() {<!-- пробег по приготовлению -->
        var p = document.createElement("p");
        var strCooking = $('#newCooking').val().split(/[\n\r]+/);
        for (var i = 0; i < strCooking.length; i++) {
            p.innerHTML += strCooking[i];
            p.innerHTML += "<br/>";
        }
        return p;
    }
    function fileLoad(){
        var img = document.createElement('input');
        img.setAttribute('type', 'file');
        img.setAttribute('accept', 'image/*');
        img.setAttribute('id', randomID());
        return img;
    }
    function saveFile(){
        var image_ID = $('main').last().slice(1,2);
        var img = document.createElement('img');
        img.setAttribute('class','eatimg');
        img.setAttribute('src', 'id');
    }
    function randomID(){
        return Math.floor((Math.random()*1000000)+1);
    }
}
