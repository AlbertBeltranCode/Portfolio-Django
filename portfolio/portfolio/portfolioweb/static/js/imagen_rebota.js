// image_rebota.js
document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('draggable-image');
    const container = document.querySelector('.about-me');
    let isDragging = false;
    let velocityX = 0, velocityY = 0;
    const gravity = 0.5;
    const damping = 0.7;
    let originalPosition;
    
    // Store initial position
    function setOriginalPosition() {
        originalPosition = {
            x: image.offsetLeft,
            y: image.offsetTop
        };
    }
    setOriginalPosition();

    // Double-click to reset position
    image.addEventListener('dblclick', function() {
        image.style.transition = 'all 0.5s ease';
        image.style.left = `${originalPosition.x}px`;
        image.style.top = `${originalPosition.y}px`;
        setTimeout(() => image.style.transition = '', 500);
    });

    image.addEventListener('mousedown', function (e) {
        isDragging = true;
        image.style.transition = 'none';
        const rect = container.getBoundingClientRect();
        offsetX = e.clientX - image.offsetLeft - rect.left;
        offsetY = e.clientY - image.offsetTop - rect.top;
        image.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            const rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left - offsetX;
            let y = e.clientY - rect.top - offsetY;
            
            // Keep within container boundaries
            x = Math.max(0, Math.min(x, container.offsetWidth - image.offsetWidth));
            y = Math.max(0, Math.min(y, container.offsetHeight - image.offsetHeight));
            
            image.style.left = `${x}px`;
            image.style.top = `${y}px`;
            velocityX = e.movementX;
            velocityY = e.movementY;
        }
    });

    document.addEventListener('mouseup', function () {
        if (isDragging) {
            isDragging = false;
            image.style.cursor = 'grab';
            animateThrow();
        }
    });

    function animateThrow() {
        const imageRadius = image.offsetWidth / 2;
        let x = parseFloat(image.style.left);
        let y = parseFloat(image.style.top);

        function frame() {
            if (!isDragging) {
                velocityY += gravity;
                x += velocityX;
                y += velocityY;

                // Calculate boundaries with radius consideration
                const maxX = container.offsetWidth - image.offsetWidth;
                const maxY = container.offsetHeight - image.offsetHeight;

                // Horizontal collisions with radius adjustment
                if (x < -imageRadius) {
                    x = -imageRadius;
                    velocityX = -velocityX * damping;
                } else if (x > maxX + imageRadius) {
                    x = maxX + imageRadius;
                    velocityX = -velocityX * damping;
                }

                // Vertical collisions with radius adjustment
                if (y < -imageRadius) {
                    y = -imageRadius;
                    velocityY = -velocityY * damping;
                } else if (y > maxY + imageRadius) {
                    y = maxY + imageRadius;
                    velocityY = -velocityY * damping;
                }

                image.style.left = `${x}px`;
                image.style.top = `${y}px`;

                if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
                    requestAnimationFrame(frame);
                }
            }
        }
        requestAnimationFrame(frame);
    }

    // Handle window resize
    window.addEventListener('resize', setOriginalPosition);
});