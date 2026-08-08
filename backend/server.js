// =============================================
// YatraKhoj Simple Backend
// No Express
// No npm packages required
// =============================================

const http = require("http");

const PORT = 5000;


// =============================================
// Send JSON response
// =============================================

function sendJSON(res, statusCode, data) {

    res.writeHead(statusCode, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    });

    res.end(
        JSON.stringify(data)
    );
}


// =============================================
// Create Server
// =============================================

const server = http.createServer(
    async function(req, res) {

        // Allow browser CORS request
        if (req.method === "OPTIONS") {

            res.writeHead(204, {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            });

            return res.end();
        }


        const url = new URL(
            req.url,
            "http://localhost:" + PORT
        );


        console.log(
            req.method,
            url.pathname
        );


        // =============================================
        // HOME
        // =============================================

        if (
            req.method === "GET" &&
            url.pathname === "/"
        ) {

            return sendJSON(
                res,
                200,
                {
                    success: true,
                    message: "YatraKhoj backend is working!"
                }
            );
        }


        // =============================================
        // TEST
        // =============================================

        if (
            req.method === "GET" &&
            url.pathname === "/api/test"
        ) {

            return sendJSON(
                res,
                200,
                {
                    success: true,
                    message: "API connection successful"
                }
            );
        }


        // =============================================
        // CURRENCY
        // =============================================

        if (
            req.method === "GET" &&
            url.pathname === "/api/currency"
        ) {

            try {

                const from =
                    (
                        url.searchParams.get("from")
                        || "USD"
                    ).toUpperCase();


                const to =
                    (
                        url.searchParams.get("to")
                        || "NPR"
                    ).toUpperCase();


                const amount =
                    Number(
                        url.searchParams.get("amount")
                        || 1
                    );


                if (
                    isNaN(amount) ||
                    amount < 0
                ) {

                    return sendJSON(
                        res,
                        400,
                        {
                            success: false,
                            message: "Invalid amount"
                        }
                    );
                }


                const apiURL =
                    "https://open.er-api.com/v6/latest/"
                    + from;


                const response =
                    await fetch(apiURL);


                const data =
                    await response.json();


                if (
                    data.result !== "success"
                ) {

                    return sendJSON(
                        res,
                        400,
                        {
                            success: false,
                            message: "Currency API error"
                        }
                    );
                }


                const rate =
                    data.rates[to];


                if (!rate) {

                    return sendJSON(
                        res,
                        400,
                        {
                            success: false,
                            message: "Currency not supported"
                        }
                    );
                }


                const convertedAmount =
                    amount * rate;


                return sendJSON(
                    res,
                    200,
                    {
                        success: true,

                        from: from,

                        to: to,

                        amount: amount,

                        rate: rate,

                        convertedAmount:
                            Number(
                                convertedAmount.toFixed(2)
                            )
                    }
                );


            } catch(error) {

                console.log(
                    "Currency error:",
                    error
                );


                return sendJSON(
                    res,
                    500,
                    {
                        success: false,
                        message: "Currency service failed"
                    }
                );
            }
        }


        // =============================================
        // WEATHER
        // =============================================

        if (
            req.method === "GET" &&
            url.pathname === "/api/weather"
        ) {

            try {

                const place =
                    url.searchParams.get("place");


                if (!place) {

                    return sendJSON(
                        res,
                        400,
                        {
                            success: false,
                            message: "Please provide a place"
                        }
                    );
                }


                // -------------------------------------
                // Find coordinates
                // -------------------------------------

                const geoURL =
                    "https://geocoding-api.open-meteo.com/v1/search"
                    + "?name="
                    + encodeURIComponent(place)
                    + "&count=1"
                    + "&language=en"
                    + "&format=json";


                const geoResponse =
                    await fetch(geoURL);


                const geoData =
                    await geoResponse.json();


                if (
                    !geoData.results ||
                    geoData.results.length === 0
                ) {

                    return sendJSON(
                        res,
                        404,
                        {
                            success: false,
                            message: "Place not found"
                        }
                    );
                }


                const location =
                    geoData.results[0];


                const latitude =
                    location.latitude;


                const longitude =
                    location.longitude;


                // -------------------------------------
                // Weather
                // -------------------------------------

                const weatherURL =
                    "https://api.open-meteo.com/v1/forecast"
                    + "?latitude="
                    + latitude
                    + "&longitude="
                    + longitude
                    + "&current="
                    + "temperature_2m,"
                    + "relative_humidity_2m,"
                    + "apparent_temperature,"
                    + "precipitation,"
                    + "wind_speed_10m"
                    + "&timezone=auto";


                const weatherResponse =
                    await fetch(weatherURL);


                const weatherData =
                    await weatherResponse.json();


                return sendJSON(
                    res,
                    200,
                    {
                        success: true,

                        place:
                            location.name,

                        country:
                            location.country,

                        latitude:
                            latitude,

                        longitude:
                            longitude,

                        temperature:
                            weatherData
                            .current
                            .temperature_2m,

                        feelsLike:
                            weatherData
                            .current
                            .apparent_temperature,

                        humidity:
                            weatherData
                            .current
                            .relative_humidity_2m,

                        precipitation:
                            weatherData
                            .current
                            .precipitation,

                        windSpeed:
                            weatherData
                            .current
                            .wind_speed_10m
                    }
                );


            } catch(error) {

                console.log(
                    "Weather error:",
                    error
                );


                return sendJSON(
                    res,
                    500,
                    {
                        success: false,
                        message: "Weather service failed"
                    }
                );
            }
        }


        // =============================================
        // TRANSLATION
        // =============================================

        if (
            req.method === "POST" &&
            url.pathname === "/api/translate"
        ) {

            let body = "";


            req.on(
                "data",
                function(chunk) {

                    body += chunk;

                }
            );


            req.on(
                "end",
                async function() {

                    try {

                        const data =
                            JSON.parse(body);


                        const text =
                            data.text;


                        const from =
                            data.from || "en";


                        const to =
                            data.to || "ne";


                        if (!text) {

                            return sendJSON(
                                res,
                                400,
                                {
                                    success: false,
                                    message: "Text is required"
                                }
                            );
                        }


                        const apiURL =
                            "https://api.mymemory.translated.net/get"
                            + "?q="
                            + encodeURIComponent(text)
                            + "&langpair="
                            + encodeURIComponent(
                                from + "|" + to
                            );


                        const response =
                            await fetch(apiURL);


                        const translationData =
                            await response.json();


                        return sendJSON(
                            res,
                            200,
                            {
                                success: true,

                                original:
                                    text,

                                translated:
                                    translationData
                                    .responseData
                                    .translatedText
                            }
                        );


                    } catch(error) {

                        console.log(
                            "Translation error:",
                            error
                        );


                        return sendJSON(
                            res,
                            500,
                            {
                                success: false,
                                message: "Translation failed"
                            }
                        );
                    }

                }
            );


            return;
        }


        // =============================================
        // ROUTE NOT FOUND
        // =============================================

        return sendJSON(
            res,
            404,
            {
                success: false,
                message: "Route not found"
            }
        );

    }
);


// =============================================
// Start Server
// =============================================

server.listen(
    PORT,
    function() {

        console.log("");
        console.log("==============================");
        console.log("YatraKhoj Backend Running");
        console.log("http://localhost:" + PORT);
        console.log("==============================");
        console.log("");

    }
);