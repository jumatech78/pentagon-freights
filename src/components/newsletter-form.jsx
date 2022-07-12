import React from 'react'
import classnames from 'clsx'
import { GlobalContext } from '../GlobalContext/GlobalContext'

export function NewsletterForm({ className, onSubmit, submitBtn }) {
  const [trackingId, setTrackingId] = React.useState('')
  const { productDetails } = React.useContext(GlobalContext)
  const [success, setSuccess] = React.useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await onSubmit(trackingId)
    console.log(result)
    // setTrackingId('')
    // setSuccess(true)
  }

  function handleChange(event) {
    setTrackingId(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="trackingId" aria-hidden="true">
          Tracking ID
        </label>
        <input
          required
          placeholder="Enter your Tracking ID"
          id="trackingId"
          name="trackingId"
          type="text"
          value={trackingId}
          onChange={handleChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        {productDetails && (
          <div className="mt-2 text-xs italic text-gray-500 shadow py-2 px-2 bg-[lightblue]">
            <p>Product Name:{productDetails?.productName}</p>
            <p>Location:{productDetails?.productLocation}</p>
          </div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitBtn || 'Submit'}
        </button>
      </div>
    </form>
  )
}
