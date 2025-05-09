import { useEffect, useState } from "react";
import React from "react";
import "./Slide.css";
import background from "./assets/images/왓츠 인 마이 팜.jpg";
import semo from "./assets/images/미니삼각형.png";
import 토마토 from "./assets/images/토마토.png";
import 샐러리 from "./assets/images/샐러리.png";
import 가지 from "./assets/images/가지.png";
import 감자 from "./assets/images/감자.png";
import 당근 from "./assets/images/당근.png";
import 제목 from "./assets/images/왓츠 인 마이 팜.png";

function SelectOPtion({ name, options, onSelect, onInput, value, onSelect2 }) {
  const [isOpen, setIsOpen] = useState(false); // 선택창 열림 상태 관리
  const [inputValue, setInputValue] = useState(""); // 입력값 상태 관리

  const renderContent = () => {
    switch (name) {
      case "1. 지역":
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {options.map((option, index) => (
              <p
                key={index}
                style={{ margin: "5px 0", fontSize: "40px", cursor: "pointer" }}
                onClick={() => {
                  onSelect?.(option); // 지역 상태 업데이트
                  setIsOpen(false); // 선택창 닫기
                }}
              >
                {option}
              </p>
            ))}
          </div>
        );
      case "4. 질소 포화도":
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {options.map((option, index) => (
              <p
                key={index}
                style={{ margin: "5px 0", fontSize: "40px", cursor: "pointer" }}
                onClick={() => {
                  onSelect?.(option);
                  setIsOpen(false); // 선택창 닫기
                }}
              >
                {option}
              </p>
            ))}
          </div>
        );
      case "5. 이전 재배 작물":
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {options.map((option, index) => (
              <p
                key={index}
                style={{ margin: "5px 0", fontSize: "40px", cursor: "pointer" }}
                onClick={() => {
                  onSelect?.(option);
                  setIsOpen(false); // 선택창 닫기
                }}
              >
                {option}
              </p>
            ))}
          </div>
        );
      case "7. 기존 병해충":
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {options.map((option, index) => (
              <p
                key={index}
                style={{ margin: "5px 0", fontSize: "40px", cursor: "pointer" }}
                onClick={() => {
                  onSelect?.(option); // 병해충 상태 업데이트
                  setIsOpen(false); // 선택창 닫기
                }}
              >
                {option}
              </p>
            ))}
          </div>
        );
      case "2. 토양 면적 (ha)":
        // 입력창 렌더링
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
            }}
          >
            <input
              type="text"
              value={value}
              onChange={(e) => onInput?.(e.target.value)}
              // 입력값 업데이트
              placeholder="값을 입력하세요"
              style={{
                width: "100%",
                padding: "5px",
                fontSize: "20px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
        );
      case "3. 토양 pH":
        // 입력창 렌더링
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
            }}
          >
            <input
              type="text"
              value={value}
              onChange={(e) => onInput?.(e.target.value)}
              // 입력값 업데이트
              placeholder="값을 입력하세요"
              style={{
                width: "100%",
                padding: "5px",
                fontSize: "20px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
        );
      case "6. 작부 가능 시기":
        // 작부 가능 시기 선택창 렌더링
        return (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#FFCC00",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              {options.map((option, index) => (
                <p
                  key={index}
                  style={{
                    margin: "5px 0",
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onSelect?.(option);
                    // 선택창 닫기
                  }}
                >
                  {option}
                </p>
              ))}
              <p
                style={{
                  margin: "5px 0",
                  fontSize: "40px",
                }}
              >
                부터
              </p>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              {options.map((option, index) => (
                <p
                  key={index}
                  style={{
                    margin: "5px 0",
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onSelect2?.(option);
                    setIsOpen(false); // 선택창 닫기
                  }}
                >
                  {option}
                </p>
              ))}
              <p
                style={{
                  margin: "5px 0",
                  fontSize: "40px",
                }}
              >
                까지
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        borderBottom: "1px solid black",
        display: "flex",
        flexDirection: "column",
        width: "600px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "50px",
            margin: "0",
          }}
        >
          {name}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)} // 버튼 클릭 시 열림/닫힘 토글
          style={{
            all: "unset",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <img
            src={semo}
            alt="Semo"
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
            }}
          />
        </button>
      </div>
      {isOpen && renderContent()} {/* 선택창 또는 입력창 렌더링 */}
    </div>
  );
}

