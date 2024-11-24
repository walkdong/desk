window.addEventListener("scroll", function () {
    console.log("succeed")
    var scrollH = this.window.scrollY
    var header = this.document.querySelector("header")
    if (scrollH > 800) {
        console.log("succeed")
        header.style.backgroundColor = "rgba(255, 255, 255, 1)"
    }
})

window.addEventListener("scroll", function () {
    console.log("succeed")
    var scrollH = this.window.scrollY
    var header = this.document.querySelector("header")
    if (scrollH <= 800) {
        console.log("succeed")
        header.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    }
})








function scrollCloseFunction() {
    var scrollH = this.window.scrollY

    if (scrollH > 150) {
        this.document.querySelector("header").style.transform = "translateY(-100%)"
    }
    else if (scrollH <= 150) {
        this.document.querySelector("header").style.transform = "translateY(0)"
    }


    function mousemoveCloseFunction(event) {
        var header = this.document.querySelector("header")
        if (event.clientY <= 50 && scrollH > 150) {
            this.document.querySelector("header").style.transform = "translateY(0)"
        }
        else if (event.clientY > 50 && scrollH > 150) {
            this.document.querySelector("header").style.transform = "translateY(-100%)"
        }

    }
    window.addEventListener("mousemove", mousemoveCloseFunction)




}
window.addEventListener("scroll", scrollCloseFunction)


