import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Modal} from 'react-native';
import Button from '../Components/Button';

const AppointmentScreen = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const handleBookAppointment = () => {
    setModalVisible(true);
  };

  const handleConfirmAppointment = () => {
    if (name !== '' && date !== '' && time !== '') {
      const appointment = {name, date, time};
      console.log('Cita reservada:', appointment);
      setAppointmentData(appointment);
      setModalVisible(false);
    } else {
      console.log('Por favor, complete todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reserve su cita</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Agendar Cita" onPress={handleBookAppointment} />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          {appointmentData ? (
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Datos de la cita:</Text>
              <Text style={styles.appointmentDataText}>
                Nombre: {appointmentData.name}
              </Text>
              <Text style={styles.appointmentDataText}>
                Fecha: {appointmentData.date}
              </Text>
              <Text style={styles.appointmentDataText}>
                Hora: {appointmentData.time}
              </Text>
              <Button
                title="Cerrar Modal"
                onPress={() => setModalVisible(false)}
              />
            </View>
          ) : (
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                ¿Desea confirmar la reserva de la cita?
              </Text>
              <Button title="Confirmar" onPress={handleConfirmAppointment} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F794D6',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#222',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  appointmentDataText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AppointmentScreen;
