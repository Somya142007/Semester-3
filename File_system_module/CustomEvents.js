import EventEmitter from 'node:events';
class FileUploader extends EventEmitter{
    upload(filename){
        console.log("File Uploaded")
       
        this.emit('fileUploaded', {filename});
    }
}