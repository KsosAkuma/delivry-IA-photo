function createSlide({ real_picture, title, description, anchor, generate_picture }) {
    const slide = document.createElement('section');
    slide.classList.add('slide');
    slide.id = anchor;
    const titleElement = document.createElement('h2');
    titleElement.innerText = title;
    slide.appendChild(titleElement);
    for (let i = 0; i < 3; i++) {
        const article = document.createElement('article')
        switch (i) {
            case 0:
                const imgContainer = document.createElement('div')
                imgContainer.style.width = '80%'
                const image = document.createElement('img');
                image.src = "./asset/" + real_picture;
                image.alt = description;
                article.appendChild(titleElement);
                article.appendChild(imgContainer);
                imgContainer.appendChild(image);
                break;
            case 1:
                const descriptionElement = document.createElement('p');
                descriptionElement.innerText = description;
                article.appendChild(titleElement);

                article.appendChild(descriptionElement);
                break;
            case 2:
                const imgContainer2 = document.createElement('div')
                imgContainer2.style.width = '80%'
                const image2 = document.createElement('img');
                image2.src = "./asset/" + generate_picture;
                image2.alt = description;
                article.appendChild(titleElement);

                article.appendChild(imgContainer2);
                imgContainer2.appendChild(image2);

                break;
            default:
                break;
        }
        slide.appendChild(article)
    }
    return slide;
}
function nav_func(obj) {
    const nav = document.querySelector('#nav')
    console.log(nav);
    for (const key in obj) {
        const anchor = document.createElement('a')
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            anchor.text = element.title
            anchor.href = "#" + element.anchor
        }
        nav.appendChild(anchor)
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const navigationButtons = document.querySelectorAll('.navigation-button');

    // Masquer toutes les slides et les boutons de navigation
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    navigationButtons.forEach((button) => {
        button.classList.remove('active');
    });

    // Afficher la slide spécifique
    slides[index].style.display = 'block';
    navigationButtons[index].classList.add('active');
}




for (let i = 0; i < data.length; i++) {
    document.querySelector('main').appendChild(createSlide(data[i]))
}
nav_func(data)