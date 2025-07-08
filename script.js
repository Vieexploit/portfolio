const editBtn = document.getElementById('editProyekBtn');
const saveBtn = document.getElementById('saveProyekBtn');
const cancelBtn = document.getElementById('cancelProyekBtn');
const proyekList = document.getElementById('proyek-list');
const editContainer = document.getElementById('editProyekContainer');
const editText = document.getElementById('editProyekText');

const isAdmin = new URLSearchParams(window.location.search).get('admin') === 'true';
if (isAdmin) editBtn.style.display = 'inline-block';

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('proyekList');
  if (saved) {
    const lines = saved.split('\n');
    proyekList.innerHTML = '<ul>' + lines.map(line => `<li>${line}</li>`).join('') + '</ul>';
  }
});

editBtn?.addEventListener('click', () => {
  editText.value = proyekList.innerText.trim();
  editContainer.style.display = 'block';
  editBtn.style.display = 'none';
});

saveBtn?.addEventListener('click', () => {
  const newText = editText.value.trim();
  if (newText === "") {
    proyekList.innerHTML = '<p>Belum ada proyek.</p>';
    localStorage.removeItem('proyekList');
  } else {
    const lines = newText.split('\n');
    proyekList.innerHTML = '<ul>' + lines.map(line => `<li>${line}</li>`).join('') + '</ul>';
    localStorage.setItem('proyekList', newText);
  }
  editContainer.style.display = 'none';
  editBtn.style.display = 'inline-block';
});

cancelBtn?.addEventListener('click', () => {
  editContainer.style.display = 'none';
  editBtn.style.display = 'inline-block';
});