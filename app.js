/* ==========================================================================
   EMPIRE PREMIUM - INTERACTIVE LOGIC (app.js)
   Vanilla JS - Reative Search, Automated Chat, Live Stepper & Pix Simulation
   ========================================================================== */

// ==========================================================================
// 1. MOCK DATA (High-Fidelity Models)
// ==========================================================================
let models = [
    {
        id: 1,
        name: "Isabella Silva",
        category: "acompanhante",
        age: 22,
        height: 1.70,
        weight: 58,
        hair: "loiro",
        body: "delgada",
        eyes: "Verdes",
        busto: "Natural (Firme)",
        price: 450,
        verified: true,
        vipLevel: "diamond",
        zone: "zona-sul",
        location: "Itaim Bibi, São Paulo",
        state: "SP",
        online: true,
        bio: "Olá, me chamo Isabella. Sou uma loira paulistana de olhos verdes, extremamente educada, estilosa e discreta. Meu atendimento é focado em homens de negócios que buscam uma companhia premium, inteligente e agradável. Atendo em meu local luxuoso com ar-condicionado, estacionamento e total segurança.",
        images: [
            "assets/model1.png",
            "assets/model3.png",
            "assets/model4.png"
        ],
        services: ["GFE (Namoradinha)", "Massagem Relaxante", "Viagens e Eventos", "Beijo na Boca", "Sexo Oral Natural"],
        reviews: [
            { author: "Maurício K.", rating: 5, date: "18/05/2026", text: "Excelente atendimento. Super educada, conversa ótima e muito discreta. Recomendo muito o serviço completo.", verified: true },
            { author: "Carlos Alberto", rating: 5, date: "12/05/2026", text: "Uma loira estonteante. O local é impecável e ela é muito carinhosa. Voltarei com certeza.", verified: true }
        ]
    },
    {
        id: 2,
        name: "Thiago Lacerda",
        category: "masculino",
        age: 26,
        height: 1.82,
        weight: 80,
        hair: "moreno",
        body: "atletica",
        eyes: "Castanhos",
        busto: "N/A (Definido)",
        price: 350,
        verified: true,
        vipLevel: "diamond",
        zone: "zona-oeste",
        location: "Pinheiros, São Paulo",
        state: "SP",
        online: false,
        bio: "Thiago, personal trainer e acompanhante premium. Ofereço momentos agradáveis, repletos de cumplicidade, bom papo e massagens revigorantes. Atendimento de alto padrão voltado a mulheres sofisticadas, homens e casais liberais. Sou muito discreto, higiênico e sem frescuras.",
        images: [
            "assets/model2.png",
            "assets/model2.png"
        ],
        services: ["Acompanhante de Jantares", "Massagem Tântrica", "Dupla com Acompanhantes", "Ativo/Passivo", "Viagens"],
        reviews: [
            { author: "Clara S.", rating: 5, date: "19/05/2026", text: "Thiago é um verdadeiro cavalheiro. Muito atencioso e excelente massagem. Nota 10.", verified: true },
            { author: "Rodrigo F.", rating: 5, date: "15/05/2026", text: "Atendimento diferenciado e super atlético. Muito profissional.", verified: true }
        ]
    },
    {
        id: 3,
        name: "Melissa Ruiva",
        category: "acompanhante",
        age: 24,
        height: 1.65,
        weight: 54,
        hair: "ruivo",
        body: "curvilinea",
        eyes: "Castanhos",
        busto: "Silicone (350ml)",
        price: 250,
        verified: true,
        vipLevel: "gold",
        zone: "centro",
        location: "Consolação, São Paulo",
        state: "SP",
        online: true,
        bio: "Se você procura por uma verdadeira ruiva natural cheia de energia e curvas perfeitas, você me encontrou. Sou a Melissa, estudante universitária de psicologia nas horas livres. Adoro realizar fetiches, fazer massagens sensuais de tirar o fôlego e conversar. Atendo em local próprio aconchegante e viajo com clientes.",
        images: [
            "assets/model3.png",
            "assets/model1.png"
        ],
        services: ["Fantasias e Fetiches", "Massagem Erótica", "Sexo Oral com Calda", "Fetiche de Salto Alto"],
        reviews: [
            { author: "Gustavo N.", rating: 5, date: "16/05/2026", text: "Essa ruiva é maravilhosa! Muito divertida e sem pressa nenhuma. Recomendo de olhos fechados.", verified: true }
        ]
    },
    {
        id: 4,
        name: "Gabriele Transex",
        category: "transex",
        age: 25,
        height: 1.68,
        weight: 56,
        hair: "moreno",
        body: "curvilinea",
        eyes: "Mel",
        busto: "Silicone (280ml)",
        price: 300,
        verified: true,
        vipLevel: "gold",
        zone: "zona-oeste",
        location: "Vila Madalena, São Paulo",
        state: "SP",
        online: true,
        bio: "Olá amores! Gabriele, uma transex de traços finos e super feminina. Corpo violão, super simpática, mente aberta e totalmente dedicada ao seu prazer. Gosto de explorar desejos profundos com máximo respeito e higiene. Atendo ativos e passivos, com ou sem local.",
        images: [
            "assets/model4.png",
            "assets/model3.png"
        ],
        services: ["Inversão", "Ativa e Passiva", "Chuveiro Duplo", "Massagem Nurú", "Beijo na boca"],
        reviews: [
            { author: "Alexandre", rating: 5, date: "14/05/2026", text: "Gabriele é incrivelmente feminina, cheirosa e carinhosa. Um dos melhores atendimentos que já tive.", verified: true }
        ]
    },
    {
        id: 5,
        name: "Sophia Lins",
        category: "acompanhante",
        age: 21,
        height: 1.60,
        weight: 50,
        hair: "castanho",
        body: "delgada",
        eyes: "Castanhos",
        busto: "Natural",
        price: 200,
        verified: false,
        vipLevel: "regular",
        zone: "zona-norte",
        location: "Santana, São Paulo",
        state: "SP",
        online: false,
        bio: "Oi! Sou a Sophia, uma menina meiga e carinhosa. Gosto de encontros tranquilos, sem correria, onde o foco é a conexão e a diversão. Sou super limpinha, discreta e atendo somente em hotéis ou motéis da região. Venha relaxar do estresse do dia a dia comigo.",
        images: [
            "assets/model1.png"
        ],
        services: ["Sexo Convencional", "Massagem Corporal", "Companhia para Jantares"],
        reviews: []
    },
    {
        id: 6,
        name: "Lucas Alencar",
        category: "masculino",
        age: 23,
        height: 1.78,
        weight: 75,
        hair: "loiro",
        body: "atletica",
        eyes: "Azuis",
        busto: "N/A (Forte)",
        price: 180,
        verified: true,
        vipLevel: "regular",
        zone: "centro",
        location: "República, São Paulo",
        state: "SP",
        online: false,
        bio: "Lucas, loiro de olhos azuis. Jovem atlético, liberal, discreto e focado em proporcionar momentos incríveis. Atendo homens, mulheres e casais. Venha fazer uma massagem relaxante e desfrutar do melhor do prazer discreto.",
        images: [
            "assets/model2.png"
        ],
        services: ["Massagem Relaxante", "Atendimento a Casais", "Ativo/Passivo"],
        reviews: [
            { author: "Fernando M.", rating: 4, date: "10/05/2026", text: "Cara super atlético e simpático. Recomendo.", verified: true }
        ]
    }
];

