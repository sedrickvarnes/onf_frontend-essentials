async function startDuck() {
  try {
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://random-d.uk/api/random'));
    const data = await response.json();
    const json = JSON.parse(data.contents);

    const container = document.getElementById('duck_container');
    container.style.backgroundImage = `url('${json.url}')`;
    container.classList.add('add-border');
  } catch (err) {
    console.error('Fikk ikke bildet:', err, 'prøve igjen senere.');
  }
}

async function newDuck() {
  const container = document.getElementById('newDuck');
  const loading = document.getElementById('loading');

  loading.style.display = 'block';

  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sek

  try {
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://random-d.uk/api/random'));
    const data = await response.json();
    const json = JSON.parse(data.contents);

    container.style.backgroundImage = `url('${json.url}')`;
    container.classList.add('add-border');
  } catch (err) {
    console.error('Fikk ikke dette bildet heller :(', err, 'prøve igjen senere.');
  } finally {
    loading.style.display = 'none';
  }
}


startDuck();
