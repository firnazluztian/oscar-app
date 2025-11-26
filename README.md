# O.S.C.A.R. (Orchestrator Smart Classroom Assistant)

O.S.C.A.R. is a multi-platform system designed to improve classroom learning through real-time feedback, AI support, and easier communication between teachers and students.

## Project Overview

O.S.C.A.R. provides a comprehensive solution for modern classrooms, enabling seamless interaction between teachers, students, and administrators. The platform facilitates real-time learning, AI-powered assistance, and efficient classroom management.

### Key Features

#### Student Web App
- Join lessons with a one-time code
- Ask questions to an AI assistant
- Mark unclear points during lessons
- Take quizzes and assessments
- Access screenshots and class recordings
- Real-time lesson participation

#### Teacher Web App (Smart Board)
- Start and manage lessons
- Generate join codes for students
- Capture screenshots during lessons
- Screen recording capabilities
- Create and manage quizzes
- Receive AI suggestions about teaching pace and clarity
- Monitor student engagement in real-time

#### Admin System
**Super Admins:**
- Manage global platform settings
- Configure system-wide policies
- Oversee all schools and users

**School Admins:**
- Manage teachers and students
- Configure devices and permissions
- Set data retention policies (30–365 days)
- View analytics and reports

#### Team Profile
- Project summary and overview
- Team information and statistics

---

## Project Structure

```
OSCAR/
├── oscar-web-app/              # Main Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── (features)/     # Feature-based routes
│   │   │   │   ├── student/     # Student interface route
│   │   │   │   ├── teacher/     # Teacher interface route
│   │   │   │   ├── admin-access/# Admin dashboard route
│   │   │   │   └── team-profile/# Team profile route
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── page.tsx         # Home page
│   │   └── containers/          # Feature containers/components
│   │       ├── student-web/
│   │       ├── teacher-web/
│   │       ├── admin-web/
│   │       └── team-profile-web/
│   ├── public/                  # Static assets
│   └── package.json
├── backend/                     # Backend services (to be implemented)
└── README.md                    # This file
```

### Route Structure

The application uses Next.js App Router with feature-based routing:

- **`/`** - Home/Team Profile page
- **`/student`** - Student web interface
- **`/teacher`** - Teacher web interface (Smart Board)
- **`/admin-access`** - Admin dashboard
- **`/team-profile`** - Project summary and team information

---

## Tech Stack

### Frontend Framework

#### **Next.js 16**
- **What it is:** A React framework for building full-stack web applications
- **Why we use it:**
  - Server-side rendering (SSR) for better performance
  - Built-in API routes for backend functionality
  - File-based routing system
  - Automatic code splitting and optimization
  - Excellent developer experience
- **Version:** 16.0.4

#### **React 19**
- **What it is:** A JavaScript library for building user interfaces
- **Why we use it:**
  - Component-based architecture
  - Efficient rendering with virtual DOM
  - Large ecosystem and community
  - Declarative programming model
- **Version:** 19.2.0

### Styling & UI

#### **Tailwind CSS 4**
- **What it is:** A utility-first CSS framework
- **Why we use it:**
  - Rapid UI development
  - Responsive design utilities
  - Consistent design system
  - Small bundle size (only used classes are included)
- **Version:** 4.x

#### **Ant Design (antd) 6**
- **What it is:** A comprehensive UI component library
- **Why we use it:**
  - Pre-built, professional components
  - Consistent design language
  - Accessibility built-in
  - Reduces development time
- **Version:** 6.0.0

### Language & Type Safety

#### **TypeScript 5**
- **What it is:** JavaScript with static type checking
- **Why we use it:**
  - Catches errors before runtime
  - Better code editor support (autocomplete, refactoring)
  - Self-documenting code
  - Easier collaboration and maintenance
- **Version:** 5.x

### Development Tools

#### **ESLint**
- **What it is:** A tool for finding and fixing code problems
- **Why we use it:**
  - Enforces code quality standards
  - Catches bugs early
  - Ensures consistent code style
- **Version:** 9.x

#### **PostCSS**
- **What it is:** A tool for transforming CSS with JavaScript plugins
- **Why we use it:**
  - Processes Tailwind CSS
  - Optimizes CSS output
  - Enables modern CSS features

### Fonts

#### **Geist & Geist Mono**
- **What it is:** Modern, clean fonts from Vercel
- **Why we use it:**
  - Excellent readability
  - Professional appearance
  - Optimized for screens

