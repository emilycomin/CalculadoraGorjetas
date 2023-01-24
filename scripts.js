function calculateTips(event) {
    event.preventDefault();
   let bill = document.getElementById('bill').value;
   let serviceQual = document.getElementById('serviceQuality').value;
   let eachPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0) {
        alert("Por favor preencha os valores")
        return;
    }
    total = (bill * serviceQual)
    total = total.toFixed(2);

    totalEach = (bill * serviceQual) / eachPeople
    totalEach = totalEach.toFixed(2);

    if(eachPeople <= 1 ){
        document.getElementById('tipsvalue').innerHTML = total;
        document.getElementById('totalTips').style.display= "block";
        document.getElementById('totalEachTips').style.display = "none";
    } else {
        document.getElementById('tipsvalue').innerHTML = total;
        document.getElementById('totalTips').style.display= "block";
        document.getElementById('eachTipsValue').innerHTML = totalEach;
        document.getElementById('totalEachTips').style.display = "block";
    }
}

document.getElementById('totalTips').style.display = "none";
document.getElementById('totalEachTips').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTips)