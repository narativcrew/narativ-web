import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import styles from 'components/events/events.module.scss';

import { BlockButton } from '../../components/Buttons';

const EventDetail = () => {
    const router = useRouter();
    const { eventId } = router.query;

    return (
        <>
            <div>
                <div className={cx(styles.eventDetailHeadingBox, 'text-center px-5')}>
                    <h1>Dialog: Nástroj pozitivní změny v chování žáků a "rozpouštění" problémů ve škole</h1>
                    <span>(id:{eventId})</span>
                    <span>
                        <i className="bi bi-cash-coin" />
                        3.500,- Kč
                    </span>
                    <span>
                        <i className="bi bi-calendar" />
                        14.-15.10.2022
                    </span>
                    <span>
                        <i className="bi bi-geo-alt" />
                        Brno, Královopolská 139 (sál ZŠ Labyrinth)
                    </span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <h4>Uvod</h4>
                        <p>
                            Skupina Narativ vás srdečně zve na dvoudenní workshop o dialogickém přístupu ve vzdělávání
                            vedený Loekem Schoenmakersem, Ph.D. (NL). Kurz je určen zejména pracovníkům ve školství -
                            ředitelům škol, učitelům, asistentům, školním psychologům - ale také akademickým
                            pracovníkům, terapeutům, sociálním pracovníkům a dalším odborníkům, kteří jsou zapojeni do
                            vzdělávacíh procesů.
                        </p>
                        <h4>Cíl kurzu</h4>
                        <p>
                            Podpořit pedagoga v jeho snaze o co nejlepší vzdělávání každého dítěte prostřednictvím
                            spolupráce a vytváření příležitostí. Koncept, ve kterém je „dán hlas“ všem, má pozitivní
                            přínos ve výchovně-vzdělávacím procesu, vede k inkluzi každého jednotlivého žáka v kolektivu
                            a přináší mnoho benefitů i samotnému učiteli. Cílem kurzu je také přiblížit paradigmata,
                            která ovlivňují naše vzdělávání a naše myšlení, otevřít nové cesty, které se objeví, když
                            pedagog naslouchá různorodým „hlasům“ ve vzdělávacím procesu.
                        </p>
                        <p>
                            Kurz je akreditován Ministerstvem školství, mládeže a tělovýchovy v souladu s ustanovením §
                            10 vyhlášky č. 317/2005 Sb., o dalším vzdělávání pedagogických pracovníků, akreditační
                            komisi a kariérním systému pedagogických pracovníků, ve znění pozdějších předpisů, jako
                            studium k prohlubování odborné kvalifikace.
                        </p>
                        <h4>Anotace workshopu</h4>
                        <p>
                            Jak můžeme v našich školách a třídách pracovat tak, abychom ovlivňovali chování dětí
                            žádoucím směrem? V tomto workshopu se nejprve podíváme, co je na pozadí toho, že se děti ve
                            třídě a škole chovají určitým způsobem. Poté budeme objevovat nové metody a možnosti, jak
                            posílit pozitivní chování dětí, ale také jak pracovat s chováním negativním. Existuje
                            spousta možností, co můžeme dělat, a to jak na individuální, tak skupinové a dokonce i na
                            celoškolní úrovni!
                        </p>
                        <p>
                            Koncept dialogického procesu přináší do školského prostředí možnosti spolupráce mezi
                            pedagogem a žáky, které jsou pozitivní z pohledu rozvoje kompetencí žáků i interakce mezi
                            pedagogem a kolektivem žáků, či jednotlivci.
                        </p>
                        <p>
                            Dialogický přístup pozitivně ovlivňuje chování žáků a má své využití i při řešení problémů
                            ve škole. Podporou vzájemných dobrých vztahů mezi učitelem a žáky a mezi žáky navzájem se
                            navíc minimalizuje možnost vzniku sociálně patologických jevů, jakým je například tolik
                            obávaná šikana.
                        </p>
                        <h4>Více o kurzu</h4>
                        Obsah kurzu
                        <ul>
                            <li>Sociální konstrukcionismus a dialogická práce v kontextu českého školství</li>
                            <li>
                                Praktické využití při komunikaci ve školství (dialog s žáky a rodiči na našich školách)
                            </li>
                            <li>Vlastní cesta k dialogické práci ve školní praxi</li>
                            <li>Dialog jako cesta k rozpouštění problémů ve škole</li>
                            <li>Cesty k dialogu ve školním procesu, role pedagoga jako nositele konceptu</li>
                            <li>Reflexe dialogického procesu v pedagogické praxi</li>
                        </ul>
                        <p>
                            Součástí jsou praktické techniky zaměřené zejména na „rozpouštění“ problémů s dětmi na
                            našich školách skrze „hlasy“ všech zúčastněných, praktické nápady, metody a techniky, jak
                            podpořit dialogické procesy ve vzdělávání. Lektor přiblíží některé z konkrétních aktivit,
                            které můžete při práci s dětmi uplatnit – např. kouzelná hůlka, mluvící kamínek, plážový
                            balon, drama, miniinterview,…
                        </p>
                        Kurz se dotkne těchto témat a myšlenek:
                        <ul>
                            <li>Organizování skupinových setkávání s dětmi ve škole a odvaha naslouchat dětem.</li>
                            <li>Porozumění myšlence, že děti jsou našimi partnery, od kterých se můžeme učit.</li>
                            <li>Pravidelná skupinová setkání jako nástroj růstu školy, žáků i pedagoga.</li>
                            <li>Demokratické momenty ve škole v rozvoji kompetencí žáků i pedagogů.</li>
                            <li>Dialog jako nástroj motivace, cesta k sounáležitosti ale i odpovědnosti.</li>
                            <li>
                                Praktické využití a nácvik aktivit s cílem „rozpouštět problémy“ na základě situací
                                běžných v českém vzdělávacím systému.
                            </li>
                            <li>Metodické vedení na cestě k společnému řešení problému skrze spolupráci.</li>
                            <li>Práce s možnými scénáři na školách, s riziky a benefity.</li>
                        </ul>
                        <p>
                            Krátký záznam z našeho loňského workshopu s Loekem Schoenmakersem „Jak si usnadnit výuku“,
                            který byl podobný tomu, který nyní chystáme, si můžete pustit zde.
                        </p>
                        <p>
                            Na minulý workshop nám Loek na naše přání natočil i krátkou pozvánku – podívat se na ni
                            můžete zde.{' '}
                        </p>
                        <h4>Loek Schoenmakers, Ph.D.</h4>
                        <figure className="figure float-start mx-3">
                            <img
                                className="figure-img img-fluid rounded"
                                src="https://static.wixstatic.com/media/32e4a2_3957f03481e04ce3bffdae5665ab99bf~mv2.png/v1/fill/w_200,h_250,fp_0.47_0.27,q_90,usm_0.66_1.00_0.01,enc_auto/32e4a2_3957f03481e04ce3bffdae5665ab99bf~mv2.png"
                                alt=""
                            />
                        </figure>
                        <p>
                            Pokud bychom chtěli Loeka charakterizovat jen jedním slovem, bylo by to nejspíš slovo
                            "sjednotitel". Ve svém životě, v práci, doma i v zahraničí Loek znovu a znovu objevuje, že
                            udržitelný svět a udržitelná změna vyžaduje zlidšťování procesů, jakými se změny dějí. Tam,
                            kde v dnešní době stále dominuje paradigma vytvořitelného a kontrolovatelného,
                            ​​předvídatelného (vzdělávacího) světa, kde jsou lidé vnímáni jako nástroje změny a výkonu,
                            je posun k novému paradigmatu stále potřebnější. Od individualistické orientace ke vztahové
                            orientaci, kde lidé konstruují realitu, svět nebo se mění společně s ostatními na základě
                            propojení a dialogu. Poskytování prostoru pro improvizaci, pro reflexi a reflektující praxi.
                        </p>
                        <p>
                            Základem Loekovy tvorby jsou myšlenky sociálního konstrukcionismu. Postavit lidi do centra
                            změnových procesů. Díky tomu, že jsou lidé viděni, slyšeni a oceňováni, že je ceněn jejch
                            hlas a že mají vliv na tyto procesy, se začínají posunovat a zůstávají v pohybu. Interakce
                            mezi lidmi vytváří realitu. Dát změnám smysl, vidět a udržovat smysl v procesech změn
                            zvyšuje šanci na udržitelnost. Jde o ocenění, budování mostů, spolupráci a dialog.
                            Udržitelnost udržitelnosti je vnímána jako dynamický koncept.
                        </p>
                        <p>
                            Loek si vybudoval mnoho zkušeností v různých rolích, jako je učitel školy, ředitel školy,
                            konzultant pro školy, inovátor vzdělávání, koordinátor, lektor v mnoha vzdělávacích
                            projektech v Nizozemsku i v zahraničí v zemích jako Belgie, Surinam, Aruba, Česká republika
                            a Slovensko. V současné době pracuje částečně pro vlastní společnost Appreciate Change
                            work-s a částečně na nejlepší nizozemské vysoké škole pro pedagogy v rámci tří magisterských
                            programů, superviduje studenty v jejich závěrečném vzdělávání, vede kurzy pozitivní
                            psychologie. Od srpna 2021 stojí Loek u zrodu nového hnutí založeného na sociálně
                            konstrukcionistické praxi a výzkumu, je to pro něj vzrušující dobrodružství, v němž se
                            vyvíjejí nové metody výzkumu učitelů.
                        </p>
                        <p>V roce 2011 Loek dosáhl titulu PhD v sociálních vědách.</p>
                        <h4>Organizátoři kurzu</h4>
                        <p>
                            Organizační tým: Veronika Smaženková, Přemek Ulman a Pavel Nepustil ze skupiny Narativ
                            Držitel akreditace: Spolek Narativ, IČO 03107621, se sídlem V aleji 114/31, 620 00 Brno
                        </p>
                        <p>
                            Skupina Narativ dlouhodobě usiluje o rozvoj a pěstování kultury spolupráce a dialogu v
                            různých oblastech práce s lidmi, specificky se potom zabývá šířením tzv.
                            kolaborativně-dialogického přístupu v pomáhajících profesích. Snaží se vytvářet účinnou
                            odpověď na společenské dění a situace, které jsou doprovázeny omezováním dialogu a
                            spolupráce. Více zde.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4>Základní Informace</h4>
                        <p>
                            <span className="bold">Termin: </span>14.-15.10.2022
                        </p>
                        <p>
                            <span>Misto: </span>Brno, Královopolská 139 (sál ZŠ Labyrinth)
                        </p>
                        <p>
                            Cena: 3.500,- Kč <br />
                            (nabízíme hromadné slevy v případě přihlášení vice osob z jené organizace - více info na
                            e-mailu premysl.ulman@gmail.com) <br />
                        </p>
                        <p>
                            Storno podmínky: <br />
                            Při zrušení účasti do 9.10.2022 vracíme plnou částku, po tomto datu už platbu nevracíme.
                        </p>
                        <p>
                            Časový harmonogram: <br />
                            <ul>
                                <li>pátek 14.10. 9:30 - 17:00</li>
                                <li>sobota 15.10. 9:00 - 16:30</li>
                            </ul>
                        </p>
                        <p>Kontakt na organizátory: Přemysl Ulman, premysl.ulman@gmail.com +420 608 900 015</p>
                        <BlockButton>Přihlásit se na workshop</BlockButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetail;
