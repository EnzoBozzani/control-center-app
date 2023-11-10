import database from "../config/config";
import { ref, set, onValue, remove } from 'firebase/database';

export default class NotesService {
    static writeNote(title: string, noteContent: string) {
        set(ref(database, `notes/${title}`), {
            title,
            noteContent
        });
    }

    static getNotes(setNotes) {
        onValue(ref(database, 'notes'), (snapshot) => {
            if (snapshot.exists()) {
                const res = snapshot.val();
                const data = Object.values(res);
                setNotes(data);
            } else {
                setNotes(null);
            }
        })
    }

    static deleteNote(noteTitle: string) {
        remove(ref(database, `notes/${noteTitle}`));
    }
}