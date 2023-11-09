import { SetStateAction } from "react";
import database from "../config/config";
import { ref, set, onValue } from 'firebase/database';

export default class NotesService {
    static writeNote(title: string, noteContent: string) {
        set(ref(database, `notes/${title}`), {
            title,
            noteContent
        });
    }

    static getNotes(setNotes) {
        onValue(ref(database, 'notes'), (snapshot) => {
            const res = snapshot.val();
            const data = Object.values(res);
            setNotes(data);
        })
    }
}