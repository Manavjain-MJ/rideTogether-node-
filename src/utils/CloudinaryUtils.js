const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name:"dckxpcwx2",
    api_key:"677692646632848",
    api_secret:"pc-F5UcWk1Tn0o7GVJ-HfPeO5b8"
})
const uploadFileToCloudinary = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "auto" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).end(fileBuffer); // ✅ Send file buffer
    });
};
// const uploadFileToCloudinary = async(file)=>{
//     const cloudinaryResponse = await cloudinary.uploader.upload(file.path)
//     return cloudinaryResponse
// }
module.exports={ uploadFileToCloudinary}