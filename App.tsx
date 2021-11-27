import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStackNavigator from './src/navigators/MainStackNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MainStackNavigator/>

  );
}