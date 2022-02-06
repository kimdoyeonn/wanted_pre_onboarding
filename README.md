# wanted_pre_onboarding

####

## Toggle

### 구현 방법

- 버튼의 on/off에 따라 보여지는 배경, 버튼의 위치, 텍스트가 달라져야 하므로 버튼의 on/off를 `boolean` 값의 상태로 관리
- 버튼을 클릭할 때마다 상태값이 `true` -> `false`, `false` -> `true`로 바뀌어야 하기 때문에 현재 상태값의 반대로 바뀌주는 일을 하는 함수를 하나 만들어 사용
- 삼항 연산자를 이용하여 상태값에 따라 버튼의 위치, 배경색, 텍스트를 다르게 보여줌
- toggle 상태에 따라 버튼모양 변화가 자연스럽도록 `transition`을 사용함
- 토글의 on/off와 활성/비활성를 props로 전달받아 보여주도록 구현함

### 사용 방법

| props   | type                 | required |
| ------- | -------------------- | -------- |
| checked | boolean \| undefined |          |
| disable | boolean \| undefined |          |

```jsx
<Toggle checked disable />
```

####

---

## Modal

### 구현 방법

- 모달의 가려짐, 보임을 관리하기 위해서 `boolean` 값의 상태를 만듦
- 모달을 여는 경우와 닫는 경우가 Open Modal 버튼을 클릭했을 경우, 모달의 X를 클릭했을 경우로 분리되어 있으므로 모달을 여는 일을 하는 함수와 닫는 일을 하는 함수를 따로 만듦
- 삼항 연산자를 이용하여 상태값에 따라 모달이 화면에 보이거나, 사라지도록 구현함
- 버튼의 내용과 모달의 내용을 props로 전달받아 보여주도록 구현함

### 어려웠던 점

- 모달 창 밖을 클릭했을 경우에도 모달 닫히기
  - _해결_
    - useRef를 이용하여 해결
    - 모달 창이 화면에 보이는 상태에서 클릭이 일어났을 때, useRef를 이용해서 클릭된 요소가 모달 창 밖인지 안인지 확인하여 창을 닫음

### 사용 방법

|               | type   | required |
| ------------- | ------ | -------- |
| openerMessage | string | required |
| modalMessage  | string | required |

```jsx
<Modal openerMessage='Open Modal' modalMessage='HELLO CODESTATES!' />
```

####

---

## Tab

### 구현 방법

- 탭의 개수가 변하더라도 수정을 최소화하기 위해 탭의 이름과 내용을 객체의 배열로 props로 전달받아 화면에 보여줌
- 선택된 탭의 내용만 보여주기 위해 선택된 탭의 인덱스를 상태로 만듦
  - 인덱스 상태를 이용하여 선택된 탭과 선택되지 않은 탭의 css를 다르게 적용함
  - 인덱스 상태를 이용하여 선택된 탭의 내용을 화면에 보여줌

### 사용 방법

|          | type     | required |
| -------- | -------- | -------- |
| contents | object[] | required |

```jsx
const tabData = [
  { name: 'Tab1', details: 'Tab menu ONE' },
  { name: 'Tab2', details: 'Tab menu TWO' },
  { name: 'Tab3', details: 'Tab menu THREE' },
];

<Tab contents={tabData} />;
```

###

---

## Tag

### 구현 방법

- 태그를 화면에 보여주고, 추가, 삭제를 편하게 하기 위해 문자열 배열 형태의 상태로 관리함
- **보여주기**: 상태에 저장된 태그 배열을 `map`으로 화면에 보여줌
- **추가**: `input`에 값을 입력하고 엔터를 누르면 상태 배열에 입력한 값을 추가함 (이미 같은 값이 있는 경우에는 추가하지 않음)
- **삭제**: x 버튼이 클릭되면 해당 태그를 `splice`를 이용하여 삭제함
- 태그가 많아질 경우, css가 깨지지 않도록 다음 줄로 넘어가게 만듦

### 어려웠던 점

- **input에 포커스가 됐을 때 바깥 div의 border 색을 바꾸기**  
  -> `:focus-within` 의사 클래스 사용
- **태그가 많아지면 태그 모양이 깨져서 글씨가 제대로 안 보임**  
  -> `flex-wrap: wrap`으로 공간이 모자르면 다음 줄로 넘어가게 만듦
- **input의 너비가 작아서 클릭을 해도 focus가 안 되는 영역이 존재함**  
  -> `flex-grow: 1`로 input의 너비를 tag를 제외한 나머지 공간을 채우게 키움
