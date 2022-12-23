createBindedVariable("counter");
counter = 0;

function updateCounter(val) {
  counter += val;
}

function createBindedVariable(targetId) {
  let newVal = null;

  Object.defineProperty(window, targetId, {
    set: value => {
      newVal = value;

      let targetRef = document.getElementById(targetId);
      targetRef.innerHTML = value;
    },
    get: () => {
      return newVal;
    }
  });
}