// Active State for Filtering
let activeFilters = {
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
};

let currentViewingEscort = null;
let currentChattingEscort = null;

// ==========================================================================
// 2. INITIALIZATION & ROUTING (AGE DISCLAIMER GATE)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 18+ Buttons
    const btnAcceptAge = document.getElementById("btn-accept-age");
    const btnRejectAge = document.getElementById("btn-reject-age");
    const disclaimerScreen = document.getElementById("disclaimer-screen");
    const mainApp = document.getElementById("main-app");

    btnAcceptAge.addEventListener("click", () => {
        disclaimerScreen.style.opacity = "0";
        setTimeout(() => {
            disclaimerScreen.style.display = "none";
            mainApp.style.display = "block";
            setTimeout(() => {
                mainApp.style.opacity = "1";
                document.body.classList.remove("modal-open");
            }, 50);
        }, 500);
    });

    btnRejectAge.addEventListener("click", () => {
        window.location.href = "https://www.google.com.br";
    });

    // Render Cards first time
    renderAllGrids();
    setupEventListeners();
});

// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.getElementById("app-header");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ==========================================================================
// 3. RENDER CARDS GRID SYSTEM
// ==========================================================================
function renderAllGrids() {
    const diamondContainer = document.getElementById("diamond-grid-container");
    const generalContainer = document.getElementById("general-grid-container");
    const sectionVipHighlights = document.getElementById("section-vip-highlights");

    // Filter Data
    const filteredModels = models.filter(m => {
        // Category Tab/Pill
        if (activeFilters.category !== "all" && m.category !== activeFilters.category) return false;
        
        // State Filter
        if (activeFilters.state !== "all" && m.state !== activeFilters.state) return false;
        
        // Age Filter
        if (activeFilters.age !== "all") {
            if (activeFilters.age === "18-25" && (m.age < 18 || m.age > 25)) return false;
            if (activeFilters.age === "26-35" && (m.age < 26 || m.age > 35)) return false;
            if (activeFilters.age === "36+" && m.age < 36) return false;
        }
        
        // Zone Dropdown
        if (activeFilters.zone !== "all" && m.zone !== activeFilters.zone) return false;
        
        // Price Max Slider
        if (m.price > activeFilters.priceMax) return false;
        
        // Hair Dropdown
        if (activeFilters.hair !== "all" && m.hair !== activeFilters.hair) return false;
        
        // Body Dropdown
        if (activeFilters.body !== "all" && m.body !== activeFilters.body) return false;
        
        // Verified Switch
        if (activeFilters.verifiedOnly && !m.verified) return false;
        
        // VIP Highlight Switch
        if (activeFilters.vipOnly && m.vipLevel === "regular") return false;

        // Keyword Query Search
        if (activeFilters.query.trim() !== "") {
            const query = activeFilters.query.toLowerCase();
            const matchesName = m.name.toLowerCase().includes(query);
            const matchesBio = m.bio.toLowerCase().includes(query);
            const matchesServices = m.services.some(s => s.toLowerCase().includes(query));
            const matchesLocation = m.location.toLowerCase().includes(query);
            if (!matchesName && !matchesBio && !matchesServices && !matchesLocation) return false;
        }

        return true;
    });

    // Separate Diamond VIP vs Others
    const diamondModels = filteredModels.filter(m => m.vipLevel === "diamond");
    const otherModels = filteredModels.filter(m => m.vipLevel !== "diamond");

    // Render Diamond VIP Grid
    diamondContainer.innerHTML = "";
    if (diamondModels.length > 0) {
        sectionVipHighlights.style.display = "block";
        diamondModels.forEach(m => {
            diamondContainer.appendChild(createEscortCard(m));
        });
    } else {
        sectionVipHighlights.style.display = "none";
    }

    // Render General Listings Grid (Gold & Regular)
    generalContainer.innerHTML = "";
    if (otherModels.length > 0) {
        otherModels.forEach(m => {
            generalContainer.appendChild(createEscortCard(m));
        });
    } else {
        generalContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Nenhum perfil encontrado com os filtros selecionados.</div>`;
    }

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

}

// Card DOM Factory
function createEscortCard(m) {
    const card = document.createElement("div");
    card.className = `escort-card ${m.vipLevel}`;
    card.setAttribute("data-id", m.id);

    // Calc Average Rating
    let ratingHTML = `<i class="fa-solid fa-star" style="color: var(--text-muted);"></i> Novo`;
    if (m.reviews.length > 0) {
        const sum = m.reviews.reduce((acc, r) => acc + r.rating, 0);
        const avg = (sum / m.reviews.length).toFixed(1);
        ratingHTML = `<i class="fa-solid fa-star"></i> ${avg}`;
    }

    card.innerHTML = `
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
    `;

    // Click handler to open detailed view
    card.addEventListener("click", () => {
        openProfileModal(m);
    });

    return card;
}

// ==========================================================================
// 4. FILTER CONTROLS EVENTS
// ==========================================================================
function setupEventListeners() {
    // 1. Search Query
    const searchField = document.getElementById("search-query");
    searchField.addEventListener("input", (e) => {
        activeFilters.query = e.target.value;
        renderAllGrids();
    });

    // 2. Category Tabs (replacing old pills)
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


    // 3. Zone Dropdown
    const zoneSelect = document.getElementById("filter-neighborhood");
    zoneSelect.addEventListener("change", (e) => {
        activeFilters.zone = e.target.value;
        renderAllGrids();
    });

    // 4. Price Slider
    const priceSlider = document.getElementById("filter-price");
    const priceDisplay = document.getElementById("price-max-display");
    priceSlider.addEventListener("input", (e) => {
        const val = e.target.value;
        priceDisplay.textContent = `R$ ${val}`;
        activeFilters.priceMax = parseInt(val);
        renderAllGrids();
    });

    // 5. Hair Dropdown
    const hairSelect = document.getElementById("filter-hair");
    hairSelect.addEventListener("change", (e) => {
        activeFilters.hair = e.target.value;
        renderAllGrids();
    });

    // 6. Body Dropdown
    const bodySelect = document.getElementById("filter-body");
    bodySelect.addEventListener("change", (e) => {
        activeFilters.body = e.target.value;
        renderAllGrids();
    });

    // 7. Verified switch
    const verifiedSwitch = document.getElementById("filter-verified");
    verifiedSwitch.addEventListener("change", (e) => {
        activeFilters.verifiedOnly = e.target.checked;
        renderAllGrids();
    });

    // 8. VIP switch
    const vipSwitch = document.getElementById("filter-vip");
    vipSwitch.addEventListener("change", (e) => {
        activeFilters.vipOnly = e.target.checked;
        renderAllGrids();
    });

    // 9. Reset Filters Button
    const clearBtn = document.getElementById("btn-reset-filters");
    clearBtn.addEventListener("click", () => {
        // Reset local structure variables
        activeFilters = {
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
        };

        // Reset UI Components
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

        zoneSelect.value = "all";
        priceSlider.value = 600;
        priceDisplay.textContent = "R$ 600";
        hairSelect.value = "all";
        bodySelect.value = "all";
        verifiedSwitch.checked = false;
        vipSwitch.checked = false;

        renderAllGrids();
    });

    // Modal Details closes
    document.getElementById("btn-close-profile").addEventListener("click", closeProfileModal);
    document.getElementById("profile-detail-modal").addEventListener("click", (e) => {
        if (e.target.id === "profile-detail-modal") closeProfileModal();
    });

    // Secure chat controls
    document.getElementById("btn-close-chat").addEventListener("click", closeSecureChat);
    document.getElementById("btn-toggle-global-chat").addEventListener("click", () => {
        if (currentChattingEscort === null) {
            // Open default chat with Isabella
            openSecureChat(models[0]);
        } else {
            const chatDrawer = document.getElementById("secure-chat-drawer");
            if (chatDrawer.style.display === "flex") {
                closeSecureChat();
            } else {
                chatDrawer.style.display = "flex";
            }
        }
    });

    // Submit Review Form
    document.getElementById("add-review-form").addEventListener("submit", handleSubmitReview);

    // Start Chat from profile
    document.getElementById("profile-modal-start-chat-btn").addEventListener("click", () => {
        closeProfileModal();
        setTimeout(() => {
            openSecureChat(currentViewingEscort);
        }, 300);
    });

    // Send chat message
    document.getElementById("btn-send-chat-msg").addEventListener("click", sendChatMessage);
    document.getElementById("chat-input-text").addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendChatMessage();
    });

    // City Selector header click
    document.getElementById("city-btn").addEventListener("click", () => {
        alert("Simulação de troca de cidade: Atualmente o protótipo está fixado em São Paulo (SP) para fins de demonstração.");
    });
}

// ==========================================================================
// 5. PROFILE DETAIL MODAL CONTROLLER
// ==========================================================================
function openProfileModal(m) {
    currentViewingEscort = m;
    document.body.classList.add("modal-open");
    
    const modal = document.getElementById("profile-detail-modal");
    modal.style.display = "flex";

    // Populate Fields
    document.getElementById("profile-modal-main-img").src = m.images[0];
    document.getElementById("profile-modal-name").textContent = m.name;
    document.getElementById("profile-modal-price").textContent = `R$ ${m.price} / hora`;
    document.getElementById("profile-modal-bio").textContent = m.bio;
    document.getElementById("profile-modal-age").textContent = `${m.age} anos`;
    document.getElementById("profile-modal-height").textContent = `${m.height} m`;
    document.getElementById("profile-modal-weight").textContent = `${m.weight} kg`;
    document.getElementById("profile-modal-hair-val").textContent = m.hair.charAt(0).toUpperCase() + m.hair.slice(1);
    document.getElementById("profile-modal-eyes").textContent = m.eyes;
    document.getElementById("profile-modal-busto").textContent = m.busto;

    // Verified badge
    const verifiedBadge = document.getElementById("profile-modal-verified-badge");
    verifiedBadge.style.display = m.verified ? "inline-flex" : "none";

    // VIP Diamond badge
    const vipBadge = document.getElementById("profile-modal-vip-badge");
    vipBadge.style.display = m.vipLevel === "diamond" ? "block" : "none";

    // Dynamic services tags
    const servicesRow = document.getElementById("profile-modal-services-row");
    servicesRow.innerHTML = "";
    m.services.forEach(s => {
        const span = document.createElement("span");
        span.className = "card-info-tag";
        span.textContent = s;
        servicesRow.innerHTML += ` `;
        servicesRow.appendChild(span);
    });

    // WhatsApp quick link
    const waLink = document.getElementById("profile-modal-whatsapp-link");
    waLink.href = `https://wa.me/5511999998888?text=Olá%20${m.name},%20vi%20seu%20perfil%20Premium%20no%20Empire%20Premium%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20horários!`;

    // Load Thumbs Gallery
    const thumbsRow = document.getElementById("profile-modal-thumbs-row");
    thumbsRow.innerHTML = "";
    m.images.forEach((imgSrc, idx) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.alt = `Thumb ${idx}`;
        thumb.className = `gallery-thumb ${idx === 0 ? 'active' : ''}`;
        thumb.addEventListener("click", () => {
            document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            document.getElementById("profile-modal-main-img").src = imgSrc;
        });
        thumbsRow.appendChild(thumb);
    });

    // Render Comments
    renderProfileComments();
}

