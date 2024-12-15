document.querySelector("#meow").addEventListener("click", () => {
    window.location.href = "meow.html";
  });
 

  
  let progress = 0;


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

 
  updateButtons();
