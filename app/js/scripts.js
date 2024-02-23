// declare variables
const tabs = document.querySelectorAll("nav a");
const contentPara = document.querySelector(".content");

// add the class active to one tab
function makeActive(currentHash) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}

// remove the class active from all tabs
function makeInactive() {
    for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

// // runs on page load and whenever the hash changes
// function setContentAccordingToHash() {
//   const currentHash = window.location.hash.substring(1);
//   contentPara.innerHTML = data[currentHash];
//   makeActive(currentHash)
// }

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === currentHash) {

      contentPara.innerHTML = `
        <h2>${data[i].section}</h2>
        <p>${data[i].story}<p>
        `;

      makeActive(currentHash);
    }
  }
}
// only runs once on page load
function initializePage() {
    // set a default if there is no hash
    if (!window.location.hash) {
      window.location.hash = "cuisines";
      document.querySelector('nav a').classList.add("active");
    } else {
      // if there is a hash set the active tab according to the hash
      // .querySelector('[href="' + window.location.hash + '"] ')   //this is a concatenation string
      document.querySelector(`[href="${window.location.hash}"]`) //this is a template string
        .classList.add("active");
    }
    setContentAccordingToHash();
  }

window.addEventListener("hashchange", setContentAccordingToHash); 
document.addEventListener("DOMContentLoaded", initializePage);