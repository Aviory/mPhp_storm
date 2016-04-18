/**
 * Created by user on 15.04.2016.
 */
function qpost(){
    var query = "";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/git/Jul/DAL/dataBase.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    var responce = "clear";
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                document.getElementById("edits").innerHTML = xhr.responseText; // Выводим ответ сервера
                localStorage.setItem("tPerson", xhr.responseText);
            }
        }
    };
    //var data = JSON.parse(responce);
    for(var i = 0; i < responce.length; i++)
    {
         var row = rowRecipeAndFillData(responce[i]);
        var row = document.createElement("article");
        row.innerText = responce;
        document.getElementById("main").appendChild(row);
    }
}
