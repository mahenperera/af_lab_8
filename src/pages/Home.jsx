import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Button from "../components/Button";
import Testimonial from "../components/Testimonial";
import Greeting from "../components/Greeting";

function Home() {
  const navigate = useNavigate();

  return (
    <section id="home">
      <Greeting />
      <p>Welcome to the Home page.</p>

      <Banner />

      <div className="card-container">
        <Card
          image="https://img.freepik.com/premium-vector/flat-isometric-illustration-web-developer-working-computer-setup_1272652-317.jpg"
          title="Web Development"
          description="We create modern websites."
        />

        <Card
          image="https://media.licdn.com/dms/image/v2/C5612AQF3zlTTMvAYvA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520154595044?e=2147483647&v=beta&t=I0MYQl0tqt29-BonRdSWfCnIeyecKrKgBnIjamQRpJY"
          title="Mobile Apps"
          description="We build Android and iOS apps."
        />
      </div>

      <div onClick={() => navigate("/about")}>
        <Button text="Learn More" size="large" type="primary" />
      </div>

      <Testimonial
        name="John Doe"
        quote="Excellent service and amazing support!"
      />
    </section>
  );
}

export default Home;
