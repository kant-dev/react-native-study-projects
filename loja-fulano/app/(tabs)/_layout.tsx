import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
      return (
            <Tabs screenOptions={{tabBarActiveTintColor: "#007BFF"}}>
                  <Tabs.Screen 
                        name='home' 
                        options={{
                              title: 'Inicio',
                              tabBarIcon: ({ color }) => (
                                    <FontAwesome name='home' size={26} color={color} />
                              )
                        }}
                  />

                  <Tabs.Screen 
                        name='categories' 
                        options={{
                              headerShown: false,
                              title: 'Categorias',
                              tabBarIcon: ({ color }) => (
                                    <FontAwesome name='archive' size={26} color={color} />
                              )
                        }}
                  />

                  <Tabs.Screen 
                        name='about' 
                        options={{
                              title: 'Sobre',
                              tabBarIcon: ({ color }) => (
                                    <FontAwesome name='info-circle' size={26} color={color} />
                              )
                        }}
                  /> 

            </Tabs>
      )
}

export default TabsLayout