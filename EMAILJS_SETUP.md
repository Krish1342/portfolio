# EmailJS Setup Guide for Contact Form

The contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## Steps to Configure EmailJS:

### 1. Create an EmailJS Account

- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create an Email Service

- In the EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the instructions to connect your email account
- Note down your **Service ID** (e.g., "service_portfolio")

### 3. Create an Email Template

- Go to "Email Templates" in the dashboard
- Click "Create New Template"
- Use this template structure:

```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Note down your **Template ID** (e.g., "template_contact")

### 4. Get Your Public Key

- Go to "Account" → "General"
- Find your **Public Key** under API Keys section

### 5. Update the Contact Form Code

Open `src/components/ContactForm.jsx` and replace these values around line 28-30:

```javascript
const serviceId = "your_service_id_here"; // Replace with your Service ID
const templateId = "your_template_id_here"; // Replace with your Template ID
const publicKey = "your_public_key_here"; // Replace with your Public Key
```

### 6. Test the Contact Form

- Run your portfolio website
- Navigate to the Contact section
- Fill out and submit the form
- Check your email inbox for the message

## Current Configuration:

- **Recipient Email**: lodhakrish11@gmail.com
- **Library**: @emailjs/browser (already installed)
- **Success/Error Messages**: Built-in with automatic dismiss after 5 seconds

## Troubleshooting:

- If emails aren't sending, check the browser console for errors
- Verify all three IDs (Service ID, Template ID, Public Key) are correct
- Make sure your email service is properly connected in EmailJS dashboard
- Check EmailJS usage limits (free tier: 200 emails/month)

## Alternative: Direct mailto Link

If you prefer not to use EmailJS, users can still click the email icon to send emails directly through their email client.
