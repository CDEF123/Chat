// Handling login and redirect to dashboard
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('username', document.getElementById('username').value);
  window.location.href = 'dashboard.html';
});

// Handling sending and receiving messages
document.getElementById('sendMessageButton')?.addEventListener('click', () => {
  const message = document.getElementById('messageInput').value;
  if (message) {
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: localStorage.getItem('username'), message: message })
    }).then(res => res.json())
      .then(data => {
        document.getElementById('messageContainer').innerHTML += `<div>${data.user}: ${data.message}</div>`;
      });
  }
});

// Load messages
window.onload = function() {
  fetch('http://localhost:3000/messages')
    .then(res => res.json())
    .then(messages => {
      messages.forEach(msg => {
        document.getElementById('messageContainer').innerHTML += `<div>${msg.user}: ${msg.message}</div>`;
      });
    });
};
