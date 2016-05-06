/**
 * Created by Кудесник on 25.04.2016.
 */
function queryForCategory(category) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/git/Jul/DAL/categoryForBase.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(category);
    var data = "cl";
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                data = xhr.responseText; // Выводим ответ сервера
                if(data == null){
                    document.getElementById("main").innerHTML = "пусто :(";
                    return;
                }
                var reclist = JSON.parse(data);
                document.getElementById("main").innerHTML = "";
                for(var i = 0; i < reclist.length; i++)
                {
                    var row = rowRecipeAndFillData(reclist[i]);
                    document.getElementById("main").appendChild(row);
                }
                var edit = document.getElementById("edits"); <!-- очистить поле добавления и добавить кнопку -->
                edit.innerHTML = "";

                var newBtnAdd = document.createElement("button");
                newBtnAdd.setAttribute("onclick", "addRecept()");
                newBtnAdd.setAttribute("class", "btnAdd");
                newBtnAdd.innerText = "Добавить рецепт";
                edit.appendChild(newBtnAdd);
            }
        }
    };
}