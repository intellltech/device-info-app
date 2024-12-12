import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Join'>;

const JoinScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Greenbay</Text>
      <Text style={styles.face}>😀</Text>
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => navigation.navigate('DeviceInfo')}
      >
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 130,
  },
  face: {
    fontSize: 100,
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
