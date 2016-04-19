/**
 * Created by user on 15.04.2016.
 */

function qpost(){
    var query = "";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/git/Jul/DAL/dataBase.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    var data = "cl";
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                data = xhr.responseText; // Выводим ответ сервера
                document.getElementById("edits").innerText = xhr.responseText;
                var mjson = JSON.stringify(data);
                var reclist = JSON.parse(mjson);
                for(var i = 0; i < reclist.length; i++)
                {
                    var row = rowRecipeAndFillData(reclist[i]);
                    document.getElementById("main").appendChild(row);
                }
            }
        }
    };

}

