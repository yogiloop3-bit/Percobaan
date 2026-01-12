document.addEventListener('DOMContentLoaded', () => {
    // Configuration: Change this to your GitHub username
    const githubUsername = 'octocat';
    const reposContainer = document.getElementById('repos-container');

    // Fetch repositories from GitHub API
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Clear loading message
            reposContainer.innerHTML = '';

            // Update GitHub link in contact section
            const githubLink = document.getElementById('github-link');
            if(githubLink) {
                githubLink.href = `https://github.com/${githubUsername}`;
            }

            // Loop through repositories and create cards
            data.forEach(repo => {
                const card = document.createElement('div');
                card.classList.add('repo-card');

                // Determine language color (basic mapping)
                const langColor = getLanguageColor(repo.language);

                card.innerHTML = `
                    <div class="repo-name">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="repo-desc">
                        ${repo.description ? repo.description : 'No description available.'}
                    </div>
                    <div class="repo-meta">
                        <div class="repo-language">
                            <span class="lang-color" style="background-color: ${langColor}"></span>
                            ${repo.language ? repo.language : 'Unknown'}
                        </div>
                        <div class="repo-stars">
                            <i class="fas fa-star"></i> ${repo.stargazers_count}
                        </div>
                    </div>
                `;

                reposContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            reposContainer.innerHTML = '<p>Error loading projects. Please check your connection or configuration.</p>';
        });

    // Helper function for language colors
    function getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'Java': '#b07219',
            'TypeScript': '#2b7489',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'C++': '#f34b7d',
            'Ruby': '#701516',
            'Go': '#00ADD8',
            'PHP': '#4F5D95'
        };
        return colors[language] || '#ccc';
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
