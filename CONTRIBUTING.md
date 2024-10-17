# Contributing to Class-Glue

We're excited that you're interested in contributing to Class-Glue! This document outlines the process for contributing to this project. Whether you're fixing bugs, improving documentation, or adding new features, your contributions are welcome.

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally:

   ```bash
   git clone https://github.com/your-username/class-glue.git
   cd class-glue
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a branch for your changes:

   ```bash
   git checkout -b your-branch-name
   ```

## Development Workflow

1. Make your changes in your branch.
2. Run tests to ensure your changes don't break existing functionality:

   ```bash
   npm test
   ```

3. Ensure your code follows our style guidelines:

   ```bash
   npm run lint
   ```

4. Commit your changes:

   ```bash
   git commit -m "Your descriptive commit message"
   ```

5. Push to your fork:

   ```bash
   git push origin your-branch-name
   ```

6. Submit a pull request from your fork to the `dev` branch of the main repository.

## Pull Request Process

1. Ensure your PR description clearly describes the problem and solution.
2. Include any relevant issue numbers in the PR description.
3. Make sure all tests pass and there are no linting errors.
4. Your PR will be reviewed by the maintainer. Be open to feedback and be prepared to make changes if requested.

### Pull Request Templates

To streamline the PR process, we provide several pull request templates:

- **Default Template**: This is automatically loaded when you create a new PR. It's suitable for most contributions and will guide you through providing necessary information.

- **Specific Templates**: For more focused contributions, you can use one of our specific templates by adding a query parameter to the PR creation URL:
  - For bug fixes: Add `?template=bug_fix.md`
  - For new features: Add `?template=feature_addition.md`

For example, to use the bug fix template, your PR creation URL would look like:

> <https://github.com/shettayyy/class-glue/compare/main...your-branch-name?template=bug_fix.md>

Choose the template that best fits your contribution type. If you're unsure, use the default template, and we'll guide you from there.

## Coding Standards

- Follow the existing code style in the project.
- Write clear, readable, and concise code.
- Comment your code where necessary, especially for complex logic.
- Write meaningful commit messages.

## Reporting Bugs

- Use the GitHub issue tracker to report bugs.
- Describe the bug in detail, including steps to reproduce.
- Include information about your environment (OS, Node.js version, etc.).

## Suggesting Enhancements

- Use the GitHub issue tracker to suggest enhancements.
- Clearly describe the feature and its potential benefits.
- Be open to discussion about the feature's implementation.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

Thank you for contributing to Class-Glue!
