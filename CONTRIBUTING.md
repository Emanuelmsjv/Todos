# Contributing to Todos 🤝

Thank you for your interest in contributing to TaskMaster Pro! We welcome contributions from developers of all skill levels. This guide will help you get started.

## 🌟 Ways to Contribute

### Code Contributions
- 🐛 **Bug fixes**
- ✨ **New features**
- 🎨 **UI/UX improvements**
- ⚡ **Performance optimizations**
- 🧪 **Testing improvements**

### Non-Code Contributions
- 📚 **Documentation improvements**
- 🎨 **Design suggestions**
- 🐛 **Bug reports**
- 💡 **Feature requests**
- 🌐 **Translations**

## 🚀 Getting Started

### 1. Fork the Repository
Click the "Fork" button at the top right of this repository.

### 2. Clone Your Fork
```bash
git clone https://github.com/yourusername/todos.git
cd taskmaster-pro
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes
- Write clean, readable code
- Follow existing code style
- Test your changes thoroughly
- Update documentation if needed

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add: Brief description of your changes"
```

Use these commit prefixes:
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for improvements
- `Remove:` for deletions
- `Docs:` for documentation

### 6. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📋 Development Guidelines

### Code Style
- Use **2 spaces** for indentation
- Use **camelCase** for variable names
- Use **descriptive function names**
- Add **comments** for complex logic
- Keep functions **small and focused**

### JavaScript Best Practices
```javascript
// ✅ Good
function addTask(taskText) {
  if (taskText.trim() === '') {
    return false;
  }
  // Implementation...
}

// ❌ Avoid
function doStuff(x) {
  // Unclear purpose and implementation
}
```

### CSS Guidelines
- Use **CSS custom properties** for themes
- Follow **BEM methodology** for class names
- Write **mobile-first** responsive CSS
- Group related properties together

### HTML Standards
- Use **semantic HTML5** elements
- Include **proper accessibility** attributes
- Validate HTML with **W3C validator**

## 🧪 Testing Your Changes

### Manual Testing Checklist
Before submitting your PR, ensure:
- [ ] App loads without errors
- [ ] All existing features work
- [ ] New features work as expected
- [ ] Responsive design is maintained
- [ ] Browser compatibility (Chrome, Firefox, Safari)
- [ ] LocalStorage persistence works
- [ ] No console errors

### Testing Steps
1. **Add tasks** - Verify task creation
2. **Edit tasks** - Test inline editing
3. **Complete tasks** - Check confetti animation
4. **Refresh page** - Ensure data persistence
5. **Mobile view** - Test responsive design

## 🐛 Reporting Bugs

### Bug Report Template
When reporting bugs, please include:

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Screenshots**
Add screenshots if helpful.

**Environment**
- Browser: [e.g. Chrome 95]
- OS: [e.g. Windows 10]
- Device: [e.g. Desktop, iPhone 12]
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature.

**Problem It Solves**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other solutions you've thought of.

**Additional Context**
Any other relevant information.
```

## 🎨 Design Contributions

### UI/UX Guidelines
- Follow **material design** principles
- Maintain **consistent spacing** (8px grid)
- Use the **existing color palette**
- Ensure **high contrast** for accessibility
- Keep **interactions intuitive**

### Design Submissions
- Create **mockups** or **wireframes**
- Explain the **design decisions**
- Consider **accessibility** implications
- Show **responsive behavior**

## 📚 Documentation

### Documentation Standards
- Write in **clear, simple language**
- Include **code examples** where helpful
- Update **README.md** for major changes
- Add **inline comments** for complex code

### Areas Needing Documentation
- API documentation
- Architecture overview
- Deployment guides
- Troubleshooting guides

## 🌐 Internationalization

### Adding Translations
We welcome translations to make the app accessible globally:

1. Create a `locales/` directory
2. Add language files (e.g., `en.json`, `es.json`)
3. Update JavaScript to support i18n
4. Test with different languages

## 🏷️ Issue Labels

We use these labels to organize issues:
- `good first issue` - Great for beginners
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `help wanted` - Extra attention needed
- `documentation` - Documentation needs
- `question` - Further information requested

## 🎯 Priority Features

### High Priority
- Dark mode theme
- Better mobile experience
- Accessibility improvements
- Performance optimizations

### Medium Priority
- Task categories
- Due date functionality
- Export/import features
- Keyboard shortcuts

### Low Priority
- Advanced animations
- Social sharing
- Collaboration features
- Advanced statistics

## 📞 Getting Help

Need help contributing? Reach out:
- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For general questions
- **Email** - youremail@example.com
- **Twitter** - @yourtwitterhandle

## 🎉 Recognition

Contributors will be:
- Listed in the **README.md**
- Mentioned in **release notes**
- Given **GitHub badges**
- Invited to be **maintainers** (for regular contributors)

## 📖 Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

### Development Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [GitHub Desktop](https://desktop.github.com/) - For Git GUI

## 🤝 Community Guidelines

### Code of Conduct
- Be **respectful** and **inclusive**
- **Help others** learn and grow
- **Constructive feedback** only
- **No harassment** or discrimination
- **Follow GitHub's** Community Guidelines

### Communication
- Use **clear, professional** language
- Be **patient** with beginners
- **Ask questions** if unclear
- **Thank contributors** for their work

## 📋 Pull Request Checklist

Before submitting your PR:
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Manual testing completed
- [ ] No merge conflicts
- [ ] Descriptive PR title and description

### PR Template
```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Manual testing completed
- [ ] All existing features work
- [ ] New features work as expected

## Screenshots
Add screenshots for UI changes.

## Additional Notes
Any additional information.
```

## 🚀 Release Process

### Version Numbers
We follow [Semantic Versioning](https://semver.org/):
- **Major** (1.0.0) - Breaking changes
- **Minor** (1.1.0) - New features
- **Patch** (1.1.1) - Bug fixes

### Release Checklist
- [ ] All tests pass
- [ ] Documentation updated
- [ ] Version number bumped
- [ ] Changelog updated
- [ ] GitHub release created
- [ ] Demo site updated

---

Thank you for contributing to TaskMaster Pro! Your efforts help make this project better for everyone. 🌟

**Happy Coding!** 💻✨