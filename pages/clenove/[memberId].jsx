import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import styles from 'components/members/members.module.css';
import MemberThumb1 from 'public/images/placeholders/petra_detersova.png';

const MemberDetail = () => (
    <>
        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container mt-5 text-center">
                <h1>Petra Detersová</h1>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className={cx(styles.memberDetailTopText, 'col-md-6 p-5')}>
                <div>
                    <p>Členkou Narativu som sa stala s kamerou v ruke a doteraz v ňom plním hlavne túto rolu.</p>
                    <p>Lorem Ipsum</p>
                    <p>Dolor sit amet</p>
                </div>
            </div>
            <div className={cx(styles.noPadding, 'col-md-6')}>
                <Image className="img-fluid w-100" src={MemberThumb1} alt="Petra Detra" />
            </div>
        </div>
        <div className={cx(styles.memberDetailContactsBox, 'text-center py-5')}>
            <h1>Kontakty</h1>
            <span>
                <i className="bi bi-phone" />
                +420 123 456 678
            </span>
            <span>
                <i className="bi bi-envelope" />
                petra.detra@narativ.cz
            </span>
            <span>
                <i className="bi bi-globe" />
                petradetra.com
            </span>
        </div>
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <p>
                            Členkou Narativu som sa stala s kamerou v ruke a doteraz v ňom plním hlavne túto rolu. Kdesi
                            na začiatku boli diskusné Meganarativy v temnom Clubwashi, postupne pribúdali najrôznejšie
                            workshopy, akcie, konferencie – skrátka stretnutia a dialógy. A ani som si nevšimla a s
                            Narativom som nielen zrástla, ale aj vyrástla.
                        </p>
                        <p>
                            Vzdelaním som psychologička a žurnalistka, v súčasnej dobe však sedím na stoličke
                            personalistky. Zatiaľ nemám vlastnú prax a nie som frekventantkou žiadneho výcviku. Možno to
                            príde neskôr. Prax zbieram predovšetkým v rozhovorch. S kýmkoľvek. Nezabudnuteľnou však pre
                            mňa bola napríklad sebaskúsenostná skupina s doktorom Dvořáčkom, prax na psychiatrickej
                            klinike v Bohuniciach v Brne, množstv reflektujúcich tímov, ktoré boli aj predmetom mojej
                            diplomky a, čo si budeme hovoriť, aj niektoré pracovné pohovory sa občas podobajú skôr
                            stretnutiam na uzavretom oddelení :)
                        </p>
                        <p>
                            Aj keď stojím často za kamerou, mám šancu dôkladne sa zoznámiť s prístupom toho-ktorého
                            terapeuta pri spracovávaní videa. Tak tomu bolo s Harlene Anderson, s Rocío Chaveste
                            Gutiérrez, s Ann-Ritou Gjertzen, Chrisom Kinmanom, Jaakkkom Seikkulom, Sylviou London,
                            Petrom Roberom, Johnom Shottrom, Justine van Lawick a … pekne sa nám ten zoznam rozrastá.
                            Každý z nich priniesol do môjho pohľadu na terapiu a život niečo nové, inak nezískateľné. V
                            Narative sa cítim ako nasávač múdrosti a inšpirácie od celej skupiny, ktorá má v tomto silu
                            dlhého zástupu profesorov a učebníc. Z tohoto a ďalších dôvodov verím, že Narativ bude trvať
                            tak dlho, ako svieži dych po žuvačke Winterfresh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default MemberDetail;
