/**
 * Created by Кудесник on 25.04.2016.
 */
function queryForCategory(category) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'DAL/categoryForBase.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(category);
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                var data = xhr.responseText; // Выводим ответ сервера
                var reclist = JSON.parse(data);
                document.getElementById("main").innerHTML = "";
                for(var i = 0; i < reclist.length; i++)
                {
                    var row = rowRecipeAndFillData(reclist[i]);
                    document.getElementById("main").appendChild(row);
                }
                var edit = document.getElementById("edits"); <!-- очистить поле добавления и добавить кнопку -->
                edit.innerHTML = "";

                edit.appendChild(btnAddNewRec());

                init();<!-- обновить футер -->
            }
        }
    };
}
function btnAddNewRec() {
    var newBtnAdd = document.createElement("button");
    newBtnAdd.setAttribute("onclick", "addRecept()");
    newBtnAdd.setAttribute("class", "btnAdd");
    newBtnAdd.innerText = "Добавить рецепт";
    return newBtnAdd;
}