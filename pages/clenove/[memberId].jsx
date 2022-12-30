import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import styles from 'components/members/members.module.css';

const MemberDetail = () => {
    const router = useRouter();
    const { memberId } = router.query;

    return (
        <>
            
            <div className={cx(styles.membersBgBox, 'py-3')}>
                <div className="container mt-5">
                    <h1>Petra Detersová</h1>
                </div>
                <div className="container">
                    <figure className="figure float-start mx-3">
                        <img
                            className="figure-img img-fluid rounded"
                            src="http://narativ.cz/files/styles/ctverecek/public/petra_detersova_0.png?itok=-02ZFkuk"
                            alt=""
                        />
                    </figure>
                    <p>
                        Členkou Narativu som sa stala s kamerou v ruke a doteraz v ňom plním hlavne túto rolu. Kdesi na
                        začiatku boli diskusné Meganarativy v temnom Clubwashi, postupne pribúdali najrôznejšie
                        workshopy, akcie, konferencie – skrátka stretnutia a dialógy. A ani som si nevšimla a s
                        Narativom som nielen zrástla, ale aj vyrástla.
                    </p>
                    <p>
                        Vzdelaním som psychologička a žurnalistka, v súčasnej dobe však sedím na stoličke personalistky.
                        Zatiaľ nemám vlastnú prax a nie som frekventantkou žiadneho výcviku. Možno to príde neskôr. Prax
                        zbieram predovšetkým v rozhovorch. S kýmkoľvek. Nezabudnuteľnou však pre mňa bola napríklad
                        sebaskúsenostná skupina s doktorom Dvořáčkom, prax na psychiatrickej klinike v Bohuniciach v
                        Brne, množstv reflektujúcich tímov, ktoré boli aj predmetom mojej diplomky a, čo si budeme
                        hovoriť, aj niektoré pracovné pohovory sa občas podobajú skôr stretnutiam na uzavretom oddelení
                        :)
                    </p>
                    <p>
                        Aj keď stojím často za kamerou, mám šancu dôkladne sa zoznámiť s prístupom toho-ktorého
                        terapeuta pri spracovávaní videa. Tak tomu bolo s Harlene Anderson, s Rocío Chaveste Gutiérrez,
                        s Ann-Ritou Gjertzen, Chrisom Kinmanom, Jaakkkom Seikkulom, Sylviou London, Petrom Roberom,
                        Johnom Shottrom, Justine van Lawick a … pekne sa nám ten zoznam rozrastá. Každý z nich priniesol
                        do môjho pohľadu na terapiu a život niečo nové, inak nezískateľné. V Narative sa cítim ako
                        nasávač múdrosti a inšpirácie od celej skupiny, ktorá má v tomto silu dlhého zástupu profesorov
                        a učebníc. Z tohoto a ďalších dôvodov verím, že Narativ bude trvať tak dlho, ako svieži dych po
                        žuvačke Winterfresh.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MemberDetail;
