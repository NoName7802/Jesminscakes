function orderCake(cakeName, price) {
    const formLink = "https://forms.gle/t2k1EZKS5zLMTjUd9"; // Your Google Form Link
    const url = `${formLink}?usp=pp_url&entry.1234567890=${cakeName} - ${price}`;
    window.location.href = url;
}