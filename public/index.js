document.getElementById("mode").addEventListener("click", () => {
  document.body.classList.toggle("dark")
})

document
  .querySelectorAll(`nav a[href^="${location.pathname.slice(0, -1)}"]`)
  .forEach((el) => {
    el.classList.add("active")
  })
