import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../InputField";
import TextAreaField from "../TextAreaFiled";
import CustomButton from "../CustomButton";
import profile from "../../Api/profile";
import "./style.css";

const Form = () => {
  const navigate = useNavigate();
  const data = {
    name: profile.info.name,
    profileImg: profile.image,
    email: profile.professoanlLink[1].url,
    profession: profile.info.designation,
    website: profile.info.website,
    about: profile.description[0].desc,
    intrest: profile.description[1].desc,
    linkedin: profile.professoanlLink[0].url,
    twitter: profile.socialLink[0].url,
    facebook: profile.socialLink[1].url,
    instagram: profile.socialLink[2].url,
    github: profile.socialLink[3].url,
  };
  const [formArray, setFormArray] = useState(data);
  onsubmit = (e) => {
    e.preventDefault();
    profile.info.name = formArray.name;
    profile.info.designation = formArray.profession;
    profile.info.website = formArray.website;
    profile.info.image = formArray.profileImg;
    profile.description[0].desc = formArray.about;
    profile.description[1].desc = formArray.intrest;
    profile.professoanlLink[0].url = formArray.linkedin;
    profile.professoanlLink[1].url = formArray.email;
    profile.socialLink[0].url = formArray.twitter;
    profile.socialLink[1].url = formArray.facebook;
    profile.socialLink[2].url = formArray.instagram;
    profile.socialLink[3].url = formArray.github;
    navigate("/");
  };

  const handelChange = (e) => {
    setFormArray({
      ...formArray,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "profileImg") {
      setFormArray({
        ...formArray,
        [formArray.profileImg]: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <form>
      <section>
        <h1>Personal Info</h1>
        <InputField
          label="Full name"
          type="text"
          id="name"
          name="name"
          onChange={handelChange}
          value={formArray.name}
        />
        <InputField
          label="profile image"
          type="file"
          id="profileimg"
          name="profileImg"
          onChange={handelChange}
        />
        <InputField
          label="email"
          type="text"
          id="email"
          name="email"
          onChange={handelChange}
          value={formArray.email}
        />
        <InputField
          label="profession"
          type="text"
          id="profession"
          name="profession"
          onChange={handelChange}
          value={formArray.profession}
        />
        <InputField
          label="website Link"
          type="text"
          id="website"
          name="website"
          onChange={handelChange}
          value={formArray.website}
        />
      </section>
      <section>
        <h1>Description</h1>
        <TextAreaField
          label="about"
          type="text"
          id="about"
          name="about"
          onChange={handelChange}
          value={formArray.about}
        />
        <TextAreaField
          label="intrest"
          type="text"
          id="intrest"
          name="intrest"
          onChange={handelChange}
          value={formArray.intrest}
        />
      </section>
      <section>
        <h1>Social Links</h1>
        <InputField
          label="linkedin"
          type="text"
          id="linkedin"
          name="linkedin"
          onChange={handelChange}
          value={formArray.linkedin}
        />
        <InputField
          label="twitter"
          type="text"
          id="twitter"
          name="twitter"
          onChange={handelChange}
          value={formArray.twitter}
        />
        <InputField
          label="facebook"
          type="text"
          id="facebook"
          name="facebook"
          onChange={handelChange}
          value={formArray.facebook}
        />
        <InputField
          label="instagram"
          type="text"
          id="instagram"
          name="instagram"
          onChange={handelChange}
          value={formArray.instagram}
        />
        <InputField
          label="github"
          type="text"
          id="github"
          name="github"
          onChange={handelChange}
          value={formArray.github}
        />
      </section>
      <div>
        <CustomButton title="Submit Form" type="submit" />
      </div>
    </form>
  );
};

export default Form;