function closeProfileModal() {
    document.getElementById("profile-detail-modal").style.display = "none";
    document.body.classList.remove("modal-open");
    currentViewingEscort = null;
    
    // Reset review form
    document.getElementById("add-review-form").reset();
}

// Comments Renderer
function renderProfileComments() {
    const container = document.getElementById("profile-modal-comments-container");
    const countDisplay = document.getElementById("profile-modal-reviews-count");
    const starDisplay = document.getElementById("profile-modal-stars-rating");
    
    container.innerHTML = "";
    const m = currentViewingEscort;

    countDisplay.textContent = m.reviews.length;

    if (m.reviews.length === 0) {
        container.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem; padding: 15px 0;">Este perfil ainda não possui avaliações. Seja o primeiro a comentar!</div>`;
        starDisplay.innerHTML = `<span style="color: var(--text-muted);">Ainda não avaliado</span>`;
        return;
    }

    // Average Calc
    const sum = m.reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = (sum / m.reviews.length).toFixed(1);
    
    // Build star icons HTML
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.round(avg)) {
            starsHTML += `<i class="fa-solid fa-star"></i>`;
        } else {
            starsHTML += `<i class="fa-regular fa-star" style="color: var(--text-muted);"></i>`;
        }
    }
    starDisplay.innerHTML = `${starsHTML} <span>(${avg})</span>`;

    // Render each review card
    m.reviews.forEach(r => {
        let commentStars = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= r.rating) {
                commentStars += `<i class="fa-solid fa-star"></i>`;
            } else {
                commentStars += `<i class="fa-regular fa-star" style="color: var(--text-muted);"></i>`;
            }
        }

        const revCard = document.createElement("div");
        revCard.className = "review-card";
        revCard.innerHTML = `
            <div class="review-meta">
                <span class="review-author ${r.verified ? 'verified-buyer' : ''}">${r.author}</span>
                <span class="review-date">${r.date}</span>
            </div>
            <div class="review-stars">
                ${commentStars}
            </div>
            <p class="review-text">${r.text}</p>
        `;
        container.appendChild(revCard);
    });
}

