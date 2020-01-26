// Client Side

function fetchComments() {
    return fetch('/comments')
        // response object was made by Response constructor
        .then((response) => {
            return response.json();
        });
}

function renderComments(comments) {
    comments.forEach((comment) => {
        renderComment(comment);
    });
}

function saveComment(comment) {
    const options = {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch('/comments', options)
}

function renderComment(comment) {
    const $ul = document.querySelector('ul');
    $ul.innerHTML += '<li>' + comment + '</li>';
}

function main() {
    fetchComments()
        .then((comments) => {
            renderComments(comments);
        });

    const $addCommentForm = document.querySelector('form');
    $addCommentForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const comment = document.querySelector('textarea').value;
        saveComment(comment);
        renderComment(comment);
    });
}

window.addEventListener('DOMContentLoaded', main);
