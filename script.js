function generateReadme() {
    const username = document.getElementById('username').value;
    const template = document.getElementById('template').value;
    const twitter = document.getElementById('twitter').value;
    const linkedin = document.getElementById('linkedin').value;

    // Additional features placeholders
    const visitorsBadge = '<!-- Insert Visitors Counter Badge code here -->';
    const profileStatsCard = '<!-- Insert GitHub Profile Stats Card code here -->';
    const topSkillsSection = '<!-- Insert GitHub Top Skills code here -->';
    const streakStatsCard = '<!-- Insert GitHub Streak Stats code here -->';

    // Retrieve the selected template content
    const templates = {
        template1: `# GitHub Profile README

Hello, I'm ${username}. Welcome to my GitHub profile!

## About Me

Write a short introduction about yourself.

## Skills

- Skill 1
- Skill 2
- Skill 3

## Connect with Me

[![Twitter](https://img.shields.io/badge/Twitter-${twitter}-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/${twitter})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-${linkedin}-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/${linkedin})

## Additional Features

${visitorsBadge}
${profileStatsCard}
${topSkillsSection}
${streakStatsCard}`,
        // Add more templates as needed
    };

    // Check if the selected template is valid
    if (!templates.hasOwnProperty(template)) {
        console.error('Invalid template selected.');
        return;
    }

    // Retrieve the selected template content
    let selectedTemplate = templates[template];

    // Replace placeholders in the selected template
    let readmeContent = replacePlaceholders(selectedTemplate, {
        username,
        twitter,
        linkedin,
        // Add more placeholders as needed
    });

    // Display the generated content in the textarea
    document.getElementById('output').value = readmeContent;

    // Display live preview
    document.getElementById('livePreview').innerHTML = readmeContent;
}

function replacePlaceholders(template, replacements) {
    for (const [key, value] of Object.entries(replacements)) {
        const placeholderRegex = new RegExp(`\\$\\{${key}}`, 'g');
        template = template.replace(placeholderRegex, value);
    }
    return template;
}
