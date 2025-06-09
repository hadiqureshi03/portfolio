
// function submitForm(form) {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Get the form data
//   const formData = new FormData(form);
//   console.log("🚀 ~ submitForm ~ formData:", formData)

//   // Create an object to hold the form data
//   const data = {};
//   formData.forEach((value, key) => {
//     console.log("🚀 ~ formData.forEach ~ key:", key, value)
//     data[key] = value;
//   });

//   // Log the form data to the console (or send it to a server)
//   console.log(data);

//   // Display the summary in the summary section
//   const summaryContent = document.querySelector('#summary-content');
//   summaryContent.innerHTML = ''; // Clear previous content
//   for (const [key, value] of Object.entries(data)) {
//     const p = document.createElement('p');
//     p.textContent = `${key}: ${value}`;
//     summaryContent.appendChild(p);
//   }

//   return false; // Prevent default form submission
// }

function submitForm(form) {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const issueType = document.getElementById('issue-type').options[document.getElementById('issue-type').selectedIndex].text;
    const message = document.getElementById('message').value;
    
    // Create summary HTML
    let summaryHTML = `
      <div class="summary-item">
        <strong>Navn:</strong> ${name}
      </div>
      <div class="summary-item">
        <strong>E-mail:</strong> ${email}
      </div>
      <div class="summary-item">
        <strong>Telefon:</strong> ${phone}
      </div>
      <div class="summary-item">
        <strong>Problem:</strong> ${issueType}
      </div>
      <div class="summary-item">
        <strong>Besked:</strong> <p>${message}</p>
      </div>
    `;
    
    // Update summary content
    document.getElementById('summary-content').innerHTML = summaryHTML;
    
    // Hide placeholder text
    document.querySelector('.placeholder').style.display = 'none';
    
    // Flip the card
    document.querySelector('.card-container').classList.add('flipped');
    
    // Prevent actual form submission
    return false;
  }

//**** TOGGLE DARK / LIGHT MODE ****/ 

// Get DOM elements
const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize dark mode state (default to light mode for safety)
let isDarkMode = false;

// Check for system preference (if available in this environment)
try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkMode = true;
        updateUI();
    }
} catch (error) {
    // If the system preference check fails, just continue with default
    console.log("Unable to check system preference");
}
// Update UI elements based on dark mode state
function updateUI() {
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.setAttribute('aria-pressed', isDarkMode.toString());
}

// Initialize UI based on current state
updateUI();

// Toggle dark mode on click
darkModeToggle.addEventListener('click', toggleDarkMode);

// Support keyboard accessibility
darkModeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDarkMode();
    }
});

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    updateUI();
}