// Add Review Submission
function handleSubmitReview(e) {
    e.preventDefault();
    const authorInput = document.getElementById("review-author-input");
    const starsInput = document.getElementById("review-stars-input");
    const textInput = document.getElementById("review-text-input");

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    const newRev = {
        author: authorInput.value,
        rating: parseInt(starsInput.value),
        date: formattedDate,
        text: textInput.value,
        verified: true // Clients leaving reviews through our premium portal checkouts are verified
    };

    currentViewingEscort.reviews.unshift(newRev); // Add to beginning of array
    
    // Success alert feedback
    alert("Avaliação enviada com sucesso! Nosso sistema validou e publicou seu feedback.");

    // Reset inputs
    authorInput.value = "";
    textInput.value = "";
    
    // Re-render
    renderProfileComments();
    renderAllGrids();
}

// ==========================================================================
// 6. SECURE SAFE CHAT SIMULATOR
// ==========================================================================
function openSecureChat(escort) {
    currentChattingEscort = escort;
    
    const chatDrawer = document.getElementById("secure-chat-drawer");
    document.getElementById("chat-escort-avatar").src = escort.images[0];
    document.getElementById("chat-escort-name").textContent = escort.name;
    
    // Setup message listing
    const msgContainer = document.getElementById("chat-messages-container");
    // Clear old conversations except the safety warning box
    const warningBoxHTML = `<div class="chat-warning-box">
        <i class="fa-solid fa-shield-halved"></i> 
        <strong>Chat Criptografado & Seguro:</strong> Empire Premium monitora o chat para prevenir fraudes. Nenhum dado pessoal é exposto imediatamente. Combine o serviço com segurança.
    </div>`;
    
    msgContainer.innerHTML = warningBoxHTML;
    chatDrawer.style.display = "flex";

    // Auto greetings message from model
    setTimeout(() => {
        insertChatBubble("escort", `Olá! Tudo bem? Fico feliz pelo seu contato de interesse no meu anúncio. Como posso te ajudar hoje? 💋`);
    }, 600);
}

