gsap.from("#top", {y:-200, duration:2,  ease:"power1.out"})
gsap.fromTo('#btn', { opacity: 0, scale: 0}, { duration: 1, opacity: 1, scale: 1 })

const par = document.querySelector("#par");
const button = document.querySelector("#btn");

const quotes = [  "«Whatever the mind of man can conceive and believe, it can achieve». - Napoleon Hill",
    "«Life is 10% what happens to me and 90% of how I react to it». - Charles Swindoll",
    "«It does not matter how slowly you go as long as you do not stop». - Confucius",
    "«When everything seems to be going against you, remember that the airplane takes off against the wind, not with it». - Henry Ford",
    "«Too many of us are not living our dreams because we are living our fears». - Les Brown",
    "«Don't be afraid to give up the good to go for the great». - John D. Rockefeller",
    "«Always bear in mind that your own resolution to success is more important than any other one thing». - Abraham Lincoln",
    "«It is during our darkest moments that we must focus to see the light». - Aristotle",
    "«Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference». - Robert Frost"
]
button.addEventListener ("click", 
function () {
    let randomQuoter = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuoter;
})







