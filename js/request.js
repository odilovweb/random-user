// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

//request

function getData(resource) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        overlay.classList.remove("hidden");
      } else if (request.status == 200 && request.readyState == 4) {
        overlay.classList.add("hidden");
        const data = JSON.parse(request.responseText);
        resolve(data.results);
      } else if (request.readyState == 4) {
        reject("Something went wrong :(");
        overlay.classList.add("hidden");
      }
    });
    request.open("GET", resource);
    request.send();
  });
}

// reload data

const reload = () => {
  getData(API)
    .then((thenData) => {
      updateUI(thenData);
    })
    .catch((catchErr) => {
      console.log(catchErr);
    });
};

reload();
