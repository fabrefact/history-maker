import {Component} from "preact";
import {Button, DatePicker, Upload} from "antd";
import {useState} from "preact/hooks";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";

function AddMediaForm(props) {
     const [loading, setLoading] = useState(false);
     const [imageUrl, setImageUrl] = useState<string>();

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <form onSubmit={this.onSubmit}>
            <p>
            <label for="file">File</label>
            {/*    may have to write own upload component because this definitely doesn't use tus
                this component uses rc-upload under the hood, which does form upload
                could maybe use rc-upload customRequest to implement tus version
                Or just implement form-upload handling in api side
             */}
            <Upload id="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
            action="http://localhost:3000/media/">
                {uploadButton}
            </Upload>
            </p>
            <p>
                <label for="created_at">Created</label>
            <DatePicker id="created_at" />
            </p>
            <Button type="primary">Submit</Button>
        </form>
    );
}

export default AddMediaForm