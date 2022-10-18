// ===================================================================== //
//                              темная тема                              //
let isDark = true;

function changeTheme(isToggle) {
    if (isDark) {
        document.body.classList.toggle("lightTheme");
    } else {
        document.body.classList.toggle("lightTheme");
    }
    
    if (isBlur) {
        isBlur = false;
        const container = document.querySelector(".container");
        container.style.filter = "none";
    }

    if (isToggle) {
        isDark = !isDark;
    }
}// ===================================================================== //




// ===================================================================== //
//                                 блюр                                  //
let isBlur = false;

blur = () => {
    document.querySelector(".container").style.transition = "filter 0.6s linear";
    document.querySelector(".container").style.filter = "blur(8px)";
    isBlur = true;
}

document.querySelector(".logo").addEventListener("click", function () {
    blur();
});

document.querySelector(".nav-item-home").addEventListener("click", function () {
    blur();
});

document.querySelector(".nav-item-solution").addEventListener("click", function () {
    blur();
});

document.querySelector(".nav-item-clients").addEventListener("click", function () {
    blur();
});

document.querySelector(".nav-item-contact").addEventListener("click", function () {
    blur();
});
// ===================================================================== //




// ===================================================================== //
//                            скролл события                             //
function onScroll() {
    window.addEventListener("scroll", function() {
        let y = window.pageYOffset;
        if (y > 100) {
            document.querySelector("header").classList.add("scroll");
        } else {
            document.querySelector("header").classList.remove("scroll");
        }
    });
    const height = document.querySelector("header").style.height;
    document.body.style.top = height * 2 + "px";
}

window.onload = function () {
    onScroll();
    changeTheme(false);
};

window.onresize = function () {
    onScroll();
};
// ===================================================================== //




// ===================================================================== //
//                    наблюдатели вылета при скролле                     //
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add("smooth-scroll");
        }
    });
}

function subscribeAnimation(sub) {
    for (let elem of sub) {
        observer.observe(elem)
    }
}

let options = {
    treshhold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll(".card");
subscribeAnimation(elements);

elements = document.querySelectorAll(".smooth2");
subscribeAnimation(elements);
// ===================================================================== //




// ===================================================================== //
//                           расширение хэдера                           //
// ===================================================================== //




// ===================================================================== //
//                               график                                  //
document.addEventListener("DOMContentLoaded", function () {
    // Create liteChart.js Object
    settings = {};
    let d = new liteChart("chart", settings);

    // Set labels
    d.setLabels(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);

    // Set legends and values
    d.addLegend({ "name": "Day", "stroke": "#CDDC39", "fill": "#fff", "values": [100, 200, 450, 400, 500, 300, 700, 800, 601, 705, 604, 803] });
    d.addLegend({ "name": "Night", "stroke": "#3b95f7", "fill": "#fff", "values": [200, 150, 240, 180, 150, 240, 230, 300, 200, 150, 270, 200] });

    // Inject chart into DOM object
    let div = document.getElementById("your-id");
    d.inject(div);

    // Draw
    d.draw();
});
// ===================================================================== //




document.querySelector("list-circle1").addEventListener("mouseenter", () => {
    document.querySelector("hero-with-list-pic").style.src = "~/img/models-1-placeholder.png";
    console.log(document.querySelector("hero-with-list-pic").style.src);
});

document.querySelector("list-circle2").addEventListener("mouseenter", () => {
    document.querySelector("hero-with-list-pic").style.src = "~/img/models-2-placeholder.png";
});

document.querySelector("list-circle3").addEventListener("mouseenter", () => {
    document.querySelector("hero-with-list-pic").style.src = "~/img/models-3-placeholder.png";
});