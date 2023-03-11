

// localStorage.setItem("userNmae","Marwa");
// window.alert(localStorage.getItem("userNmae"))
 var userNameAlert = document.getElementById("userNameAlert");
 var productName = document.getElementById("name");
 var productPrice = document.getElementById("price");
 var productCategory = document.getElementById("category");
 var productDescription = document.getElementById("description");
 var manButton = document.getElementById("mainButton");

 function validateProductName()
 {
      var regex = /^[A-Z][a-z]{3,8}$/;
    if( regex.test( productName.value) ==  true)
 {
          productName.classList.add("is-valid");
          productName.classList.remove("is-invalid");
          
          userNameAlert.classList.replace("d-block","d-none") ;
           return true;
 }
     else
     {
      userNameAlert.classList.replace("d-none","d-block") ;
      productName.classList.add("is-invalid");
      productName.classList.remove("is-valid");

    

      return false;

     }
 }
productName.addEventListener("keyup",validateProductName);
var productContainer ;
if(localStorage.getItem("myProduct") ==  null)
{
  productContainer = [] ;
} 
else
{
  productContainer =JSON.parse(localStorage.getItem("myProduct") ) ;

  displayProduct();

}
function addProduct(){

  if(validateProductName() == true){
var product = 
{
name:productName.value ,
price:productPrice.value ,
category:productCategory.value ,
description:productDescription.value
};

productContainer.push(product);
localStorage.setItem("myProduct" , JSON.stringify(productContainer) );
clearForm();
}
displayProduct();
console.log(productContainer);  
}

function clearForm(){
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";

  
}

function displayProduct(){
var cartoona ="" ;

for(var i=0 ; i<productContainer.length ; i++){
cartoona += `   
 <tr>
<td>`+i+`</td>
<td>`+productContainer[i].name+`</td>
<td>`+productContainer[i].price+`</td>
<td>`+productContainer[i].category+`</td>
<td>`+productContainer[i].description+`</td>
<td><button onclick="changeFormForUpdate(`+i+`)" class="btn btn-outline-warning">Update</button></td>
<td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">Delete</button></td>
</tr>`
}
document.getElementById("tableBody").innerHTML = cartoona;

}

function deleteProduct(productIndex){
  productContainer.splice(productIndex,1);
  localStorage.setItem("myProduct" , JSON.stringify(productContainer) );
 
  displayProduct()
}

function searchProduct(searchTerm){
  var cartoona= ``;
for(var i=0 ; i<productContainer.length ; i++){
  if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ==  true 
  ||  productContainer[i].category.toLowerCase().includes(searchTerm.toLowerCase()) ==  true){
    cartoona += `   
 <tr>
<td>`+i+`</td>
<td>`+productContainer[i].name+`</td>
<td>`+productContainer[i].price+`</td>
<td>`+productContainer[i].category+`</td>
<td>`+productContainer[i].description+`</td>
<td><button class="btn btn-outline-warning">Update</button></td>
<td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">Delete</button></td>
</tr>`
    console.log("mawgod")
    // search mawgod
  }
  else{
    console.log("m4 mawgod")
    // m4 mawgod
  }
}
document.getElementById("tableBody").innerHTML = cartoona;

}
function changeFormForUpdate(productIndex){
   productName.value =  productContainer[productIndex].name;
   productPrice.value = productContainer[productIndex].price;
   productCategory.value = productContainer[productIndex].category;
   productDescription.value = productContainer[productIndex].description;
   manButton.innerHTML = ("update");

}

