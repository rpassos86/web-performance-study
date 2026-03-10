// Third-Party Widget Script - Simulated

(function() {
    'use strict';
    
    console.log('Widget: Loading third-party widgets...');
    
    // Simulate loading external widget
    function loadWidget() {
        // Create widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'third-party-widget';
        widgetContainer.style.cssText = 'position:fixed;bottom:20px;right:20px;width:300px;background:#111827;border-radius:12px;padding:20px;z-index:9998;display:none;';
        
        widgetContainer.innerHTML = `
            <div style="color:#F8FAFC;font-size:14px;margin-bottom:10px;">
                <strong>Widget Loading...</strong>
            </div>
            <div style="color:#94A3B8;font-size:12px;">
                Fetching recommendations...
            </div>
        `;
        
        return widgetContainer;
    }
    
    // Delay widget loading
    setTimeout(function() {
        console.log('Widget: Initializing...');
        
        // Simulate network request
        const widget = loadWidget();
        document.body.appendChild(widget);
        
        // Show widget after delay
        setTimeout(function() {
            widget.style.display = 'block';
            console.log('Widget: Displayed');
        }, 1500);
        
    }, 800);
    
    // External API calls simulation
    function fetchRecommendations() {
        console.log('Widget: Fetching recommendations...');
        
        // Artificial delay
        setTimeout(function() {
            console.log('Widget: Recommendations loaded');
        }, 1000);
    }
    
    setTimeout(fetchRecommendations, 500);
    
    // Personalization data collection
    const personalizationData = {
        browsingHistory: [],
        preferences: {},
        recommendations: []
    };
    
    function personalize() {
        console.log('Widget: Personalizing content...');
    }
    
    setTimeout(personalize, 1200);
    
    console.log('Widget: Script loaded');
    
})();