export function Slide({ onResultClick,onResult }) {
  const [preCrop, setPreCrop] = useState("무");
  const [region, setRegion] = useState(null);
  const [ph, setPh] = useState(null);
  const [nitrogren, setNitrogen] = useState("부족");
  const [soilarea, setSoilArea] = useState(null);
  const [pesthistory, setPestHistory] = useState(null);

  const [plantStartMonth, setPlantStartMonth] = useState(1);
  const [plantEndMonth, setPlantEndMonth] = useState(12);

  const getAvailablePeriod = (start, end) => {
    const result = [];
    let current = parseInt(start);
    const endNum = parseInt(end);

    do {
      result.push(current);
      current = (current % 12) + 1;
    } while (current !== (endNum % 12) + 1);

    return result;
  };

  const requestData = {
    region: region,
    soilPH: ph ? parseFloat(ph) : null,
    nitrogenStatus: nitrogren,
    soilArea: soilarea ? parseFloat(soilarea) : null,
    previousCrop: preCrop,
    availablePeriod:
      plantStartMonth && plantEndMonth
        ? getAvailablePeriod(plantStartMonth, plantEndMonth)
        : [],
  };

  useEffect(() => {
    console.log("soilarea:", soilarea);
  }, [soilarea]);

  useEffect(() => {
    console.log("ph:", ph);
  }, [ph]);
  useEffect(() => {
    console.log("nitrogen:", nitrogren);
  }, [nitrogren]);
  useEffect(() => {
    console.log("preCrop:", preCrop);
  }, [preCrop]);
  useEffect(() => {
    console.log("pesthistory:", pesthistory);
  }, [pesthistory]);
  useEffect(() => {
    console.log("region:", region);
  }, [region]);
  useEffect(() => {
    console.log("plantStartMonth:", plantStartMonth);
  }, [plantStartMonth]);
  useEffect(() => {
    console.log("plantEndMonth:", plantEndMonth);
  }, [plantEndMonth]);

  const handleResultClick = async () => {
    try {
      const response = await fetch(
        "http://54.145.2.41:8080/api/crops/recommend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("요청 실패");

      const data = await response.json();
      console.log("추천 작물 결과:", data);
      const top3Crops = data
        .sort((a, b) => b.score - a.score) // score 기준 내림차순 정렬
        .slice(0, 3); // 상위 3개 추출

      console.log(top3Crops);
      // 결과 페이지 이동 또는 상태 업데이트 로직 추가 가능

      onResult?.(top3Crops);

      // 결과 페이지로 이동
      onResultClick?.();
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  return (
    <div
      className="slide"
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
        backgroundImage: `white`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >

      <img src={토마토}  className="rotating-tomato" style={{width:"300px", height:"300px", position:"absolute",left:"400px",top:"70px"}}></img>
      <img src={가지}   className="rotating-tomato2"style={{width:"450px", height:"400px", position:"absolute",left:"-30px",top:"-110px"}}></img>
      <img src={샐러리}   className="rotating-tomato3"style={{width:"450px", height:"400px", position:"absolute",left:"50px",top:"200px"}}></img>
      <img src={감자} className="rotating-tomato"  style={{width:"400px", height:"400px", position:"absolute",left:"-200px",top:"450px"}}></img>
      <img src={당근} className="rotating-tomato2"  style={{width:"400px", height:"400px", position:"absolute",left:"400px",top:"500px"}}></img>
      <img src={제목} style={{zIndex:"10", width:"650px",left:"20px",top:"710px",position:"absolute"}}></img>
      <p
        onClick={() => {
          handleResultClick();
        }}
        style={{
          position: "absolute",
          left: "83%",
          top: "80%",
          fontSize: "50px",
          cursor: "pointer",
        }}
      >
        결과보기
      </p>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "5%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <SelectOPtion
          name="1. 지역"
          options={[
            "경기",
            "강원",
            "충남",
            "충북",
            "전남",
            "전북",
            "경남",
            "경북",
            "제주",
          ]}
          onSelect={setRegion}
        />
        <SelectOPtion
          name="2. 토양 면적 (ha)"
          value={soilarea}
          onInput={setSoilArea}
        />
        <SelectOPtion name="3. 토양 pH" value={ph} onInput={setPh} />
        <SelectOPtion
          name="4. 질소 포화도"
          options={["부족", "충분"]}
          onSelect={setNitrogen}
        />
        <SelectOPtion
          name="5. 이전 재배 작물"
          options={[
            "감자",
            "고구마",
            "고추",
            "마늘",
            "무",
            "봄배추",
            "여름배추",
            "가을배추",
            "상추",
            "가을시금치",
            "겨울시금치",
            "옥수수",
            "토마토",
          ]}
          onSelect={setPreCrop}
        />
        <SelectOPtion
          name="6. 작부 가능 시기"
          options={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ]}
          onSelect={setPlantStartMonth}
          onSelect2={setPlantEndMonth}
        />
        <SelectOPtion
          name="7. 기존 병해충"
          options={[
            "역병",
            "진딧물",
            "선충",
            "나방류",
            "노균병",
            "탄저병",
            "덩굴쪼김병",
            "무름병",
            "뿌리혹병",
            "검은썩음병",
          ]}
          onSelect={setPestHistory}
        />
      </div>
    </div>
  );
}
