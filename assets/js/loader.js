var coniser = {
    menu: null,
    menuHide: true,
    screenY: 0,
    menuStarted: false,
    menuColorTime: 0.6,
    showedProject: 0,
}

document.querySelector("#hamb-menu").onclick = () => {
    menuHideShow();
};
/*Scrolling*/
window.onscroll = () => {
    coniser.screenY = window.scrollY;
    console.log(coniser.screenY)
    if (coniser.screenY > 100) {
        showProjects();
    }
};

const menuHideShow = () => {
    if (!coniser.menuStarted) {
        coniser.menu = gsap.to("#nav-mobile", {
            autoAlpha: 1,
            duration: 0.25
        });
        gsap.set("#nav-mobile", {
            className: "+=mob-menu-coniser"
        });
        coniser.menuStarted = true;
        coniser.menuHide = false;
    } else {
        if (coniser.menuHide) {
            coniser.menuHide = false;
            coniser.menu.play();

        } else {
            coniser.menuHide = true;
            coniser.menu.reverse();
        }
    }
};


const showInformation = () => {
    var t1 = gsap.timeline();
    t1.from("#right-information", {
            x: 80,
            duration: 1,
            delay: 0.5
        })
        .from("#left-information", {
            autoAlpha: 0,
            x: -150,
            duration: 1
        })
}
const showProjects = () => {
    gsap.to("#project-scroll", {
        duration: 2.5,
        x: -400
    });

}
const starting = () => {
    showInformation();
}

starting();