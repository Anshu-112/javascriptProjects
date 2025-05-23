let bagItems=[];
onload();

function onload(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr?JSON.parse(bagItemsStr):[];
    DisplayItemsOnPage();
    displayBagIcon();
    
}

function addToBag(itemId){
    bagItems.push(itemId); 
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
   
}
function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }
    
}




function DisplayItemsOnPage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
let innerHTML = '';
items.forEach(item => {

    innerHTML+=
    `<div class="item-container">
            <img class="item-image"  src="${item.image}" alt="Item 1">
            <div class="rating">
                ${item.rating.stars}🌟 | ${item.rating.count}
            </div>
            <div class="comapany-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <spam class="original-price">Rs ${item.original_price}</spam>
                <span class="discount">(${item.discount_percentage}% OFF)</span>

            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
           </div> `;  
    
});

itemsContainerElement.innerHTML = innerHTML;

}
