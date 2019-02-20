import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { addCandy } from "../../store/actions";
import { connect } from "react-redux";

const FormExampleForm = props => {
  const [urls, setUrls] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("current value of urls", urls, urls.split("\n"));
    const urlsArray = urls.split("\n");
    console.log("handle submit", urlsArray, props);
    props.addCandy(urlsArray, props.cityUri);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Provide urls for Piotr i Paweł, every url in new line</label>
        <textarea value={urls} onChange={e => setUrls(e.target.value)} />
      </Form.Field>

      <Button floated="right" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("FoodForm", state.sweets, ownProps);
  return {};
};

export default connect(
  mapStateToProps,
  { addCandy }
)(FormExampleForm);
