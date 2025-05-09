import React, { useState } from "react";
import "./CardStack.css";
import potatoImg from "./assets/images/potato.png";
import mooImg from "./assets/images/moo.png";
import siImg from "./assets/images/시금치 프레임.png";
import cornImg from "./assets/images/옥수수 프레임.png";
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
import 토마토 from "./assets/images/토마토 프레임.png";

const positions = ["left", "center", "right"];
const imageMap = {
  마늘: 마늘,
  고구마: 고구마,
  옥수수: 옥수수,
  봄감자: 감자,
  고추: 고추,
  토마토: 토마토,
  무: 무,
  겨울시금치: 겨울시금치,
  봄배추: 봄배추,
  상추: 상추,
  가을시금치: 가을시금치,
  여름배추: 여름배추,
  가을배추: 가을배추,
};

const CardStack = ({ crops }) => {
  const cards = crops.slice(0, 3).map((crop, index) => ({
    id: index,
    name: crop.cropName,
    img: imageMap[crop.cropName], // 이름으로 이미지 매핑
  }));

  const [cardPositions, setCardPositions] = useState([
    "center",
    "right",
    "left",
  ]);

  const handleCardClick = (index) => {
    const position = cardPositions[index];
    let newPositions = [...cardPositions];

    if (position === "left") {
      // 오른쪽으로 회전: shift -> push
      const shifted = newPositions.shift();
      newPositions.push(shifted);
    } else if (position === "right") {
      // 왼쪽으로 회전: pop -> unshift
      const popped = newPositions.pop();
      newPositions.unshift(popped);
    }

    setCardPositions(newPositions);
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${cardPositions[index]}`}
          onClick={() => handleCardClick(index)}
        >
          <img
            src={card.img}
            alt={card.name}
            className="card-image"
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
