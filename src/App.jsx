import logo from "/logo.webp";
import mainBanner from "/banner.webp";
import deliveryIcon from "/al-aksa-kombi.webp";
import shakerIcon from "/klofac.webp";
import washerIcon from "/cetkara.webp";
import drierIcon from "/centrifuga.webp";
import finisherIcon from "/usisivac.webp";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

function App() {
    const [showIcons, setShowIcons] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [calculatedPrice, setCalculatedPrice] = useState(0);
    const [calcWidth, setCalcWidth] = useState(0);
    const [calcHeight, setCalcHeight] = useState(0);
    const [calcType, setCalcType] = useState(200);

    const handleWidthChange = (e) => {
        setCalcWidth(e.target.value);
    };
    const handleHeightChange = (e) => {
        setCalcHeight(e.target.value);
    };
    const handleTypeChange = (e) => {
        setCalcType(e.target.value);
    };

    useEffect(() => {
        if (calcHeight && calcWidth && calcType) {
            const area = calcHeight * calcWidth;
            const pricePerSquareMeter = calcType / 100;
            const totalPrice = area * pricePerSquareMeter;

            setCalculatedPrice(totalPrice.toFixed(2));
        }
    }, [calcHeight, calcWidth, calcType]);

    const animateIcons = () => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".phone-icon",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.1 }
        )
            .fromTo(
                ".messenger-icon",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.1, delay: 0.1 }
            )
            .fromTo(
                ".viber-icon",
                { opacity: 0, y: 150 },
                { opacity: 1, y: 0, duration: 0.1, delay: 0.1 }
            );
    };

    const hideIcons = () => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".viber-icon",
            { opacity: 1, y: 0 },
            { opacity: 0, y: 150, duration: 0.1, delay: 0.2 }
        )
            .fromTo(
                ".messenger-icon",
                { opacity: 1, y: 0 },
                { opacity: 0, y: 100, duration: 0.1 }
            )
            .fromTo(
                ".phone-icon",
                { opacity: 1, y: 0 },
                { opacity: 0, y: 50, duration: 0.1 }
            );
    };

    const handleShowIcons = () => {
        setShowIcons((prevState) => !prevState);
        if (!showIcons) {
            animateIcons();
        } else {
            hideIcons();
        }
    };

    return (
        <div className="select-none">
            <header className="md:fixed md:z-20  md:bg-white flex w-full items-center justify-between h-[110px] px-3 md:px-10">
                <img
                    src={logo}
                    alt="Al-Aksa logo"
                    className="w-[165px] h-[90px]"
                    loading="lazy"
                />
                <i
                    className="fa-sharp fa-solid fa-bars text-[25px] px-[15px] text-neutral-950 translate-y-[-15px] md:hidden"
                    onClick={() => setShowNav(true)}
                ></i>
                <nav
                    className={`fixed top-0 w-screen h-[100dvh] bg-white z-20 transition-all overflow-hidden ${
                        showNav ? "translate-x-[0] " : "translate-x-[100%] "
                    } md:translate-x-[0] md:static md:h-full md:bg-transparent`}
                >
                    <ul className="w-full h-full flex items-center flex-col md:flex-row justify-center md:justify-end md:pr-[50px] gap-10 text-xl md:text-[20px]">
                        <li
                            className="fixed top-10 right-10 text-2xl md:hidden"
                            onClick={() => setShowNav(false)}
                        >
                            <i className="fa-solid fa-close"></i>
                        </li>
                        <li
                            className="md:hover:opacity-50 transition-all"
                            onClick={() => setShowNav(false)}
                        >
                            <a href="#o-nama">O nama</a>
                        </li>
                        <li
                            className="md:hover:opacity-50 transition-all"
                            onClick={() => setShowNav(false)}
                        >
                            <a href="#pranje-tepiha">Procedura</a>
                        </li>
                        <li
                            className="md:hover:opacity-50 transition-all"
                            onClick={() => setShowNav(false)}
                        >
                            <a href="#izracun-cijene-pranja-tepiha">
                                Izračun cijene
                            </a>
                        </li>
                        <li
                            className="md:hover:opacity-50 transition-all"
                            onClick={() => setShowNav(false)}
                        >
                            <a href="#lokacija">Lokacija</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main
                className="relative text-neutral-950 flex flex-col gap-8 pt-[30px] items-center md:h-[70vh] md:pt-[175px] md:bg-blue-200 md:bg-[url('/md-banner.webp')] bg-center bg-cover bg-no-repeat"
                id="pocetna"
            >
                <div className="hidden md:block absolute inset-0 bg-black opacity-70 z-0 "></div>
                <h1 className="relative z-10 font-[600] px-10 text-2xl text-center md:text-3xl xl:text-4xl md:text-white md:font-inter">
                    Vrhunsko mašinsko pranje i sušenje tepiha u Sarajevu
                </h1>
                <a
                    href="#o-nama"
                    className="hidden md:block md:hover:opacity-70 transition-all text-neutral-950 text-semibold z-10 text-base 2xl:text-2xl font-inter bg-white px-5 py-2 rounded"
                >
                    Saznaj više &nbsp;
                    <i className="fa-solid fa-arrow-down text-neutral-950 text-semibold z-10"></i>
                </a>
                <img
                    src={mainBanner}
                    alt="pranje i susenje tepiha"
                    className="relative z-10 px-3 rounded-[15px] w-[400px] h-[300px] md:hidden"
                />
            </main>

        <section className="fixed bottom-10 md:bottom-20 right-5 z-10 overflow-hidden">
    <ul className="flex flex-col gap-5 items-center justify-center ">
        <li className="md:hover:opacity-50 transition-all cursor-pointer">
            <a
                href="viber://chat?number=38762417222"
                target="_blank"
                aria-label="viber icon"
            >
                <i className="bg-purple-900 rounded-full text-purple-100 fa-brands fa-viber h-[50px] w-[50px] flex items-center justify-center text-2xl opacity-0 transition-all viber-icon"></i>
            </a>
        </li>
        <li
            className="md:hover:opacity-50 transition-all cursor-pointer"
            target="_blank"
        >
            <a 
                href="https://m.me/61559125959472"
                aria-label="messenger icon"
            >
                <i className="bg-blue-700 rounded-full text-white fa-brands fa-facebook-messenger messenger-icon h-[50px] w-[50px] flex items-center justify-center text-2xl opacity-0 transition-all messenger-icon"></i>
            </a>
        </li>
        <li className="md:hover:opacity-50 transition-all cursor-pointer">
            <a 
                href="tel:38762417222" 
                target="_blank"
                aria-label="telefon icon"
            >
                <i className="bg-blue-900 text-blue-100 rounded-full fa-solid fa-phone h-[50px] w-[50px] flex items-center justify-center text-xl opacity-0 transition-all phone-icon"></i>
            </a>
        </li>
    </ul>
    <i
        className="mt-5 fa-solid fa-message bg-blue-200 text-blue-900 rounded text-[30px] px-3 py-2 drop-shadow-lg md:hover:opacity-50 transition-all cursor-pointer"
        onClick={handleShowIcons}
    ></i>
</section>

            <section
                className="mt-[50px] px-3 max-w-[600px] md:w-[70%] md:max-w-[1000px] mx-auto"
                id="o-nama"
            >
                <h2 className="font-[500] text-2xl border-b-[2.5px] border-main-color rounded inline-block pb-1">
                    Zašto odabrati nas ?
                </h2>
                <p className="p-4 font-inter font-[400] leading-7 tracking-wide">
                    Sa besplatnom dostavom i preuzimanjem, Vaš tepih je u
                    najboljim rukama od početka do kraja. Koristeći
                    najsavremenije mašine koje efikasno uklanjaju čak i
                    najtvrdokornije mrlje, garantiramo temeljito čišćenje koje
                    će Vaš tepih osvježiti i vratiti mu sjaj. Naša reputacija se
                    temelji na rezultatima koji govore sami za sebe, prepustite
                    nam Vaš tepih i uvjerite se zašto smo prvi izbor kada je u
                    pitanju njegova čistoća.
                </p>
            </section>
            <section
                className="mt-[25px] px-3 pb-[20px] max-w-[600px] md:w-[70%] md:max-w-[1000px] mx-auto "
                id="pranje-tepiha"
            >
                <h2 className="font-[500] text-2xl border-b-[2.5px] border-main-color rounded inline-block pb-1">
                    Proces pranja tepiha
                </h2>
                <ul className="px-2 grid-row">
                    <li className="text-[14px] 2xl:text-[16px] pb-10 bg-white mt-5 flex flex-col items-center gap-5 p-5 text-center rounded-[20px] drop-shadow-lg shadow inner border-t-[3px] border-blue-200">
                        <img
                            src={deliveryIcon}
                            alt="besplatna dostava tepiha icon"
                            className="w-[200px] h-[150px]"
                            loading="lazy"
                        />
                        <h4 className="font-[600] text-[17px]">
                            Preuzimanje na adresi
                        </h4>
                        <p className="font-inter font-[400]">
                            Naš tim će besplatno preuzeti Vaš tepih direktno na
                            Vašoj kućnoj adresi, oslobađajući Vas neugodnosti
                            transporta.
                        </p>
                    </li>
                    <li className="text-[14px] 2xl:text-[16px] pb-10 bg-white mt-5 flex flex-col items-center gap-5 p-5 text-center rounded-[20px] drop-shadow-lg shadow inner border-t-[3px] border-blue-200">
                        <img
                            src={shakerIcon}
                            alt="klofac tresac tepiha"
                            className="w-[200px] h-[150px]"
                            loading="lazy"
                        />
                        <h4 className="font-[600] text-[17px]">Klofanje</h4>
                        <p className="font-inter font-[400]">
                            Posebna tehnika klofanja oslobađa Vaš tepih od
                            prašine i nečistoća, čineći ga svježim i čistim.
                        </p>
                    </li>
                    <li className="text-[14px] 2xl:text-[16px] pb-10 bg-white mt-5 flex flex-col items-center gap-5 p-5 text-center rounded-[20px] drop-shadow-lg shadow inner border-t-[3px] border-blue-200">
                        <img
                            src={washerIcon}
                            alt="besplatna dostava tepiha icon"
                            className="w-[200px] h-[150px]"
                            loading="lazy"
                        />
                        <h4 className="font-[600] text-[17px]">Pranje</h4>
                        <p className="font-inter font-[400]">
                            Koristeći najmodernije mašine, Vaš tepih prolazi
                            kroz proces pranja koji osigurava njegovu temeljitu
                            čistoću.
                        </p>
                    </li>
                    <li className="text-[14px] 2xl:text-[16px] pb-10 bg-white mt-5 flex flex-col items-center gap-5 p-5 text-center rounded-[20px] drop-shadow-lg shadow inner border-t-[3px] border-blue-200">
                        <img
                            src={drierIcon}
                            alt="besplatna dostava tepiha icon"
                            className="w-[200px] h-[150px]"
                            loading="lazy"
                        />
                        <h4 className="font-[600] text-[17px]">Sušenje</h4>
                        <p className="font-inter font-[400]">
                            Nakon pranja, Vaš tepih se pažljivo suši kako bi se
                            osigurala brza i efikasna sušenja bez oštećenja
                            vlakana.
                        </p>
                    </li>
                    <li className="text-[14px] 2xl:text-[16px] pb-10 bg-white mt-5 flex flex-col items-center gap-5 p-5 text-center rounded-[20px] drop-shadow-lg shadow inner border-t-[3px] border-blue-200">
                        <img
                            src={finisherIcon}
                            alt="besplatna dostava tepiha icon"
                            className="w-[200px] h-[150px]"
                            loading="lazy"
                        />
                        <h4 className="font-[600] text-[17px]">Usisavanje</h4>
                        <p className="font-inter font-[400]">
                            Naš završni korak uključuje pažljivo usisavanje
                            tepiha kako bi se osigurala savršena čistoća i
                            svježina.
                        </p>
                    </li>
                    <li className="text-[14px] 2xl:text-[16px] pb-10 bg-white mt-5 flex flex-col items-center gap-5 p-5 text-center rounded-[20px] drop-shadow-lg shadow inner border-t-[3px] border-blue-200">
                        <img
                            src={deliveryIcon}
                            alt="besplatna dostava tepiha icon"
                            className="w-[200px] h-[150px]"
                            loading="lazy"
                        />
                        <h4 className="font-[600] text-[17px]">
                            Dostava na adresi
                        </h4>
                        <p className="font-inter font-[400]">
                            Vaš tepih je stiže na Vašu adresu u besprijekornom
                            stanju nakon temeljitog čišćenja, donoseći svježinu
                            i blistavost u Vaš dom.
                        </p>
                    </li>
                </ul>
            </section>
            <section
                className="mt-[50px] px-3 md:w-[70%] max-w-[600px] md:max-w-[1000px] mx-auto"
                id="izracun-cijene-pranja-tepiha"
            >
                <h2 className="font-[500] text-2xl border-b-[2.5px] border-main-color rounded inline-block pb-1">
                    Izračun cijene
                </h2>
                <div className="flex flex-col gap-5 pt-5 px-5 font-inter">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="duzina">Dužina u metrima:</label>
                        <input
                            id="duzina"
                            value={calcHeight}
                            onChange={handleHeightChange}
                            type="number"
                            min={0}
                            className="border-t-[3px] border-blue-200 drop-shadow-md p-2 rounded-[3px]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sirina">Širina u metrima:</label>
                        <input
                            id="sirina"
                            type="number"
                            min={0}
                            value={calcWidth}
                            onChange={handleWidthChange}
                            className="border-t-[3px] border-blue-200 drop-shadow-md p-2 rounded-[3px]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="materijal">Materijal:</label>
                        <select
                            id="materijal"
                            className="border-t-[3px] border-blue-200 drop-shadow-md p-2 rounded-[3px] text-[15px] font-inter bg-white"
                            value={calcType}
                            onChange={handleTypeChange}
                        >
                            <option value="200">
                                Itison - 2.00 KM/&#13217;
                            </option>
                            <option value="410">
                                Shaggy(čupava sintetika) - 4.10 KM/&#13217;
                            </option>
                            <option value="400">
                                Sintetika(ručno tkana ili mašin.) - 4.00
                                KM/&#13217;
                            </option>
                            <option value="440">
                                Vuna(ručno tkana ili mašin.) - 4.40 KM/&#13217;
                            </option>
                            <option value="420">
                                Vuna/Sintetika 50/50 - 4.20 KM/&#13217;
                            </option>
                            <option value="450">
                                Svila - 4.50 KM/&#13217;
                            </option>
                        </select>
                    </div>
                    <p className="border-b border-blue-400 text-center pb-2 font-semibold md:text-xl">
                        Cijena pranja: {calculatedPrice} KM
                    </p>
                </div>
            </section>
            <section
                className="mt-[50px] px-3 pb-[50px] md:w-[70%] max-w-[600px] md:max-w-[1000px] mx-auto"
                id="lokacija"
            >
                <h2 className="font-[500] text-2xl border-b-[2.5px] border-main-color rounded inline-block pb-1">
                    Gdje se nalazimo
                </h2>
                <iframe
                    title="Mašinsko pranje tepiha Al Aksa"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11510.922800003338!2d18.2722827!3d43.8406815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cb9efe6bb45d%3A0x4886645bc71c2217!2sAl%20Aksa%20Ma%C5%A1insko%20pranje%20tepiha!5e0!3m2!1sen!2sba!4v1715897097550!5m2!1sen!2sba"
                    className="w-full h-[400px] mt-[30px] rounded-[15px] drop-shadow-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <footer
                className="relative w-full border-t border-blue-400 pt-[25px] pb-[10px] flex flex-col items-start justify-center px-5 gap-5 font-[400] text-[15px] font-inter md:flex-row md:justify-between md:px-10 md:items-end"
                id="radno-vrijeme"
            >
                <div>
                    <h3 className="font-[700] border-b-2 border-blue-200 text-[17px]">
                        Radno vrijeme
                    </h3>
                    <ul className="flex flex-col gap-2 md:order-1 text-[14px] pt-2">
                        <li>Radni dani / subota - 08:00h - 18:00h</li>
                        <li>Nedelja - ne radimo</li>
                    </ul>
                </div>

                <ul className=" flex gap-5 items-center text-[17px] md:order-2">
                    <li className="bg-blue-200 px-3 py-1 rounded md:hover:opacity-70 transition-all cursor-pointer">
                        <a
                            href="https://www.tiktok.com/@alaksa.masinsko.p"
                            target="_blank"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                    </li>
                    <li className="bg-blue-200 px-3 py-1 rounded md:hover:opacity-70 transition-all cursor-pointer">
                        <a
                            href="https://www.facebook.com/profile.php?id=61559125959472"
                            target="_blank"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                </ul>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <img
                        src={logo}
                        alt="Al-Aksa logo"
                        className="w-[165px] md:translate-x-[-25%] h-[90px]"
                        loading="lazy"
                    />
                </div>
            </footer>
        </div>
    );
}

export default App;
