# Contribution Guidelines

CitySort follows the Conventional Commits specification and Semantic Versioning (SemVer) for version control and commits. To ensure a consistent and structured approach to contributions, we encourage all contributors to adhere to these guidelines when submitting changes.

## Conventional Commits

Conventional Commits provide a standardized format for commit messages, making it easier to understand the nature of changes made to the project. When making commits, please use the conventional commit format, which typically follows the pattern of `<type>: <description>`. For example:
- `feat: Add new rating component`
- `fix: Resolve issue with city search feature`
- `docs: Update README with new contribution guidelines`

**Summary**: The Conventional Commits specification is a lightweight convention for structuring commit messages. It provides clear rules for creating a descriptive commit history and aligns with Semantic Versioning (SemVer) by categorizing changes into features, fixes, and breaking changes.

## Types of Commits

In addition to `fix` and `feat`, other types are allowed to categorize commits. For instance, the @commitlint/config-conventional, based on the Angular convention, recommends using:

- `build`: Changes related to build processes or tools.
- `chore`: Regular maintenance or administrative tasks.
- `ci`: Updates to the continuous integration setup.
- `docs`: Documentation-related changes.
- `style`: Changes that do not affect the code's functionality (e.g., formatting).
- `refactor`: Code modifications without changing its behavior.
- `perf`: Performance improvements.
- `test`: Adding or modifying tests.

You can use these types to categorize your commits according to their nature. This helps maintain consistency in commit messages and aids in better organization of changes in the project history.

### Commit Message Structure

A commit message should follow this structure:

```markdown
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

For more information on Conventional Commits, visit [Conventional Commits Specification](https://www.conventionalcommits.org/).

### Semantic Versioning (SemVer)

CitySort adheres to Semantic Versioning (SemVer) for versioning releases. The versioning system consists of three numbers: `MAJOR.MINOR.PATCH`, where:
- `MAJOR` version increments for incompatible API changes,
- `MINOR` version for backward-compatible functionality additions, and
- `PATCH` version for backward-compatible bug fixes.

Please consider the impact of your changes when determining version updates.

For more information on Semantic Versioning, visit [Semantic Versioning 2.0.0](https://semver.org/).
