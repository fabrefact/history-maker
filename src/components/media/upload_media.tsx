import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";

// Renaming Upload to Dragger results in different CSS styles being applied
const { Dragger } = Upload

// don't love having build-tool-specific variables sprinkled throughout code,
// probably want to create an env util
const UPLOAD_MEDIA_ENDPOINT = import.meta.env.HM_STORAGE_ENDPOINT + "/media/"

function UploadMediaForm() {
    // TODO: On successful file upload, save media URL to database

    {/*    antd Upload component uses rc-upload under the hood, which does multipart/form-data upload
           could use rc-upload customRequest to implement tus version

           See https://ant.design/components/upload for docs on Upload component

           Improvements:
             - use beforeUpload to use default request for small files, tus for large files
             - use post-request hooks to persist data/display better errors
             - fix styles/padding to be less ugly
     */}
    return (
            <Dragger id="file"
                     listType="picture"
                     multiple={true}
                     action={UPLOAD_MEDIA_ENDPOINT}
            >
                <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Supports single or bulk upload.
                </p>
            </Dragger>
    );
}

export default UploadMediaForm