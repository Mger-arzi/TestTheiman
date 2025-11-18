const prizes = [
    "Сертификат на 1 000 ₽",
    "Сертификат на 2 000 ₽",
    "Сертификат на 3 000 ₽",
    "Сертификат на 5 000 ₽",
    "Чехол для iPhone",
    "Беспроводная зарядка",
    "Защитное стекло",
    "Кабель USB-C / Lightning",
    "Фирменный шопер",
    "Скидка 10%",
    "Скидка 15%",
    "Перенос данных"
];

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const resultText = document.getElementById('prizeText');
const modal = document.getElementById('modal');
const modalPrize = document.getElementById('modalPrize');
const closeModalBtn = document.getElementById('closeModal');

let isSpinning = false;

spinBtn.addEventListener('click', () => {
    if (isSpinning) return;

    isSpinning = true;
    spinBtn.disabled = true;

    // Случайный угол: 5 полных оборотов + случайный сектор
    const extraRotations = 360 * 5;
    const randomSector = Math.floor(Math.random() * 12);
    const sectorAngle = 360 / 12;
    // Цель — остановить стрелку между секторами, чтобы в центре был нужный
    const targetAngle = randomSector * sectorAngle + sectorAngle / 2;
    const totalAngle = extraRotations + (360 - targetAngle); // чтобы вращение заканчивалось на нужном секторе

    wheel.style.transform = `rotate(${totalAngle}deg)`;

    setTimeout(() => {
        const selectedPrize = prizes[randomSector];

        resultText.textContent = selectedPrize;
        modalPrize.textContent = selectedPrize;
        modal.style.display = 'flex';

        isSpinning = false;
        spinBtn.disabled = false;
    }, 3500);
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});