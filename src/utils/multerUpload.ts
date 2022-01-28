import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./")},
        filename: (req, file, cb) => {
            const ext = file.mimetype.split("/")[1];
            const fileNameOnly = file.originalname.split(".")[0];
            cb(null, `uploads/${fileNameOnly}-${Date.now()}.${ext}`);
        }
    }
);

const upload = multer ({
    storage: storage
})

export default upload;