let display = document.getElementById("display");

window.addEventListener('load', 
     fetchJoke = async () => {
  try {
    let response = await fetch(
      "https://hindi-jokes-api.onrender.com/jokes?api_key=5793e0fc639ac0b22e6a985347cf"
    );
    let data = await response.json();
    console.log(data);
    let jokes = data.jokeContent;
    display.innerHTML = jokes;
  } catch (error) {
    console.error("Error fetching joke:", error);
    display.innerHTML = "Failed to fetch a joke. Please try again.";
  }
}
)
