const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 const n=document.getElementById('name').value.trim(),em=document.getElementById('email').value.trim(),m=document.getElementById('message').value.trim();
 location.href='mailto:priyanka.kumari.verma05@gmail.com?subject='+encodeURIComponent('Portfolio contact from '+n)+'&body='+encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\n'+m);
});