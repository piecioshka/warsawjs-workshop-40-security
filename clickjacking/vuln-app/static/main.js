const $loginBtn = document.querySelector('.login-btn');
const $logoutBtn = document.querySelector('.logout-btn');
const $loginName = document.querySelector('.user-login');

const USER_KEY = 'user';

const signInUser = localStorage.getItem(USER_KEY);
if (signInUser) {
    $loginName.textContent = signInUser;
}

$loginBtn.addEventListener('click', () => {
    const login = 'Piotr Kowalski';
    $loginName.textContent = login;
    localStorage.setItem(USER_KEY, login);
});

$logoutBtn.addEventListener('click', () => {
    $loginName.textContent = 'Anonymous';
    localStorage.removeItem(USER_KEY);
    // location.reload();
});
