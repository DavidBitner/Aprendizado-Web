"use strict";

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
*/
// 3
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

// 1
const img_container = document.querySelector(".images");

function create_image(img_path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = img_path;

    img.addEventListener("load", function () {
      img_container.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
}

// 4
let current_img;

// 2
create_image("img-1.jpg")
  .then((img) => {
    current_img = img;
    console.log("Image 1 loaded");
    // 3
    return wait(2);
  })
  // 4
  .then(() => {
    current_img.style.display = "none";
    return create_image("img-2.jpg");
  })
  .then((img) => {
    current_img = img;
    console.log("Image 2 loaded");
    // 5
    return wait(2);
  })
  // 6
  .then(() => {
    current_img.style.display = "none";
  })
  // 2
  .catch((err) => console.error(err));
