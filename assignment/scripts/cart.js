console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = [];
const maxItems = 5;

function addItem(item) {
    console.log(`addItem(${item})`);
    if (isFull()) {
        console.log('-----------------------------------------');
        console.log(`addItem(${item})`);
        console.log(`Sorry, I was not able to add '${item}' to your basket,`);
        console.log(`your basket is currently full with ${basket.length} items:`);
        listItems();
        console.log('(returning false)');
        console.log('-----------------------------------------');
        return false;
    } else {
        if (basket.includes(item)) {
            console.log('Just so you know, you already have this on your list!');
            console.log(`I'm adding it to your basket but it is a duplicate!!`);
        }
        console.log('-----------------------------------------');
        console.log(`Adding item '${item}' to your basket!`);
        basket.push(item);
        console.log(`Your basket now contains these items:  ${basket}`);
        console.log('(returning true)');
        console.log('-----------------------------------------');
        return true;
    }
}

function listItems() {
    console.log(` running listItems()`);
    // console.log('-----------------------------------------');
    console.log('Listing the items currently in your basket:');
    // for (item of basket)  {
    //     console.log(item);
    // }
    for (i=0; i< basket.length; i++) {
        console.log(basket[i]);
    }

    console.log('-----------------------------------------');
}

function empty() {
    console.log(`empty()`);
    console.log('-----------------------------------------');
    console.log(`Emptying your basket by removing the following`);
    console.log(`items:  ${basket}`);
    // first code....
    let basketLength = basket.length;
    for (i=0; i<basketLength; i++) {
        basket.pop();
    }
    // jason version test code...
    // basket.length = 0;
    console.log(`You now have these items in your basket:  ${basket}`);
    console.log('-----------------------------------------');
}

function isFull() {
    console.log(`running isFull()`);
    console.log('-----------------------------------------');
    console.log('Checking the status of your basket:');
    console.log(`You have ${basket.length} items in your basket.`);
    if (basket.length < maxItems) {
        console.log(`Because ${basket.length} items is less than ${maxItems} items, you basket is NOT full.`);
        console.log('(returning false)');
        console.log('-----------------------------------------');
        return false;
    } else {
        // if >= 5 items customize response
        let comparisonString = '';
        if (basket.length = maxItems) {
            comparisonString = 'is equal to';
        } else {
            comparisonString = 'is greater than';
        }
        console.log(`Because ${basket.length} items ${comparisonString} ${maxItems} items, you basket is full.`);
        console.log(`(returning true)`);
        console.log('-----------------------------------------');
        return true;
    }
}

function removeItem(item) {
    console.log(`removeItem(${item})`);
    let removedItem = null;
    let indexOfItem = basket.indexOf(item);
    // check if item is not found (indexOf will return -1)
    if (indexOfItem === -1) {
        console.log('-----------------------------------------');
        console.log(`Item '${item} not found, unable to remove!`);
        console.log(`  current contents of basket:`);
        listItems();
        console.log('(returning null)');
        console.log('-----------------------------------------');
    } else {
        console.log('-----------------------------------------');
        // slice the item basket[indexOfItem] out of the array
        removedItem = basket.slice(indexOfItem, indexOfItem+1);
        removedItem = removedItem.toString();
        console.log(`Removing item '${removedItem}' from basket:`);
        // splice the removed item out of the basket array
        //   (take out the chunk starting at basket[indexOfItem] with 
        //    length of 1)
        basket.splice(indexOfItem, 1);
        console.log(`  new contents of basket:`);
        listItems();
        console.log(`(returning removed item '${removedItem}')`);
        console.log('-----------------------------------------');
    }
    return removedItem;
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
