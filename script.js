// Function to store user preference
function savePreference() {
    const color = document.getElementById("colorInput").value;
    localStorage.setItem("buttonColor", color); // Store the color in localStorage
    document.getElementById("myButton").style.backgroundColor = color; // Apply to button
  }
  
  // Function to apply stored preferences when the page loads
  function loadPreference() {
    const savedColor = localStorage.getItem("buttonColor");
    if (savedColor) {
      document.getElementById("myButton").style.backgroundColor = savedColor; // Apply saved color
    }
  }
  
  // Trigger the save function when the user clicks the button
  document.getElementById("saveButton").addEventListener("click", savePreference);
  
  // Load saved preferences when the page is ready
  window.onload = loadPreference;
  