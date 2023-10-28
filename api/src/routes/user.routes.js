const express = require('express');
const Busboy  = require('busboy');
const bcrypt = require('bcrypt');
const moment = require('moment');
const User = require('../models/user');
const { default: mongoose } = require('mongoose');

const aws = require('../services/aws.js')

const router = express.Router()


router.post('/', async (req, res) => {
  const busboy = Busboy({ headers: req.headers });
busboy.on("finish",(file)=>{
  console.log(req.files)
})
   /*busboy.on('file', async () => {
    console.log(req.files) 
   try {
      console.log(req.files)
      const userId = mongoose.Types.ObjectId();
      let foto = '';

      if(req.files){
        const file = req.files.foto;

        const nameParts = file.name.split('.');
        const fileName = `${userId}.${nameParts[nameParts.length -1]}`
        foto = `user/${fileName}`;

        const response = await aws.uploadToS3(file, foto)

        if(response.error){
          res.json({error: true, message: response.message})
          return false
        }
      }

    } catch (err) {
      res.json({ error: true, message: err.message})
    }
  });*/
  req.pipe(busboy);
});


module.exports = router;