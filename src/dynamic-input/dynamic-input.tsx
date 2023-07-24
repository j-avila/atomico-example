import { Props, c, css } from "atomico"
import { styles } from "./dynamic-input.styles"

function dynamicInput({ type, name, handleChange }) {
  return (
    <host shadowDom>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} type={type} onchange={handleChange} />
    </host>
  )
}

dynamicInput.props = {
  type: String,
  name: String,
  handleChange: Function,
}

dynamicInput.styles = styles

export const DynamicInput = c(dynamicInput)
customElements.define("dynamic-input", DynamicInput)
