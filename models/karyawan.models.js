const mongoose = require('mongoose');

var karyawanScheme = new mongoose.Schema({
    Nama : {
        type: String
    },
    Email : {
        type: String
    },
    Telepon : {
        type: String
    },
    Alamat : {
        type: String
    }
});
mongoose.model('Karyawan',karyawanScheme);