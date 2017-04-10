import React from 'react';
import {Meteor} from 'meteor/meteor';
import BootstrapTable from 'reactjs-bootstrap-table';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import ListField from 'uniforms-bootstrap4/ListField';
import ListItemField from 'uniforms-bootstrap4/ListItemField';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import TextField from 'uniforms-bootstrap4/ListItemField';
import AutoFields from 'uniforms-bootstrap4/AutoFields'; // Choose your theme package.
import LongTextField from 'uniforms-bootstrap4/LongTextField';
import AutoField from 'uniforms-bootstrap4/AutoField';

const DefaultComponent = class DefaultComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      model:{}
    }
  }
  render() {

    let columns = [
      {name: '_id'},
      {name: 'title' },
      {name: 'description'},
      {name:'keywords', renderer:(row)=>{
        if(!row.keywords) return;
        return row.keywords.map((item, i)=>{return(<span key={item.name+i}>{item.name},{" "}</span>)})
      }},
      {name:'options', renderer:(row)=>{
        return (
          <div>
            <button className="btn btn-secondary btn-sm" onClick={remove.bind(this,row._id)} >
              <i className="fa fa-times"></i>
            </button>
            <button className="btn btn-secondary btn-sm" onClick={edit.bind(this,row)} >
              <i className="fa fa-pencil"></i>
            </button>
          </div>
        )
      }}
    ]
    const edit = (model)=>{
      this.setState({
        model
      })
    }
    const update = (doc) => {
      this.props.Collection.update({_id:doc._id}, doc, {upsert:true})
    }
    const remove = (_id) => {
      this.props.Collection.remove(_id)
    }

    const MyForm = ({model, schema, onSubmit}) => {
      let formRef;

      return (
          <section>
              <AutoForm
                model={this.state.model}
                ref={ref => formRef = ref}
                schema={schema}
                onSubmit={onSubmit}
                submitField={MySubmitField}>

                <AutoFields fields={['title', 'description']}></AutoFields>

                <SubmitField />
              </AutoForm>
          </section>
      );
    };

    const MySubmitField = ({model, schema, onSubmit}) => {
      return (
          <section>
              <small>
                  Reset
              </small>
              <small>
                  Submit
              </small>
          </section>
      );
    };

    return (
      <div className="card-block">
        <BootstrapTable
          keyName="_id"
          select="multiple"
          activeClass="whatisup"
          columns={columns}
          data={this.props.Data}
          headers={true} />


        <AutoForm
          model={this.state.model}
          schema={this.props.Collection.schema}
          onSubmit={doc => update(doc)}
          >

        </AutoForm>

      </div>
    )
  }

}

DefaultComponent.defaultProps = {

}

export {DefaultComponent};
