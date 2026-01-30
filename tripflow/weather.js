export async function fetchWeather(city) {
  const API_KEY = "API_KEY";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("날씨 정보를 불러오지 못했습니다.");
  }

  return res.json();
}
