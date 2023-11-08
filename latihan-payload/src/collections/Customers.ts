import { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  fields: [
    {
        name: 'firstName',
        type: 'text',
        required: true,
    },
    {
        name: 'lastName',
        type: 'text',
        required: true,
    }
  ]
}

export default Customers
