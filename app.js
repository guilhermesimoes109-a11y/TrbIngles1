const paths={book:'M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H4V4Zm16 0h-4a3 3 0 0 0-3 3v14a4 4 0 0 1 4-2h3V4Z',home:'m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8',water:'M12 3C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-12Z',food:'M4 3v7c0 2 6 2 6 0V3M7 3v19M20 22V3c-5 3-6 10 0 10',wallet:'M20 8V5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h17V8H4M21 12h-6v5h6',cloud:'M7 15H6a4 4 0 0 1 0-8 6 6 0 0 1 12-1 4.5 4.5 0 0 1 1 9h-2M8 18l-1 3m5-3-1 3m5-3-1 3',users:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8m6 10v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',truck:'M1 3h14v14H1V3Zm14 5h4l3 4v5h-7M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',school:'m3 10 9-7 9 7M5 9v12h14V9M9 21v-6h6v6M10 9h4',leaf:'M20 3C8 1 2 7 4 15c2 8 16 6 16-12ZM4 21l11-11',shield:'M12 3 3 7v5c0 5 5 8 9 10 4-2 9-5 9-10V7l-9-4Zm-5 9 3 3 7-7',globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z',checkCircle:'M22 11.1V12a10 10 0 1 1-5.93-9.14M22 4 12 14l-3-3',check:'m5 12 4 4L19 6',close:'m6 6 12 12M6 18 18 6',info:'M12 8h.01M12 12v4M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',help:'M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',pause:'M9 5H5v14h4V5Zm10 0h-4v14h4V5Z',play:'m7 4 14 8-14 8V4Z',list:'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z'};
const icon=name=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name]||paths.book}"/></svg>`;
const lessons=[
  {
    "title": "Meet the World Food Programme",
    "short": "Meet WFP",
    "icon": "globe",
    "copy": [
      "WFP stands for World Food Programme. It is a United Nations organisation that helps people get food when they need support.",
      "It responds to emergencies and works with communities on longer-term solutions. The goal is a world where everyone can get enough nourishing food."
    ],
    "examples": [
      [
        "food",
        "Food assistance",
        "Food assistance means helping people get the food they need. This can involve food deliveries, money or vouchers."
      ],
      [
        "users",
        "Working together",
        "WFP works alongside communities, governments and other organisations. Local knowledge helps shape the response."
      ],
      [
        "globe",
        "Beyond an emergency",
        "WFP also supports school meals, nutrition and farmers. Helping today and preparing for tomorrow go together."
      ]
    ],
    "q": "Which description best explains WFP’s work?",
    "answers": [
      "It only sells food to supermarkets.",
      "It helps people get food in crises and build more secure futures.",
      "It only grows food on its own farms."
    ],
    "correct": 1,
    "yes": "WFP combines urgent food assistance with work that supports people over time.",
    "hint": "Look for the answer that includes both emergencies and longer-term support.",
    "source": "https://www.wfp.org/who-we-are"
  },
  {
    "title": "When a crisis interrupts daily life",
    "short": "Emergency help",
    "icon": "truck",
    "copy": [
      "A flood or conflict can cut roads, damage shops or force families to leave home. Getting food may suddenly become difficult.",
      "WFP works with partners to find out what people need and get assistance to them. Deliveries can travel by road, water or air."
    ],
    "examples": [
      [
        "users",
        "Understand the need",
        "Teams learn where people are, what food is available and which routes can be used."
      ],
      [
        "truck",
        "Find a way through",
        "Different places need different transport. A blocked road may mean looking for a safe alternative route."
      ],
      [
        "food",
        "Reach families",
        "Food assistance helps people meet immediate needs while they face an emergency."
      ]
    ],
    "q": "A flood has blocked the main road to a community. What would WFP and its partners need to work out?",
    "answers": [
      "A safe way to reach people with the help they need.",
      "How to make families wait until every road is perfect.",
      "How to send supplies without checking what is needed."
    ],
    "correct": 0,
    "yes": "Understanding the needs and finding a safe route are both important parts of emergency help.",
    "hint": "Think about the two tasks in the explanation: knowing what is needed and reaching people.",
    "source": "https://www.wfp.org/our-work"
  },
  {
    "title": "A school meal is more than lunch",
    "short": "School meals",
    "icon": "school",
    "copy": [
      "Learning is harder on an empty stomach. A nourishing school meal can help children concentrate, play and keep coming to school.",
      "WFP supports governments with school meal programmes. When food is bought from local farmers, the benefits can reach the wider community too."
    ],
    "examples": [
      [
        "book",
        "For a child",
        "A meal provides energy and nutrients. Children can focus on their day instead of on being hungry."
      ],
      [
        "users",
        "For a family",
        "Knowing that a child will receive a meal at school can ease some everyday pressures."
      ],
      [
        "leaf",
        "For a farmer",
        "Buying food locally can give farmers a market for their crops and support local jobs."
      ]
    ],
    "q": "Who can benefit when a school buys food from local farmers?",
    "answers": [
      "Only the school building.",
      "Only the people transporting the food.",
      "Children eating the meals and farmers supplying the food."
    ],
    "correct": 2,
    "yes": "School meals can support children’s learning while local purchases support farmers.",
    "hint": "Think about both sides of the meal: who eats the food and who grows it.",
    "source": "https://www.wfp.org/school-meals"
  },
  {
    "title": "Sometimes help comes as a choice",
    "short": "Cash and vouchers",
    "icon": "wallet",
    "copy": [
      "Food deliveries are not the only way WFP helps. Where markets are working, cash or vouchers can help families buy food locally.",
      "People can choose suitable foods, and local shops can benefit too. The approach depends on the situation; cash cannot fill a shop that has no food."
    ],
    "examples": [
      [
        "wallet",
        "Cash support",
        "Money can help families pay for food and other essential needs when goods are available."
      ],
      [
        "food",
        "Food vouchers",
        "A voucher can be exchanged for eligible food through participating shops or systems."
      ],
      [
        "truck",
        "Food deliveries",
        "If markets cannot supply enough food, delivering food may be a better response."
      ]
    ],
    "q": "Shops have food, but families have lost their income. Which kind of support could help?",
    "answers": [
      "Wait until all the shops close.",
      "Cash or vouchers that help families buy food.",
      "Give the same response without checking local conditions."
    ],
    "correct": 1,
    "yes": "Cash or vouchers can help families choose food where shops are operating.",
    "hint": "The problem here is being able to pay, not a lack of food in the shops.",
    "source": "https://www.wfp.org/cash-transfers"
  },
  {
    "title": "Helping bodies grow and stay well",
    "short": "Good nutrition",
    "icon": "heart",
    "copy": [
      "A full stomach is not the whole story. Our bodies need enough food and different nutrients to grow and work well.",
      "WFP works to prevent and treat malnutrition, especially among young children and people who are pregnant or breastfeeding. Support can include specialised nutritious foods."
    ],
    "examples": [
      [
        "food",
        "Enough food",
        "A body needs enough energy. Having too little to eat can make everyday activities harder."
      ],
      [
        "leaf",
        "Different nutrients",
        "Different foods provide different nutrients. Variety helps meet the body’s needs."
      ],
      [
        "heart",
        "Extra support",
        "Some people need carefully designed nutrition support. The help should fit the person’s needs."
      ]
    ],
    "type": "multi",
    "q": "Which TWO things matter for good nutrition?",
    "answers": [
      "Having enough food.",
      "Eating only one food all the time.",
      "Getting different nutrients.",
      "Missing meals to get used to hunger."
    ],
    "correct": [
      0,
      2
    ],
    "yes": "Both enough food and different nutrients matter. That is why nutrition support goes beyond filling a plate.",
    "hint": "Look for quantity and nutrients: both are described above.",
    "source": "https://www.wfp.org/ending-malnutrition"
  },
  {
    "title": "Helping farmers prepare for tomorrow",
    "short": "Farmers and the future",
    "icon": "leaf",
    "copy": [
      "For a small-scale farmer, a lost harvest can mean less food and less income. WFP helps farmers reduce losses and connect with markets.",
      "It also helps communities prepare for weather-related risks. Protecting livelihoods today can make the next difficult season easier to face."
    ],
    "examples": [
      [
        "leaf",
        "Protect the harvest",
        "Better storage and handling can help stop food being lost after it has been harvested."
      ],
      [
        "wallet",
        "Connect to markets",
        "Finding reliable buyers can help farmers sell their crops and earn an income."
      ],
      [
        "cloud",
        "Prepare earlier",
        "Weather information and early action can give communities time to prepare before conditions become worse."
      ]
    ],
    "q": "Why could better storage make a difference to a farmer?",
    "answers": [
      "It can help protect harvested food from being lost.",
      "It means crops never need water.",
      "It means there is no need to sell or eat the harvest."
    ],
    "correct": 0,
    "yes": "Keeping more of the harvest can help protect both food supplies and a farmer’s income.",
    "hint": "Think about what happens after crops are picked: the food still needs to be protected.",
    "source": "https://www.wfp.org/smallholder-market-support"
  },
  {
    "title": "Who makes the work possible?",
    "short": "People and funding",
    "icon": "users",
    "copy": [
      "WFP relies on voluntary contributions from governments, businesses, organisations and individuals. Transport, food and skilled teams all need resources.",
      "Its work also depends on partnerships. Communities help identify priorities, and WFP must explain how support is used. Reliable funding helps programmes keep going."
    ],
    "examples": [
      [
        "truck",
        "Resources",
        "Food, transport and equipment all need funding. Support helps turn a plan into action."
      ],
      [
        "users",
        "Partners",
        "Governments and local organisations bring knowledge, skills and connections to their communities."
      ],
      [
        "list",
        "Accountability",
        "Explaining how money and resources are used helps people follow the work and its results."
      ]
    ],
    "q": "Why does a school meal programme need reliable support?",
    "answers": [
      "One meal can feed a child for a whole year.",
      "It needs to plan and provide meals regularly.",
      "It no longer needs people to organise it."
    ],
    "correct": 1,
    "yes": "Ongoing support helps teams plan beyond a single day and keep programmes running.",
    "hint": "Think about the difference between one meal and meals throughout a school year.",
    "source": "https://www.wfp.org/funding-and-donors"
  },
  {
    "title": "You can help others understand",
    "short": "Your next step",
    "icon": "book",
    "copy": [
      "You do not have to solve hunger on your own. Understanding the issue is a useful place to start.",
      "With a grown-up, explore WFP’s work, share something you learned or plan a school activity about food and hunger. Ask an adult to guide any fundraising or donations."
    ],
    "examples": [
      [
        "book",
        "Tell someone",
        "Explain one WFP activity in your own words. You could start with school meals or emergency deliveries."
      ],
      [
        "users",
        "Learn together",
        "Ask your class: how could a meal help a child, a family and a farmer? Compare your ideas."
      ],
      [
        "food",
        "Notice food waste",
        "Plan portions with a grown-up. Reducing waste is a helpful habit, though it cannot solve global hunger on its own."
      ]
    ],
    "type": "action",
    "q": "What would you like to do with a grown-up or your class?",
    "answers": [
      "Explain how WFP supports school meals.",
      "Explore an official WFP story together.",
      "Plan a class activity about food and hunger."
    ],
    "correct": null,
    "yes": "A good first step. Decide together what you will do and when.",
    "hint": "",
    "source": "https://www.wfp.org/"
  }
];
const $=s=>document.querySelector(s);const escapeHTML=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');let current=0,finished=false;const responses=new Map(),panels=new Map(),quizOpened=new Set();let selected=new Set();const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');let paused=reduced.matches;let previousFocus;
function fillIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
function stopMarkup(){return lessons.map((l,i)=>`<button class="stop" data-stop="${i}" ${i===current?'aria-current="step"':''} aria-label="Topic ${i+1}: ${escapeHTML(l.short)}${responses.get(i)?.success?', completed':''}"><span class="stop-number">${String(i+1).padStart(2,'0')}</span><span class="stop-title">${l.short}</span>${responses.get(i)?.success?`<span class="done-icon">${icon('check')}</span>`:''}</button>`).join('');}
function render(focus=false){finished=false;const l=lessons[current];selected=new Set(responses.get(current)?.selection||[]);$('#finish').hidden=true;$('#lesson').hidden=false;$('.lesson-footer').hidden=false;$('#stops').innerHTML=stopMarkup();$('#progress-label').textContent=`Topic ${current+1} of ${lessons.length}`;$('.progress-track').setAttribute('aria-valuenow',current+1);$('#progress-fill').style.width=`${(current+1)/lessons.length*100}%`;const tab=panels.get(current)||0;$('#lesson').innerHTML=`<div class="lesson-topline"><div class="lesson-meta">${icon(l.icon)}<span>Topic ${String(current+1).padStart(2,'0')} / ${String(lessons.length).padStart(2,'0')}</span></div><div class="learning-steps"><span class="step-learn active">Learn</span><span class="step-try ${quizOpened.has(current)?'active':''}">Try it</span></div></div><h3>${l.title}</h3><div class="explanation">${l.copy.map(p=>`<p>${p}</p>`).join('')}</div><a class="lesson-source" href="${l.source}" target="_blank" rel="noopener noreferrer">Read more on wfp.org</a><section class="explore" aria-labelledby="examples-heading"><h4 class="explore-heading" id="examples-heading">${icon('list')}Explore an example</h4><div class="example-tabs" role="tablist" aria-label="Examples of ${escapeHTML(l.short)}">${l.examples.map((e,i)=>`<button class="example-tab" role="tab" id="example-tab-${i}" aria-controls="example-content" aria-selected="${i===tab}" tabindex="${i===tab?0:-1}" data-example="${i}">${icon(e[0])}${e[1]}</button>`).join('')}</div><div class="example-content" id="example-content" role="tabpanel" aria-labelledby="example-tab-${tab}"><strong>${l.examples[tab][1]}</strong>${l.examples[tab][2]}</div></section><div class="lesson-ready" ${quizOpened.has(current)?'hidden':''}><div class="ready-copy"><span class="ready-icon">${icon('help')}</span><p><strong>Ready to give it a go?</strong><span>Use what you have just learned.</span></p></div><button class="button dark" id="open-quiz">Try the question</button></div><section class="quiz" tabindex="-1" aria-labelledby="quiz-heading" ${quizOpened.has(current)?'':'hidden'}><div class="quiz-topline"><div class="quiz-label">${icon('help')}Your turn</div><span class="question-type">${l.type==='multi'?'Choose two':l.type==='action'?'Your choice':'Choose one'}</span></div><h4 id="quiz-heading">${l.q}</h4>${l.type==='multi'?'<p class="selection-hint" role="status" aria-live="polite">Choose two answers · 0 of 2 selected</p>':''}<div class="options" role="group" aria-labelledby="quiz-heading">${l.answers.map((a,i)=>`<button class="option" data-answer="${i}" aria-pressed="false"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${a}</span><span class="answer-icon"></span></button>`).join('')}</div><div class="feedback" role="status" aria-live="polite" hidden></div><div class="question-actions"><button class="plain" id="review">Read the explanation again</button>${l.type==='multi'?'<button class="button light" id="check-answer" disabled>Check answers</button>':''}<button class="button dark" id="next" hidden>${current===lessons.length-1?'Finish the journey':'Next topic'}</button></div></section>`;$('#back').disabled=current===0;$('#skip').textContent=current===lessons.length-1?'Finish without choosing':'Skip this topic';$('#footer-status').textContent=quizOpened.has(current)?'You can check the explanation whenever you need.':'Read the explanation before answering.';if(responses.has(current))showResponse(responses.get(current));decorateWords($('#lesson'));animatePanel($('#lesson'));if(focus){$('#lesson').focus({preventScroll:true});$('#journey').scrollIntoView({behavior:paused?'instant':'smooth',block:'start'});}}
function changeExample(i,focus=false){const l=lessons[current];if(!Number.isInteger(i)||i<0||i>=l.examples.length)throw new Error('Invalid example.');panels.set(current,i);document.querySelectorAll('[data-example]').forEach((b,j)=>{b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1});const e=l.examples[i];$('#example-content').innerHTML=`<strong>${e[1]}</strong>${e[2]}`;$('#example-content').setAttribute('aria-labelledby',`example-tab-${i}`);decorateWords($('#example-content'));animatePanel($('#example-content'),6);if(focus)$(`[data-example="${i}"]`).focus();return {title:e[1],explanation:e[2]};}
function openQuiz(focus=true){quizOpened.add(current);$('.lesson-ready').hidden=true;$('.quiz').hidden=false;$('.step-try')?.classList.add('active');animatePanel($('.quiz'));animateAnswers();$('#footer-status').textContent='You can check the explanation whenever you need.';if(focus){$('.quiz').focus({preventScroll:true});$('.quiz').scrollIntoView({behavior:paused?'instant':'smooth',block:'center'});}}
function showResponse(r){const l=lessons[current];selected=new Set(r.selection);if(l.type==='multi')$('.selection-hint').textContent=`Choose two answers · ${selected.size} of 2 selected`;document.querySelectorAll('[data-answer]').forEach((b,i)=>{const chosen=selected.has(i);b.setAttribute('aria-pressed',String(chosen));b.classList.toggle('selected',chosen);b.classList.toggle('correct',chosen&&r.success);b.classList.toggle('wrong',chosen&&!r.success);b.querySelector('.answer-icon').innerHTML=chosen?icon(r.success?'check':'info'):'';});const feedback=$('.feedback');feedback.hidden=false;feedback.classList.toggle('wrong',!r.success);feedback.innerHTML=`${icon(r.success?'checkCircle':'info')}<div><strong>${r.success?(l.type==='action'?'A step to plan together.':'That’s right.'):'Let’s think again.'}</strong>${r.success?l.yes:l.hint}</div>`;animatePanel(feedback,5);$('.quiz').classList.toggle('is-correct',r.success);$('.quiz').classList.toggle('is-retry',!r.success);animateAnswerResult(r);$('.question-type').textContent=r.success?'Completed':'Try again';if(r.success)celebrateAnswer();$('#next').hidden=!r.success;if($('#check-answer')){$('#check-answer').hidden=r.success;$('#check-answer').disabled=false;}$('#stops').innerHTML=stopMarkup();}
function submit(selection){const l=lessons[current];if(finished||!quizOpened.has(current))throw new Error('Read the topic and open the question first.');if(!Array.isArray(selection)||!selection.length||selection.some(i=>!Number.isInteger(i)||i<0||i>=l.answers.length)||new Set(selection).size!==selection.length)throw new Error('Choose valid answers.');if(l.type!=='multi'&&selection.length!==1)throw new Error('Choose just one answer.');const success=l.type==='action'||(l.type==='multi'?selection.length===l.correct.length&&l.correct.every(i=>selection.includes(i)):selection[0]===l.correct);const r={selection:[...selection],success};responses.set(current,r);showResponse(r);return {topic:current+1,correct:success,feedback:success?l.yes:l.hint};}
function selectAnswer(i){const l=lessons[current];if(l.type!=='multi')return submit([i]);selected.has(i)?selected.delete(i):selected.add(i);responses.delete(current);$('.feedback').hidden=true;$('.quiz').classList.remove('is-correct','is-retry');$('#next').hidden=true;$('#check-answer').hidden=false;$('#check-answer').disabled=selected.size!==2;$('.selection-hint').textContent=`Choose two answers · ${selected.size} of 2 selected`;$('.question-type').textContent='Choose two';document.querySelectorAll('[data-answer]').forEach((b,j)=>{b.classList.remove('correct','wrong');b.classList.toggle('selected',selected.has(j));b.setAttribute('aria-pressed',String(selected.has(j)));b.querySelector('.answer-icon').innerHTML=selected.has(j)?icon('check'):'';});$('#stops').innerHTML=stopMarkup();}
function move(i,focus=true){if(!Number.isInteger(i)||i<0||i>=lessons.length)throw new Error('Choose a topic from 1 to 8.');current=i;render(focus);return {topic:i+1,title:lessons[i].title};}
function complete(){finished=true;$('#lesson').hidden=true;$('#finish').hidden=false;animatePanel($('#finish'));$('.lesson-footer').hidden=true;$('#progress-label').textContent='Journey complete';$('#progress-fill').style.width='100%';$('.progress-track').setAttribute('aria-valuenow',lessons.length);const answered=[...responses.values()].filter(r=>r.success).length;$('#finish-summary').textContent=answered===lessons.length?`You explored and answered all ${lessons.length} WFP topics.`:`You answered ${answered} of ${lessons.length} topics. You can revisit the others whenever you like.`;$('#finish').focus({preventScroll:true});$('#journey').scrollIntoView({behavior:paused?'instant':'smooth'});}
function advance(){current<lessons.length-1?move(current+1):complete();}
$('#stops').addEventListener('click',e=>{const b=e.target.closest('[data-stop]');if(b)move(Number(b.dataset.stop));});$('#lesson').addEventListener('click',e=>{const example=e.target.closest('[data-example]');if(example)changeExample(Number(example.dataset.example));const answer=e.target.closest('[data-answer]');if(answer)selectAnswer(Number(answer.dataset.answer));if(e.target.closest('#open-quiz'))openQuiz();if(e.target.closest('#check-answer'))submit([...selected]);if(e.target.closest('#next'))advance();if(e.target.closest('#review')){$('#lesson').focus({preventScroll:true});$('#lesson').scrollIntoView({behavior:paused?'instant':'smooth'});}});$('#lesson').addEventListener('keydown',e=>{const b=e.target.closest('[data-example]');if(!b)return;const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();const n=lessons[current].examples.length;let next=Number(b.dataset.example);next=e.key==='Home'?0:e.key==='End'?n-1:(next+(['ArrowLeft','ArrowUp'].includes(e.key)?-1:1)+n)%n;changeExample(next,true);});$('#back').addEventListener('click',()=>{if(current>0)move(current-1);});$('#skip').addEventListener('click',advance);$('#restart').addEventListener('click',()=>{responses.clear();quizOpened.clear();panels.clear();move(0);});$('#choose-action').addEventListener('click',()=>move(lessons.length-1));
function syncMotion(){const v=$('#community-video');if(paused)v.pause();else if(!v.ended&&v.getBoundingClientRect().top<innerHeight&&v.getBoundingClientRect().bottom>0)v.play().catch(()=>{});}
reduced.addEventListener('change',e=>{paused=e.matches;syncMotion();resetTilt();});document.querySelectorAll('[data-open-guide]').forEach(b=>b.addEventListener('click',()=>{previousFocus=document.activeElement;$('#guide').showModal();}));$('#close-guide').addEventListener('click',()=>$('#guide').close());$('#guide').addEventListener('close',()=>previousFocus?.focus());$('#guide').addEventListener('click',e=>{if(e.target===$('#guide')){const r=$('#guide').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#guide').close();}});

if(document.modelContext?.registerTool){const lifecycle=new AbortController();const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};register({name:'read_learning_stop',description:'Read the visible topic, explanation, examples and quiz state.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({completed:finished,topic:current+1,title:lessons[current].title,explanation:lessons[current].copy,examples:lessons[current].examples.map(e=>({title:e[1],text:e[2]})),questionOpen:quizOpened.has(current),question:lessons[current].q,choices:lessons[current].answers,response:responses.get(current)??null})});register({name:'navigate_learning_stop',description:'Open a learning topic without answering its question.',inputSchema:{type:'object',properties:{stop:{type:'integer',minimum:1,maximum:lessons.length}},required:['stop'],additionalProperties:false},execute:input=>move(input.stop-1)});register({name:'open_learning_quiz',description:'Reveal the question after reviewing the current topic explanation.',inputSchema:{type:'object',properties:{},additionalProperties:false},execute:()=>{if(finished)throw new Error('Open a topic first.');openQuiz();return {topic:current+1,question:lessons[current].q};}});register({name:'submit_quiz_answer',description:'Submit zero-based choice indices for the visible question. For the nutrition topic, select two answers.',inputSchema:{type:'object',properties:{answers:{type:'array',items:{type:'integer',minimum:0},minItems:1,uniqueItems:true}},required:['answers'],additionalProperties:false},execute:input=>submit(input.answers)});window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});}

// Pointer and keyboard input share the same bounded image tilt.
const stage=$('.image-stage');let tiltX=0,tiltY=0,tiltFrame=0,tiltRect=null;
function setTilt(x,y){tiltX=Math.max(-1,Math.min(1,x));tiltY=Math.max(-1,Math.min(1,y));stage.style.setProperty('--rx',`${-tiltY*7}deg`);stage.style.setProperty('--ry',`${tiltX*9}deg`);stage.style.setProperty('--scale','1.035');stage.style.setProperty('--light-x',`${(tiltX+1)*50}%`);stage.style.setProperty('--light-y',`${(tiltY+1)*50}%`);stage.classList.add('is-active');}
function resetTilt(){if(typeof stage==='undefined')return;cancelAnimationFrame(tiltFrame);tiltFrame=0;tiltX=0;tiltY=0;stage.classList.remove('is-active');stage.style.setProperty('--rx','0deg');stage.style.setProperty('--ry','0deg');stage.style.setProperty('--scale','1');}
function updatePointerTilt(e){if(e.pointerType!=='mouse'&&e.buttons===0)return;tiltRect=tiltRect||stage.getBoundingClientRect();const x=((e.clientX-tiltRect.left)/tiltRect.width-.5)*2;const y=((e.clientY-tiltRect.top)/tiltRect.height-.5)*2;cancelAnimationFrame(tiltFrame);tiltFrame=requestAnimationFrame(()=>setTilt(x,y));}
stage.addEventListener('pointerenter',e=>{tiltRect=stage.getBoundingClientRect();updatePointerTilt(e);});stage.addEventListener('pointermove',updatePointerTilt);stage.addEventListener('pointerdown',e=>{tiltRect=stage.getBoundingClientRect();if(e.pointerType!=='mouse')stage.setPointerCapture(e.pointerId);updatePointerTilt(e);});stage.addEventListener('pointerleave',resetTilt);stage.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse')resetTilt();});stage.addEventListener('pointercancel',resetTilt);stage.addEventListener('blur',resetTilt);stage.addEventListener('keydown',e=>{const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter','Escape'];if(!keys.includes(e.key))return;e.preventDefault();if(e.key==='Enter'||e.key==='Escape')return resetTilt();setTilt(tiltX+(e.key==='ArrowLeft'?-.25:e.key==='ArrowRight'?.25:0),tiltY+(e.key==='ArrowUp'?-.25:e.key==='ArrowDown'?.25:0));});window.addEventListener('resize',()=>{tiltRect=null;resetTilt();});
function animatePanel(el,distance=24){if(paused||!el?.animate)return;el.animate([{opacity:.3,transform:`translateY(${distance}px)`},{opacity:1,transform:'translateY(0)'}],{duration:560,easing:'cubic-bezier(.16,1,.3,1)'});}

$('#work').addEventListener('click',event=>{const button=event.target.closest('[data-jump]');if(button)move(Number(button.dataset.jump));});

function animateAnswers(){if(paused)return;document.querySelectorAll('.option').forEach((el,i)=>el.animate?.([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:580,delay:90*i,fill:'backwards',easing:'cubic-bezier(.2,.8,.2,1)'}));}
function animateAnswerResult(result){if(paused)return;result.selection.forEach(i=>{const el=$(`[data-answer="${i}"]`);el?.animate?.(result.success?[{transform:'scale(1)'},{transform:'scale(1.018)'},{transform:'scale(1)'}]:[{transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:360,easing:'ease-out'});});}
// The native scroll surface also supports touch and keyboard navigation.
const carousel=$('.work-carousel'),rail=$('.work-grid');
let railWidth=0,railOffset=0,railTime=0,railFrame=0,railHover=false,railFocus=false,railTouch=false,railVisible=true,railStarted=false;
const originalCards=Array.from(rail.children);
function setupRail(){rail.querySelectorAll('[data-repeat]').forEach(n=>n.remove());{originalCards.forEach(card=>{const clone=card.cloneNode(true);clone.dataset.repeat='true';clone.setAttribute('aria-hidden','true');clone.querySelectorAll('button,a').forEach(el=>el.tabIndex=-1);rail.appendChild(clone);});}measureRail();}
function measureRail(){const first=originalCards[0],repeat=rail.querySelector('[data-repeat]');railWidth=repeat?repeat.offsetLeft-first.offsetLeft:0;if(!railStarted&&railWidth>0){railOffset=railWidth/2;carousel.scrollLeft=railOffset;railStarted=true;}else railOffset=carousel.scrollLeft;}
function canScrollRail(){return !railHover&&!railFocus&&!railTouch&&railVisible&&!document.hidden&&railWidth>0;}
function railTick(time){const delta=railTime?Math.min(time-railTime,50):0;railTime=time;if(canScrollRail()){railOffset+=delta*.099;if(railOffset>=railWidth)railOffset-=railWidth;carousel.scrollLeft=railOffset;}else railOffset=carousel.scrollLeft;railFrame=requestAnimationFrame(railTick);}
carousel.addEventListener('pointermove',e=>{if(e.pointerType==='mouse')railHover=!!e.target.closest('.work-card');});carousel.addEventListener('pointerleave',()=>{railHover=false;});carousel.addEventListener('focusin',e=>{railFocus=e.target.matches(':focus-visible');});carousel.addEventListener('focusout',e=>{railFocus=!!(e.relatedTarget&&carousel.contains(e.relatedTarget)&&e.relatedTarget.matches(':focus-visible'));});carousel.addEventListener('pointerdown',()=>{railTouch=true;});window.addEventListener('pointerup',()=>{railTouch=false;});window.addEventListener('pointercancel',()=>{railTouch=false;});carousel.addEventListener('scroll',()=>{if(!canScrollRail())railOffset=carousel.scrollLeft;},{passive:true});
window.addEventListener('resize',measureRail);if('ResizeObserver'in window)new ResizeObserver(measureRail).observe(rail);if('IntersectionObserver'in window)new IntersectionObserver(entries=>{railVisible=entries[0].isIntersecting;},{threshold:0}).observe(carousel);setupRail();railFrame=requestAnimationFrame(railTick);window.addEventListener('pagehide',()=>{cancelAnimationFrame(railFrame);railFrame=0;});window.addEventListener('pageshow',()=>{if(!railFrame){railTime=0;railFrame=requestAnimationFrame(railTick);}});

// Reveal content on arrival, without making content depend on JavaScript visibility.
const revealTargets=document.querySelectorAll('.identity-strip > div,.work-heading,.course-header,.contents,.workspace,.site-footer');
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
    if(!isIntersecting)return;
    if(!paused)target.animate?.([{opacity:0,transform:'translateY(32px)'},{opacity:1,transform:'translateY(0)'}],{duration:800,easing:'cubic-bezier(.16,1,.3,1)'});
    revealObserver.unobserve(target);
  }),{threshold:.12});
  revealTargets.forEach(el=>revealObserver.observe(el));
}
// Delegation also gives the seamless carousel copies the same interactions.
let activeCard=null,cardFrame=0,cardRect=null;
function clearCardTilt(){
  cancelAnimationFrame(cardFrame);
  if(activeCard){activeCard.style.removeProperty('--card-x');activeCard.style.removeProperty('--card-y');activeCard.classList.remove('is-tilting');activeCard=null;cardRect=null;}
}
carousel.addEventListener('pointermove',e=>{
  if(e.pointerType!=='mouse')return;
  const card=e.target.closest('.work-card');
  if(!card){clearCardTilt();return;}
  if(activeCard!==card){clearCardTilt();activeCard=card;cardRect=card.getBoundingClientRect();}
  const rect=cardRect;
  const x=Math.max(-1,Math.min(1,(e.clientX-rect.left)/rect.width*2-1));
  const y=Math.max(-1,Math.min(1,(e.clientY-rect.top)/rect.height*2-1));
  cancelAnimationFrame(cardFrame);
  cardFrame=requestAnimationFrame(()=>{card.style.setProperty('--card-x',`${-y*5}deg`);card.style.setProperty('--card-y',`${x*7}deg`);card.classList.add('is-tilting');});
});
carousel.addEventListener('pointerleave',clearCardTilt);
reduced.addEventListener('change',()=>{clearCardTilt();if(reduced.matches)document.getAnimations().forEach(a=>a.cancel());});

