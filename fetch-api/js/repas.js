fetch("http://localhost:3004/products").then(response => {
    return response.json();
}).then(data =>{
    console.log(data);
    data.forEach(element => {
        //On cree des elements par ordre d'apparition
       let div = document.createElement("div");
       div.setAttribute("class","items");
       let img = document.createElement("img");
       img.setAttribute("width", "150px");
       let p1 = document.createElement("p");
       p1.setAttribute("class", "title");
       let p2 = document.createElement("p");
       p2.setAttribute("class", "prix");
       let button = document.createElement("button");
    
        //On relie les elements du tableau avec les elements crees
       img.src= element.img;
       p1.innerHTML = element.title;
       p2.innerHTML = element.price;
       button.innerHTML= "add to cart";

       div.appendChild(img);
       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(button);

       document.getElementById("container").appendChild(div);
        
    });
}).catch(error => {
    console.error(error);
})
