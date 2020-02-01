import React from "react";
import { connect } from "react-redux";
import { createTask }  from '../../actions/tasks';
import { ContainerPlanner, InputPlanner, ButtonTask } from '../../components/Planner';
import Days from '../Days';


const taskForm = [
  {
    name: "text",
    type: "text",
    label: "Inserir texto da tarefa:"
  }
]

export class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     form: {}
    }
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({ form: { ...this.state.form, [name]: value } });
};

handleOnSubmmit = event => {
  event.preventDefault()
  console.log(this.state.form)
  const { text, day } = this.state.form;
  this.props.createTask(text, day); 

  this.setState({form: {}})
}

  render() {

    return (
      <div> 
      <ContainerPlanner>
        <h3>Insira o texto da tarefa</h3> 
        <form onSubmit={this.handleOnSubmmit}> 
          {taskForm.map( input => (
            <div key={input.name}>
              <InputPlanner
              onChange={this.handleInputChange}
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              label={input.label}
              />
            </div>
          ))}

        <select onChange={this.handleInputChange}
                label="Dia da semana"
                name="day"
                value={this.state.form.day}> 
            <option  value="Segunda"> Segunda-Feira</option>
            <option  value="Terça"> Terça-Feira</option>
            <option  value="Quarta"> Quarta-Feira</option>
            <option  value="Quinta"> Quinta-Feira</option>
            <option  value="Sexta"> Sexta-Feira</option>
            <option  value="Sábado"> Sábado</option>
            <option  value="Domingo"> Domingo</option>
        </select>
        <ButtonTask onClick={this.handleOnSubmmit} type="submit">Enviar</ButtonTask>
        </form>
      </ContainerPlanner>
        <Days></Days> 
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  createTask: (text, day) => dispatch(createTask(text, day))
})


export default connect(null, mapDispatchToProps)(Planner);