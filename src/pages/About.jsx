import { Container, Row, Col } from "react-bootstrap";
import Foter from "./Footer";

const About = () => {
  return (
    <>
      <Container fluid className="" id="hakkimizda">
        <Container>
          <Row className="section-title text-center wow fadeInDown">
            <Col xs={12}>
              <h2>
                <strong>HAKKIMIZDA</strong>
              </h2>
            </Col>
            <Row>
              <Col xs={12}>
                <p>
                  Firmamız 1985 yılında alçı sektöründe faaliyete
                  başlamıştır.2000 yılından itibaren bünyesine prekast cephe
                  kaplama işleri de dahil etmiştir. Faaliyetlerine PROPROJEYAPI
                  olarak devam etmektedir.
                </p>
              </Col>
            </Row>
          </Row>

          <Row>
            <Col md={6}>
              <img
                src={process.env.PUBLIC_URL + "about.png"}
                className="img-responsive"
                alt=""
              />
            </Col>

            <Col md={6}>
              <h4>Misyonumuz</h4>
              <p>
                Kaliteli ürün ve hizmet sağlamanın temel gereklilikleri olan ;
                modern teknoloji, kaliteli ekipman ve deneyimli işgücü
                kullanarak ; müşteri odaklı kalite politikası çerçevesinde,
                güçlü sinerji ile çalışmalar yapmaktadır.
              </p>
              <h4>Vizyonumuz</h4>
              <p>
                Geçmişten geleceğe ilerlerken büyüklerin tecrübesi ile göz
                zevklerine uygun olarak hayata yeni bakış açısı getiren
                ürünlerin peşinden koşmaktayız.
              </p>
              <Row>
                <Col xs={12} sm={6} lg={6}>
                  <ul>
                    <li>Hızlı Çözüm</li>
                    <li>Güven</li>
                    <li>Kalite</li>
                    <li>Tecrübe</li>
                  </ul>
                </Col>
                <Col xs={12} sm={6} lg={6}>
                  <ul>
                    <li>Zor detaylarda pratik çözümler</li>
                    <li>Geçmişten gelen iş bilgisinin yansıması</li>
                    <li>Asla tesadüf olmayan deneyimle sonuca giden ekip</li>
                    <li>Planlama , beceri ve tecrübe ile krizi yönetebilme</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Foter />
    </>
  );
};
export default About;