function closeSecureChat() {
    document.getElementById("secure-chat-drawer").style.display = "none";
}

function insertChatBubble(sender, text) {
    const msgContainer = document.getElementById("chat-messages-container");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    
    const today = new Date();
    const timeStr = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;

    bubble.innerHTML = `
        ${text}
        <span class="chat-time">${timeStr}</span>
    `;

    // Insert before typing indicator
    const typingIndicator = document.getElementById("chat-typing-indicator");
    msgContainer.insertBefore(bubble, typingIndicator);
    
    // Scroll to bottom
    msgContainer.scrollTop = msgContainer.scrollHeight;
}

// Send user message
function sendChatMessage() {
    const input = document.getElementById("chat-input-text");
    const text = input.value.trim();
    if (text === "") return;

    // Render visitor bubble
    insertChatBubble("visitor", text);
    input.value = "";

    // Trigger typing simulation
    const typingIndicator = document.getElementById("chat-typing-indicator");
    setTimeout(() => {
        typingIndicator.style.display = "block";
        const msgContainer = document.getElementById("chat-messages-container");
        msgContainer.scrollTop = msgContainer.scrollHeight;

        // Trigger response
        setTimeout(() => {
            typingIndicator.style.display = "none";
            const escortResponse = generateEscortReply(text);
            insertChatBubble("escort", escortResponse);
        }, 1600);

    }, 800);
}

