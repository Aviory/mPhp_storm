function beginSearch() {
    var data = document.getElementById('searchable').value;
    if (data == ""){
        return;
    }
    var query = "from_query="+data+"&from_category="+"&from_podcategory="+"&from_name="+"&from_ingridient=";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'DAL/dataSearch.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(query);
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                var main = document.getElementById("main").innerHTML = "";
                var reclist = JSON.parse(xhr.responseText);
                for(var i = 0; i < reclist.length; i++)
                {
                    var row = rowRecipeAndFillData(reclist[i]);
                    main.appendChild(row);
                }
            }
        }
    };
}
function initSeqrchAtribute() {
    var form = document.getElementById('searchform');
    form.appendChild(fromCategorySelect());
    form.appendChild(fromObjectSelect());
}
function fromCategorySelect() {
    var select = document.createElement('select');
    select.setAttribute('size', '1');
    select.setAttribute('id', 'categoryes');
    select.setAttribute('class', 'from_search');
    select.setAttribute('onchange', 'fromPodcategorySelect(this.options[this.selectedIndex].value)');
    var drop_menu = document.getElementById("leftNav").firstElementChild;
    for (var i=0;i<drop_menu.childElementCount;i++){
        var str_category = drop_menu.children[i].firstElementChild.innerText;
        select.appendChild(addOption(str_category));
    }
    return select;
}
function fromPodcategorySelect(category) {
    if (!document.getElementById('podcategory')) {
        var select = document.createElement('select');
        select.setAttribute('size', '1');
        select.setAttribute('name', 'podcategoryes');
        select.setAttribute('id', 'podcategory');
        select.setAttribute('class', 'from_search');
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
    var form = document.getElementById('searchform');
    form.insertBefore(select, form.children[3] );
}
function fromObjectSelect(){
    var select = document.createElement('select');
    select.setAttribute('size', '1');
    select.setAttribute('name', 'ObjectSelect');
    select.setAttribute('class', 'from_search');
    select.setAttribute('onchange', '');

    var from_name = document.createElement('option');
    from_name.setAttribute('value', 'from_name');
    from_name.setAttribute('selected', '');
    from_name.innerText = "Названия";
    select.appendChild(from_name);

    var from_ingridient = document.createElement('option');
    from_ingridient.setAttribute('value', 'from_ingridient');
    from_ingridient.innerText = "Ингридиенты";
    select.appendChild(from_ingridient);
    return select;
}