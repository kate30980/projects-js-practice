const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote() {
  const note = docue.createElement("div");
  note.classList.add("note");

  note.innerHTML = `    
    <div class="notes">
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden">
    </div>
    <textarea></textarea>
    </div>`;
  document.body.appendChild("note");

  const notesEl = note.querySelector(".notes");
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = notesEl.querySelector(".main");
  const textArea = notesEl.querySelector("textarea");

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
  });
}