fillIcons();render();syncMotion();if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{if(!isIntersecting||paused)target.pause();else if(!target.ended)target.play().catch(()=>{});}),{threshold:.25});observer.observe($('#community-video'));}

// A few responsive words add playfulness without shifting the reading layout.
function decorateWords(root){
  if(!root||root.nodeType===3)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];let node;
  while(node=walker.nextNode()){
    if(!node.textContent.trim()||!node.parentElement)continue;
    if(node.parentElement.closest('.play-word,.word-run,script,style,svg,textarea,select,option,[contenteditable],header,.site-header,nav,[role="banner"],button,.button,a,[role="button"],[role="tab"]'))continue;
    if(!node.parentElement.closest('h1,h2,h3,h4,h5,h6,p,li,figcaption,.explanation,.example-content,.feedback'))continue;
    nodes.push(node);
  }
  nodes.forEach(text=>{
    // Keep each original text run together inside flex buttons and labels.
    const run=document.createElement('span');run.className='word-run';
    text.textContent.split(/(\s+)/).forEach(part=>{
      if(!part)return;
      if(/^\s+$/.test(part))run.append(document.createTextNode(part));
      else {const word=document.createElement('span');word.className='play-word';word.textContent=part;run.append(word);}
    });
    text.replaceWith(run);
  });
}

