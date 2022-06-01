import { NavLink } from "react-router-dom";

const Navabar = () => {
  return (
    <>
      <header className="text-center" name="home">
        <div className="intro-text">
          <h1 className="wow fadeInDown">
            <strong>
              <span className="color">PRO PROJE</span> YAPI
            </strong>
          </h1>
          <p className="wow fadeInDown">
            GEÇMIŞIN TECRÜBESI GELECEĞE DOKUNUYOR
          </p>
          <NavLink
            to="/projelerimiz"
            className="btn btn-default btn-lg page-scroll wow fadeInUp"
            data-wow-delay="200ms"
          >
            PROJELERİMİZ
          </NavLink>
        </div>
      </header>
    </>
  );
};
export default Navabar;
