const paraVisible = () => {
  const btnSeeMore = document.getElementById("see-more");
  const para1 = document.querySelector(".para1");
  const para2 = document.querySelector(".para2");
  const para3 = document.querySelector(".para3");
  const col2 = document.querySelector(".col2");
  btnSeeMore.addEventListener("click", (event) => {
    if (btnSeeMore.innerText === "En savoir plus"){
      console.log("on y est");
      para1.style.display = "none";
      para2.style.display = "none";
      para3.style.display = "block";
      btnSeeMore.innerText = "Voir moins";
    }else if (btnSeeMore.innerText === "Voir moins"){
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "none";
      btnSeeMore.innerText = "En savoir plus";
    }
  });
}

export { paraVisible };
