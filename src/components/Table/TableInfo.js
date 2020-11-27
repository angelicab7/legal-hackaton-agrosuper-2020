import React, { useState } from 'react';import { DataGrid} from '@material-ui/data-grid';
import firebase from 'firebase/app';
import { QueryBuilder } from '@material-ui/icons';

const columns = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'date', headerName: 'Fecha', width: 170 },
  { field: 'fullName', headerName: 'Nombre del solicitante', width: 200 },
  { field: 'email', headerName: 'Correo del solicitante', width: 200 },
  { field: 'lawyer', headerName: 'Abogado asignado', width: 340 }
];

export default function TableInfo() {
    const [rows, setrows] = useState([])
    const db = firebase.firestore();
    
    let queryRef = db.collection('pedidos').orderBy('date')
    queryRef.get().then(function(querySnapshot) {
        let aux = []
        querySnapshot.forEach(function(doc) {
            aux.push({
                id: doc.id,
                date: doc.data().date,
                fullName: doc.data().userRequest,
                email: doc.data().userEmail,
                lawyer: doc.data().dependencyType.split(",")[1]
            })
            console.log(doc.id, ' => ', doc.data());
        });
        setrows(aux)
    });
  return (
    <div className='TableList'>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
