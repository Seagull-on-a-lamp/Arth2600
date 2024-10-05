data = {
    "art": [
        {"fname":"William","lname":"Bouguereau","artName":"The Birth of Venus","date":"1879","styleMovement":"Neoclassicism","fileName":"art (1).jpeg"},
        {"fname":"Claude","lname":"Monet","artName":"La Grenouillere","date":"1869","styleMovement":"Impressionism","fileName":"art (8).jpeg"},
        {"fname":"Edgar","lname":"Degas","artName":" The Café-Concert at the Ambassadors","date":"1877","styleMovement":"Impressionism","fileName":"art (4).jpeg"},
        {"fname":"Jean-Leon","lname":"Gerome","artName":"Snake Charmer","date":"1860s","styleMovement":"Orientalism","fileName":"art (5).jpeg"},
        {"fname":"Edouard","lname":"Manet","artName":"Olympia","date":"1863","styleMovement":"Impressionism, Realism","fileName":"art (6).jpeg"},
        {"fname":"Berthe","lname":"Morisot","artName":"Woman et her Toilette","date":"1880","styleMovement":"Impressionism","fileName":"art (7).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Harmony in Red (The Dinner Table)","date":"1908","styleMovement":"Fauvism","fileName":"art (14).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Red Studio","date":"1911","styleMovement":"Fauvism","fileName":"art (15).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Interior with Eggplants","date":"1911","styleMovement":"Fauvism","fileName":"art (16).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Odalisque in Red Trousers","date":"1922","styleMovement":"Fauvism","fileName":"art (3).jpeg"},
        {"fname":"Andre","lname":"Derain","artName":"Mountains, Collioure","date":"1905","styleMovement":"Fauvism","fileName":"art (9).jpeg"},
        {"fname":"Andre","lname":"Derain","artName":"The Dance","date":"1906","styleMovement":"Fauvism","fileName":"art (10).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Open Window, Collioure","date":"1905","styleMovement":"Fauvism","fileName":"art (11).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Joy of Life","date":"1906","styleMovement":"Fauvism","fileName":"art (12).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"Blue Nude (Memory of Biskra)","date":"1907","styleMovement":"Fauvism","fileName":"art (2).jpeg"},
        {"fname":"Henri","lname":"Matisse","artName":"The Dance","date":"1910","styleMovement":"Fauvism","fileName":"art (13).jpeg"},
        {"fname":"Emil","lname":"Nolde","artName":"Masks","date":"1911","styleMovement":"Expressionism","fileName":"art (9).png"},
        {"fname":"Ernst","lname":"Kirchner","artName":"Red Nudes","date":"1913","styleMovement":"Expressionism","fileName":"art (10).png"},
        {"fname":"Ernst","lname":"Kirchner","artName":"The Street, Dresden","date":"1908","styleMovement":"Expressionism","fileName":"art (11).png"},
        {"fname":"Wassily","lname":"Kandinsky","artName":"Cover for Der Blaue Reiter Almanac","date":"1912","styleMovement":"Expressionism","fileName":"art (12).png"},
        {"fname":"Wassily","lname":"Kandinsky","artName":"Resurrection","date":"1911","styleMovement":"Expressionism","fileName":"art (1).png"},
        {"fname":"Wassily","lname":"Kandinsky","artName":"Study for Composition II","date":"1910","styleMovement":"Expressionism","fileName":"art (2).png"},
        {"fname":"Pablo","lname":"Picasso","artName":"Guitar and Sheet Music","date":"1912","styleMovement":"Cubism (Synthetic)","fileName":"art (6).png"},
        {"fname":"Pablo","lname":"Picasso","artName":"Au Bon Marche","date":"1913","styleMovement":"Cubism (Synthetic)","fileName":"art (7).png"},
        {"fname":"Pablo","lname":"Picasso","artName":"Green Still Life","date":"1914","styleMovement":"Cubism (Hermetic)","fileName":"art (8).png"},
        {"fname":"Pablo","lname":"Picasso","artName":"Demoiselles d'Avignon","date":"1907","styleMovement":"Cubism (Early Stage)","fileName":"art (3).png"},
        {"fname":"Georges","lname":"Braque","artName":"The Portugese","date":"1911","styleMovement":"Cubism (Hermetic)","fileName":"art (4).png"},
        {"fname":"Pablo","lname":"Picasso","artName":"Still Life with Chair Caning","date":"1912","styleMovement":"Cubism (Synthetic)","fileName":"art (5).png"},
        {"fname":"Claude","lname":"Monet","artName":"Waterlilies","date":"1906","styleMovement":"Impressionism","fileName":"art (3).jpg"},
        {"fname":"Ernst","lname":"Kirchner","artName":"Potsdam Square","date":"1914","styleMovement":"Expressionism","fileName":"art (1).jpg"},
        {"fname":"Pablo","lname":"Picasso","artName":"Still Life with Bottle of Suze","date":"1912","styleMovement":"Cubism (Synthetic)","fileName":"art (4).jpg"},
        {"fname":"Pablo","lname":"Picasso","artName":"Mandolin and Clarinet","date":"1914","styleMovement":"Cubism (Synthetic)","fileName":"art (5).jpg"},
        {"fname":"Wassily","lname":"Kandinsky","artName":"Composition 4","date":"1911","styleMovement":"Expressionism","fileName":"art (2).jpg"}
    ]
}

function randomSelect() {
    // Randomly select an item from the JSON data
    const randomIndex = Math.floor(Math.random() * data.art.length);
    const randomItem = data.art[randomIndex];
    console.log("Art/"+randomItem.fileName);
    document.getElementById("image").src = "Art/"+randomItem.fileName;
    document.getElementById("title").innerHTML = randomItem.artName;
    document.getElementById("artist").innerHTML = randomItem.fname +" "+ randomItem.lname;
    document.getElementById("date").innerHTML = randomItem.date;
    document.getElementById("movement").innerHTML = randomItem.styleMovement;
    document.getElementById("info").style.display = "none";

}

function info() {
    document.getElementById("info").style.display = "flex";
    document.getElementById("info").style.flexDirection = "column";

}

randomSelect();
