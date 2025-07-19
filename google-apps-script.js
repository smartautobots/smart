/**
 * Google Apps Script for Road Safety Innovation Challenge 2025
 * Handles form submissions with file uploads to Google Sheets and Google Drive
 */

// Configuration
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your actual Google Sheet ID
const DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID'; // Replace with your Google Drive folder ID for uploads

function doPost(e) {
  try {
    console.log('Received POST request:', e);
    
    // Parse the request data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error('No data received');
    }
    
    console.log('Parsed data:', data);
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Team Name',
        'Category',
        'Leader Name',
        'Leader Email',
        'Leader Phone',
        'Institution',
        'Team Size',
        'Project Title',
        'Project Description',
        'Track',
        'Member Names',
        'Project File URL',
        'File Name',
        'File Type',
        'Drive File ID'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Handle file upload if present
    let driveFileId = '';
    let fileName = '';
    let fileType = '';
    let driveFileUrl = '';
    
    if (data.fileData && data.fileName) {
      try {
        // Decode base64 file data
        const fileBlob = Utilities.newBlob(
          Utilities.base64Decode(data.fileData),
          data.fileType || 'application/octet-stream',
          data.fileName
        );
        
        // Get or create the upload folder
        const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
        
        // Create a subfolder for this submission
        const submissionFolderName = `${data.teamName || 'Unknown'}_${new Date().getTime()}`;
        const submissionFolder = folder.createFolder(submissionFolderName);
        
        // Upload file to Google Drive
        const driveFile = submissionFolder.createFile(fileBlob);
        driveFileId = driveFile.getId();
        fileName = data.fileName;
        fileType = data.fileType || 'Unknown';
        driveFileUrl = driveFile.getUrl();
        
        // Make file viewable by anyone with link
        driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        
        console.log('File uploaded successfully:', fileName, driveFileId);
        
      } catch (fileError) {
        console.error('Error uploading file:', fileError);
        // Continue with form submission even if file upload fails
      }
    }
    
    // Prepare row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.teamName || '',
      data.category || '',
      data.leaderName || '',
      data.leaderEmail || '',
      data.leaderPhone || '',
      data.institution || '',
      data.teamSize || '',
      data.projectTitle || '',
      data.projectDescription || '',
      data.track || '',
      data.memberNames || '',
      driveFileUrl || data.projectFileUrl || '',
      fileName,
      fileType,
      driveFileId
    ];
    
    // Add data to sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Send email notification (optional)
    try {
      sendNotificationEmail(data, fileName, driveFileUrl);
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Registration submitted successfully!',
        fileUploaded: !!driveFileId,
        driveFileId: driveFileId
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'Error processing registration. Please try again.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Road Safety Innovation Challenge 2025 - Registration API',
      status: 'Active',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(data, fileName, driveFileUrl) {
  try {
    const subject = `New Registration: ${data.teamName || 'Unknown Team'}`;
    const body = `
New registration received for Road Safety Innovation Challenge 2025:

Team Details:
- Team Name: ${data.teamName || 'N/A'}
- Category: ${data.category || 'N/A'}
- Leader: ${data.leaderName || 'N/A'}
- Email: ${data.leaderEmail || 'N/A'}
- Phone: ${data.leaderPhone || 'N/A'}
- Institution: ${data.institution || 'N/A'}
- Team Size: ${data.teamSize || 'N/A'}

Project Details:
- Title: ${data.projectTitle || 'N/A'}
- Track: ${data.track || 'N/A'}
- Description: ${data.projectDescription || 'N/A'}

Team Members: ${data.memberNames || 'N/A'}

${fileName ? `Uploaded File: ${fileName}` : 'No file uploaded'}
${driveFileUrl ? `File URL: ${driveFileUrl}` : ''}

Timestamp: ${new Date().toLocaleString()}
    `;
    
    // Replace with your notification email
    const notificationEmail = 'roadsafety2025@innovationlab.in';
    
    MailApp.sendEmail({
      to: notificationEmail,
      subject: subject,
      body: body
    });
    
    console.log('Notification email sent successfully');
    
  } catch (error) {
    console.error('Error sending notification email:', error);
    throw error;
  }
}

// Utility function to test the script
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    teamName: 'Test Team',
    category: 'college',
    leaderName: 'John Doe',
    leaderEmail: 'john@example.com',
    leaderPhone: '+91 9876543210',
    institution: 'Test College',
    teamSize: '3',
    projectTitle: 'Test Project',
    projectDescription: 'This is a test project description',
    track: 'technology',
    memberNames: 'John Doe, Jane Smith, Bob Johnson'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

// Function to create initial sheet structure
function setupSheet() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Clear existing content
    sheet.clear();
    
    // Set up headers
    const headers = [
      'Timestamp',
      'Team Name',
      'Category',
      'Leader Name',
      'Leader Email',
      'Leader Phone',
      'Institution',
      'Team Size',
      'Project Title',
      'Project Description',
      'Track',
      'Member Names',
      'Project File URL',
      'File Name',
      'File Type',
      'Drive File ID'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
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