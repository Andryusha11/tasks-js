const generateNumbersRange = (from, to) => {
  const result = [];

  for (let index = from; index <= to; index++) {
    result.push(index);
  }

  return result;
};

const getLineSeats = () => {
  return generateNumbersRange(1, 10)
    .map((seatNumber) => {
      return `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`;
    })
    .join('');
};

const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map((lineNumber) => {
      return `<div class="sector__line" data-line-number="${lineNumber}">${seatsString}</div>`;
    })
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map((sectorNumber) => {
      return `<div class="sector" data-sector-number="${sectorNumber}">${linesString}</div>`;
    })
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
