import { addDoc } from "firebase/firestore";
import {doc} from '../../../config/firebase';

export default function* callAddCardSaga({payload}) {
    try {
        yield addDoc(doc, {title: payload})
    } catch (err) {
        console.error(err);
    }
};