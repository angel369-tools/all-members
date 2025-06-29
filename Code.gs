function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveData(mailText) {
  const sheet = SpreadsheetApp.openById('1xgrAk48zHUvIMPfO7jI7LKF1ITyexeKlibWHJiiF7ZM').getSheetByName('all-members');

  const parsedData = parseMailText(mailText);
  if (!parsedData) {
    throw new Error('解析に失敗しただなっす…');
  }

  sheet.appendRow(parsedData);
}

function parseMailText(text) {
  const today = new Date();
  return [Utilities.formatDate(today, "Asia/Tokyo", "yyyy/MM/dd"), text.trim()];
}
