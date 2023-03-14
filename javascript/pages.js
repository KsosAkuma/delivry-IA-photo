function article(obj) {
    let title = document.createElement('h1')
    let description = document.createElement('p')
    let real_picture = document.createElement('img')
    let generate_picture = document.createElement('img')

}

function nav_func(obj) {
    const nav = document.querySelector('#nav')
    console.log(nav);
    for (const key in obj) {
        const anchor = document.createElement('a')
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(element);
            anchor.text = element.title + " " + element.id
            anchor.href = element.anchor
        }
        nav.appendChild(anchor)
    }
}
nav_func(data)