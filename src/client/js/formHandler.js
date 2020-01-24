function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let data ={ articleText: document.getElementById('article').value }

    console.log("::: Form Submitted :::")
    fetch('/api/sentiment', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(function (res) {
        console.log(res);
        document.getElementById('polarity').innerHTML = res.result.polarity;
        document.getElementById('subjectivity').innerHTML = res.result.subjectivity;
        document.getElementById('polarity_confidence').innerHTML = res.result.polarity_confidence;
        document.getElementById('subjectivity_confidence').innerHTML = res.result.subjectivity_confidence;
    })
    .catch(error => {
        console.log(error);
        document.getElementById('table').innerHTML = '';
        document.getElementById('error').innerHTML = error;
    })
}

export { handleSubmit }
