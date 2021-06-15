var coniser = {
    menu: null,
    menuHide: true,
    menuDown: true,
    screenY: 0,
    menuStarted: false,
    showedSection: 0,
}

document.querySelector("#hamb-menu").onclick = () => {
    menuHideShow();
};
document.querySelector("#nav-mobile").onclick = () => {
    menuDownUp();
};
/*Scrolling*/
window.onscroll = () => {
    coniser.screenY = window.scrollY;
    console.log(coniser.screenY)

    if (coniser.screenY > 100 && coniser.showedSection < 1) {
        showProjects();
        coniser.showedSection++;
    }
    if (coniser.screenY > 300 && coniser.showedSection < 2) {
        showWorkers();
        coniser.showedSection++;
    }
    if (coniser.screenY > 30 && !coniser.menuDown) {
        menuDownUp();
    }
};


const menuDownUp = () => {
    if (!coniser.menuHide) {
        menuHideShow();
    }
    if (coniser.menuDown) {
        gsap.to("#nav_coniser", {
            y: -100,
            duration: 0.5
        });
        setTimeout(() => { coniser.menuDown = false; }, 200);
    } else {
        gsap.to("#nav_coniser", {
            y: 0,
            duration: 0.5
        });
        coniser.menuDown = true;
    }


}
const menuHideShow = () => {
    if (screen.width < 1000) {
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

const showWorkers = () => {
    var t2 = gsap.timeline();
    t2.from("#workers-photos-1", {
            x: 80,
            autoAlpha: 0,
            duration: 1,
        })
        .from("#workers-photos-2", {
            x: 80,
            autoAlpha: 0,
            duration: 1,
        })
        .from("#workers-photos-3", {
            y: 80,
            autoAlpha: 0,
            duration: 1,
        });
}
const starting = () => {
    showInformation();
}

starting();