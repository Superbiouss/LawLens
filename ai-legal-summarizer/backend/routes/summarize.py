from flask import Blueprint, request, jsonify
from backend.models.summarizer import Summarizer

summarize_bp = Blueprint('summarize', __name__)
summarizer = Summarizer()

@summarize_bp.route('/summarize', methods=['POST'])
def summarize_case():
    data = request.get_json()
    legal_document = data.get('document')

    if not legal_document:
        return jsonify({'error': 'No document provided'}), 400

    summary = summarizer.summarize_case(legal_document)
    return jsonify({'summary': summary}), 200