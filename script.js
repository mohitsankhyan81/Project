function filterItems(category) {
  const cards = document.querySelectorAll('.food-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else if (card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
