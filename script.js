const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus"),
  morningImgUrl = "url('img/morning.jpg')",
  afternoonImgUrl = "url('img/afternoon.jpg')",
  eveningImgUrl = "url('img/evening.jpg')",
  nightImgUrl = "url('img/night.jpg')";

//Показ времени и даты
function displayTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    day = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();

  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
  date.innerHTML = `${day}:${month}:${year}`;

  setTimeout(displayTime, 1000);
}
displayTime();

//добавление нуля к минутам и секундам
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//добавление заднего фона и приветствия
function addBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = morningImgUrl;
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = afternoonImgUrl;
    greeting.textContent = "Good Afternoon";
  } else if (hour < 23) {
    document.body.style.backgroundImage = eveningImgUrl;
    greeting.textContent = "Good Evening";
  } else {
    document.body.style.backgroundImage = nightImgUrl;
    greeting.textContent = "Good Night";
  }
}
addBgGreet();

// добавление имени
function getName() {
  const nameLS = localStorage.getItem("name");
  name.textContent = nameLS ? nameLS : "[Enter Name]";
}

getName();

function setName(e) {
  if (e.type === "keypress") {
    if (e.which === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//добавление фокуса
function getFocus() {
  const focusLS = localStorage.getItem("focus");
  focus.textContent = focusLS ? focusLS : "[Enter Focus]";
}
getFocus();

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
