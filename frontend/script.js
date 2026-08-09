/* =========================================================
   IMAGE FUNCTION

   These use specific Wikimedia Commons place images
   instead of random Unsplash destination photos.
========================================================= */

function image(fileName) {

    return (
        "https://commons.wikimedia.org/wiki/Special:FilePath/" +
        encodeURIComponent(fileName)
    );

}



/* =========================================================
   DESTINATIONS
========================================================= */

const destinations = {


    /* =====================================================
       TEHRATHUM
    ===================================================== */

    tehrathum: {

        name: "Tehrathum",

        category:
            "Eastern Hills",

        best:
            "🌿 Nature & Hidden Gems",

        interests: [
            "nature",
            "hidden",
            "trekking",
            "relaxation"
        ],

        coords: {
            lat: 27.14,
            lng: 87.46
        },

        minDays: 2,

        budget: {
            transport: 800,
            lodging: 1500,
            food: 600,
            activities: 200
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Nov, Mar–May",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "medium",
            weather: "medium",
            road: "high",
            network: "medium",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 800–1,200",
                    duration: "10–12 hr"
                },
                {
                    type: "Shared Jeep",
                    fare: "Rs 1,500–2,500",
                    duration: "8–10 hr"
                }
            ],

            note: "Check road conditions before leaving, especially during monsoon."

        },

        image:
            image("Basantapur Bazaar Terathum.jpg"),

        description:
            "Quiet eastern hills, rhododendron country, local settlements and scenic mountain journeys.",

        intro:
            "Tehrathum is ideal for travelers looking for peaceful hills, rhododendron landscapes and a less crowded eastern Nepal experience.",


        important: {

            season:
                "March–May and October–November",

            route:
                "Itahari → Dhankuta side → Basantapur → Tehrathum",

            style:
                "Road journey + short walks",

            carry:
                "Rain jacket, water, warm layer and cash"

        },


        places: [

            {
                name:
                    "Tinjure Milke",

                type:
                    "Popular",

                image:
                    image("Tinjure Milke on the way to Terhathum.jpg"),

                text:
                    "A beautiful eastern Nepal ridge known for rhododendron forests and mountain scenery."
            },


            {
                name:
                    "Basantapur",

                type:
                    "Popular",

                image:
                    image("Basantapur Bazaar Terathum.jpg"),

                text:
                    "A peaceful hill settlement and gateway for exploring the surrounding Tehrathum region."
            },


            {
                name:
                    "Tehrathum Hill Landscapes",

                type:
                    "Underrated",

                image:
                    image("Beautiful landscape of Tehrathum.jpg"),

                text:
                    "Quiet countryside, village roads and hill views for travelers wanting fewer crowds."
            }

        ],


        hotels: [

            {
                name:
                    "Local Guesthouse",

                price:
                    "Rs. 1,000–1,800",

                text:
                    "Simple accommodation around local market areas."
            },


            {
                name:
                    "Hill Lodge",

                price:
                    "Rs. 1,500–2,500",

                text:
                    "Suitable for road trips and short hill stays."
            },


            {
                name:
                    "Local Homestay",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "A more local experience where homestays are available."
            }

        ],


        guide: {

            travel:
                "Road travel from Itahari is the practical option. Check road conditions before leaving, especially during monsoon.",

            time:
                "Spring is attractive for rhododendrons while autumn normally provides clearer views.",

            food:
                "Try local dal bhat, seasonal vegetables, tea and food served in hill settlements.",

            local:
                "Travel slowly and spend time in villages and viewpoints instead of treating Tehrathum as only a quick road stop."

        },


        safety: {

            altitude:
                "Most tourist areas are moderate hill elevations, but higher ridges can become cold. Carry an extra warm layer.",

            weather:
                "Fog and rain can quickly reduce visibility in hill areas.",

            road:
                "Roads may become muddy, slippery or affected by landslides during heavy rain.",

            network:
                "Mobile signal is usually better in settlements and weaker in forests or remote areas.",

            health:
                "Carry personal medicine and a small first-aid kit because advanced healthcare may require travel.",

            precautions:
                "Travel during daylight where possible, carry drinking water and avoid unfamiliar isolated trails after dark."

        }

    },



    /* =====================================================
       TAPLEJUNG
    ===================================================== */

    taplejung: {

        name:
            "Taplejung",

        category:
            "Himalayan Eastern Nepal",

        best:
            "🥾 Trekking & Culture",

        interests: [
            "trekking",
            "culture",
            "nature",
            "adventure"
        ],

        coords: {
            lat: 27.35,
            lng: 87.67
        },

        minDays: 4,

        budget: {
            transport: 1200,
            lodging: 2000,
            food: 800,
            activities: 400
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Nov, Apr–May",

        difficulty: "challenging",

        hiddenAlt: "Kanchenjunga Base Camp",

        fairCosts: {
            guidePerDay: 4500,
            porterPerDay: 2800,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "high",
            network: "high",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 1,200–1,800",
                    duration: "12–14 hr"
                },
                {
                    type: "Shared Jeep",
                    fare: "Rs 2,000–3,500",
                    duration: "10–12 hr"
                }
            ],

            note: "Remote sections may require local jeeps and walking."

        },

        image:
            image("Pathibhara taplejung.jpg"),

        description:
            "Pathibhara, Kanchenjunga landscapes and remote eastern Himalayan culture.",

        intro:
            "Taplejung is ideal for travelers looking for pilgrimage routes, mountain scenery and a serious eastern Himalayan journey.",


        important: {

            season:
                "March–May and October–November",

            route:
                "Itahari → eastern hills → Taplejung / Phungling",

            style:
                "Long road journey + mountain walking",

            carry:
                "Warm layers, rain protection, water and medicine"

        },


        places: [

            {
                name:
                    "Pathibhara Devi Temple",

                type:
                    "Popular",

                image:
                    image("Pathibhara Devi Temple, Taplejung.jpg"),

                text:
                    "One of eastern Nepal's best-known pilgrimage destinations located high in the mountains."
            },


            {
                name:
                    "Kanchenjunga Region",

                type:
                    "Popular",

                image:
                    image("Kanchnjunga.jpg"),

                text:
                    "A major Himalayan region surrounding the world's third-highest mountain."
            },


            {
                name:
                    "Taplejung Hill Country",

                type:
                    "Underrated",

                image:
                    image("Taplejung hill.jpg"),

                text:
                    "The district's villages and hill landscapes offer rewarding experiences away from major trekking routes."
            }

        ],


        hotels: [

            {
                name:
                    "Town Guesthouse",

                price:
                    "Rs. 1,200–2,500",

                text:
                    "Practical accommodation around Taplejung's main settlement."
            },


            {
                name:
                    "Mountain Lodge",

                price:
                    "Rs. 1,500–3,000",

                text:
                    "Simple lodge accommodation for mountain routes."
            },


            {
                name:
                    "Comfort Hotel",

                price:
                    "Rs. 2,500–4,500",

                text:
                    "Higher-comfort rooms where available in town."
            }

        ],


        guide: {

            travel:
                "Expect a long mountain road journey from Itahari. Remote sections may require local jeeps and walking.",

            time:
                "Spring and autumn normally provide more stable mountain conditions.",

            food:
                "Mountain areas commonly offer dal bhat, noodles, tea and basic Nepali meals.",

            local:
                "Do not treat Pathibhara like a normal city attraction. Prepare properly for elevation and changing weather."

        },


        safety: {

            altitude:
                "Pathibhara is around 3,794 metres. Watch carefully for headache, nausea, dizziness or unusual tiredness.",

            weather:
                "High-altitude weather can change suddenly. Always carry warm clothes and rain protection.",

            road:
                "Mountain roads may become rough or be affected by rainfall and landslides.",

            network:
                "Mobile signal can become weak or unavailable on remote mountain trails.",

            health:
                "Carry medicine and a first-aid kit. Serious emergencies in remote areas may require evacuation.",

            precautions:
                "Tell someone your route, carry enough water and cash, and use local guidance for unfamiliar remote sections."

        }

    },



    /* =====================================================
       ILAM
    ===================================================== */

    ilam: {

        name:
            "Ilam",

        category:
            "Tea Hills",

        best:
            "🌿 Nature & Relaxation",

        interests: [
            "nature",
            "relaxation",
            "food",
            "hidden"
        ],

        coords: {
            lat: 26.91,
            lng: 87.93
        },

        minDays: 2,

        budget: {
            transport: 600,
            lodging: 1500,
            food: 600,
            activities: 300
        },

        crowdLevel: "low",

        bestSeason:
            "Mar–May, Oct–Nov",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "medium",
            weather: "medium",
            road: "medium",
            network: "medium",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 600–900",
                    duration: "6–8 hr"
                },
                {
                    type: "Taxi / Private",
                    fare: "Rs 3,500–5,000",
                    duration: "4–5 hr"
                }
            ],

            note: "One of the easiest scenic hill destinations to reach by road."

        },

        image:
            image("Kanyam Tea Garden, Illam.jpg"),

        description:
            "Tea gardens, cool hills, sunrise viewpoints and a peaceful eastern Nepal escape.",

        intro:
            "Ilam is one of the easiest scenic hill destinations to reach from Itahari and is excellent for shorter relaxing trips.",


        important: {

            season:
                "October–April",

            route:
                "Itahari → Birtamod → Kanyam → Ilam",

            style:
                "Road trip + viewpoints",

            carry:
                "Light jacket, umbrella and walking shoes"

        },


        places: [

            {
                name:
                    "Kanyam Tea Garden",

                type:
                    "Popular",

                image:
                    image("Kanyam Tea Garden, Illam.jpg"),

                text:
                    "One of eastern Nepal's most recognisable tea garden destinations."
            },


            {
                name:
                    "Ilam Tea Landscapes",

                type:
                    "Popular",

                image:
                    image("Tea garden at ilam nepal.jpg"),

                text:
                    "Green rolling plantations that give Ilam its distinctive landscape."
            },


            {
                name:
                    "Mai Pokhari",

                type:
                    "Underrated",

                image:
                    image("Maipokhari ilam.jpg"),

                text:
                    "A peaceful wetland and religious destination surrounded by forest."
            }

        ],


        hotels: [

            {
                name:
                    "Budget Lodge",

                price:
                    "Rs. 1,000–1,800",

                text:
                    "Suitable for short tea-hill trips."
            },


            {
                name:
                    "Town Hotel",

                price:
                    "Rs. 1,800–3,500",

                text:
                    "Comfortable accommodation around larger settlements."
            },


            {
                name:
                    "Tea Homestay",

                price:
                    "Rs. 1,200–2,500",

                text:
                    "A local-style stay where available."
            }

        ],


        guide: {

            travel:
                "Ilam is relatively easy to reach from Itahari by road.",

            time:
                "Autumn and spring are excellent for tea gardens, sunrise views and photography.",

            food:
                "Try local tea, churpi and eastern Nepali foods.",

            local:
                "Kanyam is popular, but Mai Pokhari and smaller tea areas offer quieter experiences."

        },


        safety: {

            altitude:
                "Most attractions are at moderate hill elevation but mornings and evenings can become cool.",

            weather:
                "Fog and rainfall can significantly reduce road visibility.",

            road:
                "Hill roads can become slippery after rain, especially around bends.",

            network:
                "Mobile coverage is generally available around towns and main tourist areas.",

            health:
                "Basic healthcare services are available in Ilam and nearby settlements.",

            precautions:
                "Wear shoes with good grip around wet tea gardens and use extra care when travelling in fog."

        }

    },



    /* =====================================================
       POKHARA
    ===================================================== */

    pokhara: {

        name:
            "Pokhara",

        category:
            "Lake & Adventure City",

        best:
            "🌊 Lakes & Adventure",

        interests: [
            "lakes",
            "adventure",
            "nature",
            "relaxation",
            "food"
        ],

        coords: {
            lat: 28.21,
            lng: 83.99
        },

        minDays: 3,

        budget: {
            transport: 1500,
            lodging: 3000,
            food: 1000,
            activities: 1500
        },

        crowdLevel: "high",

        bestSeason:
            "Oct–Nov, Mar–Apr",

        difficulty: "easy",

        hiddenAlt: "Begnas & Rupa Lake",

        fairCosts: {
            guidePerDay: 4000,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "medium",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,500–2,500",
                    duration: "12–14 hr"
                },
                {
                    type: "Domestic Flight",
                    fare: "Rs 8,000+",
                    duration: "45 min"
                },
                {
                    type: "Night Bus",
                    fare: "Rs 2,000–3,000",
                    duration: "overnight"
                }
            ],

            note: "Reachable by road and domestic flight; the drive is long, so allow breaks."

        },

        image:
            image("Pokhara, Phewa Lake, Nepal.jpg"),

        description:
            "Phewa Lake, Himalayan views, adventure activities and one of Nepal's strongest tourism scenes.",

        intro:
            "Pokhara combines relaxation, lakes, mountain scenery and adventure in one of Nepal's most accessible tourist cities.",


        important: {

            season:
                "October–November and March–April",

            route:
                "Itahari → highway journey west → Pokhara",

            style:
                "City stay + day trips",

            carry:
                "Light layers, rain protection and sun protection"

        },


        places: [

            {
                name:
                    "Phewa Lake",

                type:
                    "Popular",

                image:
                    image("Pokhara, Phewa Lake, Nepal.jpg"),

                text:
                    "Pokhara's iconic lakefront destination known for boating and Himalayan views."
            },


            {
                name:
                    "Sarangkot",

                type:
                    "Popular",

                image:
                    image("Sarangkot, Nepal-WLV-1715.jpg"),

                text:
                    "A famous hill viewpoint known for sunrise views and adventure activities."
            },


            {
                name:
                    "Begnas Lake",

                type:
                    "Underrated",

                image:
                    image("Begnas Lake 2018 12.jpg"),

                text:
                    "A quieter lake alternative for travelers who want less crowd than central Lakeside."
            }

        ],


        hotels: [

            {
                name:
                    "Budget Hostel",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "Affordable accommodation commonly found around Lakeside."
            },


            {
                name:
                    "Mid-range Hotel",

                price:
                    "Rs. 2,500–5,000",

                text:
                    "Comfortable hotel with more facilities."
            },


            {
                name:
                    "Lake-view Resort",

                price:
                    "Rs. 5,000+",

                text:
                    "Higher-end accommodation around Pokhara."
            }

        ],


        guide: {

            travel:
                "Pokhara is reachable by road and domestic flight. The drive from Itahari is long, so allow enough breaks.",

            time:
                "Autumn and spring normally provide clearer Himalayan views.",

            food:
                "Lakeside has Nepali and international food, while smaller local restaurants may offer better value.",

            local:
                "Combine famous Lakeside with quieter locations such as Begnas Lake."

        },


        safety: {

            altitude:
                "Pokhara is relatively low altitude, so altitude sickness is normally not a city-level concern.",

            weather:
                "Heavy monsoon rain can affect roads, flights and outdoor activities.",

            road:
                "Roads toward viewpoints can be steep and narrow.",

            network:
                "Mobile networks and internet are generally strong throughout main tourist areas.",

            health:
                "Pokhara has hospitals, clinics and pharmacies with relatively easy access.",

            precautions:
                "Use registered operators for paragliding, rafting and trekking activities."

        }

    },



    /* =====================================================
       LUMBINI
    ===================================================== */

    lumbini: {

        name:
            "Lumbini",

        category:
            "Buddhist Heritage",

        best:
            "🏯 Culture & History",

        interests: [
            "culture",
            "relaxation"
        ],

        coords: {
            lat: 27.47,
            lng: 83.28
        },

        minDays: 2,

        budget: {
            transport: 1500,
            lodging: 2500,
            food: 800,
            activities: 300
        },

        crowdLevel: "medium",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "Kapilvastu & Tilaurakot",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "high",
            road: "low",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,500–2,200",
                    duration: "12–14 hr"
                },
                {
                    type: "Flight to Bhairahawa",
                    fare: "Rs 9,000+",
                    duration: "1 hr + short drive"
                }
            ],

            note: "The heritage area requires considerable walking, so visit in cooler months."

        },

        image:
            image("Maya Devi Temple - Lumbini.jpg"),

        description:
            "Sacred Buddhist heritage, Maya Devi Temple, monasteries and peaceful cultural spaces.",

        intro:
            "Lumbini is one of Nepal's most important spiritual and historical destinations and deserves more than a short photo stop.",


        important: {

            season:
                "November–February",

            route:
                "Itahari → Terai highway west → Lumbini",

            style:
                "Heritage sightseeing + walking",

            carry:
                "Water, sun protection and respectful clothing"

        },


        places: [

            {
                name:
                    "Maya Devi Temple",

                type:
                    "Popular",

                image:
                    image("Maya Devi Temple - Lumbini.jpg"),

                text:
                    "The central sacred site traditionally associated with the birthplace of Gautama Buddha."
            },


            {
                name:
                    "World Peace Pagoda",

                type:
                    "Popular",

                image:
                    image("The World Peace Pagoda - Lumbini.jpg"),

                text:
                    "A major Buddhist peace monument within the wider Lumbini heritage landscape."
            },


            {
                name:
                    "Monastic Zone",

                type:
                    "Underrated",

                image:
                    image("Monastery in Lumbini.jpg"),

                text:
                    "International monasteries and quieter spiritual spaces beyond the main Maya Devi complex."
            }

        ],


        hotels: [

            {
                name:
                    "Pilgrim Guesthouse",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "Simple accommodation for short heritage visits."
            },


            {
                name:
                    "Mid-range Hotel",

                price:
                    "Rs. 2,000–4,000",

                text:
                    "Comfortable rooms around Lumbini and Bhairahawa."
            },


            {
                name:
                    "Resort Stay",

                price:
                    "Rs. 4,000+",

                text:
                    "Higher-comfort accommodation for longer visits."
            }

        ],


        guide: {

            travel:
                "Lumbini is easier to reach by road than remote mountain destinations.",

            time:
                "Cooler months are more comfortable because the heritage area requires considerable walking.",

            food:
                "Nepali and Indian meals are widely available around Lumbini and Bhairahawa.",

            local:
                "Spend time exploring the monastery zone instead of only visiting Maya Devi Temple."

        },


        safety: {

            altitude:
                "Lumbini is in Nepal's lowland Terai, so altitude sickness is not a concern.",

            weather:
                "Summer temperatures can become extremely hot.",

            road:
                "Road access is easier than mountain destinations but major highways can still be busy.",

            network:
                "Mobile and internet coverage is generally reliable.",

            health:
                "Hospitals, clinics and pharmacies are available around Lumbini and Bhairahawa.",

            precautions:
                "Stay hydrated, use sun protection and respect rules inside religious sites."

        }

    },



    /* =====================================================
       CHITWAN
    ===================================================== */

    chitwan: {

        name:
            "Chitwan",

        category:
            "Wildlife & Jungle",

        best:
            "🦏 Wildlife & Nature",

        interests: [
            "nature",
            "adventure"
        ],

        coords: {
            lat: 27.57,
            lng: 84.49
        },

        minDays: 2,

        budget: {
            transport: 1200,
            lodging: 3000,
            food: 1000,
            activities: 2000
        },

        crowdLevel: "high",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "Bardia National Park",

        fairCosts: {
            guidePerDay: 4000,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "high",
            road: "low",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,200–1,800",
                    duration: "10–12 hr"
                },
                {
                    type: "Private Car",
                    fare: "Rs 8,000–12,000",
                    duration: "8–9 hr"
                }
            ],

            note: "Major highways connect Chitwan with eastern and central Nepal."

        },

        image:
            image("Chitwan National Park.jpg"),

        description:
            "National park wildlife, Rapti River, wetlands and Tharu cultural experiences.",

        intro:
            "Chitwan offers a completely different Nepal experience built around wildlife, forests, wetlands and local Tharu culture.",


        important: {

            season:
                "October–March",

            route:
                "Itahari → East-West Highway → Chitwan",

            style:
                "Road trip + guided wildlife activity",

            carry:
                "Water, sun protection and insect repellent"

        },


        places: [

            {
                name:
                    "Chitwan National Park",

                type:
                    "Popular",

                image:
                    image("Rhino's in Chitwan National Park.jpg"),

                text:
                    "One of Nepal's most famous wildlife destinations and an important rhino habitat."
            },


            {
                name:
                    "Rapti River",

                type:
                    "Popular",

                image:
                    image("Rapti River, Sauraha, Chitwan.jpg"),

                text:
                    "An important part of Sauraha's scenery and wildlife tourism experience."
            },


            {
                name:
                    "Bishazari Tal",

                type:
                    "Underrated",

                image:
                    image("Beeshazari Taal 01.jpg"),

                text:
                    "A quieter wetland destination for nature and bird enthusiasts."
            }

        ],


        hotels: [

            {
                name:
                    "Budget Lodge",

                price:
                    "Rs. 1,200–2,200",

                text:
                    "Simple accommodation around Sauraha."
            },


            {
                name:
                    "Jungle Hotel",

                price:
                    "Rs. 2,500–5,000",

                text:
                    "Mid-range stay suitable for park visitors."
            },


            {
                name:
                    "Wildlife Resort",

                price:
                    "Rs. 5,000+",

                text:
                    "Higher-comfort accommodation for wildlife-focused trips."
            }

        ],


        guide: {

            travel:
                "Major highways connect Chitwan with eastern and central Nepal.",

            time:
                "Cooler months are more comfortable for jungle activities.",

            food:
                "Try local Tharu dishes as well as common Nepali meals.",

            local:
                "Combine national park activities with genuine Tharu cultural experiences."

        },


        safety: {

            altitude:
                "Chitwan is low altitude, so altitude sickness is not normally relevant.",

            weather:
                "The Terai can become extremely hot and humid.",

            road:
                "Highway journeys can involve traffic, dust and delays.",

            network:
                "Mobile coverage is generally good around Sauraha and larger settlements.",

            health:
                "Bharatpur has significant medical facilities.",

            precautions:
                "Never approach wildlife independently. Always follow park rules and authorised guides."

        }

    },



    /* =====================================================
       KATHMANDU
    ===================================================== */

    kathmandu: {

        name:
            "Kathmandu",

        category:
            "Heritage Capital",

        best:
            "🏯 Culture & Food",

        interests: [
            "culture",
            "food",
            "adventure"
        ],

        coords: {
            lat: 27.72,
            lng: 85.32
        },

        minDays: 3,

        budget: {
            transport: 1200,
            lodging: 2500,
            food: 1200,
            activities: 800
        },

        crowdLevel: "high",

        bestSeason:
            "Oct–Nov, Mar–Apr",

        difficulty: "easy",

        hiddenAlt: "Patan & Bhaktapur",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "high",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,200–2,000",
                    duration: "12–14 hr"
                },
                {
                    type: "Domestic Flight",
                    fare: "Rs 6,000+",
                    duration: "1 hr"
                }
            ],

            note: "Traffic is the biggest planning issue inside Kathmandu."

        },

        image:
            image("Kathmandu Durbar Square, Nepal.JPG"),

        description:
            "Historic squares, temples, Newari culture, markets and Nepal's largest urban travel hub.",

        intro:
            "Kathmandu combines centuries of heritage with a busy modern city and offers far more than just Thamel.",


        important: {

            season:
                "October–April",

            route:
                "Itahari → road or domestic flight connection",

            style:
                "Urban heritage + food exploration",

            carry:
                "Comfortable shoes, secure bag and dust mask"

        },


        places: [

            {
                name:
                    "Kathmandu Durbar Square",

                type:
                    "Popular",

                image:
                    image("Kathmandu Durbar Square, Temples, Nepal.jpg"),

                text:
                    "One of Kathmandu's major heritage areas with historic temples and palace architecture."
            },


            {
                name:
                    "Swayambhunath",

                type:
                    "Popular",

                image:
                    image("Swayambhunath temple Kathmandu Nepal.jpg"),

                text:
                    "A famous hilltop Buddhist complex overlooking Kathmandu Valley."
            },


            {
                name:
                    "Kirtipur",

                type:
                    "Underrated",

                image:
                    image("Kirtipur, Nepal (23636789091).jpg"),

                text:
                    "A historic Newari settlement providing a quieter cultural experience."
            }

        ],


        hotels: [

            {
                name:
                    "Budget Hostel",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "Common around major tourism neighbourhoods."
            },


            {
                name:
                    "Mid-range City Hotel",

                price:
                    "Rs. 2,500–5,000",

                text:
                    "Comfortable accommodation with broader facilities."
            },


            {
                name:
                    "Boutique Hotel",

                price:
                    "Rs. 5,000+",

                text:
                    "Higher-end accommodation around the valley."
            }

        ],


        guide: {

            travel:
                "Traffic is the biggest planning issue inside Kathmandu. Group nearby attractions together.",

            time:
                "Autumn and spring are comfortable for walking and sightseeing.",

            food:
                "Try momo, Newari cuisine, dal bhat and smaller local restaurants.",

            local:
                "Go beyond Thamel and explore places such as Kirtipur and older neighbourhoods."

        },


        safety: {

            altitude:
                "Kathmandu sits around 1,400 metres and normally causes no serious altitude problems.",

            weather:
                "Monsoon rain can cause traffic disruption and waterlogging.",

            road:
                "Traffic can be chaotic. Be careful when crossing roads.",

            network:
                "Mobile and internet coverage is widely available.",

            health:
                "Kathmandu has Nepal's largest range of hospitals and specialist clinics.",

            precautions:
                "Keep phones and wallets secure in crowded areas."

        }

    },



    /* =====================================================
       MUSTANG
    ===================================================== */

    mustang: {

        name:
            "Mustang",

        category:
            "High Himalayan Desert",

        best:
            "🏔 Adventure & Culture",

        interests: [
            "adventure",
            "culture",
            "trekking",
            "hidden"
        ],

        coords: {
            lat: 28.78,
            lng: 83.72
        },

        minDays: 5,

        budget: {
            transport: 2000,
            lodging: 2500,
            food: 1000,
            activities: 500
        },

        crowdLevel: "medium",

        bestSeason:
            "Mar–May, Sep–Nov",

        difficulty: "challenging",

        hiddenAlt: "Nar-Phu Valley",

        fairCosts: {
            guidePerDay: 4500,
            porterPerDay: 2800,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "high",
            network: "high",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Road via Pokhara–Jomsom",
                    fare: "Rs 3,000–5,000",
                    duration: "multi-day drive"
                },
                {
                    type: "Flight to Jomsom",
                    fare: "Rs 9,000+",
                    duration: "25 min + jeep"
                }
            ],

            note: "Flights can be delayed or cancelled because of weather."

        },

        image:
            image("Mustang,Nepal.jpg"),

        description:
            "High-altitude desert scenery, traditional villages, Muktinath and dramatic Himalayan roads.",

        intro:
            "Mustang is visually unlike most of Nepal, but its altitude, wind and difficult roads require much more preparation.",


        important: {

            season:
                "March–May and September–November",

            route:
                "Itahari → Pokhara → Jomsom → Mustang",

            style:
                "Long journey + high-altitude road trip",

            carry:
                "Warm clothes, water, medicine and sun protection"

        },


        places: [

            {
                name:
                    "Muktinath",

                type:
                    "Popular",

                image:
                    image("Muktinath-Temple, Mustang, Nepal.jpg"),

                text:
                    "A major sacred destination surrounded by high-altitude Himalayan terrain."
            },


            {
                name:
                    "Marpha Village",

                type:
                    "Popular",

                image:
                    image("Marpha Village, Mustang, Nepal.jpg"),

                text:
                    "A traditional Mustang village known for stone architecture and apples."
            },


            {
                name:
                    "Mustang Landscapes",

                type:
                    "Underrated",

                image:
                    image("Mustang Nepal.jpg"),

                text:
                    "The road itself reveals dramatic dry valleys and high Himalayan landscapes."
            }

        ],


        hotels: [

            {
                name:
                    "Basic Trekking Lodge",

                price:
                    "Rs. 1,500–2,500",

                text:
                    "Simple rooms along common mountain routes."
            },


            {
                name:
                    "Village Guesthouse",

                price:
                    "Rs. 2,000–3,500",

                text:
                    "Comfortable local accommodation."
            },


            {
                name:
                    "Comfort Lodge",

                price:
                    "Rs. 3,500+",

                text:
                    "Higher-comfort accommodation around larger settlements."
            }

        ],


        guide: {

            travel:
                "Most Mustang journeys travel through Pokhara and Jomsom.",

            time:
                "Spring and autumn usually provide more stable travel conditions.",

            food:
                "Try thukpa, momo, local lodge meals and Mustang apple products.",

            local:
                "Allow extra time. Rushing makes altitude adjustment more difficult."

        },


        safety: {

            altitude:
                "Many Mustang destinations exceed 2,500–3,500 metres. Altitude sickness is a genuine risk.",

            weather:
                "Strong winds and sudden temperature changes are common.",

            road:
                "Roads can be rough and flights may be delayed or cancelled because of weather.",

            network:
                "Mobile signal can disappear on remote sections.",

            health:
                "Serious medical emergencies may require evacuation from mountain areas.",

            precautions:
                "Ascend gradually, stay hydrated and react immediately to serious altitude symptoms."

        }

    }
    
    

};



