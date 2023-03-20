import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import item1 from './../../assets/pictures/500ml.jpg';
import item2 from './../../assets/pictures/750ml.jpg';
import item3 from './../../assets/pictures/copoper.jpg';
import item4 from './../../assets/pictures/xicaraper.jpg';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoTexto}>AS</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuTexto}>Home</Text>
          <Text style={styles.menuTexto}>Produtos</Text>
          <Text style={styles.menuTexto}>Sobre</Text>
        </View>
      </View>
      <View style={styles.items}>
      <Text>Produtos</Text>
        <View style={styles.item}>
          <Image source={item1} style={styles.itemImage} />
          <Text style={styles.itemText}>Garrafa 500ml</Text>
          <Text style={styles.itemPrico}>Preço: R$ 100,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={item2} style={styles.itemImage} />
          <Text style={styles.itemText}>Garrafa 750ml</Text>
          <Text style={styles.itemPrico}>Preço: R$ 200,00</Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <Image source={item3} style={styles.itemImage} />
          <Text style={styles.itemText}>Copo com filtro</Text>
          <Text style={styles.itemPrico}>Preço: R$ 50,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={item4} style={styles.itemImage} />
          <Text style={styles.itemText}>Xícara com filtro</Text>
          <Text style={styles.itemPrico}>Preço: R$ 40,00</Text>
        </View>
      </View>
              <View style={styles.footer}>
        <Text style={styles.footerText}>© Aquashield - Todos os direitos reservados</Text>
        <Text style={styles.footerText}>Contato: contato@aquashield.com.br | (82) 99999-0000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#5ecde0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#5ecde0',
    padding: 10,
    borderRadius: 10,
  },
  logoTexto: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTexto: {
    marginHorizontal: 10,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
  },
  itemImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrico: {
    fontSize: 16,
    color: '#888',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 5,
  },
});
