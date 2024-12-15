
let progress = 0;
document.querySelector("#meow").addEventListener("click", () => {
    window.location.href = "meow.html";
  });
 

  


   function updateButtons() {
    document.getElementById("increaseBtn").disabled = progress >= 100;
    document.getElementById("decreaseBtn").disabled = progress <= 0;
  }
  function increaseProgress() {
    if (progress < 100) {
      progress += 10;
      document.getElementById("progressBar").style.width = progress + "%";
    }
    updateButtons(); 
  }

  
  function decreaseProgress() {
    if (progress > 0) {
      progress -= 10;
      document.getElementById("progressBar").style.width = progress + "%";
    }
    updateButtons();
  }
  
 
  function showCat() {
    let catColor = document.getElementById("catColor").value.toLowerCase();
    let catImageDiv = document.querySelector(".cat-image");
    catImageDiv.innerHTML = "";

    if (catColor === "black") {
        catImageDiv.innerHTML = '<img src="blackcat.jpg" alt="Black Cat">';
    } else if (catColor === "white") {
        catImageDiv.innerHTML = '<img src="whitecat.jpg" alt="White Cat">';
    } else if (catColor === "brown") {
        catImageDiv.innerHTML = '<img src="browncat.jpg" alt="Gray Cat">';
    } else {
        catImageDiv.innerHTML = '<p>No matching cat color found!</p>';
    }
}
function showName() {
  let catName = document.getElementById("catName").value;
  let writtenTextDiv = document.querySelector(".writtentext");

  writtenTextDiv.innerHTML = catName ? `Hola,this is  ${catName}` : "Give me a name please 🥺";
}