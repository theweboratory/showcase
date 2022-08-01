document.querySelectorAll(".watch-control").forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    if (axisY === -280) {
        watchTopControl.classList.add('hide-control')
    } else {
        watchTopControl.classList.remove('hide-control');
    }

    if (axisY === 280) {
        watchBottomControl.classList.add('hide-control')
    } else {
        watchBottomControl.classList.remove('hide-control');
    }

    if (axisX === -280) {
      watchRightControl.classList.add("hide-control");
    } else {
      watchRightControl.classList.remove("hide-control");
    }

    if (axisX === 280) {
      watchLeftControl.classList.add("hide-control");
    } else {
      watchLeftControl.classList.remove("hide-control");
    }
}

watchTopControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${(axisY -= 70)}rem`;
    hideControl();
});

watchRightControl.addEventListener("click", () => {
    watchBands.style.marginRight = `${(axisX -= 70)}rem`;
    hideControl();
});

watchBottomControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${(axisY += 70)}rem`;
    hideControl();
});

watchLeftControl.addEventListener("click", () => {
    watchBands.style.marginRight = `${(axisX += 70)}rem`;
    hideControl();
});
