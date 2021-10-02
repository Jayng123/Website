function myFunction(){
    document.getElementById("but").innerHTML = "Paid";
}




document.getElementById('Join-button').addEventListener('click',
function() {
  document.querySelector('.modal').style.display = 'block';
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navlinks.classList.toggle('active')
})