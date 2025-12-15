function searchMap(location) {
    const mapFrame = document.getElementById('mapFrame');
    // 장소 이름을 URL에 맞게 인코딩합니다.
    const query = encodeURIComponent(location);
    
    // Google Maps Embed API를 사용하여 검색 결과를 iframe에 표시합니다.
    // output=embed 옵션을 사용하여 iframe 내에서 지도가 보이도록 합니다.
    mapFrame.src = `https://www.google.com/maps?q=${query}&output=embed`;
    
    // 모바일 화면에서는 지도 쪽으로 스크롤을 이동시킵니다.
    if (window.innerWidth <= 768) {
        document.querySelector('.map-container').scrollIntoView({ behavior: 'smooth' });
    }
}