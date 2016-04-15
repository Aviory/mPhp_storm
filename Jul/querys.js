/**
 * Created by user on 15.04.2016.
 */
function qpost(){
    var query = "";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/git/Jul/DAL/dataBase.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                document.getElementById("edits").innerHTML = xhr.responseText; // Выводим ответ сервера
            }
        }
    };
}
