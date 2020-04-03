import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${
    incident.nome
  } estou entrando em contato pois gostaria de ajudar no cas o ${
    incident.title
  } com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail(params) {
    MailComposer.composeAsync({
      subject: `Herói do caso ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }
  function sendWhatsApp(params) {
    Linking.openURL(`whatsapp://send?phone=5511975198677&text=${message}`); // ATENCAO em casos reais deve se elvar em consideração a utilização de variaves de telefone.
  }
  return (
    <View style={styles.container}>
      {/*DETAILS header jsx*/}
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.caso}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG</Text>
        <Text style={styles.incidentValue}>
          {incident.nome} de {incident.city}, {incident.uf}
        </Text>
        <Text style={styles.incidentProperty}>CASE</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>
        <Text style={styles.incidentProperty}>VALUE</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve the day.</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>
        <Text style={styles.heroDescription}>Contact</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.copyRightBox}>
        <Text style={styles.copyRight}>
          Omni Week By RocketSeat © / Jose Ivan Reproduction
        </Text>
      </View>
    </View>
  );
}
