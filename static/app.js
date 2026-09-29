const area = document.getElementById("area");
const keyword = document.getElementById("keyword");
const button = document.getElementById("search");
const status = document.getElementById("status");
const results = document.getElementById("results");

button.addEventListener("click", async () => {
  const areaValue = area.value.trim();
  const keywordValue = keyword.value.trim();

  results.innerHTML = "";

  if (!areaValue) {
    status.textContent = "Please enter an area.";
    return;
  }

  status.textContent = "Preparing public search...";

  try {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        area: areaValue,
        keyword: keywordValue
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Search failed.");
    }

    status.textContent = "Query received.";

    results.innerHTML = `
      <div class="result">
        <strong>Backend connected ✅</strong>
        <p>
          Area: ${data.query.area}<br>
          Keyword: ${data.query.keyword || "none"}
        </p>
      </div>
    `;
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
  }
});