// Core NLP Rule Matcher for escort dialogue simulation
function generateEscortReply(userMsg) {
    const msg = userMsg.toLowerCase();
    const m = currentChattingEscort;

    if (msg.includes("valor") || msg.includes("quanto") || msg.includes("preco") || msg.includes("preço") || msg.includes("custa")) {
        return `Meu cachê é de R$ ${m.price} por hora em meu local. Ofereço descontos para períodos maiores, como 2 horas ou pernoites. Quer agendar o seu horário? ✨`;
    }
    
    if (msg.includes("local") || msg.includes("onde") || msg.includes("endereco") || msg.includes("endereço") || msg.includes("atende")) {
        return `Atendo em meu apartamento privativo de altíssimo padrão com total discrição e conforto na região do ${m.location}. Tenho bebidas, toalhas higienizadas e estacionamento. Você vem de carro ou Uber?`;
    }

    if (msg.includes("whatsapp") || msg.includes("número") || msg.includes("numero") || msg.includes("telefone") || msg.includes("celular") || msg.includes("contato")) {
        return `Podemos fechar pelo WhatsApp se preferir agendar mais rápido! Basta clicar no botão verde de **WhatsApp Direto** no meu perfil. Aguardo sua mensagem lá! 😉`;
    }

    if (msg.includes("ativo") || msg.includes("passivo") || msg.includes("servico") || msg.includes("serviço") || msg.includes("beijo") || msg.includes("oral")) {
        return `Em meu atendimento está incluso: ${m.services.join(", ")}. Tudo com muita higiene, carinho e sem pressa nenhuma. Algum fetiche especial que você queira realizar comigo?`;
    }

    // Default responses
    const genericReplies = [
        `Que ótimo! Adoraria te atender. Qual dia e horário você está pensando em me fazer uma visita?`,
        `Adorei sua mensagem! Sou super carinhosa e garanto que você vai ter momentos inesquecíveis comigo. Quer agendar agora?`,
        `Estou disponível hoje. O que você gostaria de fazer no nosso encontro? 😈`
    ];
    return genericReplies[Math.floor(Math.random() * genericReplies.length)];
}

// ==========================================================================
// 7. ADVERTISER REGISTER WIZARD & STEPPER
// ==========================================================================
let currentStep = 1;
const totalSteps = 3;
let advertiserPhotoMockCaptured = false;
let selectedPlan = "gold";

// Open Stepper Modal
document.getElementById("btn-open-stepper").addEventListener("click", () => {
    document.body.classList.add("modal-open");
    document.getElementById("advertiser-stepper-modal").style.display = "flex";
    resetStepperWizard();
});

