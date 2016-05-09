/**
 * Created by user on 18.04.2016.
 */
function rowRecipeAndFillData(rec) {
    var section = document.createElement("article");<!-- внешний артикль всего блока -->

    var headerName = document.createElement("h1");<!-- заголовок рецепта -->
    headerName.innerText = rec.name;
    section.appendChild(headerName);
    
    section.appendChild(addImage(rec));<!-- картинки рецепта -->

    var ingridient = document.createElement("article");<!-- внутринний артикль ингридиентов -->
    ingridient.setAttribute("class", "ingridients");
    section.appendChild(ingridient);

    var h2_Ingridients = document.createElement("h2");<!-- заголовок ингридиентов -->
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

    section.appendChild(addBtnDel(rec));<!-- настройки рецепта -->
    section.appendChild(addBtnUpd(rec));<!-- настройки рецепта -->
    
    return section;
}
function add_ul(rec) {<!-- пробег по ингридиентам -->
    var ul = document.createElement("ul");
    var strIng = rec.ingridients;
    var ar = strIng.split(/[\n\r]+/);

    for (var i = 0; i < ar.length; i++) {
        var li = document.createElement("li");
        li.innerText = ar[i];
        ul.appendChild(li);
    }
    return ul;
}
function addCooking(rec) {<!-- пробег по приготовлению -->
    var p = document.createElement("p");
    p.innerText = rec.cooking;
    return p;
}
function addImage(rec) {<!-- картинка рецепта -->
    var set_img = rec.image.split(/[\n\r]+/);
    var block_image = document.createElement("div");
    block_image.setAttribute('class', 'block_img');
    for (var i = 0; i < set_img.length-1; i++){
        var image = document.createElement("img");
        if(i==0){
            image.setAttribute("src", set_img[i]);
            image.setAttribute("class", "big_img");
            //image.setAttribute('onclick', '');
            block_image.appendChild(image);
        }
        else{
            image.setAttribute("class", "small_img");
            image.setAttribute('onclick', 'image_change(this)');
            image.setAttribute("src", set_img[i]);
            block_image.appendChild(image);
        }
    }
    return block_image;
}
function image_change(element) {<!-- смена картинок -->
    var tmp = element.parentElement.firstElementChild.src;
    element.parentElement.firstElementChild.src = element.src;
    element.src = tmp;
}
function addBtnDel(rec) {<!-- настройки рецепта -->
    var btn = document.createElement("button");
    btn.setAttribute('value', rec.id);
    btn.setAttribute('onclick', 'readyDel(this,this.value)');
    btn.setAttribute('class', 'btn_option');
    btn.innerText = "D";
    return btn;
}
function addBtnUpd(rec) {<!-- настройки рецепта -->
    var btn = document.createElement("button");
    btn.setAttribute('value', rec.id);
    btn.setAttribute('onclick', '');
    btn.setAttribute('class', 'btn_option');
    btn.innerText = "R";
    return btn;
}