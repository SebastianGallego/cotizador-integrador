import { collection, getDocs, addDoc } from "firebase/firestore/lite";
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
  const deleteAllData = async () => {
    try {
      //Traigo todos los documentos
      console.log("entra en el usefirestore");
      const allData = await db.collection("poliza").get();
      // Eliminar cada documento encontrado
      console.log(allData);
      allData.forEach(async (doc) => {
        await db.collection("poliza").doc(doc.id).delete();
      });
    } catch (error) {
      setError(error.code);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getData, addData, deleteAllData };
};
