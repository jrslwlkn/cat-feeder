const feed = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://mighty-shore-41950.herokuapp.com/feed', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      value: 1
    })
  );
};
