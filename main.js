document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.github.com/users/alcbcoelho")
    .then(res => {
        if (!res.ok)
            throw new Error(`Erro de HTTP - ${res.status}`);
        return res.json();
    })
    .then(({ avatar_url, followers, following, html_url, login, name, public_repos}) => {
        avatar_url && document.querySelector(".profile-avatar").setAttribute("src", avatar_url);
        html_url && document.querySelector(".profile-link").setAttribute("href", html_url);
        
        const dataPlaceholder = "-";
        document.querySelector(".profile-name").innerText = name || dataPlaceholder;
        document.querySelector(".profile-username").innerText = login ? `@${login}` : dataPlaceholder;
        
        const numbersItemProperties = [public_repos, followers, following];
        document.querySelectorAll(".numbers-item").forEach((item, index) => {
            item.append(numbersItemProperties[index] || dataPlaceholder);
        })
    })
    .catch(e => console.error("ERRO: " + e.message))
});