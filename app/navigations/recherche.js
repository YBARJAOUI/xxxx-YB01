import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    // Ici, vous pouvez implémenter la logique de recherche en fonction du texte saisi
    console.log('Texte de recherche:', text);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
       
       {/* <Icon name="magnify" type="material-community" color="grey" style={{position:'relative',}}/> */}
      <TextInput
      
        style={styles.input}
        placeholder="Recherche..."
        value={searchText}
        onChangeText={handleSearch}
        // inlineImageLeft='search_icon'
        // inlineImagePadding={120}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingHorizontal:30
  },
  input: {
    height: 49,
    width:302,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});

export default SearchBar;
