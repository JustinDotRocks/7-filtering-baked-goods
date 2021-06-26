
const buttons = document.querySelectorAll('.items-button');
const storeItems = document.querySelectorAll('.product-container');

buttons.forEach((button)=> {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('show')

        const filter = e.target.dataset.filter
        
        storeItems.forEach((item)=> {
            if (filter === 'all'){
                item.style.display = 'block'
            } else {
                if (item.classList.contains(filter)){
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
});


// const itemName = document.getElementById('item-name');
// const itemPrice = document.getElementById('item-price');

//items = [];
// index = 0;

// function Item(image, itemName, price, itemType) {
//     this.image = image
//     this.itemName = itemName
//     this.price = price
//     this.itemType = itemType
    
// };

// createItem = (image, itemName, price, itemType) => {
//     let fullImage = `./img/item-${image}.jpeg`
//     let item = new Item(fullImage, itemName, price, itemType)

//     items.push(item)
// };

// createItem(0, 'Doughnut 1', '$5', 'doughnut item');
// createItem(1, 'Cake 1', '$15', 'cake item');
// createItem(2, 'Cake 2', '$15', 'cake item');
// createItem(3, 'Cake 3', '$15', 'cake item');
// createItem(4, 'Cupcake 1', '$5', 'cupcake item');
// createItem(5, 'Cupcake 2', '$5', 'cupcake item');
// createItem(6, 'Cupcake 3', '$5', 'cupcake item');
// createItem(7, 'Doughnut 2', '$5', 'doughnut item');
// createItem(8, 'Doughnut 3', '$5', 'doughnut item');
// createItem(9, 'Sweets 1', '$5', 'sweets item');
// createItem(10, 'Sweets 2', '$5', 'sweets item');
// createItem(11, 'Sweets 3', '$5', 'sweets item');

// // display only the items which have been filtered.
// // items are filtered based on what button is pressed.

// // filter array method
// // filter by item.itemType === 'cake item'

// const showAll = items.filter(() => items);

// const showCake = items.filter(
//     (item) => {
//         return item.itemType === 'cake item'
//     }
// );
// console.log(showCake);

// const showCupcake = items.filter(
//     (item) => {
//         return item.itemType === 'cupcake item'
//     }
// );
// console.log(showCupcake);

// const showDoughnut = items.filter(
//     (item) => {
//         return item.itemType === 'doughnut item'
//     }
// );
// console.log(showDoughnut);

// const showSweets = items.filter(
//     (item) => {
//         return item.itemType === 'sweets item'
//     }
// );
// console.log(showSweets);


// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault()
//         if (button.classList.contains('cakes-button')) {
//             return showCake
//         }
//     })
//     console.log('cakes')