/* =========================================================
   UNDERRATED NEPAL

   Off-the-beaten-path destinations to redistribute travel
   away from overcrowded classic routes (anti-overtourism).
========================================================= */

const underratedRegions = [

    {
        key: "bardia",
        name: "Bardia National Park",
        region: "Far West",
        crowdLevel: "low",
        difficulty: "easy",
        bestSeason: "Oct–Mar",
        description: "Nepal's wildest national park — Bengal tigers, wild elephants and empty trails. The uncrowded answer to Chitwan.",
        replace: "Chitwan"
    },

    {
        key: "langtang",
        name: "Langtang Valley",
        region: "Central Himalaya",
        crowdLevel: "low",
        difficulty: "moderate",
        bestSeason: "Mar–May, Sep–Nov",
        description: "A short, stunning Himalayan valley an hour from Kathmandu with glacier views and quiet teahouse trails.",
        replace: "Everest Base Camp"
    },

    {
        key: "kanchenjunga",
        name: "Kanchenjunga Region",
        region: "Far East",
        crowdLevel: "low",
        difficulty: "challenging",
        bestSeason: "Mar–May, Oct–Nov",
        description: "Nepal's wildest and most remote trek around the world's third-highest peak. Permit-restricted and unforgettable.",
        replace: "Annapurna Circuit"
    },

    {
        key: "karnali",
        name: "Karnali River & Jumla",
        region: "Karnali",
        crowdLevel: "low",
        difficulty: "moderate",
        bestSeason: "Oct–Nov, Feb–Apr",
        description: "Nepal's least-visited province — whitewater rafting, apple orchards and a genuinely undiscovered culture.",
        replace: "Mustang"
    },

    {
        key: "begnas",
        name: "Begnas & Rupa Lake",
        region: "Pokhara Valley",
        crowdLevel: "low",
        difficulty: "easy",
        bestSeason: "Oct–Apr",
        description: "Peaceful lakes 20 minutes from Lakeside Pokhara. Sunrise paddles, terraced villages and almost no tourists.",
        replace: "Pokhara Lakeside"
    },

    {
        key: "kapilvastu",
        name: "Kapilvastu & Tilaurakot",
        region: "Western Terai",
        crowdLevel: "low",
        difficulty: "easy",
        bestSeason: "Oct–Mar",
        description: "The archaeological heartland of Buddha's early life — quiet ruins and village life near the Indian border.",
        replace: "Lumbini"
    }

];



