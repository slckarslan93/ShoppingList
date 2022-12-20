var currentList = {};

function createShoppingList() {
  currentList.name = $("#shoppingListName").val();

  //web service Call

  $("#shoppingListTitle").html(currentList.name);
  $("#shoppingListItems").empty();

  $("#createListDiv").hide();
  $("shoppingListDiv").show();
}

$(document).ready(function () {
  console.info("ready");
});
