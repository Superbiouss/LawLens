import React from 'react';
import SummarizerForm from '../components/SummarizerForm';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">AI Legal Summarizer</h1>
            <p className="mb-4">
                Welcome to the AI Legal Summarizer. This application allows you to input legal documents, specifically court cases, and receive concise summaries to aid in your legal research.
            </p>
            <SummarizerForm />
        </div>
    );
};

export default Home;