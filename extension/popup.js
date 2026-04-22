document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url || "";

    // 🚫 Block restricted pages
    if (
      url.startsWith("chrome://") ||
      url.startsWith("edge://") ||
      url.includes("chrome.google.com") ||
      url.includes("chatgpt.com")
    ) {
      output.innerText = "❌ Cannot run on this page. Try another website.";
      return;
    }

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => window.getSelection().toString()
      },
      async (results) => {
        try {
          const text = results?.[0]?.result;

          if (!text || text.trim() === "") {
            output.innerText = "⚠️ Please select some text.";
            return;
          }

          input.value = text;
          output.innerText = "⏳ Summarizing...";

          const res = await fetch("http://127.0.0.1:8000/summarize", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
          });

          if (!res.ok) {
            throw new Error("Server error");
          }

          const data = await res.json();
          output.innerText = data.summary || "No summary generated.";

        } catch (err) {
          console.error(err);
          output.innerText = "❌ Error: Backend not reachable.";
        }
      }
    );
  });

  // 📋 Copy summary
  copyBtn.addEventListener("click", () => {
    const text = output.innerText;
    if (!text) return;

    navigator.clipboard.writeText(text);
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerText = "Copy Summary";
    }, 1500);
  });
});