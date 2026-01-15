/************** CONFIG **************/
const SHEET_ID = '1F8kWXs7HjH6_bBBJG84cApHVUko7fFQcT2_S9QU6ork';
const SHEET_NAME = 'Orders';
const FOLDER_ID = '1GzuGSV3HhT8MjcejfnOcXMem9y4se4Xh';

/************** UTILITY FUNCTIONS **************/

// Returns a JSON response with the correct CORS header.
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*');
}

// Saves a base64 encoded image to a specific Google Drive folder.
function saveImageToDrive(base64, mimeType, fileName) {
  const bytes = Utilities.base64Decode(base64);
  const blob = Utilities.newBlob(bytes, mimeType, fileName);
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const file = folder.createFile(blob);

  file.setSharing(
    DriveApp.Access.ANYONE_WITH_LINK,
    DriveApp.Permission.VIEW
  );
  return file.getUrl();
}

/************** CORE API FUNCTIONS **************/

// Saves a new order to the spreadsheet.
function saveOrder(data) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

  let imageUrl = "";
  if (data.screenshot) {
    imageUrl = saveImageToDrive(
      data.screenshot,
      data.screenshotType,
      "payment_" + Date.now()
    );
  }

  sheet.appendRow([
    new Date(),              // A
    data.customerName || '', // B
    data.phone || '',        // C
    data.gender || '',       // D
    data.address || '',      // E
    data.productName || '',  // F
    data.amount || '',       // G
    data.upiId || '',        // H
    data.transactionId || '',// I
    imageUrl,                // J
    data.email || '',        // K
    "Pending Verification"   // L
  ]);

  return { success: true, message: 'Order saved.' };
}

// Updates the status of an existing order.
function updateStatus(rowIndex, status) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  // Assuming header row, so row index from frontend might need adjustment.
  // This logic depends on what `rowIndex` represents. If it's 0-based from fetched data, this is complex.
  // For now, assuming it's the direct row number.
  sheet.getRange(rowIndex, 12).setValue(status); // Column L for status
  return { success: true, message: `Row ${rowIndex} status updated.` };
}

// Fetches existing orders.
function getOrders() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  // Assuming header is in row 1.
  if (lastRow < 2) {
    return { success: true, data: [] };
  }
  const data = sheet.getRange(2, 1, lastRow - 1, 12).getValues();
  return { success: true, data: data };
}


/************** WEB APP ENDPOINTS **************/

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action || 'saveOrder';

    if (action === "updateStatus") {
      const result = updateStatus(data.rowIndex, data.status);
      return jsonResponse(result);
    }

    if (action === 'saveOrder') {
       const result = saveOrder(data);
       return jsonResponse(result);
    }
    
    // Default action if not specified
    const result = saveOrder(data);
    return jsonResponse(result);

  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

function doGet(e) {
  const action = e.parameter.action;

  if (action === 'getOrders') {
    const result = getOrders();
    return jsonResponse(result);
  }

  return jsonResponse({ success: true, message: "API Running. Use action=getOrders to fetch orders." });
}
