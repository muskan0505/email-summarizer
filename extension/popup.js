// Wait until popup loads
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const output = document.getElementById("output");
  const button = document.getElementById("summarizeBtn");

  // 🔥 Auto-capture selected text from active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0]) return;

    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: () => window.getSelection().toString()
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          input.value = results[0].result;
        }
      }
    );
  });

  // 🚀 Summarize button click
  button.addEventListener("click", async () => {
    const text = input.value.trim();

    if (!text) {
      output.innerText = "⚠️ Please enter or select some text.";
      return;
    }

    try {
      // 🔄 Show loading state
      output.innerText = "⏳ Summarizing...";

      const response = await fetch("http://127.0.0.1:8000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      // ✅ Show summary
      output.innerText = data.summary || "No summary generated.";

    } catch (error) {
      console.error(error);
      output.innerText = "❌ Failed to connect to backend. Make sure server is running.";
    }
  });
});