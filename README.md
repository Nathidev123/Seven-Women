# Eight Women Website

## Overview

**Eight Women** is my **second freelance project**, developed for a real client as a modern, responsive, full-stack web application. The website serves as the digital platform for the Eight Women initiative, providing visitors with information about the organisation, its leadership, events, community initiatives, and opportunities to get involved.

The project was designed with a strong focus on professionalism, accessibility, responsiveness, and user experience, while giving the client an intuitive content management system for managing events and organisational content.

---

## Features

### Public Website

* Modern responsive landing page
* About Eight Women
* Meet the Eight Women section
* Individual member profile pages
* Vision and Mission section
* Opinion Pieces
* Peace Initiative page
* Enyobeni 21 Memorial page
* Upcoming Events
* Event details pages
* Google Maps integration for event locations
* Get Involved page
* Contact form
* Donation and volunteering information
* Partner and sponsorship information
* Responsive design across desktop, tablet and mobile

---

### Event Management System

A secure admin dashboard allows authorised users to manage website content.

Features include:

* Create events
* Edit existing events
* Delete events
* Publish/Draft event status
* Upload event images
* Event capacity management
* Registration deadlines
* Event categories
* Event locations
* Event pricing
* Event dress code
* Event start and end times
* Dynamic event cards
* Dashboard statistics
* Protected routes using JWT authentication

---

## Technology Stack

### Frontend

* React
* React Router
* Context API
* React Hooks
* CSS3
* HTML5
* JavaScript (ES6+)
* React Icons

---

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Third-Party Services

### Cloudinary

Used for cloud image storage and optimisation.

Features:

* Secure image uploads
* Image hosting
* Automatic optimisation
* Reduced server storage requirements

---

### Multer

Used for handling multipart form uploads before sending images to Cloudinary.

---

### EmailJS

Used to power the contact form without requiring a custom mail server.

Features include:

* Contact form submissions
* Volunteer enquiries
* Partnership enquiries
* Donation enquiries
* Automatic email delivery

---

### Google Maps

Integrated to display event locations and provide users with direct navigation via Google Maps.

---

## Authentication

Authentication is implemented using:

* JSON Web Tokens (JWT)
* Protected Express middleware
* Secure password hashing
* Persistent login using local storage

---

## State Management

The application uses the React Context API to manage global state, including:

* Authentication
* Events
* Members
* Dashboard updates
* Event editing
* Event creation

---

## Image Management

Images are uploaded through Multer before being securely stored on Cloudinary.

Benefits include:

* Faster website performance
* Reliable cloud storage
* Optimised image delivery
* Reduced server storage

---

## User Experience

A strong emphasis was placed on creating a premium user experience through:

* Responsive layouts
* Modern typography
* Smooth hover animations
* Section reveal animations
* Consistent branding
* Accessible colour palette
* Mobile-first considerations
* Professional spacing and hierarchy

---

## Security

The application includes several security measures:

* Protected API routes
* JWT authentication
* Environment variables for sensitive keys
* Cloudinary API credentials stored securely
* Input validation
* Secure image upload workflow

---

## Responsive Design

The website has been built to provide a seamless experience across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## Project Structure

```text
client/
│
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Hooks/
│   ├── Context/
│   ├── Assets/
│   ├── Data/
│   └── CSS/
│
server/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
└── server.js
```

---

## Future Improvements

Planned enhancements include:

* Event registration system
* Online donations
* Newsletter subscription
* Search functionality
* Event filtering
* Blog and news management
* Analytics dashboard
* CMS for additional website content
* Dark mode
* Internationalisation (i18n)

---

## Lessons Learned

This project significantly strengthened my skills in:

* Full-stack MERN development
* REST API design
* Authentication with JWT
* Cloudinary image management
* React Context API
* State management
* Responsive web design
* Client communication
* Freelance project planning
* Debugging production deployments
* Integrating third-party services
* Building scalable React applications

---

## Acknowledgements

Special thanks to the Eight Women organisation for the opportunity to contribute to a meaningful initiative through technology.

This project represents my **second freelance software development project**, and has been an important milestone in my journey as a MERN Stack Developer.

---

## Author

**Nathi Tshabalala**

Systems Development Graduate

Full-Stack MERN Developer
