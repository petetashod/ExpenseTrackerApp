/** @format */

const button = document.getElementById("submitButton");
const dataInputTable = document.getElementById("dataInputTable");
const typeOfPaymentSelections = document.getElementById("typeOfPayment");
const dollarAmount = document.getElementById("moneyInput");
const expense = document.getElementById("nameOfExpense");
const dataInput = document.getElementById("dateInput");
function formatDate(date) {
  let monthsOfTheYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "june",
    "july",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = new Date(date).getMonth() + 1;
  let year = new Date(date).getFullYear();

  let days = new Date(date).getDate();
  if (month == 1) {
    month = monthsOfTheYear[0];
  }

  if (month == 2) {
    month = monthsOfTheYear[1];
  }

  if (month == 3) {
    month = monthsOfTheYear[2];
  }
  if (month == 4) {
    month = monthsOfTheYear[3];
  }
  if (month == 5) {
    month = monthsOfTheYear[4];
  }
  if (month == 6) {
    month = monthsOfTheYear[5];
  }
  if (month == 7) {
    month = monthsOfTheYear[6];
  }
  if (month == 8) {
    month = monthsOfTheYear[7];
  }
  if (month == 9) {
    month = monthsOfTheYear[8];
  }
  if (month == 10) {
    month = monthsOfTheYear[9];
  }
  if (month == 11) {
    month = monthsOfTheYear[10];
  }
  if (month == 12) {
    month = monthsOfTheYear[11];
  }
  return `${month} / ${days} / ${year}`;
}


button.addEventListener("click", function () {
  const tableRow = document.createElement("tr");
  const tableDataType = document.createElement("td");
  const tableDataExpense = document.createElement("td");
  const tableDataMoneyInput = document.createElement("td");
  const tableDataDate = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  tableDataType.textContent = typeOfPaymentSelections.value;
  tableDataExpense.textContent = expense.value;
  tableDataMoneyInput.textContent = dollarAmount.value;
  tableDataDate.textContent = formatDate(dataInput.value);
  typeOfPaymentSelections.value = "";
  expense.value = "";
  dollarAmount.value = "";
  dataInput.value = "";
  tableRow.appendChild(tableDataType);
  tableRow.appendChild(tableDataExpense);
  tableRow.appendChild(tableDataDate);
  tableRow.appendChild(tableDataMoneyInput);
  tableRow.appendChild(deleteButton);
  dataInputTable.appendChild(tableRow);
  deleteButton.addEventListener("click", function () {
    tableRow.remove();
  });
});
