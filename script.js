function generateReadme() {
    const username = document.getElementById('username').value;
    const template = document.getElementById('template').value;
    const twitter = document.getElementById('twitter').value;
    const linkedin = document.getElementById('linkedin').value;

    // Retrieve the selected template content
    let selectedTemplate;
    if (template === 'template1') {
        selectedTemplate = `# GitHub Profile README

Hello, I'm ${username}. Welcome to my GitHub profile!

## About Me

Write a short introduction about yourself.

## Skills

- Skill 1
- Skill 2
- Skill 3

## Connect with Me

[![Twitter](https://img.shields.io/badge/Twitter-${twitter}-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/${twitter})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-${linkedin}-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/${linkedin})`;
    } 
    // Add more conditions for additional templates as needed

    // Replace placeholders with user input in the selected template
    let readmeContent = selectedTemplate.replace(/\${username}/g, username);
    readmeContent = readmeContent.replace(/\${twitter}/g, twitter);
    readmeContent = readmeContent.replace(/\${linkedin}/g, linkedin);

    // Display the generated content in the textarea
    document.getElementById('output').value = readmeContent;

    // Display live preview
    document.getElementById('livePreview').innerHTML = readmeContent;
}
