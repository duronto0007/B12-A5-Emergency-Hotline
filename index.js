// Heart Functionalities
const hearts = document.getElementsByClassName('heart');
const heartCount = document.getElementById('heart-count');
let totalHeart = 0;

for (const heart of hearts) {
  heart.addEventListener('click', function() {
    totalHeart++;
    heartCount.innerText = totalHeart;
     
  });
}