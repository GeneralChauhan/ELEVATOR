const el = document.getElementById("elevator");
const floor1 = document.getElementById("floor1");
const floor2 = document.getElementById("floor2");
const floor3 = document.getElementById("floor3");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

// document.getElementById("elevator").style.top = "227px";
// console.log(floor);
let topPos = 0;
let floor1top= floor1.offsetTop;
let floor2top= floor2.offsetTop;
let floor3top= floor3.offsetTop;

const elUp = () => {
  let elevatorTop= el.offsetTop;
  if (elevatorTop===  floor3top) {
    alert("You are already on the top floor");
    topPos = floor3top;
  } else if (elevatorTop=== floor2top) {
    topPos = floor2top;
  } else if (elevatorTop=== floor1top) {
    topPos = floor1top;
  }
  document.getElementById("elevator").style.top = topPos + "px";
};

const elDown = () => {
  let elevatorTop= el.offsetTop;
  if (elevatorTop=== floor3top) {
    topPos = 227;
  } else if (elevatorTop=== floor2top) {
    topPos = 433;
  } else if (elevatorTop=== floor1top) {
    alert("You are already on the Ground Floor");
    topPos = 433;
  }
  document.getElementById("elevator").style.top = topPos + "px";
};
