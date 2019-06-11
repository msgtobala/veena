import React, { Component } from "react";
import "./style.css";

import closeIcon from "../../assets/img/svg_image/closeICON.svg";
import Input from "../UI/Input/Input";

class AddresssModal extends Component {
  myRef = React.createRef();
  state = {
    validForm: false,
    editId: null,
    editType: null,
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
      addressLine1: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "address1",
          "data-name": "Address No 1"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^[A-Za-z-,]{3,10}/g
        },
        valid: false
      },
      addressLine2: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "address2",
          "data-name": "Address No 2"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^[A-Za-z-,]{3,15}/g
        },
        valid: false
      },
      pinCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "pinCode",
          "data-name": "Pin Code"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^[0-9]{6}/g
        },
        valid: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "city",
          "data-name": "City"
        },
        value: "",
        focused: false,
        validation: {
          required: true,
          regex: /^[A-Za-z-,]{3,15}/g
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

  componentDidUpdate = () => {
    if (
      (this.props.type === "Edit" && this.state.editId === null) ||
      (this.props.type === "Edit" && this.props.editId !== this.state.editId)
    ) {
      let updatedAddressForm = { ...this.state.addressForm };
      let currAddr = this.props.editAddress;
      for (const type in updatedAddressForm) {
        updatedAddressForm[type].value = currAddr[type];
        updatedAddressForm[type].focused = true;
      }
      if (currAddr.default === true) {
        this.myRef.current.checked = true;
      }
      this.setState({
        editId: this.props.editId,
        addressForm: updatedAddressForm,
        editType: "Edit"
      });
    } else if (
      this.props.editId === null &&
      this.props.type === "Add" &&
      this.state.editType !== "Add"
    ) {
      let updatedAddressForm = { ...this.state.addressForm };
      for (const type in updatedAddressForm) {
        updatedAddressForm[type].value = "";
        updatedAddressForm[type].focused = false;
      }
      this.setState({
        // editId: null,
        addressForm: updatedAddressForm,
        editType: "Add"
      });
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

  changeDefaultAddressHandler = () => {
    console.log(this.state.editId);
    console.log(this.props.editAddress);
    console.log(this.state.editType);
    if (this.state.editType === "Add") {
      this.props.setDefaultAddress();
    } else if (this.state.editType === "Edit") {
      console.log(this.myRef.current.checked);
      // this.props.editDefaultAddress();
    }
  };

  onSaveAddressHandler = () => {
    if (this.state.editType === "Add") {
    } else if (this.state.editType === "Edit") {
    }
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
        <div className="default-address-checkbox">
          <input
            className="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="address"
            ref={this.myRef}
            onChange={this.changeDefaultAddressHandler}
          />
          <label htmlFor="styled-checkbox-1">Set as Default Address</label>
        </div>
        <div className="button-element">
          {this.props.type === "Add" ? (
            <button onClick={this.onSaveAddressHandler}>Save Address </button>
          ) : (
            <button onClick={this.onSaveAddressHandler}>Edit Address </button>
          )}
        </div>
      </form>
    );

    let modalTemplate = null;
    if (this.props.show) {
      modalTemplate = (
        <div className="modal">
          <div className="address-modal-content">
            <h4 className="add-address-header">{`${
              this.props.type ? this.props.type : null
            } a  ${this.props.type === "Add" ? "new " : " "}Address`}</h4>
            {form}
          </div>
        </div>
      );
    }
    return modalTemplate;
  }
}

export default AddresssModal;
