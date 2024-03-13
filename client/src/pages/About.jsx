export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-3 text-center">
                <div>
                    <h1 className="text-3xl font-semibold text-center my-7">About Reels Blog</h1>
                    <div className="text-md text-gray-500 flex flex-col gap-6">
                        <p>Reels Blog is a blog that provides tutorials and solutions for python and MERN web development.
                            Also you can dive deep into some topics.</p>
                        <p>Reels Blog is created by Sudeep Sudhevan help of youtube Tutorial</p>
                        <p>Github: <a className="text-teal-500" href="https://github.com/sudeepsudhevan">sudeepsudhevan</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}