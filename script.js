// Import templates from templates.js
import { template1, template2, template3 } from 'https://preetamlenka3.github.io/Github-Readme-Generator/templates.js';

function generateReadme() {
    const username = document.getElementById('username').value;
    const template = document.getElementById('template').value;

    // Retrieve the selected template content
    let selectedTemplate;
    if (template === 'template1') {
        selectedTemplate = template1;
    } else if (template === 'template2') {
        selectedTemplate = template2;
    } else if (template === 'template3') {
        selectedTemplate = template3;
    }
    // Add more conditions for additional templates as needed

    // Retrieve social media links
    const twitter = document.getElementById('twitter').value;
    const linkedin = document.getElementById('linkedin').value;
    // Add more social media variables as needed

    // Replace placeholders with user input in the selected template
    let readmeContent = selectedTemplate.replace(/{{username}}/g, username);
    readmeContent = readmeContent.replace(/{{twitter}}/g, twitter);
    readmeContent = readmeContent.replace(/{{linkedin}}/g, linkedin);
    // Replace additional placeholders as needed

    // Display the generated content in the textarea
    document.getElementById('output').value = readmeContent;

    // Display live preview
    document.getElementById('livePreview').innerHTML = readmeContent;
}
