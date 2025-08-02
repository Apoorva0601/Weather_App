# 🌦️ Weather App

A modern, responsive weather web application that enables users to check current weather conditions in any city worldwide. It fetches real-time data such as temperature, humidity, wind speed, and general weather conditions using the powerful [OpenWeatherMap API](https://openweathermap.org/api).

The app offers a user-friendly interface with dynamic visuals and weather-based icon changes. Built using pure HTML, CSS, and JavaScript (no frameworks), this project is perfect for beginners looking to understand API integration and responsive UI development.

---

![Screenshot](https://raw.githubusercontent.com/Apoorva0601/Weather_App/main/images/image.png)


---

## 🚀 Features

- 🔍 Search for weather by city name
- 🌡️ Displays temperature, humidity, wind speed, and weather conditions
- 🌍 Supports cities around the world
- 📱 Fully responsive UI for mobile and desktop
- ☀️ Dynamic weather icons and background visuals

---

## 🛠️ Built With

- **HTML**
- **CSS**
- **JavaScript**
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Getting Started

Follow the steps below to get a local copy of the project up and running.

### 🔧 Installation

```bash
git clone https://github.com/Apoorva0601/Weather_App.git
cd Weather_App
```
---

## ▶️ Run the App

Open `index.html` in your browser  
**OR** deploy it using:

- [Vercel](https://vercel.com/)
- **GitHub Pages**

---

## 🔑 Getting an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Create an account and log in
3. Navigate to the **API Keys** section
4. Copy your API key
5. Open the file `script.js` and replace the placeholder with your key:

```js
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
```
---
## 📁 Folder Structure

```plaintext
Weather_App/
├── index.html
├── style.css
├── script.js
└── README.md
```
## 💡 Future Improvements

- 🌍 Auto-detect user location using **Geolocation API**
- 📆 Display **5-day weather forecast**
- 🌓 Add **dark/light mode** support
- ⚠️ Improve **error handling** and input validation
- 🧭 Add **loading indicators** during API calls

---

## 🧪 Known Issues

- API may return inaccurate results for ambiguous city names  
- No input debounce — rapid typing may send too many requests  
- Minimal error UI for unsupported or invalid city input  

---

## 🙋‍♂️ Author

Made with 💙 by [Apoorva](https://github.com/Apoorva0601)

