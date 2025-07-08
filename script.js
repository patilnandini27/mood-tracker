// script.js
let selectedMood = "";

document.querySelectorAll('.mood').forEach(button => {
  button.addEventListener('click', () => {
    selectedMood = button.dataset.mood;
    document.querySelectorAll('.mood').forEach(btn => btn.style.background = 'white');
    button.style.background = '#d3f8d3';
  });
});

document.getElementById('save').addEventListener('click', () => {
  const entryText = document.getElementById('entry').value.trim();
  if (!selectedMood || !entryText) return alert('Please select a mood and write something!');

  const entry = {
    mood: selectedMood,
    text: entryText,
    date: new Date().toLocaleString()
  };

  const entries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
  entries.unshift(entry);
  localStorage.setItem('moodEntries', JSON.stringify(entries));
  document.getElementById('entry').value = "";
  displayEntries();
});

function displayEntries() {
  const entries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
  const list = document.getElementById('entries');
  list.innerHTML = "";
  entries.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.date} - ${entry.mood} - ${entry.text}`;
    list.appendChild(li);
  });
}

displayEntries();
