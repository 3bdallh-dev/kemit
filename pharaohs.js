/* Pharaohs Page Enhancements */
document.addEventListener('DOMContentLoaded', function() {
  // Add staggered animation delays to grid items
  const items = document.querySelectorAll('#pharaohs-grid .fade-in');
  items.forEach((item, index) => {
    item.style.animationDelay = (index * 0.1) + 's';
  });

  // Optional: simple hover sound or effect could go here
  console.log('Pharaohs grid loaded — ' + items.length + ' rulers displayed');
});
