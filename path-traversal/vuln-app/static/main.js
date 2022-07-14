// whitelisting
const files = ["home.html", "contact.html"];

async function navigate(page) {
  // Solution: Validation
  // if (!files.includes(page)) {
  //   console.warn(`access denied (resource=${page})`);
  //   return;
  // }

  // Fetching
  const response = await fetch("/download?page=" + page);
  const data = await response.text();
  // Rendering
  const $page = document.getElementById("page");
  $page.innerHTML = data;
}

window.addEventListener("hashchange", () => {
  const page = location.hash.substring(2);
  navigate(page);
});

function main() {
  navigate(location.hash.substring(2) || "home.html");
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