// Close buttons
document.getElementById("btn-close-stepper").addEventListener("click", closeStepperModal);
document.getElementById("btn-success-go-home").addEventListener("click", closeStepperModal);
document.getElementById("advertiser-stepper-modal").addEventListener("click", (e) => {
    if (e.target.id === "advertiser-stepper-modal") closeStepperModal();
});

function closeStepperModal() {
    document.getElementById("advertiser-stepper-modal").style.display = "none";
    document.body.classList.remove("modal-open");
}

function resetStepperWizard() {
    currentStep = 1;
    advertiserPhotoMockCaptured = false;
    selectedPlan = "gold";

    // Show normal header, hide screens
    document.getElementById("stepper-normal-header").style.display = "block";
    document.getElementById("stepper-content-box").style.display = "block";
    document.getElementById("checkout-pix-screen").style.display = "none";
    document.getElementById("stepper-success-screen").style.display = "none";

    // Form inputs reset
    document.getElementById("ad-name").value = "";
    document.getElementById("ad-age").value = "";
    document.getElementById("ad-price").value = "";
    document.getElementById("ad-bio").value = "";
    document.getElementById("ad-whatsapp").value = "";

    // Camera reset
    document.getElementById("camera-mock-placeholder").style.display = "flex";
    document.getElementById("camera-mock-capture").style.display = "none";

    // Code generator random
    const randCode = "EP-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("auth-code-gen").textContent = randCode;

    // Plans card activation reset
    document.querySelectorAll(".plan-card").forEach(c => c.classList.remove("active"));
    document.querySelector("[data-plan='gold']").classList.add("active");

    updateStepperUI();
}

function updateStepperUI() {
    // Steppers pills toggling
    document.querySelectorAll(".stepper-step").forEach((sStep, index) => {
        sStep.classList.remove("active", "completed");
        const stepNum = index + 1;
        if (stepNum === currentStep) {
            sStep.classList.add("active");
        } else if (stepNum < currentStep) {
            sStep.classList.add("completed");
        }
    });

    // Step views visible toggling
    document.querySelectorAll(".stepper-view").forEach((view, index) => {
        view.classList.remove("active");
        if (index + 1 === currentStep) {
            view.classList.add("active");
        }
    });

    // Progress bar line
    const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
    document.getElementById("stepper-line-progress").style.width = `${progressPercent}%`;

    // Navigation buttons text & visibility
    const backBtn = document.getElementById("btn-stepper-back");
    const nextBtn = document.getElementById("btn-stepper-next");

    if (currentStep === 1) {
        backBtn.style.visibility = "hidden";
    } else {
        backBtn.style.visibility = "visible";
    }

    if (currentStep === totalSteps) {
        nextBtn.innerHTML = `Concluir & Pagar <i class="fa-solid fa-credit-card"></i>`;
    } else {
        nextBtn.innerHTML = `Avançar <i class="fa-solid fa-arrow-right"></i>`;
    }
}

// Stepper Forward
document.getElementById("btn-stepper-next").addEventListener("click", () => {
    if (currentStep === 1) {
        // Validate basic form
        const name = document.getElementById("ad-name").value.trim();
        const age = document.getElementById("ad-age").value.trim();
        const price = document.getElementById("ad-price").value.trim();
        const bio = document.getElementById("ad-bio").value.trim();
        const wha = document.getElementById("ad-whatsapp").value.trim();

        if (name === "" || age === "" || price === "" || bio === "" || wha === "") {
            alert("Por favor, preencha todos os campos do anúncio para continuar!");
            return;
        }

        if (parseInt(age) < 18) {
            alert("A idade mínima obrigatória para anunciantes é de 18 anos!");
            return;
        }

        currentStep++;
        updateStepperUI();
    } 
    else if (currentStep === 2) {
        // Validate Photo capture
        if (!advertiserPhotoMockCaptured) {
            alert("Por favor, realize a captura da sua selfie com o código para validarmos seu perfil!");
            return;
        }

        currentStep++;
        updateStepperUI();
    } 
    else if (currentStep === 3) {
        // Finished Steps -> Open PIX Checkout Overlay
        openPixCheckout();
    }
});

// Stepper Backward
document.getElementById("btn-stepper-back").addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateStepperUI();
    }
});

// Stepper Plan Cards Click Toggles
document.querySelectorAll(".plan-card").forEach(c => {
    c.addEventListener("click", () => {
        document.querySelectorAll(".plan-card").forEach(pc => pc.classList.remove("active"));
        c.classList.add("active");
        selectedPlan = c.getAttribute("data-plan");
    });
});

