/**
 * Created by user on 01.04.2016.
 */
var newRecept
{
    function addRecept() {<!-- форма для добавления нового рецепта -->
        var edit = document.getElementById("edits");
        edit.innerHTML = "";

        var form = document.createElement('form');
        form.setAttribute('enctype', 'multipart/form-data');
        form.setAttribute('method', 'post');
        form.setAttribute('action', 'DAL/insert.php');
        edit.appendChild(form);

        var h2_Ingridients = document.createElement("h2"); <!-- создание заголовока имени -->
        h2_Ingridients.innerText = "Name";
        form.appendChild(h2_Ingridients);

        var txtname = document.createElement('textarea');<!-- создание имени рецепта -->
        txtname.setAttribute('name', 'recname');
        txtname.rows = 2;
        txtname.cols = 35;
        form.appendChild(txtname);
        form.innerHTML +="<br>";

        form.appendChild(categorySelect()); <!-- создание категорий и подкатегорий -->

        var h2_Ingridients = document.createElement("h2"); <!-- создание заголовок ингридиенты -->
        h2_Ingridients.innerText = "Ingridients";
        form.appendChild(h2_Ingridients);

        form.appendChild(fileLoad());<!--add картинка -->

        var newTxtIng = document.createElement('textarea'); <!-- создание нгридиенты блок -->
        newTxtIng.setAttribute("name", "ingridients");
        newTxtIng.rows = 11;
        newTxtIng.cols = 35;
        newTxtIng.maxLength = 500;
        form.appendChild(newTxtIng);

        var h2_Cooking = document.createElement("h2");<!-- создание риготовление заголовок -->
        h2_Cooking.innerText = "Cooking";
        form.appendChild(h2_Cooking);

        var newTxtCook = document.createElement('textarea');
        <!-- создание приготовление блок -->
        newTxtCook.setAttribute("name", "cookings");
        newTxtCook.rows = 15;
        newTxtCook.cols = 100;
        newTxtIng.maxLength = 3000;
        form.appendChild(newTxtCook);

        var btn = document.createElement('input');
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', 'загрузить');
        btn.setAttribute('class', 'btnAdd');
        form.appendChild(btn);
    }

    function categorySelect() {
        var select = document.createElement('select');
        select.setAttribute('size', '5');
        select.setAttribute('name', 'categoryes');
        select.setAttribute('onchange', 'podcategorySelect(this.options[this.selectedIndex].value)');
        var drop_menu = document.getElementById("leftNav").firstElementChild;
        for (var i=0;i<drop_menu.childElementCount;i++){
            var str_category = drop_menu.children[i].firstElementChild.innerText;
            select.appendChild(addOption(str_category));
        }
        return select;
    }

    function podcategorySelect(category) {
        if(!document.getElementById('podcategory')){
            var select = document.createElement('select');
            select.setAttribute('size', '5');
            select.setAttribute('name', 'podcategoryes');
            select.setAttribute('id', 'podcategory');
        }
        else {
            var select = document.getElementById('podcategory');
            select.innerHTML = "";
        }

        var drop_menu = document.getElementById("leftNav").firstElementChild;
        for (var i=0;i<drop_menu.childElementCount;i++){
            var str_category = drop_menu.children[i].firstElementChild.innerText;
            if(category==str_category){
                list_menu = drop_menu.children[i].lastElementChild;
                for (var j=0;j<list_menu.childElementCount;j++){
                    var str_podcategory = list_menu.children[j].firstElementChild.innerText;
                    select.appendChild(addOption(str_podcategory));
                }
            }
        }
        var form = document.getElementById("edits").firstElementChild;
        form.insertBefore(select, form.children[4] );
    }
    function addOption(opt_name) {
        var option = document.createElement('option');
        option.setAttribute('value', opt_name);
        option.innerText = opt_name;
        return option;
    }
    function fileLoad(){
        var img = document.createElement('input');
        img.setAttribute('class', 'add_img');
        img.setAttribute('name', 'images[]');
        img.setAttribute('type', 'file');
        img.setAttribute('accept', 'image/*');
        img.setAttribute('multiple', '');
        return img;
    }

    // function SendData() {<!-- кнопка добавить новый рецепт -->
    //     var data = "images=";
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", '/git/Jul/DAL/dataBase.php', true);
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.send();
    //     xhr.onreadystatechange = function() { // Ждём ответа от сервера
    //         if (xhr.readyState == 4) { // Ответ пришёл
    //             if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
    //                 var edit = document.getElementById("edits");
    //                 edit.innerHTML = xhr.responseText;
    //
    //             }
    //         }
    //     };
    //     <!-- section.appendChild(saveFile()) -->
    // }
    // function add_ul() {<!-- пробег по ингридиентам -->
    //     var ul = document.createElement("ul");
    //     var strIng = $('#newIngridient').val().split(/[\n\r]+/);
    //
    //     for (var i = 0; i < strIng.length; i++) {
    //         var li = document.createElement("li");
    //         if (i > 0) {
    //             li.innerText = strIng[i];
    //             ul.appendChild(li);
    //         }
    //         if (i == 0) {<!-- add заголовок рецепта -->
    //             document.getElementById('main').lastElementChild.firstElementChild.innerText = strIng[i];
    //         }
    //     }
    //     return ul;
    // }
    //
    // function addCooking() {<!-- пробег по приготовлению -->
    //     var p = document.createElement("p");
    //     var strCooking = $('#newCooking').val().split(/[\n\r]+/);
    //     for (var i = 0; i < strCooking.length; i++) {
    //         p.innerHTML += strCooking[i];
    //         p.innerHTML += "<br/>";
    //     }
    //     return p;
    // }
    
    // function saveFile(){
    //     var image_ID = $('main').last().slice(1,2);
    //     var img = document.createElement('img');
    //     img.setAttribute('class','eatimg');
    //     img.setAttribute('src', 'id');
    // }
    // function randomID(){
    //     return Math.floor((Math.random()*1000000)+1);
    // }
}
