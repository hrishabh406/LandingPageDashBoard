// import React, { useState } from 'react';

// const initialData = {
//   name: 'Maksudur Rahman',
//   email: 'maksudur@example.com',
//   phone: '+880 1924699597',
//   address: '119 North Jatrabari, Dhaka 1294, Bangladesh',
//   language: 'Bangla',
//   timezone: '(GMT+6) Time in Bangladesh',
//   nationality: 'Bangladeshi',
//   merchantId: 'XYZ20150403095',
// };

// const ProfileSettings = () => {
//   const [formData, setFormData] = useState(initialData);
//   const [editMode, setEditMode] = useState(false);
//   const [tempData, setTempData] = useState(initialData);
//   const [profileImage, setProfileImage] = useState(null);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setTempData({ ...tempData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     const validTypes = ['image/jpeg', 'image/jpg', 'image/svg+xml'];
//     if (!validTypes.includes(file.type)) {
//       setError('Only JPG and SVG files are allowed.');
//       return;
//     }

//     if (file.size > 1024 * 1024) {
//       setError('File size should be less than 1 MB.');
//       return;
//     }

//     setError('');
//     setProfileImage(URL.createObjectURL(file));
//   };

//   const handleSave = () => {
//     setFormData(tempData);
//     setEditMode(false);
//   };

//   const handleCancel = () => {
//     setTempData(formData);
//     setEditMode(false);
//     setError('');
//   };

//   return (
//     <div className="container my-4">
//       <div className="card shadow-sm">
//         <div className="card-header d-flex justify-content-between align-items-center">
//           <h5 className="mb-0">Your Profile</h5>
//           {!editMode ? (
//             <button className="btn btn-sm btn-outline-primary" onClick={() => setEditMode(true)}>
//               Edit
//             </button>
//           ) : (
//             <div className="d-flex gap-2">
//               <button className="btn btn-sm btn-success" onClick={handleSave}>Save</button>
//               <button className="btn btn-sm btn-secondary" onClick={handleCancel}>Cancel</button>
//             </div>
//           )}
//         </div>

//         <div className="card-body">
//           {/* Profile Image Upload */}
//           <div className="mb-3 text-center">
//             {profileImage ? (
//               <img src={profileImage} alt="Profile" className="rounded-circle" width="100" height="100" />
//             ) : (
//               <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: 100, height: 100 }}>
//                 <span>No Image</span>
//               </div>
//             )}
//             {editMode && (
//               <div className="mt-2">
//                 <input type="file" accept=".jpg,.jpeg,.svg" onChange={handleImageChange} />
//                 {error && <div className="text-danger mt-1">{error}</div>}
//               </div>
//             )}
//           </div>

//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label className="form-label">Full Name</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="name" value={tempData.name} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.name}</p>
//               )}
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Phone</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="phone" value={tempData.phone} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.phone}</p>
//               )}
//             </div>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             {editMode ? (
//               <input type="email" className="form-control" name="email" value={tempData.email} onChange={handleChange} />
//             ) : (
//               <p className="form-control-plaintext">{formData.email}</p>
//             )}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Address</label>
//             {editMode ? (
//               <textarea className="form-control" name="address" value={tempData.address} onChange={handleChange}></textarea>
//             ) : (
//               <p className="form-control-plaintext">{formData.address}</p>
//             )}
//           </div>

//           <div className="row">
//             <div className="col-md-4">
//               <label className="form-label">Language</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="language" value={tempData.language} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.language}</p>
//               )}
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Time Zone</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="timezone" value={tempData.timezone} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.timezone}</p>
//               )}
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Nationality</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="nationality" value={tempData.nationality} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.nationality}</p>
//               )}
//             </div>
//           </div>

//           <div className="mt-3">
//             <label className="form-label">Merchant ID</label>
//             <p className="form-control-plaintext">{formData.merchantId}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ProfileSettings = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const profileData = location.state?.profile;

//   const [formData, setFormData] = useState(profileData || {});
//   const [tempData, setTempData] = useState(profileData || {});
//   const [profileImage, setProfileImage] = useState(profileData?.profile_pic || null);
//   const [editMode, setEditMode] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!profileData) {
//       navigate('/details');
//     }
//   }, [profileData, navigate]);

