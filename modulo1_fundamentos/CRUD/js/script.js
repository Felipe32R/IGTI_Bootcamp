let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;
let currentIndex = null;
let isEditing = false;
let editingDisplay = document.querySelector('#editingDisplay');

window.addEventListener('load', () => {
  inputName = document.querySelector('#inputName');
  editingDisplay.style.display = 'none';
  preventFormSubmit();
  activateInput();
  render();
});




function preventFormSubmit(){
  function handleFormSubmit(event){
    event.preventDefault();
  }

  var form = document.querySelector('form')
  form.addEventListener('submit',handleFormSubmit)
}

function activateInput(){

    function updateName(newName){
      globalNames[currentIndex] = newName;
    }


    function handleTyping(event){
      var hasText = !!event.target.value && event.target.value.trim() !== '';

      if (!hasText){
        clearInput();
        return;
      }

      if(event.key === 'Enter' && event.target.value.trim() !== ''){
        if (isEditing){
          updateName(event.target.value)
          
        } else {
        //globalNames.push(event.target.value)
        globalNames = [...globalNames, event.target.value]
      }
      
        render();
        editingDisplay.style.display = 'none';
        isEditing = false;
        clearInput();
      }
    }

    inputName.addEventListener('keyup', handleTyping)
    inputName.focus()
}

function render(){
  function createDeleteButton(index){

    function deleteItem() {
      globalNames.splice(index,1)
      render();
    }
    
    var button = document.createElement('button')
    button.classList.add('deleteButton')
    button.textContent = 'x'

    button.addEventListener('click', deleteItem)

    return button;
  }

  function createSpan(name, index){
    function editItem(){
      inputName.value = name;
      inputName.focus()
      isEditing = true;
      currentIndex = index;
      editingDisplay.style.display = 'block';
    }

    var span = document.createElement('span');
    span.classList.add('clickable')
    span.textContent = name
    span.addEventListener('click', editItem)

    return span;
  }

  var divNames = document.querySelector('#names')
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for ( var i = 0; i < globalNames.length; i++){
    var currentName = globalNames[i]


    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i)

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  

}

function clearInput(){
  inputName.value = '';
  inputName.focus();
}


