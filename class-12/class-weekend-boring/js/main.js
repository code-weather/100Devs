document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === 'Friday' || day === "Saturday" || day === "Sunday") {
    console.log('It\'s a weekend');
    document.getElementById('#placeToSee').innerText = "It's the weekend"
  } else if (day == "Tuesday" || day == "Thursday") {
    console.log("Class time");
  } else if (day === 'Monday' || day === 'Wednesday') {
    console.log("Boring!!");
  } else {
    console.log('Please input a day of the week');
  }

}
