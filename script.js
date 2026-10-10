const nav=document.getElementById('nav'),lk=document.getElementById('lk');
addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>30));
document.getElementById('bg').onclick=()=>lk.classList.toggle('o');
lk.querySelectorAll('a').forEach(a=>a.onclick=()=>lk.classList.remove('o'));
document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>{
document.querySelectorAll('#tabs button').forEach(x=>x.classList.remove('a'));b.classList.add('a');
document.querySelectorAll('#dg .card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f))});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');
x.target.querySelectorAll('[data-n]').forEach(n=>{const t=+n.dataset.n,s=n.dataset.s||'';let v=0;const i=setInterval(()=>{v+=Math.ceil(t/50);if(v>=t){v=t;clearInterval(i)}n.textContent=v+(v===t?s:'')},30)});io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
