import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroScreen() {
  const manipularCadastro = (values: { email: any; confirmarEmail: any; senha: string|any[]; confirmarSenha: any; }, { setFieldError }: any) => {
    if (values.email !== values.confirmarEmail) {
      setFieldError('confirmarEmail', 'Os e-mails precisam ser iguais');
      return;
    }
    if (values.senha !== values.confirmarSenha) {
      setFieldError('confirmarSenha', 'Senhas diferentes');
      return;
    }
    if (values.senha.length < 6) {
      setFieldError('senha', 'A senha deve ter pelo menos 6 dígitos');
      return;
    }
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.title}>cadastro cliente</Text>
      <Formik initialValues={{ email: '', confirmarEmail: '', senha: '', confirmarSenha: '' }} onSubmit={manipularCadastro}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="E-mail" onChangeText={handleChange('email')}onBlur={handleBlur('email')}
                value={values.email}/>
                {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Confirmar e-mail" onChangeText={handleChange('confirmarEmail')} 
              onBlur={handleBlur('confirmarEmail')}value={values.confirmarEmail}/>
              {errors.confirmarEmail && touched.confirmarEmail && <Text style={styles.errorText}>{errors.confirmarEmail}</Text>}
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Senha" onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} 
              value={values.senha}secureTextEntry={true}/>
              {errors.senha && touched.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Confirmar senha" onChangeText={handleChange('confirmarSenha')} onBlur={handleBlur('confirmarSenha')}
                value={values.confirmarSenha} secureTextEntry={true}/>
              {errors.confirmarSenha && touched.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

          </View>
          
        )}
        
      </Formik>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.8,
    backgroundColor: '#e9e0d1',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: 'rgb(26, 41, 128)',
  },
  button: {
    backgroundColor: '#3CB371',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
 marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
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