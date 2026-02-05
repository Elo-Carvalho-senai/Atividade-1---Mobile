import React from "react";
import {View, Text, Image, StyleSheet, ScrollView}from "react-native";


const noticias = () =>{
    return(
      <ScrollView>

        <View style={styles.body}>
          <Text style={styles.titulo}>Notícias</Text>
          <Image
            source={require("../assets/img/logo.png")}
            style={styles.logo} />
          <Text style={styles.subtitulo}>Seu canal de notícias oficial!</Text>
          <Text style={styles.subtitulo}>Grid de Notícias</Text>
          
          <View style={styles.card}>
            <Image
            source={require("../assets/images/noticia.png")}
            style={styles.imagem} />
          <Text style={styles.texto}>Invicto contra o Corinthians em 2025, São Paulo tenta melhorar em clássicos</Text>
          </View>

          <View style={styles.card}>
          <Image
            source={require("../assets/images/noticia2.jpg")}
            style={styles.imagem} />
          <Text style={styles.texto}>Cantos homofóbicos: São Paulo faz proposta de acordo ao STJD</Text>
          </View>

          <View style={styles.card}>
          <Image
            source={require("../assets/images/noticia3.avif")}
            style={styles.imagem} />
          <Text style={styles.texto}>Cantos homofóbicos: São Paulo faz proposta de acordo ao STJD</Text>
        </View>
        </View>
      </ScrollView>
    );
};


const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#cf3232ff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
  fontFamily: "sans-serif", // Android,
  },

  texto: {
    fontSize: 15,
    color: "#000000ff",
    marginBottom: 20,
  fontFamily: "System", // iOS
  },
  
  subtitulo: {
    fontSize: 15,
    color: "#fff",
    marginBottom: 20,
    fontFamily: "Arial",
  },

logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  card: {
  backgroundColor: "#ffffff",
  borderRadius: 10,
  padding: 10,
  marginBottom: 15,

  // sombra android
  elevation: 5,

  // sombra ios
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
},

imagem: {
  width: "100%",
  height: 180,
  borderRadius: 10,
  marginBottom: 10,
},

});



export default noticias;