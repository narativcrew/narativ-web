import { useRouter } from "next/router";
import cx from "classnames";
import styles from "/components/events/events.module.scss";
import { BlockButton } from "../../components/Buttons";

const EventDetail = () => {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <>
      <div className="container mt-5">
        <div className={cx(styles.eventDetailHeadingBox, "row")}>
          <div className="col-md-12 text-center">
            <h1>Workshop o dialogické rodinné terapii s finskou lektorkou</h1>
            <span>(id:{eventId})</span>
            <span>
              <i className="bi bi-cash-coin"></i>1500 Kc
            </span>
            <span>
              <i className="bi bi-calendar"></i>23.5.2022
            </span>
            <span>
              <i className="bi bi-geo-alt"></i>Brno
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <h4>Detaily workshopu</h4>
            <p>
              Skupina Narativ si Vás dovoluje pozvat na jedinečný workshop o
              dialogické práci s rodinami s vynikající finskou lektorkou,
              Eijou-Liisou Rautiainen, Ph.D., který se uskuteční 16.-17. října
              2020 v Brně.
              <br />
              <br />
              Budeme se věnovat terapeutické práci s rodinou a sociálními sítěmi
              s využitím myšlenek dialogických a reflektujících přístupů k
              terapii. Můžete se těšit na praktické nápady, návrhy a vodítka,
              jak vytvořit dialogický prostor, zvládat překážky při práci s
              rodinami a sítěmi a jak pracovat s rodinou ve vašich vlastních
              pracovních kontextech. Workshop je vhodný jak pro začínající i
              zkušené rodinné terapeuty, tak pro pracovníky nejrůznějších
              pomáhajících profesí, kteří chtějí svou práci obohatit o prvky
              rodinné terapie. Tlumočení z angličtiny zajištěno.
            </p>
          </div>
          <div className="col-md-3">
            <BlockButton>Přihlásit se na workshop</BlockButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
