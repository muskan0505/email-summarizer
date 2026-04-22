import heapq
import re

def generate_summary(text: str):
    try:
        if len(text.strip()) < 20:
            return "Text too short to summarize"

        # Clean text
        text = re.sub(r'\s+', ' ', text)

        # Split sentences
        sentences = text.split('.')

        # Word frequency
        word_freq = {}
        for word in text.lower().split():
            word_freq[word] = word_freq.get(word, 0) + 1

        # Score sentences
        sentence_scores = {}
        for sentence in sentences:
            for word in sentence.lower().split():
                if word in word_freq:
                    sentence_scores[sentence] = sentence_scores.get(sentence, 0) + word_freq[word]

        # Pick top 2 sentences
        summary_sentences = heapq.nlargest(2, sentence_scores, key=sentence_scores.get)

        summary = '. '.join(summary_sentences)

        return summary.strip()

    except Exception as e:
        return str(e)