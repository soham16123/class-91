import  React,{Component} from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, } from 'react-native';
import Calendar from './Calendar'
import { Card } from 'react-native-paper';

export default class Home extends Component{
    render(){
        const name = this.props.navigation.getParam('name')
        const Task = this.props.navigation.getParam('task')

        const Taskdescription = this.props.navigation.getParam('taskdescription')
        return(
            <View style = { styles.container}>
             <Card style = {styles.card}>
                <Text style = { styles.txt}>Welcome, {name} </Text>
                <Calender/>
            <Card> { Task}</Card>
            </Card>
                </View>
     )
    }
  }