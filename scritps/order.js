const Order = () => {
  const orderContent = document.createElement('div');
    orderContent.setAttribute('class', 'container');
    
  const orderHeader = document.createElement('h1');
    orderHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    orderHeader.innerHTML = 'Order Online';

  const createForm = () => {
    
    //CREATE FORM
  const form = document.createElement('form');
    form.setAttribute('action', 'link from formspree');
    form.setAttribute('method','POST');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name'); //for and name
    nameLabel.innerHTML = 'Name:';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');

  //CREATE  A LABEL
  const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for','email'); //for and name
    emailLabel.innerHTML = 'Email:';

  //CREATE  INPUT
  const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');

    
    // <label for="fname">First name:</label><br>
    // <input type="text" id="fname" name="fname" value="John"><br>

    //CREATE  A LABEL
    //CREATE  INPUT
    
    //CREATE  A LABEL
    //CREATE  INPUT


    const orderLabel = document.createElement('label');
    orderLabel.setAttribute('for', 'order');
    orderLabel.innerHTML = 'Order:';
    const orderTextarea = document.createElement('textarea');
    orderTextarea.setAttribute('id', 'order');
    orderTextarea.setAttribute('name', 'order');
    orderTextarea.setAttribute('rows', '4');


    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Submit Order';


    

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(orderLabel);
    form.appendChild(orderTextarea);
    form.appendChild(submitButton);


  
    return form;
  };
  
  orderContent.appendChild(orderHeader);
  orderContent.appendChild(createForm());
  
  return orderContent;
  };
  
  
  export default Order;