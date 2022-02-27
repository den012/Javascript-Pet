//get user name 
const name = prompt("Please enter you name: ");


themeButton = document.getElementById('btn');


themeButton.addEventListener('click', () => {
    console.log("clicked!");
    document.body.classList.toggle('dark');
});


//dog commands
helloBtn = document.getElementById('greet');
barkBtn = document.getElementById('bark');
jokeBtn = document.getElementById('joke');

textBub = document.getElementById('bubble');

greet = document.getElementById('greetUser');
bark = document.getElementById('barkText');
jokeText = document.getElementById('jokeText');

helloBtn.addEventListener('click', () =>{
    barkText.innerHTML = "";
    jokeText.innerHTML = ""
    greet.innerHTML = "Hello " + name + "!!";
    textBub.classList.remove('bubbleOn');
});

barkBtn.addEventListener('click', () =>{
    greet.innerHTML = ""
    jokeText.innerHTML = ""
    barkText.innerHTML = "haam! hamham! <br>hamm! hamm!!👅👅";
    textBub.classList.remove('bubbleOn');
});

async function generateJoke(){
    const config = {
        headers:{
        'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json()
    
    jokeText.innerHTML = data.joke

}

jokeBtn.addEventListener('click', () =>{
    greet.innerHTML = ""
    barkText.innerHTML = "";
    generateJoke();
    textBub.classList.remove('bubbleOn');
});

