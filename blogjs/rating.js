const arrayElement2 = document.querySelectorAll('.field_loaded');

for(let i = 0; i < arrayElement2.length; i++)
{
 const errorMessage = document.createElement('span');
 errorMessage.textContent = "invalid input";
 arrayElement2[i].appendChild(errorMessage);
}
