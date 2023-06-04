
fetch("http://localhost:3001/listcontacts")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Обработка полученных данных
    console.log(data);
  })
  .catch(error => {
    // Обработка ошибок
    console.error('Error:', error);
  });