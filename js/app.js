const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");

const clearBtn = document.getElementById("clear__button");

let names = [];

// refresh

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
  clearBtn.classList.remove("hidden");
});

// clear

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = ``;
  clearBtn.classList.add("hidden");
});

// search by name
let inputSearch = form["user-search"];
inputSearch.addEventListener("keyup", () => {
  const usersNames = document.querySelectorAll(".users__names");
  let valueSearch = inputSearch.value.toLowerCase();
  usersNames.forEach((item) => {
    if (item.textContent.toLowerCase().includes(valueSearch)) {
      item.parentElement.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.parentElement.classList.add("hidden");
    }
  });
});

// get result and update UI

const updateUI = (data) => {
  console.log("Updated UI:", data);
  names = [];
  user.innerHTML = "";
  data.forEach((e) => {
    const { gender, name, picture, location, dob } = e;
    names.push(`${name.title} ${name.first} ${name.last}`);
    user.innerHTML += `
    

    
        <li class="user__item">
        <button id="delete__btn" class="user__delete--btn">
          <i class="fas fa-trash"></i>
        </button>
        <img
          class="user__img"
          alt="User photo"
          src="${picture.large}"
          width="100"
          height="100"
        />
        <div class="user__name">
          <span class="material-symbols-outlined">badge</span>
          <span class="users__names">- ${name.title} ${name.first} ${name.last}</span>
        </div>
        <div class="user__year">
          <span class="material-symbols-outlined">cake</span>
          <span>- ${dob.age} years old.</span>
        </div>
        <div class="user__location">
          <span class="material-symbols-outlined">person_pin_circle</span>
          <span>-${location.city}, ${location.country} </span>
        </div>
        <div class="user__gender">
          <span class="material-symbols-outlined">man</span>
          <span>- ${gender}</span>
        </div>
        </li>

    

    `;
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "user__delete--btn") {
    e.target.parentElement.remove();
  }
  if (!user.children.length) {
    clearBtn.remove();
  }
});
