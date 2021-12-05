
import {Button , Form, FloatingLabel} from 'react-bootstrap';
function Formulaire(){

    return (
<div className="mise">
<h1> Formulaire </h1>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="m">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="m" >Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel><br/>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    );



}
export default Formulaire;