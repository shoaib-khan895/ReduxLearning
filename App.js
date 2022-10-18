import React, {useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  counterReset,
  counterDecrement,
  counterIncrement,
} from './redux/src/Action';
import {store} from '.';

const App = () => {
  const dispatch = useDispatch;
  const [val, setVal] = useState();

  // console.log('intial state', store.getState());
  
  console.log('state=====>', val);

  store.subscribe(() => setVal(store.getState()));

  return (
    <View>
      <View style={{padding: 10}}></View>
      <Button
        title="+"
        onPress={() => store.dispatch(counterIncrement())}></Button>
      <View style={{padding: 10}}></View>
      <Button
        title="-"
        onPress={() => store.dispatch(counterDecrement())}></Button>
      <View style={{padding: 10}}></View>
      <Button
        title="reset"
        onPress={() => store.dispatch(counterReset())}></Button>
      <View style={{padding: 10}}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {/* <Text style={{fontSize: 28}}>{0}</Text> */}
      </View>
    </View>
  );
};

export default App;
