import React from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
function CityTable(props) {
  const renderRows = sweets => {
    return sweets.map(sweet => {
      console.log(sweet);
      return (
        <Table.Row key={sweet.productId}>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>{sweet.url}</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      );
    });
  };
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Url</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {renderRows(props.sweets)}
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>
            https://www.e-piotripawel.pl/towar/pestki-dyni/22209
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>
            https://www.e-piotripawel.pl/towar/czekolada-kinder/200856
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log("CityTable", state, ownProps);
  const citySweets = state.sweets.filter(
    sweet => sweet.city === ownProps.cityUri
  );
  return {
    sweets: citySweets
  };
};

export default connect(mapStateToProps)(CityTable);
