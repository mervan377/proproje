import { Container,Row,Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container className="bg-dark">
        <Row>
          <Col>İletişim</Col>
        </Row>
        {/* <div id="iletisim" class="text-center"> */}
    {/* <div class="container">
      <div class="section-title wow fadeInDown">
        <h2><strong>İletişim</strong> </h2>
        <hr>
        <p> İletişim'e geçerek detaylı bilgi edinebilrsiniz. </p>
      </div>
      <div class="col-md-8 col-md-offset-2 wow fadeInUp" data-wow-delay="200ms">
        <div class="row">
          <div class="col-12">
            <h2 class="text-white mb-5"> Kastamonu Ofisimiz </h2>
          </div>
        </div>
        <div class="col-md-4"> <i class="fa fa-map-marker fa-2x"></i>
          <p> İnönü Mahallesi On Sekizinci Sokak No:32/D </p>
        </div>
        <div class="col-md-4"> <i class="fa fa-envelope-o fa-2x"></i>
          <p>info@proprojeyapi.com.tr</p>
        </div>
        <div class="col-md-4"> <i class="fa fa-phone fa-2x"></i>
          <p> <a href="tel:02164252230">0366 214 2666</a></p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="col-md-8 col-md-offset-2 wow fadeInUp mt-5" data-wow-delay="200ms">
        <div class="row">
          <div class="col-12">
            <h2 class="text-white mb-5"> İstanbul Ofisimiz </h2>
          </div>
        </div>
        <div class="col-md-4"> <i class="fa fa-map-marker fa-2x"></i>
          <p> İncirköy Mah. Mehmet Akif Ersoy Cad. No:59/B
            Beykoz/İstanbul </p>
        </div>
        <div class="col-md-4"> <i class="fa fa-envelope-o fa-2x"></i>
          <p>info@proprojeyapi.com.tr</p>
        </div>
        <div class="col-md-4"> <i class="fa fa-phone fa-2x"></i>
          <p> <a href="tel:02164252230">0216 425 2230</a></p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="col-md-8 col-md-offset-2 wow fadeInUp" data-wow-delay="400ms">
        <h3>Bizimle iletişime geçin </h3>

        <form id="contactForm" method="post" action="yorumekle.php">
          <div class="row">

            <div class="col-md-6">
              <div class="form-group">
                <input type="text" id="ad" name="ad" class="form-control" placeholder="Ad soyad" required="required">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <input type="email" id="email" name="email" class="form-control" placeholder="E-posta" required="required">
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <input type="tel" id="tel" name="tel" class="form-control" placeholder="Telefon" required="required">
              </div>
            </div>
          </div>

          <div class="form-group">
            <textarea name="mesaj" id="mesaj" name="mesaj" class="form-control" rows="4" placeholder="Mesaj" required></textarea>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="yaz">fwefwwfeew</div>
            </div>
          </div>
          <button type="submit" class="btn btn-default" id="send-form">Gönder</button>
        </form>
      </div>
    </div>
  </div> */}
      </Container>
    </>
  );
};
export default Contact;
