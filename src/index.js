import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";

// reducer 생성 후 제공 -> reducer 는 state 를 modify 하는 function 이어야함
// action : Redux 에서 function 을 부를 때 쓰는 두번째 인자
const cntModifier = (cnt = 0, action) => {
  console.log("cnt :", cnt, ", action :", action);

  switch (action.type) {
    case PLUS:
      return cnt + 1;

    case MINUS:
      return cnt - 1;

    default:
      return cnt;
  }
};

// store 생성 -> reducer 를 필요로 함
const cntStore = createStore(cntModifier);

const onChange = () => {
  number.innerText = cntStore.getState();
};

// store 내 state 의 변화를 감지
cntStore.subscribe(onChange);

// dispatch 와 함께 reducer 로 action 을 보내준다
const handlePlus = () => {
  cntStore.dispatch({ type: PLUS });
};

const handleMinus = () => {
  cntStore.dispatch({ type: MINUS });
};

console.log(cntStore.getState());

/*
let cnt = 0;
number.innerText = cnt;

const updateText = () => {
  number.innerText = cnt;
};

const handlePlus = () => {
  cnt = cnt + 1;
  updateText();
};

const handleMinus = () => {
  cnt = cnt - 1;
  updateText();
};
*/

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
