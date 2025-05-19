# Personal Portfolio Website

A clean, responsive portfolio website for AWS & Frontend Developers built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Dark/Light mode toggle with local storage persistence
- Smooth scrolling navigation with scroll indicators
- Contact form with email notification functionality
- Sections for showcasing skills, projects, and contact information
- Clean and modern UI with subtle animations

## Getting Started

### Prerequisites

This project is built with pure HTML, CSS, and JavaScript. No special prerequisites are needed except a web browser to view the site.

### Installation

1. Clone or download this repository to your local machine
2. Open the project folder in your code editor
3. Edit the files as described in the customization section
4. Upload to your web hosting service

## Customization

### Basic Information

Edit the following in `index.html`:

- Update your name and title in the hero section
- Change the "About Me" section content
- Update your skills and project information
- Change contact information

### Profile Picture & Project Images

1. Replace the following images in the `assets` folder:
   - `profile.jpg` - Your profile picture (recommended size: at least 300x300px)
   - `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots (recommended size: at least 800x600px)
   - `resume.pdf` - Your resume/CV file

### Email Functionality

The contact form is set up to work with EmailJS service. To make it functional:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `js/contact.js`:
   - Replace `YOUR_USER_ID` with your EmailJS user ID
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID

Alternatively, you can use FormSubmit:
1. Edit the form tag in `index.html`
2. Add `action="https://formsubmit.co/your@email.com" method="POST"`
3. Replace `your@email.com` with your actual email

### Colors & Styling

To change the color scheme, edit the CSS variables in the `:root` section of `css/styles.css`. The main variables are:

```css
:root {
    --accent-color: #4a6cf7;     /* Primary accent color */
    --accent-hover: #3a57e0;     /* Accent hover color */
    --bg-primary: #ffffff;       /* Main background color */
    --bg-secondary: #f5f7fa;     /* Secondary background color */
    --text-primary: #333333;     /* Main text color */
    --text-secondary: #666666;   /* Secondary text color */
}
```

## Deployment

The website can be deployed to any web hosting service that supports static websites, such as:

- GitHub Pages
- Netlify
- Vercel
- Amazon S3 (since you mentioned AWS knowledge)

## License

This project is open-source and free to use for personal and commercial purposes.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- EmailJS/FormSubmit for contact form functionality
