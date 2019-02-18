import React from "react";
import { Button, Form } from "semantic-ui-react";

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Provide urls for Piotr i Paweł, every url in new line</label>
      <textarea />
    </Form.Field>

    <Button floated="right" type="submit">
      Submit
    </Button>
  </Form>
);

export default FormExampleForm;
