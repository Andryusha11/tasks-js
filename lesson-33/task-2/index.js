const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  fetch(baseUrl).then((res) => res.json());
}

function getTaskById(taskId) {
  fetch(`${baseUrl}/${taskId}`).then((res) => res.json());
}
