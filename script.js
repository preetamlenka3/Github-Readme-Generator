// Import template data from templates.js
// Example: const template1 = '...';

function generateReadme() {
    const username = document.getElementById('username').value;
    const template = document.getElementById('template').value;

    // Retrieve the selected template content
    const selectedTemplate = window[template];

    // Retrieve social media links
    const twitter = document.getElementById('twitter').value;
    const linkedin = document.getElementById('linkedin').value;
    // Add more social media variables as needed

    // Replace placeholders with user input in the selected template
    let readmeContent = selectedTemplate.replace('{{username}}', username);
    readmeContent = readmeContent.replace('{{twitter}}', twitter);
    readmeContent = readmeContent.replace('{{linkedin}}', linkedin);
    // Replace additional placeholders as needed

    // Display the generated content in the textarea
    document.getElementById('output').value = readmeContent;

    // Display live preview
    document.getElementById('livePreview').innerHTML = readmeContent;
}
