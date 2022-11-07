import {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  StyleSheet,
  StatusBar,
  SwipeView,
} from 'react-native';

function TodoApp() {
  const [value, setValue] = useState('');

  const [data, setData] = useState([{title: 'hello'}, {title: 'hiiiii'}]);

  function deleteItems(key) {
    setData({
      data: data.filter(item => item.key !== key),
    });
  }

  //   const data = [
  //     {id: 1, title: 'hello'},
  //     {id: 2, title: 'hiiiii'},
  //     {id: 3, title: 'worldsss'},
  //     {id: 11, title: 'hello'},
  //     {id: 22, title: 'hiiiii'},
  //     {id: 33, title: 'worldsss'},
  //     {id: 14, title: 'hello'},
  //     {id: 25, title: 'hiiiii'},
  //     {id: 36, title: 'worldsss'},
  //     {id: 17, title: 'hello'},
  //     {id: 28, title: 'hiiiii'},
  //     {id: 39, title: 'worldsss'},
  //     {id: 104, title: 'hello'},
  //     {id: 24, title: 'hiiiii'},
  //     {id: 38, title: 'worldsss'},
  //   ];

  const Item = ({title}) => (
    <View>
      <TouchableOpacity >
        <Text style={{fontSize: 50, color: 'black'}}>{title} </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  const addTaskHandler = data => {
    setData(data => [...data, value]);
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginEnd: 10,
          marginStart: 10,
        }}>
        <TextInput
          placeholder="Enter Todo"
          value={value}
          onChangeText={value => setValue(value)}
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={addTaskHandler}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        {
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        }
      </View>
    </View>
  );
}
export default TodoApp;
