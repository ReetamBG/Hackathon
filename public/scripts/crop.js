const cropReq = document.querySelector(".crop-requirements")
const climateBtn = document.querySelector("#climate")

const riceClimate = {
    climate: "Hot and High Humid",
    avgTemp: "29 ºC",
}

climateBtn.addEventListener("click", () => {
    cropReq.innerHTML("")
})