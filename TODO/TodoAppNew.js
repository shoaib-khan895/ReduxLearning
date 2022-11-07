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
  const [task, setTask] = useState();
  const [taskItems, SetTaskItems] = useState([]);

  function handleAddTask() {
    if (task === undefined) {
      Alert.alert('Invaid', 'plase enter something');
    } else {
      SetTaskItems([...taskItems, task]);
      console.log(taskItems);
    }
  }

  const completedTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    SetTaskItems(itemsCopy);
  };

  const Item = ({title}) => (
    <View>
      <TouchableOpacity onPress={() => completedTask()}>
        <Text style={{fontSize: 50, color: 'black'}}>{title} </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => <Item title={item} />;
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
          value={task}
          onChangeText={task => setTask(task)}
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
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
            data={taskItems}
            renderItem={renderItem}
            keyExtractor={item => item}
          />
        }
      </View>
    </View>
  );
}
export default TodoApp;
