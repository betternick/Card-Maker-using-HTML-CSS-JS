document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("itemForm");
  const clearAllButton = document.getElementById("clearAll");
  const itemList = document.getElementById("itemList");

  // Define initial item JSON
  const initialItemJson = `
    {
      "name": "Sample Item",
      "description": "This is a sample item",
      "price": "10.99",
      "image": "https://picsum.photos/id/1/200/300"
    }`;

  // Parse JSON into a JS object
  const initialItem = JSON.parse(initialItemJson);

  // Add initial item to the list
  addItem(initialItem);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = {
      name: document.getElementById("itemName").value,
      description: document.getElementById("itemDescription").value,
      price: document.getElementById("itemPrice").value,
      image: document.getElementById("itemImage").value,
    };

    addItem(item);
  });

  clearAllButton.addEventListener("click", function () {
    while (itemList.firstChild) {
      itemList.firstChild.remove();
    }
  });

  function addItem(item) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    const h2 = document.createElement("h2");
    h2.textContent = item.name;
    const p = document.createElement("p");
    p.textContent = item.description;
    const span = document.createElement("span");
    span.textContent = "$" + item.price;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteButton);
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    itemList.appendChild(li);
  }
});
