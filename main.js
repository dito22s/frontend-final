var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = processResponse;
httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/users');
httpRequest.send();

function processResponse() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var jsonData = JSON.parse(httpRequest.responseText);
      console.log(jsonData);
    }
  }
}



fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const userElements = data.slice(0, 6).map((user, index) => {
      const { name, id, email, phone } = user;
      const userElement = document.createElement('div');
      userElement.innerHTML = `<h2 class="nebiName"><u>${name}</u></h2>
                               <div class="nebiDiv">
                                 <h5 class="nebi">ID: ${id}</h5>
                                 <h5 class="nebi">Email: ${email}</h5>
                                 <h5 class="nebi">Phone: ${phone}</h5>
                               </div>`;
      return userElement;
    });

    const logButtons = document.querySelectorAll('.log-button');
    const inp1 = document.querySelector('.inp1');

    logButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        inp1.value = data[index].id;
      });
    });

    const userDivs = document.querySelectorAll('.user-div');
    userDivs.forEach((div, index) => {
      div.appendChild(userElements[index]);
    });
  })
  .catch(error => console.log(error));


function processResponse() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var jsonData = JSON.parse(httpRequest.responseText);
      console.log(jsonData);

      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
          var container = document.getElementById('photoId');

          for (var i = 0; i < 6 && i < photos.length; i++) {
            var photo = photos[i];

            var img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.title;
            img.style.width = '220px';

            container.appendChild(img);
          }
        })
        .catch(error => console.log(error));
    }
  }
}


async function addpost(form){
    const title = form.title.value;
    const body = form.body.value;

    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
}