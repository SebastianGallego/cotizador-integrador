import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState({});

  useEffect(() => {
    //Lee de la BD
    getData();
  }, []);

  //Leer de la BD
  const getData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "polizas"));
      const dataDB = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataDB);
    } catch (error) {
      console.log(error);
      setError(error.code);
    } finally {
      setLoading(false);
    }
  };

  //Escribir en la BD
  const addData = async ({
    fecha,
    propiedad,
    ubicacion,
    metros2,
    cotizacion,
  }) => {
    try {
      setLoading(true);
      console.log(cotizacion);
      //Guarda en la BD generando un id automatico
      await addDoc(collection(db, "polizas"), {
        fecha: fecha,
        propiedad: propiedad,
        ubicacion: ubicacion,
        superficie: metros2,
        cuota: cotizacion,
      });
    } catch (error) {
      setError(error.code);
    } finally {
      setLoading(false);
    }
  };

  //Eliminar todos los documentos (filas )de la collecion (tabla)
  const deleteData = async (id) => {
    try {
      //Traigo todos los documentos
      console.log("entra en el usefirestore");
      setLoading(true);
      await deleteDoc(doc(db, "polizas", id)); //Borro de Firestore
      //Lo borro del estado para no volver a pedir a firestore
      setData(data.filter((poliza) => poliza.id !== id));
    } catch (error) {
      setError(error.code);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getData, addData, deleteData };
};
