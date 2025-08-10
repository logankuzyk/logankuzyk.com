// From https://payloadcms.com/community-help/discord/file-upload-to-s3-bucket-plugin-cloud-storage

import { CollectionBeforeChangeHook } from 'payload'

import ObjectID from 'bson-objectid'

export const appendIdToPrefixCollectionBeforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
}) => {
  if (operation !== 'create') return data

  // Create and append an `_id` to the `prefix`
  const objectID = ObjectID().toHexString()
  data._id = objectID
  data.prefix = `${data.prefix}/${objectID}`

  // Save the original name, only if a file is provided
  if (req?.file?.name) data.originalName = req.file.name

  return data
}
