import re

with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

# 1. Card Image Ratio
css = css.replace("padding-top: 130%; /* 4:5 Aspect Ratio for professional look */", "padding-top: 150%; /* 2:3 Aspect Ratio */")

# 2. Card hover and gradient overlay
# Wait, let's just append the new styles to the end of the file, it will override or add to existing ones.

append_css = """
/* ==========================================================================
   NEW V2 STYLES (IMPLEMENTATION PLAN)
   ========================================================================== */

/* States Sub-Nav */
.states-sub-nav {
    background: rgba(15, 11, 24, 0.95);
    border-bottom: 1px solid var(--border-color);
    padding: 10px 0;
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    margin-top: 80px; /* Offset for header */
}
.header.scrolled + .states-sub-nav {
    margin-top: 70px;
}
.states-scroll-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    gap: 15px;
    overflow-x: auto;
    scrollbar-width: none;
}
.states-scroll-container::-webkit-scrollbar {
    display: none;
}
.state-link {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    padding: 6px 12px;
    border-radius: 20px;
    transition: var(--transition-smooth);
    white-space: nowrap;
}
.state-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
}
.state-link.active {
    color: var(--accent-magenta);
    background: rgba(255, 0, 127, 0.1);
    border: 1px solid rgba(255, 0, 127, 0.3);
}

/* Category Tabs */
.category-tabs-container {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 10px;
    margin-bottom: 10px;
    scrollbar-width: thin;
}
.category-tab {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    padding: 10px 16px;
    border-radius: 30px;
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    transition: var(--transition-smooth);
}
.category-tab:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
}
.category-tab.active {
    background: var(--gradient-primary);
    color: #fff;
    border-color: transparent;
    box-shadow: var(--shadow-neon);
}
.tab-badge {
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.75rem;
}

/* Em Alta Carousel */
.em-alta-section {
    margin-bottom: 10px;
}
.section-headline.small-headline {
    font-size: 1.1rem;
    margin-bottom: 15px;
}
.em-alta-carousel {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding: 10px 0 20px 0;
    scrollbar-width: thin;
}
.alta-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 80px;
    cursor: pointer;
}
.alta-avatar-wrapper {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    padding: 3px;
    background: var(--gradient-primary);
}
.alta-avatar-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--bg-obsidian);
}
.alta-online-badge {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    background: var(--accent-green);
    border: 2px solid var(--bg-obsidian);
    border-radius: 50%;
}
.alta-name {
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
}

/* 3-Field Search Box */
.advanced-search-box {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 15px;
}
.custom-select-wrapper i {
    z-index: 1;
}
.select-field {
    appearance: none;
    padding-left: 45px !important;
}

/* Card Overhaul */
.card-gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 60px 15px 15px 15px;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, transparent 100%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.card-details {
    padding: 15px;
    background: var(--bg-card);
}
.badge-online {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid var(--accent-green);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    backdrop-filter: var(--glass-blur);
    z-index: 3;
}
.badge-online .pulse-dot {
    width: 6px;
    height: 6px;
    background-color: var(--accent-green);
    animation: pulseGreen 1.6s infinite;
}
/* Ensure VIP/Verified badges are placed correctly if online badge is present */
.escort-card .badge-verified {
    top: 40px; /* moved down */
}
.card-hover-actions {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
    z-index: 4;
    transition: var(--transition-smooth);
}
.escort-card:hover .card-hover-actions {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}
.btn-hover-wa {
    background: #25d366;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.5);
}

/* Footer */
.app-footer {
    background: #050407;
    border-top: 1px solid var(--border-color);
    padding: 60px 40px 20px 40px;
    margin-top: 40px;
}
.footer-container {
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}
.brand-col p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: 15px;
    line-height: 1.6;
}
.footer-col h4 {
    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;
}
.footer-col a {
    display: block;
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 10px;
    transition: var(--transition-smooth);
}
.footer-col a:hover {
    color: var(--accent-magenta);
}
.footer-bottom {
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.05);
    padding-top: 20px;
    color: var(--text-muted);
    font-size: 0.8rem;
}

/* Mobile Sidebar Toggle */
.mobile-sidebar-toggle {
    display: none;
    margin-bottom: 15px;
}
.btn-open-sidebar {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: #fff;
    padding: 10px 20px;
    border-radius: var(--border-radius-sm);
    font-weight: 600;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.btn-close-sidebar-mobile {
    display: none;
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 1.2rem;
}

@media (max-width: 1024px) {
    .mobile-sidebar-toggle {
        display: block;
    }
    .sidebar-filters {
        position: fixed;
        top: 0;
        left: -100%;
        width: 300px;
        height: 100vh;
        z-index: 3000;
        border-radius: 0;
        transition: left 0.3s ease;
    }
    .sidebar-filters.open {
        left: 0;
    }
    .btn-close-sidebar-mobile {
        display: block;
    }
    .advanced-search-box {
        grid-template-columns: 1fr;
    }
    .footer-container {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}
"""

