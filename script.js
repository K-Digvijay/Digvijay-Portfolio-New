// Digvijay Kewale - AI Engineer Portfolio Logic

// Canvas Particle Mesh Animation (AI Neural Grid Effect)
(function initCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const numParticles = Math.min(Math.floor(width / 25), 55);

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 1.8 + 1
        });
    }

    let mouse = { x: null, y: null, maxDist: 140 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];

            // Move
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.x < 0 || p1.x > width) p1.vx *= -1;
            if (p1.y < 0 || p1.y > height) p1.vy *= -1;

            // Render node
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
            ctx.fill();

            // Connect to nearby nodes
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            // Mouse interaction line
            if (mouse.x && mouse.y) {
                const mdx = p1.x - mouse.x;
                const mdy = p1.y - mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mdist < mouse.maxDist) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(129, 140, 248, ${0.25 * (1 - mdist / mouse.maxDist)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }
    animate();
})();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling and section link highlight
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Scroll navbar background change & active link update
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('bg-slate-950/90', 'border-slate-800/80', 'shadow-lg');
            nav.classList.remove('bg-slate-950/40', 'border-transparent');
        } else {
            nav.classList.remove('bg-slate-950/90', 'border-slate-800/80', 'shadow-lg');
            nav.classList.add('bg-slate-950/40', 'border-transparent');
        }
    }
});

// Contact Form Submission (Formspree)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;
        const statusEl = document.getElementById("form-status");
        if (statusEl) {
            statusEl.innerHTML = `<span class="inline-flex items-center gap-2 text-cyan-400 font-medium">
                <svg class="animate-spin h-4 w-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Sending message...
            </span>`;
        }

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                if (statusEl) {
                    statusEl.innerHTML = `<span class="text-emerald-400 font-medium bg-emerald-950/50 border border-emerald-500/30 px-4 py-2 rounded-lg inline-block">
                        ✨ Message sent successfully! I will get back to you shortly.
                    </span>`;
                }
                form.reset();
            } else {
                if (statusEl) {
                    statusEl.innerHTML = `<span class="text-rose-400 font-medium">❌ Unable to send message. Please try directly via email: digvijay.kewale@gmail.com</span>`;
                }
            }
        } catch (error) {
            console.error("Form error:", error);
            if (statusEl) {
                statusEl.innerHTML = `<span class="text-rose-400 font-medium">⚠️ Connection error. Please try again or email directly.</span>`;
            }
        }
    });
}

