const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('.btn');

const generateJoke = async function () {
    const res = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json'
      },
    });
    const data = await res.json()
    
    joke.innerHTML = data.joke;
        

};

jokeBtn.addEventListener('click', () => {
  generateJoke()
})