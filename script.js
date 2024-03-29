
$(document).ready(function () {
  $(".chosen-select").chosen();
});
const rowData = {
  "1": [
    { col1: "SugarProfile", col2: "", col3: "", col4: "" },
    { col1: "Blood SugarF", col2: "", col3: "mg/dl", col4: "" },
    { col1: "Blood SugarPP", col2: "", col3: "mg/dl", col4: "" }
  ],
  "2": [
    { col1: "Physical Examination Report", col2: "", col3: "", col4: "" },
    { col1: "Color", col2: "", col3: "Transaparency", col4: "" },
    { col1: "Chemical Examination", col2: "", col3: "", col4: "" },
    { col1: "PH:", col2: "", col3: "Sugar", col4: "" },
    { col1: "Albumin", col2: "", col3: "", col4: "" },
    { col1: "Microscopic Examination", col2: "", col3: "", col4: "" },
    { col1: "Pus Cell", col2: "/HPF", col3: "RBC", col4: "/HPF" },        //check this
    { col1: "Calcium Co-Oxalate", col2: "/HPF", col3: "   Epithelial Cell", col4: "/HPF" },
    { col1: " Granuler Cast", col2: "/HPF", col3: "", col4: "" },
  ],
  "3": [
    { col1: "Blood Uria", col2: "", col3: "mg/dl", col4: "" },
    { col1: "S.Creatinine", col2: "", col3: "mg/dl", col4: "" },
    { col1: "Uric Acid", col2: "", col3: "mg/dl", col4: "" },
    { col1: "Sodium", col2: "", col3: "mmol/L", col4: "" },
    { col1: "Potassium", col2: "", col3: "mmol/L", col4: "" },
  ],
  "4": [
    { col1: "Uric Acid", col2: "", col3: "mg/dl", col4: "" },
  ],
  "5": [
    { col1: "HIV", col2: "", col3: "TPHA", col4: "" },
    { col1: "RA-Factor", col2: "", col3: "WIDAL", col4: "" },
    { col1: "CRP", col2: "", col3: "HCV", col4: "" },
    { col1: "HbsAg", col2: "", col3: "Dengue", col4: "" },
  ],
  "6": [
    { col1: "Semen Analysis", col2: "", col3: "", col4: "" },
    { col1: "Collection Time", col2: "", col3: "Examination Time", col4: "" },
    { col1: "Color", col2: "", col3: "Volume", col4: "" },
    { col1: "Liquification", col2: "", col3: "Reaction(PH)", col4: "" },
    { col1: "Microscopic Examination", col2: "", col3: "", col4: "" },
    { col1: "Sperm Count", col2: "", col3: "Mortality", col4: "" },
    { col1: "Morphology", col2: "", col3: "Puscell", col4: "" },
  ],
  "7": [
    { col1: "STOOL EXAMINATION REPORT", col2: "", col3: "", col4: "" },
    { col1: "Physical Examination", col2: "", col3: "", col4: "" },
    { col1: "Color:", col2: "", col3: "Consistency", col4: "" },
    { col1: "Mucos", col2: "", col3: "Blood", col4: "N/L" },
    { col1: "MICROSCOPIC EXAMINATION", col2: "", col3: "", col4: "" },
    { col1: "PUSS Cell:", col2: "0-0/HPF", col3: "Helmenth:", col4: "Not Seen" },
    { col1: "Protozoo:", col2: "Not Seen", col3: "UFP:", col4: "Seen" },
  ],
  "8": [
    { col1: "CBC", col2: "", col3: "", col4: "" },
    { col1: "Blood Hb%", col2: "", col3: "gm/dl", col4: "" },
    { col1: "TLC", col2: "", col3: "mm³", col4: "" },
    { col1: "Platelates", col2: "", col3: "mm³", col4: "" },
    { col1: "DLC", col2: "", col3: "", col4: "" },
    { col1: "Neutrophils", col2: "", col3: "%", col4: "(45-75)" },
    { col1: "Lymphocyte", col2: "", col3: "%", col4: "(26-40)" },
    { col1: "Esinophils", col2: "", col3: "%", col4: "(2-6)" },
    { col1: "Monocyte", col2: "", col3: "%", col4: "(1-10)" },
    { col1: "Basophils", col2: "", col3: "%", col4: "(0-1)" },
    { col1: "ESR", col2: "mm/1sthr", col3: "", col4: "" },    //check this col2
  ],
  "9": [
    { col1: "Bilirubin Test", col2: "", col3: "", col4: "" },
    { col1: "Bilirubin Total", col2: "", col3: "mg/dl", col4: "" },
    { col1: "Bilirubin Direct", col2: "", col3: "mg/dl", col4: "" },
  ],
  "10": [
    { col1: "Liver Function Test", col2: "", col3: "", col4: "" },
    { col1: "SGOT(AST)", col2: "", col3: "U/L", col4: "" },
    { col1: "GPT(ALT)", col2: "", col3: "U/L", col4: "" },
    { col1: "Total Protein", col2: "", col3: "mg/dl", col4: "" },
    { col1: "Albumine", col2: "", col3: "mg/dl", col4: "" },
  ],
  "11": [
    { col1: "HB Test", col2: "", col3: "", col4: "" },
    { col1: "Blood Hb%", col2: "", col3: "gm/dl", col4: "" },
  ],
  "12": [
    { col1: "HCV", col2: "Non-Reactive", col3: "HbsAg", col4: "Non-Reactive" }
  ],
  "13": [
    { col1: "WIDAL", col2: "Negative", col3: "", col4: "" },  
    { col1: "Typhoid", col2: "Positive", col3: "mg/dl", col4: "" }
  ],
  "14": [
    { col1: "Dengue", col2: "", col3: "", col4: "" },
    { col1: "NS1Ag", col2: "Negative", col3: "IgM/ldG", col4: "Negative" },
  ],
  "15": [
    { col1: "Lipid Profile", col2: "", col3: "", col4: "" },
    { col1: "Total Cholestrol", col2: "", col3: "mg/dl", col4: "(>200)" },
    { col1: "HDL Cholestrol", col2: "", col3: "mg/dl", col4: "(>60)" },
    { col1: "Triglyceride Cholestrol", col2: "", col3: "mg/dl", col4: "(<150)" },
    { col1: "LDL Cholestrol", col2: "", col3: "mg/dl", col4: "(<130)" },
    { col1: "VLDL Cholestrol", col2: "", col3: "mg/dl", col4: "(<30)" },
  ],
  "16": [
    { col1: "Blood Sugar R", col2: "", col3: "mg/dl", col4: "(70-140)" },
  ],
  "17": [
  { col1: "CRP", col2: "Negative", col3: "", col4: "" },
  ],
  "18": [
    { col1: "", col2: "", col3: "", col4: "" },
    { col1: "", col2: "", col3: "", col4: "" },
    { col1: "", col2: "", col3: "", col4: "" },
    { col1: "", col2: "", col3: "", col4: "" },

  ]

};
const printButton = document.getElementById('print-button');
const dataForm = document.getElementById('data-form');
const dataDisplay = document.getElementById('data-display');

