// Google Apps Script Code
function doPost(e) {
  var sheet = SpreadsheetApp.openById("https://docs.google.com/spreadsheets/d/1MPRebdv7K2S2p59axt955nuOfxBimk6f_D7afcpOBeU/edit?usp=drivesdk").getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Append form data to the spreadsheet
  sheet.appendRow([data.name, data.phone]);

  return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
}