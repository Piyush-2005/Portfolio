document.addEventListener('DOMContentLoaded', function() {
    // Create torch cursor
    const torch = document.createElement('div');
    torch.className = 'cursor-torch';
    document.body.appendChild(torch);

    // Update torch position
    document.addEventListener('mousemove', function(e) {
        torch.style.left = e.clientX + 'px';
        torch.style.top = e.clientY + 'px';
    });

    // Create floating bubbles
    const heroSection = document.querySelector('.hero-section');
    const bubbleColors = [
        'rgba(37, 99, 235, 0.5)',    // Blue
        'rgba(124, 58, 237, 0.5)',   // Purple
        'rgba(6, 182, 212, 0.5)'     // Cyan
    ];

    function createBubbles() {
        // Clear existing bubbles
        const existingBubbles = document.querySelectorAll('.blur-bubble');
        existingBubbles.forEach(bubble => bubble.remove());

        // Create new bubbles
        for (let i = 0; i < 8; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'blur-bubble';
            
            // Random size between 150px and 450px
            const size = Math.random() * 300 + 150 + 'px';
            bubble.style.width = size;
            bubble.style.height = size;
            
            // Position within the hero section
            bubble.style.left = Math.random() * 100 + 'vw';
            bubble.style.top = Math.random() * 100 + 'vh';
            
            // Random color and animation properties
            bubble.style.background = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
            bubble.style.animationDelay = `${Math.random() * 2}s`; // Reduced from 5s to 2s
            bubble.style.animationDuration = `${8 + Math.random() * 5}s`; // Reduced from 15+10s to 8+5s
            
            heroSection.appendChild(bubble);
        }
    }

    // Initial creation
    createBubbles();

    // Recreate bubbles on window resize
    window.addEventListener('resize', createBubbles);

    // Text typing animation
    const texts = ["Hi, I'm Piyush", "I'm a Developer", "I'm an IT Student"];
    const typedTextSpan = document.querySelector(".typed-text");
    let textIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < texts[textIndex].length) {
            typedTextSpan.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = texts[textIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 1000);
        }
    }
    
    type(); // Start the animation
});