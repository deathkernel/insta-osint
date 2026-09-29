const area = document.getElementById("area");
const keyword = document.getElementById("keyword");
const button = document.getElementById("search");
const status = document.getElementById("status");
const results = document.getElementById("results");

button.addEventListener("click", async () => {
  const areaValue = area.value.trim();
  const keywordValue = keyword.value.trim();
  results.replaceChildren();

  if (!areaValue) {
    status.textContent = "Please enter an area.";
    return;
  }

  button.disabled = true;
  status.textContent = "Building a public search query...";

  try {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({area: areaValue, keyword: keywordValue})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Search failed.");

    status.textContent = "Public search query ready.";

    const box = document.createElement("div");
    box.className = "result";
    const title = document.createElement("strong");
    title.textContent = "Public web search ready";
    const note = document.createElement("p");
    note.textContent = "Review publicly indexed results yourself; the app does not access private accounts.";
    const link = document.createElement("a");
    link.href = data.search_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open public search";
    box.append(title, note, link);
    results.appendChild(box);
  } catch (error) {
    status.textContent = "Error: " + error.message;
  } finally {
    button.disabled = false;
  }
});
