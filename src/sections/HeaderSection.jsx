import Header from "../components/Header";
import Subtitle from "../components/Subtitle";

const HeaderSection = () => {
    return (
        <section>
            <Header title={"Ganića Kula"} />
            <div className="mx-auto px-8 flex flex-col gap-10">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <p className="text-gray-800 text-xl leading-relaxed mb-6">
                        Kula je najvjerovatnije sagrađena 1797. godine, a ovako priča Merima Zejnelagić:
                    </p>
                    <p className="text-gray-800 text-xl leading-relaxed mb-6">
                        ‘’Kula Ganića je pravljena tri godine prije Karađorđa. Pravio ju je carski vezir. U to vrijeme ratovali su sa Klimentama. Vezir je napravio i tunel na Sarandži. Taj tunel se zove Kadrijin čardak. Postoje danas zidine tog čardaka. Ganića kula je pravljena za vojsku a dokaz za to su puškarnice na četvrtom spratu.
                    </p>
                    <p className="text-gray-800 text-xl leading-relaxed">
                        Nakon vezirovog odlaska za Skadar kulu su otkupili braća Ganići (Selim i Alija). Njihove tadašnje kuće su se nalazile kod Kučanske džamije. Selim Ganić je bio deda Rustema Ganića a Rustem je moj deda (Merimin, prim.autora). Debljina zidova kule je bila 1,2 metra i imala je četiri sprata. U malter za gradnju kule je dodavana so. Zadnji sprat je bio od bukovih brvana. Tu je bio ćošak i puškarnica. Pendžeri na kuli su bili mali, ali udubljenje za prozor je bilo veliko. U tom udubljenju je moglo da se sjedi. Na pendžerima su se nalazile šipke. Pekara je bila na četvrtom spratu i zagrijavala je čitav sprat. Lijepo je izgledala. Na njoj su se nalazili zemljani lončevi, koji su ukrašavali taj dio kuće. Ulazna vrata su bila drvena i zatvarala su se mandalom…’’
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <p className="text-gray-800 text-xl leading-relaxed mb-6">
                        U Rožajama postoji još nekoliko kula, a sve su osim Hadžialijagića kule u lošem stanju.
                        Ambijent Ćerimagine kule je trajno uništen krčmljenjem zemljišta oko kule za izgradnju
                        stambenih objekata te je time propuštena prilika za pretvaranje kule sa okolnim zemljištem u
                        muzejski kompleks na izvanrednoj lokaciji na vidikovcu sa pogledom na Kučansku mahalu, a
                        neposredno pored bivšeg školskog dvorišta gimnazije ‘’30. septembar’’.
                    </p>
                    <p className="text-gray-800 text-xl leading-relaxed">
                        Najpoznatija rožajska kula, Ganića kula je najvjerovatnije sagrađena krajem 18. vijeka, znatno je
                        oštećena od zemljotresa tako da je bila decenijama bez krova, oronula i izložena vremenskim
                        nepogodama, prostor oko kule je uzurpiran. Tadašnja lokalna vlast je smatrala je da više nema
                        uslova za njeno renoviranje, te je odlučeno da se početkom posljednje decenije 20. vijeka po
                        projektu stare Ganića kule izgradi kopija na drugoj lokaciji. Umjesto da je tadašnja lokalna vlast
                        otkupila Kurtagića kulu sa velikom avlijom i adaptirala je u gradski muzej prišlo se izgradnji
                        objekta koji tek samo podsjeća na Ganića kulu i nema historijsku vrijednost i naravno da nije
                        mogao zamijeniti staru Ganića kulu koju su slikari uporno slakali kako bi je otrgli od zaborava.
                    </p>
                    <p className="text-gray-800 text-xl leading-relaxed">
                        Ganića kula se nalazi i  na rožajskom grbu kao podsjećanje na nekadašnju tradiciju i kulturu
                        Bošnjaka Rožaja. Konačno je sredinom 2019. godine Ministarstvo kulture Crne Gore započelo
                        finansiranje obnove Ganića kule – tačno 40 godina poslije zemljotresa, što bi se reklo: bolje ikad
                        nego nikad.
                    </p>
                    <p className="text-gray-800 text-xl leading-relaxed">
                        Propadaju i posljednje kule u Rožajama: Zejnelagića kula, Ćerimagina kula, Kardovića kula,
                        Agića kula, Hadžića kula u Balotićima, kula Čolovića u Biševu i druge kule. Iako je posljednji
                        trenutak da se zaštiti nekoliko preostalih kuća po tom pitanju niti ministarstvo niti opština ne
                        preduzimaju ništa. Lokalne vlasti bi trebale zajedno sa ministarstvima kulture i održivog razvoja
                        i tirizma da pokrenu inicijativu da se zaštite i obnove najljepše stare kuće u Rožajama, Plavu,
                        Gusinju i drugim gradovima Crne Gore.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;