//   const handleChange = (e) => {
//     setTempData({ ...tempData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
//     if (!validTypes.includes(file.type)) {
//       setError('Only JPG, PNG, and SVG files are allowed.');
//       return;
//     }

//     if (file.size > 1024 * 1024) {
//       setError('File size should be less than 1 MB.');
//       return;
//     }

//     setError('');
//     setProfileImage(file);
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const form = new FormData();

//       form.append('full_name', tempData.full_name);
//       form.append('email', tempData.email);
//       form.append('phone', tempData.phone);
//       form.append('address', tempData.address);
//       form.append('language', tempData.language);
//       form.append('time_zone', tempData.time_zone);
//       form.append('nationality', tempData.nationality);
//       form.append('merchant_id', tempData.merchant_id);

//       if (profileImage instanceof File) {
//         form.append('profile_pic', profileImage);
//       }

//       await axios.put('http://192.168.1.6:5000/api/admin/profile', form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('✅ Profile updated successfully');
//       navigate('/details');
//     } catch (err) {
//       console.error('❌ Error updating profile:', err);
//       alert('Failed to update profile.');
//     }
//   };

//   const handleCancel = () => {
//     setTempData(formData);
//     setEditMode(false);
//     setError('');
//   };

//   return (
//     <div className="container my-4">
//       <div className="card shadow-sm">
//         <div className="card-header d-flex justify-content-between align-items-center">
//           <h5 className="mb-0">Your Profile</h5>
//           {!editMode ? (
//             <button className="btn btn-sm btn-outline-primary" onClick={() => setEditMode(true)}>
//               Edit
//             </button>
//           ) : (
//             <div className="d-flex gap-2">
//               <button className="btn btn-sm btn-success" onClick={handleSave}>Save</button>
//               <button className="btn btn-sm btn-secondary" onClick={handleCancel}>Cancel</button>
//             </div>
//           )}
//         </div>

//         <div className="card-body">
//           <div className="mb-3 text-center">
//             {profileImage ? (
//               <img
//                 src={profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage}
//                 alt="Profile"
//                 className="rounded-circle"
//                 width="100"
//                 height="100"
//               />
//             ) : (
//               <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: 100, height: 100 }}>
//                 <span>No Image</span>
//               </div>
//             )}
//             {editMode && (
//               <div className="mt-2">
//                 <input type="file" accept=".jpg,.jpeg,.png,.svg" onChange={handleImageChange} />
//                 {error && <div className="text-danger mt-1">{error}</div>}
//               </div>
//             )}
//           </div>

