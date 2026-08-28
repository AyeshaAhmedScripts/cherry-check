function openNotebook(categoryName) {
    document.getElementById('modalTitle').innerText = categoryName + " CheckList:";
    document.getElementById('notebookModal').style.display = 'flex';
}

function closeNotebook() {
    document.getElementById('notebookModal').style.display = 'none';
}