with open("style.css", "a", encoding="utf-8") as f:
    f.write(append_css)

# Update APP.JS
with open("app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Add online status to models and add State info
app_js = app_js.replace("location: \"Itaim Bibi, São Paulo\",", "location: \"Itaim Bibi, São Paulo\",\n        state: \"SP\",\n        online: true,")
app_js = app_js.replace("location: \"Pinheiros, São Paulo\",", "location: \"Pinheiros, São Paulo\",\n        state: \"SP\",\n        online: false,")
app_js = app_js.replace("location: \"Consolação, São Paulo\",", "location: \"Consolação, São Paulo\",\n        state: \"SP\",\n        online: true,")
app_js = app_js.replace("location: \"Vila Madalena, São Paulo\",", "location: \"Vila Madalena, São Paulo\",\n        state: \"SP\",\n        online: true,")
app_js = app_js.replace("location: \"Santana, São Paulo\",", "location: \"Santana, São Paulo\",\n        state: \"SP\",\n        online: false,")
app_js = app_js.replace("location: \"República, São Paulo\",", "location: \"República, São Paulo\",\n        state: \"SP\",\n        online: false,")


# Update Filters in activeFilters
activeFilters_old = '''let activeFilters = {
    category: "all",
    zone: "all",
    priceMax: 600,
    hair: "all",
    body: "all",
    verifiedOnly: false,
    vipOnly: false,
    query: ""
};'''
activeFilters_new = '''let activeFilters = {
    category: "all",
    state: "all",
    age: "all",
    zone: "all",
    priceMax: 600,
    hair: "all",
    body: "all",
    verifiedOnly: false,
    vipOnly: false,
    query: ""
};'''
app_js = app_js.replace(activeFilters_old, activeFilters_new)


# Replace Filter logic inside renderAllGrids
filter_logic_old = '''        // Category Pill
        if (activeFilters.category !== "all" && m.category !== activeFilters.category) return false;'''
filter_logic_new = '''        // Category Tab/Pill
        if (activeFilters.category !== "all" && m.category !== activeFilters.category) return false;
        
        // State Filter
        if (activeFilters.state !== "all" && m.state !== activeFilters.state) return false;
        
        // Age Filter
        if (activeFilters.age !== "all") {
            if (activeFilters.age === "18-25" && (m.age < 18 || m.age > 25)) return false;
            if (activeFilters.age === "26-35" && (m.age < 26 || m.age > 35)) return false;
            if (activeFilters.age === "36+" && m.age < 36) return false;
        }'''
app_js = app_js.replace(filter_logic_old, filter_logic_new)

# Update createEscortCard
createEscortCard_old = '''    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${m.images[0]}" alt="${m.name}">
            ${m.vipLevel !== 'regular' ? `<div class="badge-vip ${m.vipLevel}">${m.vipLevel === 'diamond' ? 'DIAMOND' : 'GOLD VIP'}</div>` : ''}
            ${m.verified ? `<div class="badge-verified"><span class="pulse-dot"></span>Verificada</div>` : ''}
            <div class="badge-price">R$ ${m.price}/h</div>
        </div>
        <div class="card-details">
            <div class="card-title-row">
                <span class="card-name">${m.name}</span>
                <span class="card-rating">${ratingHTML}</span>
            </div>
            <div class="card-info-row">
                <span class="card-info-tag">${m.age} anos</span>
                <span class="card-info-tag">${m.height}m</span>
                <span class="card-info-tag">${m.hair}</span>
            </div>
            <div class="card-location">
                <i class="fa-solid fa-location-dot"></i> ${m.location}
            </div>
        </div>
    `;'''

createEscortCard_new = '''    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${m.images[0]}" alt="${m.name}">
            ${m.online ? `<div class="badge-online"><span class="pulse-dot"></span>Online Agora</div>` : ''}
            ${m.vipLevel !== 'regular' ? `<div class="badge-vip ${m.vipLevel}">${m.vipLevel === 'diamond' ? 'DIAMOND' : 'GOLD VIP'}</div>` : ''}
            ${m.verified ? `<div class="badge-verified"><span class="pulse-dot"></span>Verificada</div>` : ''}
            <div class="card-hover-actions">
                <button class="btn-hover-wa"><i class="fa-brands fa-whatsapp"></i></button>
            </div>
            <div class="card-gradient-overlay">
                <div class="card-title-row">
                    <span class="card-name" style="color: #fff;">${m.name}</span>
                    <span class="card-rating">${ratingHTML}</span>
                </div>
                <div class="badge-price" style="position: static; display: inline-block; width: fit-content; margin-top: 5px;">R$ ${m.price}/h</div>
            </div>
        </div>
        <div class="card-details">
            <div class="card-info-row">
                <span class="card-info-tag">${m.age} anos</span>
                <span class="card-info-tag">${m.height}m</span>
                <span class="card-info-tag">${m.hair}</span>
            </div>
            <div class="card-location">
                <i class="fa-solid fa-location-dot"></i> ${m.location}
            </div>
        </div>
    `;'''
app_js = app_js.replace(createEscortCard_old, createEscortCard_new)

# Render Em Alta
renderAllGrids_end = '''    // Render General Listings Grid (Gold & Regular)
    generalContainer.innerHTML = "";
    if (otherModels.length > 0) {
        otherModels.forEach(m => {
            generalContainer.appendChild(createEscortCard(m));
        });
    } else {
        generalContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Nenhum perfil encontrado com os filtros selecionados.</div>`;
    }'''

renderAllGrids_new = renderAllGrids_end + '''

    // Render Em Alta (Online models)
    const emAltaContainer = document.getElementById("em-alta-carousel");
    if(emAltaContainer) {
        emAltaContainer.innerHTML = "";
        const onlineModels = models.filter(m => m.online);
        onlineModels.forEach(m => {
            const el = document.createElement("div");
            el.className = "alta-item";
            el.innerHTML = `
                <div class="alta-avatar-wrapper">
                    <img src="${m.images[0]}" alt="${m.name}">
                    <div class="alta-online-badge"></div>
                </div>
                <span class="alta-name">${m.name.split(' ')[0]}</span>
            `;
            el.addEventListener("click", () => openProfileModal(m));
            emAltaContainer.appendChild(el);
        });
    }
    
    // Update Tab Badges
    const tabs = ["all", "acompanhante", "transex", "masculino", "massagem", "encontros"];
    tabs.forEach(tab => {
        const badge = document.getElementById(`badge-${tab}`);
        if(badge) {
            if(tab === "all") badge.textContent = models.length;
            else badge.textContent = models.filter(m => m.category === tab).length;
        }
    });
'''
app_js = app_js.replace(renderAllGrids_end, renderAllGrids_new)


# Setup Event Listeners Overhaul
setupListeners_old = '''    // 2. Category Pills
    const pills = document.querySelectorAll("#category-filter-container .category-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeFilters.category = pill.getAttribute("data-category");
            renderAllGrids();
        });
    });'''

setupListeners_new = '''    // 2. Category Tabs (replacing old pills)
    const tabs = document.querySelectorAll(".category-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeFilters.category = tab.getAttribute("data-category");
            
            // Sync with search bar category select
            const catSelect = document.getElementById("search-category");
            if(catSelect) catSelect.value = activeFilters.category;
            
            renderAllGrids();
        });
    });
    
    // Category Select (Search Bar)
    const catSelect = document.getElementById("search-category");
    if(catSelect) {
        catSelect.addEventListener("change", (e) => {
            activeFilters.category = e.target.value;
            // Sync tabs
            tabs.forEach(t => t.classList.remove("active"));
            const t = document.querySelector(`.category-tab[data-category="${activeFilters.category}"]`);
            if(t) t.classList.add("active");
            renderAllGrids();
        });
    }
    
    // State Select (Search Bar)
    const stateSelect = document.getElementById("search-state");
    if(stateSelect) {
        stateSelect.addEventListener("change", (e) => {
            activeFilters.state = e.target.value;
            renderAllGrids();
        });
    }
    
    // State Sub-Nav
    const stateLinks = document.querySelectorAll(".state-link");
    stateLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            stateLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            activeFilters.state = link.textContent;
            if(stateSelect) stateSelect.value = link.textContent;
            renderAllGrids();
        });
    });
    
    // Age Range Filter
    const agePills = document.querySelectorAll("#age-filter-container .category-pill");
    agePills.forEach(pill => {
        pill.addEventListener("click", () => {
            agePills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeFilters.age = pill.getAttribute("data-age");
            renderAllGrids();
        });
    });
    
    // Mobile Sidebar Toggles
    const openSidebarBtn = document.getElementById("btn-open-sidebar");
    const closeSidebarBtn = document.getElementById("btn-close-sidebar-mobile");
    const sidebar = document.getElementById("sidebar-filters");
    if(openSidebarBtn) {
        openSidebarBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
        });
    }
    if(closeSidebarBtn) {
        closeSidebarBtn.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    }
'''
app_js = app_js.replace(setupListeners_old, setupListeners_new)


# Filter Reset Update
reset_old = '''        activeFilters = {
            category: "all",
            zone: "all",
            priceMax: 600,
            hair: "all",
            body: "all",
            verifiedOnly: false,
            vipOnly: false,
            query: ""
        };'''
reset_new = '''        activeFilters = {
            category: "all",
            state: "all",
            age: "all",
            zone: "all",
            priceMax: 600,
            hair: "all",
            body: "all",
            verifiedOnly: false,
            vipOnly: false,
            query: ""
        };'''
app_js = app_js.replace(reset_old, reset_new)

reset_ui_old = '''        // Reset UI Components
        searchField.value = "";
        pills.forEach(p => p.classList.remove("active"));
        document.querySelector("[data-category='all']").classList.add("active");'''
reset_ui_new = '''        // Reset UI Components
        searchField.value = "";
        
        // Reset tabs
        document.querySelectorAll(".category-tab").forEach(p => p.classList.remove("active"));
        document.querySelector(".category-tab[data-category='all']").classList.add("active");
        
        // Reset Age
        document.querySelectorAll("#age-filter-container .category-pill").forEach(p => p.classList.remove("active"));
        document.querySelector("#age-filter-container .category-pill[data-age='all']").classList.add("active");
        
        // Reset Search Selects
        const catSelect = document.getElementById("search-category");
        if(catSelect) catSelect.value = "all";
        const stateSelect = document.getElementById("search-state");
        if(stateSelect) stateSelect.value = "all";
        
        // Reset State Sub Nav
        document.querySelectorAll(".state-link").forEach(l => l.classList.remove("active"));
        document.querySelector(".state-link").classList.add("active");
'''
app_js = app_js.replace(reset_ui_old, reset_ui_new)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app_js)

print("Done")
