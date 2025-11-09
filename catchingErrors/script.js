const restorantData1 = {
    menu: [
        { name: 'Salad Caesar', price: '14$' },
        { name: 'Pizza Diavola', price: '9$' },
        { name: 'Beefsteak', price: '17$' },
        { name: 'Napoleon', price: '7$' }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: false
};

function getRestaurantStatus(isOpen) {
    return isOpen ? 'Открыто' : 'Закрыто';
}

console.log(getRestaurantStatus(restorantData1.openNow))

function isAverageLunchPriceTrue(firstDish, secondDish, averagePrice) {
    const firstPrice = Number(firstDish.price.slice(0, -1));
    const secondPrice = Number(secondDish.price.slice(0, -1));
    const average = Number(averagePrice.slice(0, -1));

    const total = firstPrice + secondPrice;

    return total < average ? 'Цена ниже средней' : 'Цена выше средней';
}

console.log(isAverageLunchPriceTrue(restorantData1.menu[2], restorantData1.menu[2], restorantData1.averageLunchPrice));

function transferWaitors(data) {
    const copy = {
        ...data, waitors: [{ name: 'Alex', age: 1488 }]
    };
    return copy;
}

console.log(transferWaitors(restorantData1.waitors));

