---

# Khudadak — 윤작·다모작 추천 시뮬레이터

> **“입력 7가지로 TOP3 작물을 즉시 추천하고, 왜 그런지 근거까지 보여준다.”**
> Region/토양 pH/질소 상태/면적/이전 작물/작부 시기/병해충 이력을 기반으로 **점수화**하여 추천합니다.

## 📋 프로젝트 개요

**Khudadak**은 사용자가 입력한 재배 조건을 바탕으로 **윤작·다모작에 적합한 작물 TOP3**를 추천하고,
각 항목별 가산/감점 근거를 **브레이크다운**으로 시각화하는 웹 서비스입니다.

* 입력: 지역, 토양 pH, 질소 포화도, 토양 면적, 이전 재배 작물, 작부 가능 시기(월), 병해충 이력
* 출력: 작물 **TOP3 카드** + 상세 화면의 **근거(브레이크다운)**

---

## ✨ 핵심 기능

* **추천 API**: `POST /api/crops/recommend` — 점수 내림차순 정렬 결과 반환
* **점수 엔진(7항목 가중합)**

  1. 지역 적합성, 2) pH 범위 적합성, 3) 질소 상태(고정/잎채소 보정),
  2. 뿌리 다양성, 5) 병해충 회피(하한 0), 6) 작부 시기 겹침, 7) 생육기간 다양성
* **UI**: 입력 → 결과(카드 스택) → **자세히**(근거 상세) 3단 구성

---

## 🏗️ 기술 스택

**Backend**

* Java 17, Spring Boot 3.4.5
* Spring Web / Spring Data JPA / Validation / Lombok
* MySQL 8.x

**Frontend**

* React + Vite (JS)
* CSS(커스텀), 카드 스택/상세 전용 컴포넌트

---

## 🧭 화면 구성 & 흐름

* **Slide**: 입력 폼(지역/토양 pH/질소/면적/이전작물/작부시기/병해충) → `fetch('/api/crops/recommend')`
* **Result**: 상위 3개만 추려 카드 스택으로 표시
* **Detail**: 각 작물의 **breakdown**(한글 키)로 가산/감점 사유 명시

간단 흐름

```
[사용자 입력] → [FE Slide.jsx] → POST /api/crops/recommend → [BE ScoreCalculator]
    → [점수/근거 계산] → [FE ResultScreen/CardStack] → [FE Detail(브레이크다운)]
```

---

## 🗂️ 폴더/구성(핵심 파일)

**Backend (Java/Spring)**

* `KhudadakApplication.java` — 엔트리포인트
* `controller/CropController.java` — `/api/crops/recommend`
* `service/CropService.java` — 전체 작물 조회 → 점수 계산 → 정렬
* `util/ScoreCalculator.java` — **점수 엔진**
* `dto/CropRequestDto.java` / `dto/CropResponseDto.java`
* `model/Crop.java` / `Pest.java` / `Region.java` (JPA 엔티티)
* `repository/CropRepository.java` 등
* `config/WebConfig.java` — **CORS 설정**
* `application.properties` — DB/CORS/hibernate 설정

**Frontend (React/Vite)**

* `main.jsx` / `App.jsx` — 라우팅/화면 전환
* `Slide.jsx` — 입력/POST 호출
* `ResultScreen.jsx` — 결과 카드 스택 진입
* `CardStack.jsx` — 카드 스택 UI
* `Detail.jsx` — 브레이크다운 표시
* `index.css` / 컴포넌트별 `.css` — 폰트/애니메이션/레이아웃

> ℹ️ 이미지/폰트는 `src/assets/images/` 기준으로 import. 폴더명이 `asset`인 경우 경로를 맞춰주세요.

---

## 🔌 API 명세

### POST `/api/crops/recommend`

**요청(JSON)**

```json
{
  "region": "Chungcheong",
  "soilPH": 6.4,
  "nitrogenStatus": "부족",
  "soilArea": 1200,
  "previousCrop": "콩",
  "availablePeriod": [3, 4, 9],
  "pests": ["진딧물", "혹명나방"]
}
```

**응답(JSON)**

