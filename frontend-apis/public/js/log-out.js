const logoutBtn = document.getElementById('logout_btn');
logoutBtn.addEventListener('click', () => {
    localStorage.setItem("VIDEO_EATS_ACCESS_TOKEN", null);
    localStorage.setItem("VIDEO_EATS_CURRENT_USER_ID", null);
    window.location.href = "/log-in";
})