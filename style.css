let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/\"/g, "&quot;")
             .replace(/'/g, "&#039;");
}

function renderNotes(filterDate = null) {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  const filtered = filterDate ? notes.filter(n => n.date === filterDate) : notes;

  if (filtered.length === 0) {
    notesList.innerHTML = `<p class="text-center text-muted">ไม่พบโน้ต</p>`;
    return;
  }

  filtered.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note-card";
    div.innerHTML = `
      <div class="note-meta">
        🧍‍♂️ <strong>${escapeHtml(note.author)}</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp; 📅 ${note.timestamp}
      </div>
      <div class="note-text">${escapeHtml(note.text)}</div>
      <button class="note-delete-btn" title="ลบโน้ต" onclick="deleteNote(${index})">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    notesList.appendChild(div);
  });
}

function addNote() {
  const input = document.getElementById("note-input");
  const authorInput = document.getElementById("author-input");
  const text = input.value.trim();
  const author = authorInput.value.trim();

  if (!text || !author) {
    alert("กรุณากรอกชื่อและเนื้อหาโน้ตก่อนบันทึก");
    return;
  }

  const now = new Date();
  const timestamp = now.toLocaleString("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const date = now.toISOString().split("T")[0];

  notes.push({ author, text, timestamp, date });
  saveNotes();
  renderNotes();
  input.value = "";
}

function deleteNote(index) {
  if (confirm("ต้องการลบโน้ตนี้หรือไม่?")) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
  }
}

document.getElementById("add-note").addEventListener("click", addNote);
document.getElementById("search-date").addEventListener("input", (e) => {
  renderNotes(e.target.value);
});

renderNotes();
