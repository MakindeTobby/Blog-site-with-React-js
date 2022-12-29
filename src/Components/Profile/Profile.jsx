import { useRef } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import DefaultLayout from "../../Layout/DefaultLayout"
import "./Profile.css"
export default function Profile() {
    const [file, setFile] = useState();
    const imgg = useRef(null);
    const onChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }
    const selectImg = () => {
        imgg.current.click()
    }
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap w-100" style={{ height: "100vh" }}>
            <div className="d-flex flex-wrap rounded-2 shadow-sm bg-light" style={{ width: "95%", height: "90vh" }}>
                <aside className="border border-start d-flex flex-column gap-2 " style={{ width: "20%" }}>

                    <div className="d-flex justify-content-center w-100  flex-column align-items-center gap-2 py-4 px-4  h-auto">
                        <div className="rounded-circle border border-5 preview-cont">
                            {file && <img src={URL.createObjectURL(file)} className="w-100 h-100 rounded-circle" />}
                            {!file && <img />}
                        </div>
                        <div>
                            {/* <label htmlFor="photo"><i className="fa-solid fa-camera"></i></label> */}
                            <input type="file" ref={imgg} className="form-control" onChange={e => onChange(e)} hidden />
                            <button className="btn" onClick={() => selectImg()}><i className="fa-solid fa-camera" /></button>
                        </div>
                        <h4>Dave Dexter</h4>
                    </div>


                    <div className=" d-flex flex-column w-100 gap-2">

                        <span className="bg-light  px-4 py-2 btn-sm menu  fw-bold " ><i className="fa-solid fa-house"></i> Account</span>


                        <span className="bg-light px-4 py-2 btn-sm menu  fw-bold" ><i className="fa-solid fa-key"></i> Password</span>


                        <span className="bg-light px-4 py-2 btn-sm menu  fw-bold" ><i className="fa-solid fa-fingerprint"></i> Security</span>


                        <span className="bg-light px-4 py-2 btn-sm menu  fw-bold" ><i className="fa-solid fa-bell"></i> Notification</span>


                    </div>
                </aside>
                <section className="" style={{ width: "75%" }}>
                    <div className="px-5 py-4">
                        <div className="d-flex align-items-center w-100  justify-content-between flex-wrap"> 
                        <h2>Account Settings</h2>  <Link className="text-dark font-bold" to={'/'}>GO BACK HOME</Link></div>
                        <form className="form mb-4 d-flex flex-column gap-2 w-100">
                            <div className="d-flex flex-wrap align-items-center w-100  gap-4 ">
                                <div className="w-50">
                                    <strong className="fw-normal text-muted">First Name</strong>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="w-50">
                                    <strong className="fw-normal text-muted">Last Name</strong>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="d-flex flex-wrap align-items-center w-100  gap-4 ">
                                <div className="w-50">
                                    <strong className="fw-normal text-muted">Email</strong>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="w-50">
                                    <strong className="fw-normal text-muted">Phone Number</strong>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="d-flex flex-wrap align-items-center w-100  gap-4 ">
                                <div className="w-50">
                                    <strong className="fw-normal text-muted">Company</strong>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="w-50">
                                    <strong className="fw-normal text-muted">Designation</strong>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="d-flex flex-wrap align-items-center w-100  gap-2 ">
                                <div className="w-100">
                                    <strong className="fw-normal text-muted">Bio</strong>
                                    <textarea name="" className="form-control" cols="30" rows="7"></textarea>
                                </div>
                            </div>
                        </form>

                        <div className="d-flex  gap-4">
                            <button className="btn btn-dark">Update</button>
                            <button className="btn">Cancel</button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
