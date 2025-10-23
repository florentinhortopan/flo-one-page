// Function to get role descriptions
function getRoleDescription(roleName) {
    const descriptions = {
        'Critical Mass': 'Leading design systems and creative strategy at Critical Mass, focusing on AI-augmented experiences and human-centered innovation. Currently driving the future of digital design with cutting-edge methodologies.',
        'Airbnb': 'Worked on accessibility and design systems at Airbnb, contributing to inclusive design practices and ensuring digital experiences are accessible to all users worldwide.',
        'Gap inc.': 'Led design system development and management at Gap Inc., building scalable design foundations that supported multiple brands across the Gap portfolio.',
        'GoPro': 'Designed user experiences for GoPro\'s e-commerce and product ecosystem, focusing on action sports enthusiasts and adventure seekers.',
        'Nagra OpenTV': 'Specialized in TV UI and voice UX design, creating intuitive remote control experiences and television interface innovations.',
        'Invasivecode': 'Developed mobile iOS applications and user interfaces, focusing on native iOS design patterns and mobile user experience.',
        'State Creative': 'Provided art direction and creative strategy services, helping brands develop compelling visual identities and digital strategies.',
        'Agent of Presence': 'Pioneered wearable technology design with smart textiles and LED fashion, creating innovative interfaces between technology and clothing.',
        'Luxyuu.com': 'Led art direction and UX strategy for luxury e-commerce platform, creating elegant digital shopping experiences.',
        'INOA': 'Designed underwater optics and marine equipment, combining industrial design with technical precision for specialized applications.',
        'iGoatse': 'Developed consumer products with a focus on entrepreneurship and industrial design, bringing innovative concepts to market.',
        'ISIA Firenze': 'Studied industrial and communication design at ISIA Firenze, developing foundational skills in design methodology and creative thinking.',
        'ID & IxD': 'Collection of industrial design and interaction design projects showcasing expertise in CAD, prototyping, and human-computer interaction.',
        'Art Direction': 'Comprehensive portfolio of art direction work including branding, web strategy, and visual identity development across various industries.',
        'Talks & Presentations': 'Public speaking engagements on wearable technology, innovation, and design methodology at conferences and industry events.',
        'Awards & Mentions': 'Recognition for design excellence including Techtextil Innovation Award 2015 and Made in Tuscany Award 2003.',
        'Patents': 'Intellectual property development in wearable technology and innovative design solutions, contributing to the advancement of smart textiles.',
        'Articles': 'Thought leadership and writing on design methodology, AI in design, and the intersection of technology and human experience.',
        'Resume': 'Professional experience summary and career progression in design leadership, product design, and creative strategy.',
        'Puxa.ai': 'Co-founder and Chief Design Officer of Puxa.ai, developing AI-powered design tools and methodologies for the future of creative work.',
        'AI+UX=AX': 'Methodology and framework for integrating artificial intelligence with user experience design, creating augmented creative processes.',
        'Podcast': 'Conversations and interviews about design, technology, and the future of creative work in the age of AI.',
        'GitHub': 'Open source contributions and development projects showcasing technical skills and collaborative approach to design and development.',
        'This Website': 'A living portfolio demonstrating AI-augmented design-to-code processes, built using MCP (Model Context Protocol) and LLM integration.'
    };
    
    return descriptions[roleName] || `Experience and expertise in ${roleName}, contributing to innovative design solutions and creative strategy.`;
}

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
        
        // Show styled content directly instead of loading external files
        const roleName = roleElement.textContent;
        const roleData = roleElement.dataset;
        
        // Create styled content based on the role
        modalBody.innerHTML = `
            <div style="padding: 40px; max-width: 800px; margin: 0 auto;">
                <h2 style="font-size: 36px; font-weight: 400; margin-bottom: 32px; color: #000; letter-spacing: -0.02em; line-height: 1.2;">${roleName}</h2>
                
                <div style="display: flex; flex-direction: row; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;">
                    ${roleData.category ? `<span style="display: inline-block; padding: 6px 12px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 4px; background-color: #f8f8f8; color: #333; border: 1px solid #e0e0e0;">${roleData.category}</span>` : ''}
                    ${roleData.type ? `<span style="display: inline-block; padding: 6px 12px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 4px; background-color: #f0f0f0; color: #333; border: 1px solid #d0d0d0;">${roleData.type}</span>` : ''}
                    ${roleData.dateStart ? `<span style="display: inline-block; padding: 6px 12px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 4px; background-color: #000; color: #fff; border-color: #000;">${roleData.dateStart} - ${roleData.dateEnd || 'present'}</span>` : ''}
                </div>
                
                <p style="font-size: 18px; line-height: 1.7; color: #333; margin-bottom: 24px; font-weight: 300;">
                    ${getRoleDescription(roleName)}
                </p>
                
                <div style="margin-top: 40px; padding-top: 32px; border-top: 1px solid #e0e0e0;">
                    <p style="font-size: 16px; color: #666;">
                        Detailed content and case studies for ${roleName} will be added soon. 
                        This section showcases the key aspects of this role and experience.
                    </p>
                </div>
            </div>
        `;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened with styled content for:', roleName);
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

