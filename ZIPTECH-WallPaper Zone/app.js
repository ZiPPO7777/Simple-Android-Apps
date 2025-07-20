
        // ====== CATEGORY SWITCHING FUNCTIONALITY ======
        
        // Get all category buttons and sections
        const categoryBtns = document.querySelectorAll('.category-btn');
        const categorySections = document.querySelectorAll('.category-section');
        
        // Add click listeners to category buttons
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetCategory = btn.dataset.category;
                switchCategory(targetCategory);
            });
        });
        
        // Function to switch between categories
        function switchCategory(categoryName) {
            // Remove active class from all buttons and sections
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            categorySections.forEach(section => section.classList.remove('active'));
            
            // Add active class to selected button and section
            const activeBtn = document.querySelector(`[data-category="${categoryName}"]`);
            const activeSection = document.querySelector(`.category-section[data-category="${categoryName}"]`);
            
            if (activeBtn && activeSection) {
                activeBtn.classList.add('active');
                activeSection.classList.add('active');
                
                // Save current category to memory (not localStorage as it's not supported in artifacts)
                window.currentCategory = categoryName;
                
                // Smooth scroll to top when switching categories
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        
        // ====== MODAL FUNCTIONALITY FOR WALLPAPER PREVIEW ======
        
        const modal = document.getElementById('wallpaperModal');
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.getElementById('closeModal');
        const downloadBtn = document.getElementById('downloadBtn');
        
        let currentImageUrl = '';
        let currentImageName = '';
        
        // Function to open modal with wallpaper preview
        function openModal(imageUrl, imageName) {
            currentImageUrl = imageUrl;
            currentImageName = imageName;
            
            modalImage.src = imageUrl;
            modalImage.alt = imageName;
            modal.classList.add('active');
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }
        
        // Function to close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Clear image source after animation
            setTimeout(() => {
                modalImage.src = '';
                currentImageUrl = '';
                currentImageName = '';
            }, 300);
        }
        
        // Close modal when clicking the X button
        closeBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // ====== DOWNLOAD FUNCTIONALITY ======
        
        // Function to download wallpaper with proper filename
        function downloadWallpaper() {
            if (!currentImageUrl) return;
            
            // Extract filename from path or use the image name
            const filename = currentImageUrl.split('/').pop() || `${currentImageName.replace(/\s+/g, '_')}.jpg`;
            
            // Create download link
            const link = document.createElement('a');
            link.href = currentImageUrl;
            link.download = filename;
            link.target = '_blank';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        // Add click listener to download button
        downloadBtn.addEventListener('click', downloadWallpaper);
        
        // ====== KEYBOARD NAVIGATION ======
        
        // Handle escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        // ====== INITIALIZE APP ======
        
        // Set default category (anime) and initialize
        window.currentCategory = 'anime';
        
        // Add loading states for images
        document.querySelectorAll('.wallpaper-item img').forEach(img => {
            img.addEventListener('load', () => {
                img.parentElement.classList.add('loaded');
            });
            
            img.addEventListener('error', () => {
                img.parentElement.innerHTML = '<div class="loading">Image not found</div>';
            });
        });
        
        // ====== PERFORMANCE OPTIMIZATIONS ======
        
        // Lazy loading for modal image
        const observerOptions = {
            rootMargin: '100px',
            threshold: 0.1
        };
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, observerOptions);
        
        // Add smooth transitions
        document.documentElement.style.scrollBehavior = 'smooth';
        
        console.log('🎨 Wallpaper Gallery App Initialized');
        console.log('📱 Mobile-first responsive design ready');
        console.log('🖼️ All categories loaded with demo image paths');
        