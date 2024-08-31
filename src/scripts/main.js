const img = document.querySelector("img");
async function getImage() {
    const apiPath = "https://random.dog/woof.json";

    try {
        const response = await axios.get(apiPath);
        return response.data.url;
    } catch (err) {
        console.error(err);
    }
}

document.querySelector("button").addEventListener("click", function() {
    const imgPlaceholder = document.querySelector(".img-placeholder");
    if (imgPlaceholder) {
        imgPlaceholder.querySelector("span").remove();
        imgPlaceholder.classList.remove("img-placeholder");
        imgPlaceholder.classList.add("img-container");
    }

    getImage().then(async (url) => {
        // console.log(url);
        let imgUrl = url;
        while (imgUrl.slice(-4).toLowerCase() === ".mp4" || imgUrl.slice(-5).toLowerCase() === ".webm") {
            imgUrl = await getImage().then(url => url);
        }
        img.src = imgUrl;
    })

    img.classList.remove("hidden");

});