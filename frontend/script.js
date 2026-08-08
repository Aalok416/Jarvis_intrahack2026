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
   WHEN USER CHANGES DESTINATION

   We hide the previous search result.
   We do NOT show anything automatically.
========================================================= */

function destinationChanged() {

    document
        .getElementById(
            "searchResult"
        )
        .classList
        .add("hidden");


    document
        .getElementById(
            "destinationDetails"
        )
        .classList
        .add("hidden");

}



/* =========================================================
   CURRENT DESTINATION
========================================================= */

let currentDestination = "";



/* =========================================================
   FIND MY TRIP

   STEP 1:
   Shows ONLY destination card.
========================================================= */

function findTrip() {

    const key =
        document
        .getElementById(
            "destination"
        )
        .value;


    if (key === "") {

        alert(
            "Please select a destination first."
        );

        return;

    }


    currentDestination = key;


    const place =
        destinations[key];


    const duration =
        document
        .getElementById(
            "duration"
        )
        .value;



    document
        .getElementById(
            "destinationImage"
        )
        .src =
        place.image;


    document
        .getElementById(
            "destinationImage"
        )
        .alt =
        place.name;


    document
        .getElementById(
            "destinationCategory"
        )
        .textContent =
        place.category;


    document
        .getElementById(
            "destinationName"
        )
        .textContent =
        place.name;


    document
        .getElementById(
            "destinationDescription"
        )
        .textContent =
        place.description;


    document
        .getElementById(
            "destinationDuration"
        )
        .textContent =
        "🕐 " + duration;


    document
        .getElementById(
            "destinationBest"
        )
        .textContent =
        place.best;



    document
        .getElementById(
            "searchResult"
        )
        .classList
        .remove("hidden");


    document
        .getElementById(
            "destinationDetails"
        )
        .classList
        .add("hidden");



    document
        .getElementById(
            "searchResult"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================================
   OPEN DESTINATION

   STEP 2:
   User clicks result card.

   NOW show:
   - important info
   - safety
   - places
   - accommodation
========================================================= */

function openDestination() {

    if (currentDestination === "") {

        return;

    }


    const place =
        destinations[
            currentDestination
        ];



    document
        .getElementById(
            "detailsName"
        )
        .textContent =
        place.name +
        " Travel Information";


    document
        .getElementById(
            "detailsIntro"
        )
        .textContent =
        place.intro;



    renderImportantInfo(
        place
    );


    renderSafety(
        place.safety,
        "homeSafety"
    );


    renderPlaces(
        place.places,
        "homePlaces"
    );


    renderHotels(
        place.hotels,
        "homeHotels"
    );



    document
        .getElementById(
            "destinationDetails"
        )
        .classList
        .remove("hidden");



    document
        .getElementById(
            "destinationDetails"
        )
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

function renderSafety(
    safety,
    containerName
) {

    document
        .getElementById(
            containerName
        )
        .innerHTML = `

        <div class="safety-card">

            <div class="safety-icon">
                🏔
            </div>

            <h3>
                Altitude
            </h3>

            <p>
                ${safety.altitude}
            </p>

        </div>



        <div class="safety-card">

            <div class="safety-icon">
                🌦
            </div>

            <h3>
                Weather
            </h3>

            <p>
                ${safety.weather}
            </p>

        </div>



        <div class="safety-card">

            <div class="safety-icon">
                🚙
            </div>

            <h3>
                Road & Transport
            </h3>

            <p>
                ${safety.road}
            </p>

        </div>



        <div class="safety-card">

            <div class="safety-icon">
                📶
            </div>

            <h3>
                Mobile Network
            </h3>

            <p>
                ${safety.network}
            </p>

        </div>



        <div class="safety-card">

            <div class="safety-icon">
                🏥
            </div>

            <h3>
                Healthcare
            </h3>

            <p>
                ${safety.health}
            </p>

        </div>



        <div class="safety-card">

            <div class="safety-icon">
                ⚠️
            </div>

            <h3>
                Important Precautions
            </h3>

            <p>
                ${safety.precautions}
            </p>

        </div>

    `;

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
   DISCOVER PAGE
========================================================= */

function loadDiscover() {

    const container =
        document.getElementById(
            "discoverGrid"
        );


    container.innerHTML = "";



    Object.keys(
        destinations
    )
    .forEach(function(key) {

        const place =
            destinations[key];


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
        place.safety,
        "safetyGrid"
    );

}



/* =========================================================
   CURRENCY
========================================================= */

const currencyRates = {

    USD: 139.50,

    GBP: 185.50,

    INR: 1.60,

    CNY: 19.40,

    AED: 38.00,

    MYR: 32.80

};



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
        currencyRates[
            currency
        ];


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
        rate;

}



/* =========================================================
   START WEBSITE
========================================================= */

function startWebsite() {

    loadDiscover();

    loadGuideButtons();

    loadSafetyPage();

    convertCurrency();

}


startWebsite();
