const tierRank = { high: 0, low: 1, none: 2 };
    const tierLabel = {
      high: "High subscription",
      low: "Low subscription",
      none: "free keywords"
    };
    const companies = [
      {
        name: "Amman textiles",
        sector: "Textiles",
        description: "Comprehensive solution for managing sales, inventory, and trends in textile retail. Delivering actionable insights for optimized stock and customer satisfaction.",
        location: "Coimbatore, India",
        keywords: [
          { term: "shirt", tier: "high" },
          { term: "pant", tier: "low" },
          { term: "inner wear", tier: "high" },
          { term: "handkerchief", tier: "none" }
        ]
      },
      {
        name: "Saravana Stores",
        sector: "Elecronics",
        description: "Real-time inventory tracking and sales insights platform for electronics retailers. Empowering efficient stock management and customer-driven product recommendations.",
        location: "Saravanampatti",
        keywords: [
          { term: "TV", tier: "high" },
          { term: "refrigerator", tier: "low" },
          { term: "fan", tier: "low" },
          { term: "heater", tier: "none" },
        ]
      },
      {
        name: "Barath Elecronics",
        sector: "Elecronics",
        description: "Real-time inventory tracking and sales insights platform for electronics retailers. Empowering efficient stock management and customer-driven product recommendations.",
        location: "Saravanampatti",
        keywords: [
          { term: "TV", tier: "high" },
          { term: "A/C", tier: "low" },
          { term: "washing machine", tier: "low" },
          { term: "induction stove", tier: "none" },
        ]
      },
      {
        name: "Meera stationeries",
        sector: "stationery",
        description: "Retail platform offering real-time inventory tracking and customer behavior insights for stationery stores. Streamlining sales, stock management, and seasonal forecasting.",
        location: "RS Puram",
        keywords: [
          { term: "pen", tier: "high" },
          { term: "pencil", tier: "low" },
          { term: "A4 sheet", tier: "none" },
          { term: "ink bottle", tier: "none" },
        ]
      },
      {
        name: "Veena Fancy Store",
        sector: "stationery",
        description: "Retail platform offering real-time inventory tracking and customer behavior insights for stationery stores. Streamlining sales, stock management, and seasonal forecasting.",
        location: "Coimbatore",
        keywords: [
          { term: "water bottle", tier: "none" },
          { term: "school bag", tier: "low" },
          { term: "handkerchief", tier: "none" },
          { term: "shoes", tier: "high" }
        ]
      },
      {
        name: "Ganapathi Skils",
        sector: "Textiles",
        description: "Comprehensive solution for managing sales, inventory, and trends in textile retail. Delivering actionable insights for optimized stock and customer satisfaction.",
        location: "Gandhipuram",
        keywords: [
          { term: "shirt (cotton)", tier: "high" },
          { term: "shirt (polyster)", tier: "low" },
          { term: "school uniform", tier: "high" },
          { term: "towels", tier: "none" }
        ]
      },
      {
        name: "City Car Service",
        sector: "Automobiles",
        description: "Service center platform enhancing scheduling, service updates, and predictive maintenance for auto repair shops. Optimizing repair workflows and improving customer satisfaction.",
        location: "Hopes",
        keywords: [
          { term: "water wash", tier: "high" },
          { term: "form wash", tier: "low" },
          { term: "oil change", tier: "none" },
          { term: "paint change", tier: "none" },
        ]
      },
      {
        name: "Eagle Bike Service",
        sector: "Automobiles (Bike)",
        description: "Service center platform enhancing scheduling, service updates, and predictive maintenance for auto repair shops. Optimizing repair workflows and improving customer satisfaction.",
        location: "Coimbatore",
        keywords: [
          { term: "Water Wash", tier: "high" },
          { term: "Tyre change", tier: "low" },
          { term: "engine oil", tier: "none" },
          { term: "disc break", tier: "none" }
        ]
      },
      {
        name: "Kovai Car Decors",
        sector: "Automobiles",
        description: "Service center platform enhancing scheduling, service updates, and predictive maintenance for auto repair shops. Optimizing repair workflows and improving customer satisfaction.",
        location: "Coimbatore",
        keywords: [
          { term: "alloy wheel", tier: "high" },
          { term: "Tyre", tier: "low" },
          { term: "car paint", tier: "none" },
          { term: "music systems", tier: "low" }
        ]
      },
      {
        name: "Fast motors",
        sector: "Automobiles (Bike)",
        description: "Service center platform enhancing scheduling, service updates, and predictive maintenance for auto repair shops. Optimizing repair workflows and improving customer satisfaction.",
        location: "Coimbatore",
        keywords: [
          { term: "seat cover", tier: "none" },
          { term: "head light", tier: "low" },
          { term: "chain", tier: "high" },
          { term: "handle bar", tier: "low" }
        ]
      },
      {
        name: "Master Kitchen",
        sector: "Elecronics",
        description: "Real-time inventory tracking and sales insights platform for electronics retailers. Empowering efficient stock management and customer-driven product recommendations.",
        location: "Saravanampatti",
        keywords: [
          { term: "mixer", tier: "high" },
          { term: "grinder", tier: "low" },
          { term: "microwave oven", tier: "low" },
          { term: "disc washer", tier: "none" },
          { term: "chimney", tier: "none" }

        ]
      },
      {
        name: "Bikerszone",
        sector: "Automobiles (Bike)",
        description: "Service center platform enhancing scheduling, service updates, and predictive maintenance for auto repair shops. Optimizing repair workflows and improving customer satisfaction.",
        location: "Saravanampatti",
        keywords: [
          { term: "Tyre", tier: "none" },
          { term: "headlight", tier: "low" },
          { term: "air filter", tier: "low" },
          { term: "alloy wheel", tier: "none" },
        ]
      },
     {
        name: "Sathya fancy",
        sector: "stationery",
        description: "Retail platform offering real-time inventory tracking and customer behavior insights for stationery stores. Streamlining sales, stock management, and seasonal forecasting.",
        location: "Coimbatore",
        keywords: [
          { term: "pen", tier: "low" },
          { term: "marker", tier: "none" },
          { term: "A4 sheets", tier: "none" }
        ]
      },
      {
        name: "Zudio",
        sector: "Textiles",
        description: "Comprehensive solution for managing sales, inventory, and trends in textile retail. Delivering actionable insights for optimized stock and customer satisfaction.",
        location: "Race Course",
        keywords: [
          { term: "T-shirt", tier: "low" },
          { term: "Party Wears", tier: "low" },
          { term: "Night Wears", tier: "none" },
          { term: "trousers", tier: "high" }
        ]
      },
      {
        name: "Master Cars",
        sector: "Automobiles",
        description: "Service center platform enhancing scheduling, service updates, and predictive maintenance for auto repair shops. Optimizing repair workflows and improving customer satisfaction.",
        location: "Coimbatore",
        keywords: [
          { term: "Tyre", tier: "high" },
          { term: "seat cover", tier: "low" },
          { term: "A/C service", tier: "none" },
          { term: "engine service", tier: "low" }
        ]
      }
    ];
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("results");
    const overlay = document.getElementById("detailsOverlay");
    const detailsTitle = document.getElementById("detailsTitle");
    const detailsSector = document.getElementById("detailsSector");
    const detailsDescription = document.getElementById("detailsDescription");
    const detailsLocation = document.getElementById("detailsLocation");
    const detailsKeywords = document.getElementById("detailsKeywords");
    const enquiryLink = document.getElementById("enquiryLink");
    const enquiryCard = document.getElementById("enquiryCard");
    const enquiryCompanyName = document.getElementById("enquiryCompanyName");
    const enquiryMessageField = document.getElementById("enquiryMessage");
    const enquiryEmailField = document.getElementById("enquiryEmail");
    const sendEnquiryButton = document.getElementById("sendEnquiry");
    const enquiryCallButton = document.getElementById("enquiryCallButton");
    const enquiryCardNumber = document.getElementById("enquiryCardNumber");
    const enquiryCloseButtons = document.querySelectorAll("[data-close-enquiry]");
    const enquiryRecipient = "hello@signpostcelfon.com";
    const rankTier = tier => tierRank[tier] ?? tierRank.none;
    const getBestTier = keywords => {
      if (!keywords.length) {
        return "none";
      }

      return keywords.reduce(
        (best, current) => (rankTier(current.tier) < rankTier(best) ? current.tier : best),
        keywords[0].tier
      );
    };
    const renderLocation = locationText => {
      if (!detailsLocation) {
        return;
      }
      if (!locationText) {
        detailsLocation.hidden = true;
        detailsLocation.innerHTML = "";
        return;
      }
      const ns = "http://www.w3.org/2000/svg";
      const icon = document.createElementNS(ns, "svg");
      icon.setAttribute("viewBox", "0 0 20 20");
      icon.setAttribute("aria-hidden", "true");
      const path = document.createElementNS(ns, "path");
      path.setAttribute(
        "d",
        "M10 1.5c-3.313 0-6 2.687-6 6 0 4.688 6 11 6 11s6-6.312 6-11c0-3.313-2.687-6-6-6zm0 8.5A2.5 2.5 0 1 1 10 5a2.5 2.5 0 0 1 0 5z"
      );
      icon.appendChild(path);

      const text = document.createElement("span");
      text.textContent = locationText;

      detailsLocation.hidden = false;
      detailsLocation.innerHTML = "";
      detailsLocation.append(icon, text);
    };
    const renderKeywords = (keywords, wrapper) => {
      if (!wrapper) {
        return;
      }
      wrapper.innerHTML = "";
      keywords.forEach(keyword => {
        const badge = document.createElement("span");
        badge.className = "keyword-chip";
        badge.dataset.tier = keyword.tier;
        badge.textContent = keyword.term;
        wrapper.appendChild(badge);
      });
    };
    const setEnquiryContact = number => {
      if (enquiryLink) {
        enquiryLink.setAttribute("aria-label", `View enquiry options for ${number}`);
      }
      if (enquiryCardNumber) {
        enquiryCardNumber.textContent = number;
      }
    };
    setEnquiryContact("+91 63697 40638");
    const toggleEnquiryCard = isOpen => {
      if (!enquiryCard) {
        return;
      }
      enquiryCard.classList.toggle("open", isOpen);
      if (isOpen && enquiryMessageField) {
        enquiryMessageField.focus();
      }
    };
    const updateEnquiryContext = company => {
      if (enquiryCompanyName) {
        enquiryCompanyName.textContent = company.name;
      }
      if (enquiryMessageField) {
        enquiryMessageField.value = "";
      }
      if (enquiryEmailField) {
        enquiryEmailField.value = "";
      }
    };
    const sendEnquiryEmail = () => {
      const company = enquiryCompanyName?.textContent ?? "your company";
      const message = enquiryMessageField?.value.trim() ?? "";
      const email = enquiryEmailField?.value.trim() ?? "";
      if (!message) {
        enquiryMessageField?.focus();
        return;
      }
      const lines = [message];
      if (email) {
        lines.push("", `Reply to: ${email}`);
      }
      const subject = encodeURIComponent(`Enquiry for ${company}`);
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:${enquiryRecipient}?subject=${subject}&body=${body}`;
    };
    const showDetails = company => {
      detailsTitle.textContent = company.name;
      detailsSector.textContent = company.sector;
      detailsDescription.textContent = company.description;
      renderLocation(company.location);
      renderKeywords(company.keywords, detailsKeywords);
      updateEnquiryContext(company);
      toggleEnquiryCard(false);
      overlay.classList.add("open");
    };
    const closeDetails = () => {
      overlay.classList.remove("open");
      toggleEnquiryCard(false);
    };
    overlay.addEventListener("click", event => {
      if (event.target === overlay || event.target.hasAttribute("data-close")) {
        closeDetails();
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeDetails();
      }
    });
    if (enquiryLink) {
      enquiryLink.addEventListener("click", () => {
        if (!enquiryCard) {
          return;
        }
        toggleEnquiryCard(true);
      });
    }
    enquiryCloseButtons.forEach(button => {
      button.addEventListener("click", () => toggleEnquiryCard(false));
    });
    if (sendEnquiryButton) {
      sendEnquiryButton.addEventListener("click", sendEnquiryEmail);
    }
    const buildCard = (company, { showKeywords = false } = {}) => {
      const card = document.createElement("article");
      card.className = "company-card";

      let content = `
        <h3>${company.name}</h3>
        <p>${company.sector}</p>
      `;

      if (showKeywords) {
        const keywordBadges = company.matchedKeywords
          .map(keyword => `<span class="keyword-chip" data-tier="${keyword.tier}">${keyword.term}</span>`)
          .join("");

        content += `
          <div class="keyword-list">${keywordBadges}</div>
        `;
      }

      card.innerHTML = content;
      card.addEventListener("click", () => showDetails(company.original));
      return card;
    };
    const renderResults = query => {
      const keyword = query.trim().toLowerCase();
      const matches = companies
        .map(company => {
      const matchedKeywords = keyword
        ? company.keywords.filter(({ term }) =>
            term.toLowerCase().startsWith(keyword)
          )
        : company.keywords;
          if (keyword && !matchedKeywords.length) {
            return null;
          }
          const bestTier = matchedKeywords.length
            ? getBestTier(matchedKeywords)
            : getBestTier(company.keywords);
          return {
            original: company,
            name: company.name,
            sector: company.sector,
            matchedKeywords,
            bestTier
          };
        })
        .filter(Boolean)
        .sort((a, b) => {
          if (!keyword) {
            return a.name.localeCompare(b.name);
          }

          const tierDiff = rankTier(a.bestTier) - rankTier(b.bestTier);
          return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
        });
      if (!matches.length) {
        resultsContainer.innerHTML = `<div class="no-results">No companies found for "${query}". Try a different keyword.</div>`;
        return;
      }
      resultsContainer.innerHTML = "";
      matches.forEach(match => {
        resultsContainer.appendChild(buildCard(match, { showKeywords: Boolean(keyword) }));
      });
    };
    searchInput.addEventListener("input", event => {
      renderResults(event.target.value);
    });
    renderResults("");
