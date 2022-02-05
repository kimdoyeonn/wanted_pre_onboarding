# wanted_pre_onboarding

## Toggle

- 버튼의 on/off에 따라 보여지는 배경, 버튼의 위치, 텍스트가 달라져야 하므로 버튼의 on/off를 boolean 값의 상태로 관리
  ```jsx
  const [toggle, setToggle] = useState(false);
  ```
- 버튼을 클릭할 때마다 상태값이 true -> false, false -> true로 바뀌어야 하기 때문에 현재 toggle 값의 반대로 바뀌주는 일을 하는 함수를 만들어 사용
  ```jsx
  const handleToggle = () => {
    setToggle(!toggle);
  };
  ```
- 삼항 연산자를 이용하여 toggle 상태(true/false)에 따라 버튼의 위치, 배경색, 텍스트를 다르게 보여줌
- toggle 상태에 따라 버튼모양 변화가 자연스럽도록 transition을 사용함

## Modal

- 모달의 가려짐, 보임을 관리하기 위해서 이를 boolean 값의 상태로 만듦
  ```jsx
  const [isShow, setIsShow] = useState(false);
  ```
- 모달을 여는 경우와 닫는 경우가 Open Modal 버튼을 클릭했을 경우, 모달의 X를 클릭했을 경우로 분리되어 있으므로 모달을 여는 일을 하는 함수와 닫는 일을 하는 함수를 따로 만듦

  ```jsx
  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };
  ```

- [x] x 버튼을 클릭했을 경우 모달 닫히기
- [ ] 모달 창 밖을 클릭했을 경우 모달 닫히기

- 삼항 연산자를 이용하여 isShow 값에 따라 모달이 화면에 보이거나, 사라지도록 css를 적용함

## Tab

- 탭의 개수가 변하더라도 수정을 최소화하기 위해 탭의 이름과 내용을 객체의 배열로 관리

  ```jsx
  const contents = [
    { name: 'Tab1', message: 'Tab menu ONE' },
    { name: 'Tab2', message: 'Tab menu TWO' },
    { name: 'Tab3', message: 'Tab menu THREE' },
  ];
  ```

- 현재 화면에 보여줄 탭은 contents 배열의 인덱스를 값으로 가지는 상태로 관리

  ```jsx
  const [select, setSelect] = useState(0);
  ```

- 탭의 인덱스와 select의 값을 비교하여 삼항연산자로 선택된 탭의 css를 다르게 함
- 보여주는 내용은 select에 담긴 선택된 탭의 인덱스를 이용하여 화면에 보여줌

## Tag

- input에 포커스가 됐을 때 바깥 div의 border 색을 바꾸기
  -> `:focus-within` 의사 클래스 사용
- 태그가 많아지면 태그 모양이 깨져서 글씨가 제대로 안보임
  -> `flex-wrap: wrap`으로 공간이 모자르면 다음 줄로 넘어가게 만듦
- input의 너비가 작아서 클릭을 해도 focus가 안되는 부분이 존재함
  -> `flex-grow: 1`로 input의 너비를 tag를 제외한 나머지 공간을 채우게 키움
- 태그를 지우는 방법
  1. 처음엔 지우려는 태그의 인덱스를 이용하여 `slice`로 왼쪽을 자르고 오른쪽을 잘라서 이어붙이는 방법으로 구현
  2. 두 번을 잘라야하는 1번의 방법이 비효율적인 것 같아서 `splice`를 이용하여 인덱스 기준 1개를 잘라서 구현함

## AutoComplete

- 자동완성될 단어들
  -> 문자열 배열을 더미데이터로 만들어놓음
- 입력된 문자를 포함하는 단어 보여주기
  -> 포함하는 단어 배열만 저장되는 상태를 새로 만들어 관리함

## ClickToEdit
