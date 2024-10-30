import React, { useState, useEffect } from "react";
import pix from "../Images/get1.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { Supabase } from "../config/supabase-config";
import { useLocation } from "react-router-dom";

const TalentSignUp = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    if (!image) {
      console.error("No image selected");
      console.log("No image selected");
      return;
    }

    const { data, error } = await Supabase.storage
      .from("profile_picture")
      .upload(`images/${image.name}`, image);

    if (error) {
      console.error("Error uploading image:", error.message);
      console.log("Error uploading image:", error.message);
    } else {
      let profile_picture = data.path;

      Supabase.from("techette")
        .insert([
          {
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            metadata: formData,
            profile_picture
          },
        ])
        .select()
        .then((response) => {
          console.log(response.error);
          // navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });

      // You can handle the success as needed (e.g., update state, show a success message).
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // Enable scrolling
  }, [pathname]);

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  const handleSecond = () => {
    setFirst(true);
    setSecond(false);
  };

  const navigate = useNavigate();

  const saveItem = () => {
    navigate("/login");
  };

  //   Sign Up Validation
  const initialValues = {
    track: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    skills: "",
    password: "",
    tech_role: "",
    company_name: "",
    company_location: "",
    duration: "",
    length: "",
    fb: "",
    twitter: "",
    linkedin: "",
    lang1: "",
    lang2: "",
    image: "",
    about: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [inputValue, setInputValue] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  //   const handleFirst = (values) =>{
  //     if (!values.fullname) {
  //         alert('one')
  //     }else{
  //          setFirst(false);
  //         setSecond(true);
  //     }

  // }

  const handleFirst = (e) => {
    setFormErrors(submit(formData));
    // setIsSubmit(true);
  };

  const submit = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.track) {
      errors.track = "Track is required";
    } else if (!values.fullname) {
      errors.fullname = "Full name is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    } else if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!values.address) {
      errors.address = "Address is required";
    } else if (!values.gender) {
      errors.gender = "Select your gender";
    } else if (!values.skills) {
      errors.skills = "Skills are required";
    } else if (!values.password) {
      errors.password = "Enter preferred password";
    } else if (!values.tech_role) {
      errors.tech_role = "Field cannot be empty";
    } else if (!values.company_name) {
      errors.company_name = "Field cannot be empty";
    } else if (!values.company_location) {
      errors.company_location = "Field cannot be empty";
    } else if (!values.duration) {
      errors.duration = "Field cannot be empty";
    } else if (!values.length) {
      errors.length = "Field cannot be empty";
    } else {
      setFirst(false);
      setSecond(true);
    }
    return errors;
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fb) {
      errors.fb = "Field cannot be empty";
    } else if (!values.twitter) {
      errors.twitter = "Field cannot be empty";
    } else if (!values.linkedin) {
      errors.linkedin = "Field cannot be empty";
    } else if (!values.lang1) {
      errors.lang1 = "Field cannot be empty";
    } else if (!values.lang2) {
      errors.lang2 = "Field cannot be empty";
    } else if (!values.about) {
      errors.about = "Field cannot be empty";
    } else {
      console.log(formData);
      uploadImage();
      // Supabase.from("opobo")
      //   .select("*")
      //   .then((response) => {
      //     console.log(response);
      //   });
    }
    return errors;
  };

  return (
    <div>
      <Navbar />
      <section class="login sign tal">
        <div class="welcome">
          <img src={pix} alt="" />
        </div>
        <div class="form">
          <div className="form-c">
            {first ? (
              <>
                <h2>Apply to Join Techettes Top Talents</h2>
                <p>
                  Techettes is a network of female talents in design and
                  technology.
                </p>

                <label htmlFor="">
                  {" "}
                  <select
                    value={formData.track}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        track: e.target.value,
                      });
                    }}
                    className="sel"
                  >
                    <option value="">I'm applying as</option>
                    <option value="developer">Developer</option>
                    <option value="product-designer">Product Designer</option>
                    <option value="digital marketer">Digital Marketer</option>
                  </select>
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.track}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.fullname}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        fullname: e.target.value,
                      });
                    }}
                    placeholder="Full Name"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.fullname}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}
                    class="inp"
                    placeholder="Email Address"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.email}
                  </p>
                </label>

                {/* <input type="text" name="" id="" placeholder='Address' className='inp'/> */}

                <label htmlFor="">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      });
                    }}
                    placeholder="Phone Number"
                    className="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.phone}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        address: e.target.value,
                      });
                    }}
                    placeholder="Address e.g Port-harcourt, Rivers State"
                    className="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.address}
                  </p>
                </label>

                <label htmlFor="">
                  {" "}
                  <select
                    value={formData.gender}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        gender: e.target.value,
                      });
                    }}
                    className="sel"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.gender}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        skills: e.target.value,
                      });
                    }}
                    placeholder="Skills e.g Prototyping, Visual Design, Wireframing "
                    className="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.skills}
                  </p>
                </label>

                <label htmlFor="">
                  <div class="eye">
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        });
                      }}
                      placeholder="Password"
                    />
                    {/* <img src="../assets/images/eye1.png" alt=""/> */}
                  </div>

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.password}
                  </p>
                </label>

                <h1>EXPERIENCE</h1>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.tech_role}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        tech_role: e.target.value,
                      });
                    }}
                    placeholder="tech role( e.g Developer)"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.tech_role}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.company_name}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        company_name: e.target.value,
                      });
                    }}
                    placeholder="Company Name"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.company_name}
                  </p>
                </label>

                <label htmlFor="">
                  <div className="inps">
                    <span>Resumption date</span>

                    <input
                      type="date"
                      value={formData.duration}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          duration: e.target.value,
                        });
                      }}
                      placeholder="Start Date"
                      class="inp inp2"
                    />
                  </div>

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.duration}
                  </p>
                </label>

                <label htmlFor="">
                  <div className="inps">
                    <span>Employment Duration</span>

                    <input
                      type="text"
                      value={formData.length}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          length: e.target.value,
                        });
                      }}
                      placeholder="Employment Duration"
                      class="inp inp2"
                    />
                  </div>

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.length}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.company_location}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        company_location: e.target.value,
                      });
                    }}
                    placeholder="Company Location"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.company_location}
                  </p>
                </label>

                <button type="button" className="next" onClick={handleFirst}>
                  NEXT
                </button>
              </>
            ) : null}

            {second ? (
              <>
                <h1 className="sos">Social Profile</h1>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.fb}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        fb: e.target.value,
                      });
                    }}
                    placeholder="Facebook link"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.fb}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.twitter}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        twitter: e.target.value,
                      });
                    }}
                    placeholder="Twitter link"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.twitter}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        linkedin: e.target.value,
                      });
                    }}
                    placeholder="LinkedIn link"
                    class="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.linkedin}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.lang1}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        lang1: e.target.value,
                      });
                    }}
                    placeholder="language1"
                    className="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.lang1}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="text"
                    value={formData.lang2}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        lang2: e.target.value,
                      });
                    }}
                    placeholder="language2"
                    className="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.lang2}
                  </p>
                </label>

                <label htmlFor="">
                  <input
                    type="file"
                    accept="/image"
                    // value={formData.image}
                    onChange={handleImageChange}
                    placeholder="Upload image"
                    className="inp"
                  />

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.image}
                  </p>
                </label>

                <label htmlFor="" className="txt-area">
                  <textarea
                    value={formData.about}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        about: e.target.value,
                      });
                    }}
                    cols="30"
                    rows="10"
                    placeholder="About Yourself"
                    className="inp textarea"
                  ></textarea>

                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.about}
                  </p>
                </label>

                <h4 style={{ paddingBottom: "25px", textAlign: "start" }}>
                  By submitting, you acknowledge that you have read and agreed
                  to our{" "}
                  <span>
                    <a href="">Terms and Conditions</a>
                  </span>{" "}
                  and{" "}
                  <span>
                    <a href="">Privacy Policy.</a>{" "}
                  </span>
                </h4>

                <input
                  type="submit"
                  value="Apply to Join Techettes"
                  class="submit"
                  onClick={handleSubmit}
                />

                <h4 className="alr">
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Login</Link>
                  </span>{" "}
                </h4>
                <br />

                <button className="prev" onClick={handleSecond}>
                  PREV
                </button>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentSignUp;
