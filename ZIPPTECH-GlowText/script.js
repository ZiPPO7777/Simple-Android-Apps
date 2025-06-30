     document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const messageInput = document.getElementById('message-input');
    const messagePreview = document.getElementById('message-preview');
    const messageDisplay = document.getElementById('message-display');
    const displayBtn = document.getElementById('display-btn');
    const resetBtn = document.getElementById('reset-btn');
    const saveBtn = document.getElementById('save-btn');
    const exportBtn = document.getElementById('export-btn');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const rotateBtn = document.getElementById('rotate-btn');
    const fullscreenDisplay = document.getElementById('fullscreen-display');
    const countdownElement = document.getElementById('countdown');
    const portraitWarning = document.getElementById('portrait-warning');
    const continuePortraitBtn = document.getElementById('continue-portrait');
    const animationTypeSelect = document.getElementById('animation-type');
    const animationSpeedSlider = document.getElementById('animation-speed');
    const fontFamilySelect = document.getElementById('font-family');
    const fontSizeSlider = document.getElementById('font-size');
    const textColorPicker = document.getElementById('text-color');
    const bgColorPicker = document.getElementById('bg-color');
    const bgImageInput = document.getElementById('bg-image');
    const boldToggle = document.getElementById('bold-toggle');
    const italicToggle = document.getElementById('italic-toggle');
    const underlineToggle = document.getElementById('underline-toggle');
    const mirrorToggle = document.getElementById('mirror-toggle');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const settingsSections = document.querySelectorAll('.settings-section');
    
    // App State
    let currentTheme = 'dark';
    let isDarkMode = false;
    let forceLandscape = true;
    let savedSettings = JSON.parse(localStorage.getItem('messageDisplaySettings')) || {};
    
    // Initialize app
    function init() {
        loadSettings();
        updatePreview();
        setupEventListeners();
        setupOrientationHandling();
    }
    
    // Setup orientation handling
    function setupOrientationHandling() {
        window.addEventListener('orientationchange', handleOrientationChange);
        handleOrientationChange();
    }
    
    function handleOrientationChange() {
        if (window.innerHeight > window.innerWidth) {
            // Portrait mode
            if (forceLandscape && document.fullscreenElement) {
                fullscreenDisplay.classList.add('show-warning');
            }
        } else {
            // Landscape mode
            fullscreenDisplay.classList.remove('show-warning');
            fullscreenDisplay.classList.remove('force-landscape');
        }
    }
    
    // Load saved settings
    function loadSettings() {
        if (savedSettings.message) {
            messageInput.value = savedSettings.message;
        }
        if (savedSettings.animationType) {
            animationTypeSelect.value = savedSettings.animationType;
        }
        if (savedSettings.animationSpeed) {
            animationSpeedSlider.value = savedSettings.animationSpeed;
        }
        if (savedSettings.fontFamily) {
            fontFamilySelect.value = savedSettings.fontFamily;
        }
        if (savedSettings.fontSize) {
            fontSizeSlider.value = savedSettings.fontSize;
        }
        if (savedSettings.textColor) {
            textColorPicker.value = savedSettings.textColor;
        }
        if (savedSettings.bgColor) {
            bgColorPicker.value = savedSettings.bgColor;
        }
        if (savedSettings.isBold) {
            boldToggle.classList.add('active');
        }
        if (savedSettings.isItalic) {
            italicToggle.classList.add('active');
        }
        if (savedSettings.isUnderline) {
            underlineToggle.classList.add('active');
        }
        if (savedSettings.isMirrored) {
            mirrorToggle.classList.add('active');
        }
        if (savedSettings.theme) {
            currentTheme = savedSettings.theme;
            messagePreview.setAttribute('data-theme', currentTheme);
        }
        if (savedSettings.isDarkMode) {
            toggleDarkMode();
        }
        if (savedSettings.forceLandscape !== undefined) {
            forceLandscape = savedSettings.forceLandscape;
            rotateBtn.textContent = forceLandscape ? 'Allow Portrait' : 'Force Landscape';
        }
    }
    
    // Save current settings
    function saveSettings() {
        savedSettings = {
            message: messageInput.value,
            animationType: animationTypeSelect.value,
            animationSpeed: animationSpeedSlider.value,
            fontFamily: fontFamilySelect.value,
            fontSize: fontSizeSlider.value,
            textColor: textColorPicker.value,
            bgColor: bgColorPicker.value,
            isBold: boldToggle.classList.contains('active'),
            isItalic: italicToggle.classList.contains('active'),
            isUnderline: underlineToggle.classList.contains('active'),
            isMirrored: mirrorToggle.classList.contains('active'),
            theme: currentTheme,
            isDarkMode: isDarkMode,
            forceLandscape: forceLandscape
        };
        
        localStorage.setItem('messageDisplaySettings', JSON.stringify(savedSettings));
        showToast('Settings saved!');
    }
    
    // Reset to default settings
    function resetSettings() {
        if (confirm('Are you sure you want to reset all settings?')) {
            localStorage.removeItem('messageDisplaySettings');
            location.reload();
        }
    }
    
    // Update the preview panel
    function updatePreview() {
        messagePreview.textContent = messageInput.value || 'Preview';
        messagePreview.style.fontFamily = fontFamilySelect.value;
        
        // Responsive font size for preview
        const previewSize = Math.min(parseInt(fontSizeSlider.value), 48);
        messagePreview.style.fontSize = `${previewSize}px`;
        
        messagePreview.style.color = textColorPicker.value;
        messagePreview.style.backgroundColor = bgColorPicker.value;
        
        // Apply text styles
        messagePreview.style.fontWeight = boldToggle.classList.contains('active') ? 'bold' : 'normal';
        messagePreview.style.fontStyle = italicToggle.classList.contains('active') ? 'italic' : 'normal';
        messagePreview.style.textDecoration = underlineToggle.classList.contains('active') ? 'underline' : 'none';
        messagePreview.style.transform = mirrorToggle.classList.contains('active') ? 'scaleX(-1)' : 'scaleX(1)';
        
        // Apply theme
        messagePreview.setAttribute('data-theme', currentTheme);
    }
    
    // Show fullscreen display
    function showFullscreenDisplay() {
        if (!messageInput.value.trim()) {
            showToast('Please enter a message first');
            return;
        }
        
        // Show confirmation dialog
        const userConfirmed = confirm('Are you sure you want to display this message?');
        
        if (!userConfirmed) {
            return; // User clicked Cancel
        }
        
        // Prepare display
        messageDisplay.textContent = messageInput.value;
        messageDisplay.style.fontFamily = fontFamilySelect.value;
        messageDisplay.style.fontSize = `${fontSizeSlider.value}px`;
        messageDisplay.style.color = textColorPicker.value;
        messageDisplay.style.fontWeight = boldToggle.classList.contains('active') ? 'bold' : 'normal';
        messageDisplay.style.fontStyle = italicToggle.classList.contains('active') ? 'italic' : 'normal';
        messageDisplay.style.textDecoration = underlineToggle.classList.contains('active') ? 'underline' : 'none';
        messageDisplay.style.transform = mirrorToggle.classList.contains('active') ? 'scaleX(-1)' : 'scaleX(1)';
        
        // Apply background
        fullscreenDisplay.style.backgroundColor = bgColorPicker.value;
        fullscreenDisplay.setAttribute('data-theme', currentTheme);
        
        // Show countdown
        countdownElement.style.opacity = 1;
        let count = 3;
        
        const countdownInterval = setInterval(() => {
            countdownElement.textContent = count;
            count--;
            
            if (count < 0) {
                clearInterval(countdownInterval);
                gsap.to(countdownElement, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        countdownElement.textContent = '';
                        startAnimation();
                    }
                });
            }
        }, 1000);
        
        // Show fullscreen
        fullscreenDisplay.style.display = 'flex';
        
        // Handle orientation
        if (forceLandscape && window.innerHeight > window.innerWidth) {
            fullscreenDisplay.classList.add('show-warning');
        } else {
            fullscreenDisplay.classList.remove('show-warning');
        }
        
        document.documentElement.requestFullscreen().catch(e => console.log(e));
    }
    
    // Start GSAP animation based on selected type
    function startAnimation() {
        const speed = parseFloat(animationSpeedSlider.value);
        const message = messageDisplay.textContent;
        
        // Reset any previous animations
        gsap.killTweensOf(messageDisplay);
        messageDisplay.style.opacity = 1;
        messageDisplay.style.transform = mirrorToggle.classList.contains('active') ? 'scaleX(-1)' : 'scaleX(1)';
        
        switch (animationTypeSelect.value) {
            case 'scroll-left':
                messageDisplay.style.whiteSpace = 'nowrap';
                messageDisplay.style.width = 'auto';
                gsap.fromTo(messageDisplay, 
                    { x: '100%' }, 
                    { 
                        x: '-100%', 
                        duration: 10 / speed, 
                        repeat: -1, 
                        ease: 'none' 
                    }
                );
                break;
                
            case 'scroll-right':
                messageDisplay.style.whiteSpace = 'nowrap';
                messageDisplay.style.width = 'auto';
                gsap.fromTo(messageDisplay, 
                    { x: '-100%' }, 
                    { 
                        x: '100%', 
                        duration: 10 / speed, 
                        repeat: -1, 
                        ease: 'none' 
                    }
                );
                break;
                
            case 'typewriter':
                messageDisplay.textContent = '';
                const chars = message.split('');
                gsap.to(messageDisplay, {
                    duration: chars.length * (0.1 / speed),
                    onUpdate: function() {
                        const progress = Math.floor(this.progress() * chars.length);
                        messageDisplay.textContent = message.substring(0, progress);
                    },
                    repeat: -1,
                    repeatDelay: 1,
                    yoyo: true
                });
                break;
                
            case 'zoom':
                gsap.to(messageDisplay, {
                    scale: 1.5,
                    duration: 2 / speed,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut'
                });
                break;
                
            case 'bounce':
                gsap.to(messageDisplay, {
                    y: -20,
                    duration: 0.5 / speed,
                    yoyo: true,
                    repeat: -1,
                    ease: 'bounce.out'
                });
                break;
                
            case 'fade':
                gsap.to(messageDisplay, {
                    opacity: 0,
                    duration: 2 / speed,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut'
                });
                break;
                
            case 'pulse':
                gsap.to(messageDisplay, {
                    scale: 1.1,
                    duration: 1 / speed,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut'
                });
                break;
                
            default:
                // No animation
                break;
        }
    }
    
    // Export as image
    function exportAsImage() {
        html2canvas(messagePreview).then(canvas => {
            const link = document.createElement('a');
            link.download = 'message-display.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : '');
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
    
    // Toggle landscape mode
    function toggleLandscapeMode() {
        forceLandscape = !forceLandscape;
        rotateBtn.textContent = forceLandscape ? 'Allow Portrait' : 'Force Landscape';
        saveSettings();
    }
    
    // Show toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        gsap.fromTo(toast, 
            { y: 50, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.3,
                onComplete: () => {
                    setTimeout(() => {
                        gsap.to(toast, {
                            y: 50,
                            opacity: 0,
                            duration: 0.3,
                            onComplete: () => toast.remove()
                        });
                    }, 2000);
                }
            }
        );
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Input changes
        messageInput.addEventListener('input', updatePreview);
        animationTypeSelect.addEventListener('change', updatePreview);
        animationSpeedSlider.addEventListener('input', updatePreview);
        fontFamilySelect.addEventListener('change', updatePreview);
        fontSizeSlider.addEventListener('input', updatePreview);
        textColorPicker.addEventListener('input', updatePreview);
        bgColorPicker.addEventListener('input', updatePreview);
        bgImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    messagePreview.style.backgroundImage = `url(${event.target.result})`;
                    messagePreview.style.backgroundSize = 'cover';
                    updatePreview();
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Toggle buttons
        boldToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            updatePreview();
        });
        
        italicToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            updatePreview();
        });
        
        underlineToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            updatePreview();
        });
        
        mirrorToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            updatePreview();
        });
        
        // Theme buttons
        themeButtons.forEach(button => {
            button.addEventListener('click', function() {
                currentTheme = this.dataset.theme;
                updatePreview();
            });
        });
        
        // Settings sections (accordion)
        settingsSections.forEach(section => {
            const header = section.querySelector('.section-header');
            header.addEventListener('click', function() {
                section.classList.toggle('active');
            });
        });
        
        // Action buttons
        displayBtn.addEventListener('click', showFullscreenDisplay);
        resetBtn.addEventListener('click', resetSettings);
        saveBtn.addEventListener('click', saveSettings);
        exportBtn.addEventListener('click', exportAsImage);
        darkModeToggle.addEventListener('click', toggleDarkMode);
        rotateBtn.addEventListener('click', toggleLandscapeMode);
        continuePortraitBtn.addEventListener('click', function() {
            fullscreenDisplay.classList.remove('show-warning');
            if (window.innerHeight > window.innerWidth) {
                fullscreenDisplay.classList.add('force-landscape');
            }
            startAnimation();
        });
        
        // Exit fullscreen on tap
        fullscreenDisplay.addEventListener('click', function() {
            document.exitFullscreen();
        });
        
        // Handle fullscreen change
        document.addEventListener('fullscreenchange', function() {
            if (!document.fullscreenElement) {
                fullscreenDisplay.style.display = 'none';
                fullscreenDisplay.classList.remove('force-landscape');
                gsap.killTweensOf(messageDisplay);
            }
        });
    }
    
    // Initialize the app
    init();
});