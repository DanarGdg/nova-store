import React from 'react'
import CustomForm from '../../components/FormInput'
import Navbar from '../../components/Navbar'
import '../../styles/edit-profile.css'
import Footer from '../../components/Footer'
import { useProfileApi } from '../../context/api/ProfileApi'
import { Link } from 'react-router-dom'

function EditProfile() {
    const context = useProfileApi()
    const handleFileAvatar = function (e) {
        context.setAvatar(e.target.files[0])
    };

    return (
        <form className='edit-profile' onSubmit={context.handleEditProfile}>
            <Navbar/>
            <div className=''>
                <p className='current-page'>Edit Info</p>
                <div class="border-line"></div>
            </div>
            <div className='wrapper-upload-photo'>
                <div className="box">
                    <img class="img-user" src={context.profileData.user?.pf_avatar} alt="" />
                </div>
                <label className='upload-photo'>
                    <input 
                        type='file'
                        onChange={handleFileAvatar}
                        accept="image/png, image/gif, image/jpeg"
                    />
                    Upload Profile Photo
                </label>
            </div>
            <div className='container'>
                <CustomForm title="NAME" type='text' value={context.name} func={context.setName} />
                <CustomForm title="EMAIL" type='text' value={context.email} func={context.setEmail} />
                <CustomForm title="PASSWORD" type='text' value={context.password} func={context.setPassword} />
                <CustomForm title="PHONE NUMBER" type='number' value={context.phoneNumber} func={context.setPhoneNumber} />
            </div>
            <div className='wrapper-action'>
                <button type='submit' className='btn edit'>Edit</button>
                <Link to={'/profile'}>
                    <button className='btn back'>Back</button>
                </Link>
            </div>
            <Footer/>
        </form>
    )
}

export default EditProfile