- **태그를 지우는 방식**
  - _문제_  
    지우려는 태그의 인덱스를 이용하여 `slice`로 왼쪽을 자르고 오른쪽을 잘라서 이어붙이는 방법으로 구현했는데 배열을 2번 순회하는 것이 비효율적인 것 같음
  - _해결_  
    `splice`를 이용하여 인덱스 기준 1개를 잘라내는 방법으로 구현

### 사용 방법

```jsx
<Tag />
```

####

---

## AutoComplete

### 구현 방법

- 검색어를 입력했을 때만 자동완성단어들을 보여주기 위해 `boolean` 형태의 상태를 만듦
- 문자를 입력할 때마다 자동 완성 단어를 보여주기 위해 `input`에 입력되는 문자열을 상태로 만듦
- 입력한 문자열에 따라 화면에 보여줄 단어들을 관리하고, 자동완성할 수 있는 단어가 없을 경우를 다루기 위해 검색된 단어 배열을 상태로 만듦
- 자동완성에 사용되는 단어는 더미데이터로 저장함
- `input`에 값이 입력될 때마다 더미데이터에 `filter`를 이용하여 입력된 문자열을 포함하는 단어를 걸러서 화면에 보여줌
- `input`에 입력값이 있고, 자동완성 단어가 1개 이상이면 자동완성 단어를 보여줌
- 결과로 화면에 보이는 자동완성 단어에 클릭 이벤트가 발생하면 `input`의 값이 해당 단어로 바꿈
- x 버튼을 클릭할 경우 `input`의 값을 빈 문자열로 바꿈

### 어려웠던 점

- **검색에 사용할 단어들**  
  -> 문자열 배열을 더미데이터로 만들어놓음
- **입력된 문자열이 포함된 단어만 보여주기**  
  -> 화면에 보여 줄 단어들만 저장된 배열을 상태로 만들어 관리함

### 사용 방법

|      | type     | required |
| ---- | -------- | -------- |
| data | string[] |          |

```jsx
const autoCompleteData = [
  'antique',
  'refurbished',
  'vintage',
  'rustic',
  '중고A급',
  '중고B급',
];

<AutoComplete data={autoCompleteData} />;
```

####

---

## ClickToEdit

### 구현방법

- 이름과 나이 둘 다 같은 형식으로 이루어져 있으므로 따로 컴포넌트로 만들어줌
- 값을 보여주는 `span`을 보여줄지, 값을 입력할 `input`을 보여줄지를 boolean 값의 상태로 관리
- 새로 변경될 값을 따로 저장해놓기 위해 상태로 만들어 관리
- `span`에 클릭이벤트가 발생할 경우 `input`이 보이고, useRef를 이용하여 `input`에 커서가 올라가게 만듦
- `input`에서 엔터를 누르거나(`e.key === 'Enter`) 커서가 사라지면(`blur`) 화면에 보이는 값이 새로운 값으로 변경되게 만듦

### 어려웠던 점

- **input에 커서 올리기**

  - _문제_

    수정하려고 클릭했을 때

    1. `input`이 보이고,
    2. `useRef`로 `input`에 `focus`

    를 해야하는데 2가 안 됨

    => `ref.current`가 `null`이라고 오류

  - _해결_

    - 상태 변경으로 인한 리랜더링이 발생하기 전에 `input`에 `focus`를 주려고 해서 에러가 발생하는 것 같음

    - `useEffect`를 이용해서 `focus`를 리랜더링 이후에 실행하도록 변경하여 해결

- **엔터를 누르거나 포커스가 벗어났을 때 값이 저장**

  - _문제_

    `input`에 `ClickToEdit` 컴포넌트가 가진 상태를 연결했더니 값이 입력 중에도 수정됨

  - _해결_

    `ClickToEdit` 컴포넌트 내부에 따로 만든 컴포넌트 안에서 새로운 값을 위한 상태를 따로 만들어 관리하고, 저장할 때만 `ClickToEdit` 컴포넌트의 상태가 변경되도록 수정

### 사용 방법

```jsx
<ClickToEdit />
```

####

# 실행 방법

- 터미널에서 아래 명령어 순서대로 입력

  ```bash
  git clone git@github.com:kimdoyeonn/wanted_pre_onboarding.git
  cd ./wanted_pre_onboarding/custom-component
  npm install
  npm run start
  ```

- 브라우저 주소창에 `localhost:3000` 입력하여 이동
