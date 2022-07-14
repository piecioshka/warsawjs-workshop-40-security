async function fetchComments() {
  const response = await fetch("/comments");
  return response.json();
}

function renderComments(comments) {
  comments.forEach(renderComment);
}

function saveComment(comment) {
  const options = {
    method: "POST",
    body: JSON.stringify({ comment }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch("/comments", options);
}

function renderComment(comment) {
  const $list = document.querySelector("ul");
  // $ul.innerHTML += "<li>" + comment + "</li>";
  const $comment = document.createElement("li");
  $comment.innerHTML = comment;
  $list?.append($comment);
}

function main() {
  fetchComments().then((comments) => {
    renderComments(comments);
  });

  const $form = document.querySelector("form");
  const $comment = document.querySelector("#comment");
  $form?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const comment = $comment?.value;
    saveComment(comment);
    renderComment(comment);
    $form.reset();
  });
}

window.addEventListener("DOMContentLoaded", main);
