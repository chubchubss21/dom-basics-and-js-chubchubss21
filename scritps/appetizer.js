const Appetizer = () => {
const appetizerContent = document.createElement('div');
  appetizerContent.setAttribute('class', 'container');
  
  
  //appetizerContent.style.display = "flex";//<div class="flex-container">
  // appetizerContent.style.flexDirection = "column";

const appetizerHeader = document.createElement('h1');
  appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerHeader.innerHTML = 'Appetizer';


// const appetizeContainer = document.createElement('ul'); 
// appetizerList.setAttribute('class', 'appetizerList');

const appetizerItems = () => {
  const list = document.createElement('div');//CREATE A DIV
  list.style.display = "flex";//<div class="flex-container">

  list.setAttribute('class', 'appetizerList');


  const appetizer1div = document.createElement('div');
  const appetizer1 = document.createElement('h1');
  appetizer1.setAttribute('id', 'appetizer1');
  appetizer1.setAttribute('class', 'text-center');
  appetizer1.innerHTML = 'Stuffed mushrooms'; //TEXT

  appetizer1div.appendChild(appetizer1);

  const appetizerParagraph1 = document.createElement('p');
  appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
  appetizerParagraph1.innerHTML = 'Stuffed mushrooms are always a holiday favorite appetizer. They are the perfect cheesy mushroom bite';
  appetizer1div.appendChild(appetizerParagraph1);

  //CREATE A DIV
  //INSERT IMAGE
  //TEXT
  const appetizer2div = document.createElement('div');
  const appetizer2 = document.createElement('h1');
  appetizer2.setAttribute('id', 'appetizer2');
  appetizer2.setAttribute('class', 'text-center');
  appetizer2.innerHTML = 'Jalapeno popper dip';

  appetizer2div.appendChild(appetizer2);

  const appetizerParagraph2 = document.createElement('p');
  appetizerParagraph2.setAttribute('class', 'my-3 pb-3');
  appetizerParagraph2.innerHTML = 'The ultra-popular Mexican food Jalapeno Popper Dip appetizer.';
  appetizer2div.appendChild(appetizerParagraph2) 

  //CREATE A DIV
  //INSERT IMAGE
  //TEXT

  list.appendChild(appetizer1div)  
  list.appendChild(appetizer2div)  
  // list.appendChild(appetizer3div)  

  // const appetizer3 = document.createElement('h1');
  // appetizer3.setAttribute('id', 'appetizer3');
  // appetizer3.setAttribute('class', 'text-center');
  // appetizer3.innerHTML = 'Cheese Ball Bites';
  // list.appendChild(appetizer3);
  // const appetizerParagraph3  = document.createElement('p');
  // appetizerParagraph3.setAttribute('class', 'my-3 pb-3');
  // appetizerParagraph3.innerHTML = 'Your favourite party-perfect appetizer made mini! A simply adorable starter for the holiday season.';
  // list.appendChild(appetizerParagraph3) 

  return list;
};

appetizerContent.appendChild(appetizerHeader);
appetizerContent.appendChild(appetizerItems());

return appetizerContent;
};


export default Appetizer;