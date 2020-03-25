const feed = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://super-secret-cat-feeder-project.herokuapp.com/feed', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      value: 1
    })
  );
};
