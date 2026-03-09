// SmartTask Landing Page - Slow Version with Intentional Delays

// Simulate heavy processing on page load
function simulateHeavyProcessing() {
    // Artificial delay - simulate complex computations
    const startTime = Date.now();
    
    // Unnecessary loop to consume CPU time
    let result = 0;
    for (let i = 0; i < 5000000; i++) {
        result += Math.sqrt(i) * Math.random();
    }
    
    console.log('Heavy processing completed:', result);
    
    return result;
}

// Unnecessary data processing
function processUnnecessaryData() {
    const dataArray = [];
    for (let i = 0; i < 10000; i++) {
        dataArray.push({
            id: i,
            value: Math.random() * 100,
            timestamp: Date.now()
        });
    }
    
    // More unnecessary processing
    return dataArray.filter(item => item.value > 50).map(item => item.value);
}

// Main initialization with artificial delays
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Starting initialization...');
    
    // Delay 1: Simulate heavy initial processing
    setTimeout(function() {
        simulateHeavyProcessing();
        
        // Delay 2: More unnecessary processing
        setTimeout(function() {
            processUnnecessaryData();
            
            // Delay 3: Initialize other components
            setTimeout(function() {
                initializePage();
            }, 800);
        }, 600);
    }, 500);
});

function initializePage() {
    console.log('Initializing page components...');
    
    // Hide loading overlay after delays (4-6 seconds total)
    setTimeout(function() {
        const overlay = document.getElementById('loading-overlay');
        
        if (overlay) {
            overlay.classList.add('hidden');
            
            // Mark body as loaded to trigger CSS transitions
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
            
            console.log('Page fully loaded - content now visible');
        }
        
        // Initialize smooth scroll after content is visible
        initializeSmoothScroll();
        
    }, 3500); // Additional delay to reach 4-6 second total
}

function initializeSmoothScroll() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intentional memory leak simulation - keep references in memory
const memoryReferences = [];

function keepMemoryReferences() {
    // Create unnecessary objects to consume memory
    for (let i = 0; i < 1000; i++) {
        memoryReferences.push({
            data: new Array(1000).fill(Math.random()),
            timestamp: Date.now()
        });
    }
}

// Call after a delay
setTimeout(keepMemoryReferences, 2000);

// Unnecessary event listeners
window.addEventListener('scroll', function() {
    // Unnecessary scroll tracking
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPos', scrollPosition);
});

// Simulate tracking scripts
function trackUserBehavior() {
    const events = ['click', 'scroll', 'mousemove'];
    
    events.forEach(eventType => {
        document.addEventListener(eventType, function(e) {
            // Unnecessary event logging
            console.log('User interaction:', eventType, Date.now());
        });
    });
}

// Delay tracker initialization
setTimeout(trackUserBehavior, 1000);

