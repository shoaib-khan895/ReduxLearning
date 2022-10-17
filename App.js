import React, {useState} from 'react';
import {Button, DatePickerIOSComponent, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './redux/src/Store';
import {
  counterReset,
  counterDecrement,
  counterIncrement,
} from './redux/src/Action';

const App = () => {
  const dataCounter = useSelector(state => state.counter);
  const dataMyName = useSelector(state => state.myName);
  const dispatch = useDispatch();
  // const myName = initialState.myName;
  // // const data = useSelector((state)=>state.counter

  // // console.log('intial state', store.getState());

  // // const unsubscribe = store.subscribe(() =>
  // //   console.log('updated state', store.getState()),
  // // );
  // // store.dispatch(counterIncrement());
  // // store.dispatch(counterIncrement());
  // // store.dispatch(counterIncrement());
  //  const unsubscribe = store.subscribe(() => setValue(store.getState()));
  //  console.log(value)
  //  unsubscribe();

  return (
    <Provider store={store}>
      <View>
        <View style={{padding: 10}}></View>
        <Button title="+" onPress={() => dispatch(counterIncrement())}></Button>
        <View style={{padding: 10}}></View>
        <Button title="-" onPress={() => dispatch(counterDecrement())}></Button>
        <View style={{padding: 10}}></View>
        <Button title="reset" onPress={() => dispatch(counterReset())}></Button>
        <View style={{padding: 10}}></View>
        <Text>{dataMyName}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 28}}>{dataCounter}</Text>
        </View>
      </View>
    </Provider>
  );
};

export default App;
