const favorites = document.querySelectorAll('.favorite');

favorites.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('addFavorite')
    })
})