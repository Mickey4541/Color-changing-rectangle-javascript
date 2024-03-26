
var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insiderectanglevalue = details.clientX - rectangleLocation.left;

    if (insiderectanglevalue < rectangleLocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insiderectanglevalue);
        gsap.to(rect, {
            backgroundColor : `rgb(${redcolor},0,0)`,
            ease: "power4",
        });
    } else {
        var greencolor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insiderectanglevalue);
        gsap.to(rect, {
            backgroundColor : `rgb(0,${greencolor},0)`,
            ease: "power4",
        });
    }
});

rect.addEventListener("mouseleave", function() {
    gsap.to(rect, {
        backgroundColor: "white",
    });
});