/* =========================================================
   ACCOMMODATION PHOTOS

   These are intentionally generic hotel/lodge photos because
   we are not pretending these accommodation categories are
   specific real hotels.
========================================================= */

const hotelImages = [

    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80"

];



/* =========================================================
   STARTING POINTS
========================================================= */

const startingPoints = {

    Itahari:    { lat: 26.66, lng: 87.27 },
    Biratnagar: { lat: 26.45, lng: 87.27 },
    Dharan:     { lat: 26.82, lng: 87.28 },
    Birtamod:   { lat: 26.63, lng: 87.98 },
    Kathmandu:  { lat: 27.72, lng: 85.32 },
    Pokhara:    { lat: 28.21, lng: 83.99 },
    Birgunj:    { lat: 27.00, lng: 84.87 },
    Bhairahawa: { lat: 27.51, lng: 83.45 }

};



/* =========================================================
   NATIONAL EMERGENCY NUMBERS
========================================================= */

const nationalEmergency = [
    {
        label: "Police",
        number: "100",
        icon: "👮"
    },
    {
        label: "Ambulance",
        number: "102",
        icon: "🚑"
    },
    {
        label: "Fire Brigade",
        number: "101",
        icon: "🚒"
    },
    {
        label: "Tourist Police",
        number: "1144",
        icon: "🛡"
    }
];



/* =========================================================
   INTEREST LABELS
========================================================= */

const interestLabels = {
    trekking:   "🥾 Trekking",
    lakes:      "🌊 Lakes",
    nature:     "🌿 Nature",
    culture:    "🏯 Culture",
    food:       "🍜 Food",
    adventure:  "🪂 Adventure",
    hidden:     "💎 Hidden Gems",
    relaxation: "🌄 Relaxation"
};



/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageName, button) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });



    document
        .getElementById(pageName)
        .classList.add("active");



    const buttons =
        document.querySelectorAll(".nav-btn");


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });



    if (button) {

        button.classList.add("active");

    }



    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    document.body.classList.remove(
        "sidebar-open"
    );

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    if (menuBtn) {

        menuBtn.textContent = "☰";

    }


    if (pageName === "home") {

        applyPrefsToTripFinder();

    } else if (pageName === "discover") {

        renderUnderrated();

    } else if (pageName === "safety") {

        loadSafetyPage();

        loadReports();

        setTimeout(function() {

            if (reportMap) {

                reportMap.invalidateSize();

            }

        }, 150);

    } else if (pageName === "insights") {

        loadTrends();

    }

}



/* =========================================================
   INTERESTS
========================================================= */

function toggleInterest(button) {

    button.classList.toggle(
        "selected"
    );

}



/* =========================================================
   CURRENT DESTINATION
========================================================= */

let currentDestination = "";

let lastTripPlan = null;



/* =========================================================
   FIND MY TRIP

   Scoring engine:
   - interests match (60%)
   - budget fit (30%)
   - duration fit (10%)
========================================================= */

function getSelectedInterests() {

    const selected = [];

    document
        .querySelectorAll(
            ".interest.selected"
        )
        .forEach(function(btn) {

            selected.push(
                btn.getAttribute(
                    "data-interest"
                )
            );

        });

    return selected;

}



function parseDuration(durationText) {

    const match =
        String(
            durationText
        ).match(/\d+/);

    return match
        ? Number(match[0])
        : 3;

}



