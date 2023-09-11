import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
if (__DEV__) {
  const  tron = Reactotron.configure({host: '192.168.3.16'})
  .setAsyncStorageHandler(AsyncStorage)  
  .useReactNative()
  .use(reactotronRedux())
  .connect();

  console.tron = tron;
  tron.clear();
}


export default Reactotron;