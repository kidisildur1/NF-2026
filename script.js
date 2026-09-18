const facts=[
  ['🐱','КОШАЧИЙ КОДЕКС','У Николая все чаты — с кошачьими аватарками. Это не привычка. Это доктрина.'],
  ['🎸','РОК-ОПЫТ','Играл в группе. На вопрос про рок-н-ролл ответил: «естественно». Суд принял это как признание.'],
  ['🌌','ГЕОГРАФИЯ ДУШИ','Мыслями в Че, сердцем в Аше, душой — на сиреневой луне. Навигатор бессилен.'],
  ['🧠','РЕЖИМ «САМО СЕБЕ»','Сам себе психиатр. Сам себе консилиум. Сам себе финальный босс.'],
  ['📞','КОРОТКИЙ ЗВОНОК','Легенда гласит: однажды он всё-таки был действительно коротким. Свидетелей не найдено.'],
  ['⭐','ГАЛАКТИЧЕСКИЙ СТАТУС','Фанат «Звёздных войн». Следовательно, сила сегодня не просто с ним — она в отпуске у него дома.'],
  ['♟️','МНОГОХОДОВОЧКА','Не опечатка, а особая интеллектуальная дисциплина. Сложность: эксперт.'],
  ['📋','СПИСОК ДЛЯ ЧЕЛОВЕКА','Есть «Что сделал Николай». Он длиннее, чем список задач на понедельник.'],
  ['🔥','ОПЕРАТИВКА КУДРЯВЫХ ЛЕТ','Уровень энергии: «сейчас всё решим». Уровень обаяния: критический.'],
  ['🚀','ДИССЕРТАЦИЯ?!','Не, не слышал. Зато слышал, как удалённо взорвался ещё один дедлайн.'],
  ['🎤','МУЗЫКАЛЬНАЯ ТРЕВОГА','Если где-то включился рок-н-ролл, есть ненулевая вероятность, что Николай уже в теме.'],
  ['🛸','САРАТОВСКИЙ КОНТАКТ','Всем доброго вечера из Саратова! Между прочим, так звучат легендарные входы в чат.'],
  ['👑','ОСОБО ОБАЯТЕЛЬНЫЙ','Статус подтверждён командой. Отмене и обжалованию не подлежит.'],
  ['💥','ФИНАЛЬНЫЙ УРОВЕНЬ','Все факты собраны. Именинник признан эпичным. Можно переходить к поздравлению.']
];
let current=0;const $=id=>document.getElementById(id);function renderFact(){const[e,t,x]=facts[current];$('factEmoji').textContent=e;$('factTitle').textContent=t;$('factText').textContent=x;$('count').textContent=`ФАКТ ${current+1} / ${facts.length}`;$('progressBar').style.width=`${(current+1)/facts.length*100}%`;$('factArt').style.backgroundPosition=`${(current%4)*33.333}% ${Math.floor(current/4)*33.333}%`;$('nextFact').textContent=current===facts.length-1?'ОТКРЫТЬ ПОЗДРАВЛЕНИЕ →':'СЛЕДУЮЩИЙ ФАКТ →'}function burst(n=90){const colors=['#ffdf00','#ff3cac','#00e5ff','#fff'];for(let i=0;i<n;i++){const p=document.createElement('i');p.className='piece';p.style.left=`${Math.random()*100}%`;p.style.setProperty('--x',`${Math.random()*120-60}px`);p.style.setProperty('--drift',`${Math.random()*260-130}px`);p.style.setProperty('--color',colors[i%colors.length]);$('confetti').append(p);p.addEventListener('animationend',()=>p.remove())}}$('nextFact').addEventListener('click',()=>{if(current<facts.length-1){current++;renderFact();burst(34)}else{$('factsScreen').hidden=true;$('greetingScreen').hidden=false;burst(220);window.scrollTo({top:0,behavior:'smooth'})}});$('chaos').addEventListener('click',()=>burst(250));renderFact();
