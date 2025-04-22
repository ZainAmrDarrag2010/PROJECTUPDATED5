// Array of navigation items with names, links, and target section IDs
const navItems = [
    { name: 'Magnus Carlsen', link: '#MagnusCarlsen', target: 'MagnusCarlsen' },
    { name: 'Hikaru Nakamura', link: '#HikaruNakamura', target: 'HikaruNakamura' },
    { name: 'Fabiano Caruana', link: '#FabianoCaruana', target: 'FabianoCaruana' },
    { name: 'Garry Kasparov', link: '#GarryKasparov', target: 'GarryKasparov' },
    { name: 'Alireza Firouza', link: '#AlirezaFirouza', target: 'AlirezaFirouza' },
    { name: 'Comments', link: '#commentsec', target: 'commentsec' }
];

// Function to dynamically build the navigation bar using navItems array
function buildNavBar() {
    const navbar = document.getElementById('navbar');
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.dataset.target = item.target; // Stores the section ID as a data attribute
        navbar.appendChild(li); // Adds the nav item to the navbar
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Builds navbar when the page is fully loaded
    buildNavBar();

    // Handles comment form submission
    const commentForm = document.getElementById('form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents form from submitting normally

            // Gets input values and trim whitespace
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const comment = document.getElementById('txta').value.trim();

            // Regular expressions for validation(To check if there are any strange symbols later in its specific functions using these 2 variables)
            const nameRegex = /^[A-Za-z]+$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validates inputs(Check no input is left empty)
            if (!name || !email || !comment) {
                alert('Please fill all the fields.');
                return;
            }
            if (!nameRegex.test(name)) {
                alert('Name must contain only letters (no numbers or symbols).');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Creates a new read-only textarea to display the submitted comment
            const newTextArea = document.createElement('textarea');
            newTextArea.setAttribute("readonly", true);
            newTextArea.setAttribute("cols", "100");
            newTextArea.setAttribute("rows", "10");
            newTextArea.style.width = '100%';
            newTextArea.style.marginTop = '20px';
            newTextArea.style.marginBottom = '10px';
            newTextArea.style.padding = '10px';
            newTextArea.style.textAlign = 'left';
            newTextArea.style.border = '1px solid #ccc';
            newTextArea.value = `Name: ${name}\nEmail: ${email}\nComment: ${comment}`;

            // Adds the new comment to the comment section
            document.getElementById('commentsec').appendChild(newTextArea);

            // Clears the form after submission(so that new text doesn't get added to old one)
            commentForm.reset();
        });
    }

    // Handles navbar item clicks: scroll to section and highlight it
    const navItemsList = document.querySelectorAll('#navbar li');
    let currentlyHighlighted = null;

    navItemsList.forEach(function(item) {
        item.addEventListener('click', function() {
            // Unhighlights previously selected nav item(To ensure only the selected item has that unique style)
            if (currentlyHighlighted) {
                currentlyHighlighted.style.backgroundColor = '';
            }

            // Highlights the clicked nav item
            item.style.backgroundColor = '#e0e0e0';
            currentlyHighlighted = item;

            // Resets background for all sections
            document.querySelectorAll('div[id], #commentsec').forEach(section => {
                section.style.backgroundColor = 'transparent';
            });

            // Scrolls to the corresponding section and highlight it(So it can be readed easily)
            const targetSection = document.getElementById(item.dataset.target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                targetSection.style.backgroundColor = '#f5f5f5';
            }
        });
    });
});
