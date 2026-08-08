const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


// =====================================================
// TEST BACKEND
// =====================================================

app.get("/api/health", function(req, res) {

    res.json({
        success: true,
        message: "YatraKhoj backend is running"
    });

});


// =====================================================
// WEATHER API
// =====================================================

app.get("/api/weather", async function(req, res) {

    try {

        const place = req.query.place;

        if (!place) {

            return res.status(400).json({
                success: false,
                message: "Please provide a place name."
            });

        }


        // Find latitude and longitude
        const geoUrl =
            "https://geocoding-api.open-meteo.com/v1/search?name=" +
            encodeURIComponent(place) +
            "&count=1&language=en&format=json";


        const geoResponse = await fetch(geoUrl);

        const geoData =
            await geoResponse.json();


        if (
            !geoData.results ||
            geoData.results.length === 0
        ) {

            return res.status(404).json({
                success: false,
                message: "Place not found."
            });

        }


        const location =
            geoData.results[0];


        const latitude =
            location.latitude;

        const longitude =
            location.longitude;


        // Get weather
        const weatherUrl =

            "https://api.open-meteo.com/v1/forecast" +

            "?latitude=" + latitude +

            "&longitude=" + longitude +

            "&current=" +
            "temperature_2m," +
            "apparent_temperature," +
            "relative_humidity_2m," +
            "precipitation," +
            "weather_code," +
            "wind_speed_10m" +

            "&daily=" +
            "weather_code," +
            "temperature_2m_max," +
            "temperature_2m_min," +
            "precipitation_probability_max" +

            "&timezone=auto" +

            "&forecast_days=5";


        const weatherResponse =
            await fetch(weatherUrl);


        const weatherData =
            await weatherResponse.json();


        res.json({

            success: true,

            place: location.name,

            country: location.country,

            latitude: latitude,

            longitude: longitude,

            current:
                weatherData.current,

            currentUnits:
                weatherData.current_units,

            daily:
                weatherData.daily,

            dailyUnits:
                weatherData.daily_units

        });


    } catch(error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message:
                "Could not get weather information."

        });

    }

});


// =====================================================
// CURRENCY API
// =====================================================

app.get("/api/currency", async function(req, res) {

    try {

        const from =
            String(
                req.query.from || "USD"
            ).toUpperCase();


        const to =
            String(
                req.query.to || "NPR"
            ).toUpperCase();


        const amount =
            Number(
                req.query.amount || 1
            );


        const apiUrl =

            "https://open.er-api.com/v6/latest/" +
            from;


        const response =
            await fetch(apiUrl);


        const data =
            await response.json();


        if (data.result !== "success") {

            return res.status(400).json({

                success: false,

                message:
                    "Currency not supported."

            });

        }


        const rate =
            data.rates[to];


        const convertedAmount =
            amount * rate;


        res.json({

            success: true,

            from: from,

            to: to,

            amount: amount,

            rate: rate,

            convertedAmount:
                convertedAmount

        });


    } catch(error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message:
                "Currency conversion failed."

        });

    }

});


// =====================================================
// TRANSLATION API
// =====================================================

app.post("/api/translate", async function(req, res) {

    try {

        const text =
            String(
                req.body.text || ""
            ).trim();


        const from =
            req.body.from || "en";


        const to =
            req.body.to || "ne";


        if (!text) {

            return res.status(400).json({

                success: false,

                message:
                    "Enter text to translate."

            });

        }


        const apiUrl =

            "https://api.mymemory.translated.net/get?q=" +

            encodeURIComponent(text) +

            "&langpair=" +

            encodeURIComponent(
                from + "|" + to
            );


        const response =
            await fetch(apiUrl);


        const data =
            await response.json();


        res.json({

            success: true,

            originalText:
                text,

            translatedText:
                data.responseData.translatedText,

            from: from,

            to: to

        });


    } catch(error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message:
                "Translation failed."

        });

    }

});


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, function() {

    console.log(
        "YatraKhoj backend running at http://localhost:" +
        PORT
    );

});