# Password Protection Guide

## How to Enable Password Protection for Popups

Password protection is **disabled by default** for all popups. You can easily enable it for specific popups by adding two data attributes to the role div in `index.html`.

### Step 1: Choose Which Popups to Protect

Decide which portfolio items you want to password protect (e.g., Resume, certain client work, etc.)

### Step 2: Add Protection Attributes

In `index.html`, find the role div you want to protect and add these two attributes:

```html
data-protected="true"
data-password="YourPasswordHere"
```

### Examples:

#### Protected Resume Popup
```html
<div id="resume" class="role" data-role="resume" 
     data-protected="true" 
     data-password="MySecret123"
     tabindex="0" role="button" aria-label="View Resume">Resume</div>
```

#### Protected GitHub Popup
```html
<div id="github" class="role" data-role="github" 
     data-protected="true" 
     data-password="GitHub2024"
     tabindex="0" role="button" aria-label="View GitHub Profile">GitHub</div>
```

#### Unprotected Popup (Default)
```html
<div id="articles" class="role" data-role="articles" 
     tabindex="0" role="button" aria-label="View Articles">Articles</div>
```

### Step 3: Test It

1. Open `index.html` in your browser
2. Click on the protected item
3. You should see a password prompt
4. Enter the password you set
5. The popup should open after correct password

### How to Disable Protection

Simply remove the two attributes:
- Remove `data-protected="true"`
- Remove `data-password="..."`

The popup will work normally without password protection.

### Security Notes

⚠️ **Important Security Information:**

1. **This is client-side protection** - The password is visible in the HTML source code
2. **Best for:** Preventing casual browsing, keeping content out of search engines
3. **NOT suitable for:** Highly sensitive information that requires true security
4. **Passwords are in plain text** in the HTML - anyone can view page source to find them

### Better Security Options

For truly sensitive content, consider:

1. **StatiCrypt** - Encrypts the entire HTML file with AES-256
   ```bash
   npm install -g staticrypt
   staticrypt popups/resume.html -p YourPassword
   ```

2. **Server-side authentication** - Use .htaccess or server middleware

3. **Private hosting** - Host protected content on a separate, private domain

### SEO Protection

To prevent search engines from indexing password-protected popups, add this to the popup HTML:

```html
<meta name="robots" content="noindex, nofollow">
```

Example: In `popups/resume.html`, add this meta tag in the `<head>` section:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    ...
</head>
```

### Troubleshooting

**Password prompt doesn't appear:**
- Check that both `data-protected="true"` and `data-password="..."` are present
- Make sure `password-protection.js` is loaded in index.html
- Check browser console for errors

**Password doesn't work:**
- Passwords are case-sensitive
- Make sure there are no extra spaces in the password
- Check the password value in the HTML source

**Want different passwords for different popups:**
- Each popup can have its own unique password
- Just set different `data-password` values

### Example: Multiple Protected Popups

```html
<!-- Resume with password "Resume2024" -->
<div id="resume" class="role" data-role="resume" 
     data-protected="true" 
     data-password="Resume2024"
     tabindex="0" role="button">Resume</div>

<!-- GitHub with password "GitHub123" -->
<div id="github" class="role" data-role="github" 
     data-protected="true" 
     data-password="GitHub123"
     tabindex="0" role="button">GitHub</div>

<!-- Articles - NO protection -->
<div id="articles" class="role" data-role="articles" 
     tabindex="0" role="button">Articles</div>
```

Each protected item can have its own unique password!

