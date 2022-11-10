    var rateButtons = document.querySelectorAll("input[type='radio'][name='buttonGroup'] + label")
    var rateRadio = document.querySelectorAll("input[type='radio'][name='buttonGroup']")

    var submitBtn = document.querySelector("button[type='submit']")

    var ratePage = document.querySelector(".rating.container")
    var resultPage = document.querySelector(".thanks.container")
    
    console.log(submitBtn)

    var result = document.querySelector("span.value")
    console.log(result.innerHTML);



    Array.from(rateRadio).forEach((radio) => {
        radio.addEventListener("click", function () {
            selectedRate = this.value
            console.log(selectedRate);

            submitBtn.addEventListener("click", function () {
                ratePage.classList.remove("active")
                resultPage.classList.add("active")

                result.innerHTML = selectedRate                
            })
        })
    })