function scoreDestination(key, plan) {

    const place =
        destinations[key];


    let interestScore = 0.5;

    if (plan.interests.length > 0) {

        let matched = 0;

        plan.interests.forEach(
            function(interest) {

                if (
                    place.interests.indexOf(
                        interest
                    ) !== -1
                ) {

                    matched += 1;

                }

            }
        );

        interestScore =
            matched / plan.interests.length;

    }


    const perDay =
        (place.budget.transport / plan.days)
        + place.budget.lodging
        + place.budget.food
        + place.budget.activities;


    let budgetScore = 0.7;

    if (plan.budget > 0) {

        budgetScore =
            Math.min(
                1,
                plan.budget / perDay
            );

    }


    const durationScore =
        plan.days >= place.minDays
        ? 1
        : plan.days / place.minDays;


    const difficultyOrder = [
        "easy",
        "moderate",
        "challenging"
    ];

    let difficultyScore = 1;

    if (
        plan.difficulty &&
        plan.difficulty !== "any"
    ) {

        const target =
            difficultyOrder.indexOf(
                plan.difficulty
            );

        const actual =
            difficultyOrder.indexOf(
                place.difficulty || "easy"
            );

        if (actual !== -1) {

            const gap = Math.abs(
                target - actual
            );

            difficultyScore =
                gap === 0
                ? 1
                : (gap === 1 ? 0.75 : 0.5);

        }

    }


    let crowdScore = 1;

    if (plan.avoidCrowd) {

        if (place.crowdLevel === "low") {

            crowdScore = 1;

        } else if (
            place.crowdLevel === "medium"
        ) {

            crowdScore = 0.85;

        } else {

            crowdScore = 0.6;

        }

    }


    let tripTypeScore = 1;

    if (
        plan.travelerType &&
        plan.travelerType !== "any"
    ) {

        if (plan.travelerType === "women") {

            tripTypeScore =
                (
                    place.crowdLevel === "low" &&
                    place.difficulty === "easy"
                )
                ? 1
                : 0.8;

        } else if (
            plan.travelerType === "family"
        ) {

            tripTypeScore =
                place.difficulty === "easy"
                ? 1
                : 0.7;

        } else if (
            plan.travelerType === "solo"
        ) {

            tripTypeScore =
                place.crowdLevel === "low"
                ? 1
                : 0.85;

        }

    }


    const total =
        (interestScore * 0.55)
        + (budgetScore * 0.2)
        + (durationScore * 0.1)
        + (difficultyScore * 0.08)
        + (crowdScore * 0.05)
        + (tripTypeScore * 0.02);


    return {
        key: key,
        place: place,
        score: total,
        budgetScore: budgetScore,
        perDay: perDay,
        difficultyScore: difficultyScore,
        crowdScore: crowdScore,
        tripTypeScore: tripTypeScore
    };

}



function findTrip() {

    const interests =
        getSelectedInterests();

    const durationText =
        document
        .getElementById("duration")
        .value;

    const days =
        parseDuration(durationText);

    const starting =
        document
        .getElementById("starting")
        .value;

    const budget =
        Number(
            document
            .getElementById("budget")
            .value || 0
        );

    const difficulty =
        document
        .getElementById("difficulty")
        .value;

    const travelerType =
        document
        .getElementById("travelerType")
        .value;

    const avoidCrowd =
        document
        .getElementById("avoidCrowd")
        .checked;


    const plan = {
        interests: interests,
        days: days,
        starting: starting,
        budget: budget,
        difficulty: difficulty,
        travelerType: travelerType,
        avoidCrowd: avoidCrowd
    };

    lastTripPlan = plan;


    const scored =
        Object
        .keys(destinations)
        .map(
            function(key) {

                return scoreDestination(
                    key,
                    plan
                );

            }
        )
        .sort(
            function(a, b) {

                return b.score - a.score;

            }
        );


    renderResults(
        scored,
        plan
    );


    document
        .getElementById("searchResult")
        .classList
        .remove("hidden");


    document
        .getElementById("destinationDetails")
        .classList
        .add("hidden");


    document
        .getElementById("searchResult")
        .scrollIntoView({
            behavior: "smooth"
        });


    saveTrip(
        plan,
        scored[0].key
    );


    updateShareUrl(
        plan,
        scored[0].key
    );

}



/* =========================================================
   RENDER RANKED RESULTS
========================================================= */

function difficultyLabel(d) {

    const dict = {

        easy: {
            en: "Easy",
            ne: "सजिलो"
        },

        moderate: {
            en: "Moderate",
            ne: "मध्यम"
        },

        challenging: {
            en: "Challenging",
            ne: "कठिन"
        }

    };

    const entry =
        dict[d] || dict.easy;

    return entry[currentLang] ||
        entry.en;

}


function crowdLabel(c) {

    const dict = {

        low: {
            en: "Low crowd",
            ne: "भीड कम"
        },

        medium: {
            en: "Moderate crowd",
            ne: "सामान्य भीड"
        },

        high: {
            en: "Busy",
            ne: "भीडभाड"
        }

    };

    const entry =
        dict[c] || dict.medium;

    return entry[currentLang] ||
        entry.en;

}


function travelerTypeLabel(t) {

    const dict = {

        solo: {
            en: "Solo",
            ne: "एक्लै"
        },

        couple: {
            en: "Couple",
            ne: "जोडी"
        },

        family: {
            en: "Family",
            ne: "परिवार"
        },

        women: {
            en: "Women",
            ne: "महिला"
        },

        friends: {
            en: "Friends",
            ne: "साथीहरू"
        }

    };

    const entry =
        dict[t] || { en: "", ne: "" };

    return entry[currentLang] ||
        entry.en;

}

