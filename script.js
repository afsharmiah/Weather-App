const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "1cc36fe87f08e98af96d9464994504ec",
};

const input = document.querySelector("#inputId");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(
        `${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`
    );
    let result = await res.json();
    displayResult(result);
    console.log(result);
}
// this is displayResult
function displayResult(result) {
    let city = document.querySelector("#city");
    let temprature = document.querySelector("#temp");
    let feels_like = document.querySelector("#f_like");
    let condition = document.querySelector("#condition");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let showDate = document.querySelector("#date");

    city.textContent = `${result.name}`;
    if (result.cod == 404) {
        city.textContent = "Please Enter a valid city";
        temprature.textContent = "";
        feels_like.textContent = "";
        condition.textContent = "";
        humidity.textContent = "";
        wind.textContent = "";
        showDate.textContent = "";
    } else {
        temprature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
        console.log("Temparature is: ", temp);
        feels_like.textContent = "Feels Like: " + `${result.main.feels_like}`;
        condition.textContent = `${result.weather[0].description}`;
        console.log("Condition is: ", condition);
        humidity.textContent = "Humidity: " + `${result.main.humidity}` + "%";
        wind.textContent = "Wind: " + `${Math.round(result.wind.speed)}` + " mph";

        getOutDate();
    }
}

function getOutDate() {
    const now = new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let showDate = document.querySelector("#date");
    showDate.textContent =
        `${day}` + " " + `${date}` + " " + `${month}` + " " + `${year}`;
    console.log(showDate);
}
