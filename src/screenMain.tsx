import { Controller, useForm } from 'react-hook-form';
import { Button, Keyboard, ScrollView, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { UserCreateDatabase, UserResponseDatabase, useUserRepository } from './database/useUserRepository';
import { CardScroll } from './components/CardScroll';


export type UserResponseProps = {
  id: string
  name:string
  email:string
  password:string
  current: number
}[]

export const Titulo = styled.Text`
  font-size: 30px;
  color: white;
  padding: 10px;
`

export function ScreenMain() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  })

  const user = useUserRepository()
  
  const [users, setUsers] = useState<UserResponseProps>([])

  async function onSubmit (data:UserCreateDatabase){
      try{
        user.create(data)
        fetchUsers()
        Keyboard.dismiss()
      console.log(data)
    }catch{
      console.log("não foi possivel cadastrar:"+data)
    }
  }

  useEffect(() =>{
    fetchUsers()
  },[])

  async function fetchUsers() {
    try{
      const response = user.all()
      setUsers(response)
    }catch{
      console.log("error fetch users")
    }
  }

  
  return (
        <>

      <View style={{ backgroundColor: "#252525", flex: 1, justifyContent: "center" }}>
        <Titulo style={{ color: "#FFF", alignSelf: 'center' }}>Registre seu Usuario</Titulo>
        {errors.name && <Text style={{ color: "#FFF" }}>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ backgroundColor: "#fff", margin: 10, padding: 10 }}
              placeholder="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />

        {errors.name && <Text style={{ color: "#FFF" }}>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ backgroundColor: "#fff", margin: 10, padding: 10 }}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        {errors.name && <Text style={{ color: "#FFF" }}>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ backgroundColor: "#fff", margin: 10, padding: 10 }}
              placeholder="Senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      </View>
      <View style={{flex:0.5, backgroundColor: "#252525"}}>
        <Button title='atualizar' onPress={fetchUsers}/>
        <ScrollView style={{ margin: 3, backgroundColor: "#252525", padding: 20 }}>
          {users != null ? (users.map((usuario:UserResponseDatabase,index:number) => (
            <CardScroll key={index} nome={usuario.name} email={usuario.email} senha={usuario.password} id={usuario.id}/>
          )))
            :
            <Titulo>Nenhum usuario registrado</Titulo>
          }
        </ScrollView>
      </View>
      </>
      );
}