function renderResults(results, plan) {

    const container =
        document.getElementById(
            "resultsList"
        );


    container.innerHTML = "";


    results.forEach(
        function(item, index) {

            const reasons = [];

            if (plan.interests.length > 0) {

                const matched =
                    plan.interests.filter(
                        function(interest) {

                            return item.place
                                .interests
                                .indexOf(interest) !== -1;

                        }
                    );

                if (matched.length > 0) {

                    reasons.push(
                        matched
                        .map(
                            function(interest) {

                                return interestLabels[interest];

                            }
                        )
                        .join(" · ")
                    );

                }

            } else {

                reasons.push(
                    "🗺 All destinations considered"
                );

            }


            if (plan.budget > 0) {

                reasons.push(
                    item.budgetScore >= 1
                    ? "✅ Within budget"
                    : "💸 Slightly above budget"
                );

            }


            if (plan.days < item.place.minDays) {

                reasons.push(
                    "🕐 Best with " +
                    item.place.minDays +
                    "+ days"
                );

            }


            if (plan.avoidCrowd) {

                if (item.place.crowdLevel === "low") {

                    reasons.push(
                        "🧘 Quieter destination"
                    );

                } else if (
                    item.place.hiddenAlt
                ) {

                    reasons.push(
                        "🔄 Try instead: " +
                        item.place.hiddenAlt
                    );

                }

            }


            if (
                plan.travelerType &&
                plan.travelerType !== "any"
            ) {

                reasons.push(
                    "🧳 Great for " +
                    travelerTypeLabel(
                        plan.travelerType
                    )
                );

            }


            container.innerHTML += `

                <div class="result-card">

                    <img
                        src="${item.place.image}"
                        alt="${item.place.name}"
                        loading="lazy"
                        onerror="imgFallback(this)"
                    >

                    <div class="result-card-body">

                        <div class="result-card-top">

                            <div>

                                <span class="destination-badge">
                                    ${item.place.category}
                                </span>

                                ${
                                    index === 0
                                    ? '<span class="best-match-badge">★ Best Match</span>'
                                    : ""
                                }

                                <h3>
                                    ${item.place.name}
                                </h3>

                                <p>
                                    ${item.place.description}
                                </p>

                            </div>


                            <div class="result-score">

                                <strong>
                                    ${Math.round(item.score * 100)}%
                                </strong>

                                <small>
                                    MATCH
                                </small>

                            </div>

                        </div>


                        <div class="destination-tags">

                            <span>
                                📍 From ${plan.starting}
                            </span>

                            <span>
                                🕐 ${plan.days} Day${plan.days > 1 ? "s" : ""}
                            </span>

                            <span>
                                ${item.place.best}
                            </span>

                            <span class="chip chip-${item.place.difficulty}">
                                ${difficultyLabel(item.place.difficulty)}
                            </span>

                            <span class="crowd-badge crowd-${item.place.crowdLevel}">
                                ${crowdLabel(item.place.crowdLevel)}
                            </span>

                            ${
                                plan.budget > 0
                                ? `<span>💰 ~${formatCost(item.perDay)}/day</span>`
                                : ""
                            }

                        </div>


                        <div class="match-reasons">
                            ${reasons.map(function(reason) {
                                return `<span>${reason}</span>`;
                            }).join("")}
                        </div>


                        <button
                            class="open-btn"
                            onclick="openDestination('${item.key}')"
                        >
                            View Full Details →
                        </button>

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================================
   OPEN DESTINATION

   Renders the full details panel for a destination.
========================================================= */

function openDestination(key) {

    currentDestination = key;

    const place =
        destinations[key];


    document
        .getElementById("detailsName")
        .textContent =
        place.name +
        " Travel Information";


    document
        .getElementById("detailsIntro")
        .textContent =
        place.intro;


    renderImportantInfo(
        place
    );

    renderWeather(
        place
    );

    renderTransport(
        place
    );

    renderItinerary(
        place
    );

    renderMap(
        place
    );

    renderSafety(
        place,
        "homeSafety"
    );

    renderHireFair(
        place
    );

    renderPlaces(
        place.places,
        "homePlaces"
    );

    renderHotels(
        place.hotels,
        "homeHotels"
    );

    renderPacking(
        place
    );

    renderEmergency(
        place
    );


    document
        .getElementById("destinationDetails")
        .classList
        .remove("hidden");


    document
        .getElementById("destinationDetails")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================================
   IMPORTANT INFORMATION
========================================================= */

function renderImportantInfo(place) {

    document
        .getElementById(
            "importantInfo"
        )
        .innerHTML = `

        <div class="info-card">

            <span>
                ☀️
            </span>

            <small>
                BEST TIME
            </small>

            <strong>
                ${place.important.season}
            </strong>

        </div>



        <div class="info-card">

            <span>
                🚙
            </span>

            <small>
                ROUTE FROM ITAHARI
            </small>

            <strong>
                ${place.important.route}
            </strong>

        </div>



        <div class="info-card">

            <span>
                🧭
            </span>

            <small>
                TRAVEL STYLE
            </small>

            <strong>
                ${place.important.style}
            </strong>

        </div>



        <div class="info-card">

            <span>
                🎒
            </span>

            <small>
                WHAT TO CARRY
            </small>

            <strong>
                ${place.important.carry}
            </strong>

        </div>

    `;

}



/* =========================================================
   SAFETY
========================================================= */

function statusLevel(level) {

    if (level === "low") {
        return { class: "level-low", label: "Low Risk" };
    }

    if (level === "high") {
        return { class: "level-high", label: "High Risk" };
    }

    return { class: "level-medium", label: "Moderate" };

}


function renderSafety(
    place,
    containerName
) {

    const safety =
        place.safety;

    const levels =
        place.safetyLevels;

    const items = [
        {
            icon: "🏔",
            title: "Altitude",
            text: safety.altitude,
            key: "altitude"
        },
        {
            icon: "🌦",
            title: "Weather",
            text: safety.weather,
            key: "weather"
        },
        {
            icon: "🚙",
            title: "Road & Transport",
            text: safety.road,
            key: "road"
        },
        {
            icon: "📶",
            title: "Mobile Network",
            text: safety.network,
            key: "network"
        },
        {
            icon: "🏥",
            title: "Healthcare",
            text: safety.health,
            key: "health"
        },
        {
            icon: "⚠️",
            title: "Important Precautions",
            text: safety.precautions,
            key: "precautions"
        }
    ];


    const html =
        items.map(
            function(item) {

                const level =
                    statusLevel(
                        levels[item.key]
                    );

                const badge =
                    item.key === "precautions"
                    ? ""
                    : `<span class="level-badge ${level.class}">
                            ${level.label}
                        </span>`;

                return `

                    <div class="safety-card">

                        <div class="safety-head">

                            <div class="safety-icon">
                                ${item.icon}
                            </div>

                            ${badge}

                        </div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.text}
                        </p>

                    </div>

                `;

            }
        ).join("");


    document
        .getElementById(
            containerName
        )
        .innerHTML =
        html;

}



/* =========================================================
   HIRE FAIR

   Responsible-hiring guidance for guides, porters and
   drivers — fair daily rates and porter load limits.
========================================================= */

function renderHireFair(place) {

    const container =
        document.getElementById(
            "homeHireFair"
        );

    if (!container) {

        return;

    }


    const costs =
        place.fairCosts ||
        {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        };


    const cards = [

        {
            icon: "🥾",
            title: "Guide",
            detail: (
                "Fair daily rate " +
                formatCost(costs.guidePerDay)
            ),
            tip: "Verify your guide is licensed (TAAN/NMA) and agree the full itinerary and cost in writing before you start."
        },

        {
            icon: "🎒",
            title: "Porter",
            detail: (
                "Fair daily rate " +
                formatCost(costs.porterPerDay)
            ),
            tip: (
                "International mountaineering rules cap loads at " +
                costs.porterLoadKg +
                " kg. Never ask a porter to carry more — pay porter insurance too."
            )
        },

        {
            icon: "🚐",
            title: "Driver",
            detail: (
                "Agree fares before boarding"
            ),
            tip: "Use metered taxis or agree the price first. Tip for long mountain drives, and only book registered vehicles."
        }

    ];


    const html =
        cards.map(function(card) {

            return `

                <div class="fair-card">

                    <div class="fair-icon">
                        ${card.icon}
                    </div>

                    <h3>
                        ${card.title}
                    </h3>

                    <div class="fair-detail">
                        ${card.detail}
                    </div>

                    <p class="fair-tip">
                        ${card.tip}
                    </p>

                </div>

            `;

        }).join("");


    container.innerHTML =
        html;

}



/* =========================================================
   PLACES
========================================================= */

function renderPlaces(
    places,
    containerName
) {

    const container =
        document.getElementById(
            containerName
        );


    container.innerHTML = "";



    places.forEach(function(place) {

        let hiddenClass = "";


        if (
            place.type ===
            "Underrated"
        ) {

            hiddenClass =
                "hidden-place";

        }


        container.innerHTML += `

            <div class="place-card">


                <div class="place-image">

                    <img
                        src="${place.image}"
                        alt="${place.name}"
                        onerror="imgFallback(this)"
                    >


                    <span
                        class="
                        place-label
                        ${hiddenClass}
                        "
                    >

                        ${
                            place.type ===
                            "Underrated"
                            ?
                            "💎 Underrated"
                            :
                            "★ Popular"
                        }

                    </span>

                </div>



                <div class="place-body">

                    <h3>
                        ${place.name}
                    </h3>

                    <p>
                        ${place.text}
                    </p>

                </div>


            </div>

        `;

    });

}



/* =========================================================
   HOTELS
========================================================= */

function renderHotels(
    hotels,
    containerName
) {

    const container =
        document.getElementById(
            containerName
        );


    container.innerHTML = "";



    hotels.forEach(
        function(hotel, index) {

            container.innerHTML += `

                <div class="hotel-card">

                    <img
                        src="${hotelImages[index]}"
                        alt="${hotel.name}"
                        onerror="imgFallback(this)"
                    >


                    <div class="hotel-body">

                        <h3>
                            ${hotel.name}
                        </h3>


                        <p>
                            ${hotel.text}
                        </p>


                        <div class="hotel-price">

                            <small>
                                ESTIMATED / NIGHT
                            </small>

                            <strong>
                                ${hotel.price}
                            </strong>

                        </div>

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================================
   IMAGE FALLBACK
========================================================= */

function imgFallback(img) {

    const placeholder =
        "https://via.placeholder.com/900x600/0c1631/8e9ab8?text=YatraKhoj";

    if (img.src !== placeholder) {
        img.src = placeholder;
    }

}



/* =========================================================
   BACKEND API HELPERS
========================================================= */

const API_BASE = "";


function apiGet(path, fallback) {

    const controller = new AbortController();

    const timer = setTimeout(
        function() {
            controller.abort();
        },
        10000
    );

    return fetch(
        API_BASE + path,
        { credentials: "same-origin", signal: controller.signal }
    )
    .then(function(response) {
        return response.json();
    })
    .catch(function() {
        return fallback;
    })
    .finally(function() {
        clearTimeout(timer);
    });

}


function apiPost(path, data) {

    const controller = new AbortController();

    const timer = setTimeout(
        function() {
            controller.abort();
        },
        10000
    );

    return fetch(
        API_BASE + path,
        {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            signal: controller.signal
        }
    )
    .then(function(response) {
        return response.json();
    })
    .catch(function() {
        return { success: false, message: "Network error" };
    })
    .finally(function() {
        clearTimeout(timer);
    });

}


function escapeHtml(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}



/* =========================================================
   WEATHER
========================================================= */

function renderWeather(place) {

    const container =
        document.getElementById(
            "homeWeather"
        );


    container.innerHTML = `

        <div class="weather-loading">
            Loading live weather…
        </div>

    `;


    apiGet(
        "/api/weather?place=" +
        encodeURIComponent(place.name),
        null
    )
    .then(function(data) {

        if (
            !data ||
            data.success !== true
        ) {

            container.innerHTML = `

                <div class="weather-offline">
                    Live weather is unavailable for this
                    destination right now. Try again later
                    or check a weather app before you travel.
                </div>

            `;

            return;

        }


        const weatherIcon =
            data.temperature < 12
            ? "❄️"
            : data.temperature < 24
            ? "⛅"
            : "☀️";


        container.innerHTML = `

            <div class="weather-card">

                <div class="weather-icon">
                    ${weatherIcon}
                </div>

                <div>

                    <small>
                        NOW IN ${data.place.toUpperCase()}
                    </small>

                    <h3>
                        ${Math.round(data.temperature)}°C
                    </h3>

                </div>

            </div>

            <div class="weather-stat">
                <small>FEELS LIKE</small>
                <strong>${Math.round(data.feelsLike)}°C</strong>
            </div>

            <div class="weather-stat">
                <small>HUMIDITY</small>
                <strong>${Math.round(data.humidity)}%</strong>
            </div>

            <div class="weather-stat">
                <small>WIND</small>
                <strong>${Math.round(data.windSpeed)} km/h</strong>
            </div>

            <div class="weather-stat">
                <small>RAIN</small>
                <strong>${data.precipitation} mm</strong>
            </div>

        `;

    });

}



/* =========================================================
   TRANSPORT
========================================================= */

function renderTransport(place) {

    const container =
        document.getElementById(
            "homeTransport"
        );


    const options =
        place.transport.options
        .map(
            function(option) {

                return `

                    <div class="transport-card">

                        <div class="transport-icon">
                            🚍
                        </div>

                        <div>

                            <h3>
                                ${option.type}
                            </h3>

                            <div class="transport-meta">

                                <span>
                                    ⏱ ${option.duration}
                                </span>

                                <span>
                                    💰 ${option.fare}
                                </span>

                            </div>

                        </div>

                    </div>

                `;

            }
        ).join("");


    container.innerHTML =
        options +
        `

        <p class="transport-note">
            💡 ${place.transport.note}
        </p>

        `;

}



/* =========================================================
   ITINERARY
========================================================= */

function buildItinerary(place, days, starting) {

    const steps = [];

    const places = place.places;

    const totalDays =
        Math.max(1, days);

    const travelDay =
        "Travel from " + starting +
        " to " + place.name + ".";

    const returnDay =
        "Return journey back to " + starting +
        ". Carry extra time for road conditions.";


    if (totalDays === 1) {

        steps.push({
            day: 1,
            title: place.name + " Day Trip",
            detail:
                travelDay +
                " Explore " +
                places[0].name +
                " in the morning."
        });

        steps.push({
            day: "Return",
            title: "Head Home",
            detail: returnDay
        });

        return steps;

    }


    steps.push({
        day: 1,
        title: "Arrival & First Stop",
        detail:
            travelDay +
            " Settle in and visit " +
            places[0].name +
            "."
    });


    const middleDays =
        totalDays - 2;

    for (let i = 0; i < middleDays; i += 1) {

        const placeIndex =
            1 + (i % (places.length - 1));

        const target =
            places[placeIndex];

        steps.push({
            day: i + 2,
            title: "Explore " + target.name,
            detail:
                target.text +
                (i === 0 && middleDays === 1
                    ? " Spend the evening enjoying local food."
                    : "")
        });

    }


    const lastPlace =
        places[places.length - 1];

    steps.push({
        day: totalDays,
        title: lastPlace.name + " & Departure",
        detail:
            "Visit " +
            lastPlace.name +
            " before starting your journey back to " +
            starting + "."
    });


    return steps;

}



function renderItinerary(place) {

    const container =
        document.getElementById(
            "homeItinerary"
        );


    const plan =
        lastTripPlan
        ? lastTripPlan
        : {
            days: parseDuration(
                document
                .getElementById("duration")
                .value || "3 Days"
            ),
            starting:
                document
                .getElementById("starting")
                .value || "Itahari"
        };


    const steps =
        buildItinerary(
            place,
            plan.days,
            plan.starting
        );


    container.innerHTML =
        steps.map(
            function(step) {

                return `

                    <div class="itinerary-item">

                        <div class="itinerary-day">
                            ${step.day}
                        </div>

                        <div>

                            <h3>
                                ${step.title}
                            </h3>

                            <p>
                                ${step.detail}
                            </p>

                        </div>

                    </div>

                `;

            }
        ).join("");

}



/* =========================================================
   MAP
========================================================= */

let activeMap = null;


function renderMap(place) {

    const container =
        document.getElementById(
            "homeMap"
        );


    const lat = place.coords.lat;

    const lng = place.coords.lng;


    container.innerHTML = `

        <div id="leafletMap"
            class="leaflet-box"
        >
        </div>

        <a
            class="map-open-link"
            href="https://www.google.com/maps?q=${lat},${lng}"
            target="_blank"
            rel="noopener"
        >
            Open in Google Maps ↗
        </a>

    `;


    if (typeof L === "undefined") {

        container.querySelector(
            ".leaflet-box"
        ).innerHTML =
            '<div class="map-unavailable">Map library could not load.</div>';

        return;

    }


    if (activeMap) {

        activeMap.remove();

        activeMap = null;

    }


    const map =
        L.map("leafletMap").setView(
            [lat, lng],
            11
        );

    activeMap = map;


    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 19
        }
    ).addTo(map);


    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            "<strong>" + place.name + "</strong><br>" +
            place.description
        )
        .openPopup();

}



/* =========================================================
   PACKING CHECKLIST
========================================================= */

function buildPackingList(place) {

    const items = [
        "ID / travel documents",
        "Cash (small notes)",
        "Water bottle",
        "Power bank & charger",
        "Basic first-aid & medicines"
    ];


    if (place.important.carry) {

        place.important.carry
            .split(",")
            .forEach(function(item) {

                const clean =
                    item.trim().replace(/\.$/, "");

                if (clean && items.indexOf(clean) === -1) {
                    items.push(clean);
                }

            });

    }


    const altitudeLevel =
        place.safetyLevels.altitude;

    const roadLevel =
        place.safetyLevels.road;

    const weatherLevel =
        place.safetyLevels.weather;


    if (altitudeLevel === "high") {

        items.push(
            "Warm layers",
            "Wool cap & gloves"
        );

    } else if (altitudeLevel === "medium") {

        items.push("Warm layer");

    }


    if (roadLevel === "high") {

        items.push(
            "Travel insurance",
            "First-aid kit"
        );

    }


    if (weatherLevel === "high") {

        items.push("Rain protection");
    }


    return items;

}



function renderPacking(place) {

    const container =
        document.getElementById(
            "homePacking"
        );


    const items =
        buildPackingList(place);


    container.innerHTML =
        items
        .map(
            function(item, index) {

                return `

                    <label class="pack-item">

                        <input type="checkbox"
                            ${index === 0 ? "checked" : ""}
                        >

                        <span>
                            ${item}
                        </span>

                    </label>

                `;

            }
        ).join("");

}



/* =========================================================
   EMERGENCY CONTACTS
========================================================= */

function renderEmergency(place) {

    const container =
        document.getElementById(
            "homeEmergency"
        );


    const hotlines =
        nationalEmergency
        .map(
            function(item) {

                return `

                    <div class="emergency-card">

                        <div class="emergency-icon">
                            ${item.icon}
                        </div>

                        <div>

                            <small>
                                ${item.label}
                            </small>

                            <a href="tel:${item.number}">
                                ${item.number}
                            </a>

                        </div>

                    </div>

                `;

            }
        ).join("");


    container.innerHTML =
        hotlines +
        `

        <div class="emergency-card emergency-note">

            <div class="emergency-icon">
                🏥
            </div>

            <div>

                <small>
                    HEALTH NOTE
                </small>

                <p>
                    ${place.safety.health}
                </p>

            </div>

        </div>

        `;

}



