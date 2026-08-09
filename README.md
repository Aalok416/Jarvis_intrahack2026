# jarvis_intrhack2026
we are team jarvis
This is repository

1. Project Title 
YatraKhoj
2. Team Name & All Member Names 
(Jarvis)
Arpit Rai
Aalok Bhattarai 
Anish Dhungana 
Pratik Karki
3. Problem Statement
Travelers often struggle to find destinations that match their interests, budget, available time, experience level, and safety requirements. Information about trekking routes, lakes, cultural places, transportation costs, accommodation, local attractions, and safety is usually scattered across different websites and social media platforms.
4. Solution Description
Our solution is to create one platform where travelers tell us what kind of trip they want, and YatraKhoj suggests suitable destinations with their budget, safety, difficulty, and itinerary. This saves users from searching through many different websites and also helps them discover hidden local destinations. Our solution is to create one platform where travelers tell us what kind of trip they want, and YatraKhoj suggests suitable destinations with their budget, safety, difficulty, and itinerary. This saves users from searching through many different websites and also helps them discover hidden local destinations.
5. Tech Stack Used (languages, frameworks, libraries, APIs) 
HTML – to create the structure of the website CSS – to design and style the interface JavaScript – for trip filtering, recommendations, buttons, forms, and interactive features JSON – to store destination, budget, safety, and itinerary data Leaflet.js : for interactive map
6. Setup / Installation Instructions (how to run the project locally)
1. Clone the repository:
   git clone https://github.com/arpitputu777/jarvis_intrahack2026.git
   cd jarvis_intrahack2026

2. Start the backend API server (serves currency, weather, and translate endpoints on port 5000):
   cd backend
   node server.js

   The site works without the backend too — it gracefully falls back to demo currency rates,
   cached weather info, and a bundled English↔Nepali dictionary.

3. Open the site in your browser:
   cd ../frontend
   (optional: python3 -m http.server 8123  →  http://localhost:8123)
   Open frontend/index.html directly, or the local server URL above.

Features:
- Smart trip finder: answer 3 quick questions (interests, budget/day, trip length) and
  YatraKhoj ranks all 8 destinations by a weighted score (60% interest match, 30% budget fit, 10% duration fit).
- Destination hub: live weather, transport options, a day-by-day itinerary built from your starting city,
  an interactive Leaflet map, safety-risk badges, a packing checklist, and national emergency hotlines.
- Discover page: search and filter all destinations by interest.
- Travel guides with local places and hotels.
- Currency converter with live NPR rates (falls back to demo rates offline).
- English ↔ Nepali language toggle (UI dictionary + on-demand translation via backend).
- My Trips: automatically save your best match, review past plans, and reopen them.
- Share your plan via URL query params (?start=&days=&budget=&i=&r=).

7. AI Tools Used mandatory if any AI coding tools were used (see Technology Policy) 
Chat gpt, Claude Ai, Gemini
8. Demo Link or Screenshots
