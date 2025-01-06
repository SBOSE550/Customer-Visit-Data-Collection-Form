function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Horeca Customer Visit Data Collection');
}


function saveFormDataWithImage(formData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Customer Data'); // Replace with your sheet name where the form responce will be stored
  const folder = DriveApp.getFolderById('image_folder_id'); // Replace with your folder ID where the image will be stored

  // Save the image file if present
  if (formData.image) {
    const blob = Utilities.newBlob(Utilities.base64Decode(formData.image), 'image/png', 'uploaded_image.png');
    const file = folder.createFile(blob);
    formData['Image Link'] = file.getUrl(); // Store the file URL in the spreadsheet
  }

  // Add the timestamp FIRST
  formData['Timestamp'] = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

  // Get headers from the *last* row if it exists, otherwise create them
  const headers = sheet.getLastRow() > 0 ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  // Get all form field names (keys from formData)
  const formFieldNames = Object.keys(formData);

  // Update headers if necessary (add new columns)
  formFieldNames.forEach(fieldName => {
    if (!headers.includes(fieldName)) {
      headers.push(fieldName);
      sheet.getRange(1, headers.length).setValue(fieldName);
    }
  });

  // Now map the data based on the *updated* headers
  const row = headers.map(header => formData[header] || "");
  sheet.appendRow(row);
  return "Form data saved successfully!";
}




// Fetch data from the Google Sheet
function fetchData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Customer Info"); // Replace with your sheet name where is all the existing customer details is stored.
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues(); //extracting data excludin hader value

  Logger.log("Fetched Data: " + JSON.stringify(data)); // testing the data that is faching
  const dropdownData = {};

  data.forEach(row => {
    const [zone, city, segment, customer] = row;

    if (!dropdownData[zone]) dropdownData[zone] = {};
    if (!dropdownData[zone][city]) dropdownData[zone][city] = {};
    if (!dropdownData[zone][city][segment]) dropdownData[zone][city][segment] = [];
    dropdownData[zone][city][segment].push(customer);
  });

  Logger.log("Dropdown Data: " + JSON.stringify(dropdownData)); //testing the data in dropdown
  return dropdownData;
}
