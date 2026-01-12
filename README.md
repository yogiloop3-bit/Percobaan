# Professional GitHub Portfolio

A modern, responsive, and easy-to-customize portfolio website designed to showcase your GitHub projects automatically.

## 🚀 How to Use

### 1. Deployment (GitHub Pages)
To make this website live on the internet:
1. Go to your GitHub repository's **Settings**.
2. Scroll down to the **Pages** section (or click "Pages" in the sidebar).
3. Under **Source**, select `main` (or `master`) branch.
4. Click **Save**.
5. Wait a few seconds, and GitHub will give you a link (e.g., `https://yogi.github.io/repo-name`).

### 2. Customization

#### Change Username
The website currently fetches repositories for user **yogiloop3-bit**.
To change this in the future, open `script.js` and edit line 3:
```javascript
const githubUsername = 'YOUR_NEW_USERNAME';
```

#### Update Personal Info
Open `index.html` to change:
- Your Name (Hero section)
- About text
- Contact email and social links

#### Change Colors
Open `style.css` and modify the variables at the top (`:root`) to change the color scheme.

## 🛠 Technologies
- **HTML5** (Semantic structure)
- **CSS3** (Variables, Flexbox, Grid, Responsive Design)
- **JavaScript** (ES6, Fetch API)
- **FontAwesome** (Icons)

## 📄 License
Open source and free to use.
