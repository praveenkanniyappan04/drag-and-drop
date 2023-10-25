const dropzone = document.getElementById('dropzone');

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  const element = event.dataTransfer.getData('text');
  const clonedElement = document.createElement('div');
  clonedElement.classList.add('draggable');
  clonedElement.draggable = true;

  switch (element) {
    case 'layout':
      clonedElement = document.createElement("div");
      clonedElement.textContent = "Layout";
      clonedElement.style.border = "2px dashed #ccc";
      clonedElement.style.minHeight = "400px";
      break;
    case 'Label':
      clonedElement.innerHTML = '<label class="head1">Name</label> <input type="text" class="item1">';
      break;
      case 'Textbox':
      clonedElement.innerHTML = '<label class="head1">Textbox</label> <input type="text" class="item2">';
      break;
    case 'Button':
      clonedElement.innerHTML = '<button class="item3">Button</button>';
      break;
    
    case 'Checkbox':  
      clonedElement.innerHTML = ' <label class="head1">Title</label>  <input type="checkbox" class="item4"> Mr. &nbsp;&nbsp;&nbsp;  <input type="checkbox">Mrs.&nbsp;&nbsp;&nbsp;  <input type="checkbox">Miss.';
      break;
    case 'Dropdown':
      clonedElement.innerHTML = '<label class="head1">Days</label> <select class="item5" > <option value="Option 1">Monday</option><option value="Option 2">tuesday</option> <option value="Option 3">wednesday</option><option value="Option 4">Thursday</option><option value="Option 5">Friday</option></select>';
      break;

    case 'Radio Button':
      clonedElement.innerHTML = '<label class="head1">Gender</label> <input type="radio" class="item6"> Male&nbsp;&nbsp;&nbsp; <input type="radio"> Female&nbsp;&nbsp;&nbsp; <input type="radio"> Prefer not to say';
      break;
    case 'Table':
      clonedElement.innerHTML = '<label class="head1">Menu</label><table border="1" class="item7"><tr><td class="td1">Starter</td><td class="td1">Main</td><td class="td1">Desert</td></tr><tr><td class="tr1">Paneer fry</td><td class="tr1">Mushroom fried rice</td> <td class="tr1">iceCream</td></tr></table>';
      break;
    case 'Navigation Link':
      clonedElement.innerHTML = 'Navigation Link: <a href="https://www.halleyx.com/" >Link</a>';
      break;
    case 'Image':
      clonedElement.innerHTML = '<img src="./image/logo.jpg" alt="Placeholder Image" class="item9">';
      break;
  }

  dropzone.appendChild(clonedElement);
});

const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.textContent);
  });
});
if(dropzone==""){
document.getElementById('saveButton').addEventListener('click', () => {
const formElements = document.getElementById('dropzone').innerHTML;

localStorage.setItem('savedForm', formElements);
alert('Form saved to local storage!');
window.location.href="https://www.halleyx.com/";
});
}


document.getElementById('clearButton').addEventListener('click', () => {
document.getElementById('dropzone').innerHTML = '';
localStorage.removeItem('savedForm');

});

const savedForm = localStorage.getItem('savedForm');
if (savedForm) {
document.getElementById('dropzone').innerHTML = savedForm;
}