// Webcam Simulator trigger
document.getElementById("btn-trigger-camera").addEventListener("click", () => {
    const placeholder = document.getElementById("camera-mock-placeholder");
    const preview = document.getElementById("camera-mock-capture");
    const triggerBtn = document.getElementById("btn-trigger-camera");

    triggerBtn.disabled = true;
    triggerBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Acessando Câmera...`;

    setTimeout(() => {
        // Shutter flash effect
        const viewport = document.getElementById("camera-viewport");
        viewport.style.backgroundColor = "#fff";
        
        setTimeout(() => {
            viewport.style.backgroundColor = "";
            
            // Randomly select one of our AI models to simulate a real selfie picture!
            // Let's use the third model (redhead) to simulate a brand new registration selfie!
            preview.src = "assets/model3.png"; 
            preview.style.display = "block";
            placeholder.style.display = "none";

            triggerBtn.disabled = false;
            triggerBtn.innerHTML = `<i class="fa-solid fa-check"></i> Foto Capturada!`;
            advertiserPhotoMockCaptured = true;
            
            alert("Selfie capturada com sucesso! O sistema leu o código perfeitamente.");
        }, 150);
    }, 1200);
});

// Open PIX Checkout Overlay
function openPixCheckout() {
    // Hide Stepper normal controls
    document.getElementById("stepper-normal-header").style.display = "none";
    document.getElementById("stepper-content-box").style.display = "none";

    // Update Checkout display labels
    const checkoutLabel = document.getElementById("checkout-selected-plan-label");
    if (selectedPlan === "silver") {
        checkoutLabel.textContent = "Prata VIP";
        checkoutLabel.style.color = "#c0c0c0";
    } else if (selectedPlan === "gold") {
        checkoutLabel.textContent = "Ouro VIP";
        checkoutLabel.style.color = "#ffd700";
    } else {
        checkoutLabel.textContent = "Diamond VIP";
        checkoutLabel.style.color = "var(--accent-gold)";
    }

    document.getElementById("checkout-pix-screen").style.display = "flex";
}

// Simulate Pay Confirmation Click
document.getElementById("btn-simulate-pix-success").addEventListener("click", () => {
    const simBtn = document.getElementById("btn-simulate-pix-success");
    simBtn.disabled = true;
    simBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processando transação bancária...`;

    setTimeout(() => {
        // Add new Ad dynamically to our models list!
        publishAdvertiserAd();

        // Switch to success view screen
        document.getElementById("checkout-pix-screen").style.display = "none";
        document.getElementById("stepper-success-screen").style.display = "flex";
    }, 2000);
});

// Publishes new Escort Ad to in-memory models array
function publishAdvertiserAd() {
    const name = document.getElementById("ad-name").value.trim();
    const age = parseInt(document.getElementById("ad-age").value.trim());
    const price = parseInt(document.getElementById("ad-price").value.trim());
    const bio = document.getElementById("ad-bio").value.trim();
    const wha = document.getElementById("ad-whatsapp").value.trim();
    const cat = document.getElementById("ad-category").value;
    const neigh = document.getElementById("ad-neighborhood").value;
    const hairVal = document.getElementById("ad-hair").value;
    const bodyVal = document.getElementById("ad-body").value;

    let locLabel = "Zona Sul, São Paulo";
    if (neigh === "zona-oeste") locLabel = "Pinheiros, São Paulo";
    else if (neigh === "centro") locLabel = "Consolação, São Paulo";
    else if (neigh === "zona-norte") locLabel = "Santana, São Paulo";
    else if (neigh === "zona-leste") locLabel = "Tatuapé, São Paulo";

    const newModel = {
        id: models.length + 1,
        name: name,
        category: cat,
        age: age,
        height: 1.67, // random simulation attributes
        weight: 55,
        hair: hairVal,
        body: bodyVal,
        eyes: "Castanhos",
        busto: "Silicone",
        price: price,
        verified: true, // Verification selfie completed in stepper!
        vipLevel: selectedPlan, // Highlight based on paid plan!
        zone: neigh,
        location: locLabel,
        bio: bio,
        images: [
            "assets/model3.png", // Uses our beautiful redhead image
            "assets/model1.png"
        ],
        services: ["GFE (Namoradinha)", "Massagem Erótica", "Sexo Convencional", "Beijo na Boca"],
        reviews: []
    };

    // Prepend to list so it pops up at the very top of lists!
    models.unshift(newModel);

    // Re-render
    renderAllGrids();
}
