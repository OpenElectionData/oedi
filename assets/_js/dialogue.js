import A11yDialog from 'a11y-dialog'

const Dialogue = () => {
  // Get the dialog element (with the accessor method you want)
  const el = document.getElementById('dialog')

  // Instantiate a new A11yDialog module
  new A11yDialog(el)
}

export default Dialogue
