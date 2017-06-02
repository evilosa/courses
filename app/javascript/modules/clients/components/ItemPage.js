import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as models from '../models';
import ItemForm from './ItemEdit';

const propTypes = {
  item: PropTypes.object.isRequired
};

class Item extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: this.props.item,
      isEditing: false
    };
    this.updateState = this.updateState.bind(this);
    this.save = this.save.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Если пришел элемент с новым номером, обновим элемент внутри компонента
    if (this.props.item.id != nextProps.item.id) {
      this.setState({item: nextProps.item})
    }
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  updateState(event) {
    const field = event.target.name;
    const item = this.state.item;
    item[field] = event.target.value;
    return this.setState({item: item});
  }

  save(event) {
    event.preventDefault();
    this.props.actions.save(this.state.item);
  }

  render() {
    const { item } = this.props;
    let itemPresentation = null;

    if (this.state.isEditing) {
      itemPresentation = <ItemForm item={item} onSave={this.save} onChange={this.updateState}/>
    }
    else {
      itemPresentation = <h1>Detail view</h1>
    }

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <strong>Создание нового клиента</strong>
          </div>
          {itemPresentation}
        </div>
      </div>
    );
  }
}

Item.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  let item = new models.Client();

  const itemId = ownProps.params.id;

  return {
    item: item
  };
};

export const ItemPage = connect(mapStateToProps)(Item);
