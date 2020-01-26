// whitelisting
const files = [
    'home.html',
    'contact.html'
];

function main() {
    navigate('home.html');
}

async function navigate(page) {
    // Validation
    if (!files.includes(page)) {
        console.warn('access denied');
        return;
    }

    // Fetching
    const response = await fetch('/download?page=' + page);
    const data = await response.text();
    // Rendering
    const $page = document.getElementById('page');
    $page.innerHTML = data;
}

window.addEventListener('DOMContentLoaded', () => {
    main();
});

window.addEventListener('hashchange', () => {
    const page = location.hash.substring(2);
    navigate(page);
});
