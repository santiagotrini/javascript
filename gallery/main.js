function buildGallery(photos) {
  for (photo of photos) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    p.textContent = photo.title;
    img.src = photo.thumbnailUrl;
    div.append(img);
    div.append(p);
    document.body.append(div);
  }
}

const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
fetch(url)
  .then(res => res.json())
  .then(photos => {
    console.log(photos);
    buildGallery(photos)
  });
