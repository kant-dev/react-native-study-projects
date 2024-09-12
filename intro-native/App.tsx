import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { TitlePage } from './src/components/TitlePage';
import CardProductor from './src/components/CardProductor';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header />
      <View style={styles.productors}>
        <TitlePage/>
        <CardProductor/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 55,
  },
  productors:{
    padding: 10
  },
});
