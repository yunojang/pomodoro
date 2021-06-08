const form = document.querySelector('#setting-form'),
    working = form.querySelector('#working'),
    resting = form.querySelector('#resting'),
    goal = form.querySelector('#goal');

const timeResult = document.querySelector('#time-result'),
    total = timeResult.querySelector('#total-time'),
    end = timeResult.querySelector('#end-time');

function renderEndTime(totalTime) {
    const endDate = new Date(Date.now()+(totalTime*60000));
    const endHours = endDate.getHours();
    const endMinutes = endDate.getMinutes();

    end.textContent = `
        ${endHours < 10 ? `0${endHours}` : endHours} :
        ${endMinutes < 10 ? `0${endMinutes}` : endMinutes}
    `;
}

function renderTotalTime(totalTime) {
    const hours = Math.floor(totalTime/60);
    const minutes = totalTime%60;

    total.textContent = `${hours}H ${minutes}M`
}

function renderResult() {
    const workingTime = Number(working.value);
    const restingTime = Number(resting.value);
    const goalCount = Number(goal.value);
    
    const totalTime = (workingTime + restingTime) * goalCount;

    renderTotalTime(totalTime);
    renderEndTime(totalTime);
}

function onClickButton(e) {
    if (e.target.tagName !== 'BUTTON') return;
    e.preventDefault();
}

function onSubmit(e) {
    e.preventDefault();
}

if (form) {
    form.addEventListener('click',onClickButton);
    form.addEventListener('submit',onSubmit);
}

if (timeResult) {
    renderResult();
}

if (working) {
    working.addEventListener('change',renderResult)
}

if (resting) {
    resting.addEventListener('change',renderResult)
}

if (goal) {
    goal.addEventListener('change', renderResult)
}