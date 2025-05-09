import React, { useState } from "react";
import CardStack from "./CardStack";
import potatoImg from "./assets/images/potato.png";
import "./ResultScreen.css";
import background from "./assets/images/바탕화면22.png";


export default function ResultScreen({ onResultClick, crops }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        position: "absolute",
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div style={{ position: "absolute", top: "55%" }}>
        <CardStack crops={crops} ></CardStack>
      </div>
      <p
        style={{
          position: "absolute",
          top: "7%",
          textAlign: "center",
          fontSize: "70px",
          margin: "0",
        }}
      >
        윤작 작물 추천
      </p>
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
        자세히 &gt;&gt;
      </p>
    </div>
  );
}
