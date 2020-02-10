import React from "react";
import { connect } from "react-redux";
import { getAllTasks }  from '../../actions/tasks';
import { allTasks } from '../../reducers/planner'
import styled from 'styled-components';

const ContainerDays = styled.div`
    display: flex:
    align-items: center;
    width: 50vw;
    heigth: 40vh;
    border: 1px solid black;
    padding: 10px;
    margin: 0 auto;
    text-align: justify;
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);
    `
const Title = styled.h2`
    margin-top: 100px;
    text-align: center
`

export class Days extends React.Component {

componentDidMount() {
    this.props.getAllTasks()
}

render(){
    const days = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"]

    return(
      <div>
             <Title>Lista de Tarefas</Title>
      {days.map(day =>(
            <ContainerDays>
            <h2>{day}</h2>
                <ul>{
                  this.props.allTasks.filter(
                  task => task.day === day).map(
                  task => <li>{task.text}</li>
                  )}
                </ul>
            </ContainerDays>
      ))}

      </div>

    )
  }
} 

const mapStateToProps = state => ({
  allTasks: state.planner.allTasks 
});

const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks ())
})


export default connect(mapStateToProps, mapDispatchToProps)(Days);