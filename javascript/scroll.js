let allArticle = document.querySelectorAll('article');
const main = document.querySelector('main');
let currentArticleIndex = 0;

main.addEventListener('wheel', function (e) {
    e.preventDefault();

    let nextArticleIndex = currentArticleIndex;

    if (e.deltaY > 0) {
        nextArticleIndex += 1;
    } else {
        nextArticleIndex -= 1;
    }

    if (nextArticleIndex >= allArticle.length) {
        nextArticleIndex = 0;
    } else if (nextArticleIndex < 0) {
        nextArticleIndex = -1;
        main.scrollTo(0, 0); // Redirection au début du site
        currentArticleIndex = nextArticleIndex;
        return; // Sortir de la fonction pour éviter l'exécution de la suite
    }

    let nextArticle = allArticle[nextArticleIndex];

    nextArticle.scrollIntoView({ behavior: 'smooth' });

    currentArticleIndex = nextArticleIndex;
}, { passive: false });
