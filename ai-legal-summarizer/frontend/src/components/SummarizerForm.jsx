import React, { useState } from 'react';

const SummarizerForm = () => {
    const [document, setDocument] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ document }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch summary');
            }

            const data = await response.json();
            setSummary(data.summary);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Legal Document Summarizer</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <textarea
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                    placeholder="Paste your legal document here..."
                    rows="10"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                    disabled={loading}
                >
                    {loading ? 'Summarizing...' : 'Summarize'}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {summary && (
                <div className="mt-4">
                    <h3 className="font-bold">Summary:</h3>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default SummarizerForm;