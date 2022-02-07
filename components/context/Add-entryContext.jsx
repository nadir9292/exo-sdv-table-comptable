import * as yup from "yup"
import { createContext, useCallback, useState } from "react"

const AddEntryContext = createContext({})

const validationSchema = yup.object().shape({
  amount: yup.number().required().label("Amount"),
  description: yup.string().required().label("Description"),
})

const initialValues = {
  entries: {
    amount: "",
    description: "",
  },
}

const savedInitialValues = {
  savedEntries: [initialValues.entries],
}

export const AddEntryProvider = (props) => {
  const [state, setState] = useState(initialValues)
  const handleFormSubmit = useCallback(async ({ state }) => {
    setState(state)
  }, [])

  return (
    <AddEntryContext.Provider
      {...props}
      value={{ state, handleFormSubmit, validationSchema, savedInitialValues }}
    ></AddEntryContext.Provider>
  )
}

export default AddEntryContext
