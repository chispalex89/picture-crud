var express = require('express')
var router = express.Router()
const AWS = require('aws-sdk')
var s3 = new AWS.S3({
  params: {
    Bucket: 'profile-pictures-baires-2'
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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json(items)
})

router.get('/test', (req, res, next) => {
  s3.listObjects({}, (err, data) => {
    if(err) {
      console.error(err)
      throw err
    } else {
      res.status(200).json(data)
    }
  })
})

module.exports = router
