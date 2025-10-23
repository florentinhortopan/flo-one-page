// Simple password protection system for popups with session management
// To use: Add data-protected="true" and data-password="yourpassword" to any role div
// Session lasts for 30 minutes after successful authentication

class PasswordProtection {
    constructor() {
        this.SESSION_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
        this.SESSION_KEY = 'portfolio_auth_session';
        this.setupProtection();
    }

    // Check if there's a valid session
    isSessionValid() {
        const sessionData = localStorage.getItem(this.SESSION_KEY);
        if (!sessionData) return false;
        
        try {
            const { timestamp } = JSON.parse(sessionData);
            const now = Date.now();
            const elapsed = now - timestamp;
            
            // Check if session is still within 30 minutes
            if (elapsed < this.SESSION_DURATION) {
                return true;
            } else {
                // Session expired, clear it
                this.clearSession();
                return false;
            }
        } catch (e) {
            // Invalid session data, clear it
            this.clearSession();
            return false;
        }
    }

    // Create a new session
    createSession() {
        const sessionData = {
            timestamp: Date.now()
        };
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    }

    // Clear the session
    clearSession() {
        localStorage.removeItem(this.SESSION_KEY);
    }

    setupProtection() {
        // Listen for modal opening
        document.addEventListener('DOMContentLoaded', () => {
            const roles = document.querySelectorAll('.roles .role[data-protected="true"]');
            
            roles.forEach(role => {
                const originalClick = role.onclick;
                role.dataset.originalDataRole = role.dataset.role;
                
                // Override click behavior for protected items
                role.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    
                    const password = role.dataset.password;
                    const roleKey = role.dataset.role;
                    
                    // Check if session is valid
                    if (this.isSessionValid()) {
                        // Session valid, open popup directly without password prompt
                        this.openProtectedPopup(roleKey);
                    } else {
                        // No valid session, prompt for password
                        this.promptPassword(password, roleKey, role);
                    }
                }, true);
            });
        });
    }

    promptPassword(correctPassword, roleKey, roleElement) {
        // Create password modal
        const passwordModal = document.createElement('div');
        passwordModal.className = 'password-modal-overlay';
        passwordModal.innerHTML = `
            <div class="password-modal-content">
                <h2 style="font-size: 24px; font-weight: 400; margin-bottom: 20px; color: #000;">Protected Content</h2>
                <p style="font-size: 16px; color: #666; margin-bottom: 24px;">This content is password protected. Please enter the password to continue.</p>
                <input type="password" id="passwordInput" placeholder="Enter password" style="
                    width: 100%;
                    padding: 12px 16px;
                    font-size: 16px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    margin-bottom: 16px;
                    box-sizing: border-box;
                ">
                <div style="display: flex; gap: 12px;">
                    <button id="passwordSubmit" style="
                        flex: 1;
                        padding: 12px 24px;
                        background: #000;
                        color: #fff;
                        border: none;
                        border-radius: 8px;
                        font-size: 16px;
                        font-family: 'Inter', sans-serif;
                        cursor: pointer;
                        font-weight: 500;
                    ">Submit</button>
                    <button id="passwordCancel" style="
                        flex: 1;
                        padding: 12px 24px;
                        background: #fff;
                        color: #000;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        font-size: 16px;
                        font-family: 'Inter', sans-serif;
                        cursor: pointer;
                        font-weight: 500;
                    ">Cancel</button>
                </div>
                <p id="passwordError" style="color: #e74c3c; font-size: 14px; margin-top: 12px; display: none;">Incorrect password. Please try again.</p>
            </div>
        `;

        document.body.appendChild(passwordModal);

        // Focus input
        const input = document.getElementById('passwordInput');
        input.focus();

        // Handle submit
        const submit = () => {
            const enteredPassword = input.value;
            if (enteredPassword === correctPassword) {
                // Password correct - create session and open the popup
                this.createSession();
                document.body.removeChild(passwordModal);
                this.openProtectedPopup(roleKey);
            } else {
                // Show error
                const error = document.getElementById('passwordError');
                error.style.display = 'block';
                input.value = '';
                input.focus();
            }
        };

        document.getElementById('passwordSubmit').addEventListener('click', submit);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submit();
        });

        document.getElementById('passwordCancel').addEventListener('click', () => {
            document.body.removeChild(passwordModal);
        });

        // Close on overlay click
        passwordModal.addEventListener('click', (e) => {
            if (e.target === passwordModal) {
                document.body.removeChild(passwordModal);
            }
        });
    }

    openProtectedPopup(roleKey) {
        // Get the popup file from the main script
        const popupFiles = window.popupFiles || {
            'critical-mass': 'popups/critical-mass.html',
            'airbnb': 'popups/airbnb.html',
            'gap': 'popups/gap-inc.html',
            'gopro': 'popups/gopro.html',
            'nagra': 'popups/nagra-opentv.html',
            'invasivecode': 'popups/invasivecode.html',
            'luxyuu': 'popups/luxyuu.html',
            'inoa': 'popups/inoa.html',
            'agent': 'popups/agent-of-presence.html',
            'igoatse': 'popups/igoatse.html',
            'isia': 'popups/isia-firenze.html',
            'articles': 'popups/articles.html',
            'state-creative': 'popups/state-creative.html',
            'resume': 'popups/resume.html',
            'puxa-ai': 'popups/puxa-ai.html',
            'ai-ux-ax': 'popups/ai-ux-ax.html',
            'podcast': 'popups/podcast.html',
            'github': 'popups/github.html',
        };

        const popupFile = popupFiles[roleKey];
        
        if (popupFile) {
            const modalOverlay = document.getElementById('modalOverlay');
            const modalBody = document.getElementById('modalBody');
            
            modalBody.innerHTML = `<iframe src="${popupFile}" style="width: 100%; height: 100%; border: none; position: absolute; top: 0; left: 0;"></iframe>`;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

// Initialize password protection
new PasswordProtection();

