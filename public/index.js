document.getElementById("mode").addEventListener("click", () => {
  document.body.classList.toggle("dark")
})

document
  .querySelectorAll(`nav a[href^="${location.pathname.slice(0, -1)}"]`)
  .forEach((el) => {
    el.classList.add("active")
  })

document.addEventListener("scroll", () => {
  document.querySelector("footer").style.opacity = 1
})

document.querySelectorAll("h3").forEach((el) =>
  el.addEventListener("click", () => {
    console.log(el.id)
    location.hash = el.id
  }),
)

document.querySelectorAll("h4").forEach((el) =>
  el.addEventListener("click", () => {
    console.log(el.id)
    location.hash = el.id
  }),
)
