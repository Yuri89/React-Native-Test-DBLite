import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SQLiteProvider } from 'expo-sqlite/next';
import { databaseInit } from './src/database/databaseInit';
import { ScreenMain } from './src/screenMain';


export default function App() {

  
  return (
    <GestureHandlerRootView style={{flex:1,paddingHorizontal:10,backgroundColor:"#252525"}}>
      <SQLiteProvider databaseName='userregister.db' onInit={databaseInit}>
          <ScreenMain/>
      </SQLiteProvider>
    </GestureHandlerRootView>
  );
}


