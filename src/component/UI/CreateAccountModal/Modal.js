import React, { Component } from "react";

import {} from "./styles";
import closeIcon from "../../../assets/img/svg_image/closeICON.svg";
import Input from "../../UI/Input/Input";

class Modal extends Component {
  state = {
    validForm: false,
    addressForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "name",
          "data-name": "Full Name"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^[A-Za-z-,]{3,10}/g
        },
        valid: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "email",
          "data-name": "Email"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
        },
        valid: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          name: "password",
          "data-name": "Password"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /[a-zA-z0-9]{5,8}/g
        },
        valid: false
      },
      contactNo: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "contact",
          "data-name": "Contact"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g
        },
        valid: false
      }
    }
  };

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      if (rules.regex.test(value) && value !== "") {
        isValid = true;
      }
    }

    return isValid;
  }

  inputChangedHandler = (event, typeIdentifier) => {
    let updatedAddressForm = { ...this.state.addressForm };

    const updatedFormElement = { ...updatedAddressForm[typeIdentifier] };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedAddressForm[typeIdentifier] = updatedFormElement;
    let formIsValid = false;
    for (let itr in updatedAddressForm) {
      if (updatedAddressForm[itr].valid === true) {
        formIsValid = true;
      } else {
        formIsValid = false;
        break;
      }
    }
    this.setState({ validForm: formIsValid, addressForm: updatedAddressForm });
  };

  inputFocused = (event, typeIdentifier) => {
    let updatedAddressForm = { ...this.state.addressForm };
    const updatedFormElement = { ...updatedAddressForm[typeIdentifier] };
    updatedFormElement.focused = true;
    updatedAddressForm[typeIdentifier] = updatedFormElement;
    this.setState({ addressForm: updatedAddressForm });
  };

  inputFocusedOut = (event, typeIdentifier) => {
    let updatedAddressForm = { ...this.state.addressForm };
    const updatedFormElement = { ...updatedAddressForm[typeIdentifier] };
    if (updatedFormElement.value === "") {
      updatedFormElement.focused = false;
    }
    updatedAddressForm[typeIdentifier] = updatedFormElement;
    this.setState({ addressForm: updatedAddressForm });
  };

  render() {
    const formElementArray = [];
    for (let itr in this.state.addressForm) {
      formElementArray.push({
        id: itr,
        config: this.state.addressForm[itr]
      });
    }

    let form = (
      <form autoComplete="off">
        <div className="close-icon" onClick={this.props.closed}>
          <img src={closeIcon} alt="close_icon_img" />
        </div>
        {formElementArray.map(ele => (
          <Input
            key={ele.id}
            elementType={ele.config.elementType}
            elementConfig={ele.config.elementConfig}
            value={ele.config.value}
            valid={!ele.config.valid}
            focus={ele.config.focused}
            focused={event => this.inputFocused(event, ele.id)}
            notFocused={event => this.inputFocusedOut(event, ele.id)}
            changed={event => this.inputChangedHandler(event, ele.id)}
          />
        ))}
        <div className="button-element">
          <button onClick={this.onSaveAddressHandler}>CREATE ACCOUNT</button>
        </div>
      </form>
    );
    let modalTemplate = null;
    if (this.props.show) {
      modalTemplate = (
        <div className="modal">
          <div className="address-modal-content">
            <h4 className="add-address-header">CREATE ACCOUNT</h4>
            {form}
          </div>
        </div>
      );
    }
    return modalTemplate;
  }
}

export default Modal;
