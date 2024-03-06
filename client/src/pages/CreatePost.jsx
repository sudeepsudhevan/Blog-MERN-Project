import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
    return (
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-3xl font-semibold text-center my-7">Create a Post</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row justify-between">
                    <TextInput type="text" id="title" placeholder="Title" required
                        className="flex-1"></TextInput>
                    <Select>
                        <option value="uncategorized">Select a category</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="nextjs">NextJS</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                    </Select>
                </div>
                <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                    <FileInput type="file" accept="image/*" />
                    <Button type="button" gradientDuoTone='purpleToBlue'
                        size='sm' outline>Upload Image</Button>
                </div>
                <ReactQuill theme="snow" placeholder="Write your post here..." className="h-72 mb-12" required />
                <Button type="submit" gradientDuoTone='purpleToPink'>Publish</Button>
            </form>
        </div>
    )
}