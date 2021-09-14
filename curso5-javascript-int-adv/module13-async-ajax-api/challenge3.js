"use strict";

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
*/

// PART 1
let current_img;
const img_container = document.querySelector(".images");

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

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

async function load_and_pause() {
  try {
    // Img 1
    let img = await create_image("img-1.jpg");
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = "none";

    // Img 2
    img = await create_image("img-2.jpg");
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = "none";
  } catch (error) {
    console.error(error);
  }
}

// load_and_pause();

// PART 2
// 1
async function load_all(img_array) {
  try {
    // 2
    const imgs = await img_array.map((img) => create_image(img));
    // 3
    console.log(imgs);

    // 4
    const data = await Promise.all(imgs);

    // 5
    data.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.error(error);
  }
}

const imgs = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];
load_all(imgs);
