# Google Apps Script Setup Instructions

## Step 1: Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script.js`
4. Save the project with a name like "Road Safety Challenge Registration"

## Step 2: Set Up Google Sheet

1. Create a new Google Sheet
2. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
3. Replace `YOUR_GOOGLE_SHEET_ID` in the script with your actual Sheet ID

## Step 3: Set Up Google Drive Folder

1. Create a new folder in Google Drive for file uploads
2. Right-click the folder and select "Get link"
3. Copy the folder ID from the URL (the string after `/folders/`)
4. Replace `YOUR_DRIVE_FOLDER_ID` in the script with your actual folder ID

## Step 4: Configure Permissions

1. In Google Apps Script, click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the web app URL (this is your endpoint)

## Step 5: Update Website

The website code has been updated to:
- Handle file uploads (including videos)
- Convert files to base64 for transmission
- Send data to your Google Apps Script endpoint
- Show proper success/error messages

## Step 6: Test the Integration

1. Run the `setupSheet()` function in Google Apps Script to initialize the sheet
2. Test with the `testScript()` function
3. Submit a test registration through the website

## Features Included

### File Upload Support
- PDF documents
- Word documents (DOC, DOCX)
- Images (JPG, JPEG, PNG)
- Videos (MP4, AVI, MOV, WMV)
- Maximum file size: 10MB

### Google Sheet Integration
- Automatic header creation
- Data validation
- File metadata tracking
- Timestamp logging

### Google Drive Integration
- Automatic folder creation for each submission
- File sharing permissions
- Direct links to uploaded files

### Email Notifications
- Automatic email alerts for new registrations
- Includes all form data and file information
- Customizable notification email address

## Security Notes

1. The Google Apps Script runs with your permissions
2. Files are stored in your Google Drive
3. The sheet is accessible with your Google account
4. Consider setting up a dedicated Google account for this project

## Troubleshooting

1. **Permission Errors**: Make sure the script has access to Drive and Sheets
2. **File Upload Fails**: Check file size and type restrictions
3. **Sheet Not Found**: Verify the Sheet ID is correct
4. **Drive Folder Issues**: Ensure the folder ID is correct and accessible

## Customization

You can modify the script to:
- Add more form fields
- Change file size limits
- Modify email templates
- Add data validation rules
- Integrate with other Google services