console.log('%c HI', 'color: firebrick')
// console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgContainer = document.querySelector("#dog-image-container");
  const breedContainer = document.querySelector("#dog-breeds");
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
      console.log(data);
      const breedObj = data["message"];
      console.log(breedObj);
      for (const breed in breedObj) {
        breedContainer.insertAdjacentHTML("afterbegin", `<li>${breed}</li>`);
      }
    });
});
