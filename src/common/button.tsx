import { Any, Props, c, css } from "atomico"
import { styles } from "./button.styles"

function dsButtton({ label, icon, mode, action }) {
  return (
    <host>
      <button type={mode} onclick={action}>
        {icon && <i class={`fa-solid ${icon}`}></i>}
        {label}
      </button>
    </host>
  )
}

dsButtton.props = {
  label: String,
  icon: String,
  mode: String,
  action: Any,
}

dsButtton.styles = styles

export const DsButton = c(dsButtton)
customElements.define("ds-button", DsButton)
