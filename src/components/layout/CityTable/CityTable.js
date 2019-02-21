import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { fetchCandies, setSyncedCandies } from "../../../store/actions";
import "./CityTable.scss";

import QuantityControls from "../QuantityControls";

function CityTable(props) {
  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyA1-aKXUHlUXjM8Mgc-4nESFpEAqqHcB_I",
        authDomain: "vue-meetup-yt.firebaseapp.com",
        databaseURL: "https://vue-meetup-yt.firebaseio.com",
        projectId: "vue-meetup-yt",
        storageBucket: "gs://vue-meetup-yt.appspot.com"
      });
      listenToChangesToTheTable();
    }
    props.fetchCandies();
  }, []);

  const listenToChangesToTheTable = () => {
    firebase
      .database()
      .ref("/sweets")
      .on("value", data => {
        props.setSyncedCandies(data.val());
      });
  };

  const renderRows = sweets => {
    return sweets.map(sweet => {
      return (
        <Table.Row key={sweet.productId}>
          <Table.Cell>{sweet.url}</Table.Cell>
          <Table.Cell>
            <div className="quantityWrapper">
              {sweet.quantity}
              <QuantityControls
                productId={sweet.productId}
                cityUri={props.cityUri}
              />
            </div>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  if (!props.sweets.length) {
    return null;
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Url</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{renderRows(props.sweets)}</Table.Body>
    </Table>
  );
}

const mapStateToProps = (state, ownProps) => {
  let sweets = [];
  if (state.sweets.hasOwnProperty(ownProps.cityUri)) {
    sweets = Object.values(state.sweets[ownProps.cityUri]);
  }
  return {
    sweets
  };
};

export default connect(
  mapStateToProps,
  { fetchCandies, setSyncedCandies }
)(CityTable);
