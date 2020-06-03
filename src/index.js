// console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgContainer = document.querySelector("#dog-image-container");
  const breedContainer = document.querySelector("#dog-breeds");
  const selectDog = document.querySelector("#breed-dropdown");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  //fetch image
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imgArray = data.message;
      imgArray.forEach((imgSrc) => {
        imgContainer.insertAdjacentHTML(
          "afterbegin",
          `  <div style="width: 300px">
          <img src=${imgSrc} style="width: 100%;" alt="">
        </div>`
        );
      });
    });

  //create li with name of breed
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedObj = data["message"];
      for (const breed in breedObj) {
        selectDog.addEventListener("change", () => {
          if (selectDog.value == breed.charAt(0)) {
            const li = document.createElement("li");
            li.innerHTML = breed;
            li.addEventListener("click", () => {
              const color =
                "#" + ((Math.random() * 0xffffff) << 0).toString(16);
              li.style.color = color;
            });
            breedContainer.appendChild(li);
          }
        });
      }
    });
});