//           {/* Full Name and Phone */}
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label className="form-label">Full Name</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="full_name" value={tempData.full_name} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.full_name}</p>
//               )}
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Phone</label>
//               {editMode ? (
//                 <input type="text" className="form-control" name="phone" value={tempData.phone} onChange={handleChange} />
//               ) : (
//                 <p className="form-control-plaintext">{formData.phone}</p>
//               )}
//             </div>
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             {editMode ? (
//               <input type="email" className="form-control" name="email" value={tempData.email} onChange={handleChange} />
//             ) : (
//               <p className="form-control-plaintext">{formData.email}</p>
//             )}
//           </div>

//           {/* Address */}
//           <div className="mb-3">
//             <label className="form-label">Address</label>
//             {editMode ? (
//               <textarea className="form-control" name="address" value={tempData.address} onChange={handleChange}></textarea>
//             ) : (
//               <p className="form-control-plaintext">{formData.address}</p>
//             )}
//           </div>

//           {/* Language, Timezone, Nationality */}
//           <div className="row">
//             <div className="col-md-4">
//               <label className="form-label">Language</label>
//               <input type="text" className="form-control" name="language" value={tempData.language} onChange={handleChange} disabled={!editMode} />
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Time Zone</label>
//               <input type="text" className="form-control" name="time_zone" value={tempData.time_zone} onChange={handleChange} disabled={!editMode} />
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Nationality</label>
//               <input type="text" className="form-control" name="nationality" value={tempData.nationality} onChange={handleChange} disabled={!editMode} />
//             </div>
//           </div>

//           {/* Merchant ID */}
//           <div className="mt-3">
//             <label className="form-label">Merchant ID</label>
//             <p className="form-control-plaintext">{formData.merchant_id}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;   



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profileData = location.state?.profile;

  const [formData, setFormData] = useState(profileData || {});
  const [tempData, setTempData] = useState(profileData || {});
  const [profileImage, setProfileImage] = useState(profileData?.profile_pic || null);
  const [editMode, setEditMode] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!profileData) {
      navigate('/details');
    }
  }, [profileData, navigate]);

  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      setError('Only JPG, PNG, and SVG files are allowed.');
      return;
    }

    if (file.size > 1024 * 1024) {
      setError('File size should be less than 1 MB.');
      return;
    }

    setError('');
    setProfileImage(file);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const form = new FormData();

      form.append('full_name', tempData.full_name);
      form.append('email', tempData.email);
      form.append('phone', tempData.phone);
      form.append('address', tempData.address);
      form.append('language', tempData.language);
      form.append('time_zone', tempData.time_zone);
      form.append('nationality', tempData.nationality);
      form.append('merchant_id', tempData.merchant_id);

      if (profileImage instanceof File) {
        form.append('profile_pic', profileImage);
      }

      // 🔧 Updated API endpoint
      await axios.put('http://192.168.1.6:5000/api/admin/update-profile', form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('✅ Profile updated successfully');

      // 🔧 Pass `updated: true` to trigger useEffect in Detailspage
      navigate('/details', { state: { updated: true } });

    } catch (err) {
      console.error('❌ Error updating profile:', err);
      alert('Failed to update profile.');
    }
  };

  const handleCancel = () => {
    setTempData(formData);
    setEditMode(false);
    setError('');
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Your Profile</h5>
          {!editMode ? (
            <button className="btn btn-sm btn-outline-primary" onClick={() => setEditMode(true)}>
              Edit
            </button>
          ) : (
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-success" onClick={handleSave}>Save</button>
              <button className="btn btn-sm btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="mb-3 text-center">
            {profileImage ? (
              <img
                src={profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage}
                alt="Profile"
                className="rounded-circle"
                width="100"
                height="100"
              />
            ) : (
              <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: 100, height: 100 }}>
                <span>No Image</span>
              </div>
            )}
            {editMode && (
              <div className="mt-2">
                <input type="file" accept=".jpg,.jpeg,.png,.svg" onChange={handleImageChange} />
                {error && <div className="text-danger mt-1">{error}</div>}
              </div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              {editMode ? (
                <input type="text" className="form-control" name="full_name" value={tempData.full_name} onChange={handleChange} />
              ) : (
                <p className="form-control-plaintext">{formData.full_name}</p>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              {editMode ? (
                <input type="text" className="form-control" name="phone" value={tempData.phone} onChange={handleChange} />
              ) : (
                <p className="form-control-plaintext">{formData.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            {editMode ? (
              <input type="email" className="form-control" name="email" value={tempData.email} onChange={handleChange} />
            ) : (
              <p className="form-control-plaintext">{formData.email}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            {editMode ? (
              <textarea className="form-control" name="address" value={tempData.address} onChange={handleChange}></textarea>
            ) : (
              <p className="form-control-plaintext">{formData.address}</p>
            )}
          </div>

          <div className="row">
            <div className="col-md-4">
              <label className="form-label">Language</label>
              <input type="text" className="form-control" name="language" value={tempData.language} onChange={handleChange} disabled={!editMode} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Time Zone</label>
              <input type="text" className="form-control" name="time_zone" value={tempData.time_zone} onChange={handleChange} disabled={!editMode} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Nationality</label>
              <input type="text" className="form-control" name="nationality" value={tempData.nationality} onChange={handleChange} disabled={!editMode} />
            </div>
          </div>

          <div className="mt-3">
            <label className="form-label">Merchant ID</label>
            <p className="form-control-plaintext">{formData.merchant_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
