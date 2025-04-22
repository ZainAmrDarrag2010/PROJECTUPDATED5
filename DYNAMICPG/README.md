# Dynamic Commenting Page

This project allows users to submit comments with their name, email, and message. The comments are displayed vertically on the page using text areas, and only letters are allowed for the name field. The page also supports navigation to different sections using a dynamic navigation menu.

## Features

- **Name Validation**: The name input only accepts letters (no numbers or symbols).
- **Email Validation**: The email input validates the email format.
- **Comment Submission**: After the form is submitted, each comment is displayed as a new `textarea` element in the comments section.
- **Smooth Scrolling**: The page includes navigation links that smoothly scroll to corresponding sections.
- **Dynamic Section Highlighting**: The active navigation item is highlighted when clicked, and the corresponding section is highlighted as well.

## Project Structure


### `index.html`

Contains the structure of the page, including the navigation menu, form for submitting comments, and content sections.

### `mainpage.css`

Contains all the styles for the page, including layout and design adjustments for the comments, navigation, and section highlights.

### `mainpage.js`

Contains the JavaScript that handles:
- Validation of the form inputs (name, email, and comment).
- Adding new comments as `textarea` elements.
- Dynamic navigation behavior for highlighting the selected section and scrolling to it.
  
## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository** (if applicable) or download the project files.
2. Ensure you have the following files in the project directory:
    - `index.html`
    - `mainpage.css`
    - `mainpage.js`
    - `BG.jpg` (or another background image if preferred).
3. Open the `index.html` file in any modern web browser.

## Usage

1. **Submit a Comment**:
    - Enter your name, email, and comment in the respective fields.
    - Only letters are allowed for the name (no numbers or symbols).
    - The email must follow the proper email format (e.g., `name@example.com`).
    - Click the "Send Your Comment" button to submit your comment. Each comment will appear in its own `textarea` below the form.

2. **Navigate Between Sections**:
    - Use the navigation menu at the top to scroll to different sections of the page.
    - The currently selected section and navigation item will be highlighted.

## Example

After submitting a comment, it will appear in a new `textarea` like this:


### Form Validation

- **Name**: Only letters (no numbers or symbols) are allowed.
- **Email**: The email must be in the correct format (e.g., `example@domain.com`).
- **Comment**: All fields (name, email, and comment) are required to submit the form.

## License

This project is open-source and available under the MIT License.
