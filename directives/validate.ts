import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLInputElement, binding: DirectiveBinding) {
    const validate = () => {
      const value = el.value.trim()
      const { rule, length } = binding.value || {}
      let isValid = true
      let message = ''

      switch (rule) {
        case 'required':
          isValid = !!value
          message = isValid ? '' : 'This field is required.'
          break
        case 'email':
          isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          message = isValid ? '' : 'Please enter a valid email.'
          break
        case 'number':
          isValid = !Number.isNaN(Number(value)) && value !== ''
          message = isValid ? '' : 'Please enter a valid number.'
          isValid = value.length >= 10
          message = isValid ? '' : 'Phone Number should be at least 10 digits.'
          break
        case 'select':
          isValid = value !== ''
          message = isValid ? '' : 'Please select a state.'
          break
        case 'minlength':
          isValid = value.length >= length
          message = isValid ? '' : `Minimum length is ${length} characters.`
          break
        default:
          break
      }

      if (!isValid) {
        el.setCustomValidity(message)
        el.reportValidity()
      }
      else {
        el.setCustomValidity('')
      }
    }

    el.addEventListener('input', validate)
    el.addEventListener('change', validate)
    validate() // Run validation on mount to check initial value
  },
}
