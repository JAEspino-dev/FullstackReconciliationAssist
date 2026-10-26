let statusApproved = document.getElementsByClassName("updateApproval");
let deleteButton = document.getElementsByClassName("deleteButton");
let paid = document.getElementsByClassName("paidOut");

Array.from(deleteButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const dataSetID = this.dataset.msgId
    console.log(dataSetID)
    fetch('deleteItem', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'collectionDocumentID': dataSetID
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


Array.from(statusApproved).forEach(function (element) {
  element.addEventListener('click', function () {
    const dataSetID = this.dataset.msgId
    console.log(dataSetID)
    fetch('updateToApproved', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'collectionDocumentID': dataSetID
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        // Reload page
        window.location.reload(true)
      })
  });
});

Array.from(paid).forEach(function (element) {
  element.addEventListener('click', function () {
    const dataSetID = this.dataset.msgId
    console.log(dataSetID)
    fetch('updateToCheckWritten', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'collectionDocumentID': dataSetID
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        // Reload page
        window.location.reload(true)
      })
  });
});
