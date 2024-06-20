import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:bikilaketema94@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:bikilaketema94@gmail.com">Bikilaketema94@gmail.com</a>
        </div>
        <div>
        <a href="tel:+251942932231"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+2519142932231">(+251) 942932231</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
