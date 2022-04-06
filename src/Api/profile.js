import dummyImg from "../Assets/Images/dummy.jpg";
let profile = {
  info: {
    name: "Muhammad Tahir",
    designation: "Frontend Developer",
    website: "https://mt-projects.netlify.app/",
    image: dummyImg,
  },
  description: [
    {
      title: "About",
      desc: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
    },
    {
      title: "Interests",
      desc: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ],
  professoanlLink: [
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/mtahir27/",
    },
    {
      title: "email",
      url: "m.tahiridrees27@gmail.com",
    },
  ],
  socialLink: [
    {
      name: "twitter",
      url: "https://twitter.com/MTahir27",
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/tahirfsd27/",
    },
    { name: "instagram", url: "https://www.instagram.com/tahirfsd27/" },
    { name: "github", url: "https://github.com/MTahir27" },
  ],
};

if (!JSON.parse(localStorage.getItem("profile"))) {
  localStorage.setItem("profile", JSON.stringify(profile));
}
profile = JSON.parse(localStorage.getItem("profile"));

export default profile;
