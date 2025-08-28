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

// Call Buttons functionalities
let coins = 100;
const costPerCall = 20;

const callButtons = document.getElementsByClassName('make-call');
const totalCoins = document.getElementById('total-coins');
const callHistoryList = document.getElementById('call-history');

for(const button of callButtons){
    button.addEventListener('click', function(){
       const serviceName = button.parentNode.parentNode.parentNode.children[1].innerText
       const serviceNumber = button.parentNode.parentNode.parentNode.children[3].innerText
    //    console.log(serviceNumber);
      if(coins < costPerCall){
        alert('Not enough coins available to make this call')
        return;
      }
      coins = coins - costPerCall;
      totalCoins.innerText = coins;
       
      alert(`Calling ${serviceName} at ${serviceNumber}`)

      const now = new Date();
      const time = now.toLocaleTimeString();

      const callingHistory = document.createElement('div');
      callingHistory.innerHTML = `<div id="call-history" class="p-4 bg-gray-100 shadow mt-3">
                <h2 class="font-bold">${serviceName}</h2>
                <div class="flex justify-between">
                    <h1>${serviceNumber}</h1>
                    <p>${time}</p>
                </div>
            </div>`

        callHistoryList.appendChild(callingHistory);

    });
    
}
const clearButton = document.getElementById('btn-clear').addEventListener('click', function(){
    callHistoryList.innerText = "";
})

// copy button functionalities 
let copyCount = 0;
const totalCopyCount = document.getElementById('copy-count');
const copyButtons = document.getElementsByClassName('copy-btn');
for(button of copyButtons){
    button.addEventListener('click', function(){
        const cardElement = this.parentNode.parentNode.parentNode.children[3].innerText;
        console.log(cardElement);
        
        navigator.clipboard.writeText(cardElement).then(() =>{
            alert(`Number ${cardElement} copied to clipboard`)
        })
        copyCount++;
        totalCopyCount.innerText = copyCount;
    })
}