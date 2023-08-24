let allLis = document.querySelectorAll("ul li");
let lisArr = Array.from(allLis);
let allIMgs = Array.from(document.querySelectorAll(".gallery img"));

lisArr.forEach((li) => {
  //
  li.addEventListener("click", handleLis);
  //
  li.addEventListener("click", handleIMGS);
});

function handleLis(e) {
  lisArr.forEach((li) => {
    li.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
}

function handleIMGS() {
  let dataLi = document.querySelectorAll(this.dataset.cat);
  console.log(dataLi);
  allIMgs.forEach((img) => {
    img.style.display = "none";
    dataLi.forEach((e) => {
      e.style.display = "block";
    });
  });
  console.log(dataLi);
}
