const galleryImages = document.querySelectorAll(".gallery__images img");
const gallery = document.querySelector(".gallery");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const decreaseBtn = document.querySelector(".minus");
const increaseBtn = document.querySelector(".plus");
const quantityInput = document.querySelector(".quantity_input");

const burger = document.querySelector(".burger");
const menu = document.querySelector(".mob_menu");

const heartIcon = document.querySelector(".heart-icon");
const Icon = document.querySelector(".icon");

Icon.addEventListener("click", () => {
  heartIcon.style.fill =
    heartIcon.style.fill === "red" ? "transparent" : "red";
});

burger.addEventListener("click", () => {
  menu.style.display = "block";
});

document
  .querySelector(".mob_menu_close_icon")
  .addEventListener("click", () => {
    menu.style.display = "none";
  });

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    const imageUrl = img.getAttribute("src");
    gallery.style.backgroundImage = `url(${imageUrl})`;
  });
});

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

decreaseBtn.addEventListener("click", function () {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});
increaseBtn.addEventListener("click", function () {
  if (parseInt(quantityInput.value) < 10) {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  }
});
quantityInput.addEventListener("change", function () { });
closeIcons.forEach(function (icon) {
  icon.addEventListener("click", handleRemove);
});

function handleRemove(event) {
  const card = event.target.closest(".basket_card");
  if (card) {
    card.remove();
  }
}

// let isPhoneNumberFormatted = false;


// function maskPhoneNumber(phoneNumber) {
//   const digitsOnly = phoneNumber.replace(/\D/g, '');
//   const format = '+7-XXX-XXX-XX-XX';
//   let maskedNumber = '';
//   let digitIndex = 0;

//   for (let i = 0; i < format.length; i++) {
//     if (format[i] === 'X' && digitIndex < digitsOnly.length) {
//       maskedNumber += digitsOnly[digitIndex];
//       digitIndex++;
//     } else {
//       maskedNumber += format[i];
//     }
//   }

//   return maskedNumber;
// }

// function formatPhoneNumber(inputElement) {
//   if (!isPhoneNumberFormatted) {
//     const phoneNumber = inputElement.value;
//     const formattedPhoneNumber = maskPhoneNumber(phoneNumber);
//     inputElement.value = formattedPhoneNumber;
//     isPhoneNumberFormatted = true;
//   }
// }