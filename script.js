let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <div class="meta">
        🧍‍♂️ <strong>${note.author}</strong> <br>
        📅 ${note.timestamp}
      </div>
      ${note.text}
      <button onclick="deleteNote(${index})">ลบ</button>
    `;
    notesList.appendChild(div);
  });
}

function addNote() {
  const input = document.getElementById("note-input");
  const authorInput = document.getElementById("author-input");
  const noteText = input.value.trim();
  const authorName = authorInput.value.trim();

  if (noteText && authorName) {
    const now = new Date();
    const timestamp = now.toLocaleString('th-TH', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const note = {
      text: noteText,
      author: authorName,
      timestamp: timestamp
    };

    notes.push(note);
    saveNotes();
    renderNotes();
    input.value = "";
  } else {
    alert("กรุณากรอกชื่อและเนื้อหาโน้ตก่อนบันทึก");
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

document.getElementById("add-note").addEventListener("click", addNote);
renderNotes();
