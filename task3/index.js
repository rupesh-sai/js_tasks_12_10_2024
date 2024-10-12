const URL = 'https://picsum.photos/v2/list';

const fetchData = async (URL)=>{
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
 }

const display = (data)=>{
    const gallery = document.querySelector('.gallery');
    const fragment = document.createDocumentFragment();

    data.forEach(({author:authr, download_url : url})=>{
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery-image');

        const author = document.createElement('div');
        author.classList.add('author');

        galleryImage.src = url;
        author.textContent = authr;

        galleryItem.append(galleryImage, author);
        fragment.append(galleryItem);

    })
    gallery.append(fragment)
}

const main = (URL)=>{
    fetchData(URL).then((data)=>{
        display(data);
    })
}
main(URL);
