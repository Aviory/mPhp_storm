/**
 * Created by user on 22.03.2016.
 */
var socket = new WebSocket("ws://ff.php");

socket.onopen = function() {
    alert("Соединение установлено.");
};

socket.onclose = function(event) {
    if (event.wasClean) {
        alert('Соединение закрыто чисто');
    } else {
        alert('Обрыв соединения'); // например, "убит" процесс сервера
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
    alert("Получены данные " + event.data);
};

socket.onerror = function(error) {
    alert("Ошибка " + error.message);
};