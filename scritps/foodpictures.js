const FoodPictures = () => {

    const foodPicturesContent = document.createElement('div');
    foodPicturesContent.setAttribute('class', 'container');

    const foodPicturesHeader = document.createElement('h1');
    foodPicturesHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    foodPicturesHeader.innerHTML = 'Always Perfect';
 
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'food-picture-grid');
  
    const foodPictureData = [
      { src: 'imgs/image1.jpg'},
      { src: 'imgs/image2.jpg'},
      { src: 'imgs/image3.jpg'},
      { src: 'imgs/image4.jpg'},
      { src: 'imgs/image5.jpg'},
      { src: 'imgs/image6.jpg'},
    
    ];
  
    for (const data of foodPictureData) {
      const gridItem = document.createElement('div');
      gridItem.setAttribute('class', 'food-picture-item');
  
      const image = document.createElement('img');
      image.setAttribute('src', data.src);
      image.setAttribute('alt', data.alt);
  
      gridItem.appendChild(image);
      gridContainer.appendChild(gridItem);
    }
  
    
    foodPicturesContent.appendChild(foodPicturesHeader);
    foodPicturesContent.appendChild(gridContainer);
    

    
    return foodPicturesContent;
  };
  
  export default FoodPictures;
