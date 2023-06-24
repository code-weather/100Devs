document.querySelector('#check').addEventListener('click', check);

function check() {
  const day = document.querySelector('#day').value;

  //Conditionals go here
  if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
    document.getElementById('placeToSee').innerHTML = "It's the weekend";
  } else if (day == 'Tuesday' || day == 'Thursday') {
    document.getElementById('placeToSee').innerHTML = 'Class time';
  } else if (day === 'Monday' || day === 'Wednesday') {
    document.getElementById('placeToSee').innerHTML = "It's the weekend";
  } else {
    document.getElementById('placeToSee').innerHTML = 'Input a date';
  }
}
