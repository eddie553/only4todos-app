## 중앙대 전자전기공학부 김나은(20173639) 종합설계

## 지도교수님 : 송오영 교수님

# only 4 todos-application

본 프로젝트에서는 todo-application에서 사용자의 todo 완료률과 사용 기간을 높이기 위한 방법을 고안하고자 하였다. 따라서 리액트를 활용하여 web기반의 todo-application에 추가 기능을 더하여 구현하였다. 기본적인 todo-application의 할 일 추가, 삭제, 완료 기능에서 할 일의 개수를 4개로 제한하고 다섯 번째 할 일을 추가하고자 할 때 경고 팝업이 나타나게 한다. 또한, 완료한 할 일의 개수에 맞추어 껍질이 까진 오렌지의 이미지가 조건부로 렌더링 되도록 하며, 4개의 할 일을 모두 완료하였을 때 오렌지 주스의 이미지가 렌더링되어 사용자가 할 일 성취감을 느낄 수 있도록 한다. 앞에서 언급한 기능을 포함한 todo-application은 children으로 내부 JSX를 props로 받아와 렌더링하는 TodoTemplate, 조건부 렌더링을 하는 TodoTitle과 TodoListItem, todo 객체를 추가하는 TodoInsert, todos 배열의 요소를 받아와 각각의 TodoListItem 컴포넌트로 변환하는 TodoList로 이루어져 only 4 todos web-application을 구현하였다.

### 사용한 라이브러리

- 리액트
- node-sass@4.14.1
- classnames
- react-icons


### 컴포넌트 구성
  - TodoTemplate.js : 화면을 가운데에 정렬, 앱 타이틀 보여줌 (children으로 내부 JSX를 props로 받아와 렌더링)
  - TodoInsert.js : 입력 및 추가 (state를 통해 인풋 상태 관리)
  - TodoListItem.js : 각 할 일 항목에 대한 정보 (todo 객체를 props로 받아와 상태에 따라 다른 UI )
  - TodoList.js : todos배열을 받아와 map 함수를 이용하여 TodoListItem 컴포넌트로 변환하여 보여줌 (props로 todos 배열을 받아옴)
  - TodoTitle.js : numberOfChecked로 완료된 할 일 개수를 받아와 개수에 따른 타이틀 오렌지 이미지를 조건부 렌더링


### src의 이미지는 본인이 직접 제작함

#### 참고문헌 : 해당 프로젝트는 '리액트를 다루는 기술' 개정판
