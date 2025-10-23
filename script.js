// Popup file mapping (exposed globally for password protection)
window.popupFiles = {
    'critical-mass': 'popups/critical-mass/critical-mass-Florentin-Hortopan.html',
    'airbnb': 'popups/airbnb/airbnb-Florentin-Hortopan.html',
    'gap': 'popups/gap-inc/gap-inc-Florentin-Hortopan.html',
    'gopro': 'popups/gopro/gopro-Florentin-Hortopan.html',
    'nagra': 'popups/nagra-opentv/nagra-opentv-Florentin-Hortopan.html',
    'invasivecode': 'popups/invasivecode/invasivecode-Florentin-Hortopan.html',
    'luxyuu': 'popups/luxyuu/luxyuu-Florentin-Hortopan.html',
    'inoa': 'popups/inoa/inoa-Florentin-Hortopan.html',
    'agent': 'popups/agent-of-presence/agent-of-presence-Florentin-Hortopan.html',
    'igoatse': 'popups/igoatse/igoatse-Florentin-Hortopan.html',
    'isia': 'popups/isia-firenze/isia-firenze-Florentin-Hortopan.html',
    'id-ixd': 'popups/id-ixd/id-ixd-Florentin-Hortopan.html',
    'art-direction': 'popups/art-direction/art-direction-Florentin-Hortopan.html',
    'state-creative': 'popups/state-creative/state-creative-Florentin-Hortopan.html',
    'talks': 'popups/talks/talks-Florentin-Hortopan.html',
    'awards': 'popups/awards/awards-Florentin-Hortopan.html',
    'patents': 'popups/patents/patents-Florentin-Hortopan.html',
    'articles': 'popups/articles/articles-Florentin-Hortopan.html',
    'resume': 'popups/resume/resume-Florentin-Hortopan.html',
    'puxa-ai': 'popups/puxa-ai/puxa-ai-Florentin-Hortopan.html',
    'ai-ux-ax': 'popups/ai-ux-ax/ai-ux-ax-Florentin-Hortopan.html',
    'podcast': 'popups/podcast/podcast-Florentin-Hortopan.html',
    'github': 'popups/github/github-Florentin-Hortopan.html',
    'this-website': 'popups/this-website/this-website-Florentin-Hortopan.html',
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const roles = document.querySelectorAll('.roles .role');

    // Function to open modal
    function openModal(roleElement) {
            const roleKey = roleElement.getAttribute('data-role');
        const popupFile = window.popupFiles[roleKey];
        
        console.log('Role opened:', roleElement.textContent);
        console.log('Role key:', roleKey);
        console.log('Popup file:', popupFile);
        
        if (popupFile) {
            // Create iframe to load the popup content (works without server)
            modalBody.innerHTML = `<iframe src="${popupFile}" style="width: 100%; height: 100%; border: none; position: absolute; top: 0; left: 0;"></iframe>`;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Modal opened successfully');
        } else {
            console.error('No popup file defined for:', roleKey);
        }
    }

    // Open modal when role is clicked
    roles.forEach(role => {
        role.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default link behavior
            openModal(this);
        });
        
        // Open modal when Enter or Space key is pressed (keyboard accessibility)
        role.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent page scroll on Space
                openModal(this);
            }
        });
    });


    // Close modal functions
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Listen for messages from iframe (lightbox control)
    window.addEventListener('message', function(event) {
        if (event.data.type === 'lightbox-open') {
            // Hide modal close button when lightbox is open
            modalClose.style.display = 'none';
        } else if (event.data.type === 'lightbox-close') {
            // Show modal close button when lightbox is closed
            modalClose.style.display = 'flex';
        }
    });

    // Close modal when close button is clicked
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
