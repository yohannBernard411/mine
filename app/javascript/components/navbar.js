const scrollToId = () => {
  if (document.getElementById("home-page")){
    const btnUn = document.getElementById("nav-home");
    const btnDeux = document.getElementById("nav-about");
    const btnTrois = document.getElementById("nav-realisation");
    const btnQuatre = document.getElementById("nav-contact");
    const allBtn = document.querySelectorAll(".my-btn");
    const screen1 = document.getElementById("home");
    const screen2 = document.getElementById("about");
    const screen3 = document.getElementById("realisations");
    let positionY = 0;
    let newPositionY = 0;
    
    btnUn.addEventListener("click", (event) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      allBtn.forEach((btn) => {
        btn.classList.remove("btn-active");
      });
      event.target.classList.add("btn-active");
    });
    btnDeux.addEventListener("click", (event) => {
      window.scrollTo({
        top: screen1.offsetHeight + 7,
        left: 0,
        behavior: 'smooth'
      });
      allBtn.forEach((btn) => {
        btn.classList.remove("btn-active");
      });
      event.target.classList.add("btn-active");
    });
    btnTrois.addEventListener("click", (event) => {
      window.scrollTo({
        top: screen1.offsetHeight + screen2.offsetHeight + 7,
        left: 0,
        behavior: 'smooth'
      });
      allBtn.forEach((btn) => {
        btn.classList.remove("btn-active");
      });
      event.target.classList.add("btn-active");
    });
    btnQuatre.addEventListener("click", (event) => {
      window.scrollTo({
        top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + 7,
        left: 0,
        behavior: 'smooth'
      });
      allBtn.forEach((btn) => {
        btn.classList.remove("btn-active");
      });
      event.target.classList.add("btn-active");
    });
    const checkClass = () => {
      if (window.scrollY>=0 && window.scrollY<(screen1.offsetHeight/2)){
        allBtn.forEach((btn) => {
          btn.classList.remove("btn-active");
        });
        btnUn.classList.add("btn-active");
      }
      if (window.scrollY>=(screen1.offsetHeight/2) && window.scrollY<(screen1.offsetHeight + screen2.offsetHeight/2)){
        allBtn.forEach((btn) => {
          btn.classList.remove("btn-active");
        });
        btnDeux.classList.add("btn-active");
      }
      if (window.scrollY>=(screen1.offsetHeight + screen2.offsetHeight/2) && window.scrollY<(screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight/2)){
        allBtn.forEach((btn) => {
          btn.classList.remove("btn-active");
        });
        btnTrois.classList.add("btn-active");
      }
      if (window.scrollY>=(screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight/2)){
        allBtn.forEach((btn) => {
          btn.classList.remove("btn-active");
        });
        btnQuatre.classList.add("btn-active");
      }
    }
    const tempo = setInterval(() => {
      if (positionY != newPositionY){
        checkClass();
      }
      positionY = newPositionY;
      newPositionY = window.scrollY;
    }, 500);
  }
}

export { scrollToId };