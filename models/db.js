const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DBKaryawan', {useNewUrlParser: true},(err) =>{
    if(!err){console.log('sukses koneksi ke mongoDB')}
    else{console.log('gagal koneksi ke mongoDB: ' + err)}
});

require('./karyawan.models');