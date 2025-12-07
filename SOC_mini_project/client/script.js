let finalData = {};

async function fetchData() {
    const country = document.getElementById("country").value.trim();

    const covidURL = `https://disease.sh/v3/covid-19/countries/${country}`;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=79f28224dcb9ffa73d7761728968543f`;
    const restURL = `https://restcountries.com/v3.1/name/${country}`;

    const covid = await fetch(covidURL).then(r => r.json());
    const weather = await fetch(weatherURL).then(r => r.json());
    const rest = await fetch(restURL).then(r => r.json());

    finalData = {
        country: country,
        covidStats: covid,
        weatherDetails: weather,
        countryMetadata: rest[0]
    };

    document.getElementById("display").textContent = JSON.stringify(finalData, null, 2);
}

async function sendToServer() {
    const token = "USER123TOKEN";
    const apiKey = "APIKEY123456";

    const res = await fetch("http://localhost:5000/api/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "x-api-key": apiKey
        },
        body: JSON.stringify(finalData)
    });

    const out = await res.json();
    alert(JSON.stringify(out));
}
