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
