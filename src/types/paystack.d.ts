declare module '@paystack/inline-js' {
  type PaystackTransaction = {
    reference: string
    status: string
    message?: string
  }

  type PaystackOptions = {
    key: string
    email: string
    amount: number
    currency?: string
    ref?: string
    onSuccess?: (response: PaystackTransaction) => void
    onClose?: () => void
  }

  class PaystackPop {
    constructor(options: PaystackOptions)
  }

  export default PaystackPop
}
