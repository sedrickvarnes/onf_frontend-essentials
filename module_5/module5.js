
fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://random-d.uk/api/random'))
  .then(response => response.json())
  .then(data => {
    const json = JSON.parse(data.contents);
    const container = document.getElementById('duck_container');

    container.style.backgroundImage = `url('${json.url}')`;
  })
  .catch(err => console.error('Fikk ikke bildet:', err, ' prøve igjen senere.'));

function newDuck() {
  const container = document.getElementById('newDuck');
  const loading = document.getElementById('loading');

  loading.style.display = 'block';

  fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://random-d.uk/api/random'))
    .then(response => response.json())
    .then(data => {
      const json = JSON.parse(data.contents);
      container.style.backgroundImage = `url('${json.url}')`;
      container.classList.add('add-border');
      
      setTimeout(() => {}, 2000); // bare for å simulere lastetid
     
      loading.style.display = 'none';
      
    })
    .catch(err => console.error('Fikk ikke dette bildet heller :(', err, ' prøve igjen senere.'))

}




