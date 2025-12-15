function searchMap(location) {
    const mapFrame = document.getElementById('mapFrame');
    // Encode the location string to make it URL-safe
    const query = encodeURIComponent(location);
    // Update iframe src with the new search query
    // Google Maps Embed API format
    mapFrame.src = `https://maps.google.com/maps?q=$${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    
    // Mobile UX: Scroll to map if screen is small
    if (window.innerWidth <= 768) {
        document.querySelector('.map-container').scrollIntoView({ behavior: 'smooth' });
    }
}