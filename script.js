let card1 = document.querySelector("#menu-item-1"); 
let card2 = document.querySelector("#menu-item-2"); 
let card3 = document.querySelector("#menu-item-3"); 
let card4 = document.querySelector("#menu-item-4"); 
let card5 = document.querySelector("#menu-item-5"); 
let card6 = document.querySelector("#menu-item-6"); 
let card7 = document.querySelector("#menu-item-7"); 
let card8 = document.querySelector("#menu-item-8"); 
let card9 = document.querySelector("#menu-item-9"); 
let card10 = document.querySelector("#menu-item-10"); 
let card11 = document.querySelector("#menu-item-11"); 
let card12 = document.querySelector("#menu-item-12"); 
let card13 = document.querySelector("#menu-item-13"); 
let card14 = document.querySelector("#menu-item-14"); 
let card15 = document.querySelector("#menu-item-15"); 
let card16 = document.querySelector("#menu-item-16"); 
let card17 = document.querySelector("#menu-item-17"); 
let card18 = document.querySelector("#menu-item-18"); 
let card19 = document.querySelector("#menu-item-19"); 
let card20 = document.querySelector("#menu-item-20"); 
let card21 = document.querySelector("#menu-item-21"); 
let card22 = document.querySelector("#menu-item-22"); 
let card23 = document.querySelector("#menu-item-23"); 
let card24 = document.querySelector("#menu-item-24"); 
let card25 = document.querySelector("#menu-item-25"); 
async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menuItems = await response.json();
        
        let img = card1.querySelector("#Image"); 
        let name = card1.querySelector("#Name"); 
        let price = card1.querySelector("#Price"); 
        img.src = menuItems[0].imgSrc; 
        name.textContent = `${menuItems[0].name}`; 
        price.textContent = `$${menuItems[0].price}/-`; 
            
            let img2 = card2.querySelector("#Image"); 
            let name2 = card2.querySelector("#Name"); 
            let price2 = card2.querySelector("#Price"); 
            img2.src = menuItems[1].imgSrc; 
            name2.textContent = `${menuItems[1].name}`; 
            price2.textContent = `$${menuItems[1].price}/-`; 

        let img3 = card3.querySelector("#Image"); 
        let name3 = card3.querySelector("#Name"); 
        let price3 = card3.querySelector("#Price"); 
        img3.src = menuItems[2].imgSrc; 
        name3.textContent = `${menuItems[2].name}`; 
        price3.textContent = `$${menuItems[2].price}/-`; 



        let img4 = card4.querySelector("#Image"); 
        let name4 = card4.querySelector("#Name"); 
        let price4 = card4.querySelector("#Price"); 
        img4.src = menuItems[3].imgSrc; 
        name4.textContent = `${menuItems[3].name}`; 
        price4.textContent = `$${menuItems[3].price}/-`; 
            
            let img5 = card5.querySelector("#Image"); 
            let name5 = card5.querySelector("#Name"); 
            let price5 = card5.querySelector("#Price"); 
            img5.src = menuItems[4].imgSrc; 
            name5.textContent = `${menuItems[4].name}`; 
            price5.textContent = `$${menuItems[4].price}/-`; 

        let img6 = card6.querySelector("#Image"); 
        let name6 = card6.querySelector("#Name"); 
        let price6 = card6.querySelector("#Price"); 
        img6.src = menuItems[5].imgSrc; 
        name6.textContent = `${menuItems[5].name}`; 
        price6.textContent = `$${menuItems[5].price}/-`; 



        let img7 = card7.querySelector("#Image"); 
        let name7 = card7.querySelector("#Name"); 
        let price7 = card7.querySelector("#Price"); 
        img7.src = menuItems[6].imgSrc; 
        name7.textContent = `${menuItems[6].name}`; 
        price7.textContent = `$${menuItems[6].price}/-`; 
            
            let img8 = card8.querySelector("#Image"); 
            let name8 = card8.querySelector("#Name"); 
            let price8 = card8.querySelector("#Price"); 
            img8.src = menuItems[7].imgSrc; 
            name8.textContent = `${menuItems[7].name}`; 
            price8.textContent = `$${menuItems[7].price}/-`; 

        let img9 = card9.querySelector("#Image"); 
        let name9 = card9.querySelector("#Name"); 
        let price9 = card9.querySelector("#Price"); 
        img9.src = menuItems[8].imgSrc; 
        name9.textContent = `${menuItems[8].name}`; 
        price9.textContent = `$${menuItems[8].price}/-`; 



        let img10 = card10.querySelector("#Image"); 
        let name10 = card10.querySelector("#Name"); 
        let price10 = card10.querySelector("#Price"); 
        img10.src = menuItems[9].imgSrc; 
        name10.textContent = `${menuItems[9].name}`; 
        price10.textContent = `$${menuItems[9].price}/-`; 
            
            let img11 = card11.querySelector("#Image"); 
            let name11 = card11.querySelector("#Name"); 
            let price11 = card11.querySelector("#Price"); 
            img11.src = menuItems[10].imgSrc; 
            name11.textContent = `${menuItems[10].name}`; 
            price11.textContent = `$${menuItems[10].price}/-`; 

        let img12 = card12.querySelector("#Image"); 
        let name12 = card12.querySelector("#Name"); 
        let price12 = card12.querySelector("#Price"); 
        img12.src = menuItems[11].imgSrc; 
        name12.textContent = `${menuItems[11].name}`; 
        price12.textContent = `$${menuItems[11].price}/-`; 
        

        let img13 = card13.querySelector("#Image"); 
        let name13 = card13.querySelector("#Name"); 
        let price13 = card13.querySelector("#Price"); 
        img13.src = menuItems[12].imgSrc; 
        name13.textContent = `${menuItems[12].name}`; 
        price13.textContent = `$${menuItems[12].price}/-`; 
            
            let img14 = card14.querySelector("#Image"); 
            let name14 = card14.querySelector("#Name"); 
            let price14 = card14.querySelector("#Price"); 
            img14.src = menuItems[13].imgSrc; 
            name14.textContent = `${menuItems[13].name}`; 
            price14.textContent = `$${menuItems[13].price}/-`; 

        let img15 = card15.querySelector("#Image"); 
        let name15 = card15.querySelector("#Name"); 
        let price15 = card15.querySelector("#Price"); 
        img15.src = menuItems[14].imgSrc; 
        name15.textContent = `${menuItems[14].name}`; 
        price15.textContent = `$${menuItems[14].price}/-`; 



        let img16 = card16.querySelector("#Image"); 
        let name16 = card16.querySelector("#Name"); 
        let price16 = card16.querySelector("#Price"); 
        img16.src = menuItems[15].imgSrc; 
        name16.textContent = `${menuItems[15].name}`; 
        price16.textContent = `$${menuItems[15].price}/-`; 
            
            let img17 = card17.querySelector("#Image"); 
            let name17 = card17.querySelector("#Name"); 
            let price17 = card17.querySelector("#Price"); 
            img17.src = menuItems[16].imgSrc; 
            name17.textContent = `${menuItems[16].name}`; 
            price17.textContent = `$${menuItems[16].price}/-`; 

        let img18 = card18.querySelector("#Image"); 
        let name18 = card18.querySelector("#Name"); 
        let price18 = card18.querySelector("#Price"); 
        img18.src = menuItems[17].imgSrc; 
        name18.textContent = `${menuItems[17].name}`; 
        price18.textContent = `$${menuItems[17].price}/-`; 



        let img19 = card19.querySelector("#Image"); 
        let name19 = card19.querySelector("#Name"); 
        let price19 = card19.querySelector("#Price"); 
        img19.src = menuItems[18].imgSrc; 
        name19.textContent = `${menuItems[18].name}`; 
        price19.textContent = `$${menuItems[18].price}/-`; 
            
            let img20 = card20.querySelector("#Image"); 
            let name20 = card20.querySelector("#Name"); 
            let price20 = card20.querySelector("#Price"); 
            img20.src = menuItems[19].imgSrc; 
            name20.textContent = `${menuItems[19].name}`; 
            price20.textContent = `$${menuItems[19].price}/-`; 

        let img21 = card21.querySelector("#Image"); 
        let name21 = card21.querySelector("#Name"); 
        let price21 = card21.querySelector("#Price"); 
        img21.src = menuItems[20].imgSrc; 
        name21.textContent = `${menuItems[20].name}`; 
        price21.textContent = `$${menuItems[20].price}/-`; 



        let img22 = card22.querySelector("#Image"); 
        let name22 = card22.querySelector("#Name"); 
        let price22 = card22.querySelector("#Price"); 
        img22.src = menuItems[21].imgSrc; 
        name22.textContent = `${menuItems[21].name}`; 
        price22.textContent = `$${menuItems[21].price}/-`; 
            
            let img23 = card23.querySelector("#Image"); 
            let name23 = card23.querySelector("#Name"); 
            let price23 = card23.querySelector("#Price"); 
            img23.src = menuItems[22].imgSrc; 
            name23.textContent = `${menuItems[22].name}`; 
            price23.textContent = `$${menuItems[22].price}/-`; 

        let img24 = card24.querySelector("#Image"); 
        let name24 = card24.querySelector("#Name"); 
        let price24 = card24.querySelector("#Price"); 
        img24.src = menuItems[23].imgSrc; 
        name24.textContent = `${menuItems[23].name}`; 
        price24.textContent = `$${menuItems[23].price}/-`;

        let img25 = card25.querySelector("#Image"); 
        let name25 = card25.querySelector("#Name"); 
        let price25 = card25.querySelector("#Price"); 
        img25.src = menuItems[24].imgSrc; 
        name25.textContent = `${menuItems[24].name}`; 
        price25.textContent = `$${menuItems[24].price}/-`;
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

// Function to take order
function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = ['Burger A', 'Burger B', 'Burger C'];
            const order = { burgers: burgers };
            resolve(order);
            console.log(order); 
        }, 2500);
    });
}

// Function for order preparation
function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: false };
            resolve(orderStatus);
            console.log(orderStatus); 
        }, 1500);
    });
}

// Function to pay order
function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: true };
            resolve(orderStatus);
            console.log(orderStatus)
        }, 1000);
    });
}

// Function to show thank you message
function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

// Promise chaining
getMenu()
    .then(() => takeOrder())
    .then(order => orderPrep(order))
    .then(orderStatus => payOrder(orderStatus))
    .then(orderStatus => {
        if (orderStatus.paid) {
            thankyouFnc();
        }
    })
    .catch(error => console.error('Error:', error));