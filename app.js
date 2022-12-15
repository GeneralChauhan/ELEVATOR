const el = document.getElementById("elevator");
// document.getElementById("elevator").style.top = "227px";
// console.log(floor);
let topPos = 0;

const elUp = () => {
  let floor = el.offsetTop;
  if (floor === 20) {
    alert("You are already on the top floor");
    topPos = 20;
  } else if (floor === 227) {
    topPos = 20;
  } else if (floor === 433) {
    topPos = 227;
  }
  document.getElementById("elevator").style.top = topPos + "px";
};

const elDown = () => {
  let floor = el.offsetTop;
  if (floor === 20) {
    topPos = 227;
  } else if (floor === 227) {
    topPos = 433;
  } else if (floor === 433) {
    alert("You are already on the Ground Floor");
    topPos = 433;
  }
  document.getElementById("elevator").style.top = topPos + "px";
};
