import React, { useState } from "react";
import "./Detail.css";
import background from "./assets/images/바탕화면3.png";
import 가을배추 from "./assets/images/가을배추 프레임.png";
import 여름배추 from "./assets/images/여름배추 프레임.png";
import 봄배추 from "./assets/images/봄배추 프레임.png";
import 감자 from "./assets/images/감자 프레임.png";
import 고구마 from "./assets/images/고구마 프레임.png";
import 무 from "./assets/images/무 프레임.png";
import 겨울시금치 from "./assets/images/겨울시금치 프레임.png";
import 가을시금치 from "./assets/images/가을시금치 프레임.png";
import 옥수수 from "./assets/images/옥수수 프레임.png";
import 상추 from "./assets/images/상추 프레임.png";
import 마늘 from "./assets/images/마늘 프레임.png";
import 고추 from "./assets/images/고추 프레임.png";

export default function Detail({ onResultClick, crops }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        position: "absolute",
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        alignItems: "center",
      }}
    >
      <p
        onClick={() => {
          onResultClick?.();
        }}
        style={{
          position: "absolute",
          left: "83%",
          top: "80%",
          fontSize: "50px",
          cursor: "pointer",
        }}
      >
        돌아가기
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "40px",
          marginRight: "100px",
        }}
      >
        <div>
          <p>pH 적합성</p>
          <p>질소 포화도</p>
          <p>병해충 피해</p>
          <p>뿌리 다양성</p>
          <p>생육 기간 다양성</p>
          <p>작부 시기</p>
          <p style={{ color: "black" }}>총점</p>
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "1px",
            height: "500px",
            margin: "0 30px",
          }}
        ></div>
        {crops.map((crop, index) => (
          <div key={index} style={{ marginRight: "40px" }}>
            <p>{`${index + 1}.${crop.cropName}`}</p>
            <p>{crop.breakdown["pH 적합성"] || "+0"}</p>
            <p>{crop.breakdown["질소 포화도"] || "+0"}</p>
            <p>{crop.breakdown["병해충 회피"] || "+0"}</p>
            <p>{crop.breakdown["뿌리 다양성"] || "+0"}</p>
            <p>{crop.breakdown["생육 기간 다양성"] || "+0"}</p>
            <p>{crop.breakdown["작부 시기 겹침"] || "+0"}</p>
            <p style={{ color: "black" }}>{`+ ${crop.score}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
