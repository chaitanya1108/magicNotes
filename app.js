showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", () => {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html='';
    notesObj.forEach((element,index)=>{
        html+=`
        <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-warning">Delete Node</button>
                </div>
              </div>`;
    });
    let notesElem= document.getElementById('notes');
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML=`Nothing to show! Use "Add a note" section above to add notes.`;
    }
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}