import { useState } from "react";

function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "700px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "5px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  outputBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f5f5f5",
    borderRadius: "10px",
  },
  outputHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyBtn: {
    background: "#764ba2",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  outputText: {
    marginTop: "10px",
    color: "#333",
  },
};
  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Header */}
        <h1 style={styles.title}>📧 Smart Email Summarizer</h1>
        <p style={styles.subtitle}>
          Turn long emails into quick insights in seconds
        </p>

        {/* Input */}
        <textarea
          style={styles.textarea}
          placeholder="Paste your email or article here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Button */}
        <button
          style={styles.button}
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        {/* Output */}
        <div style={styles.outputBox}>
          <div style={styles.outputHeader}>
            <h3>Summary</h3>
            {summary && (
              <button style={styles.copyBtn} onClick={copyToClipboard}>
                Copy
              </button>
            )}
          </div>

          <p style={styles.outputText}>
            {summary || "Your summary will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summarizer;