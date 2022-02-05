import { Formik } from "formik"
import Button from "../components/Button"
import Layout from "../components/Layout"
import FormField from "../components/formUI/FormField"
import { useContext } from "react/cjs/react.development"
import AddEntryContext from "../components/context/Add-entryContext"
import Link from "next/link"

const AddEntry = () => {
  const {
    state: { entries },
  } = useContext(AddEntryContext)

  const { handleFormSubmit } = useContext(AddEntryContext)

  const { validationSchema } = useContext(AddEntryContext)

  return (
    <Layout props="Add new entry">
      <div className="flex justify-center ">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={entries}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isValid, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4 p-4"
            >
              <FormField
                name="amount"
                placeholder="Enter a amount !"
                type="text"
              >
                Amount
              </FormField>
              <FormField
                name="description"
                placeholder="Enter a description !"
                type="text"
              >
                Description
              </FormField>
              {/* <Link href="/" passHref>
                <a> */}
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                variant="btnValidation"
                size="lg"
              >
                ADD NEW ENTRY
              </Button>
              {/* </a>
              </Link> */}
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default AddEntry
