const menus=['Afternoon tea','Crackers & grazing','Tailored buffet','Wedding','Corporate lunch','Sandwich platter','Fruit platter','Tailored Mediterranean','Individual Indian','Christening','Funerals'];
const select=document.querySelector('#menu-select');
for(const name of ['Help me choose',...menus]){const option=document.createElement('option');option.textContent=name;select.append(option);}
for(const name of menus){const link=document.createElement('a');link.href='#contact';link.textContent=name;link.dataset.menu=name;document.querySelector('#menu-links').append(link);}
document.addEventListener('click',event=>{const link=event.target.closest('[data-menu]');if(link)select.value=link.dataset.menu;});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
document.querySelector('#year').textContent=new Date().getFullYear();
const now=new Date();document.querySelector('[name=date]').min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
document.querySelector('#enquiry').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const message=`Hello Laura’s Quality Catering!\n\nName: ${data.get('name')}\nOccasion: ${data.get('occasion')}\nDate: ${data.get('date')}\nGuests: ${data.get('guests')}\nMenu: ${data.get('menu')}\n\n${data.get('message')}`;window.open(`https://wa.me/447554487799?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');});
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
const reviews=document.querySelector('#reviews');
const quotes=[...reviews.querySelectorAll('figure')];
let quoteIndex=0;
function showQuote(index){
  quoteIndex=(index+quotes.length)%quotes.length;
  quotes.forEach((quote,i)=>{quote.hidden=i!==quoteIndex;});
  document.querySelector('#quote-count').textContent=`${String(quoteIndex+1).padStart(2,'0')} / ${String(quotes.length).padStart(2,'0')}`;
}
reviews.classList.add('enhanced');
document.querySelector('#quote-prev').addEventListener('click',()=>showQuote(quoteIndex-1));
document.querySelector('#quote-next').addEventListener('click',()=>showQuote(quoteIndex+1));
showQuote(0);
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
