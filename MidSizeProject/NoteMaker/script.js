const btn = document.querySelector("#btn");
const app = document.querySelector(".app-container");


getNotes().forEach((note)=>{
    const noteEl = createNoteEl(note.id , note.content);
    app.insertBefore(noteEl , btn)
})

btn.addEventListener("click" , addNote);

function addNote(){
    const notes = getNotes();
    const noteObj = {
        id : Math.floor(Math.random()* 10000000),
        content : "",
    };
    const noteEl = createNoteEl(noteObj.id , noteObj.content);
    app.insertBefore(noteEl , btn)

    notes.push(noteObj);
    saveNote(notes);
}

function saveNote(notes){
    localStorage.setItem("note-app" , JSON.stringify(notes))
}

function getNotes(){
 return JSON.parse(localStorage.getItem("note-app") || " [] ")
}

function createNoteEl(id , content){
    const element  = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you want to delete this note ? ")
        if(warning){
            deleteNote(id , element)
        }
    })


    element.addEventListener("input" , ()=>{
        updateNote(id , element.value)
    })

    return element;

}

function deleteNote(id , element){
    const notes = getNotes().filter((note)=>note.id != id)
    saveNote(notes)
    app.removeChild(element);
}
function updateNote(id , content){
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}
