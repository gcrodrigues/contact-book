import React, { useState, useEffect } from "react";
import { Container, Header, Title, Total, Content } from "./styles";
import SearchBar from "./components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import api from "../../services/api";
// import { View, Text } from "react-native";
import Contact from "./components/Contact";
import RgbGenerator from "../../utils/RgbGenerator";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("contact");
      setContacts(response.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Phone</Title>
        <Total>{contacts.length} contacts</Total>
      </Header>
      <SearchBar />
      <Content>
        <FlatList
          style={{ marginBottom: 45 }}
          data={contacts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(contact) => String(contact.id)}
          renderItem={({ item: contact }) => (
            <Contact
              color={RgbGenerator}
              name={contact.name}
              phone={contact.phone}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
