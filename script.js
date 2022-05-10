(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML="Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(function(data){
      appendData(data);
    })
    function appendData(data){

      answer.innerHTML="";
      for(var i=0;i<data.lenght;i++){
        var div=document.createElement("div");
        div.className="contener";
        div.innerHTML='<strong>UserID:<a>'
        +data[i].userld+'</a></strong><strong>id:<a>'
        +data[i].id+'</a></strong><br><strong>title:</strong><a>'
        +data[i].title+'</a><br><strong>body:</strong><a>'
        +data[i].body+'</a><br><br>';
        answer.appendChild(div);
      }
    }
    })
  

  cw2.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(array => {
        answer.innerHTML="";
        array.forEach(post=>answer.innerHTML +=
          `
       <div>
      <ul>
       <li>User: ${post.userId}</br> ID:${post.id}</br> title:${post.title}</br> body:${post.body}</br><li/>
</ul>
</div>
`
                      );
      })
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
