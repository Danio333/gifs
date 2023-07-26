const apiKey = 'FkbQ0sdMyAmQ8q9RKISOv4ThKr9MoOB7'; 
const searchBox = document.querySelector('.search-box');
const gifContainer = document.querySelector('.container');
const gifContainer2 = document.querySelector('.container2');

//funcion para el buscador//


async function getGIFs(searchTerm) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}&limit=10`);
    const data = await response.json();

    
    gifContainer.innerHTML = '';


    data.data.forEach(gif => {
      const gifElement = document.createElement('img');
      gifElement.src = gif.images.fixed_height.url;
      gifElement.alt = gif.title;
      gifContainer.appendChild(gifElement);
    });
    
  } catch (error) {
    console.error('Error al obtener GIFs:', error);
  }
}

//funcion para los destacados//

async function getTrendingGIFs() {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`);
    const data = await response.json();

    gifContainer.innerHTML = '';


    data.data.forEach(gif => {
      const gifElement = document.createElement('img');
      gifElement.src = gif.images.fixed_height.url;
      gifElement.alt = gif.title;
      gifContainer2.appendChild(gifElement);
    });
  } catch (error) {
    console.error('Error al obtener los GIFs destacados:', error);
  }
}

getTrendingGIFs();


searchBox.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const searchTerm = searchBox.value.trim();
    if (searchTerm !== '') {
      getGIFs(searchTerm);
    }
  }
});