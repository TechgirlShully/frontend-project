document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 document.getElementById('formStatus').innerText='Message sent successfully!';
 e.target.reset();
});