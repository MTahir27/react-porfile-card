import React from "react";
import ProfileDetail from "../ProfileDetail";
import ProfileFooter from "../ProfileFooter";
import ProfileImage from "../ProfileImage";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import "./style.css";

const ProfileCard = ({ profile }) => {
  return (
    <>
      <div className="cardContainer">
        <div className="btn-group" style={{ paddingTop: 0 }}>
          <Link to="/edit">
            <CustomButton title="Edit Card" />
          </Link>
          <CustomButton title="Print" />
        </div>
        <section className="profileCard">
          {profile.info.image && (
            <ProfileImage profileImage={profile.info.image} />
          )}

          <ProfileDetail profileDetail={profile} />
          {profile.socialLink && (
            <ProfileFooter socialLink={profile.socialLink} />
          )}
        </section>
      </div>
    </>
  );
};

export default ProfileCard;
