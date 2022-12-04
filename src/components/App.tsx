import { Login } from "./Login";
import {
  collection,
  CollectionReference,
  doc,
  setDoc,
} from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../firebase";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";

interface CourtDoc {
  isCovered: boolean;
  isEnabled: boolean;
  name: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export const App = () => {
  const courtsRef = collection(db, "courts") as CollectionReference<CourtDoc>;
  const form = useForm<CourtDoc>({
    initialValues: {
      name: 1,
      isCovered: false,
      isEnabled: true,
    },
  });

  const addTestData = useCallback(async () => {
    await setDoc(doc<CourtDoc>(courtsRef), {
      isCovered: true,
      isEnabled: true,
      name: 1,
    });
  }, []);

  return (
    <span>
      <Login />

      <Button onClick={addTestData}>Add court</Button>
    </span>
  );
};
