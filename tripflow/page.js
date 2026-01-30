"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./api/weather";

export default function Home() {
  const [city, setCity] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });

  return (
    <div
      style={{
        padding: "60px",
        fontFamily: "Arial",
        maxWidth: "400px",
        margin: "0 auto",
        background: "white",
        borderRadius: "12px",
        marginTop: "100px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h1>✈️ TripFlow</h1>
      <p>여행지 날씨를 검색하세요.</p>

      <input
        type="text"
        placeholder="도시를 입력하세요"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      {isLoading && <p>⏳ 불러오는 중...</p>}
      {error && <p>❌ 오류가 발생했습니다.</p>}

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>{data.name}</h3>
          <p>🌡️ 온도: {data.main.temp}°C</p>
          <p>☁️ 날씨: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
