---
title: Commit Formatting
description: Learn about formatting commits when contributing to ContentLib.
sidebar:
  order: 20
draft: true
---
## **Commit Formatting and Git Workflow**

ContentLib relies on the Git-Workflow model for contributions to maintain a clear, consistent, and efficient development
process. To ensure your contributions integrate seamlessly, follow these guidelines:

---

### **Git Workflow for Contributions**
1. **Fork the Repository**:  
   All contributions must be made in a forked version of the ContentLib repository.

2. **Branching Strategy**:
    - Create a **feature branch** from the `dev` branch of the repository.
    - Use a descriptive name for your feature branch, such as `feature-settings_menu_update` or `bugfix-terminal_registration`.

3. **Pull Requests (PRs)**:
    - Once your feature branch is complete and tested, submit a pull request (PR) to merge it into the `dev` branch.
    - Ensure your PR adheres to the standards outlined in the contribution guidance articles (e.g., documentation, 
commit formatting, and functionality consistency).

---

### **Commit Guidelines**
Commits should be made frequently, capturing small but specific updates to your contribution. This approach ensures
clarity in your development process and makes debugging or reviewing changes easier.

#### **Commit Rules**:
1. **Small, Incremental Updates**: Each commit should focus on a single task or change.
2. **Descriptive Commit Messages**: Use a bullet-point format to describe what was done in the commit.
3. **Outline the Next Steps (Optional)**: When appropriate, include a note in the commit message about the focus of your
next commit.

---

### **Commit Message Format**
Here is the expected format for commit messages:

```
- [Change Description 1]
- [Change Description 2]
- [Change Description 3]
- Next Commit: [Brief description of planned work]
```

#### **Example Commit Messages**:
**Good Commit Message**:
```
- Completed SettingPage.cs documentation.
- Refactored parameter names in ConfigurationManager.cs for clarity.
- Fixed a bug where the Terminal Manager failed to register custom terminal pages correctly.
- Next Commit: Implement unit tests for new Terminal Registration logic.
```

**Bad Commit Message**:
```
- Changes to Terminal and Settings logic.
```

---

### **Best Practices for Commits**
1. **Keep Changes Atomic**: Avoid bundling unrelated changes in a single commit.
2. **Test Before Committing**: Ensure your changes are functional and do not introduce breaking errors before committing.
3. **Reference Related Issues/Tasks**: If applicable, include references to related issues in the PR (e.g., "Closes #123").
---

By following this workflow and adhering to the commit standards, you will ensure your contributions are easy to review,
debug, and integrate into the main codebase. Thank you for contributing to ContentLib!