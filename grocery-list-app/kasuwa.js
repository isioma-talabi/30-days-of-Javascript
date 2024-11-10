let groceryList = [];

const groceryInput = document.getElementById("grocery-input");
const addItemButton = document.getElementById("add-item-button");
const groceryListItems = document.getElementById("grocery-list-items");

function createGroceryItem() {
  const groceryText = groceryInput.value;
  const li = document.createElement("li");
  li.textContent = groceryText;
  groceryListItems.appendChild(li);

  // Create span to contain buttons
  const span = document.createElement("span");
  span.classList.add("span-btns");
  li.appendChild(span);

  // Create Edit Button
  const editButton = document.createElement("img");
  editButton.src = "../assets/edit-icon.png";
  editButton.classList.add("style-btn");
  span.appendChild(editButton);

  // Functions to enable in-line editing
  // Create an input field and set its initial value to the current task text
  editButton.addEventListener("click", function () {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = li.textContent;
    editInput.classList.add("inline-edit-input");

    // Replace li with the input field
    groceryListItems.replaceChild(editInput, li);

    //   Focus on the input field and select its content
    editInput.focus();
    editInput.select();

    //   Create an event listener to Save the edits

    editInput.addEventListener("blur", function () {
      li.textContent = editInput.value.trim() || "Did not enter grocery item";
      groceryListItems.replaceChild(li, editInput);
      li.appendChild(span);
    });

    editInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        li.textContent = editInput.value.trim() || "Did not enter grocery item";
        groceryListItems.replaceChild(li, editInput);
        li.appendChild(span);
      }
    });
  });

  // Create Complete Status button
  const completeButton = document.createElement("img");
  completeButton.src = "../assets/checkmark-icon.png";
  completeButton.classList.add("style-btn");
  span.appendChild(completeButton);

  completeButton.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.textDecorationColor = "#d6a83a";
    editButton.style.display = "none";
    completeButton.style.display = "none";
  });

  // Create Delete  Button
  const deleteButton = document.createElement("img");
  deleteButton.src = "../assets/delete-icon.png";
  deleteButton.classList.add("style-btn");
  span.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    groceryListItems.removeChild(li);
  });
}

// Event Listener for Add Item Button

addItemButton.addEventListener("click", function () {
  createGroceryItem();
  groceryInput.value = "";
});

addItemButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createGroceryItem();
    groceryInput.value = "";
  }
});
