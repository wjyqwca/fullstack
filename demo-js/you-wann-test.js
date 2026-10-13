var form = document.getElementById('notes_form');

form.onsubmit = (e) => {
    e.preventDefault();   // ⭐ 别忘了

    var data = {
        title: e.target.elements['title'].value,
        content: e.target.elements['content'].value
    };

    fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            console.log('成功:', result);
        })
        .catch(err => {
            console.error('失败:', err);
        });
};