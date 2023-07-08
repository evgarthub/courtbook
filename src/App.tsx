import { Login } from './components/Login';
import {
    collection,
    CollectionReference,
    doc,
    setDoc,
} from 'firebase/firestore';
import { useCallback } from 'react';
import { auth, firestore } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Button } from './components/Button';

interface CourtDoc {
    isCovered: boolean;
    isEnabled: boolean;
    name: string;
}

const createCourtDocData = async (
    number: number,
    courtsRef: CollectionReference<CourtDoc>
) => {
    await setDoc(doc<CourtDoc>(courtsRef, `court${number}`), {
        isCovered: false,
        isEnabled: true,
        name: `Court ${number}`,
    });
};

export const App = () => {
    const [user] = useAuthState(auth);

    const courtsRef = collection(
        firestore,
        'courts'
    ) as CollectionReference<CourtDoc>;

    const [courts] = useCollectionData<CourtDoc>(courtsRef);

    const addTestData = useCallback(async () => {
        await createCourtDocData(9, courtsRef);
    }, [courtsRef]);

    return (
        <span>
            {!user ? (
                <Login />
            ) : (
                <>
                    {courts?.map((c) => (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto auto auto 1fr',
                                gridGap: '15px',
                            }}
                        >
                            <span>Name: {c.name}</span>{' '}
                            <span>
                                Available: {c.isEnabled ? 'ok' : 'inactive'}
                            </span>{' '}
                            <span>Bad weather: {c.isCovered ? '^_^' : ''}</span>
                        </div>
                    ))}
                    <Button onClick={addTestData}>Add court</Button>
                    <Button onClick={() => auth.signOut()}>signOut</Button>
                </>
            )}
        </span>
    );
};
