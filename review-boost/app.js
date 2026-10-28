(()=>{const $=id=>document.getElementById(id);
const toast=m=>{const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),1800)};
async function copy(txt){try{await navigator.clipboard.writeText(txt)}catch(e){const a=document.createElement('textarea');a.value=txt;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}toast('Copied')}
function validUrl(v){let u;try{u=new URL(v.trim())}catch(e){return null}if(!/^https?:$/.test(u.protocol)||!u.hostname.includes('.'))return null;return u.href}
function googleish(h){return /(^|\.)(google\.[a-z.]+|g\.page|goo\.gl|maps\.app\.goo\.gl|g\.co)$/i.test(h)}
let lastShop='';
$('gen').addEventListener('submit',e=>{e.preventDefault();const raw=$('url').value,shop=$('shop').value.trim()||'our shop';const href=validUrl(raw);
 if(!href){$('url').classList.add('bad');$('urlErr').textContent='Please enter a full link starting with https://';$('out').hidden=true;return}
 $('url').classList.remove('bad');$('urlErr').textContent=googleish(new URL(href).hostname)?'':'Heads up: this doesn\u2019t look like a Google link. It will still work, but double-check it.';
 lastShop=$('shop').value.trim();const qr=qrcode(0,'M');qr.addData(href);qr.make();const n=qr.getModuleCount(),c=$('qr'),x=c.getContext('2d'),q=4,s=Math.floor(c.width/(n+q*2)),o=Math.floor((c.width-s*n)/2);
 x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#14161a';for(let r=0;r<n;r++)for(let k=0;k<n;k++)if(qr.isDark(r,k))x.fillRect(o+k*s,o+r*s,s,s);
 $('qrCap').textContent='Scan to review '+shop;$('sms').textContent=`Thanks for coming in to ${shop} today! If you liked your cut, a quick Google review helps us a lot: ${href}\nReply STOP to opt out.`;
 $('out').hidden=false;c.dataset.url=href;});
$('dl').onclick=()=>{const a=document.createElement('a');a.download=(($('shop').value.trim()||'review')+'-qr.png').replace(/[^\w.-]+/g,'-').toLowerCase();a.href=$('qr').toDataURL('image/png');a.click()};
$('copySms').onclick=()=>copy($('sms').textContent);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const POS=/\b(great|amazing|awesome|best|love|loved|excellent|fantastic|perfect|clean|friendly|professional|recommend|skilled|fresh|happy|nice|good|on point|fire)\b/gi,
 NEG=/\b(bad|worst|rude|terrible|awful|horrible|wait(ed|ing)?|late|messed|uneven|crooked|cut me|nick(ed)?|overpriced|expensive|dirty|unprofessional|disappointed|never again|rushed|ignored|cancel(led|ed)?|refund)\b/gi;
const TOPICS=[[/\b(fade|taper)s?\b/i,'fade'],[/\bbeard|line ?up|shape ?up\b/i,'beard and line-up work'],[/\bkids?|son|daughter\b/i,'visit with your little one'],[/\b(wait|waited|waiting|late|on time)\b/i,'wait time'],[/\b(price|prices|expensive|overpriced|cost)\b/i,'pricing'],[/\b(clean|vibe|atmosphere|music|shop)\b/i,'shop atmosphere'],[/\b(booking|appointment|book)\b/i,'booking']];
function analyse(t,st){const p=(t.match(POS)||[]).length,n=(t.match(NEG)||[]).length;let tone;if(st){tone=st>=4?'positive':st==3?'mixed':'negative';if(st>=4&&n>p)tone='mixed'}else tone=n===0&&p>0?'positive':n>0&&p>0?'mixed':n>0?'negative':'positive';
 let topic=null;for(const [r,l] of TOPICS)if(r.test(t)){topic=l;break}const barber=(t.match(/\b(?:with|by|from|ask for|shout ?out to)\s+([A-Z][a-z]{2,})\b/)||[])[1];return{tone,topic,barber}}
function draft(){const t=$('rev').value.trim(),st=+$('stars').value||0,who=$('who').value.trim().split(/\s+/)[0],shop=$('sig').value.trim()||lastShop||$('shop').value.trim()||'the team';
 const {tone,topic,barber}=analyse(t,st);const hi=pick(who?[`Hi ${who},`,`Hey ${who},`,`Hello ${who},`]:['Hi there,','Hello,','Thank you!']);let b=[];
 if(tone==='positive'){b.push(pick(['Thank you so much for the kind words. It really made our day.','We appreciate you taking the time to leave a review. Thank you!','This is great to read. Thanks for the love!']));
  if(topic&&topic!=='wait time'&&topic!=='pricing')b.push(pick([`Glad the ${topic} came out exactly how you wanted.`,`Happy to hear you liked the ${topic}.`]));
  if(barber)b.push(pick([`We'll make sure ${barber} sees this.`,`${barber} will be glad to hear it.`]));b.push(pick(['See you next time in the chair!','Looking forward to your next visit.','We\'ll keep you looking sharp. See you soon!']));}
 else if(tone==='mixed'){b.push(pick(['Thanks for the honest feedback; we appreciate it.','Thank you for taking the time to share both the good and the not-so-good.']));
  b.push(topic?pick([`We hear you on the ${topic}, and we're looking at how to do better there.`,`Your point about the ${topic} is noted, and we're working on it.`]):pick(['We\'re glad parts of the visit hit the mark, and we\'ll work on the rest.','We want every visit to be a five-star one, so this helps.']));
  b.push(pick(['Next time, mention this when you book and we\'ll make it right.','We\'d love the chance to give you a full five-star experience next time.']));}
 else{b.push(pick(['We\'re sorry your visit didn\'t meet expectations. That\'s not the experience we want for anyone.','Thank you for letting us know, and we apologize that we fell short this time.','We\'re sorry to hear this and appreciate you telling us.']));
  if(topic)b.push(pick([`We take concerns about ${topic} seriously and are reviewing what happened.`,`We\'re looking into the ${topic} issue with the team.`]));
  b.push(pick(['Please reach out to the shop directly so we can make it right.','We\'d like to fix this, so please contact us directly and ask for the owner.','If you\'re open to it, contact the shop and we\'ll do our best to make it right.']));}
 return {text:`${hi}\n\n${b.join(' ')}\n\n— ${shop}`,tone}}
function show(){if(!$('rev').value.trim()){$('revErr').textContent='Paste a review first.';$('replyOut').hidden=true;return}$('revErr').textContent='';const d=draft();$('draft').textContent=d.text;$('tone').textContent=d.tone;$('replyOut').hidden=false}
$('rf').addEventListener('submit',e=>{e.preventDefault();show()});$('again').onclick=show;$('copyReply').onclick=()=>copy($('draft').textContent);
})();