```json
[
  {
    "cropName": "감자",
    "score": 57,
    "breakdown": {
      "지역 적합성": "+10",
      "pH 적합성": "+15",
      "질소 고정 효과": "+15",
      "뿌리 다양성": "+10",
      "병해충 회피": "+5",
      "작부 시기 겹침": "+10",
      "생육 기간 다양성": "+8"
    }
  }
]
```

> 프론트는 응답 배열을 **점수 내림차순 정렬 후 상위 3개**만 사용합니다.

---

## 🧱 도메인 모델(요약)

**Crop**

* `name`, `type`, `rootType`, `nitrogenFixing(boolean)`
* `phMin`, `phMax`, `plantingMonth`, `harvestingMonth`, `growingDays`
* `@ManyToMany` → `pests`, `regions`
* `getCompatibleRegions()` 제공

**Pest**

* `pestName`, `riskLevel`
* `@ManyToMany(mappedBy="pests")`

**Region**

* `regionName`
* `@ManyToMany(mappedBy="regions")`

---

## ⚙️ 환경 설정

`application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/khudadak?serverTimezone=UTC&useSSL=false
spring.datasource.username=springuser
spring.datasource.password=Springpassword!123
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# (옵션) CORS - 프로퍼티 기반
spring.web.cors.allowed-origin-patterns=http://54.82.112.98
spring.web.cors.allowed-methods=*
spring.web.cors.allowed-headers=*
spring.web.cors.allow-credentials=true
```

`WebConfig.java` (자바 기반 CORS — **/api/** 전용)

```java
registry.addMapping("/api/**")
        .allowedOrigins("http://54.172.198.134", "http://localhost:3000")
        .allowedMethods("*")
        .allowedHeaders("*")
        .allowCredentials(true);
```

> ✅ **권장**: CORS 허용 도메인은 **한 곳에서만 관리**(자바 or 프로퍼티).
> `allowCredentials=true`일 땐 `*` 와일드카드 금지, **정확한 도메인**을 지정하세요.

---

## ▶️ 실행 방법

### Backend

```bash
# JDK 17, MySQL 8.x 필요 (DB: khudadak)
./gradlew bootRun
# 또는
./gradlew build
java -jar build/libs/*.jar
```

### Frontend

```bash
# Node 18+ 권장
npm install
npm run dev
# 기본: http://localhost:5173
```

> `Slide.jsx`의 API 주소(예: `http://54.172.198.134:8080`)를 **로컬/운영에 맞게 변경**하세요.
> Vite 환경변수를 쓰려면 `import.meta.env.VITE_API_BASE_URL`로 치환하는 것을 추천합니다.

---

## 🚀 배포(요약)

* **단일 EC2**: Nginx 리버스 프록시(정적/FE 서빙, `/api/**`는 Spring으로 프록시)
* **시크릿 분리**: DB 계정·CORS 도메인·포트 등은 **환경변수/SSM**로 관리
* **DDL 전략**: 운영은 `ddl-auto=validate` + **Flyway/Liquibase** 권장
* **자원 계획**: 저사양 인스턴스는 OOM 가능 → **스케일 업**/JVM 옵션/정적 캐싱 고려

---

## 🧰 트러블슈팅

* **CORS 403**: 허용 도메인/IP가 **WebConfig vs properties**에서 불일치 → 한쪽으로 통일
* **이미지/폰트 로드 실패**: `src/assets/...` 경로와 실제 폴더명이 다르면 import 실패 → 경로 통일
* **상세 화면 스크롤 잘림**: 전역 `overflow: hidden`이 있으면 길이 긴 상세에서 잘림 → 화면별로 제한 적용

---

## ✅ TODO

* [ ] CORS 허용 도메인 운영 프로필로 분리
* [ ] 마이그레이션 도구 도입(Flyway)
* [ ] Vite 환경변수(`VITE_API_BASE_URL`) 적용
* [ ] 관측성(응답시간/에러율/메모리) 대시보드 추가
* [ ] 작물/병해충 초기 데이터 시딩 스크립트

---

## 📄 라이선스/문의

* 교육/연구 목적의 데모 프로젝트입니다.
* 이슈/문의는 레포지토리 Issues를 이용해 주세요.

---
