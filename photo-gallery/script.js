const bookMarksList = document.querySelectorAll('.details .icon');

const bookmarks = Array.from(bookMarksList);

bookmarks.forEach(bm => {
    bm.addEventListener('click', () => { 
        if (bm.textContent === 'bookmark') {
            bm.textContent = 'bookmark_border';    
        } else {
            bm.textContent = 'bookmark';
        }
    });
});