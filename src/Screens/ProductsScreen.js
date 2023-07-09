import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

const ProductsScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Kit de maquillaje de ojos NYX',
      price: '$50',
      promotion: '¡20% de descuento en tu primera compra!',
      imageUrl: 'https://acortar.link/1r5Hz6',
    },
    {
      id: 2,
      name: 'Base de maquillaje Rimmel London',
      price: '$55',
      promotion: 'Recibe una muestra gratis de corrector con tu compra',
      imageUrl: 'https://acortar.link/SshVCD',
    },
    {
      id: 3,
      name: 'Crema diurna Clarins',
      price: '$30',
      promotion: '¡Compra dos cremas y obtén la tercera a mitad de precio!',
      imageUrl: 'https://acortar.link/KT8EBs',
    },
    {
      id: 4,
      name: 'Limpiador gel de agua Neutrogena',
      price: '$80',
      promotion: 'Ahorra un 10% en la compra de dos o más productos Neutrogena',
      imageUrl: 'https://acortar.link/RCd6TJ',
    },
    {
      id: 5,
      name: 'Vaporizador para limpieza de cutis',
      price: '$95',
      promotion: '¡Lleva un vaporizador y recibe un tónico facial gratis!',
      imageUrl: 'https://acortar.link/BwTs9j',
    },
    {
      id: 6,
      name: 'Cuidado facial para hombre de L’Oreal',
      price: '$100',
      promotion: 'Compra dos productos para hombre y recibe un regalo sorpresa',
      imageUrl: 'https://acortar.link/zWIGTP',
    },
    {
      id: 7,
      name: 'Limpiador facial ultrasónico',
      price: '$89',
      promotion: '¡Envío gratis en todas las compras de limpiadores faciales!',
      imageUrl: 'https://acortar.link/mRmKyi',
    },
    {
      id: 8,
      name: 'Limpiador de poros',
      price: '$150',
      promotion: 'Ahorra un 15% en el set completo de limpiador de poros',
      imageUrl: 'https://acortar.link/9XyC6R',
    },
    {
      id: 9,
      name: 'Cofre de regalo Rituals',
      price: '$98',
      promotion:
        '¡Obtén un 20% de descuento en el cofre de regalo para ocasiones especiales!',
      imageUrl: 'https://acortar.link/UFZc1h',
    },
    {
      id: 10,
      name: 'Crema remodeladora y reafirmante NIVEA Q10 Plus',
      price: '$180',
      promotion: 'Recibe una crema de manos de regalo con tu compra',
      imageUrl: 'https://acortar.link/fxAPpu',
    },
    {
      id: 11,
      name: 'Crema hidratante CeraVe para pieles muy secas',
      price: '$200',
      promotion:
        '¡Lleva dos cremas hidratantes y obtén un protector solar de regalo!',
      imageUrl: 'https://acortar.link/mMazoi',
    },
    {
      id: 12,
      name: 'Set de ocho brochas Anjou',
      price: '$60',
      promotion: 'Ahorra un 10% en la compra de dos o más sets de brochas',
      imageUrl: 'https://acortar.link/BGlAzf',
    },
    {
      id: 13,
      name: 'Milkshake Incredible Milk',
      price: '$88',
      promotion:
        '¡Obtén un 15% de descuento en todos los productos de la marca Milkshake!',
      imageUrl: 'https://acortar.link/A6TlgP',
    },
    {
      id: 14,
      name: 'Cepillo contra tirones Tangle Teezer',
      price: '$85',
      promotion:
        'Compra un cepillo y obtén un 10% de descuento en tu siguiente compra',
      imageUrl: 'https://acortar.link/wqMFDN',
    },
    {
      id: 15,
      name: 'Pinzas de depilar Tweezerman',
      price: '$250',
      promotion:
        'Recibe un estuche de viaje de regalo con la compra de las pinzas Tweezerman',
      imageUrl: 'https://acortar.link/91iEVE',
    },
    {
      id: 16,
      name: 'Set de ocho recambios de maquinilla Venus',
      price: '$220',
      promotion:
        '¡Compra un set de recambios y lleva un gel de afeitado gratis!',
      imageUrl: 'https://acortar.link/TxNL2h',
    },
    {
      id: 17,
      name: 'Depiladora de luz pulsada',
      price: '$215',
      promotion:
        'Ahorra un 10% en la compra de la depiladora y su estuche de almacenamiento',
      imageUrl: 'https://acortar.link/wNRFPy',
    },
    {
      id: 18,
      name: 'Kit de cuatro cuchillas de recambio Gillette',
      price: '$190',
      promotion:
        '¡Obtén un 15% de descuento en todas las compras de cuchillas Gillette!',
      imageUrl: 'https://acortar.link/NVCl5A',
    },
    {
      id: 19,
      name: 'Máquina cortapelos Philips',
      price: '$150',
      promotion:
        'Recibe un peine guía de regalo con la compra de la máquina cortapelos Philips',
      imageUrl: 'https://acortar.link/dzOJsi',
    },
    {
      id: 20,
      name: 'Secador de pelo iónico Remington',
      price: '$110',
      promotion:
        '¡Ahorra un 20% en el secador de pelo Remington usando el código "SECADOR20"!',
      imageUrl: 'https://acortar.link/HMhigz',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Image source={{uri: item.imageUrl}} style={styles.itemImage} />
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemPromotion}>{item.promotion}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos y Promociones</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  item: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EDEDED',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D7E00',
  },
  itemPromotion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ProductsScreen;
