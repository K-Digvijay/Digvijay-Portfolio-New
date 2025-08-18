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
                                        <p class="text-gray-600"><li>Local ML models: TF-IDF (Scikit-learn), FAISS + BERT embeddings (Transformers)</li>

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
        title: "Software Salary Prediction",
        description: "This Software Salary Prediction system was built as a Streamlit web application to help users estimate software developer salaries based on their experience, education, and country. Using machine learning, the system delivers accurate salary predictions while providing data exploration and visualization tools.",
        fullDescription: `
                    <div class="space-y-6">
                        <div class="h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-8xl text-white">
                            📱
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold mb-4">Project Overview</h3>
                                <p class="text-gray-600 mb-4">
                                    This Software Salary Prediction system was built as a Streamlit web application to help users estimate software developer salaries based on their experience, education, and country. Using machine learning, the system delivers accurate salary predictions while providing data exploration and visualization tools.
                                </p>
                                
                                <h4 class="font-bold mb-2">Key Features:</h4>
                                <ul class="text-gray-600 space-y-1">
                                    Interactive Streamlit UI with easy navigation

                                <li>Salary prediction using a trained ML model (saved_step.pkl)</li>

                                <li>Data exploration dashboard with filtering and visualization</li>

                                <li>User inputs: country, education, and years of experience</li>

                                <li>Real-time predictions with instant feedback</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-bold mb-4">Technical Details</h3>
                                <div class="space-y-4">
                                    <div>
                                        <h4 class="font-semibold">Frontend</h4>
                                        <p class="text-gray-600">
                                            <li>Streamlit for interactive web interface</li>
                                            <li>Matplotlib/Seaborn for data visualization</li>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Backend</h4>
                                        <p class="text-gray-600">
                                            <li>Scikit-learn for preprocessing and model training</li>
                                            <li>Trained regression model (saved with joblib/pickle)</li>
                                            <li>Python-based API endpoints within Streamlit pages</li>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Database</h4>
                                        <p class="text-gray-600">
                                            <li>CSV dataset of developer survey responses (Stack Overflow survey)</li>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Deployment</h4>
                                        <p class="text-gray-600"><li>Deployed with Streamlit</li>

                                        <li>Easily containerized via Docker for scalability</li></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4">Challenges & Solutions</h3>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-semibold">Challenge: Handling diverse user input (countries, education levels)</h4>
                                    <p class="text-gray-600">Applied preprocessing and categorical encoding to normalize input data.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Model accuracy across varying experience ranges</h4>
                                    <p class="text-gray-600">Tuned regression models and validated results on multiple splits for robustness.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Providing a user-friendly interface for non-technical users</h4>
                                    <p class="text-gray-600">Built a clean, interactive Streamlit UI with separate pages for exploration and prediction.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                `
    },
    analytics: {
        title: "SAHAYAK Teacher Assistant",
        description: "A comprehensive teacher assistant app designed to simplify lesson planning and boost engagement.",
        fullDescription: `
                    <div class="space-y-6">
                        <div class="h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-8xl text-white">
                            📊
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold mb-4">Project Overview</h3>
                                <p class="text-gray-600 mb-4">
                                    SAHAYAK is a comprehensive teacher assistant app designed to simplify lesson planning and boost engagement. With features like QR-based PDFs, voice input, multimodal story export, student profiles, and analytics, it empowers educators to deliver modern, inclusive learning experiences
                                </p>
                                
                                <h4 class="font-bold mb-2">Key Features:</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>PDF generation for lessons and resources</li>

                                    <li>Voice input to quickly create content hands-free</li>

                                    <li>Multimodal story export (text, images, audio) for diverse learning styles</li>

                                    <li>Student profile management for tracking progress</li>

                                    <li>Built-in analytics to monitor engagement and effectiveness</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-bold mb-4">Technical Details</h3>
                                <div class="space-y-4">
                                    <div>
                                        <h4 class="font-semibold">Frontend</h4>
                                        <p class="text-gray-600"><li>Typescript, JavaScript, React</li></p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Backend</h4>
                                        <p class="text-gray-600"><li>Python, Flask, Firebase</li></p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold">Database</h4>
                                        <p class="text-gray-600"><li>Firebase, Firestore</li></p>
                                    </div>
                                
                                    <div>
                                        <h4 class="font-semibold">Deployment</h4>
                                        <p class="text-gray-600"><li>Docker, GCP</li></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4">Challenges & Solutions</h3>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-semibold">Challenge: Supporting varied learning styles</h4>
                                    <p class="text-gray-600">IOffered multimodal export combining text, images, and audio to engage diverse learners.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Managing student personalization</h4>
                                    <p class="text-gray-600">Introduced student profiles and analytics to tailor teaching based on individual needs and monitor engagement.</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Challenge: Inclusive, accessible content</h4>
                                    <p class="text-gray-600">Integrated translation, text-to-speech, and doodle/image generation to support multiple languages and sensory modalities.</p>
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


