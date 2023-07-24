import { Props, c, css, useEffect, useState } from "atomico"
import { DsButton } from "../common/button"

function dynamicForm({ formName, actions }) {
  const [data, setData] = useState({})
  const [errMsg, setErrMsg] = useState()

  const onHandleChange = ({ target }) => {
    const { name, value } = target

    if (actions?.validation) {
      actions.validation ? value : setErrMsg(actions.errMsg)
      return
    } else {
      const state = data
      setData({ ...data, [name]: value })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("🔥 da form:", data)
  }

  return (
    <host shadowDom>
      <form id={formName} onsubmit={handleSubmit}>
        <div>
          <slot onkeypress={onHandleChange}></slot>
        </div>
        <footer>
          <DsButton label="Test" icon="fa-user" mode="submit" />
        </footer>
      </form>
    </host>
  )
}

dynamicForm.props = {
  formName: String,
}

dynamicForm.styles = css`
  form {
    padding: 1rem;
  }
  form div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const DynamicForm = c(dynamicForm)
customElements.define("dynamic-form", DynamicForm)
