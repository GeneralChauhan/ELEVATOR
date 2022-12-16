const el = document.getElementById("elevator");
const floor1 = document.getElementById("floor1");
const floor2 = document.getElementById("floor2");
const floor3 = document.getElementById("floor3");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

// document.getElementById("elevator").style.top = "227px";
// console.log(floor);
let topPos = 0;
let floor1top = floor1.offsetTop;
let floor2top = floor2.offsetTop;
let floor3top = floor3.offsetTop;
topPos = floor3top;

if(el.offsetTop === floor1top){
  downBtn.disabled = true;
}
else if(el.offsetTop === floor1top){
  upBtn.disabled = true;
}
else{
  upBtn.disabled = false;
  downBtn.disabled = false;
};

const elUp = () => {
  let elevatorTop = el.offsetTop;
  if (elevatorTop === floor3top) {
    alert("You are already on the top floor");
    // upBtn.disabled = true;
    topPos = floor3top;
  } else if (elevatorTop === floor2top) {
    // upBtn.disabled = false;
    // downBtn.disabled = false;
    topPos = floor3top;
  } else if (elevatorTop === floor1top) {
    topPos = floor2top;
    // downBtn.disabled = true;
  }
  document.getElementById("elevator").style.top = topPos + "px";
};

const elDown = () => {
  let elevatorTop = el.offsetTop;
  if (elevatorTop === floor3top) {
    topPos = floor2top;
    // upBtn.disabled = true;
  } else if (elevatorTop === floor2top) {
    // upBtn.disabled = false;
    // downBtn.disabled = false;
    topPos = floor1top;
  } else if (elevatorTop === floor1top) {
    alert("You are already on the Ground Floor");
    console.log("gorund");
    topPos = floor1top;
    // downBtn.disabled = true;
  }
  el.style.top = topPos + "px";
};
