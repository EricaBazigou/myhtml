// Επιλέγουμε το κουμπί από τη σελίδα μας
const button = document.getElementById('colorBtn');
const text = document.querySelector('p');

// Λίστα με όμορφα χρώματα για το φόντο
const colors = ['#f4f7f6', '#d1e8e2', '#e1b12c', '#4cd137', '#00a8ff', '#9c88ff'];

// Λειτουργία που εκτελείται όταν γίνεται κλικ στο κουμπί
button.addEventListener('click', function() {
    // Επιλέγουμε ένα τυχαίο χρώμα από τον πίνακα
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Αλλάζουμε το φόντο της σελίδας
    document.body.style.backgroundColor = randomColor;
    
    // Αλλάζουμε το κείμενο της παραγράφου για να ενημερώσουμε τον χρήστη
    text.innerText = "Το χρώμα άλλαξε επιτυχώς με JavaScript! 🎉";
});
