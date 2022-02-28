const Userprofile = require("../models/userprofile");
const jwt = require("jsonwebtoken")

exports.getAll = async function (req, res) {
  try {
    const userprofile = await Userprofile.findAll({});
    return res.status(200).json({
      status: 200,
      data: userprofile,
      message: 'Succesfully Userprofiles Retrieved',
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async function (req, res) {
  try {
    const picture = req.file.path;
    const { gender, phonenumber, bio } = req.body;
    const { userId } = req.params;
    const userprofile = await Userprofile.findAll();
    // const checkuserprofile = userprofile.find(userprofile => userprofile.phonenumber === phonenumber)
    //   if(checkuserprofile){
    //     res.status(500).json({
    //       message: "User profile already exists!",
    //     });
    //   }
    const user = await Userprofile.create({
      gender: gender,
      phonenumber: phonenumber,
      bio: bio,
      picture: picture,
      userId: userId
    });
    return res
      .status(200)
      .json({ status: 200, message: 'User-Profile Created Successfully',user});
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async function (req, res) {
  try {
    const { gender, phonenumber, bio, picture } = req.body
    return Userprofile
      .findByPk(req.params.userprofileId)
      .then((userprofile) => {
        userprofile.update({
          gender: gender || userprofile.gender,
          phonenumber: phonenumber || userprofile.phonenumber,
          bio: bio || userprofile.bio,
          picture: picture || userprofile.picture
        })
          .then((updatedProfile) => {
            res.status(200).send({
              message: 'User profile updated successfully',
              data: {
                gender: gender || updatedProfile.gender,
                phonenumber: phonenumber || updatedProfile.phonenumber,
                bio: bio || updatedProfile.bio,
                picture: picture || updatedProfile.picture
              }
            })
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.delete = async function (req, res) {
  try {
    return User
      .findByPk(req.params.userprofileId)
      .then(userprofile => {
        if (!userprofile) {
          return res.status(400).send({
            message: 'User profile Not Found',
          });
        }
        return userprofile
          .destroy()
          .then(() => res.status(200).send({
            message: 'User Profile successfully deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

