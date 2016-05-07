/**
 * Created by Кудесник on 07.05.2016.
 */
function deleteRec(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/git/Jul/DAL/deleteRec.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(id);
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                document.getElementById('edits').innerHTML = xhr.responseText; // Выводим ответ сервера
            }
        }
    };
}
function updateRec(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/git/Jul/DAL/updateRec.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(id);
}