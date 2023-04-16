# Practice React Latest Version

### Overview:

- This document provides the requirements for Customer’s Data Table Web App.
- UI refer [Data Table](https://www.figma.com/file/XQpNVIrl8l2DwiSEEWxOJO/UI-CRUD?node-id=0%3A1&t=U41qTlLWtzyd85Rk-1).

## Team size

- 1 dev.

### Targets:

- Build web app React latest version (v18+)
- Apply new things from React 18
  - New React DOM Client: createRoot
  - New hooks: useId, useTransition, useDeferredValue
  - Automatic Batching
  - Suspense for Data Fetching
- Apply TypeScript to type checking
- Apply Unit Test with React Testing Library
- Apply Storybook

### Information:

- Timeline:

  - Total time: 36h
  - Estimate time: 4.5 days (8h/day).
  - Actual time: 9 days (4h/day).
  - [Estimate here](https://docs.google.com/document/d/1GOs26ZI3M7wDE4RpoNyG5smrzUyYr_4O4IdhiFAuOqU/edit?usp=sharing)

- Technical:

  - React latest version (v18+)
  - Chakra UI
  - mockAPI
  - React Query
  - Storybook
  - React Testing Library

- Devtool:
  - Visual Studio Code.
  - Eslint
  - Prettier
  - Husky
  - Commitlint

### Requirements:

- List out the data table
  - Search Name or Description section
  - Add Customer button
  - Customer’s Data table section
  - Name
  - Sorting
  - Description
  - Status
  - Rate
  - Balance
  - Deposit
- Add Customer modal
  - Input name
  - Input description
  - Select status
  - Input rate
  - Input balance
  - Input deposit
  - Create button
  - Cancel button
- User can CRUD
- Load more if data > 20 records

### Installation:

| Command                                                             | Action                                                           |
| :------------------------------------------------------------------ | :--------------------------------------------------------------- |
| `git clone git@gitlab.asoft-python.com:hoang.le/react-training.git` | Create a copy of the target repository                           |
| `git checkout develop`                                              | Checkout branch                                                  |
| `cd react-training/practice-react-latest-version`                   | Go to the folder practice                                        |
| `yarn install`                                                      | Installs dependencies                                            |
| `yarn start`                                                        | Start local server at localhost:3000                             |
| `yarn storybook`                                                    | Run the storybook to review all the components at localhost:6006 |
| `yarn test`                                                         | Run unit test                                                    |
