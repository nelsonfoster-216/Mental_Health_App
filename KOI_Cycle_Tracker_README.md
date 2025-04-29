# KOI Cycle Tracker

![KOI Cycle Tracker](https://img.shields.io/badge/Mental%20Health-KOI%20Cycle%20Tracker-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-38bdf8)
![ChartJS](https://img.shields.io/badge/ChartJS-4.4.8-ff6384)

## Overview

KOI (Krash Out Index) Cycle Tracker is a web application designed to help users monitor and manage their mental health cycles. It allows users to track their oscillation between two critical mental states: "CRASH OUT" (low energy, disengaged) and "LOCK IN" (high focus, productive) modes. The application provides a simple visual interface for logging state changes, with intensity ratings and optional notes, while generating statistics to help users understand their patterns.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Application Structure](#application-structure)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [Data Storage](#data-storage)
- [Contributing](#contributing)
- [License](#license)

## Features

### 1. State Tracking
- Log mental states as either "CRASH OUT" or "LOCK IN"
- Rate the intensity of each state (1-10 scale)
- Add optional notes about triggers or feelings

### 2. Data Visualization
- Interactive doughnut chart displaying state distribution
- KOI Index calculation showing crash-out tendency
- Visual color coding that changes based on state percentages

### 3. History Management
- Recent logs view for the last 5 entries
- Full history tracking in local storage
- Data reset functionality

### 4. User Experience
- Intuitive cycle visualization with easy-to-use buttons
- Responsive design that works on various screen sizes
- Detailed instructions and examples of each mental state

## Technology Stack

The KOI Cycle Tracker is built using the following technologies:

- **React**: Frontend JavaScript library for building the user interface
- **TailwindCSS**: Utility-first CSS framework for styling
- **Headless UI**: Unstyled, accessible UI components
- **Chart.js/React-Chartjs-2**: JavaScript charting library for data visualization
- **localStorage API**: Browser storage for persisting user data

## Application Structure

The application is part of a larger Mental Health App with the following structure:

```
Mental_Health_App/
├── frontend/
│   ├── src/
│   │   ├── compnents/
│   │   │   ├── crashOutCycle/       # KOI Cycle Tracker components
│   │   │   │   └── CrashOutCycle.jsx
│   │   │   ├── navbar/              # Navigation components
│   │   │   └── ... (other components)
│   │   ├── App.js                   # Main application component
│   │   └── index.js                 # Entry point
│   ├── public/                      # Static assets
│   └── package.json                 # Frontend dependencies
└── backend/                         # Server-side code (not used by KOI Tracker)
```

## Components

### CrashOutCycle.jsx

The main component of the KOI Cycle Tracker that contains:

#### State Management
```jsx
const [currentState, setCurrentState] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [cycleLogs, setCycleLogs] = useState([]);
const [intensity, setIntensity] = useState(5);
const [notes, setNotes] = useState('');
const [isResetModalOpen, setIsResetModalOpen] = useState(false);
```

#### Data Handling Functions
- `openStateModal(state)`: Opens the modal for logging a state
- `handleSubmit()`: Records a new log entry
- `handleReset()`: Clears all log data

#### Data Analysis
- Calculates crash out and lock in percentages
- Determines the KOI index based on crash out percentage
- Formats data for chart visualization

#### UI Sections
1. **Instructions Box**: Explains the two mental states with examples
2. **Cycle Visual**: Interactive circular visualization with state buttons
3. **Stats/Chart**: Doughnut chart showing state distribution and KOI index 
4. **Recent Logs**: Displays the latest 5 log entries
5. **Modals**: For logging states and confirming data reset

### Navbar.jsx
Navigation component that provides access to other parts of the Mental Health App.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mental-health-app.git
cd mental-health-app
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Start the development server:
```bash
npm start
```

## Usage

1. **Log a State**:
   - Click on either the "CRASH OUT" or "LOCK IN" button
   - Rate the intensity on a scale of 1-10
   - Add optional notes about your current experience
   - Click "Save" to record the entry

2. **View Your Stats**:
   - The doughnut chart shows the distribution of your states
   - The KOI Index indicates your overall crash-out tendency
   - The color coding changes based on your percentages

3. **Review History**:
   - Recent logs appear in the bottom right panel
   - Entries are color-coded based on state type

4. **Reset Data**:
   - Click the "Reset Data" button to clear all logs
   - Confirm the action in the confirmation modal

## Data Storage

The KOI Cycle Tracker uses the browser's localStorage API to store user data:
- Data is stored locally on the user's device
- No data is sent to external servers
- Data persists between browser sessions
- Each user's data is identified by their username

```javascript
// Example of how data is stored
localStorage.setItem(`cycleLogs-${username}`, JSON.stringify(updatedLogs));
```

## Contributing

Contributions to the KOI Cycle Tracker are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Note: The KOI Cycle Tracker is part of a larger Mental Health App that includes other features such as an AI Therapist, Mood Tracker, Anonymous Sharing, and more.* 