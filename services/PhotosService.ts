import database from "../config/config";
import { ref, set, onValue, remove } from 'firebase/database';

export default class PhotosService {
    static savePhoto(url: string) {
        const id = Date.now().toString();
        set(ref(database, `photos/${id}`), {
            id,
            photoUrl: url
        });
    }

    static getPhotos(setPhotos) {
        onValue(ref(database, 'photos'), (snapshot) => {
            if (snapshot.exists()) {
                const res = snapshot.val();
                const data = Object.values(res);
                setPhotos(data);
            } else {
                setPhotos(null);
            }
        })
    }

    static deletePhoto(url: string) {
        remove(ref(database, `photos/${url}`));
    }
}