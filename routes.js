import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Registro from './pages/registrar-se';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }} 
                component={Bem_Vindo}                
                 />

            <Stack.Screen
                name="entrada"
                options={{ headerShown: false }} 
                component={Acesso}                 
                />

            <Stack.Screen
                name="registrar-se"
                options={{ headerShown: false }} 
                component={Registro}                 
                />

        </Stack.Navigator>
    );
}