/* =========================================================
   DISCOVER PAGE
========================================================= */

function loadDiscover() {

    loadDiscoverFilters();

    renderDiscoverGrid();

}



let discoverActiveFilter = "all";



function loadDiscoverFilters() {

    const container =
        document.getElementById(
            "discoverFilters"
        );


    container.innerHTML = "";


    const filters = [
        "all",
        "trekking",
        "lakes",
        "nature",
        "culture",
        "food",
        "adventure",
        "hidden",
        "relaxation"
    ];


    filters.forEach(
        function(filter) {

            const label =
                filter === "all"
                ? "All"
                : interestLabels[filter];

            container.innerHTML += `

                <button
                    class="filter-chip
                        ${
                            filter === discoverActiveFilter
                            ? "active"
                            : ""
                        }
                    "
                    data-filter="${filter}"
                    onclick="setDiscoverFilter('${filter}', this)"
                >
                    ${label}
                </button>

            `;

        }
    );

}



function setDiscoverFilter(
    filter,
    button
) {

    discoverActiveFilter = filter;


    document
        .querySelectorAll(
            "#discoverFilters .filter-chip"
        )
        .forEach(
            function(btn) {

                btn.classList.remove("active");

            }
        );


    if (button) {

        button.classList.add("active");

    }


    renderDiscoverGrid();

}



function applyDiscoverFilters() {

    renderDiscoverGrid();

}



function renderDiscoverGrid() {

    const container =
        document.getElementById(
            "discoverGrid"
        );


    container.innerHTML = "";


    const query =
        (
            document
            .getElementById("discoverSearch")
            .value || ""
        )
        .toLowerCase()
        .trim();


    Object
        .keys(destinations)
        .forEach(function(key) {

            const place =
                destinations[key];


            if (
                discoverActiveFilter !== "all" &&
                place.interests.indexOf(
                    discoverActiveFilter
                ) === -1
            ) {

                return;

            }


            if (
                query &&
                (
                    place.name +
                    " " +
                    place.category
                )
                .toLowerCase()
                .indexOf(query) === -1
            ) {

                return;

            }


            container.innerHTML += `

                <div
                    class="discover-card"
                    onclick="
                        openDiscover('${key}')
                    "
                >

                    <img
                        src="${place.image}"
                        alt="${place.name}"
                        loading="lazy"
                        onerror="imgFallback(this)"
                    >


                    <div class="discover-overlay">
                    </div>


                    <div class="discover-info">

                        <span>
                            ${place.category}
                        </span>

                        <h3>
                            ${place.name}
                        </h3>

                        <p>
                            ${place.best}
                        </p>

                    </div>

                </div>

            `;

        });

}



/* =========================================================
   OPEN DISCOVER DESTINATION
========================================================= */

function openDiscover(key) {

    const place =
        destinations[key];


    document
        .getElementById(
            "discoverTitle"
        )
        .textContent =
        place.name;


    document
        .getElementById(
            "discoverText"
        )
        .textContent =
        place.intro;



    renderPlaces(
        place.places,
        "discoverPlaces"
    );


    renderHotels(
        place.hotels,
        "discoverHotels"
    );



    document
        .getElementById(
            "discoverDetails"
        )
        .classList
        .remove("hidden");


    document
        .getElementById(
            "discoverDetails"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================================
   TRAVEL GUIDES
========================================================= */

function loadGuideButtons() {

    const container =
        document.getElementById(
            "guideButtons"
        );


    container.innerHTML = "";


    const keys =
        Object.keys(
            destinations
        );



    keys.forEach(
        function(key, index) {

            container.innerHTML += `

                <button

                    class="
                        ${
                            index === 0
                            ?
                            "active"
                            :
                            ""
                        }
                    "

                    onclick="
                        showGuide(
                            '${key}',
                            this
                        )
                    "
                >

                    ${destinations[key].name}

                </button>

            `;

        }
    );


    showGuide(
        keys[0]
    );

}



/* =========================================================
   SHOW GUIDE
========================================================= */

function showGuide(
    key,
    button
) {

    const place =
        destinations[key];


    if (button) {

        const buttons =
            document.querySelectorAll(
                "#guideButtons button"
            );


        buttons.forEach(
            function(btn) {

                btn.classList.remove(
                    "active"
                );

            }
        );


        button.classList.add(
            "active"
        );

    }



    document
        .getElementById(
            "guideContent"
        )
        .innerHTML = `

        <div class="guide-card">


            <div class="guide-photo">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    onerror="imgFallback(this)"
                >


                <div class="guide-title">

                    <span class="mini-title">
                        DESTINATION GUIDE
                    </span>

                    <h2>
                        ${place.name}
                    </h2>

                </div>

            </div>



            <div class="guide-body">

                <p>
                    ${place.intro}
                </p>


                <div class="guide-grid">


                    <div class="guide-tip">

                        <strong>
                            🚙 Getting There
                        </strong>

                        <span>
                            ${place.guide.travel}
                        </span>

                    </div>



                    <div class="guide-tip">

                        <strong>
                            ☀ Best Time
                        </strong>

                        <span>
                            ${place.guide.time}
                        </span>

                    </div>



                    <div class="guide-tip">

                        <strong>
                            🍜 Food
                        </strong>

                        <span>
                            ${place.guide.food}
                        </span>

                    </div>



                    <div class="guide-tip">

                        <strong>
                            💎 Local Experience
                        </strong>

                        <span>
                            ${place.guide.local}
                        </span>

                    </div>


                </div>

            </div>

        </div>

    `;

}



/* =========================================================
   SAFETY PAGE
========================================================= */

function loadSafetyPage() {

    const key =
        document
        .getElementById(
            "safetyDestination"
        )
        .value;


    const place =
        destinations[key];


    document
        .getElementById(
            "safetyTitle"
        )
        .textContent =
        place.name +
        " Safety Guide";


    document
        .getElementById(
            "safetyText"
        )
        .textContent =
        "Important information to consider before travelling to " +
        place.name +
        ".";



    renderSafety(
        place,
        "safetyGrid"
    );

}



/* =========================================================
   CURRENCY
========================================================= */

const currencyRatesFallback = {

    USD: 139.50,

    GBP: 185.50,

    INR: 1.60,

    CNY: 19.40,

    AED: 38.00,

    MYR: 32.80

};


let liveCurrencyRates = null;


function loadLiveCurrency() {

    const codes =
        Object.keys(
            currencyRatesFallback
        );


    const pending =
        codes.map(
            function(code) {

                return apiGet(
                    "/api/currency?from=" +
                    code +
                    "&to=NPR&amount=1",
                    null
                )
                .then(
                    function(data) {

                        if (
                            data &&
                            data.success &&
                            data.rate
                        ) {

                            return {
                                code: code,
                                rate: data.rate
                            };

                        }

                        return null;

                    }
                );

            }
        );


    Promise
        .all(pending)
        .then(function(results) {

            const map = {};

            let ok = 0;

            results.forEach(function(result) {

                if (result) {

                    map[result.code] = result.rate;

                    ok += 1;

                }

            });


            if (ok === codes.length) {

                liveCurrencyRates = map;

            }


            convertCurrency();

        });

}



function getRate(currency) {

    if (liveCurrencyRates) {

        return liveCurrencyRates[currency];

    }

    return currencyRatesFallback[currency];

}


/* =========================================================
   USER PREFERENCES

   Stored locally so the app remembers currency, language
   and trip-finder choices between visits.
========================================================= */

const defaultPrefs = {
    currency: "USD",
    language: "en",
    difficulty: "any",
    travelerType: "any",
    avoidCrowd: false,
    hideCosts: false
};


function getPrefs() {

    try {

        const raw =
            localStorage.getItem("yk_prefs");

        if (raw) {

            const parsed = JSON.parse(raw);

            return Object.assign(
                {},
                defaultPrefs,
                parsed
            );

        }

    } catch (err) {

        /* corrupted prefs -> fall back to defaults */

    }

    return Object.assign(
        {},
        defaultPrefs
    );

}


function setPrefs(patch) {

    const prefs =
        getPrefs();

    Object.assign(prefs, patch);

    try {

        localStorage.setItem(
            "yk_prefs",
            JSON.stringify(prefs)
        );

    } catch (err) {

        /* storage unavailable -> ignore */

    }

    return prefs;

}


const currencySymbols = {

    NPR: "Rs ",
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CNY: "¥",
    INR: "₹",
    AUD: "A$",
    CAD: "C$",
    MYR: "RM"

};


function formatCost(nprAmount) {

    const prefs =
        getPrefs();

    if (prefs.hideCosts) {

        return "—";

    }

    const currency =
        prefs.currency || "USD";

    const rate =
        getRate(currency);

    const symbol =
        currencySymbols[currency] ||
        currency + " ";

    if (currency === "NPR") {

        return (
            "NPR " +
            Math.round(nprAmount).toLocaleString()
        );

    }

    if (!rate) {

        return (
            "NPR " +
            Math.round(nprAmount).toLocaleString()
        );

    }

    const converted =
        nprAmount / rate;

    return (
        symbol +
        converted.toLocaleString(
            undefined,
            { maximumFractionDigits: 0 }
        )
    );

}



function convertCurrency() {

    let amount =
        Number(
            document
            .getElementById(
                "currencyAmount"
            )
            .value
        );


    const currency =
        document
        .getElementById(
            "currencyType"
        )
        .value;


    if (
        isNaN(amount) ||
        amount < 0
    ) {

        amount = 0;

    }


    const rate =
        getRate(currency);


    const result =
        amount * rate;



    document
        .getElementById(
            "currencyResult"
        )
        .textContent =
        "NPR " +
        result.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );



    document
        .getElementById(
            "rateText"
        )
        .textContent =
        "1 " +
        currency +
        " ≈ NPR " +
        rate +
        (liveCurrencyRates ? " · Live" : " · Demo");



    const warning =
        document.querySelector(
            ".demo-warning"
        );

    if (warning) {

        warning.textContent =
            liveCurrencyRates
            ? "Live exchange rates via open.er-api.com."
            : "Using demo rates. Start the backend (node server.js) for live rates.";

    }

}



/* =========================================================
   LANGUAGE TOGGLE
========================================================= */

const uiDict = {

    en: {
        navHome: "⌂ Find Your Trip",
        navDiscover: "⌖ Discover Places",
        navGuides: "☷ Travel Guides",
        navSafety: "🛡 Safety Info",
        navInsights: "📊 Nepal in Numbers",
        navCurrency: "₨ Currency Converter",
        navAbout: "◎ About Us",
        langBtn: "🇳🇵 नेपाली"
    },

    ne: {
        navHome: "⌂ आफ्नो यात्रा खोज्नुहोस्",
        navDiscover: "⌖ स्थानहरू पत्ता लगाउनुहोस्",
        navGuides: "☷ यात्रा गाइड",
        navSafety: "🛡 सुरक्षा जानकारी",
        navInsights: "📊 नेपाल संख्यामा",
        navCurrency: "₨ मुद्रा परिवर्तक",
        navAbout: "◎ हाम्रो बारेमा",
        langBtn: "🇬🇧 English"
    }

};


let currentLang = "en";


function setLanguage(lang) {

    currentLang = lang;

    localStorage.setItem(
        "yk-lang",
        lang
    );


    const dict =
        uiDict[lang];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(el) {

            const key =
                el.getAttribute(
                    "data-i18n"
                );

            if (dict[key]) {

                el.textContent =
                    dict[key];

            }

        });

}



const translateCache = {};


function translateText(text, to) {

    if (
        !text ||
        typeof text !== "string" ||
        !text.trim()
    ) {

        return Promise.resolve(text);

    }


    const key =
        to + "::" + text;

    if (translateCache[key]) {

        return Promise.resolve(
            translateCache[key]
        );

    }


    return fetch(
        API_BASE + "/api/translate",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                to: to
            })
        }
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        const out =
            data && data.success
            ? data.translated
            : text;

        translateCache[key] = out;

        return out;

    })
    .catch(function() {
        return text;
    });

}



