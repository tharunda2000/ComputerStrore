let products = [
    {
        name:"HP 250 G7 | i5 8th Gen | 256GB SSD | 8GB RAM DDR4",
        price:78000,
        image:"https://computerstore.lk/wp-content/uploads/2025/06/HP-250-G7.jpg"

    },
    {
        name:"MSI PRO MP251L E2 24.5",
        price:32000,
        image:"https://computerstore.lk/wp-content/uploads/2025/04/MP251L-E2-1.jpg"

    },
    {
        name:"MSI CLUTCH GM11 GAMING MOUSE ",
        price:11000,
        image:"https://computerstore.lk/wp-content/uploads/2024/01/MSI-CLUTCH-GM11-GAMING-MOUSE.jpg"

    },
    {
        name:"REDRAGON KUMARA PRO K552P MECHANICAL KEYBOARD",
        price:13000,
        image:"https://computerstore.lk/wp-content/uploads/2024/08/REDRAGON-KUMARA-PRO-K552P-MECHANICAL-KEYBOARD-2.jpg"

    },
    {
        name:"Lexar SSD 1tb M.2 NVME Nm620",
        price:"22500",
        image:"https://computerstore.lk/wp-content/uploads/2024/01/Ssd-Lexar-1tb-M.2-Nvme-Nm620.jpg"

    },
    {
        name:"HP 250 G7 | i5 8th Gen | 256GB SSD | 8GB RAM DDR4",
        price:78000,
        image:"https://computerstore.lk/wp-content/uploads/2025/06/HP-250-G7.jpg"

    },
    {
        name:"MSI PRO MP251L E2 24.5",
        price:32000,
        image:"https://computerstore.lk/wp-content/uploads/2025/04/MP251L-E2-1.jpg"

    },
    {
        name:"MSI CLUTCH GM11 GAMING MOUSE ",
        price:11000,
        image:"https://computerstore.lk/wp-content/uploads/2024/01/MSI-CLUTCH-GM11-GAMING-MOUSE.jpg"

    },
    {
        name:"REDRAGON KUMARA PRO K552P MECHANICAL KEYBOARD",
        price:13000,
        image:"https://computerstore.lk/wp-content/uploads/2024/08/REDRAGON-KUMARA-PRO-K552P-MECHANICAL-KEYBOARD-2.jpg"

    },
    {
        name:"Lexar SSD 1tb M.2 NVME Nm620",
        price:"22500",
        image:"https://computerstore.lk/wp-content/uploads/2024/01/Ssd-Lexar-1tb-M.2-Nvme-Nm620.jpg"

    },
    {
        name:"MSI CLUTCH GM11 GAMING MOUSE ",
        price:11000,
        image:"https://computerstore.lk/wp-content/uploads/2024/01/MSI-CLUTCH-GM11-GAMING-MOUSE.jpg"

    },
    {
        name:"REDRAGON KUMARA PRO K552P MECHANICAL KEYBOARD",
        price:13000,
        image:"https://computerstore.lk/wp-content/uploads/2024/08/REDRAGON-KUMARA-PRO-K552P-MECHANICAL-KEYBOARD-2.jpg"

    },
    {
        name:"Lexar SSD 1tb M.2 NVME Nm620",
        price:"22500",
        image:"https://computerstore.lk/wp-content/uploads/2024/01/Ssd-Lexar-1tb-M.2-Nvme-Nm620.jpg"

    },
    {
        name:"HP 250 G7 | i5 8th Gen | 256GB SSD | 8GB RAM DDR4",
        price:78000,
        image:"https://computerstore.lk/wp-content/uploads/2025/06/HP-250-G7.jpg"

    },
    {
        name:"MSI PRO MP251L E2 24.5",
        price:32000,
        image:"https://computerstore.lk/wp-content/uploads/2025/04/MP251L-E2-1.jpg"

    },
    {
        name:"MSI CLUTCH GM11 GAMING MOUSE ",
        price:11000,
        image:"https://computerstore.lk/wp-content/uploads/2024/01/MSI-CLUTCH-GM11-GAMING-MOUSE.jpg"

    },
    {
        name:"REDRAGON KUMARA PRO K552P MECHANICAL KEYBOARD",
        price:13000,
        image:"https://computerstore.lk/wp-content/uploads/2024/08/REDRAGON-KUMARA-PRO-K552P-MECHANICAL-KEYBOARD-2.jpg"

    },
    {
        name:"Lexar SSD 1tb M.2 NVME Nm620",
        price:"22500",
        image:"https://computerstore.lk/wp-content/uploads/2024/01/Ssd-Lexar-1tb-M.2-Nvme-Nm620.jpg"

    },
    
]

function getProducts(){

    let body = "";
    products.map((item)=>{
        body+=`<div class="bg-blue-100 shadow-md rounded-2xl p-4 flex flex-col items-center hover:shadow-xl transition duration-300">
            <img src="${item.image}" alt="${item.name}" class="w-32 h-32 object-contain mb-4" />
            <h1 class="text-lg font-semibold text-gray-800 mb-2">${item.name}</h1>
            <h2 class="text-blue-600 font-bold text-md">Rs. ${item.price}</h2>
        </div>`
    })

    document.getElementById("products").innerHTML=body;
}

getProducts();