// Project Modal Data & Dynamic Loading
const projectData = {
    bookrec: {
        title: "Book Recommendation System",
        tag: "LLM NLP & Vector Embeddings",
        image: "./static/assets/thumbnails/book_rec.jpg",
        description: "Intelligent AI desktop application integrating Google Gemini LLM, FAISS BERT vector search, and Google Books API for contextual reading recommendations.",
        githubUrl: "https://github.com/K-Digvijay/Python_Projects/tree/master/Recoment_system",
        overview: `Developed an end-to-end intelligent Book Recommendation System using a hybrid model approach. Combining TF-IDF keyword matrices with FAISS vector similarity search over BERT text embeddings, the application leverages Google's Gemini API to produce context-aware recommendation rationales in real-time.`,
        features: [
            "Tkinter Desktop UI with responsive query filters and book cards",
            "Google Gemini LLM Integration for natural language book summaries & reasoning",
            "Google Books API integration for real-time metadata, high-res covers, and reviews",
            "Speech-to-Text voice query search powered by Google Speech APIs",
            "MongoDB integration for local library caching and user reading history",
            "Analytics dashboard featuring Matplotlib/Seaborn reading statistics"
        ],
        techStack: ["Python", "Google Gemini API", "BERT Embeddings", "FAISS", "Tkinter", "MongoDB", "Google Books API", "PyInstaller"],
        challenges: [
            {
                challenge: "High latency when generating real-time natural language explanations for book suggestions.",
                solution: "Implemented asynchronous API calls and caching layers using MongoDB to deliver instant UI responses."
            },
            {
                challenge: "Semantic relevance beyond exact word matches.",
                solution: "Used BERT dense vector embeddings paired with FAISS nearest-neighbor indexing for fast semantic retrieval."
            }
        ]
    },
    salarypred: {
        title: "Software Engineer Salary Predictor",
        tag: "Machine Learning & Streamlit",
        image: "./static/assets/thumbnails/salary_pred.jpg",
        description: "Production Machine Learning regression model web application built with Streamlit and containerized with Docker, estimating global software engineering compensation.",
        githubUrl: "https://github.com/K-Digvijay/Software_Salary_Prediction",
        overview: `A complete data science workflow built using Stack Overflow developer survey data. The system cleans, normalizes, and trains non-linear regression ML models (Random Forest / Decision Tree Regressor) to predict developer salaries globally based on experience, country, and education level.`,
        features: [
            "Interactive Streamlit Web Dashboard with real-time salary estimation",
            "Exploratory Data Analysis (EDA) module with customizable charts & filters",
            "Tuned machine learning regression model saved via Joblib/Pickle",
            "Categorical data encoding and out-of-bounds input handle filtering",
            "Fully containerized with Docker for cross-environment reproducibility"
        ],
        techStack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib/Seaborn", "Docker"],
        challenges: [
            {
                challenge: "Extreme variance in developer salary data across developing vs developed nations.",
                solution: "Applied outlier elimination algorithms, group aggregation, and categorical encoding on low-frequency countries."
            },
            {
                challenge: "Ensuring non-technical users can perform custom scenario exploration.",
                solution: "Architected a dual-page Streamlit application separating predictive inference from interactive EDA charts."
            }
        ]
    },
    sahayak: {
        title: "SAHAYAK AI Teacher Assistant",
        tag: "Google Cloud Hackathon • Multimodal AI",
        image: "./static/assets/thumbnails/sahayak.jpg",
        description: "Multimodal AI assistant designed for educators featuring automated lesson plans, voice input, QR-coded PDF generation, and student engagement analytics.",
        githubUrl: "https://github.com/K-Digvijay/Sahayak-App_hackathon_GoogleClout_H2S",
        overview: `Built for the Google Cloud Hackathon, SAHAYAK is an intelligent teacher copilot that simplifies lesson content generation, multi-sensory story exports, student profile tracking, and classroom engagement analysis.`,
        features: [
            "Multimodal Content Generation: Combines text, audio, and image story outputs",
            "Hands-Free Voice STT: Voice input command interface for quick lesson drafting",
            "QR Code & PDF Generator for seamless offline distribution to students",
            "Student Progress Tracker with Firestore database backend",
            "Built-in engagement analytics dashboard for monitoring student growth"
        ],
        techStack: ["React", "TypeScript", "Python", "Flask", "Google Cloud Platform", "Firebase / Firestore", "Docker"],
        challenges: [
            {
                challenge: "Packaging complex multimodal outputs (text, audio, generated visual cards) into accessible formats.",
                solution: "Integrated dynamic PDF rendering with embedded QR codes linking directly to cloud-hosted audio files."
            },
            {
                challenge: "Supporting low-bandwidth environments for rural educators.",
                solution: "Designed lightweight web components and client-side caching for offline PDF availability."
            }
        ]
    }
};

function openProject(projectId) {
    const p = projectData[projectId];
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const modalContainer = document.getElementById('modal-content-container');

    if (modal && modalContainer) {
        modalContainer.innerHTML = `
            <div class="relative">
                <img src="${p.image}" alt="${p.title}" class="w-full h-64 object-cover rounded-xl mb-6 border border-slate-800" />
                <span class="absolute top-4 left-4 bg-cyan-950/80 text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-cyan-500/40 backdrop-blur-md">
                    ${p.tag}
                </span>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-white mb-1">${p.title}</h3>
                    <p class="text-slate-400 text-sm">${p.description}</p>
                </div>
                ${p.githubUrl ? `
                    <a href="${p.githubUrl}" target="_blank" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-sm font-semibold rounded-lg border border-slate-700 transition-all shrink-0">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        View Source Code
                    </a>
                ` : ''}
            </div>

            <div class="space-y-6">
                <div>
                    <h4 class="text-lg font-semibold text-slate-200 mb-2 border-b border-slate-800 pb-2">Project Overview</h4>
                    <p class="text-slate-300 text-sm leading-relaxed">${p.overview}</p>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Key Features</h4>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                        ${p.features.map(f => `<li class="flex items-start gap-2"><span class="text-cyan-400">▹</span> <span>${f}</span></li>`).join('')}
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2">
                        ${p.techStack.map(t => `<span class="bg-slate-800 text-cyan-300 border border-slate-700/80 px-3 py-1 rounded-md text-xs font-mono">${t}</span>`).join('')}
                    </div>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Engineering Challenges & Solutions</h4>
                    <div class="space-y-3">
                        ${p.challenges.map(c => `
                            <div class="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                                <p class="text-xs font-semibold text-rose-400 mb-1">CHALLENGE: ${c.challenge}</p>
                                <p class="text-xs text-emerald-300">SOLUTION: ${c.solution}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeProject() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Modal Backdrop Click & Escape Key Listener
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProject();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProject();
    });
});
