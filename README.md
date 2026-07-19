# message-board

**Live Site**: https://message-board-u0xu.onrender.com

## Features

- Users can post messages along with their names
  - All data is securely stored in a PostgreSQL database, ensuring messages persist and are visible to everyone
- Users can also heart posts
- Server-side form validation using [express-validator](https://www.npmjs.com/package/express-validator) with native HTML5 client-side checks
- Dynamic counter at the top of the screen to display the number of posts that have been made
- Fully polished and animated UI
- Fully responsive UI which works on all screen sizes
- Custom error pages to handle 404 (Not Found) and 500 (Internal Server Error) issues

## Tech Stack

- **Runtime Environment:** Node.js
- **Backend Framework:** Express
- **Database:** PostgreSQL
- **Database Driver:** pg (node-postgres)
- **Templating Engine:** EJS (Embedded JavaScript)
- **Data Validation:** express-validator
- **Programming Language:** JavaScript
- **Styling:** CSS 

## Getting Started

To run the site locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- A PostgreSQL database installed and running

### Installation and Setup

1. Clone this repository:

```
git clone https://github.com/jakesummer/message-board.git
cd message-board
```

2. Run `npm install` to install dependencies
3. Configure environment variables:
   Run `cp .env.example .env` to copy the example environment file to create your your own `.env`, then fill in the variables accordingly
4. Run `npm run seed` to populate your PostgreSQl database
5. Start the application with `npm run start`
6. Navigate to http://localhost:3000 (or whatever port you specified in your .env file)

## Site Preview

![Main site page](https://i.imgur.com/eQP71GW.png)
![Form to add new message](https://i.imgur.com/XmL6PpF.png)
![500 internal server error page](https://i.imgur.com/UsMdbso.png)
![404 not found page](https://i.imgur.com/tCsKHsJ.png)

## Credits

- [Font](https://fonts.google.com/specimen/Geist)
- [SVGs](https://pictogrammers.com/library/mdi/)
- [Favicon](https://staging.svgrepo.com/svg/533266/message-square-lines)
