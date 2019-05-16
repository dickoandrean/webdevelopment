const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Karyawan = mongoose.model('Karyawan')


router.get('/', (req,res)=>{
   res.render("karyawan/addedit",{
   viewTitle : "Insert Karyawan"
  });
});

router.post('/',(req,res)=>{
    if(req.body._id == '')
    insertRecord(req,res);
    else
    updateRecord(req,res);
})

function insertRecord(req,res){
    var karyawan = new Karyawan();
    karyawan.Nama = req.body.Nama;
    karyawan.Email = req.body.Email;
    karyawan.Telepon = req.body.Telepon;
    karyawan.Alamat = req.body.Alamat;
    karyawan.save((err, doc)=>{
        if(!err)
        res.redirect('/list');
        else {
            console,log('Error Dalam Penginputan : ' + err);
        }
    });
}

function updateRecord(req, res) {
    const updateObject = req.body;
    Karyawan.updateOne({ _id:req.body._id}, { $set: req.body}, )
      .exec()
      .then(() => {
        res.redirect('/list');
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Coba Lagi.'
        });
      });
  }
  
  router.get('/delete/:id' , (req,res) =>{
    Karyawan.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){
            res.redirect('/list');
        }
        else {console.log("Gagal Dalam Penghapusan")}
    })
})
router.get('/list', (req,res)=>{
   // res.json('list');
    Karyawan.find((err,doc)=> {
        if(!err){
            res.render("karyawan/list",{
                list :doc
            });
        }
        else {
            console.log('gagal menampilkan data :' + err);
        }
    });
});

router.get('/:id', (req,res)=>{
    Karyawan.findById(req.params.id,(err, doc)=>{
        if(!err){
            res.render("karyawan/addedit", {
                viewTitle: "Perbarui Data Karyawan",
                karyawan: doc
            });
        }
    });
});

module.exports = router;