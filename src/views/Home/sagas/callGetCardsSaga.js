import {doc} from '../../../config/firebase';
import { put } from "redux-saga/effects";
import {homeActions} from '../slice/homeSlice';
import { onSnapshot } from 'firebase/firestore';

export const getCards = async () => {
    const data = await onSnapshot(doc);
    console.log(data);
    return data.docs.map((doc) => (doc.data()));
}

export default function* callGetCardsSaga() {
    let newCards = []
    try {
        const response = yield new Promise(getCards);
        console.log(response);
        // yield onSnapshot(doc, (snapshot) => {
        //     newCards = [];
        //     snapshot.docs.forEach(doc => {
        //         newCards.push(doc.data());
        //     });
            
        // });
        yield put(homeActions.saveCards(newCards));
    } catch (err) {
        console.error(err);
    }
}