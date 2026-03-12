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
async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
}

async function loadContent(file) {
  const data = await fetchJson(`/content/${file}.json`);

  Object.keys(data).forEach((key) => {
    const element = document.querySelector(`[data-content="${key}"]`);
    if (!element) return;

    if (typeof data[key] === "string") {
      element.innerText = data[key];
    }
  });
}

async function loadSiteSettings() {
  const data = await fetchJson(`/content/site.json`);

  const nav = document.querySelector("[data-nav]");
  if (nav && Array.isArray(data.navigation)) {
    nav.innerHTML = "";
    data.navigation.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.link;
      link.innerText = item.label;
      nav.appendChild(link);
    });
  }

  const footer = document.querySelector("[data-footer]");
  if (footer && data.footer?.copyright) {
    footer.innerText = data.footer.copyright;
  }
}

function renderHero(homeData) {
  return `
    <section class="home-section hero-section">
      <h1>${homeData.hero?.title || ""}</h1>
      <p>${homeData.hero?.subtitle || ""}</p>
      <p>${homeData.hero?.description || ""}</p>
      <div class="hero-buttons">
        ${
          homeData.hero?.primaryButton
            ? `<a href="${homeData.hero.primaryButton.link}">${homeData.hero.primaryButton.text}</a>`
            : ""
        }
        ${
          homeData.hero?.secondaryButton
            ? `<a href="${homeData.hero.secondaryButton.link}">${homeData.hero.secondaryButton.text}</a>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderTraining(trainingData) {
  return `
    <section class="home-section training-section">
      <h2>${trainingData.title || ""}</h2>
      <p>${trainingData.intro || ""}</p>
      <div class="program-list">
        ${(trainingData.programs || [])
          .map(
            (program) => `
            <article class="program-card">
              <h3>${program.name || ""}</h3>
              <p>${program.description || ""}</p>
              <a href="${program.link || "#"}">${program.cta || "Learn More"}</a>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStreetMiles(streetMilesData) {
  return `
    <section class="home-section street-miles-section">
      <h2>${streetMilesData.title || ""}</h2>
      <p>${streetMilesData.tagline || ""}</p>
      <p>${streetMilesData.description || ""}</p>
      <div class="event-list">
        ${(streetMilesData.events || [])
          .map(
            (event) => `
            <article class="event-card">
              <h3>${event.name || ""}</h3>
              <p>${event.description || ""}</p>
              <a href="${event.link || "#"}">${event.cta || "Learn More"}</a>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderShop(shopData) {
  return `
    <section class="home-section shop-section">
      <h2>${shopData.title || ""}</h2>
      <p>${shopData.description || ""}</p>
      <div class="collection-list">
        ${(shopData.collections || [])
          .map(
            (collection) => `
            <article class="collection-card">
              <h3>${collection.name || ""}</h3>
              <p>${collection.description || ""}</p>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

async function renderHomepageSections() {
  const container = document.querySelector("[data-home-sections]");
  if (!container) return;

  const [sectionsData, homeData, trainingData, streetMilesData, shopData] =
    await Promise.all([
      fetchJson("/content/sections.json"),
      fetchJson("/content/home.json"),
      fetchJson("/content/training.json"),
      fetchJson("/content/street-miles.json"),
      fetchJson("/content/shop.json"),
    ]);

  const sectionMap = {
    hero: () => renderHero(homeData),
    training: () => renderTraining(trainingData),
    "street-miles": () => renderStreetMiles(streetMilesData),
    shop: () => renderShop(shopData),
  };

  container.innerHTML = (sectionsData.homepage || [])
    .filter((section) => section.enabled)
    .map((section) => sectionMap[section.type]?.() || "")
    .join("");
}