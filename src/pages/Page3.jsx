import { Footer } from "../components/Footer"
import Header from "../components/Header"
import img from '../img/sprayfinishespage.gif'

const Page3 = ()=>{
    return(
        <>
        <Header/>
        <main className="px-28 text-blue-950">
            <div className="flex items-center py-8">
            <h1 className="text-[34px] w-[350px]">Spray Finishes</h1>
            <div className="hidden md:block h-[1px] w-full bg-blue-950"></div>
            </div>
            <div className="flex">
                <img src={img} alt="" />
                <div className="ml-6">
                    <p className="font-bold">Oakwood Doors & Spray Finishes offers a professional and comprehensive factory spray finish service in wood coatings.</p>
                    <p className="my-6">Oakwood Doors & Spray Finishes offers a professional and comprehensive factory spray finish service in wood coatings.</p>
                    <p>In our purpose built spray shop, all work is carried out by spray professionals with over 30 years’ experience. </p>
                    <p className="font-bold">CLEAR LACQUER Lead time 10 - 15 working days for spray finishing with clear lacquers. </p>
                    <p className="font-bold mb-6"><span className="border-b border-blue-950">COLOURS</span> lead time : 4 to 5 weeks approx. XL JOINERY</p>
                    <p><span className="font-bold">Prices start at only £37.50 (incl. VAT)</span> for internal doors that are pre-finished in clear lacquers that have been purchased directly from Oakwood Doors & Spray Finishes. </p>
                    <p className="font-bold my-2">Colours on White  £108.00 inc vat. </p>
                    <p className="font-bold"><span className="mr-8">Stains on Oak</span>        £114.00 inc vat  -   The stains are finished in a 10%-Matt sheen level.</p>
                    <p className="font-bold mt-2 mb-6">Touch up pots available.  Stains £40 inc vat.  Colours for White Doors £35.00 inc vat.</p>
                    <p className="my-6">Oakwood Doors & Spray finishes is a family run business that has nearly 30 years’ experience in spray servicing and finishing.</p>
                    <p className="font-bold">FREE SAMPLES - CLEAR MATT / CLEAR SATIN & COLOURS</p>
                    <p className="my-6">You can also request a <span className="font-bold">free spray finish sampl</span>e for your items, though please note that this is not for doors that are already pre-finished.</p>
                    <p>Samples include Oak with Matt Clear Lacquer and Satin Clear Lacquer. Colour Samples can now be requested. You can request these by ringing the above telephone number or by completing the contact request form.</p>
                    <p className="font-bold text-[20px]">COLOUR SAMPLES</p>
                    <p className="font-bold my-2">Now available on XL Joinery Colour Ranges.  Lead Time approx 3 to 5 weeks.</p>
                    <p className="font-bold">Colours are available on the XL Joinery White Primed Doors and the Stains are available on the XL Joinery Untreated Oak Doors.</p>
                </div>
            </div>
            <p>XL’s brand-new colour range allows you the freedom of choice to transform any home. With over 200 different door styles to choose from and 10 colours options (available on all white primed doors), as well as 5 distinctive stains (available on all unfinished oak), your dream door is closer than you think.</p>
            <p>Choosing the right colours can create a real impact. </p>
            <p> If you would like to know more about our colours range, please do not hesitate to get in touch with one of our team on Tel; 01484 643394.</p>
            <p> Closest RAL Colours to the Stains are ; Americano would be 9005 Jet Black or 9004 Signal Black</p>
        </main>
        <Footer/>
        </>
    )
}

export default Page3