function translateContent() {

    if (currentLang !== "ne") {

        return;

    }

    const selectors =
        "#detailsName, #detailsIntro, " +
        ".info-card strong, " +
        ".place-body h3, .place-body p, " +
        ".hotel-body h3, .hotel-body p, " +
        ".safety-card h3, .safety-card p, " +
        ".transport-card h3";


    document
        .querySelectorAll(selectors)
        .forEach(function(el) {

            if (el.dataset.i18nOriginal === undefined) {

                el.dataset.i18nOriginal =
                    el.textContent;

            }

            const original =
                el.dataset.i18nOriginal;

            if (
                el.dataset.i18nTranslated !== "1" &&
                original &&
                original.trim()
            ) {

                translateText(original, "ne")
                    .then(function(translated) {

                        if (
                            el &&
                            el.isConnected &&
                            currentLang === "ne"
                        ) {

                            el.textContent =
                                translated;

                            el.dataset.i18nTranslated =
                                "1";

                        }

                    });

            }

        });

}



function restoreContent() {

    document
        .querySelectorAll("[data-i18n-original]")
        .forEach(function(el) {

            el.textContent =
                el.dataset.i18nOriginal;

            delete el.dataset.i18nTranslated;

        });

}



function toggleLanguage() {

    if (currentLang === "en") {

        setLanguage("ne");

        translateContent();

    } else {

        setLanguage("en");

        restoreContent();

    }

}



/* =========================================================
   SAVED TRIPS
========================================================= */

const TRIPS_KEY = "yk-trips";


function getSavedTrips() {

    try {

        return (
            JSON.parse(
                localStorage.getItem(
                    TRIPS_KEY
                )
            ) || []
        );

    } catch (error) {

        return [];

    }

}



function saveTrip(plan, topKey) {

    const trips =
        getSavedTrips();

    const entry = {
        key: topKey,
        starting: plan.starting,
        days: plan.days,
        budget: plan.budget,
        interests: plan.interests,
        savedAt: new Date().toISOString()
    };


    trips.unshift(entry);


    const unique = [];

    const seen = {};

    trips.forEach(function(trip) {

        const id =
            trip.key +
            trip.starting +
            trip.days;

        if (!seen[id]) {

            seen[id] = true;

            unique.push(trip);

        }

    });


    localStorage.setItem(
        TRIPS_KEY,
        JSON.stringify(unique.slice(0, 12))
    );

}



function openMyTrips() {

    const panel =
        document.getElementById(
            "myTripsPanel"
        );


    panel.classList.toggle("hidden");


    if (!panel.classList.contains("hidden")) {

        renderTrips();

    }


    panel.scrollIntoView({
        behavior: "smooth"
    });

}



function renderTrips() {

    const container =
        document.getElementById(
            "tripsList"
        );


    container.innerHTML = "";


    const trips =
        getSavedTrips();


    if (trips.length === 0) {

        container.innerHTML = `

            <p class="trips-empty">
                No saved trips yet. Run "Find My Trip"
                to save one to this device.
            </p>

        `;

        return;

    }


    trips.forEach(function(trip) {

        const place =
            destinations[trip.key];

        if (!place) {

            return;

        }

        container.innerHTML += `

            <div class="trip-saved-card">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    onerror="imgFallback(this)"
                >

                <div class="trip-saved-body">

                    <h3>
                        ${place.name}
                    </h3>

                    <p>
                        📍 ${trip.starting}
                        · 🕐 ${trip.days} Day${trip.days > 1 ? "s" : ""}
                        ${
                            trip.budget
                            ? " · 💰 NPR " + trip.budget + "/day"
                            : ""
                        }
                    </p>

                    <p class="trip-date">
                        Saved ${new Date(trip.savedAt).toLocaleDateString()}
                    </p>

                    <button
                        class="open-btn"
                        onclick="restoreTrip(
                            '${trip.key}',
                            '${trip.starting}',
                            '${trip.days}',
                            '${trip.budget}'
                        )"
                    >
                        Open Trip →
                    </button>

                </div>

            </div>

        `;

    });

}



function restoreTrip(
    key,
    starting,
    days,
    budget
) {

    document
        .getElementById("starting")
        .value =
        starting || "Itahari";


    document
        .getElementById("duration")
        .value =
        days + " Day" + (days > 1 ? "s" : "");


    if (budget) {

        document
            .getElementById("budget")
            .value =
            budget;

    }


    lastTripPlan = {
        interests: [],
        days: Number(days || 3),
        starting: starting || "Itahari",
        budget: Number(budget || 0)
    };


    openDestination(key);

}



/* =========================================================
   SHAREABLE URL
========================================================= */

function updateShareUrl(plan, topKey) {

    const params =
        new URLSearchParams();

    params.set("start", plan.starting);

    params.set("days", plan.days);

    if (plan.budget) {

        params.set("budget", plan.budget);

    }

    if (plan.interests.length) {

        params.set("i", plan.interests.join(","));

    }

    params.set("r", topKey);


    history.replaceState(
        null,
        "",
        location.pathname + "?" + params.toString()
    );

}



function restoreFromUrl() {

    const params =
        new URLSearchParams(
            location.search
        );


    const start =
        params.get("start");

    const days =
        params.get("days");

    const budget =
        params.get("budget");

    const interests =
        params.get("i");

    const result =
        params.get("r");


    if (!start && !days && !result) {

        return;

    }


    if (start) {

        document
            .getElementById("starting")
            .value =
            start;

    }


    if (days) {

        document
            .getElementById("duration")
            .value =
            days + " Day" + (Number(days) > 1 ? "s" : "");

    }


    if (budget) {

        document
            .getElementById("budget")
            .value =
            budget;

    }


    if (interests) {

        const list =
            interests.split(",");

        document
            .querySelectorAll(".interest")
            .forEach(function(btn) {

                if (
                    list.indexOf(
                        btn.getAttribute("data-interest")
                    ) !== -1
                ) {

                    btn.classList.add("selected");

                }

            });

    }


    if (result && destinations[result]) {

        findTrip();

    }

}



/* =========================================================
   TOAST NOTIFICATIONS
========================================================= */

let toastTimer = null;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) {

        return;

    }

    toast.textContent =
        message;

    toast.classList.remove(
        "hidden"
    );

    toast.classList.add("show");


    if (toastTimer) {

        clearTimeout(toastTimer);

    }

    toastTimer =
        setTimeout(function() {

            toast.classList.remove(
                "show"
            );

            toast.classList.add(
                "hidden"
            );

        }, 3500);

}



/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function toggleSidebar() {

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    if (!sidebar) {

        return;

    }

    const isOpen =
        sidebar.classList.contains(
            "open"
        );

    sidebar.classList.toggle(
        "open"
    );

    document.body.classList.toggle(
        "sidebar-open",
        !isOpen
    );

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    if (menuBtn) {

        menuBtn.textContent =
            isOpen ? "☰" : "✕";

    }

}



/* =========================================================
   ACCOUNT & SETTINGS
========================================================= */

let currentUser = null;


function toggleSettings() {

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );

    if (!overlay) {

        return;

    }

    const isHidden =
        overlay.classList.contains(
            "hidden"
        );

    if (isHidden) {

        renderSettings();

        overlay.classList.remove(
            "hidden"
        );

    } else {

        overlay.classList.add(
            "hidden"
        );

    }

}


function closeSettings(event) {

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );

    if (!overlay) {

        return;

    }

    if (
        event &&
        event.target !== overlay
    ) {

        return;

    }

    overlay.classList.add(
        "hidden"
    );

}


function renderSettings() {

    const auth =
        document.getElementById(
            "settingsAuth"
        );

    const profile =
        document.getElementById(
            "settingsProfile"
        );

    if (currentUser) {

        auth.classList.add("hidden");

        profile.classList.remove(
            "hidden"
        );

        document
            .getElementById("profileName")
            .textContent =
            currentUser.name ||
            "Traveler";

        document
            .getElementById("profileEmail")
            .textContent =
            currentUser.email ||
            "";

        const pic =
            document.getElementById(
                "profilePic"
            );

        if (currentUser.picture) {

            pic.src =
                currentUser.picture;

        } else {

            pic.removeAttribute(
                "src"
            );

        }

    } else {

        auth.classList.remove(
            "hidden"
        );

        profile.classList.add(
            "hidden"
        );

    }


    const prefs =
        getPrefs();

    document
        .getElementById("prefCurrency")
        .value =
        prefs.currency || "USD";

    document
        .getElementById("prefLanguage")
        .value =
        prefs.language || "en";

    document
        .getElementById("prefDifficulty")
        .value =
        prefs.difficulty || "any";

    document
        .getElementById("prefTraveler")
        .value =
        prefs.travelerType || "any";

    document
        .getElementById("prefCrowd")
        .checked =
        !!prefs.avoidCrowd;

    document
        .getElementById("prefHideCosts")
        .checked =
        prefs.hideCosts !== true;

}


function googleLogin() {

    fetch(
        API_BASE + "/api/auth/google",
        {
            credentials: "same-origin",
            redirect: "manual"
        }
    )
    .then(function(resp) {

        if (
            resp.status === 0 ||
            resp.type === "opaqueredirect"
        ) {

            window.location.href =
                "/api/auth/google";

            return;

        }

        return resp.json();

    })
    .then(function(data) {

        if (
            data &&
            data.success === false
        ) {

            showToast(
                "Google login is not configured yet. Try the demo login instead."
            );

        }

    })
    .catch(function() {

        showToast(
            "Could not reach the login service. Try again."
        );

    });

}


function demoLogin() {

    apiPost(
        "/api/auth/demo",
        {}
    )
    .then(function(data) {

        if (data && data.success) {

            currentUser = {
                name: "Demo Traveler",
                email: "demo@yatrakhoj.local",
                picture: "",
                provider: "demo"
            };

            renderSettings();

            showToast(
                "Signed in as Demo Traveler"
            );

        } else {

            showToast(
                data && data.message
                ? data.message
                : "Demo login failed"
            );

        }

    });

}


function logout() {

    apiPost(
        "/api/auth/logout",
        {}
    )
    .then(function() {

        currentUser = null;

        renderSettings();

        showToast(
            "Signed out"
        );

    });

}


function restoreSession() {

    apiGet(
        "/api/auth/me",
        { success: false }
    )
    .then(function(data) {

        if (
            data &&
            data.success &&
            data.user
        ) {

            currentUser =
                data.user;

        } else {

            currentUser =
                null;

        }

        renderSettings();

    });

}


function bindPrefsControls() {

    document
        .getElementById("prefCurrency")
        .addEventListener("change", function() {

            setPrefs({
                currency: this.value
            });

            showToast(
                "Default currency saved"
            );

        });

    document
        .getElementById("prefLanguage")
        .addEventListener("change", function() {

            const prefs =
                setPrefs({
                    language: this.value
                });

            localStorage.setItem(
                "yk-lang",
                prefs.language
            );

            setLanguage(prefs.language);

            showToast(
                "Language saved"
            );

        });

    document
        .getElementById("prefDifficulty")
        .addEventListener("change", function() {

            setPrefs({
                difficulty: this.value
            });

            showToast(
                "Default difficulty saved"
            );

        });

    document
        .getElementById("prefTraveler")
        .addEventListener("change", function() {

            setPrefs({
                travelerType: this.value
            });

            showToast(
                "Default traveler type saved"
            );

        });

    document
        .getElementById("prefCrowd")
        .addEventListener("change", function() {

            setPrefs({
                avoidCrowd: this.checked
            });

            showToast(
                this.checked
                ? "Avoid-crowds preference on"
                : "Avoid-crowds preference off"
            );

        });

    document
        .getElementById("prefHideCosts")
        .addEventListener("change", function() {

            setPrefs({
                hideCosts: !this.checked
            });

            showToast(
                "Cost display preference saved"
            );

        });

}


function applyPrefsToTripFinder() {

    const prefs =
        getPrefs();

    const difficulty =
        document.getElementById(
            "difficulty"
        );

    const traveler =
        document.getElementById(
            "travelerType"
        );

    const crowd =
        document.getElementById(
            "avoidCrowd"
        );

    if (difficulty) {

        difficulty.value =
            prefs.difficulty || "any";

    }

    if (traveler) {

        traveler.value =
            prefs.travelerType || "any";

    }

    if (crowd) {

        crowd.checked =
            !!prefs.avoidCrowd;

    }

}



