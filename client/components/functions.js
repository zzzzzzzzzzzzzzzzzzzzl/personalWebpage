export function startResizing(e) {
  e.preventDefault();

  const resizableDiv = document.getElementById("resizableDiv");
  let prevX = e.clientX;
  let prevY = e.clientY;
  let n = 0;

  function handleMouseMove(e) {
    n++;
    resizableDiv.style.backgroundColor = "rgb(5,5,5)";
    // const width = resizableDiv.offsetWidth + (e.clientX - prevX);
    // const height = resizableDiv.offsetHeight + (e.clientY - prevY);
    // resizableDiv.style.width = `${width}px`;
    // resizableDiv.style.height = `${height}px`;
    // resizableDiv.style.backgroundColor = `rgb(0,0,${n})`;
    // resizableDiv.prevX = e.clientX;
    prevY = e.clientY;
  }

  function handleMouseUp() {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
}
