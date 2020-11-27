import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import firebase from 'firebase/app';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'date', headerName: 'Fecha', width: 170 },
  { field: 'fullName', headerName: 'Nombre del solicitante', width: 200 },
  { field: 'email', headerName: 'Correo del solicitante', width: 200 },
  { field: 'lawyer', headerName: 'Abogado asignado', width: 340 },
];

export default function TableInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setrows] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const queryRef = db.collection('pedidos').orderBy('date');
    queryRef.get().then((querySnapshot) => {
      const aux = [];
      querySnapshot.forEach((doc) => {
        aux.push({
          id: doc.id,
          date: doc.data().date,
          fullName: doc.data().userRequest,
          email: doc.data().userEmail,
          lawyer: doc.data().dependencyType.split(',')[1],
        });
        console.log(doc.id, ' => ', doc.data());
      });
      setIsLoading(false);
      setrows(aux);
    });
  }, []);

  return (
    <div className="TableList">
      {isLoading ? (
        <Box display="flex" width="100%" justifyContent="center">
          <CircularProgress fontSize="large" />
        </Box>
      ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
    </div>
  );
}
