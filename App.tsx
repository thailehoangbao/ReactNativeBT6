// import React from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import Detail from './src/screen/detail/Detail';

// export default function App() {

//   return (
//     <Provider store={store}>
//         <Detail />
//     </Provider>
//   )
// }
import React from 'react'
import { MainNavigation } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}