function celebrateAnswer(){
  if(paused)return;
  const quiz=$('.quiz');
  quiz.querySelectorAll('.answer-bubble').forEach(el=>el.remove());
  for(let i=0;i<9;i++){
    const bubble=document.createElement('span');bubble.className='answer-bubble';bubble.setAttribute('aria-hidden','true');
    bubble.style.left=`${18+i*8}%`;bubble.style.background=['#8bdfc3','#7ecce8','#efcf7a'][i%3];quiz.append(bubble);
    const animation=bubble.animate?.([{opacity:0,transform:'translateY(0) scale(.2)'},{opacity:.8,offset:.2},{opacity:0,transform:`translate(${(i-4)*9}px,-${55+i%3*25}px) scale(1)`}],{duration:850+i*35,easing:'ease-out'});
    if(animation)animation.onfinish=()=>bubble.remove();else bubble.remove();
  }
  animatePanel($('#next'),8);
}
$('#lesson').addEventListener('pointermove',event=>{
  const option=event.target.closest('.option');if(!option||event.pointerType!=='mouse')return;
  const rect=option.getBoundingClientRect();option.style.setProperty('--pointer-x',`${(event.clientX-rect.left)/rect.width*100}%`);option.style.setProperty('--pointer-y',`${(event.clientY-rect.top)/rect.height*100}%`);
});
$('#lesson').addEventListener('click',event=>{
  const button=event.target.closest('.option,.example-tab');
  if(button&&!paused)button.animate?.([{scale:'1'},{scale:'.975'},{scale:'1'}],{duration:300,easing:'cubic-bezier(.16,1,.3,1)'});
});
decorateWords(document.body);
// Cover new questions, feedback, progress labels and dialog content too.
const textObserver=new MutationObserver(records=>{
  textObserver.disconnect();
  const roots=new Set();
  records.forEach(record=>{
    if(record.type==='characterData'){if(record.target.parentElement)roots.add(record.target.parentElement);}
    else record.addedNodes.forEach(node=>{const root=node.nodeType===3?node.parentElement:node;if(root&&root.isConnected)roots.add(root);});
  });
  roots.forEach(root=>{if(!root.closest?.('.play-word,.word-run,svg,script,style'))decorateWords(root);});
  textObserver.observe(document.body,{childList:true,subtree:true,characterData:true});
});
textObserver.observe(document.body,{childList:true,subtree:true,characterData:true});
