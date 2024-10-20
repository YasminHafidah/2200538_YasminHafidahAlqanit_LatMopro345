import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  header: {
    fontWeight: 'bold',  
    fontSize: 20,         
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoWelcome: {
    width: 105,
    height: 185,
    marginBottom: 20,
    marginTop: 150,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center',
    marginTop:40
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonWelcome: {
    backgroundColor: '#495E57',
    padding: 10,
    borderRadius: 8,
    paddingHorizontal: 100,
    width: '80%',         
    alignSelf: 'center',
    alignItems: 'center',    
    justifyContent: 'center',
    position: 'absolute',  
    bottom: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoSubscribe: {
    width: 100,
    height: 120,
    marginBottom: 30, 
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
   buttonSubscribe: {
    backgroundColor: '#495E57',
    padding: 10,
    borderRadius: 8,
    paddingHorizontal: 100,
    width: '80%',         
    alignSelf: 'center',
    alignItems: 'center',    
    position: 'absolute',  
    marginTop: 350,
  },
});