/* =========================================================
   COMMUNITY SAFETY REPORTS
========================================================= */

let reportMap = null;

let reportMarkers = [];

let reportsLoaded = [];


const reportCategoryNames = {

    scam: {
        en: "Scam",
        ne: "ठगी"
    },

    harassment: {
        en: "Harassment",
        ne: "उत्पीडन"
    },

    theft: {
        en: "Theft",
        ne: "चोरी"
    },

    info: {
        en: "Info",
        ne: "जानकारी"
    }

};


function reportCategoryName(category) {

    const entry =
        reportCategoryNames[category] ||
        reportCategoryNames.info;

    return entry[currentLang] ||
        entry.en;

}


function getReportCoords(report) {

    if (
        report.lat &&
        report.lng
    ) {

        return [
            Number(report.lat),
            Number(report.lng)
        ];

    }

    const place =
        destinations[report.place];

    if (
        place &&
        place.coords &&
        place.coords.lat &&
        place.coords.lng
    ) {

        return [
            place.coords.lat,
            place.coords.lng
        ];

    }

    return null;

}


function loadReports() {

    apiGet(
        "/api/reports",
        { success: false, reports: [] }
    )
    .then(function(data) {

        const reports =
            data &&
            data.success &&
            Array.isArray(data.reports)
            ? data.reports
            : [];

        reportsLoaded =
            reports;

        renderReportMap(
            reports
        );

        renderReportFeed(
            reports
        );

    });

}


function renderReportMap(reports) {

    const el =
        document.getElementById(
            "reportMap"
        );

    if (!el || typeof L === "undefined") {

        return;

    }

    if (!reportMap) {

        reportMap =
            L.map(el).setView(
                [27.9, 84.1],
                7
            );

        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
                attribution:
                    "&copy; OpenStreetMap &copy; CARTO",
                subdomains: "abcd",
                maxZoom: 18
            }
        ).addTo(reportMap);

    }


    reportMarkers.forEach(
        function(marker) {

            reportMap.removeLayer(
                marker
            );

        }
    );

    reportMarkers = [];


    const iconColors = {
        scam: "#C8102E",
        harassment: "#F2B632",
        theft: "#8E44AD",
        info: "#2E86DE"
    };


    reports.forEach(function(report) {

        const coords =
            getReportCoords(report);

        if (!coords) {

            return;

        }

        const color =
            iconColors[report.category] ||
            "#2E86DE";

        const icon =
            L.divIcon({
                className:
                    "report-marker",
                html:
                    '<div style="background:' +
                    color +
                    '">⚠</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

        const marker =
            L.marker(coords, {
                icon: icon
            })
            .addTo(reportMap)
            .bindPopup(
                "<strong>" +
                escapeHtml(report.title) +
                "</strong><br>" +
                escapeHtml(report.place) +
                "<br>" +
                escapeHtml(
                    report.description || ""
                )
            );

        reportMarkers.push(
            marker
        );

    });

}


function renderReportFeed(reports) {

    const feed =
        document.getElementById(
            "reportsFeed"
        );

    if (!feed) {

        return;

    }

    if (reports.length === 0) {

        feed.innerHTML =
            '<div class="reports-empty">' +
            "No reports yet — be the first to share." +
            "</div>";

        return;

    }


    feed.innerHTML =
        reports
        .slice(0, 12)
        .map(function(report) {

            return `

                <div class="report-item cat-${escapeHtml(report.category)}">

                    <div class="report-head">

                        <span class="report-cat">
                            ${escapeHtml(reportCategoryName(report.category))}
                        </span>

                        <span class="report-time">
                            ${escapeHtml(prettyTime(report.time))}
                        </span>

                    </div>

                    <h4>
                        ${escapeHtml(report.title)}
                    </h4>

                    <p>
                        ${escapeHtml(report.description || "")}
                    </p>

                    <span class="report-place">
                        📍 ${escapeHtml(destinationName(report.place))}
                    </span>

                </div>

            `;

        })
        .join("");

}


function prettyTime(isoTime) {

    if (!isoTime) {

        return "";

    }

    const date =
        new Date(isoTime);

    if (isNaN(date.getTime())) {

        return isoTime;

    }

    return date.toLocaleDateString(
        undefined,
        {
            day: "numeric",
            month: "short"
        }
    );

}


function destinationName(key) {

    const place =
        destinations[key];

    return place
        ? place.name
        : key;

}


function openReportForm() {

    const form =
        document.getElementById(
            "reportForm"
        );

    if (!form) {

        return;

    }

    form.classList.remove(
        "hidden"
    );

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function closeReportForm() {

    const form =
        document.getElementById(
            "reportForm"
        );

    if (form) {

        form.classList.add(
            "hidden"
        );

    }

}


function submitReport() {

    const place =
        document
        .getElementById("reportPlace")
        .value;

    const category =
        document
        .getElementById("reportCategory")
        .value;

    const severity =
        document
        .getElementById("reportSeverity")
        .value;

    const title =
        document
        .getElementById("reportTitle")
        .value
        .trim();

    const description =
        document
        .getElementById("reportDescription")
        .value
        .trim();

    if (!title) {

        showToast(
            "Please add a short title for your report."
        );

        return;

    }


    const placeData =
        destinations[place];

    const lat =
        placeData &&
        placeData.coords &&
        placeData.coords.lat
        ? Number(placeData.coords.lat)
        : null;

    const lng =
        placeData &&
        placeData.coords &&
        placeData.coords.lng
        ? Number(placeData.coords.lng)
        : null;


    apiPost(
        "/api/reports",
        {
            place: place,
            lat: lat,
            lng: lng,
            category: category,
            severity: severity,
            title: title,
            description: description
        }
    )
    .then(function(data) {

        if (data && data.success) {

            document
                .getElementById("reportForm")
                .classList.add("hidden");

            document
                .getElementById("reportTitle")
                .value = "";

            document
                .getElementById("reportDescription")
                .value = "";

            showToast(
                "Report submitted. Thank you for helping other travelers."
            );

            loadReports();

        } else {

            showToast(
                data && data.message
                ? data.message
                : "Could not submit report."
            );

        }

    });

}



/* =========================================================
   NEPAL IN NUMBERS — TRENDS DASHBOARD
========================================================= */

function loadTrends() {

    apiGet(
        "/api/trends",
        { success: false, trends: null }
    )
    .then(function(data) {

        const trends =
            data &&
            data.success &&
            data.trends
            ? data.trends
            : null;

        if (!trends) {

            return;

        }

        renderTrendStats(trends);

        renderArrivalsChart(trends);

        renderSeasonalityChart(trends);

        renderMarketsChart(trends);

        renderTrendsTakeaway(trends);

    });

}


function renderTrendStats(trends) {

    const stats = [
        {
            id: "stat-1",
            value: "1.16M",
            label: "Arrivals in 2025"
        },
        {
            id: "stat-2",
            value: "16.3 days",
            label: "Average stay"
        },
        {
            id: "stat-3",
            value: "$33",
            label: "Spend per day"
        },
        {
            id: "stat-4",
            value: "33%",
            label: "Arrivals from India"
        }
    ];


    stats.forEach(function(stat) {

        const el =
            document.getElementById(
                stat.id
            );

        if (!el) {

            return;

        }

        el.querySelector("strong").textContent =
            stat.value;

        el.querySelector("span").textContent =
            stat.label;

    });

}


function renderArrivalsChart(trends) {

    const el =
        document.getElementById(
            "arrivalsChart"
        );

    if (!el || !trends.arrivalsByYear) {

        return;

    }

    const entries =
        trends.arrivalsByYear;

    const max =
        Math.max.apply(
            null,
            entries.map(function(e) {
                return e.value;
            })
        ) || 1;


    el.innerHTML =
        entries
        .map(function(entry) {

            const year =
                entry.year;

            const value =
                entry.value;

            const height =
                Math.round(
                    (value / max) * 100
                );

            return `

                <div class="bar-col">

                    <span class="bar-value">
                        ${value >= 1000000 ? (value / 1000000).toFixed(2) + "M" : Math.round(value / 1000) + "k"}
                    </span>

                    <div class="bar-track">

                        <div
                            class="bar-fill"
                            style="height:${height}%"
                        >
                        </div>

                    </div>

                    <span class="bar-label">
                        ${year}
                    </span>

                </div>

            `;

        })
        .join("");

}


function renderSeasonalityChart(trends) {

    const el =
        document.getElementById(
            "seasonalityChart"
        );

    if (!el || !trends.seasonality) {

        return;

    }

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const entries =
        trends.seasonality;

    const byMonth = {};

    entries.forEach(function(entry) {

        byMonth[entry.month] =
            entry.value;

    });


    el.innerHTML =
        monthNames
        .map(function(name, index) {

            const value =
                byMonth[name] ||
                (entries[index] && entries[index].value) ||
                0;

            const height =
                Math.max(3, value);

            return `

                <div class="bar-col season-col">

                    <div class="bar-track">

                        <div
                            class="bar-fill season-fill"
                            style="height:${height}%"
                            title="${name}: ${value}%"
                        >
                        </div>

                    </div>

                    <span class="bar-label">
                        ${name}
                    </span>

                </div>

            `;

        })
        .join("");

}


function renderMarketsChart(trends) {

    const el =
        document.getElementById(
            "marketsChart"
        );

    if (!el || !trends.sourceMarkets) {

        return;

    }

    const entries =
        trends.sourceMarkets;

    const max =
        Math.max.apply(
            null,
            entries.map(function(e) {
                return e.value;
            })
        ) || 1;


    el.innerHTML =
        entries
        .map(function(entry) {

            const width =
                Math.round(
                    (entry.value / max) * 100
                );

            return `

                <div class="market-row">

                    <span class="market-name">
                        ${escapeHtml(entry.country || entry.name)}
                    </span>

                    <div class="market-track">

                        <div
                            class="market-fill"
                            style="width:${width}%"
                        >
                        </div>

                    </div>

                    <span class="market-value">
                        ${entry.value}%
                    </span>

                </div>

            `;

        })
        .join("");

}


function renderTrendsTakeaway(trends) {

    const el =
        document.getElementById(
            "trendsTakeaway"
        );

    if (!el) {

        return;

    }

    el.textContent =
        trends.takeaway ||
        "Data from public Nepal Tourism Board reporting.";

}



/* =========================================================
   UNDERRATED NEPAL
========================================================= */

function renderUnderrated() {

    const grid =
        document.getElementById(
            "underratedGrid"
        );

    if (!grid) {

        return;

    }

    grid.innerHTML =
        underratedRegions
        .map(function(region) {

            return `

                <div class="underrated-card">

                    <div class="underrated-tags">

                        <span class="crowd-badge crowd-${region.crowdLevel}">
                            ${crowdLabel(region.crowdLevel)}
                        </span>

                        <span class="chip chip-${region.difficulty}">
                            ${difficultyLabel(region.difficulty)}
                        </span>

                    </div>

                    <span class="underrated-region">
                        ${escapeHtml(region.region)}
                    </span>

                    <h3>
                        ${escapeHtml(region.name)}
                    </h3>

                    <p>
                        ${escapeHtml(region.description)}
                    </p>

                    <span class="underrated-replace">
                        ☞ Quieter alternative to ${escapeHtml(region.replace)}
                    </span>

                </div>

            `;

        })
        .join("");

}



/* =========================================================
   START WEBSITE
========================================================= */

function startWebsite() {

    const savedLang =
        localStorage.getItem("yk-lang");

    if (savedLang) {

        setLanguage(savedLang);

    }


    loadDiscover();

    loadGuideButtons();

    loadSafetyPage();

    convertCurrency();

    loadLiveCurrency();

    restoreFromUrl();

    restoreSession();

    applyPrefsToTripFinder();

    bindPrefsControls();

    renderUnderrated();

    loadTrends();

}


startWebsite();