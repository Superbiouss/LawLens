# AI Legal Summarizer

## Overview
AI Legal Summarizer is a project designed to simplify the process of understanding legal documents, specifically court cases, by providing concise summaries. This tool leverages advanced AI and NLP techniques to analyze legal texts and generate easy-to-read summaries, making it a valuable resource for lawyers, students, and researchers.

## Features
- **Summarization of Legal Documents**: Automatically generates summaries of court cases and legal documents.
- **User-Friendly Interface**: A simple and intuitive frontend for users to input legal documents and receive summaries.
- **Fast and Efficient**: Utilizes state-of-the-art AI models to ensure quick processing and accurate results.

## Project Structure
```
ai-legal-summarizer
├── backend
│   ├── app.py
│   ├── requirements.txt
│   ├── models
│   │   └── summarizer.py
│   ├── routes
│   │   └── summarize.py
│   └── utils
│       └── helpers.py
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   └── SummarizerForm.jsx
│   │   └── pages
│   │       └── Home.jsx
│   ├── package.json
│   └── tailwind.config.js
├── data
│   └── sample_cases
│       └── example_case.txt
├── README.md
```

## Installation

### Backend
1. Navigate to the `backend` directory.
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```

## Usage

### Running the Backend
1. In the `backend` directory, run the application:
   ```
   python app.py
   ```

### Running the Frontend
1. In the `frontend` directory, start the React application:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.