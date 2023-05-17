/** @format */

const button = document.getElementById("submitButton");
const dataInputTable = document.getElementById("dataInputTable");
const typeOfPaymentSelections = document.getElementById("typeOfPayment");
const dollarAmount = document.getElementById("moneyInput");
const expense = document.getElementById("nameOfExpense");
const dateInput = document.getElementById("dateInput");

button.addEventListener("click", function(){
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
    tableDataDate.textContent = dateInput.value;
    typeOfPaymentSelections.value = "";
    expense.value = "";
    dollarAmount.value = "";
    dateInput.value = "";
    tableRow.appendChild(tableDataType);
    tableRow.appendChild(tableDataExpense);
    tableRow.appendChild(tableDataDate);
    tableRow.appendChild(tableDataMoneyInput);
    tableRow.appendChild(deleteButton);
    dataInputTable.appendChild(tableRow);
    deleteButton.addEventListener("click", function(){
        tableRow.remove();
    })
  

    


});
