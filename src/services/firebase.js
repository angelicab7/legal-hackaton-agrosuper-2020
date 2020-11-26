import firebase from '../index';
const db = firebase.firestore();

export const idCurrenTime = () => {
  let idDate = new Date();
  const hours = (idDate.getHours() < 10 ? '0' : '') + idDate.getHours();
  const minutes = (idDate.getMinutes() < 10 ? '0' : '') + idDate.getMinutes();
  const seconds = (idDate.getSeconds() < 10 ? '0' : '') + idDate.getSeconds();
  idDate = `${hours}:${minutes}:${seconds}`;
  return idDate;
};

// Guarda la hora en la que es creada la solicitud
idCurrenTime();

// Guarda la fecha en la que es creada la solicitud
export const currentDate = () => {
  let date = new Date();

  const day = date.getDate();
  const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();

  date = `${year}/${month}/${day}`;
  return date;
};
// Envia las solicitudes al Firebase
export const saveData = () =>
  db.collection('contratos').doc(`${idCurrenTime()}`).set({
    date: currentDate(),
    hora: idCurrenTime(),
  });
