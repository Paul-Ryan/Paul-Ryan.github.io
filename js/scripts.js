const me = document.querySelector('.header-image');
const walk = 15; // 15 px

function shadow(e) {
  // onj destructuring
  const { offsetWidth: width, offsetHeight: height } = me;
  let { offsetX: x, offsetY: y } = e;
  console.log(x, y);

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2)); // -50 to 50
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  me.style.boxShadow = `${xWalk}px ${yWalk}px 2px #111`;
}

document.querySelector('#welcome').addEventListener('mousemove', shadow);
