const books = [
    {
        name: "The Alchemist",
        price: "₹425",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
    },
    {
        name: "Atomic Habits",
        price: "₹350",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
    },
    {
        name: "Rich Dad Poor Dad",
        price: "₹500",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    }
];
const parent = document.getElementById("bookstore");
books.forEach(function(book) {
    const div = document.createElement("div");
    div.setAttribute("class", "book");
    const image = document.createElement("img");
    image.setAttribute("src", book.image);
    const h2 = document.createElement("h2");
    h2.innerText = book.name;
    const price = document.createElement("h2");
    price.innerText = "Price: " + book.price;
    const bt = document.createElement("button");
    bt.innerText = "Add to Cart";
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(price);
    div.appendChild(bt);
    parent.appendChild(div);
});