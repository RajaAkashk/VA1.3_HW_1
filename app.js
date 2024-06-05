<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

</head>

<body>

  <header class="container py-3">
    <h1 class="display-5 fw-semibold">Priority To-Do List</h1>
  </header>

  <section class="container mb-3">
    <div class="row">

      <div class="input-group">
        <input type="text" id="todoInput" placeholder="Add a new task" class="form-control input-group-lg">
        <select class="form-select form-select-lg" id="selectPriority" aria-label="Default select example">
          <option value="highPriority">High Priority</option>
          <option value="mediumPriority">Medium Priority</option>
          <option value="lowPriority">Low Priority</option>
        </select>
        <button id="addToDoBtn" class="btn btn-primary ">Add</button>
      </div>


    </div>

  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2 class="display-6 fw-medium">High Priority</h2>
          <div id="highPriority"></div>
        </div>

        <div class="col-md-4">
          <h2 class="display-6 fw-medium">Medium Priority</h2>
          <div id="mediumPriority"></div>
        </div>

        <div class="col-md-4">
          <h2 class="display-6 fw-medium">Low Priority</h2>
          <div id="lowPriority"></div>
        </div>
      </div>
    </div>
  </section>

  <script>


    const highPriority = document.getElementById('highPriority')
    const mediumPriority = document.getElementById('mediumPriority')
    const lowPriority = document.getElementById('lowPriority')
    const addToDoBtn = document.getElementById('addToDoBtn')

    addToDoBtn.addEventListener('click', function () {

      const todoInput = document.getElementById('todoInput').value
      const selectPriority = document.getElementById('selectPriority').value;

      const divElement = document.createElement('div');

      divElement.innerHTML = `<div class="card p-3">
      <div class="row">
      <div class="col-md-8 fs-4 fw-normal">${todoInput}</div>
      <button onClick="deleteDiv(this)" class="btn fs-5 fw-normal btn-danger btn-sm col-md-3">Delete</button>
      </div>
      </div>`

      if (selectPriority == "highPriority") {
        highPriority.appendChild(divElement)
      }

      else if (selectPriority == "mediumPriority") {
        mediumPriority.appendChild(divElement)
      }

      else if (selectPriority == "lowPriority") {
        lowPriority.appendChild(divElement)
      }


    })



    function deleteDiv(deleteToDo) {
      const divElement = deleteToDo.parentElement.parentElement
      divElement.remove()
      // console.log(deleteToDo)
      // console.log(divElement)
    }

  </script>


  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