---

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: [nodejs.org](https://nodejs.org/)
   - This includes npm (Node Package Manager)

2. **Git** (for version control)
   - Download from: [git-scm.com](https://git-scm.com/)
   - Or install via your system's package manager

3. **A Code Editor** (recommended: VS Code)
   - Download from: [code.visualstudio.com](https://code.visualstudio.com/)

### Installation Steps

#### Step 1: Clone the Repository

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
git clone <repository-url>
cd OSCAR
```

**Note:** Replace `<repository-url>` with the actual Git repository URL provided by your team.

#### Step 2: Navigate to the Web App Directory

```bash
cd oscar-web-app
```

#### Step 3: Install Dependencies

This will download all the required packages (libraries and tools) needed for the project:

```bash
npm install
```

**What this does:**
- Reads `package.json` to see what packages are needed
- Downloads and installs them in the `node_modules` folder
- This may take a few minutes on first run

#### Step 4: Start the Development Server

```bash
npm run dev
```

**What this does:**
- Starts a local development server
- Usually runs on `http://localhost:3000`
- The page will automatically reload when you make changes

#### Step 5: Open in Browser

Open your web browser and go to:
```
http://localhost:3000
```

You should see the O.S.C.A.R. application!

### Available Scripts

In the `oscar-web-app` directory, you can run:

- **`npm run dev`** - Start development server (with hot reload)
- **`npm run build`** - Build the app for production
- **`npm run start`** - Start the production server (after building)
- **`npm run lint`** - Check code for errors and style issues

---

## Git Collaboration Guide

### Basic Git Workflow

#### 1. Check Your Current Status

Before making changes, see what files have been modified:

```bash
git status
```

#### 2. Create a New Branch

**Always create a new branch for your work!** Never work directly on `main` or `master`.

```bash
git checkout -b feature/your-feature-name
```

**Example:**
```bash
git checkout -b feature/add-student-login
```

**Branch naming conventions:**
- `feature/` - For new features (e.g., `feature/add-quiz-functionality`)
- `fix/` - For bug fixes (e.g., `fix/login-error`)
- `refactor/` - For code improvements (e.g., `refactor/student-component`)

#### 3. Make Your Changes

Edit files in your code editor, save them, and test your changes.

#### 4. Stage Your Changes

Tell Git which files you want to include in your commit:

```bash
# Stage all changed files
git add .

# Or stage specific files
git add src/app/student/page.tsx
```

#### 5. Commit Your Changes

Save your changes with a descriptive message:

```bash
git commit -m "Add student login functionality"
```

**Good commit messages:**
- "Add student quiz component"
- "Fix teacher dashboard loading issue"
- "Update admin user management UI"
- "fix" (too vague)
- "changes" (not descriptive)

#### 6. Push Your Branch

Upload your branch to the remote repository:

```bash
git push origin feature/your-feature-name
```

#### 7. Create a Pull Request

1. Go to your Git hosting platform (GitHub, GitLab, etc.)
2. You'll see a prompt to create a Pull Request (PR)
3. Fill in the description of your changes
4. Request a team member to review your code
5. Once approved, your changes will be merged into the main branch

### Important Git Rules

1. **Never commit directly to `main` branch** - Always use feature branches
2. **Pull latest changes before starting work:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```
3. **Commit often** - Small, frequent commits are better than large ones
4. **Write clear commit messages** - Help your team understand what changed
5. **Test before pushing** - Make sure your code works!

### Common Git Commands

```bash
# See what branch you're on
git branch

# Switch to a different branch
git checkout branch-name

# See what files changed
git status

# See the actual changes
git diff

# Update your branch with latest changes from main
git checkout main
git pull origin main
git checkout your-branch
git merge main

# Undo changes to a file (before staging)
git checkout -- filename

# See commit history
git log
```

---

## Understanding the Code Structure

### For Beginners

#### What is a Component?
A component is a reusable piece of UI. For example, a "Button" component can be used many times throughout the app.

#### File Types
- **`.tsx`** - TypeScript + React component files
- **`.ts`** - TypeScript files (no UI)
- **`.css`** - Stylesheet files
- **`.json`** - Configuration files

#### Key Directories

**`src/app/`** - This is where your pages live
- Each folder becomes a route (URL path)
- `page.tsx` is the main file for that route

**`src/containers/`** - Reusable feature components
- These are the main logic/components for each feature
- Imported by the page files

**`public/`** - Static files
- Images, icons, etc.
- Accessible directly via URL

---

## Troubleshooting

### Problem: `npm install` fails

**Solution:**
- Make sure you have Node.js installed: `node --version`
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again
- Check your internet connection

### Problem: Port 3000 is already in use

**Solution:**
```bash
# Kill the process using port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill

# Or run on a different port
npm run dev -- -p 3001
```

### Problem: Changes not showing in browser

**Solution:**
- Make sure the dev server is running (`npm run dev`)
- Hard refresh the browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check the terminal for error messages

### Problem: Git push is rejected

**Solution:**
- Pull the latest changes first: `git pull origin main`
- Resolve any conflicts if they exist
- Try pushing again

---

## Learning Resources

### For Complete Beginners

1. **HTML/CSS Basics**
   - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)

2. **JavaScript Basics**
   - [JavaScript.info](https://javascript.info/)
   - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

3. **React Basics**
   - [React Official Tutorial](https://react.dev/learn)
   - [Next.js Learn Course](https://nextjs.org/learn)

4. **Git Basics**
   - [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
   - [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

### For This Project

- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation:** [react.dev](https://react.dev)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Ant Design:** [ant.design](https://ant.design)

---

## Next Steps

1. **Explore the codebase** - Look at existing components to understand patterns
2. **Start small** - Make small changes first to get comfortable
3. **Ask questions** - Don't hesitate to ask team members for help
4. **Read error messages** - They usually tell you what's wrong
5. **Practice Git** - The more you use it, the easier it becomes

---

## Notes

- The **teacher-desktop** app is currently implemented as a web app route (`/teacher`) in Next.js, not as a separate Electron application
- Backend services will be implemented within Next.js API routes (`/app/api/`)
- Real-time features and AI integration are planned for future implementation

---

## Need Help?

If you're stuck:
1. Check the error message in your terminal or browser console
2. Search for the error message online
3. Ask a team member
4. Check the documentation links above

---

**Happy Coding!**

