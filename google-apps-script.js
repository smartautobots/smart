function doPost(e) {
  try {
    // Get the active spreadsheet (make sure this script is bound to your sheet)
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    var data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.teamName || !data.category || !data.leaderName || !data.leaderEmail) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Missing required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      var headers = [
        'Timestamp',
        'Team Name',
        'Category',
        'Leader Name',
        'Leader Email',
        'Leader Phone',
        'Institution',
        'Team Size',
        'Project Title',
        'Track',
        'Project Description',
        'Member Names',
        'File Uploaded'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Create a new row with the form data
    var newRow = [
      new Date(), // Timestamp
      data.teamName || '',
      data.category || '',
      data.leaderName || '',
      data.leaderEmail || '',
      data.leaderPhone || '',
      data.institution || '',
      data.teamSize || '',
      data.projectTitle || '',
      data.track || '',
      data.projectDescription || '',
      data.memberNames || '',
      data.fileUploaded || 'No'
    ];
    
    // Add the new row to the sheet
    sheet.appendRow(newRow);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, newRow.length);
    
    // Optional: Send confirmation email
    try {
      MailApp.sendEmail({
        to: data.leaderEmail,
        subject: 'Road Safety Innovation Challenge 2025 - Registration Confirmed',
        htmlBody: `
          <h2>Registration Confirmed!</h2>
          <p>Dear ${data.leaderName},</p>
          <p>Your team "<strong>${data.teamName}</strong>" has been successfully registered for the Road Safety Innovation Challenge 2025.</p>
          <p><strong>Registration Details:</strong></p>
          <ul>
            <li>Team Name: ${data.teamName}</li>
            <li>Category: ${data.category}</li>
            <li>Project Title: ${data.projectTitle}</li>
            <li>Track: ${data.track}</li>
            <li>File Upload Status: ${data.fileUploaded === 'Yes' ? 'Completed' : 'Not completed'}</li>
          </ul>
          ${data.fileUploaded !== 'Yes' ? '<p><strong>Note:</strong> If you haven\'t uploaded your project files yet, please do so using the Google Form link provided during registration.</p>' : ''}
          <p>We will contact you soon with further details about the next steps.</p>
          <p>Best regards,<br>Road Safety Innovation Challenge Team</p>
        `
      });
    } catch (emailError) {
      console.log('Email sending failed:', emailError);
      // Don't fail the entire request if email fails
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Registration submitted successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.log('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Server error occurred. Please try again.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to get all registrations (for testing)
function getAllRegistrations() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

// Optional: Function to test the doPost function
function testDoPost() {
  var testData = {
    teamName: 'Test Team',
    category: 'college',
    leaderName: 'John Doe',
    leaderEmail: 'john@example.com',
    leaderPhone: '+91 9876543210',
    institution: 'Test College',
    teamSize: '3',
    projectTitle: 'Smart Traffic Management',
    track: 'technology',
    projectDescription: 'An AI-powered solution for traffic management',
    memberNames: 'John Doe, Jane Smith, Bob Johnson',
    fileUploaded: 'Yes'
  };
  
  var mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  var result = doPost(mockEvent);
  console.log(result.getContent());
}

// Function to setup initial sheet headers (run this once)
function setupSheet() {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Clear existing content
    sheet.clear();
    
    // Set up headers
    var headers = [
      'Timestamp',
      'Team Name',
      'Category',
      'Leader Name',
      'Leader Email',
      'Leader Phone',
      'Institution',
      'Team Size',
      'Project Title',
      'Track',
      'Project Description',
      'Member Names',
      'File Uploaded'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    console.log('Sheet setup completed successfully');
    
  } catch (error) {
    console.error('Error setting up sheet:', error);
  }
}