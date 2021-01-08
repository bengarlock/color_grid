const root = document.getElementById("root")

document.addEventListener("DOMContentLoaded", () => {

    class renderDivs {

        constructor(number) {
            this.number = number
        }

        get divs()  {
            return this.generateDivs
        }

        get generateDivs() {
            let divArray = []
            let index = 0
            while (index <= this.number) {
                const divObject = document.createElement("div")
                divObject.className = "color-box"
                divObject.style.backgroundColor = generateRandomColor()

                divArray.push(divObject)
                index++
            }
            return divArray
        }
    }

    const genRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const generateRandomColor = () => {
        const colors = [
            "#003f5f", "#4961b3",
            "#71749f", "#1c267a",
            "#53a2ca", "#6e7de2",
            "#19075f", "#294983",
            "#4f34a5", "#2e385d",
            "#075075", "#49518d",
            "#00a6ff", "#2a359b",
            "#125456", "#40355b",
        ]
        const number = genRandomNumber(0, colors.length)
        return colors[number]
    }

    const changeBackgrounds = () => {
        const boxes = document.querySelectorAll("div.color-box")
        let index = 0
        while (index < boxes.length / 4) {
            let box = boxes[genRandomNumber(0, boxes.length)]
            box.style.backgroundColor = generateRandomColor()
            index++
        }
    }

    async function runBackgroundChanges() {
        let index = 0
        while (index < Infinity) {
            await new Promise(r => setTimeout(r, 1000));
            changeBackgrounds()
            index++
        }
    }

    const divs = new renderDivs(2000)
    divs.divs.map(div => root.appendChild(div))

    runBackgroundChanges()



})