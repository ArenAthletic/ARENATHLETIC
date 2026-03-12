async function loadContent(file) {
  const response = await fetch(`/content/${file}.json`);
  const data = await response.json();

  Object.keys(data).forEach(key => {
    const element = document.querySelector(`[data-content="${key}"]`);
    if (element) {
      element.innerText = data[key];
    }
  });
}

async function loadSiteSettings() {
  const response = await fetch(`/content/site.json`);
  const data = await response.json();

  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML = "";

    data.navigation.forEach(item => {
      const link = document.createElement("a");
      link.href = item.link;
      link.innerText = item.label;
      nav.appendChild(link);
    });
  }
}