let labNumberCounter = 1;

printButton.addEventListener('click', function () {
  // Get the data from the form
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const sex = document.getElementById('sex').value;
  const refBy = document.getElementById('refBy').value;
  const address = document.getElementById('address').value;
  // const labNo = document.getElementById('lab-no').value;

  function generateLabNumber() {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit number
    const formattedNumber = randomNumber.toString(); // Convert the number to a string
    const formattedLabNumber = formattedNumber.substring(0, 2) + '-' + formattedNumber.substring(2, 5);
    return formattedLabNumber;
  }
  const data = generateLabNumber();


  function getCurrentDate() {
    const today = new Date();

    // Get year, month, and day
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1 and pad with '0'
    const day = String(today.getDate()).padStart(2, '0');

    // Create a formatted date string (e.g., 'YYYY-MM-DD')
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
  const date = getCurrentDate();

  // Update the displayed data
  document.getElementById('print-name').textContent = name;
  document.getElementById('print-age').textContent = `${age} yrs/${sex}`;
  document.getElementById('print-refBy').textContent = refBy;
  document.getElementById('print-address').textContent = address;
  document.getElementById('print-labNo').textContent = data;
  document.getElementById('print-date').textContent = date;



  // Show the hidden data
  dataDisplay.classList.remove('hidden');

  // Hide the form
  dataSelector.style.display = 'none';
  dataForm.style.display = 'none';

  // Print the displayed data
  window.print();
});

// Listen for the afterprint event to restore the original form
window.addEventListener('afterprint', function () {
  // Show the form
  dataSelector.style.display = 'block';
  dataForm.style.display = 'block';

  // Hide the displayed data
  dataDisplay.classList.add('hidden');
});
////////////


function showSelectedRows() {
  // Get the selected value from the dropdown
  var selectedValue = document.getElementById("dataSelector").value;

  // Get the table body where rows will be displayed
  var tableBody = document.querySelector("#dataTable tbody");

  // Show rows based on the selected value
  const rows = rowData[selectedValue];
  if (rows) {
    rows.forEach(rowData => {
      const row = tableBody.insertRow();

      // Create cells and set content
      const cell1 = row.insertCell(0);
      cell1.textContent = rowData.col1;

      const cell2 = row.insertCell(1);
      cell2.innerHTML = `<input type="text" value="${rowData.col2}" onchange="updateCellValue(this, ${selectedValue}, 'col2')" style="border: none; text-align: center;">`;

      const cell3 = row.insertCell(2);
      cell3.textContent = rowData.col3;

      const cell4 = row.insertCell(3);
      cell4.innerHTML = `<div class="text-center"><input type="text" value="${rowData.col4}" onchange="updateCellValue(this, ${selectedValue}, 'col4')" style="border: none; display: inline-block;"></div>`;

      // Make all cells editable
      for (const cell of row.cells) {
        cell.addEventListener('click', function () {
          if (!this.querySelector('input')) { // Check if there's no input element already
            const originalValue = this.textContent.trim(); // Trim whitespace
            const inputType = originalValue.match(/\d+\.?\d*/) ? 'number' : 'text'; // Infer input type based on content

            const inputElement = document.createElement('input');
            inputElement.type = inputType;
            inputElement.value = originalValue;
            inputElement.style.border = 'none'; // Set a basic border if desired
            inputElement.style.width = this.offsetWidth + 'px'; // Match cell width
            inputElement.classList.add('editable-cell'); // Optional class for styling

            this.textContent = ''; // Clear existing content
            this.appendChild(inputElement);

            inputElement.focus(); // Focus on the input for immediate editing

            inputElement.addEventListener('blur', function () { // Handle blur event for saving changes
              const newValue = this.value.trim();

              if (newValue !== originalValue) {
                // Update cell content and data structure (replace 'dataStructure' with your actual data structure)
                this.parentNode.textContent = newValue;
                updateCellValue(dataStructure, selectedValue, this.parentNode.cellIndex, newValue); // Update data structure using cell index
              } else {
                // Revert to the original content if there's no change
                this.parentNode.textContent = originalValue;
              }

              this.parentNode.removeChild(this); // Remove the input element
            });

            inputElement.addEventListener('keydown', function (event) { // Handle Escape key to cancel editing
              if (event.key === 'Escape') {
                this.parentNode.textContent = originalValue;
                this.parentNode.removeChild(this);
              }
            });
          }
        });
      }
    });
  }
}

