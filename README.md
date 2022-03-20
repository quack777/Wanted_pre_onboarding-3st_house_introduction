# **🛒집꾸미기 집소개**

## 😋개인 과제

-   배포주소 : [https://upbeat-varahamihira-ce3987.netlify.app/](https://upbeat-varahamihira-ce3987.netlify.app/)
-   Front-end: React(Funiction-Component), react-router-dom(V6), styled-components, JavaScript(ES6)

## **✔과제 구현 목록**

-   돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경

-   닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경

-   tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출

-   슬라이더

    -   하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
    -   선택된 가구는 선택되었으면 표시
    -   할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시

## **📆개발 기간**

-   기간: 2022년 1월 31일 (1일간)

## **🕹설치 및 시작하는 법**

1. git clone
2. npm install
3. npm run start

## **📃프로젝트 구조**

```
src
	│  index.js
	│  Router.js
	│
	├─components
	│  ├─HouseIntroduce
	│  │      HouseIntorduceHead.js
	│  │      HouseIntorduceSlide.js
	│  │      SetHouseIntroduce.js
	│  │      ToolTip.js
	│  │
	│  └─Nav
	│          Nav.js
	│
	├─pages
	│  └─Main
	│          Main.js
	│
	└─styles
			GlobalStyle.js
```
