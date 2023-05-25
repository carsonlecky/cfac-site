import { url } from "inspector"

const URLs: string[] = [
    "https://www.1min30.com/wp-content/uploads/2018/07/Symbole-Goldman-Sachs.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/PJT_Logo_Blue.png",

    "https://logos-world.net/wp-content/uploads/2021/02/Citigroup-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f7/Cantor_Fitzgerald_logo.png",
    "https://logos-download.com/wp-content/uploads/2016/08/RBC_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/BMO_Capital_Markets_logo.svg/2560px-BMO_Capital_Markets_logo.svg.png",

    "https://companieslogo.com/img/orig/NA.TO_BIG-38602d80.png?t=1654665191",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/CIBC_logo_2021.svg/2560px-CIBC_logo_2021.svg.png",
    "https://td.mediaroom.com/image/TD_SHIELD_LOGO_COL_RGB.png",
    "https://www.imaginecanada.ca/sites/default/files/2019-05/raymond-james-1.png",
    "https://www.bci.ca/wp-content/themes/bci/assets/images/svg/BCI-logo.svg",
    "https://mma.prnewswire.com/media/2010443/Canaccord_Genuity_Group_Inc__CANACCORD_GENUITY_GROUP_INC__SPECIA.jpg?p=publish",

    "https://d2q79iu7y748jz.cloudfront.net/s/_logo/b191e1e0d8557464a835a1444512d9be",

    "https://techexit.io/wp-content/uploads/2019/07/Garibaldi_Logo_CMYK.png",
    "https://mma.prnewswire.com/media/1215937/QuadReal_Property_Group_QuadReal_Property_Group_Launches_Its_Gre.jpg",
    "https://mma.prnewswire.com/media/1639200/Novacap_Management_Inc__Novacap_Announces_Final_Closing_of_Canad.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Teck_Resources_logo.svg/1200px-Teck_Resources_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png",
    "https://media.penderfund.com/media/2023/01/2023_Pender_PenderFundCapManLogo_20thAnn_English.png",
    "https://www.eonetwork.org/okanagan/PublishingImages/Sponsors/OdlumBrownLogo.png",
    "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/j9wifmzx8wvb5cpac7jx",
    "https://static.wixstatic.com/media/fd61b2_06d12391c42a44378a50b687a72d0e96~mv2_d_3634_1370_s_2.png/v1/fill/w_637,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TricorPacificCaptial_Logos-02.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fiserv_logo.svg/1280px-Fiserv_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Ontario_Teachers%27_Pension_Plan_logo.svg/1200px-Ontario_Teachers%27_Pension_Plan_logo.svg.png",
    "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/d7p6atydxlxtnir6yz06",
    "https://www.queensu.ca/investmentservices/sites/iswww/files/uploaded_images/ESG%20Logos/Orbis%20Logo.png",
    "https://media.zenfs.com/en/accesswire.ca/cf82b26d58ce9169f0e788811623a75d",
    "https://mms.businesswire.com/media/20220802006159/en/1532924/23/BalbecCapital_LLC_logo_large.jpg",
    //"https://admin.propertyplatform.com/wp-content/uploads/2020/01/Bosa_Properties__Final_White_550.png",
    "https://images.squarespace-cdn.com/content/v1/62745bf8532ac82e72952e99/0bd44c2a-ec4a-4679-8cee-e340ce38ee26/Orr_Logo_RGB.jpg?format=1500w",
    "https://image.pitchbook.com/F5sk038Jyj2KiBXsSbT9dewszWi1580221223273_200x200"

]

export default function LogoCloud() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Placements                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {URLs.map((url) => (
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={url}
                            alt="Company Logo"
                            width={158}
                            height={48}
                            key={url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
