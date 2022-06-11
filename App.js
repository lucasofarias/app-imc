import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState("");
  
  const toggleSwitch = () => setGenero(previousState => !previousState);

  const handleCalcular = () => {

    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if(genero) { // se for masculino
      if(imc < 20.7) {
        return Alert.alert(
          "Abaixo do peso",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado abaixo do peso.`
        );
      }
      if(imc >= 20.7 && imc <= 26.4) {
        return Alert.alert(
          "Peso normal",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado normal.`
        )
      }
      if(imc > 26.4 && imc <= 27.8) {
        return Alert.alert(
          "Um pouco acima do peso",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado um pouco acima do peso.`
        )
      }
      if(imc > 27.8 && imc <= 31.1) {
        return Alert.alert(
          "Acima do peso",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado acima do peso.`
        )
      }
      if(imc > 31.1) {
        return Alert.alert(
          "Obesidade",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado obesidade.`
        )
      }
    }

    else {
      if(imc < 19.1) {
        return Alert.alert(
          "Abaixo do peso",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado abaixo do peso.`
        );
      }
      if(imc >= 19.1 && imc <= 25.8) {
        return Alert.alert(
          "Peso normal",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado normal.`
        )
      }
      if(imc > 25.8 && imc <= 27.3) {
        return Alert.alert(
          "Um pouco acima do peso",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado um pouco acima do peso.`
        )
      }
      if(imc > 27.3 && imc <= 32.3) {
        return Alert.alert(
          "Acima do peso",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado acima do peso.`
        )
      }
      if(imc > 32.3) {
        return Alert.alert(
          "Obesidade",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado obesidade.`
        )
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <View style={styles.titleView}>
        <Text style={styles.title}>Calculadora de IMC</Text>
      </View>
      
      <Text style={styles.selectGenre}>Selecione o seu gênero</Text>

      <View style={styles.inputGenre}>
        <Text style={styles.text}>Feminino</Text>
        <Switch
          trackColor={{ false: "#F0F", true: "#00F" }}
          thumbColor={genero ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text style={styles.text}>Masculino</Text>
      </View>
      
      <Text style={styles.text}>Altura (cm)</Text>
      <TextInput style={styles.input} keyboardType='number-pad' value={altura} onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}/>
      
      <Text style={styles.text}>Peso (kg)</Text>
      <TextInput style={styles.input} keyboardType='number-pad' value={peso} onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}/>
          
      <TouchableOpacity onPress={handleCalcular} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 60,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  selectGenre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputGenre: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  input: {
    height: 54,
    width: '70%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    backgroundColor: 'orangered',
    height: 60,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  }
});
