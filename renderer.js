async function testPing() {
  const response = await window.electronAPI.ping();
  console.log(response); // should print 'pong'
}

testPing();

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const counterValue = document.getElementById("counter-value");

incrementBtn.addEventListener("click", async () => {
  const updatedValue = await window.electronAPI.updateCounter("increment");
  counterValue.textContent = updatedValue;
});

decrementBtn.addEventListener("click", async () => {
  const updatedValue = await window.electronAPI.updateCounter("decrement");
  counterValue.textContent = updatedValue;
});
