console.log("Browser js ready to start");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-item-center justify-content-between">
  <span class="item-text">${item.plan}</span>
  <div>
    <button data-id="${item._id}"
    class="edit-me btn btn-secondary btn-sm mr-1">Change</button>
    <button data-id="${item._id}"
    class="delete-me btn btn-danger btn-sm">Remove</button>
  </div>

</li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
  e.preventDefault();

  axios.post("/create-item", { plan: createField.value })
  .then((response) => {
    document
    .getElementById("item-list")
    .insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "";
    createField.focus();
  })
  .catch((err) => {
    console.log("Please try again");
  });
});

document.addEventListener("click", function (e) {
  //delete operation
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete?")){
      axios
      .post("/delete-item", { id: e.target.getAttribute("data-id")})
      .then((response) => {
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Please try again");
      });
    }
  }

  //edit operation
  if (e.target.classList.contains("edit-me")) {
    alert("You pressed edit button");
  }
})