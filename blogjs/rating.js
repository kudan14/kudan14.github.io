const arrayElement = document.querySelectorAll('.field_loaded');

for(let i = 0; i < arrayElement.length; i++)
{
 const errorMessage = document.createElement('span');
 errorMessage.textContent = "invalid input";
 arrayElement[i].appendChild(errorMessage);
}
