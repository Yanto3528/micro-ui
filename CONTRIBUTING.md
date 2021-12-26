# Welcome

We welcome all people who wants to contribute to this repo.
For of all thanks for having an interest to contribute to this repository.

Below are the folder structure and style guide that we follow

# Folder Structure

```
├── dist/                      # Files that will write to dist on build
├── src/                       # All source file
│   ├── animations/            # Animations file shared across components
│   ├── assets/                # Assets file such as fonts, icon, etc
│   ├── components/            # Contain all components used by component-library
│   |   ├── theme/             # Theme file for all components
│   ├── constants/             # Constants file shared across all files
│   ├── hooks/                 # Reusable custom hooks used across components
│   ├── styles/                # Contains shared styles for components
│   ├── test-utils/            # Contains utils function used to test component
│   ├── utils/                 # Contains helpers function shared across components
│   └── reset.css/             # Global CSS Reset file
├── .babelrc                   # Babel configuration file
├── .eslintrc.json             # Eslint configuration file
├── .gitignore                 # Files ignored by git
├── .prettierrc.json           # Code convention enforced by Prettier
├── CHANGELOG.md               # List of significant changes
├── CONTRIBUTING.md            # File about guidelines to follow to contribute
├── jest.config.js             # Jest configuration file
├── jsconfig.json              # JS config json file
├── package-lock.json          # Package lockfile
├── package.json               # Dependencies and additional information
├── README.md
└── rollup.config.js           # Rollup config file
```

# Style Guide

Code conventions that we follow

- Import statement - 3rd party package > alias import > from farthest to nearest import

```
import React from 'react'

import { useTheme } from '@/hooks'

import {Button} from '../../button'
import {Wrapper} from './views'
```

- Uses only functional component (unless there's any needs to use class component)

- Writing test for every new components/new features/bug fixing (100% coverage)
- folder name should follow kebab-case ex. contact-input, radio-group, etc
- Follow eslint rules guideline
