const form = document.getElementById('client-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const clientName = document.getElementById('client-name').value;
  const cellNo = document.getElementById('cell-no').value;
  const email = document.getElementById('email').value;
  const macNumber = document.getElementById('mac-number').value;
  const magLine = document.getElementById('mag-line').value;
  const magBox = document.getElementById('mag-box').value;
  const subrogationDate = document.getElementById('subrogation-date').value;
  const amountPaid = document.getElementById('amount-paid').value;
  const startingDate = document.getElementById('starting-date').value;
  const status = document.getElementById('status').value;

  const msg = `Client Name: ${clientName}\nCell No: ${cellNo}\nEmail: ${email}\nMac Number: ${macNumber}\nMag Line: ${magLine}\nMag Box: ${magBox}\nSubrogation Date: ${subrogationDate}\nAmount Paid: ${amountPaid}\nStarting Date: ${startingDate}\nStatus: ${status}`;

  emailjs.send('gmail', 'client-form', {
    to_name: 'Pelica00971',
    to_email: 'pelica00971@gmail.com',
    subject: 'New Client Form Submission',
    message: msg
  }).then(() => {
    alert('Email sent successfully!');
  }).catch((error) => {
    alert('Failed to send email: ' + error.message);
  });
});
