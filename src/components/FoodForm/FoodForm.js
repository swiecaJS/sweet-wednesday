import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { addCandy } from "../../store/actions";
import { connect } from "react-redux";
import "./FoodForm.scss";

const FormExampleForm = props => {
  const [urls, setUrls] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const urlsArray = urls.split("\n");
    props.addCandy(urlsArray, props.cityUri);
  };

  return (
    <section className="formWrapper">
      <h4>
        Provide urls from{" "}
        <a
          href="https://www.e-piotripawel.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Piotr i Paweł
        </a>
        , every url in new line
      </h4>
      <em>e.g. https://www.e-piotripawel.pl/towar/pestki-dyni/22209</em>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <textarea value={urls} onChange={e => setUrls(e.target.value)} />
        </Form.Field>

        <Button floated="right" type="submit" className="positive big">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default connect(
  null,
  { addCandy }
)(FormExampleForm);
