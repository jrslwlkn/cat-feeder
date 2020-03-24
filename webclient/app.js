const feed = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3001/feed', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      value: 1
    })
  );
};
