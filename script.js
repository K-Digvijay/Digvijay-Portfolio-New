// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    });
});

// Contact form submission
// ✅ Contact Form Submission to Google Sheets
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const statusEl = document.getElementById("form-status");
    statusEl.innerText = "⏳ Sending...";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            statusEl.innerText = "✅ Message sent successfully!";
            form.reset();
        } else {
            statusEl.innerText = "❌ Error sending message. Try again.";
        }
    } catch (error) {
        console.error("Error!", error);
        statusEl.innerText = "⚠️ Network error. Please try later.";
    }
});



// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-white/95');
    } else {
        nav.classList.remove('bg-white/95');
    }
});

// Project modal functionality
const projectData = {
    ecommerce: {
        title: "Book Recommendation System",
        description: "A comprehensive e-commerce solution built with modern technologies to provide seamless shopping experiences.",
        fullDescription: `
                    <div class="space-y-6">
                        <div class="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-8xl text-white">
                            📖
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold mb-4">Project Overview</h3>
                                <p class="text-gray-600 mb-4">
                                    This Book Recommendation System was developed as a desktop application using Tkinter, integrated with Google Cloud APIs to provide intelligent book recommendations, search, and analytics. The system combines a local recommendation engine with Google services like Gemini API (for NLP), Books API, and Firebase for a seamless and scalable experience.
                                </p>
                                
                                <h4 class="font-bold mb-2">Key Features:</h4>
                                <ul class="text-gray-600 space-y-1">
                                    User-friendly Tkinter GUI for book browsing and recommendations

                                <li>Google Books API for retrieving metadata, covers, and reviews</li>
                                <li>Gemini API (LLM) for generating personalized summaries and book suggestions</li>
                                <li>Content-based + Embedding-based hybrid recommendation system</li>
                                <li>Voice-based search using Google Speech-to-Text</li>
                                <li>Admin dashboard with analytics (using Firebase/BigQuery)</li>
                                <li>Cross-platform desktop app with cloud-powered intelligence</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-bold mb-4">Technical Details</h3>
                                <div class="space-y-4">
                                    <div>
                                        <h4 class="font-semibold">Frontend</h4>
                                        <p class="text-gray-600">Tkinter for GUI

                                        <li>Matplotlib/Seaborn for analytics visualization</li>

                                        <li>Google Fonts API (for modern UI styling in Tkinter)</li></p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Backend</h4>
                                        <p class="text-gray-600">Local ML models: TF-IDF (Scikit-learn), FAISS + BERT embeddings (Transformers)

                                        <li>Google Gemini API: Personalized recommendation explanations & natural language queries</li>

                                        <li>Google Books API: Metadata, author details, and book previews</li>

                                        <li>Google TTS/STT API: Text-to-speech book summaries & speech-based search</li></p>
                                                                            </div>
                                    <div>
                                        <h4 class="font-semibold">Database</h4>
                                        <p class="text-gray-600">MongoDB</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Deployment</h4>
                                        <p class="text-gray-600">Packaged as standalone app via PyInstaller

                                        <li>Firebase Hosting (for backend APIs if needed)</li>

                                        <li>Google Cloud Storage (book metadata/images caching)</li></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4">Challenges & Solutions</h3>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-semibold">Challenge: Rich metadata and book availability</h4>
                                    <p class="text-gray-600">Used Google Books API to fetch real-time metadata, book previews, and cover images.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Personalization beyond keyword search</h4>
                                    <p class="text-gray-600">Integrated Gemini API to understand user queries in natural language and provide contextual book suggestions.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Making the app interactive (text)</h4>
                                    <p class="text-gray-600">Implemented lazy loading, image optimization for faster load times.</p>
                                </div>
                            </div>
                        </div>

                       
                        </div>
                    </div>
                `
    },
    taskmanager: {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        fullDescription: `
                    <div class="space-y-6">
                        <div class="h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-8xl text-white">
                            📱
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold mb-4">Project Overview</h3>
                                <p class="text-gray-600 mb-4">
                                    A modern task management solution designed for teams to collaborate effectively. 
                                    Built with Vue.js and Firebase, it provides real-time synchronization across all 
                                    devices and team members.
                                </p>
                                
                                <h4 class="font-bold mb-2">Key Features:</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>• Real-time collaboration</li>
                                    <li>• Drag-and-drop task management</li>
                                    <li>• Team member assignments</li>
                                    <li>• Progress tracking & analytics</li>
                                    <li>• File attachments & comments</li>
                                    <li>• Mobile app companion</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-bold mb-4">Technical Details</h3>
                                <div class="space-y-4">
                                    <div>
                                        <h4 class="font-semibold">Frontend</h4>
                                        <p class="text-gray-600">Vue.js 3, Vuex, Tailwind CSS</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Backend</h4>
                                        <p class="text-gray-600">Firebase Functions, Node.js</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Database</h4>
                                        <p class="text-gray-600">Firestore (NoSQL)</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Authentication</h4>
                                        <p class="text-gray-600">Firebase Auth with Google/GitHub</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Real-time</h4>
                                        <p class="text-gray-600">Firebase Realtime Database</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4">Challenges & Solutions</h3>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-semibold">Challenge: Real-time synchronization</h4>
                                    <p class="text-gray-600">Used Firebase's real-time listeners to ensure all team members see updates instantly.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Offline functionality</h4>
                                    <p class="text-gray-600">Implemented service workers and local storage for offline task management.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Complex state management</h4>
                                    <p class="text-gray-600">Utilized Vuex with modular store structure for scalable state management.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                `
    },
    analytics: {
        title: "Analytics Dashboard",
        description: "A comprehensive analytics dashboard with interactive charts and real-time data visualization.",
        fullDescription: `
                    <div class="space-y-6">
                        <div class="h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-8xl text-white">
                            📊
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold mb-4">Project Overview</h3>
                                <p class="text-gray-600 mb-4">
                                    A powerful analytics dashboard that transforms complex data into actionable insights. 
                                    Built with React and D3.js, it provides interactive visualizations and real-time 
                                    data processing capabilities.
                                </p>
                                
                                <h4 class="font-bold mb-2">Key Features:</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>• Interactive data visualizations</li>
                                    <li>• Real-time data streaming</li>
                                    <li>• Custom dashboard creation</li>
                                    <li>• Export & sharing capabilities</li>
                                    <li>• Advanced filtering & drilling</li>
                                    <li>• Multi-data source integration</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-bold mb-4">Technical Details</h3>
                                <div class="space-y-4">
                                    <div>
                                        <h4 class="font-semibold">Frontend</h4>
                                        <p class="text-gray-600">React, D3.js, Chart.js</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Backend</h4>
                                        <p class="text-gray-600">Express.js, Socket.io</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Database</h4>
                                        <p class="text-gray-600">PostgreSQL, Redis cache</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Data Processing</h4>
                                        <p class="text-gray-600">Apache Kafka, ETL pipelines</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Deployment</h4>
                                        <p class="text-gray-600">Kubernetes, AWS EKS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4">Challenges & Solutions</h3>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-semibold">Challenge: Large dataset visualization</h4>
                                    <p class="text-gray-600">Implemented data virtualization and progressive loading for smooth performance with millions of data points.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Real-time updates</h4>
                                    <p class="text-gray-600">Used WebSocket connections with efficient data streaming to update charts without full page reloads.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Cross-browser compatibility</h4>
                                    <p class="text-gray-600">Implemented fallback rendering methods and polyfills for consistent experience across all browsers.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        </div>
                    </div>
                `
    }
};

function openProject(projectId) {
    const project = projectData[projectId];
    if (project) {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-content').innerHTML = project.fullDescription;
        document.getElementById('project-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeProject() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('project-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeProject();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProject();
    }
});

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'97071052d5deff70',t:'MTc1NTQxMTYwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();


