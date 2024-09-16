import { Stack } from 'expo-router'
import React from 'react'

const CategorieLayout = () => {
      return (
            <Stack>
                  <Stack.Screen 
                        name='list' 
                        options={{
                              title: 'Categorias'
                        }}
                  />
                  <Stack.Screen 
                        name='[id]' 
                  />
            </Stack>
      )
}

export default CategorieLayout