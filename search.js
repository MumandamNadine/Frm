function search_animal(event) {
    event.preventDefault();
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
        let title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
  }
  function search_page(event) {
    event.preventDefault();
    let input = document.getElementById('searchbar').value.toLowerCase();
    let sections = document.querySelectorAll('.main-page, .animals > div');
  
    sections.forEach(section => {
        let text = section.innerText.toLowerCase();
        if (text.includes(input)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
  }