const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk')
const bucket = 'profile-pictures-baires-2'
const region = 'us-east-2'
const s3 = new AWS.S3({
  params: {
    Bucket: bucket
  }
})


const items = [
  {
    src: 'https://profile-pictures-baires-2.s3.us-east-2.amazonaws.com/6e1c1095-dd38-4913-9174-6279842e55b7.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://profile-pictures-baires-2.s3.us-east-2.amazonaws.com/eff708d8-ba51-478e-aef6-5f0c0ffa9e0b.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://profile-pictures-baires-2.s3.us-east-2.amazonaws.com/15ff134c-f4b1-47a5-ab78-f0e7c6a8ef4a.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

router.get('/', (req, res, next) => {
  s3.listObjects({}, (err, data) => {
    if(err) {
      console.error(err)
      throw err
    } else {
      const {Contents} = data
      const pictures = Contents.map((item, index) => {
        return {
          src: `https://${bucket}.s3.${region}.amazonaws.com/${item.Key}`,
          altText: item.Key,
          caption: `Slide ${index+1}`
        }
      })

      const thumbnails = pictures
      const result = {
        pictures,
        thumbnails
      }
      res.status(200).json(result)
    }
  })
})

module.exports = router
