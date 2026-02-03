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

  // The PaystackPop class
  class PaystackPop {
    constructor(options: PaystackOptions)
    // optionally add any methods you might call
    setup(options: PaystackOptions): void
  }

  export default PaystackPop
}
