import "../styles.css";
import Joanne from "../assets/Joanne.png";
import Mia from "../assets/Mia.png";
import Maika from "../assets/Maika.png";

const teamMembers = [
  {
    imgsrc: Joanne,
    alt: "Joanne",
    name: "紀柔安",
    studentId: "R11142005",
    email: "R11142005@ntu.edu.tw",
  },
  {
    imgsrc: Mia,
    alt: "Mia",
    name: "葉凱晴",
    studentId: "R11142006",
    email: "R11142006@ntu.edu.tw",
  },
  {
    imgsrc: Maika,
    alt: "Maika",
    name: "橘內每歌",
    studentId: "R11142010",
    email: "R11142010@ntu.edu.tw",
  },
];

function Person({ name, studentId, email, imgsrc, alt }) {
  return (
    <div className="item">
      <img
        src={imgsrc}
        alt={alt}
        style={{ height: "200px", marginTop: "40px" }}
      />
      <p>
        姓名：{name}
        <br />
        學號：{studentId}
        <br />
        Email: {email}
      </p>
    </div>
  );
}

export default function Aboutus() {
  return (
    <div className="article">
      <div className="wrap">
        {teamMembers.map((item) => {
          return <Person key={item.name} {...item} />;
        })}
      </div>
    </div>
  );
}
