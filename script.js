const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const lb=document.getElementById('lightbox');
if(lb){
  document.querySelectorAll('.flyer-btn').forEach(b=>b.addEventListener('click',()=>{
    lb.querySelector('img').src=b.dataset.full;
    lb.querySelector('img').alt=b.querySelector('img').alt;
    lb.querySelector('p').textContent=b.dataset.cap;
    lb.showModal();
  }));
  lb.addEventListener('click',e=>{ if(e.target===lb) lb.close(); });
}

const stackBtn=document.getElementById('stackBtn'),flyers=document.getElementById('flyers'),collapseBtn=document.getElementById('collapseBtn');
if(stackBtn&&flyers&&collapseBtn){
  stackBtn.addEventListener('click',()=>{
    stackBtn.hidden=true;stackBtn.setAttribute('aria-expanded','true');
    flyers.hidden=false;collapseBtn.hidden=false;
    flyers.querySelector('.flyer-btn').focus({preventScroll:true});
  });
  collapseBtn.addEventListener('click',()=>{
    flyers.hidden=true;collapseBtn.hidden=true;
    stackBtn.hidden=false;stackBtn.setAttribute('aria-expanded','false');
    stackBtn.focus({preventScroll:true});
    stackBtn.scrollIntoView({block:'center',behavior:'smooth'});
  });
}
