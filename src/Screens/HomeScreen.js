import React from 'react';
import {View, Text, Image} from 'react-native';
import commonStyles from '../Styles/commomStyles';
import Button from '../Components/Button';

const HomeScreen = ({navigation}) => {
  const navigateToProducts = () => {
    navigation.navigate('Productos');
  };

  const navigateToAppointment = () => {
    navigation.navigate('Cita');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.welcomeText}>
        Bienvenidos al salon de belleza Greydi&Blanca!
      </Text>
      <Image
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/40/40739.png'}}
        style={{width: 200, height: 200, borderRadius: 10}}
      />
      <Text style={commonStyles.promotionText}>
        Consigue un 20% de descuento en tu primera visita
      </Text>
      <Button title="Ver Productos" onPress={navigateToProducts} />
      <Button title="Registrar Cita" onPress={navigateToAppointment} />
    </View>
  );
};

export default HomeScreen;
