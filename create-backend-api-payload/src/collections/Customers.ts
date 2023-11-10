import { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
        name: 'firstname',
        type: "text",
        required: true
    }
  ],
}

export default Customers
