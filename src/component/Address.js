import React, { Component } from "react";
import "../scss/style.css";
import "../scss/normalize.css";
import "../scss/main.css";
import "../scss/custome_audio_video_player.css";
import "../scss/jplayer.blue.monday.min.css";
import AddressModal from "../component/Add-Address/Address-modal";
import Header from "./Header";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
// const styles = { height: 400, width: "100%" };

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      addresses: [],
      showModal: false,
      modalType: null,
      editId: null
    };
  }

  componentDidMount() {
    let allAddress = [
      {
        id: "veena-addr-01",
        name: "Balaji",
        addressLine1: "B-11",
        addressLine2: "Gali no.8 Tulsi nagar Shastri nagar",
        pinCode: 302016,
        city: "JAIPUR, RAJASTHAN",
        contactNo: "9828490319",
        default: true
      },
      {
        id: "veena-addr-02",
        name: "Mythili",
        addressLine1: "B-11",
        addressLine2: "Gali no.8 Tulsi nagar Shastri nagar",
        pinCode: 302016,
        city: "JAIPUR, RAJASTHAN",
        contactNo: "9828490319",
        default: false
      },
      {
        id: "veena-addr-03",
        name: "Bala",
        addressLine1: "B-11",
        addressLine2: "Gali no.8 Tulsi nagar Shastri nagar",
        pinCode: 302016,
        city: "JAIPUR, RAJASTHAN",
        contactNo: "9828490319",
        default: false
      },
      {
        id: "veena-addr-04",
        name: "Myl",
        addressLine1: "B-11",
        addressLine2: "Gali no.8 Tulsi nagar Shastri nagar",
        pinCode: 302016,
        city: "JAIPUR, RAJASTHAN",
        contactNo: "9828490319",
        default: false
      },
      {
        id: "veena-addr-05",
        name: "Balaji Venkatraman",
        addressLine1: "B-11",
        addressLine2: "Gali no.8 Tulsi nagar Shastri nagar",
        pinCode: 302016,
        city: "JAIPUR, RAJASTHAN",
        contactNo: "9828490319",
        default: false
      },
      {
        id: "veena-addr-06",
        name: "Myilu",
        addressLine1: "B-11",
        addressLine2: "Gali no.8 Tulsi nagar Shastri nagar",
        pinCode: 302016,
        city: "JAIPUR, RAJASTHAN",
        contactNo: "9828490319",
        default: false
      }
    ];
    this.setState({ addresses: allAddress });
  }

  AddressHandler = (e, type, id) => {
    e.stopPropagation();
    if (type === "Add") {
      e.preventDefault();
      this.setState(prevState => {
        return {
          showModal: !prevState.showModal,
          modalType: type,
          editId: null
        };
      });
    } else if (type === "Edit") {
      e.preventDefault();
      const allAddress = [...this.state.addresses];
      const index = allAddress.findIndex(ind => ind.id === id);
      this.setState(prevState => {
        return {
          showModal: !prevState.showModal,
          modalType: type,
          editId: index
        };
      });
    } else {
      e.preventDefault();
      this.setState(prevState => {
        return {
          showModal: !prevState.showModal,
          modalType: null,
          editId: null
        };
      });
    }
  };

  deleteAddressHandler = (e, id) => {
    e.preventDefault();
  };

  

  render() {
    let addressTemplate = this.state.addresses.map(address => (
      <li
        key={address.id}
        className={address.default ? "default-address" : null}
      >
        {address.default ? <span className="defult">Default</span> : null}
        <h5>{address.name}</h5>
        <address>
          <p>{address.addressLine1}</p>
          <p>{address.addressLine2}</p>
          <p>{address.city + address.pinCode}</p>
          <p>India</p>
          <p>Phone number: {address.contactNo}</p>
        </address>
        <div className="edit-delete-button-section">
          <a href="/" onClick={e => this.AddressHandler(e, "Edit", address.id)}>
            Edit
          </a>
          <a href="/" onClick={e => this.deleteAddressHandler(e, address.id)}>
            Delete
          </a>
        </div>
      </li>
    ));
    return (
      <>
        <AddressModal
          show={this.state.showModal}
          closed={e => this.AddressHandler(e)}
          type={this.state.modalType}
          editId={this.state.editId}
          editAddress={
            this.state.editId !== null && this.state.addresses
              ? this.state.addresses[this.state.editId]
              : null
          }
          setDefaultAddress={this.setDefaultAddressHandler}
        />
        <Header />
        <LeftSection />
        <div className="middle-section">
          <div className="heading-section">
            <ul>
              <li>
                <a href="/">Veena</a>
              </li>
              <li className="active">
                <a href="/"> Your Addresses</a>
              </li>
            </ul>
          </div>
          <div className="your-address-section">
            <h2>Your Addresses</h2>
            <ul>
              <li className="add-address-section">
                <div
                  className="image-section"
                  onClick={e => this.AddressHandler(e, "Add", null)}
                >
                  <a href="/">
                    <img
                      src={require("../assets/img/add.png")}
                      alt="add_image"
                    />
                  </a>
                  <h4>ADD ADDRESS</h4>
                </div>
              </li>
              {addressTemplate}
            </ul>
          </div>
        </div>
        <RightSection />
      </>
    );
  }
}

export default Address;
