const data = [
  {
    "company_name": "Medicines International",
    "category": "Medical",
    "email": "mmeci1125@gmail.com",
    "phone_mobile": "+88-02-223385169",
    "web": null,
    "address": "21/A Topkhana Road, Mahbub Plaza (3rd Floor), Suite # G-3, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Neotec Medical Services Ltd.",
    "category": "Medical",
    "email": "info@neotec.com.bd",
    "phone_mobile": "+88 01713092350",
    "web": "www.neotec.com.bd",
    "address": "235/1, Ibrahimpur, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "NewTech GT Ltd.",
    "category": "Technology",
    "email": "newtechgtl@gmail.com",
    "phone_mobile": "+88-02-223310415",
    "web": null,
    "address": "House # 63/F (3rd Floor), Lake Circus Kalabagan, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Novomed",
    "category": "Medical",
    "email": "0713062628",
    "phone_mobile": "01713201933, 01711429689",
    "web": "www.novomedbd.com",
    "address": "1003, SEL Rose & Dale 116, Kazi Nazrul Islam Avenue Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "OMC Limited",
    "category": "Corporate",
    "email": "info@omcbd.com",
    "phone_mobile": "09602666662, 58156837, 58156739, +88 01713388777",
    "web": "www.omcbd.com",
    "address": "Unique Trade Center (UTC), Level-15 8, Panthapath, Dhaka-1215."
  },
  {
    "company_name": "One Trade",
    "category": "Trading",
    "email": "tamamcorporation97@gmail.com",
    "phone_mobile": "+88 01873882200",
    "web": null,
    "address": "27/11/3-C Hasan Bhaban, Top Khana Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Pharma & Firm",
    "category": "Pharmaceutical",
    "email": "info@pfcb.com.bd",
    "phone_mobile": "+88-02-48316468, 49357984, +88 01970010998",
    "web": "www.pfcb.com.br",
    "address": "11/5, City Heart Building, 67-Naya Patlan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Pulse Healthcare Technology",
    "category": "Medical Technology",
    "email": "info@pht.com.bd",
    "phone_mobile": "0170808061, 01858585025",
    "web": "www.pht.com.bd",
    "address": "Anwar Landmark Sensation, 17-18 Shyamoli, Mirpur Road, Dhaka-1207."
  },
  {
    "company_name": "Space Med Enterprise Ltd.",
    "category": "Medical",
    "email": "spacemed@dhaka.net",
    "phone_mobile": "01324735320, 01755744213",
    "web": null,
    "address": "BSCE Bhaban (Level-9), 102, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Tabassum International",
    "category": "International Trading",
    "email": "info@tabassuminternational.com",
    "phone_mobile": "01711427492, 01731008705",
    "web": "www.tabassuminternational.com",
    "address": "152/2A-2, Rawshan Tower (2nd Floor), Green Road Signal, West Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Tamam Corporation",
    "category": "Corporate",
    "email": "tamamcorporation97@gmail.com",
    "phone_mobile": "+88-02-223381575, +88 01771943917",
    "web": null,
    "address": "27/11/3-C Hasan Bhaban (2nd Floor) Topkhana Road, Dhaka-1000."
  },
  {
    "company_name": "Technoworth Associates Ltd.",
    "category": "Technology/Associates",
    "email": "headoffice@tradesworthgroup.com",
    "phone_mobile": "+88-02-223385646, 223380928",
    "web": "www.tradesworthgroup.com",
    "address": "78, Motijheel C/A (1st & 2nd Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Packaging/Manufacturing",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.aeyeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "S.T. Marketing Corporation Ltd.",
    "category": "Marketing",
    "email": "managingdirector@stmclbd.com",
    "phone_mobile": "+88-02-58071130-31, +88 01324440933",
    "web": "www.stmclbd.com",
    "address": "Registrar Office: 15/2, Topkhana Road, 3rd Floor, BMA Bhaban, Dhaka-1000, Bangladesh; Corporate Office: House # 1186, Avenue-11, Mirpur DOHS, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Sysmark Limited",
    "category": "Technology",
    "email": "info@sysmarkbd.com",
    "phone_mobile": "+88-02-48116642-43, 01709954380, 01709954385",
    "web": "www.sysmarkbd.com",
    "address": "House # 25, Lake Circus, Kalabagan (2nd Floor), Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Telerad Medical Systems Ltd.",
    "category": "Medical Systems",
    "email": "teleradmedicalsystems@gmail.com",
    "phone_mobile": "+88 0197977234-9",
    "web": "www.teleradmedicalsystems.com",
    "address": "Afza Tower, 27/F, Sangsad Avenue, Monipuripara, Tejgaon, Dhaka-1215."
  },
  {
    "company_name": "Tradevision Ltd.",
    "category": "Trading",
    "email": "info@tvlbd.com",
    "phone_mobile": "01701230000, 01755645555",
    "web": "www.tvlbd.com",
    "address": "House # B-141, Halim Villa, Lane # 22 New DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "Transmed Limited",
    "category": "Medical",
    "email": null,
    "phone_mobile": "+88 01715032087",
    "web": null,
    "address": "190 Elephant Road (1st Floor) Hatirpool, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Medicines International",
    "category": "Medical",
    "email": "mmeci1125@gmail.com",
    "phone_mobile": "+88-02-223385169",
    "web": null,
    "address": "21/A Topkhana Road, Mahbub Plaza (3rd Floor), Suite # G-3, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Neotec Medical Services Ltd.",
    "category": "Medical",
    "email": "info@neotec.com.bd",
    "phone_mobile": "+88 01713092350",
    "web": "www.neotec.com.bd",
    "address": "235/1, Ibrahimpur, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "NewTech GT Ltd.",
    "category": "Technology",
    "email": "newtechgtl@gmail.com",
    "phone_mobile": "+88-02-223310415",
    "web": null,
    "address": "House # 63/F (3rd Floor), Lake Circus Kalabagan, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Novomed",
    "category": "Medical",
    "email": "0713062628",
    "phone_mobile": "01713201933, 01711429689",
    "web": "www.novomedbd.com",
    "address": "1003, SEL Rose & Dale 116, Kazi Nazrul Islam Avenue Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "OMC Limited",
    "category": "Corporate",
    "email": "info@omcbd.com",
    "phone_mobile": "09602666662, 58156837, 58156739, +88 01713388777",
    "web": "www.omcbd.com",
    "address": "Unique Trade Center (UTC), Level-15 8, Panthapath, Dhaka-1215."
  },
  {
    "company_name": "One Trade",
    "category": "Trading",
    "email": "tamamcorporation97@gmail.com",
    "phone_mobile": "+88 01873882200",
    "web": null,
    "address": "27/11/3-C Hasan Bhaban, Top Khana Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Pharma & Firm",
    "category": "Pharmaceutical",
    "email": "info@pfcb.com.bd",
    "phone_mobile": "+88-02-48316468, 49357984, +88 01970010998",
    "web": "www.pfcb.com.br",
    "address": "11/5, City Heart Building, 67-Naya Patlan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Pulse Healthcare Technology",
    "category": "Medical Technology",
    "email": "info@pht.com.bd",
    "phone_mobile": "0170808061, 01858585025",
    "web": "www.pht.com.bd",
    "address": "Anwar Landmark Sensation, 17-18 Shyamoli, Mirpur Road, Dhaka-1207."
  },
  {
    "company_name": "Space Med Enterprise Ltd.",
    "category": "Medical",
    "email": "spacemed@dhaka.net",
    "phone_mobile": "01324735320, 01755744213",
    "web": null,
    "address": "BSCE Bhaban (Level-9), 102, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Tabassum International",
    "category": "International Trading",
    "email": "info@tabassuminternational.com",
    "phone_mobile": "01711427492, 01731008705",
    "web": "www.tabassuminternational.com",
    "address": "152/2A-2, Rawshan Tower (2nd Floor), Green Road Signal, West Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Tamam Corporation",
    "category": "Corporate",
    "email": "tamamcorporation97@gmail.com",
    "phone_mobile": "+88-02-223381575, +88 01771943917",
    "web": null,
    "address": "27/11/3-C Hasan Bhaban (2nd Floor) Topkhana Road, Dhaka-1000."
  },
  {
    "company_name": "Technoworth Associates Ltd.",
    "category": "Technology/Associates",
    "email": "headoffice@tradesworthgroup.com",
    "phone_mobile": "+88-02-223385646, 223380928",
    "web": "www.tradesworthgroup.com",
    "address": "78, Motijheel C/A (1st & 2nd Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Packaging/Manufacturing",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.aeyeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "S.T. Marketing Corporation Ltd.",
    "category": "Marketing",
    "email": "managingdirector@stmclbd.com",
    "phone_mobile": "+88-02-58071130-31, +88 01324440933",
    "web": "www.stmclbd.com",
    "address": "Registrar Office: 15/2, Topkhana Road, 3rd Floor, BMA Bhaban, Dhaka-1000, Bangladesh; Corporate Office: House # 1186, Avenue-11, Mirpur DOHS, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Sysmark Limited",
    "category": "Technology",
    "email": "info@sysmarkbd.com",
    "phone_mobile": "+88-02-48116642-43, 01709954380, 01709954385",
    "web": "www.sysmarkbd.com",
    "address": "House # 25, Lake Circus, Kalabagan (2nd Floor), Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Telerad Medical Systems Ltd.",
    "category": "Medical Systems",
    "email": "teleradmedicalsystems@gmail.com",
    "phone_mobile": "+88 0197977234-9",
    "web": "www.teleradmedicalsystems.com",
    "address": "Afza Tower, 27/F, Sangsad Avenue, Monipuripara, Tejgaon, Dhaka-1215."
  },
  {
    "company_name": "Tradevision Ltd.",
    "category": "Trading",
    "email": "info@tvlbd.com",
    "phone_mobile": "01701230000, 01755645555",
    "web": "www.tvlbd.com",
    "address": "House # B-141, Halim Villa, Lane # 22 New DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "Transmed Limited",
    "category": "Medical",
    "email": null,
    "phone_mobile": "+88 01715032087",
    "web": null,
    "address": "190 Elephant Road (1st Floor) Hatirpool, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction/Building",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": "Sandwich Panel Technology & Heat Proof Steel Building System"
  },
  {
    "company_name": "Unimed",
    "category": "Medical",
    "email": "admin@unimed.com.bd",
    "phone_mobile": "+88-02-47121519",
    "web": "www.unimed.com.bd",
    "address": "Ivory Krishnochura, 3/1-E (7th Floor) Puran Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Unique Medi Trade",
    "category": "Medical Trading",
    "email": "praxis.techbd@gmail.com",
    "phone_mobile": "+88 01717834173",
    "web": "www.uniquemeditrade.com",
    "address": "205/4, Begum Rokeya Sharani, Agargaon, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Unit Smart Healthcare Ltd.",
    "category": "Healthcare",
    "email": "info@www.unismartbd.com",
    "phone_mobile": "01680605460, 01688005882",
    "web": "www.unismartbd.com",
    "address": "1197 (4th Floor), Avenue-10, DOHS Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Union Biz Limited",
    "category": "Business/Trading",
    "email": "info@unionbizltd.com.bd",
    "phone_mobile": "+88-02-58053852",
    "web": "www.unionbizltd.com.bd",
    "address": "Sales Office: House # 25, Road # 09, Block # H Mirpur-2, Dhaka-1216, Bangladesh; Registered Office: 152, Gawair, Ashkona, Dakiknikan Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Vision Medical Technology",
    "category": "Medical Technology",
    "email": "visionmedicalbd@gmail.com",
    "phone_mobile": "01973018148, 01746705414",
    "web": "www.vmtbd.com",
    "address": "56/8, 4th Floor, Rauf Manson, Lake Circus, Kalabagan, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Widespread Solution Ltd.",
    "category": "Technology Solutions",
    "email": "info@wslbd.com",
    "phone_mobile": "+88-02-223369517",
    "web": "www.wslbd.com",
    "address": "F Haque Tower, 107 Sonaragon Road Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Yapee Medical Solution",
    "category": "Medical",
    "email": "yapeems@gmail.com",
    "phone_mobile": "+88 01760704604",
    "web": "www.yapeemedicalsolution.com",
    "address": "1486/1672, O.R Nizam Road, Pachlaish, Chattogram, Bangladesh"
  },
  {
    "company_name": "Pharma IMEX Ltd.",
    "category": "Pharmaceutical Import/Export",
    "email": "info@pharmaimex.com",
    "phone_mobile": "01738408674, 01844223939",
    "web": "www.pharmaimex.com",
    "address": "Level-7, 29, Kawran Bazar, Dhaka."
  },
  {
    "company_name": "Health Pharma",
    "category": "Pharmacy",
    "email": "info@healthpharma.com.bd",
    "phone_mobile": "01648462005, 01304419901",
    "web": "www.healthpharma.com.bd",
    "address": "Shop # 08, Plot # 59, Weyesis Shopping Complex, Sonargon Janapad, Road # 18, Sector # 7, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Lazz Pharma Ltd.",
    "category": "Pharmaceutical",
    "email": "lazzcorporate@gmail.com",
    "phone_mobile": "+88-02-223310689, 01886860411, 01319864049",
    "web": "www.lazzpharma.com",
    "address": "Lazz Center, 63/C, Lake Circus, Kalabagan, West Panthapath, Dhaka."
  },
  {
    "company_name": "Tamanna Pharmacy",
    "category": "Pharmacy",
    "email": "tamanna.pharmacyoffice@gmail.com",
    "phone_mobile": "+88 01841100718",
    "web": "www.tamannapharmacy.com",
    "address": "Head Office: BTI Heritage Apt, House # 1B, Road # 126, Gulshan-1, Dhaka-1212."
  },
  {
    "company_name": "Bangladesh Melamine Industries Ltd.",
    "category": "Melamine Manufacturing",
    "email": "222281859",
    "phone_mobile": "+88-02-222281849, 222281884",
    "web": "www.nasirgroup.com.bd",
    "address": null
  },
  {
    "company_name": "Bengal Melamine Ltd.",
    "category": "Melamine Manufacturing",
    "email": "+88-02-222288248",
    "phone_mobile": "+88-02-222288248",
    "web": "www.bengalmelamine.com",
    "address": "Bengal House, 75 Gulshan Avenue Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Green Mountain BD",
    "category": "Safety/Security Systems",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025000, 01816033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Classic Melamine Industries Ltd.",
    "category": "Melamine Manufacturing",
    "email": "info@mahbubgrouppbd.com",
    "phone_mobile": "01730029090, 01907111010",
    "web": "www.mahbubgrouppbd.com",
    "address": "House # 24, Road # 13, Sector # 3 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Crown Melamine Industries Ltd.",
    "category": "Melamine Manufacturing",
    "email": "azaman_crown@yahoo.com",
    "phone_mobile": "+88 01911354110",
    "web": "www.crownmelamineindstld.com",
    "address": "77/8, B, Mouli Bazar (2nd Floor) Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Diamond Melamine Industries (Pvt.) Ltd.",
    "category": "Melamine Manufacturing",
    "email": "diamondmelamine@gmail.com",
    "phone_mobile": "+88 01755531688",
    "web": "www.diamondmelamine.com",
    "address": "Head Office: Mona Complex (2nd Floor), 21, Armenian Street, Babu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Hyundai Elevator Company Ltd.",
    "category": "Elevator Services",
    "email": null,
    "phone_mobile": "+88 0197406009, 01614606009, 01614606008",
    "web": "www.hyundaielevatorltd.com",
    "address": "Head Office: 128/4, Tejputri Bazar (1st Floor), Karwan Bazar, Dhaka-1215; Corporate Office: Nook G.M. Tower, Sakib Mansion, 13/A, A.B. Guha Road, Myennsingh"
  },
  {
    "company_name": "BD Plast Limited",
    "category": "Plastics/Packaging",
    "email": "info@bdplastltd.com",
    "phone_mobile": "+88 01907155353",
    "web": "www.bdplastltd.com",
    "address": "E/05, Mouchak Road, Mizmizi, Siddhirganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Anik Poly & Packaging Industries Ltd.",
    "category": "Packaging",
    "email": "marketing@hamidntwalha-apk.com",
    "phone_mobile": "01726446254, 01713174160",
    "web": "www.tahmidntwalha-apk.com",
    "address": "Tel.: ......+8804 801 Sector #12 Utara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Dutch-Bangla Pack Limited",
    "category": "Packaging",
    "email": "mail@dbpackltd.com",
    "phone_mobile": "+88-02-55013460, 55013468",
    "web": "www.dbpackltd.com",
    "address": "Navana DH Tower (10th Floor), Suite #1001, 6 Panthapath, Dhaka-1215."
  },
  {
    "company_name": "Jobalda Printing & Packaging Ltd.",
    "category": "Printing/Packaging",
    "email": "info@jobaldapack.com",
    "phone_mobile": "+88 01568316131",
    "web": "www.jobaldapack.com",
    "address": "10, Alim Matbar Road, Goran Chatbari, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Kashpla Printing & Packaging Ind. Ltd.",
    "category": "Printing/Packaging",
    "email": "kaspiapp@gmail.com",
    "phone_mobile": "01973222608, 01973222601",
    "web": "www.kashpiapp.com",
    "address": "1st Floor, KA-51, Sahara Kuril Jame Masjid Road, Kuril Chowrasta, Khilkhet, Vatara, Dhaka-1229."
  },
  {
    "company_name": "Mans Packaging",
    "category": "Packaging",
    "email": "contact@manspackaging.com",
    "phone_mobile": "+88 01787108216",
    "web": "www.manspackaging.com",
    "address": "Sonir Akhra, Mridha Bari Road Jatrabari, Dhaka-1362, Bangladesh"
  },
  {
    "company_name": "Meghna Packaging Ltd.",
    "category": "Packaging",
    "email": "info@meghnapack.com",
    "phone_mobile": "01678711959, 01894439721",
    "web": "www.meghnapack.com",
    "address": "23/4, Kunipara, Tejgaon I/A, Dhaka."
  },
  {
    "company_name": "Mohona Packages (BD) Ltd.",
    "category": "Packaging",
    "email": "info@mohonapack.com",
    "phone_mobile": "+88-02-224470643, 224470644, +88 01708146715",
    "web": "www.mohonapack.com",
    "address": "Level-4, AM Tower, 25 Sonargaon Janapath, Sector #12, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Nasir Printing & Packaging Industries Ltd.",
    "category": "Printing/Packaging",
    "email": "export@nasir-group.biz",
    "phone_mobile": "+88-02-222264355, 222281849",
    "web": "www.nasirgroup.com.bd",
    "address": "85, Suhrawardi Avenue, Baridhara Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Packmat Industries Ltd.",
    "category": "Packaging",
    "email": "op16@prangroup.com",
    "phone_mobile": "01704132952",
    "web": "www.packmatbd.com",
    "address": "105 Pragati Sarani, Dhaka-1212."
  },
  {
    "company_name": "Repack Packaging",
    "category": "Packaging",
    "email": "repackpackaging@gmail.com",
    "phone_mobile": "+88 01988887734",
    "web": "www.repack.com.bd",
    "address": "42/43, Fahimia Tower (8th Floor), (Room # 8-E), Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Robin Printing & Packages Ltd.",
    "category": "Printing/Packaging",
    "email": "info@robinpp.com",
    "phone_mobile": "+88-02-41051640, 41051641, 41051645, +88 01713375464",
    "web": "www.robinpp.com",
    "address": "Robin Tower (1st Floor), 42/43 Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "SDK Printing & Packaging",
    "category": "Printing/Packaging",
    "email": "info@skd.com.bd",
    "phone_mobile": "+88 01714113082",
    "web": "www.sdk.com.bd",
    "address": "Khan Mansion, Suite # 9B (8th Floor) 28/A-5, Toyenbee Circular Road Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "The Global Packaging Industries (Pvt.) Ltd.",
    "category": "Packaging",
    "email": "01612787898",
    "phone_mobile": "01817141783",
    "web": "www.tgpllp.com",
    "address": "24/D, Topkhana Road, 7th Floor, Suite # A-7, Segunbagicha, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Sanowara Packaging Industries Ltd.",
    "category": "Packaging",
    "email": "333354527",
    "phone_mobile": "+88-02-33364376",
    "web": "www.sanowara.com",
    "address": "Head Office: Red Cow Building (2nd Floor) 601, Ramjoy Mohajon Lane, Khatangunj, Chattogram, Bangladesh"
  },
  {
    "company_name": "Al-Arafah Packaging Industries Ltd.",
    "category": "Packaging",
    "email": "office@alarafahpackaging.com",
    "phone_mobile": "01312418025, 01713269595",
    "web": "www.alarafahpackaging.com",
    "address": "01/1, Bashura, Board Bazar, National University, Gazipur Sadar, Gazipur-1704, Bangladesh"
  },
  {
    "company_name": "Khan Accessories & Packaging Co. Ltd.",
    "category": "Packaging/Accessories",
    "email": "info@kapcobd.net",
    "phone_mobile": "+88 01833318878",
    "web": "www.kapcobd.net",
    "address": "B-72-73 BSCIC Industrial Area Tongi, Gazipur-1710, Bangladesh"
  },
  {
    "company_name": "Auto Pac",
    "category": "Packaging Machinery",
    "email": "autopacbd@gmail.com",
    "phone_mobile": "01818496642, 01631769707",
    "web": "www.autopacbd.com",
    "address": "128/3, Kawran Bazar, Dhaka-1215."
  },
  {
    "company_name": "Imtex Packaging",
    "category": "Packaging",
    "email": "sattar.imtex@gmail.com",
    "phone_mobile": "01980004300, 01980004306",
    "web": "www.imtexpackaging.com",
    "address": "Cha-59, North Badda, Gulshan Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "J.S Packaging Machineries",
    "category": "Packaging Machinery",
    "email": "jspackagingbd16@gmail.com",
    "phone_mobile": "01856783333, 01740595375",
    "web": "www.jspackagingbd.com",
    "address": "52/2, North Jatrabari, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Pacific Interlink",
    "category": "Packaging/Interlink",
    "email": "pacific@pacificinterlinkbd.com",
    "phone_mobile": "+88-02-58956983, 48953702, 01714166151, 01623442222",
    "web": "www.pacificinterlinkbd.com",
    "address": "House # 05, Road # 9B, Sector # 7 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bismillah Hardware Electric & Paint",
    "category": "Hardware/Paint",
    "email": null,
    "phone_mobile": "+88 01711124709",
    "web": null,
    "address": "Rayerbag Bazar Road, Rayerbag Kadamtali, Dhaka-1362, Bangladesh"
  },
  {
    "company_name": "New Al Amin Hardware",
    "category": "Hardware",
    "email": null,
    "phone_mobile": "+88 01912369594",
    "web": null,
    "address": "House # 29/A, Road # 01, Mohammadi Housing Ltd., Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Paints Gallery & Hardware Mart",
    "category": "Paint/Hardware",
    "email": null,
    "phone_mobile": "+88 01913899100",
    "web": null,
    "address": "71, Gausul Azam Avenue, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Rangdhanu Painters & Hardware",
    "category": "Paint/Hardware",
    "email": null,
    "phone_mobile": "+88 01918699056",
    "web": null,
    "address": "Abdullahpur Bus Stand, South Keraniganj, Dhaka-1310, Bangladesh"
  },
  {
    "company_name": "Sarder Paint Supply",
    "category": "Paint Supply",
    "email": null,
    "phone_mobile": "+88 01760893919",
    "web": null,
    "address": "255/3, Nawabpur Road, Rothkhola Traffic Mor, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Total Pack Limited",
    "category": "Packaging",
    "email": "contact@totalpackbd.com",
    "phone_mobile": "+88 01908797887",
    "web": "www.totalpackbd.com",
    "address": "4/C (4th Floor), Azad Centre 55 Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "UM Industrial Solution & Machineries",
    "category": "Industrial Machinery",
    "email": "ummachineries50422@gmail.com",
    "phone_mobile": "01717937916, 01932941504",
    "web": null,
    "address": "92, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Universal Digital Engineering Ltd.",
    "category": "Digital Engineering",
    "email": "info@universaldel.com",
    "phone_mobile": "01614328152, 01891150467",
    "web": "www.universaldel.com",
    "address": "House # 34 (Flat-2/B), Lake Drive Road, Sector # 07, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bhai Bhai Paints & Hardware",
    "category": "Paint/Hardware",
    "email": null,
    "phone_mobile": "+88 01717314100",
    "web": null,
    "address": "68, Sher-E-Bangla Road, Zigatola Dhanmondi, Dhaka-1209."
  },
  {
    "company_name": "Hasan Hardware & Paint",
    "category": "Hardware/Paint",
    "email": null,
    "phone_mobile": "01819196111, 01865859392",
    "web": null,
    "address": "60/61, Amir Complex, Plot # 43, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Jamal Paints & Hardware",
    "category": "Paint/Hardware",
    "email": null,
    "phone_mobile": "01631137464, 01676770161",
    "web": null,
    "address": "2nd Buriganga Bridge, Next to Lion Shopping Mall, Model Town, Keraniganj, Dhaka-1310, Bangladesh"
  },
  {
    "company_name": "Keya Paint Supply",
    "category": "Paint Supply",
    "email": null,
    "phone_mobile": "+88 01717404237",
    "web": null,
    "address": "16/17, Nurani Center, Imamganj Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Masud Hardware & Paint",
    "category": "Hardware/Paint",
    "email": null,
    "phone_mobile": "+88 01916831238",
    "web": null,
    "address": "96, North Manda, Mugda, Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "Monowara Paints Supply",
    "category": "Paint Supply",
    "email": null,
    "phone_mobile": "+88 01711203978",
    "web": null,
    "address": "15/14, Sher Shah Suri Road, Mohammadpur Town Hall Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Asian Paints Bangladesh Ltd.",
    "category": "Paints",
    "email": "weassure.apbl@asianpaints.com",
    "phone_mobile": "+88-02-22286920, 8833363, +8809612003355",
    "web": "www.asianpaints.com.bd",
    "address": "The Pearl Trade Center (PTC), Cha-90/3, Progoti Sarani, North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "BD Paints Ltd.",
    "category": "Paints",
    "email": "bdpl.scp@gmail.com",
    "phone_mobile": "+8809678-772345",
    "web": "www.bdpaints.com",
    "address": "House # 480 (4th Floor), Road # 8, Baridhara DOHS, Dhaka Cantonment Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Berger Paints Bangladesh Limited",
    "category": "Paints",
    "email": "info@bergerbd.com",
    "phone_mobile": "16804",
    "web": "www.bergerbd.com",
    "address": "Berger House, House # 8, Road # 2, Sector # 3, Uttara, Dhaka-1230."
  },
  {
    "company_name": "British Paints Ltd.",
    "category": "Paints",
    "email": "info@britishpaints.com.bd",
    "phone_mobile": "01904477410, 01904477420",
    "web": "www.britishpaints.com.bd",
    "address": "House # 36, Road # 13, Sector # 03 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Elite Paint & Chemical Industries Ltd.",
    "category": "Paints/Chemicals",
    "email": "info@elitepaint.com.bd",
    "phone_mobile": "+88-02-58935558, 58953674",
    "web": "www.elitepaint.com.bd",
    "address": "Syed Grand Centre, Plot # 89, Road # 28, Sector # 7, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Farzana Unique Chemical Works",
    "category": "Chemicals/Paint",
    "email": "alightpaint77@gmail.com",
    "phone_mobile": "+88 01618826800",
    "web": null,
    "address": "8, Noor Masjid Madrasha Market Malibagh Chowdhury Para, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Hi-Max Paints Ltd.",
    "category": "Paints",
    "email": "himaxpaintsltd@gmail.com",
    "phone_mobile": "+88 01955448191",
    "web": null,
    "address": "Al Razi Complex, G # 401 166-167, Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Imperial Paints Company",
    "category": "Paints",
    "email": "imperialpaints1997@gmail.com",
    "phone_mobile": "01926665858, 01926665757, 01926665777, 01877998808",
    "web": null,
    "address": "118/2 Shantinagar, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Jotun Bangladesh Ltd.",
    "category": "Paints",
    "email": "jotun.bangladesh@jotun.com",
    "phone_mobile": "+88 01700744569",
    "web": null,
    "address": "House # 6 (7th Floor), Road # 2B, Block # J, Baridhara R/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Kangaroo Paints Bangladesh Ltd.",
    "category": "Paints",
    "email": "info@kangaroopaintsbd.com",
    "phone_mobile": "+88-02-224458379, +88 01970614959",
    "web": "www.kangaroopaintsbd.com",
    "address": "Corporate Office: 254/Ka, East Nakhalpara, Tejgaon, I/A, Dhaka-1208, Bangladesh; Sales Office: House # 18/7, South Shekhdi, Jatrabari, Dhaka-1236."
  },
  {
    "company_name": "Kansai Nerolac Paints Bangladesh Ltd.",
    "category": "Paints",
    "email": "info@nerolacbd.com",
    "phone_mobile": "+88-02-58935551, 08001111222, +88 01708832399",
    "web": "www.nerolacbd.com",
    "address": "RAK Tower, Level-11, 1/A Jashimuddin Avenue, Sector # 03, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Nippon Paint (Bangladesh) Pvt. Ltd.",
    "category": "Paints",
    "email": "customercare@nipponpaint.com.bd",
    "phone_mobile": "+8809678333444",
    "web": "www.nipponpaint.com.bd",
    "address": "Corporate Office: 60/E/2 (Dewan Manjili), Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Polac Paint & Chemical Co. Ltd.",
    "category": "Paints/Chemicals",
    "email": "polacpaint@gmail.com",
    "phone_mobile": "+88 01913541579",
    "web": null,
    "address": "94/1, Sharot Gupto Road, Narinda Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Romana Paints",
    "category": "Paints",
    "email": "romanapaint1983@gmail.com",
    "phone_mobile": "01713003295, 01713049066",
    "web": "www.romanapaint.com",
    "address": "1028/1, Malibagh Bazar Road, Noor Plaza, (1st Floor), Dhaka-1217."
  },
  {
    "company_name": "Roxy Paints Ltd.",
    "category": "Paints",
    "email": "info@roxypaints.com",
    "phone_mobile": "+88-02-581512021, 48117755, 58156149, 48113939, 58156684",
    "web": "www.roxypaints.com",
    "address": "House # 08, Level # 4-5, Road # 14, Dhannodi R/A, Dhaka-1205."
  },
  {
    "company_name": "Ulja Paints Industry",
    "category": "Paints",
    "email": "info@uljapaints.com",
    "phone_mobile": "+88 01708165109-13",
    "web": "www.uljapaints.com",
    "address": "AHN Tower (10th to 11th Floor), 13, Bir Uttam CR Dutta Road Banglamotor, Dhaka-1205."
  },
  {
    "company_name": "Al-Karim Paints & Chemicals Ltd.",
    "category": "Paints/Chemicals",
    "email": "info@alkarimpaints.com",
    "phone_mobile": "+88 01714044662",
    "web": "www.alkarimpaints.com",
    "address": "150, Jubilee Road, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Belac Paint & Co.",
    "category": "Paints",
    "email": "info@belacpaint.com",
    "phone_mobile": "+88-02-333323466, +88 01818745665",
    "web": "www.belacpaint.com",
    "address": "293, Dewanhat, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Disha Paints (BD) Ltd.",
    "category": "Paints",
    "email": "nazmulkarim644@yahoo.com",
    "phone_mobile": "+88 01819315305",
    "web": null,
    "address": "House # 02, Road # 02, Line # 03, Block-K, Halishahar H/E, Chattogram, Bangladesh"
  },
  {
    "company_name": "United Paint & Chemical Industries",
    "category": "Paints/Chemicals",
    "email": "unitepaints@gmail.com",
    "phone_mobile": "01768009818, 01733991523",
    "web": null,
    "address": "House # 4, Road # 4, Sector # 4 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Arafat Paint & Varnish Industries",
    "category": "Paints/Varnish",
    "email": "arafatpaint004@gmail.com",
    "phone_mobile": "01904306729, 01904306730, 01904306737",
    "web": "www.arafatpaint.com",
    "address": "House # 210, Arafat House, Kali Bari Road, Barishal-8200, Bangladesh"
  },
  {
    "company_name": "Al-Hossain Paints & Chemical Works Ltd.",
    "category": "Paints/Chemicals",
    "email": "imdad77@gmail.com",
    "phone_mobile": "+88 01819646880",
    "web": null,
    "address": "Block-B/3, Industrial Area, Bayazid Bostami, Chattogram-4210."
  },
  {
    "company_name": "Eastern Chemical Works Ltd.",
    "category": "Chemicals",
    "email": null,
    "phone_mobile": "+88 01713162716",
    "web": null,
    "address": "333, Asadgonj, Chattogram, Bangladesh"
  },
  {
    "company_name": "Euro Classic Paints & Chemical Ind.",
    "category": "Paints/Chemicals",
    "email": "ahad475@gmail.com",
    "phone_mobile": "+88 01674858199, +88 01819819551",
    "web": null,
    "address": "116/117, Sadarghat Road Chattogram, Bangladesh"
  },
  {
    "company_name": "Fisco Paint & Chemicals Ltd.",
    "category": "Paints/Chemicals",
    "email": "fiscogroup@gmail.com",
    "phone_mobile": "+88 01711964195",
    "web": null,
    "address": "Noor Chamber, 190/225, Sayed Ahmed Chowdhury Lane, Jubilee Road, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Sigma Lift Company Ltd.",
    "category": "Elevator Services",
    "email": null,
    "phone_mobile": "+88 01974606009, 01614606008, 01614606008",
    "web": null,
    "address": "Head Office: 128/4, Tejputri Bazar (1st Floor), Karwan Bazar, Dhaka-1215; Corporate Office: Nook GM, Topsari, Karwan Bazar, Dhaka-1215"
  },
  {
    "company_name": "Lucky Emporium",
    "category": "Trading",
    "email": "lucky.emporium10@gmail.com",
    "phone_mobile": "+88 01750038492",
    "web": null,
    "address": "1088, Hajee Amir Ali Chy. Road New Pak Building (1st Floor), Amir Market, Khatungonj, Chattogram, Bangladesh"
  },
  {
    "company_name": "Moon Star Paints",
    "category": "Paints",
    "email": "info@moonstarpaints.com",
    "phone_mobile": "+88 01713464018",
    "web": "www.moonstarpaints.com",
    "address": "BSCIC I/A, Kalirghat, Chattogram."
  },
  {
    "company_name": "Dunlop Paints & Chemicals",
    "category": "Paints/Chemicals",
    "email": "mohiuddinhasan132@gmail.com",
    "phone_mobile": "01712261291, 01907079738",
    "web": null,
    "address": "Plot # 29, Block-B, BSCIC Industrial Estate, Jhumjhumpur, Jashore."
  },
  {
    "company_name": "Asko Packaging Industries Ltd.",
    "category": "Packaging",
    "email": "askogroup@hotmail.com",
    "phone_mobile": "01781223366, 01975599110",
    "web": "www.askogroupbd.com",
    "address": "House # 43/H, Road # 4, Block # D Bashundhara R/A, Dhaka-1229."
  },
  {
    "company_name": "Nixon Box Industries Ltd.",
    "category": "Box/Packaging",
    "email": "info@nixonbd.com",
    "phone_mobile": "+88 01713341533",
    "web": "www.nixonbd.com",
    "address": "Ka-210/2, Kuril, Vatara, Dhaka-1229."
  },
  {
    "company_name": "Paxon BD Ltd.",
    "category": "Packaging",
    "email": "info@paxonbdltd.com",
    "phone_mobile": "+88 01766666690",
    "web": "www.paxonbdltd.com",
    "address": "Suite # 10/A-1, Level-10, Road # 17, Plot # 07, Rupsha Tower, Kamal Ataturk Avenue, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Hossain Box Industries",
    "category": "Box Manufacturing",
    "email": "info@hossainbox.com",
    "phone_mobile": "01819312208, 01619312208",
    "web": "www.hossainbox.com",
    "address": "86, Batali Road, Enayet Bazar Chattogram, Bangladesh"
  },
  {
    "company_name": "Padma Accessories Limited",
    "category": "Accessories",
    "email": "info@padmaaccessories.com",
    "phone_mobile": "01782441158, 01977701313",
    "web": "www.padmaaccessories.com",
    "address": "Plot # 02, Sector # 07, Chittagong Export Processing Zone (CEPZ) Chattogram-4223, Bangladesh"
  },
  {
    "company_name": "A.H.B Paper House",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "+88 01976123162",
    "web": null,
    "address": "31, Nawab Yousuf Road, Shop # 26 Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Eastern Paper",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "01675719991, 01710089073",
    "web": null,
    "address": "188, Fakirapool, Dhaka-1000."
  },
  {
    "company_name": "Jalalabad Paper House",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "+88-02-224400881, 01711175049, 01757582148",
    "web": null,
    "address": "135, Arambagh, Motijheel, Dhaka."
  },
  {
    "company_name": "Hakkari Enterprise",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "+88 01718023535",
    "web": null,
    "address": "25/2 Zindabahar 1st Lane, Ahmed Plaza, Babubazar, Dhaka-1100."
  },
  {
    "company_name": "M S Paper House",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "01729244190, 01619698311, 01700743582",
    "web": null,
    "address": "189, Fakirapool, Khabir Plaza Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "New Binimoy Paper House",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "01707942460, 01977073491",
    "web": null,
    "address": "184, Fakirapool, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Perfect Paper House",
    "category": "Paper Merchant",
    "email": "perfectpaper137@gmail.com",
    "phone_mobile": "+88 01707769875, +88 01723258812",
    "web": null,
    "address": "137/D, Arambagh, Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Rana Enterprise",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "01710040874, 01761804671",
    "web": null,
    "address": "140, Arambagh, Motijheel Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "S.A. Paper House",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "01714590590, 01731414294",
    "web": null,
    "address": "189, Fakirapool, Khabir Plaza Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Afil Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@afilgroup.com",
    "phone_mobile": "+88 01313778855",
    "web": "www.afilgroup.com",
    "address": "Akij Chamber (7th Floor), 73 Diluksha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Alif Pulp & Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "alifinternational@yahoo.com",
    "phone_mobile": "+88-02-222229397, 222227007",
    "web": "www.alifgroup.net",
    "address": "402, New Eskaton Road, New Eskaton Road, Moghbazar, Dhaka."
  },
  {
    "company_name": "Amber Pulp & Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "mail@partex.net",
    "phone_mobile": "+88-02-222262888",
    "web": "www.partexgroup.com",
    "address": "74, Bir Uttam A.K. Khandaker Sarak Mohakhali C/A, Dhaka-1212."
  },
  {
    "company_name": "Sazzad Trading",
    "category": "Trading",
    "email": null,
    "phone_mobile": "+88 01714101078, +88 01612379041, +88 01819557181",
    "web": null,
    "address": "137, Arambagh/Fakirapool Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Siraj Paper Store",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "+88-02-57392937, +88 01777648422",
    "web": null,
    "address": "31/1, Zindabahar 1st Lane, Nayabazar (Chowdhury Market), Dhaka, Bangladesh"
  },
  {
    "company_name": "Zarif Paper House",
    "category": "Paper Merchant",
    "email": null,
    "phone_mobile": "+88-02-41070702, +88 0186842892, +88 01817095278",
    "web": null,
    "address": "123, Arambagh, Motijheel Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ananta Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@younusgroup.com",
    "phone_mobile": "+88-02-58610056, 58613965",
    "web": "www.younusgroup.com",
    "address": "51, Central Road, Dhanmondi Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Base Papers Limited",
    "category": "Paper Manufacturing",
    "email": "info.basepapers@gmail.com",
    "phone_mobile": "+88 01779472094",
    "web": "www.basepapers.co",
    "address": "106 Gulshan Avenue, 5th Floor Hosna Center, Dhaka-1212."
  },
  {
    "company_name": "Bashundhara Multi Paper Industries Ltd.",
    "category": "Paper Manufacturing",
    "email": "info.paper@bg.com.bd",
    "phone_mobile": "+88-02-84322899-93",
    "web": "www.bmpil.com",
    "address": "Plot # 56/A, Block # C, Umme Kulsum Road, Bashundhara R/A, Dhaka-1229."
  },
  {
    "company_name": "Bashundhara Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info.paper@bgc-bd.com",
    "phone_mobile": "+8809666443310-19",
    "web": "www.bashundharapapermills.com",
    "address": "Head Office: Bashundhara Industrial Headquarter (BIHQ), Tower # 1, Plot # 844, Road # 12, Block # 1, Bashundhara R/A, Dhaka-1229."
  },
  {
    "company_name": "Creative Paper Mills Limited",
    "category": "Paper Manufacturing",
    "email": "info@creativepapermills.com",
    "phone_mobile": "+88-02-226600895, +88-02-226600894",
    "web": "www.creativepapermills.com",
    "address": "Corporate Office: Sena Kalyan Business Mart (Level -7) 218C, Bir Uttam Mir Shawkat Sarak, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "DR Paper Industries Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@drpaper.com",
    "phone_mobile": "+88 01898396607",
    "web": "www.drindustriespaperunit.com",
    "address": "Head Office: House # 21 (4th Floor), Road # 123 Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Jamuna Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@jamunagroup.com",
    "phone_mobile": "+88-02-9824001-29",
    "web": "www.jamunagroup.com",
    "address": "Jamuna Future Park, Dhaka-1229."
  },
  {
    "company_name": "Lipy Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "shahrlar2018@gmail.com",
    "phone_mobile": "+88 01994300939",
    "web": "www.lipygroup.com",
    "address": "1, 1/1 Naya Paltan, Culvert Road (Rupayan Taj), Suite # 1-5 (5th Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Magura Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@maguragroup.com",
    "phone_mobile": "+88-02-55036456-7, 55036458",
    "web": "www.maguragroup.com",
    "address": "Plot # 314/A, Road # 18, Block # E Bashundhara Avenue Road, Bashundhara R/A, Dhaka-1229."
  },
  {
    "company_name": "MANZ-FI Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@manzfipapermills.com",
    "phone_mobile": "+88 01713014547, +88 01711010352, +88 01713030468",
    "web": "www.manzfipapermills.com",
    "address": "Head Office: 8/6, Segunbagicha (2nd Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Papertech Industries Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@papertechbd.com",
    "phone_mobile": "+8809614400000, +88 01671430499",
    "web": "www.papertechbd.com",
    "address": "Rangs Paramount, 10th Floor Block # C, Plot # 11, Road # 17, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Partex Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "mail@partex.net",
    "phone_mobile": "+88-02-222262888",
    "web": "www.partexgroup.com",
    "address": "74, Bir Uttam A.K. Khandaker Sarak Mohakhali C/A, Dhaka-1212."
  },
  {
    "company_name": "Sonali Paper & Board Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "spshare@younusgroup.com",
    "phone_mobile": "+88-02-58610056-59, +88 01678205520",
    "web": "www.spbmlbd.com",
    "address": "Head Office: 51, Central Road, Dhanmondi Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Tanveer Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@mgi.org",
    "phone_mobile": "+8809666777055, +88 01713048706",
    "web": "www.mgi.org",
    "address": "Fresh Villa, House # 15, Road # 34 Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Vertex Paper and Board Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@vertexpaper.com",
    "phone_mobile": "+88 01973907821",
    "web": "www.vertexpaper.com",
    "address": "Bhuiyan Mansion, 6 Motijheel C/A (4th Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Younus Offset Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "information@younusgroup.com",
    "phone_mobile": "+88-02-58610056, 58613965",
    "web": "www.younusgroup.com",
    "address": "51, Central Road, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "BCL Paper Mills Limited",
    "category": "Paper Manufacturing",
    "email": "info@bclpaper.com",
    "phone_mobile": "+88-02-589904481, +88 01730726025",
    "web": "www.bcl-bd.com",
    "address": "TMSS Foundation Office, TCB Building-1, Rangpur Road, Bogura-5800"
  },
  {
    "company_name": "Hakkari Pulp & Paper Mills Ltd.",
    "category": "Paper Manufacturing",
    "email": "info@hakkanigroup.com",
    "phone_mobile": "+88-02-43151463, 43151464",
    "web": "www.hakkanigroup.com",
    "address": "2/10, Dhaka Trunk Road, North Pahartali, Chattogram, Bangladesh"
  },
  {
    "company_name": "Farid Products",
    "category": "Paper Machinery",
    "email": "faridproducts@gmail.com",
    "phone_mobile": "+88 01715254634, +88 01733892906",
    "web": "www.faridproducts.com",
    "address": "177 Mahtab Center (15th Floor) Shaheed Syed Nazrul Islam Sarani Bijaynagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fiber Source BD",
    "category": "Paper Machinery",
    "email": "mhr@fibersourcebd.com",
    "phone_mobile": "+88 01794350408, +88 01911197236, +88 01764449569",
    "web": "www.fibersourcebd.com",
    "address": "E.H.A.-604, 28/6, New Eskaton Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Rynco Engineering",
    "category": "Engineering/Safety",
    "email": "info@ryncoengineering.com.bd",
    "phone_mobile": "+88 01777 147215, +88 01713 380220",
    "web": "www.ryncoengineering.com.bd",
    "address": "House-20, Level-3, Road-12, Nikunjā-2, Khilket, Dhaka-1229"
  },
  {
    "company_name": "Hasan Polymer Industries",
    "category": "Polymer/Plastics",
    "email": "hasanpolymerind@gmail.com",
    "phone_mobile": "01711591270, 01511591270, 01918434186",
    "web": null,
    "address": "House # 146, Ward # 55, Ashrafabad Nabinagar, Kamrangirchar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Nexus Polymer",
    "category": "Polymer",
    "email": "info@nexuspolymer.com",
    "phone_mobile": "+8809639511247",
    "web": "www.nexuspolymer.com",
    "address": "92/2, New Ali Bahar, Kadamtoli Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Raj Plastic Products",
    "category": "Plastics",
    "email": "baset.rpp@gmail.com",
    "phone_mobile": "01771123484, 01552491532",
    "web": null,
    "address": "Holding # 1/2, Azampur, Dewanpara Dakhin Khan, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "RM Poly & Packaging",
    "category": "Polymer/Packaging",
    "email": "rs.accessoriesrubel@gmail.com",
    "phone_mobile": "+88 01673634973",
    "web": "www.rmpolybd.com",
    "address": "425/1, Mominbag, Kamrangirchar Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Astech Limited",
    "category": "Plastics",
    "email": "info@astechbd.com",
    "phone_mobile": "+88-02-333380420",
    "web": "www.astechbd.com",
    "address": "Corporate Office & Factory: B-19/20 BSCIC, Sagorika Road Chattogram, Bangladesh; Dhaka Office: Rupsha Tower 9C, House # 7, Road # 17, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Elite Super Plastic Ind. (Pvt.) Ltd.",
    "category": "Plastics",
    "email": null,
    "phone_mobile": "+88-02-334450350-53",
    "web": null,
    "address": "Elite House, CDA Avenue, G.P.O Box # 395, Nasirabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "Q Pail Limited",
    "category": "Plastics",
    "email": "marketing@qpail.com",
    "phone_mobile": "01819343635, 01680240524, 01624071737, 01725481724",
    "web": "www.qpail.com",
    "address": "Plot # B 196, BSCIC I/A, Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "Abrar Plastic Industries Ltd.",
    "category": "Plastics",
    "email": "info@alifgroupbd.co",
    "phone_mobile": "+88-02-57317947, +88 01978001255",
    "web": "www.alifgroupbd.co",
    "address": "Head Office: 43, Moulovi Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Al-Hammam Plastic Industries",
    "category": "Plastics",
    "email": "info@alhammamplastic.com",
    "phone_mobile": "01978773299, 01842773299",
    "web": "www.alhammamplastic.com",
    "address": "ECB Chottor, Matikata, Dhaka Cantonment, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Alpha Plastic & Packaging Industries",
    "category": "Plastics/Packaging",
    "email": "alphaintlbd7@gmail.com",
    "phone_mobile": "01678141808, 01618001234",
    "web": "www.alphaplasticbd.com",
    "address": "63/3, Water Works Road, Arshad Koloni, Chawkbazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Bismillah Plastics",
    "category": "Plastics",
    "email": "info@bismillahplastics.com",
    "phone_mobile": "01952288202, 01952288211",
    "web": "www.bismillahplastics.com",
    "address": "Office & Factory: Plot # 08, Block # A, Lane-11, East Islambagh, Kamrangirchar Battery Ghat, Dhaka-1310."
  },
  {
    "company_name": "Boss Plastic Industries Ltd.",
    "category": "Plastics",
    "email": "bosstank@gmail.com",
    "phone_mobile": "01730482257, 01730482253",
    "web": null,
    "address": "Shootkirtek, Kolaita, Keraniganj, Dhaka"
  },
  {
    "company_name": "Habib Industries Ltd.",
    "category": "Plastics/Industrial",
    "email": "info@technopc.net",
    "phone_mobile": "+88-02-48320729, 09638881111",
    "web": "www.habibindustries.net",
    "address": "Corporate Office: Habib Center (5th Floor), 128, New Eskaton Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Janata Pet Industries",
    "category": "Plastics/PET",
    "email": "bluebelltrading51258@gmail.com",
    "phone_mobile": "01711993524, 01740951258",
    "web": null,
    "address": "87, Paltan Tower, Suite # 807 (8th Floor), Purana Paltan Lane, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Luna Polymer Industry Ltd.",
    "category": "Polymer",
    "email": "contact@luna.com.bd",
    "phone_mobile": "+88-02-41031071-74, 01713039667, 0171303091, 01711520488",
    "web": "www.luna.com.bd",
    "address": "Corporate Office: Rupayan Trade Centre, Level-6, Office # 1A & 4, 114, Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Mainst Plastic Industries (Pvt.) Ltd.",
    "category": "Plastics",
    "email": "matintrade.ind@gmail.com",
    "phone_mobile": "+88-02-57314612",
    "web": null,
    "address": "Khan Market (3rd Floor), Room # 138/95, Chawk Mughaltuli, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Mas Kelchem Plastic Products",
    "category": "Plastics",
    "email": null,
    "phone_mobile": "+88 01772921832",
    "web": null,
    "address": "63/13, Water Works Road, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "M/s. Maria Plastic",
    "category": "Plastics",
    "email": "msmariaplastic@gmail.com",
    "phone_mobile": "01715511555, 01866676767",
    "web": null,
    "address": "47, Morhum Taleb Ali Mator Road Kamrangirchar, Dhaka-1211."
  },
  {
    "company_name": "Nawmil Plastic Ind.",
    "category": "Plastics",
    "email": "nawmiplasticindustry@gmail.com",
    "phone_mobile": "+88 01711367045",
    "web": null,
    "address": "1 Hazi Chan Super Market, Jashim Uddin Road, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Rangdhanu Plastic Industries",
    "category": "Plastics",
    "email": "rangdhanuplastcind@gmail.com",
    "phone_mobile": "01711532771, 01831856535",
    "web": "www.southasia.com.bd",
    "address": "47, Horonath Ghosh Road, Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Bengal Plastics Ltd.",
    "category": "Plastics",
    "email": "info@bengal.com.bd",
    "phone_mobile": "+88-02-22288248-49",
    "web": "www.bengal.com.bd",
    "address": "Bengal House, 75 Gulshan Avenue Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "N H Plastic Industries",
    "category": "Plastics",
    "email": "nhplastcind@gmail.com",
    "phone_mobile": "+88 01765999199",
    "web": null,
    "address": "Plot #13-15, Road #1, Block # K Rupnagar I/A, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Rifat Plastic",
    "category": "Plastics",
    "email": "rifatplastic@gmail.com",
    "phone_mobile": "01711352774, 01611352774",
    "web": "www.rifatplastic.com",
    "address": "44/2, Noor Mahal Lake Circus 2nd Floor, Dhaka, Bangladesh"
  },
  {
    "company_name": "BP Plastic (Bikrampur Plastic)",
    "category": "Plastics",
    "email": "bpplasticbd@gmail.com",
    "phone_mobile": "01705476001, 01705476003",
    "web": "www.bpplastic.com.bd",
    "address": "12, Ray Ishwar Chandra Shill Bahadur Street, Nolgola, Mitford Road, Dhaka."
  },
  {
    "company_name": "ACI Premio Plastics",
    "category": "Plastics",
    "email": "info@acipremioplastics.com",
    "phone_mobile": "+8809606666674",
    "web": "www.acipremioplastics.com",
    "address": "245, Tejgaon I/A, Dhaka-1208."
  },
  {
    "company_name": "Esha Plastic Products",
    "category": "Plastics",
    "email": "eshaplastic.bd@gmail.com",
    "phone_mobile": "01799442200, 017994421",
    "web": "www.eshaplastic.com",
    "address": "Dada Samoby Tower (2nd Floor) 48/1, Nalgola, Mitford Road, Dhaka."
  },
  {
    "company_name": "N.K. Plastic Industries",
    "category": "Plastics",
    "email": "rmotirurahman61@gmail.com",
    "phone_mobile": "01761068667, 01750453338, 01798621192",
    "web": null,
    "address": "Neckrosebagh, Godabagh Sonar Bangla R/A, Block # A Keraniganj, Dhaka, Bangladesh"
  },
  {
    "company_name": "Royal Pet Industries",
    "category": "Plastics/PET",
    "email": "royalpett4748@yahoo.com",
    "phone_mobile": "01718299358, 01687180653",
    "web": null,
    "address": "House # 48 (2nd Floor), East Islambagh, Lalbagh, Dhaka-1211."
  },
  {
    "company_name": "SA Plastic Industries",
    "category": "Plastics",
    "email": "saplastic.ind@gmail.com",
    "phone_mobile": "+88 01720919728",
    "web": "www.saplasticbd.com",
    "address": "47/2, Water Works Road, Rahmatgonj Chawkbazar, Dhaka-1211."
  },
  {
    "company_name": "Sugandhi Plastics Ltd. / Ajit Plastics Ltd.",
    "category": "Plastics",
    "email": "info@akij.plastics.com",
    "phone_mobile": "09613116609",
    "web": "www.akijplastics.com",
    "address": "Akij House, 198 Bir Uttam, Mir Shawkatar Sarak (Gulshan Link Road), Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Sufi Plastic Ltd.",
    "category": "Plastics",
    "email": "info.epl@esquireredb.com",
    "phone_mobile": "+88 01935666000",
    "web": "www.esquirerplasticsltd.com",
    "address": "Head Office: Esquire Tower, 21, Shaheed Tajuddin Ahmed Sarani, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Premier Plastic",
    "category": "Plastics",
    "email": "01731183327",
    "phone_mobile": "01711186667",
    "web": "www.prestoplastics.com",
    "address": "41/B, Hoseni Dalan Road, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "South Asia Plastic Industries",
    "category": "Plastics",
    "email": "info@southasia.com.bd",
    "phone_mobile": "01711253277, 01831856535",
    "web": "www.southasia.com.bd",
    "address": "47, Horonath Ghosh Road Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Anwar Plastic Products",
    "category": "Plastics",
    "email": "anwarplasticbd@gmail.com",
    "phone_mobile": "01841184918",
    "web": null,
    "address": "41/3 No. East Islambag, 1st Floor Chawkbazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Jannatul Plastic Products",
    "category": "Plastics",
    "email": "01931313110",
    "phone_mobile": "01777777710",
    "web": null,
    "address": "1/1, Madbar Bazar, Tolar Ghat Kamrangirchar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Krm Plastic Products",
    "category": "Plastics",
    "email": "krmplasticproducts@gmail.com",
    "phone_mobile": "01916575351, 01838982017",
    "web": null,
    "address": "20/1, Chotokatara, Chawkbazar Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Khatoon Plastic Industries Ltd.",
    "category": "Plastics",
    "email": "info@kplplastics.com",
    "phone_mobile": "+88-02-223352381-82",
    "web": "www.kplplastics.com",
    "address": "City Centre (Level-16), 90/1 Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "Lira Group",
    "category": "Plastics/Group",
    "email": "info@lirabd.com",
    "phone_mobile": "+88 01841235599",
    "web": "www.lirabd.com",
    "address": "1st Floor, House # 9, Road # 53 Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Macca Plastic",
    "category": "Plastics",
    "email": "mahbubrahmanbd17@gmail.com",
    "phone_mobile": "01817588190, 01720343892",
    "web": null,
    "address": "69/7 Water Works Road, Posta Chawkbazar, Dhaka-1211."
  },
  {
    "company_name": "Madina Plastic Industries",
    "category": "Plastics",
    "email": "madinamohsin@gmail.com",
    "phone_mobile": "+88 01671009002",
    "web": "www.madinaplasticbd.com",
    "address": "85, Aga Sadek Road (Sat Rowza Pull) Dhaka-1100 Bangladesh"
  },
  {
    "company_name": "M/S. Raza Plastic Factory",
    "category": "Plastics",
    "email": null,
    "phone_mobile": "01720483649, 01970483649",
    "web": null,
    "address": "530, Kamrangirchar, Kolar Gat Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "N. Hossain Plastic Industries",
    "category": "Plastics",
    "email": "nhpiltd@gmail.com",
    "phone_mobile": "01977537384, 01782654661",
    "web": "www.nhpi.com.bd",
    "address": "147/148, Shop # 24-25, Under Ground, Bismillha Tower, Midford Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "National Polymer Industries Ltd.",
    "category": "Polymer",
    "email": "info@nationalpolymer.net",
    "phone_mobile": "+88-02-58812926, 09610100001, 01886766666, 01971644758, 01970689065",
    "web": "www.nationalpolymer.net",
    "address": "Corporate Office: NPOLY House, GA-99/3, Pragati Shoroni, Middle Badda, Dhaka-1212."
  },
  {
    "company_name": "New Raja Plastic Industries",
    "category": "Plastics",
    "email": "rifatmukul19@gmail.com",
    "phone_mobile": "+88 01715024974",
    "web": null,
    "address": "1/1, Nolgola, Mitford, Chawkbazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Partex Plastics Ltd.",
    "category": "Plastics",
    "email": "nahid@partex.net",
    "phone_mobile": "+88-02-222262888, 01766667797, 01926680050",
    "web": "www.partexplastics.com",
    "address": "74, Bir Uttam A.K. Khandaker Sarak Mohakhali C/A, Dhaka-1212."
  },
  {
    "company_name": "Ranu Plastic Industries",
    "category": "Plastics",
    "email": "ranuplastic@gmail.com",
    "phone_mobile": "01942356687, 01728636837",
    "web": null,
    "address": "27, Nanda Kumar Datta Road (1st Floor), Churihatta, Chawk Bazar Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "RFL Plastics Ltd.",
    "category": "Plastics",
    "email": "crd@prangroup.com",
    "phone_mobile": "0800-7777777",
    "web": "www.rflplastics.com",
    "address": "105 Middle Badda, Dhaka-1212."
  },
  {
    "company_name": "Sharif Plastic Products",
    "category": "Plastics",
    "email": "spsharifplastic@gmail.com",
    "phone_mobile": "01717312312, 01974833178",
    "web": null,
    "address": "23, Gouro Sundar Roy Lane, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Taj Plastic Industries",
    "category": "Plastics",
    "email": "tajplas@gmail.com",
    "phone_mobile": "+88-02-57310570, 01958431791, 01672088947",
    "web": null,
    "address": "161, Mitford Road, Dhaka-1100."
  },
  {
    "company_name": "N. Mohammad Plastic Industries Ltd.",
    "category": "Plastics",
    "email": "mark@nmohammadgroup.com",
    "phone_mobile": "01713032222, 01322905454",
    "web": "www.nmohammadgroup.com",
    "address": "224/CDA Avenue, Muradpur Chattogram-4212, Bangladesh"
  },
  {
    "company_name": "Advance Technology & Training Center",
    "category": "Technology/Training",
    "email": "pjjush045@gmail.com",
    "phone_mobile": "+88 01926422104",
    "web": null,
    "address": "21/2, Basu Lane, Dayagonj, Dhaka."
  },
  {
    "company_name": "APC Engineering",
    "category": "Engineering",
    "email": "apcengineering11@gmail.com",
    "phone_mobile": "+88 01711929432",
    "web": "www.apcengbd.com",
    "address": "Central Jamey Mosjid & Madrasha, Suite # 55, Road # 06, Khafrul, Mirpur-13, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Arialbil Technology",
    "category": "Technology",
    "email": "arialbiltec@gmail.com",
    "phone_mobile": "01912097699, 01740944003",
    "web": "www.arialbil.com",
    "address": "House # 4, Avenue # 3, Block # C, Section-1, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Asha Trade International",
    "category": "Trading",
    "email": "asha.tradeinternational@gmail.com",
    "phone_mobile": "01904455444, 01904455246",
    "web": "www.atti.com.bd",
    "address": "15/1-A Joynag Road, Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Faith Industrial Solution",
    "category": "Industrial Solutions",
    "email": "faithindustrialsolution@gmail.com",
    "phone_mobile": "01763989812, 01969631990-91",
    "web": null,
    "address": "99, Horonath Gosh Road, Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "IVY Machinery Limited",
    "category": "Machinery",
    "email": "info.ivymachinery@gmail.com",
    "phone_mobile": "01782542628, 01890333315",
    "web": "www.ivymachinery.com",
    "address": "House # 08, Road # 7/C, Sector # 03 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "K & N International",
    "category": "Trading/International",
    "email": "01976111777",
    "phone_mobile": "01755681658, 01715967787",
    "web": null,
    "address": "87, Paltan Tower, Suite # 807 (8th Floor), Purana Paltan Lane, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "N.I. Plastic & Accessories",
    "category": "Plastics/Accessories",
    "email": "ni.plasticbd@gmail.com",
    "phone_mobile": "01711377912, 01711009856",
    "web": null,
    "address": "153/1-A, Water Works Road, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "One Stop Machineries",
    "category": "Machinery",
    "email": "1stopbp@gmail.com",
    "phone_mobile": "+88 01705476029-31",
    "web": "www.onestopmachineries.com",
    "address": "58 No. Ashrafabad Main Road, Kamrangir Char, Lohar Bridge Dhal, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Revision Plastech (BD)",
    "category": "Plastics Technology",
    "email": "revisionplastech@gmail.com",
    "phone_mobile": "01711929432, 01716880031",
    "web": null,
    "address": "Central Jamey Mosque Darul Ulum Madrasa Complex (1st Floor), Suite # 55, Block # C, Road # 6, Section-13, Kafrul, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Saitoon Industrial Solution",
    "category": "Industrial Solutions",
    "email": "rashid0380@hotmail.com",
    "phone_mobile": "01911915018, 01718611440",
    "web": null,
    "address": "93, Horonath Gosh Road, Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Shaker International",
    "category": "Trading/International",
    "email": "wonderplas77@gmail.com",
    "phone_mobile": "01715058840, 01552644775",
    "web": null,
    "address": "18/1, Nanda Kumar Dutta Road, Churihatta, Chawk Bazar, Dhaka-1211 Bangladesh"
  },
  {
    "company_name": "South Asia Trading",
    "category": "Trading",
    "email": "info@southasia.com.bd",
    "phone_mobile": "01711532771, 01831856535",
    "web": "www.southasia.com.bd",
    "address": "47, Horonath Ghosh Road Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Techno Plast Spares",
    "category": "Plastic Machinery/Spares",
    "email": "princetps4@gmail.com",
    "phone_mobile": "01948 885555, 01948882222",
    "web": "www.technopc.net",
    "address": "11/1, Joynag Road, Bakshibazar Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Walid Industrial Solution & Engineering",
    "category": "Industrial Solutions/Engineering",
    "email": "info.wisebd@gmail.com",
    "phone_mobile": "01717273356, 01842692018",
    "web": "www.wise-bd.com",
    "address": "House # 17, Avenue # 2, Block # D, Section # 1, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Confidence Polymer Ltd.",
    "category": "Polymer",
    "email": "sales.confidence@pimitek.com.bd",
    "phone_mobile": "09612300800, 09612300899, 01916747617, 01810154448",
    "web": "www.confidencepolymer.com",
    "address": "Star Garden, House # SE (C) 2B, Level # 02, Road # 138, Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Dresdner Polymer & Additives Corp.",
    "category": "Polymer/Additives",
    "email": "dresdner.polymerbiz@gmail.com",
    "phone_mobile": "01972233347, 0193566687",
    "web": null,
    "address": "House # 232, Road # 3 (4th Floor) Baridhara DOHS, Gulshan, Dhaka."
  },
  {
    "company_name": "IRMS & Co.",
    "category": "Polymer/Raw Materials",
    "email": "info@irmsbd.com",
    "phone_mobile": "+88-02-48951087, 01708130194, 01711147019",
    "web": "www.irmsbd.com",
    "address": "S.K. Valley, House # 390, Block # B Shahid Baki Road, Flat # 11C, Khilgaon, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Massons Polymer Corporation",
    "category": "Polymer",
    "email": "massonsbd@gmail.com",
    "phone_mobile": "+88-02-57318797, 57318793, 57316242",
    "web": "www.massonsgroupbd.com",
    "address": "Massons Building, 2/A Abul Hasnat Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Polymix BD Ltd.",
    "category": "Polymer",
    "email": "mahbub@polymixbd.com, mahbub.polymix@gmail.com",
    "phone_mobile": "01914626000, 01711060199",
    "web": "www.polymixbd.com",
    "address": "House # 488/A, Road # 6, Avenue # 7 Mirpur DOHS, Dhaka-1216."
  },
  {
    "company_name": "Shayed International",
    "category": "Trading/International",
    "email": "shahedintl@gmail.com",
    "phone_mobile": "+88 01711545180",
    "web": null,
    "address": "67, Nanda Kumar Datta Road, Churihatta, Chawkbazar, Dhaka-1211."
  },
  {
    "company_name": "Top Polymers",
    "category": "Polymers",
    "email": "info@toppolymersbd.com",
    "phone_mobile": "01829389880, 01855312385, 01735245275",
    "web": "www.toppolymersbd.com",
    "address": "Rupayan P & F Sq., Plot # 62/5/E, 6th Flr., North Kalshi, Mirpur, Dhaka."
  },
  {
    "company_name": "Ahmed Wood Crafts Pvt. Ltd.",
    "category": "Plywood/Wood",
    "email": "ahmedply_07i@yahoo.com",
    "phone_mobile": "01711074846, 01705412938",
    "web": "www.ahmedply.com",
    "address": "Heraldic Heights, Flat # B-8, Level # 8 Plot # 2/2, Mirpur Road, Block # A Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Woodtech Industries (Pvt.) Ltd.",
    "category": "Plywood/Wood",
    "email": "info@woodtechipl.com",
    "phone_mobile": "+88 01874090420",
    "web": "www.woodtechipl.com",
    "address": "Dhaka Office: Dhaka Trade Centre Suite # L (11th Floor), 99, Kazi Nazrul Islam Avenue, Kawranbazar, Dhaka-1215, Bangladesh; Head Office: 06, Old Jassore Road (2nd Floor), Khulna-9100, Bangladesh"
  },
  {
    "company_name": "Al-Amin Plywood Industries Ltd.",
    "category": "Plywood",
    "email": "alaminplywood011@gmail.com",
    "phone_mobile": "+88 01755604400",
    "web": "www.alaminplywood.com",
    "address": "Head Office: Al-Amin Tower, 3/1, Probal Housing Ring Road, Adabor, Mohammadpur Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Mohuber Rahman Particle Mills (Pvt.) Ltd.",
    "category": "Particle Board",
    "email": "mrp2016maya@gmail.com",
    "phone_mobile": "01708451500, 01708451512, 01713176921",
    "web": null,
    "address": "Dhaka Office: 37/1, North Begunbari, Tejgaon, Dhaka-1208, Bangladesh; Factory Office: Haragach Road, Kachna (New Sahebgonj), Rangpur-5400, Bangladesh"
  },
  {
    "company_name": "M & B Plywood Industries",
    "category": "Plywood",
    "email": "mb.plywood1@gmail.com",
    "phone_mobile": "+88 01730884216",
    "web": null,
    "address": "Kushtia Rajbari Road, Kalisankarpur Kushtia-7000, Bangladesh"
  },
  {
    "company_name": "Modern Plywood & Wood Processing Company Ltd.",
    "category": "Plywood/Wood Processing",
    "email": "modernplywoodcompany@gmail.com",
    "phone_mobile": "+88 01937771777",
    "web": null,
    "address": "Bivag (4 Mile), Baruipara, Mirpur Kushtia-7000, Bangladesh"
  },
  {
    "company_name": "MRS Industries Ltd.",
    "category": "Plywood/Industrial",
    "email": "commercial@mrsbd.com",
    "phone_mobile": "+88-02-477783173",
    "web": "www.mrsbd.com",
    "address": "Head Office: BSCIC Industrial Estate Kushtia-7000, Bangladesh"
  },
  {
    "company_name": "Woodland Plywood & Particle Board Mills Ltd.",
    "category": "Plywood/Particle Board",
    "email": "woodlandparticle@gmail.com",
    "phone_mobile": "01727055055, 01709654493",
    "web": null,
    "address": "Dadapur Road, Jugia, Kushtia-7000."
  },
  {
    "company_name": "Royal Ply & Particle Board Mills Ltd.",
    "category": "Plywood/Particle Board",
    "email": "contact@royalbdgroup.com",
    "phone_mobile": "+88 01777409140",
    "web": "www.royalbdgroup.com",
    "address": "Lakshya Shimulia, Rupganj Narayanganj, Bangladesh"
  },
  {
    "company_name": "A-One Polymer Ltd.",
    "category": "Polymer",
    "email": "mail@anwargroup.net",
    "phone_mobile": "+88-02-223384037",
    "web": "www.anwargroup.com",
    "address": "Baitul Hossain Building (12th Floor) 27, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Deshbandhu Polymer Ltd.",
    "category": "Polymer",
    "email": "cs@deshbandhugroup.com.bd",
    "phone_mobile": "+88-02-41081491",
    "web": "www.deshbandhupolymer.com",
    "address": "Mostafa Center, House # 59, Road # 27, Block # K, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Dynamic Polymer Industries Ltd.",
    "category": "Polymer",
    "email": "info.dplbd@gmail.com",
    "phone_mobile": "01958062905, 01958062904",
    "web": "www.dplbd.com",
    "address": "House # 11, Flat # 04, Road # 6/A Sector # 05, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Faisal Polymer Industries Ltd.",
    "category": "Polymer",
    "email": "parseeft@yahoo.com, parseeft@hotmail.com",
    "phone_mobile": "+88-02-223386830, 41052462, +88 01611537178",
    "web": "www.faisalpolymerbd.com",
    "address": "Khaleda Tower (5th Floor), 14 Hazi Osman Goni Road (Alu Bazar), Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Madina Polymer Industries Ltd.",
    "category": "Polymer",
    "email": "info.polymer@madina.co",
    "phone_mobile": "+88-02-223363706, 223363714, +88 01956666000",
    "web": "www.madinapolymer.com",
    "address": "Madina Square, 64/A, Shahid Buddhijibi Munir Chowdhury Sara (Central Road), Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Perfect Polymer Industries Ltd.",
    "category": "Polymer",
    "email": "info@ppilbd.com",
    "phone_mobile": "+88-02-222229060, 01712350037, 01768152528",
    "web": "www.ppilbd.com",
    "address": "B-2 (2nd Floor), Square Trade Center 76, Shantinagar, Dhaka-1217."
  },
  {
    "company_name": "Smart Polymer Industries Ltd.",
    "category": "Polymer",
    "email": "info@smartpolymerbd.com",
    "phone_mobile": "+88-02-41380571-76",
    "web": "www.smartpolymerbd.com",
    "address": "Corporate Head Office: 1206/A, Nasirabad I/A, Baizid Thana Road, Baizid, Chattogram-4210."
  },
  {
    "company_name": "A. B Woven Bag Inds. Ltd.",
    "category": "Woven Bags",
    "email": "abgroupbd@yahoo.com",
    "phone_mobile": "01711821602, 01819189583",
    "web": null,
    "address": "79, Begum Bazar (4th Floor) Chawkbazar, Dhaka-1211."
  },
  {
    "company_name": "Ascent Sun Packaging Ltd.",
    "category": "Packaging/Woven Bags",
    "email": "sales@asplbd.com, mamun@asplbd.com",
    "phone_mobile": "+88-02-55098139, +88 01880193100",
    "web": "www.asplbd.com",
    "address": "House # 34 (2nd Floor), Road # 11 Nikunja-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Bengal Poly & Paper Sack Ltd.",
    "category": "Poly/Paper Bags",
    "email": "jislam2@bengal.com.bd",
    "phone_mobile": "01817140817, 01998005502",
    "web": "www.bppsll.com",
    "address": "Bengal House, 75 Gulshan Avenue Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Biswas PP Woven Bags",
    "category": "Woven Bags",
    "email": "info@biswasgroup.com",
    "phone_mobile": "01709634030, 01711851477",
    "web": "www.biswasgroup.com",
    "address": "Level-13, NB Tower, 40/7 Madani Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Jayson Packwel Ltd.",
    "category": "Packaging/Woven Bags",
    "email": "info@jaysonbd.com",
    "phone_mobile": "+88-02-222290801, 222290802, 09639777700, 09639777701",
    "web": "www.jaysongroupbd.com",
    "address": "231 A&B Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Color Woven Bag Industries Ltd.",
    "category": "Woven Bags",
    "email": "marketing@bagsandpacks.net",
    "phone_mobile": "+88 01713286023",
    "web": "www.colorwoven.com",
    "address": "Head Office: Firoz Tower, Level-12 152/3B, Bir Uttam Kazi Nuruzzaman Saraki, Green Road, Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Khan Brothers PP Woven Bag Ltd.",
    "category": "Woven Bags",
    "email": "contact@kbgbd.com",
    "phone_mobile": "+88 01710123456",
    "web": "www.kbgbd.com",
    "address": "KBG Tower, 15, Malibagh Chowdhurypara, DIT Road, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Rafi Woven Bags Industries Ltd.",
    "category": "Woven Bags",
    "email": "rafibag.sales@gmail.com",
    "phone_mobile": "+88-02-48950882-83, 09614500051, 09614500053, 01755632002, 01755632005",
    "web": "www.aleya-bd.com",
    "address": "Corporate Office: Momotaz Plaza (3rd Floor), Plot # 7, Road # 7/D, Sector # 9, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Step Net Solution (Pvt.) Ltd.",
    "category": "Packaging/Solutions",
    "email": "info@snsbag.com",
    "phone_mobile": "+88-02-58616359, +88 01944447170",
    "web": "www.snscncg.com",
    "address": "29, Bir Uttam C.R Datta Road, Old 16 Paribagh (3rd Floor), Sonargaon Road, Hatirpolo, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Al Faruque Bags Ltd.",
    "category": "Bags",
    "email": "info@al-faruquegroup.com",
    "phone_mobile": "+88 01926998897-8",
    "web": "www.al-faruquegroup.com",
    "address": "Head Office & Factory: Santahar Road, Shikor, Narhatto Kahaloo, Bogura-5870, Bangladesh"
  },
  {
    "company_name": "Royal PP Bags Ltd.",
    "category": "PP Bags",
    "email": "royalbags@gmail.com",
    "phone_mobile": "+88 01713124334",
    "web": null,
    "address": "Kabir Manzil, Sheikh Mujib Road Agrabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "S. Alam Bag Mfg. Mills Ltd.",
    "category": "Bags",
    "email": "sag@s.alamgroupbd.com",
    "phone_mobile": "+88-02-333369726, 333367195, 333369283",
    "web": "www.aslamgroupbd.com",
    "address": "S. Alam Bhaban, 2119, Asadgonj Chattogram, Bangladesh"
  },
  {
    "company_name": "Yasir Polymer Ind. Ltd.",
    "category": "Polymer/Bags",
    "email": "yasripolymer@gmail.com",
    "phone_mobile": "01746457793, 01815880478",
    "web": null,
    "address": "106, Khatunganj, Chattogram, Bangladesh"
  },
  {
    "company_name": "Hasinur Woven & Packaging Ind.",
    "category": "Woven Bags/Packaging",
    "email": "hasinur.agro.pack@gmail.com",
    "phone_mobile": "01714332433, 01855922001, 01712625241",
    "web": null,
    "address": "Mata Sagar Mor, Dinajpur Sadar Dinajpur, Bangladesh"
  },
  {
    "company_name": "Mirza Woven Bag (Pvt.) Ltd.",
    "category": "Woven Bags",
    "email": "mirza_dnj@yahoo.com",
    "phone_mobile": "01713219392, 01716721662",
    "web": null,
    "address": "Noor Alam Exim Ind. Ltd., Bahadur Bazar, Dinajpur, Bangladesh"
  },
  {
    "company_name": "R.B.P Woven Industry",
    "category": "Woven Bags",
    "email": "patwarybusinesshouse@gmail.com",
    "phone_mobile": "01731210082, 01719666896",
    "web": null,
    "address": "BSCIC I/A, Pulhat, Dinajpur."
  },
  {
    "company_name": "Dada Bag Industries Ltd.",
    "category": "Bags",
    "email": null,
    "phone_mobile": "+88 01711564992",
    "web": null,
    "address": "Abder, Telihati, Joina Bazar Sreepur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Nilima Bag Mills Limited",
    "category": "Bags",
    "email": "nilimabagmills@gmail.com",
    "phone_mobile": "+88 01301255225",
    "web": "www.nilimabag.com",
    "address": "Singair, Manikganj, Bangladesh"
  },
  {
    "company_name": "A. S. M Ind. Ltd.",
    "category": "Industrial",
    "email": "mfilfac09@gmail.com",
    "phone_mobile": "01912367918, 01740846543, 01999027999, 01678441835",
    "web": null,
    "address": "130/1, Biren Bosh Street J. M Trading Centre (2nd Floor) Chawk Mughaltuli, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Ideal Fibre Industries Ltd.",
    "category": "Fibre",
    "email": "info@idealfibrebd.com",
    "phone_mobile": "+88 01711537154",
    "web": "www.idealfibrebd.com",
    "address": "Head Office: 13/3 Chairman Bhaban (1st Floor), Bangabandhu Road, Netaijanj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Abaron Printers",
    "category": "Printing",
    "email": "abaronprinters@hotmail.com",
    "phone_mobile": "01713038524, 01678142132",
    "web": null,
    "address": "167/7, Fakirapool, Dhaka-1000."
  },
  {
    "company_name": "Abir Printers",
    "category": "Printing",
    "email": "abir_printers@yahoo.com",
    "phone_mobile": "+88 01711522420",
    "web": null,
    "address": "27/11/1, Topkhana Road, Dhaka-1000 Bangladesh"
  },
  {
    "company_name": "Adarsha Printers",
    "category": "Printing",
    "email": "adarshaprinter@gmail.com",
    "phone_mobile": "+88 01711626785",
    "web": null,
    "address": "9K, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "AKA Printers",
    "category": "Printing",
    "email": "info@akaprinters.com",
    "phone_mobile": "01819244247, 01720487454",
    "web": "www.akaprinters.com",
    "address": "62, Fakirapool (Ground Floor), Pepsi Lane, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "Akhkharika Mudran",
    "category": "Printing",
    "email": null,
    "phone_mobile": "+88 01711542557",
    "web": null,
    "address": "177/1, Arambagh 1st Lane Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Al Faisal Printing & Packaging",
    "category": "Printing/Packaging",
    "email": null,
    "phone_mobile": "+88 01817619077",
    "web": null,
    "address": "219/2, Fakirapool, Dhaka-1000."
  },
  {
    "company_name": "Alvi Printers",
    "category": "Printing",
    "email": "alviprintersbd@yahoo.com",
    "phone_mobile": "01811424210, 01726464031",
    "web": null,
    "address": "217/A, Fakirapool (1st lane), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Aneesha Printing Press",
    "category": "Printing",
    "email": "info@aneeshagroup.com, aneeshapress@gmail.com",
    "phone_mobile": "01678032071-5, 01305217576-90",
    "web": "www.aneeshagroup.com",
    "address": "277/5, Dr. Kudrat-E-Khuda Road (Katabon Dhal), New Market, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Basmuti Printing Press",
    "category": "Printing",
    "email": "bashumati.printing@gmail.com",
    "phone_mobile": "01713060395, 01919060395",
    "web": null,
    "address": "113, 114, Naya Paltan, Dhaka-1000."
  },
  {
    "company_name": "Bristi Printing Press & Publications",
    "category": "Printing/Publications",
    "email": null,
    "phone_mobile": "+88 01715801224",
    "web": null,
    "address": "34, R M Das Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Capital Printing Press",
    "category": "Printing",
    "email": null,
    "phone_mobile": "+88 01711008243",
    "web": null,
    "address": "59/5, Islampur Road, Babubazar Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "City Art Press Ltd.",
    "category": "Printing",
    "email": "tofayelkhan@hotmail.com",
    "phone_mobile": "01711526692, 01611526692",
    "web": null,
    "address": "47, Siddheshwari Circular Road Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Color Yard",
    "category": "Printing/Color",
    "email": null,
    "phone_mobile": "01711596147, 01713044257",
    "web": null,
    "address": "85/1/B, Purana Paltan Line Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Creative Color Printers",
    "category": "Printing",
    "email": "creativecp09@gmail.com",
    "phone_mobile": "+88 01718116893",
    "web": null,
    "address": "143/3, Arambagh (Old Post Office Lane), Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Dhaka Printing Press",
    "category": "Printing",
    "email": "mail@dhakaprintingpress.com, dhakaprintingpress@hotmail.com",
    "phone_mobile": "+88 01300961596",
    "web": "www.dhakaprintingpress.com",
    "address": "85, Purana Paltan (Paltan Lane) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Dorpon Publication & Color Printing",
    "category": "Printing/Publications",
    "email": "info@dorponcolorprint.com",
    "phone_mobile": "+88 01984584434",
    "web": "www.dorponcolorprint.com",
    "address": "149/5, Shah Alam Lane, Arambagh Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ekota Offset Press",
    "category": "Printing/Offset",
    "email": null,
    "phone_mobile": "+88 01713030131",
    "web": null,
    "address": "119, Fakirapool (Ground Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ekota Printers & Packaging",
    "category": "Printing/Packaging",
    "email": "zinnah70@gmail.com",
    "phone_mobile": "+88 01713037387",
    "web": null,
    "address": "168, Fakirapool (Ground Floor of Hotel Abdul Aziz), Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ekush Printers",
    "category": "Printing",
    "email": "ekushprinters@gmail.com",
    "phone_mobile": "+88 01711856571",
    "web": null,
    "address": "87, Purana Paltan Line, Paltan Tower Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Emmy Printing Works",
    "category": "Printing",
    "email": null,
    "phone_mobile": "+88 01911363060",
    "web": null,
    "address": "49, Haranath Ghosh Road, Lalbagh Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Fahad Printers",
    "category": "Printing",
    "email": "fahadprinters007@yahoo.com",
    "phone_mobile": "+88 01715021541",
    "web": null,
    "address": "104, Arambagh, Motijheel Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fair Mudran",
    "category": "Printing",
    "email": "fairmudron14@gmail.com",
    "phone_mobile": "+88 01918404487",
    "web": null,
    "address": "55, Fakirapool, Kamor Goli Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Prottasha Offset Printers",
    "category": "Printing/Offset",
    "email": "prottasha.offset.printers@gmail.com",
    "phone_mobile": "01711787349, 01711002134",
    "web": null,
    "address": "100, Fakirapool (Water Tank Lane) Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Batighar Machinery",
    "category": "Pump Machinery",
    "email": "batighar007@gmail.com, batigharmachinery@gmail.com",
    "phone_mobile": "+88 01714447172, +88 01799449452, +88 01912443837, +88 01971622041",
    "web": "www.batigharmachinery.com",
    "address": "96/97/5, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Gazi International (Gazi Pumps & Motors)",
    "category": "Pumps/Motors",
    "email": "info@gazipumps.com",
    "phone_mobile": "+88 1929977801, +88 01929977802",
    "web": "www.gazipumps.com",
    "address": "3/3 B, Bijoynagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "MEL Group",
    "category": "Pumps/Industrial",
    "email": "info@melbd.com",
    "phone_mobile": "+88-02-226601141, 226601142-3, +88 01714035527",
    "web": "www.melbd.com",
    "address": "Head Office: 223-B, Tejgaon I/A, Tejgaon-Gulshan Link Road, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Milnars Pumps Ltd.",
    "category": "Pumps",
    "email": "info@milnarspumps.com",
    "phone_mobile": "+88 01714095440",
    "web": "www.milnarspumps.com",
    "address": "Head Office: Uttara Bank Bhaban (4th Floor), 90, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Rashid Enterprise",
    "category": "Pumps/Enterprise",
    "email": "info@rashidenterprise.com",
    "phone_mobile": "+88 01741903454",
    "web": "www.rashidenterprise.com",
    "address": "240, Tejgaon I/A, Dhaka-1208.; Sales Outlet: 172, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Shakti Pumps (Bangladesh) Ltd.",
    "category": "Pumps",
    "email": null,
    "phone_mobile": "+88 01763069219",
    "web": null,
    "address": "Unique Trade Centre, 19th Floor 8 Panthapath, Karwanbazar Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Easy Racing",
    "category": "Racking System",
    "email": "easyracingbd@gmail.com",
    "phone_mobile": "01685197167, 01785656414",
    "web": "www.easyrackingbd.com",
    "address": "53, Nawabpur, Dhaka-1100,"
  },
  {
    "company_name": "Ferric Ltd.",
    "category": "Racking/Industrial",
    "email": "ferricltd@gmail.com",
    "phone_mobile": "+88 01322877000",
    "web": "www.ferric.com.bd",
    "address": "Factory & Office: Mirpur Beribadh Road, Haji Kholil Madbor Sarak, 27 Haji Bari, Goran Chotbari, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Grandhill Limited",
    "category": "Racking/Industrial",
    "email": "grandhill.bd@gmail.com, alamgir@grandhillbd.com",
    "phone_mobile": "01713377919, 01713377918",
    "web": "www.grandgroup.org",
    "address": "House # 13, Road # 4, DOHS Banani, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Pedrollo NK Limited",
    "category": "Pumps",
    "email": "info@pnhlodings.com",
    "phone_mobile": "+88 01919155993",
    "web": "www.pedrollo.com.bd",
    "address": "Pedrollo Plaza, 5 Jubilee Road Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "ABS Enterprise",
    "category": "Racking System",
    "email": "dinislam@absrackbd.com",
    "phone_mobile": "01701852126, 01873852126",
    "web": "www.absrackbd.com",
    "address": "28/1, Mission Madani, New Gendaria Road, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "ANH Enterprise",
    "category": "Racking System",
    "email": "info@anhenterprise.com",
    "phone_mobile": "+88 0967777888",
    "web": null,
    "address": "4, Probal Housing, Ring Road Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Mark Asia Limited",
    "category": "Racking System",
    "email": "info@markbd.com",
    "phone_mobile": "+88-02-48315629, 48315578, +88 01976275247",
    "web": "www.markbd.com",
    "address": "351, Dilu Road, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Master Engineering",
    "category": "Racking/Engineering",
    "email": "info@masterengineeringbd.com, masterengineering.bd@gmail.com",
    "phone_mobile": "01717659669, 01711165978",
    "web": "www.masterengineeringbd.com",
    "address": "Head Office: House # 21/8 (2nd Floor), Khilji Road Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Master Racks & Furniture",
    "category": "Racking/Furniture",
    "email": "info@masterracksbd.com",
    "phone_mobile": "01321201444, 01313019160, 01912167545, 01911576633",
    "web": "www.masterracksbd.com",
    "address": "Suite # B-3, House # 26, Alaal Avenue Sector # 06, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "MinMax Rack Industry Ltd.",
    "category": "Racking",
    "email": "info@minmaxbd.net",
    "phone_mobile": "+88-02-55085417-18, 01713001300, 01955576980",
    "web": "www.minmax.com.bd",
    "address": "House # 06, Road # 11, Sector # 12 Utara Model Town, Dhaka-1230."
  },
  {
    "company_name": "UNIRAC",
    "category": "Racking System",
    "email": "uniracbd@gmail.com",
    "phone_mobile": "+88 01819217644, +88 01841554333",
    "web": null,
    "address": "Suite # A4, House # 120, Road # 1, Block # F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Weltech Technology",
    "category": "Racking/Technology",
    "email": "weltech.bd@gmail.com",
    "phone_mobile": "+8809639126368, 017816232 68, 01676724801",
    "web": "www.weltechbdd.com",
    "address": "House # 28 (3rd Floor), Road # 7/C, Sector # 09, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "The Tool Master & Engineering Co.",
    "category": "Tools/Engineering",
    "email": "info@toolmasterbd.com",
    "phone_mobile": "01313019171, 01681703657",
    "web": "www.toolmasterbd.com",
    "address": "B-28, BSCIC Industrial Estate Tongi, Gazipur-1710, Bangladesh"
  },
  {
    "company_name": "bti Brokerage",
    "category": "Real Estate",
    "email": "info@btibrokeragebd.com",
    "phone_mobile": "+880 9613191919",
    "web": "www.btibrokeragebd.com",
    "address": "bti Celebration Point, Plot # 3 & 5 Road # 113/A, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Century 21 Realty (Pvt.) Ltd.",
    "category": "Real Estate",
    "email": "info@century21bd.com",
    "phone_mobile": "+88-02-41081745-46, +88 01711670219, +88 01975244821",
    "web": "www.century21bd.com",
    "address": "House # 14/D, Road # 02, Block # L Banani, Amtoli, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Melody Housing Agency",
    "category": "Real Estate",
    "email": "emkt@melodypropertyagency.com",
    "phone_mobile": "+88 01955443322",
    "web": "www.melodyhousingagency.com",
    "address": "House # 14/A, Road # 02, Block # L Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Realtors BD",
    "category": "Real Estate",
    "email": "ceo@realtorsbd.com",
    "phone_mobile": "+88 01886500249",
    "web": "www.realtorsbd.com",
    "address": "BtI Premier Plaza, Pragati Sarani Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Red Roots Ltd.",
    "category": "Real Estate",
    "email": "info@redroots.com.bd",
    "phone_mobile": "+88 01988000066",
    "web": "www.redroots.com.bd",
    "address": "House # 5 (4th Floor), Road # 6/A Baridhara, Block-J, Pragati Sarani Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sarco Estate Agents",
    "category": "Real Estate",
    "email": "info@sarcobd.com, sarcobd@gmail.com",
    "phone_mobile": "01733222300, 01733222307",
    "web": "www.sarcobd.com",
    "address": "PBL Tower (13th Floor), 17 Gulshan Circle-2, Dhaka 1212, Bangladesh"
  },
  {
    "company_name": "Sharif Properties Service",
    "category": "Real Estate",
    "email": "mail@sharif.com.bd, sharifrent@gmail.com",
    "phone_mobile": "01718444701, 01636333333",
    "web": "www.sharif.com.bd",
    "address": "House # 03, Road # 2/2, Block # L Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "7 One Properties Ltd.",
    "category": "Real Estate",
    "email": "info@7one.group",
    "phone_mobile": "01730051002, 01730051008, 01730051009, 01730051011",
    "web": "www.7one.group",
    "address": "Rahman A J Trade Center, K-1/B (3rd Floor), Jagannathpur, Bashundhara Main Road, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Aakash Developments Ltd.",
    "category": "Real Estate",
    "email": "info@aakashgroupbd.com",
    "phone_mobile": "+88-02-222274330-4, +88 01879336666",
    "web": "www.aakashgroupbd.com",
    "address": "House # 36, Road # 13, Block # D Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Abad Holdings Ltd.",
    "category": "Real Estate",
    "email": "abedholdingsltd@yahoo.com",
    "phone_mobile": "01610229912, 01552306912",
    "web": "www.abedholdingsltd.com",
    "address": "65/2, DR Tower (17th Floor), Gazi Golam Dostgir Sarak, Paltan, Dhaka."
  },
  {
    "company_name": "ABZ Properties Ltd.",
    "category": "Real Estate",
    "email": "info@abzpropertiesltd.com",
    "phone_mobile": "+88 01746437215",
    "web": "www.abzpropertiesltd.com",
    "address": "House # 428, Road # 30, DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Accept Properties Ltd.",
    "category": "Real Estate",
    "email": "acceptproperties@gmail.com",
    "phone_mobile": "+88-02-223390807, +88 01916708759, 01721077307, 01920677818",
    "web": null,
    "address": "55/B, (6th Floor), Noakhali Tower Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Aapon Builders Ltd.",
    "category": "Real Estate/Construction",
    "email": "info@aonpbuildersbd.com",
    "phone_mobile": "+88-02-58811104, 01720318766, 0197107989",
    "web": "www.aonpbuildersbd.com",
    "address": "Corporate Office: Five Beni Rahila Monjil (2nd Floor) Plot # Sha 15/5, Progoti Saroni, Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "ABC Real Estates Ltd.",
    "category": "Real Estate",
    "email": "info@abcgroup.com.bd",
    "phone_mobile": "+88-02-222288808, 222262665, 222264407, 222275291",
    "web": "www.abcreal.com",
    "address": "Corporate Office: ABC House (6th & 7th Floor), 8, Kemal Ataturk Avenue, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Acme Technologies Ltd.",
    "category": "Real Estate/Technology",
    "email": "sales.acme@acmetechltd.com",
    "phone_mobile": "01704118050, 01704118052",
    "web": "www.acmetechltd.com",
    "address": "House # 630, 1st Floor, Road # 09 Mirpur DOHS, Dhaka-1216."
  },
  {
    "company_name": "ACTS Asset Ltd.",
    "category": "Real Estate",
    "email": "mail@actsasset.com",
    "phone_mobile": "01896173123, 01920858532",
    "web": "www.actsasset.com",
    "address": "Plot # 497, Road # 01, Block # D, Bashundhara R/A, Dhaka-1229."
  },
  {
    "company_name": "Advanced Development Technologies Ltd.",
    "category": "Real Estate/Development",
    "email": "info@advanced-bd.com",
    "phone_mobile": "+8809602666719, 09602666720, 09602666721",
    "web": "www.adtlrealestate.com",
    "address": "Head Office: Advanced Center, 176 Gulshan Avenue, Gulshan North, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction Materials",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "Magnolia Properties Limited",
    "category": "Real Estate",
    "email": "info@magnoliaproperties.com.bd",
    "phone_mobile": "01938-438092, 01823-656526",
    "web": "www.magnoliaproperties.com.bd",
    "address": "Kha-170, Main Road, Middle Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "MAH Properties Limited",
    "category": "Real Estate",
    "email": "info@mahpropertiesltd.com, mahpropertiesltd@gmail.com",
    "phone_mobile": "+88 01730-955572-73",
    "web": "www.mahpropertiesltd.com",
    "address": "Rupayan Shopping Square, Suite # 8/B, Plot # 02, Block # G, Bashundhara R/A, Dhaka-1229."
  },
  {
    "company_name": "Makka Property Developer Ltd.",
    "category": "Real Estate",
    "email": "mpdlbd@gmail.com",
    "phone_mobile": "01682012909, 01319411125",
    "web": "www.makka-bd.com",
    "address": "151/1, Monipuripara, Tejgaon, Dhaka"
  },
  {
    "company_name": "Manama Developments Ltd.",
    "category": "Real Estate",
    "email": "info@manamadevelopments.com",
    "phone_mobile": "+88 01920626262",
    "web": "www.manamadevelopments.com",
    "address": "House # 108, Road # 12, Block # E, Level-05, Banani, Dhaka-1213."
  },
  {
    "company_name": "Manha Odita Builders Ltd.",
    "category": "Real Estate",
    "email": "sales@manhaoditabuilders.com.bd",
    "phone_mobile": "+88-02-41051183, +88 01618-814004",
    "web": "www.manhaoditabuilders.com.bd",
    "address": "37/2, Pritom Zaman Tower, Level-3, Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Mars Homes Ltd.",
    "category": "Real Estate",
    "email": "info@marshomes.com.bd, marshomes.info@gmail.com",
    "phone_mobile": "+88 01300343434",
    "web": "www.marshomes.com.bd",
    "address": "House # 14, Road # 32, Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Master Builder Limited",
    "category": "Construction",
    "email": "info@masterbuilderbd.com",
    "phone_mobile": "01777709898, 01777709899",
    "web": "www.masterbuilderbd.com",
    "address": "CB-211/6 Puran Kachukhet Bazar, Dhaka Cantonment, Dhaka-1206."
  },
  {
    "company_name": "Max Building Technologies Limited",
    "category": "Construction",
    "email": "info@maxgroup-bd.com",
    "phone_mobile": "02-55058345-6, 09614999333",
    "web": "www.maxgroup-bd.com",
    "address": "Corporate Office: RAOWA Complex, Level-11, VIP Road, Mohakhali, Dhaka-1206, Bangladesh; Head Office: Baitul Hossain Building, 6th Floor, 27, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Maxwell Homes & Properties Ltd.",
    "category": "Real Estate",
    "email": "info@maxwellbd.com",
    "phone_mobile": "+88-02-222227030, +88 01678112334",
    "web": "www.maxwellbd.com",
    "address": "Rupayan Trade Center (16th Floor), 114, Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Medha Construction & Developers Ltd.",
    "category": "Construction",
    "email": "medha@medhacdl.com",
    "phone_mobile": "01817529270, 01977529270",
    "web": "www.medhacdl.com",
    "address": "22/1, South Mugda, Mugda, Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "Mega Builders Limited",
    "category": "Construction",
    "email": "info@megabuilders.com.bd, megabuildersltd98@gmail.com",
    "phone_mobile": "+88-02-55035567-72, +88 01713397348",
    "web": "www.megabuilders.com.bd",
    "address": "Corporate Office: House # 45 (1st Floor), Road # 27, Block A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Metro Properties Ltd.",
    "category": "Real Estate",
    "email": "zaheed57@gmail.com",
    "phone_mobile": "+88-02-222296060, +88 01711183629",
    "web": "www.metropropertiesbd.com",
    "address": "House # 24, Road # 36, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "MG Properties Ltd.",
    "category": "Real Estate",
    "email": "info@mgpropertieslimited.com",
    "phone_mobile": "+8809610555666, 09612222000",
    "web": "www.mgpropertieslimited.com",
    "address": "Lotus Kamal Tower-One, 16th Floor, 57 Joar Sahara C/A, Nikunja-2, Dhaka."
  },
  {
    "company_name": "MHM Properties Ltd.",
    "category": "Real Estate",
    "email": "info@mhmpropertiesltd.com",
    "phone_mobile": "01730097575, 01788885666, 01761822000, 01761822002",
    "web": "www.mhmpropertiesltd.com",
    "address": "Head Office: 471/1, Main Road, South Paikpara, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Milestone Homes Ltd.",
    "category": "Real Estate",
    "email": "info@milestonehomesltd.com",
    "phone_mobile": "01977-770188, 01951-111000",
    "web": "www.milestonehomesltd.com",
    "address": "Gulfesha Plaza (8th Floor), Suite # 8-N, 8, Shahid Sangbadik Selina Parvin Road, Dhaka-1217."
  },
  {
    "company_name": "Molten Real Estates Ltd.",
    "category": "Real Estate",
    "email": "info@momen-realestatesbd.com",
    "phone_mobile": "+88-02-41086081, 41080682, 41080683, 41080684",
    "web": "www.momen-realestatesbd.com",
    "address": "Corporate Office: Bari Momen's Heights, House # 157, Road # 12, Block # E, Banani, Dhaka-1213."
  },
  {
    "company_name": "Green Mountain BD",
    "category": "Safety & Security",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025090, 01816033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Minna Developers Ltd.",
    "category": "Real Estate",
    "email": "minadevelopers@gmail.com",
    "phone_mobile": "01859-000059, 01999-660000",
    "web": "www.minadevelopers.com",
    "address": "Corporate Office: 7-8, Amena Dream Park, Main Road (9th Floor), Block-A, Rampura-Banasree Project, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Mir Real Estate Ltd.",
    "category": "Real Estate",
    "email": "info@mirrealestate.com",
    "phone_mobile": "+88-02-222289995-9, +88 01936000100",
    "web": "www.mirrealestate.com",
    "address": "Corporate Office: House # B-147, Road # 22, Mohakhali DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Momamad Developers Ltd.",
    "category": "Real Estate",
    "email": "shahnawaz@mohammadi-group.com",
    "phone_mobile": "+88 01730019750",
    "web": "www.mdl.mohammadi-group.com",
    "address": "2, Mohammadi Main Road, Mohammadi Housing Ltd., Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Mohammadi Homes Ltd.",
    "category": "Real Estate",
    "email": "sales@mohammadihomes.com",
    "phone_mobile": "+88-02-223389428-29",
    "web": "www.mohammadihomes.com",
    "address": "93, Motijheel C/A, 9th Floor, Dhaka."
  },
  {
    "company_name": "Momen Real Estates Ltd.",
    "category": "Real Estate",
    "email": "info@momen-realestatesbd.com",
    "phone_mobile": "+88-02-41086081, 41080682, 41080683, 41080684",
    "web": "www.momen-realestatesbd.com",
    "address": "Corporate Office: Bari Momen's Heights, House # 157, Road # 12, Block # E, Banani, Dhaka-1213."
  },
  {
    "company_name": "Rynco Engineering",
    "category": "Engineering & Safety",
    "email": "info@ryncoengineering.com.bd",
    "phone_mobile": "+88 01771 74215, +88 01743 380220",
    "web": "www.ryncoengineering.com.bd",
    "address": "House-20, Level-3, Road-12, Nikunja-2, Khilket, Dhaka-1229"
  },
  {
    "company_name": "Moss Real Estate Ltd.",
    "category": "Real Estate",
    "email": "mossgroupbd@gmail.com",
    "phone_mobile": "+88-02-223381257, 01795-788808, 01795-788814, 01841-733661",
    "web": "www.mossestateglobal.com",
    "address": "56/1, Baitul View Tower (7th Floor), Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Mir dil Real Estate Ltd.",
    "category": "Real Estate",
    "email": "info@mirdulrealestate.com",
    "phone_mobile": "+88 01894-442999",
    "web": "www.mirdulrealestate.com",
    "address": "Flat # 4, House # 198 (4th Floor), Road # 01, Mohakhali DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Nakshi Homes Ltd.",
    "category": "Real Estate",
    "email": "info@nakshihomes.com",
    "phone_mobile": "01716977292, 01970625744",
    "web": "www.nakshihomes.com",
    "address": "House # 42/A (4th Floor), Road # 9/A, Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Natural Real Estate Ltd.",
    "category": "Real Estate",
    "email": "nrelbd1@gmail.com",
    "phone_mobile": "+88 01978886601",
    "web": null,
    "address": "Ellal Chamber (8th Floor), 11, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Navana Real Estate Ltd.",
    "category": "Real Estate",
    "email": "info@navana-realestate.com",
    "phone_mobile": "+88-02-58815305, 01730150381, 01730150390",
    "web": "www.navana-realestate.com",
    "address": "House # 3/A, Road # 90, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Nest Landmark Ltd.",
    "category": "Real Estate",
    "email": "info@nestlandmark.com",
    "phone_mobile": "01324416843, 01324416851-52",
    "web": "www.nestlandmark.com",
    "address": "House # 06, Road # 2D, Block # J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "New Dhaka Alliance Ltd.",
    "category": "Real Estate",
    "email": "info@newdhakacity.com.bd",
    "phone_mobile": "+88-02-58810785, 58810053, 01958158581, 01958158681",
    "web": "www.newdhakacity.com.bd",
    "address": "Corporate Office: House # 476, Road # 32, 1st Floor, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "New Vision Landmark Limited",
    "category": "Real Estate",
    "email": "info@newvision.com.bd",
    "phone_mobile": "+88-02-22221593",
    "web": "www.newvision.com.bd",
    "address": "Corporate Office: New Vision Twin Terrace, 1st Floor, 68 Pioneer Road, Kakrail, Segunbagicha, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Nipobon Developers Ltd.",
    "category": "Real Estate",
    "email": "info@nipobon.com.bd",
    "phone_mobile": "+88 01303080003",
    "web": "www.nipobon.com.bd",
    "address": "Havelly Centre, Level-7, Ka-11/2A, Bashundhara Road, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Noman Properties Ltd.",
    "category": "Real Estate",
    "email": "info@nomanproperties.com",
    "phone_mobile": "+88 01761793641-48",
    "web": "www.nomanproperties.com",
    "address": "Khan Tower (Level-3), 51 Sonargaon Janapath, Sector # 07, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Noor Unique Builders Ltd.",
    "category": "Construction",
    "email": "nooruniquebuilders@gmail.com",
    "phone_mobile": "01755673678, 01730218821",
    "web": null,
    "address": "Ka-06, Havelly Complex (4th Floor), Bashundhara Main Road, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Northern Real Estate Limited",
    "category": "Real Estate",
    "email": "info@nreltdbd.com",
    "phone_mobile": "+88 01799993320-30, 01799993342",
    "web": "www.nreltdbd.com",
    "address": "Praasad Trade Centre, 6, Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Notundhora Assets Ltd.",
    "category": "Real Estate",
    "email": "info@notundhora.com",
    "phone_mobile": "+88-02-223388909",
    "web": "www.notundhora.com",
    "address": "55, Nik Tower (6th, 7th & 8th Floor), Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Nova Holdings Ltd.",
    "category": "Holding Company",
    "email": "nova@novabd.com",
    "phone_mobile": "01619234401, 01619234402",
    "web": "www.novabd.com",
    "address": "Nova Tower (Level-9), Jahurul Islam Avenue, 12/8 Pallabi, Dhaka-1216."
  },
  {
    "company_name": "Online Properties Ltd.",
    "category": "Real Estate",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "Cosmopolitan Center (3rd Floor), 22/2, Babor Road, Block # B, Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Orchard Developers & Construction Ltd.",
    "category": "Construction",
    "email": "info@odc.com.bd",
    "phone_mobile": "+88-02-48318901-10",
    "web": "www.odc.com.bd",
    "address": "Orchard Faruque Tower (Level-17), 72 Nayapaltan, Paltan, Dhaka-1000."
  },
  {
    "company_name": "Oriental Real Estate Ltd.",
    "category": "Real Estate",
    "email": "orel@orientalgroupbd.com",
    "phone_mobile": "+88-02-58611178-80, 01700770003, 01700770005, 01700770006",
    "web": "www.orientalrealestateltd.com",
    "address": "House # 15, Road # 4, Dhanmondi R/A, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Origin SR Properties Ltd.",
    "category": "Real Estate",
    "email": null,
    "phone_mobile": "01915744235, 01926680982",
    "web": null,
    "address": "Head Office: 168, Inner Circular Road, Al-Helal Building (1st Floor), Arambagh, Motijheel, Dhaka-1000."
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Manufacturing",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.eyeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Onward Developers Ltd.",
    "category": "Real Estate",
    "email": "info@onwarddevelopers.com, onwardbd@gmail.com",
    "phone_mobile": "+88-02-48035788, 48035799, 01963925370, 01963925375, 01742700051",
    "web": "www.onwarddevelopers.com",
    "address": "Onward A.R Tower, 574, East Kazipara (1st Floor), Begum Rokeya Sharani, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Oxford Development Ltd.",
    "category": "Real Estate",
    "email": "oxforddevelopmentltd@gmail.com",
    "phone_mobile": "01777777171, 01777771772",
    "web": null,
    "address": "House # 23, Road # 18, Block # A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Padma Homes Ltd.",
    "category": "Real Estate",
    "email": "padmahomesltd@gmail.com",
    "phone_mobile": "+88 01711330299",
    "web": "www.padmahomesbd.com",
    "address": "L.A. Plaza (9th Floor), 11/12, Block-C, Section-06, Main Road, Mirpur-2, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Peerage Properties Ltd.",
    "category": "Real Estate",
    "email": "project.peerage@gmail.com",
    "phone_mobile": "+88 01313-034685-7",
    "web": null,
    "address": "\"Chhuya\" House # 29, Road # 02, Sector # 07, Uttara Model Town, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Premier Housing & Developments Ltd.",
    "category": "Real Estate",
    "email": "mobarakhossain86@yahoo.com",
    "phone_mobile": "+88 01730312576-79",
    "web": null,
    "address": "House #2/6, Block #E, Lalmatia, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Pushpodhara Properties Ltd.",
    "category": "Real Estate",
    "email": "info@pushpodhara.com",
    "phone_mobile": "+88-02-48319545",
    "web": "www.pushpodhara.com",
    "address": "Head Office: Gemcon Business Center, Level-7 & 8, 255 New Circular Road, Dhaka-1217."
  },
  {
    "company_name": "President Properties Ltd.",
    "category": "Real Estate",
    "email": "info@presidentpropertiesltd.com",
    "phone_mobile": "01743344744, 01300626800",
    "web": "www.presidentpropertiesltd.com",
    "address": "House #261, Block #B, Bashundhara Road, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Quinta Real Estate Ltd.",
    "category": "Real Estate",
    "email": "quintadevelopmentltd@gmail.com",
    "phone_mobile": "01788-688717, 01792-482611, 01915-247578",
    "web": "www.quinta.com.bd",
    "address": "Corporate Office: House #15 (1st Floor), Road #08, Dhanmondi R/A, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Raphari Builders Ltd.",
    "category": "Construction",
    "email": "rajbaribuilders.15@gmail.com, sales.rajbarbuildersltd@gmail.com",
    "phone_mobile": "01780002266, 01711081988, 01870721180, 01730161950",
    "web": "www.rajbarbuilders.com",
    "address": "Plot #36 (2nd Floor), Road #9, Nikunja R/A-1, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Rangs Properties Limited",
    "category": "Real Estate",
    "email": "info@rangsproperties.com",
    "phone_mobile": "+8809617123123",
    "web": "www.rangsproperties.com",
    "address": "Rangs Babylonia, 246, Bir Uttam Mir Shawkat Road, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "RANS Real Estate Ltd.",
    "category": "Real Estate",
    "email": "ransrealestatedb@gmail.com",
    "phone_mobile": "+88-02-4842059, 48182085, 01713185727, 01713185748",
    "web": "www.ransrealestateldt.com",
    "address": "House #472, Road #31, DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Ratul Properties Ltd.",
    "category": "Real Estate",
    "email": "info@ratulproperties.com.bd",
    "phone_mobile": "01322840011, 01322840012",
    "web": "www.ratulproperties.com.bd",
    "address": "Rupayan Center, 72, Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Regent Design & Development Ltd.",
    "category": "Real Estate",
    "email": "regent.group2019@gmail.com, Info@regentgroup.com.bd",
    "phone_mobile": "+88-02-222274414, +88-02-222294584, 01810009333, 01949111999",
    "web": "www.rddl.regentgroup.com.bd",
    "address": "Delta Dahlia, Level-5A & 5B, 36 Kemal Ataturk Avenue, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Reliance Holdings Ltd.",
    "category": "Holding Company",
    "email": "sales@relianceholdingsltd.com",
    "phone_mobile": "01730046532, 01730046531, 01730046530",
    "web": "www.relianceholdingsltd.com",
    "address": "Corporate Office: House #134 (2nd Floor), Lane #01, DOHS, Baridhara, Dhaka-1206."
  },
  {
    "company_name": "Richmond Developers Ltd.",
    "category": "Real Estate",
    "email": "info@richmondbd.com",
    "phone_mobile": "+88 01730372670",
    "web": "www.richmondbd.com",
    "address": "36, Delta Dahlia, Kemal Ataturk Avenue, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Runner Properties Ltd.",
    "category": "Real Estate",
    "email": "info@runnerproperties.com",
    "phone_mobile": "+88 01730406633",
    "web": "www.runnerproperties.com",
    "address": "138/1, Tejgaon I/A, Dhaka-1208."
  },
  {
    "company_name": "Rupantor Construction & Housing Ltd.",
    "category": "Construction",
    "email": "rupantar.builders@gmail.com",
    "phone_mobile": "01970-225566, 01970-225567, 01970-225568",
    "web": null,
    "address": "3rd Floor, House #02, Road #12, DIT Project, Merul Badda, Dhaka-121."
  },
  {
    "company_name": "Rupayan Housing Estate Ltd.",
    "category": "Real Estate",
    "email": "info@rupayangroup.com",
    "phone_mobile": "+88-02-222286921, 222298322",
    "web": "www.rupayangroup.com",
    "address": "Rupayan Center, 72, Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "S & D Sweet Home Developers Ltd.",
    "category": "Real Estate",
    "email": "sndevelopersbd@gmail.com",
    "phone_mobile": "01842-310500, 01601-876340, 01711-014981",
    "web": "www.sdsweethome.com",
    "address": "House #34, Road #02, Block #C, Aftabnagar, Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Saba Properties Ltd.",
    "category": "Real Estate",
    "email": "sabagroup2004@gmail.com",
    "phone_mobile": "+88-02-222284002",
    "web": null,
    "address": "House #486 (3rd Floor), Road #32, Mohakhali DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Sajeda Properties Ltd.",
    "category": "Real Estate",
    "email": "sajedapropertiesltd@gmail.com",
    "phone_mobile": "01765523181, 01956669720, 01972564435",
    "web": "www.sajedaproperties.com",
    "address": "House # 08, Road # 20/C, Sector # 04, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Salmon Developers Ltd.",
    "category": "Real Estate",
    "email": "salmondevelopersltd@gmail.com",
    "phone_mobile": "+88 01711574753",
    "web": "www.salmondevelopersltd.com",
    "address": "House # 133, Road # 4, Block # A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Sanmar Properties Limited",
    "category": "Real Estate",
    "email": "info@mysanmar.com",
    "phone_mobile": "+8809612666888, +88 01745666888",
    "web": "www.mysanmar.com",
    "address": "Sanmar Tower 2 (18th Floor), House # 38/A, Road # 35, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sarker Builders & Developers Ltd.",
    "category": "Construction",
    "email": "sbdlmail@yahoo.com",
    "phone_mobile": "+88 01614441106, 01614441109, 01614441110",
    "web": "www.sbdlbd.com",
    "address": "House # 10/A, Road # 7/D, Sector # 9, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "SEA Properties Ltd.",
    "category": "Real Estate",
    "email": "info.seapropertiesltd@gmail.com",
    "phone_mobile": "01894-440111, 01332-500041",
    "web": "www.seapropertiesltd.com.bd",
    "address": "100 North Kalshi, Gate # 01, Mirpur DOHS, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Secure Property Management Ltd.",
    "category": "Property Management",
    "email": "spml.sales@gmail.com",
    "phone_mobile": "01331-224438, 01329-738520",
    "web": "www.secure-bd.com",
    "address": "Corporate Office: Level-5, House # 5A, Road # 2E, Block # J, Baridhara, Dhaka-1212, Bangladesh; Chattogram Office: Salam Height, 4th Floor, House # 01, Road # 01, South Khulshi, Chattogram-4225"
  },
  {
    "company_name": "Sekandar Builders Ltd.",
    "category": "Construction",
    "email": "sekandarbuilders@gmail.com",
    "phone_mobile": "+88 01332-513501",
    "web": "www.sekandarbuilders.com",
    "address": "Rahman AJ Trade Center, Ka-1/A, Jagannathpur, Bashundhara Road, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Sena Kalyan Constructions & Developments Ltd.",
    "category": "Construction",
    "email": "skcd.sks@gmail.com",
    "phone_mobile": "01769056477, 01769056478",
    "web": "www.senakalyandevelopment.com",
    "address": "Head Office: SKS Tower (Level-5), 7 VIP Road, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Shahriar Development Limited",
    "category": "Real Estate",
    "email": "shahriardevelopment2019@gmail.com",
    "phone_mobile": "01893-823320, 01893-823321",
    "web": "www.shahriardevelopmentltd.com",
    "address": "Saimon Point (4th Floor), Ka-03, Jagannathpur, Bashundhara, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Shanta Holdings Ltd.",
    "category": "Holding Company",
    "email": "info@shantaholdings.com",
    "phone_mobile": "+88 01678666444",
    "web": "www.shantaholdings.com",
    "address": "Forum, East Tower, Level-20-22, 187-188/B, Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Shaptak Grihayan Limited",
    "category": "Real Estate",
    "email": "info@shaptak.com",
    "phone_mobile": "01752561805, 01877755500",
    "web": "www.shaptak.com",
    "address": "Suite # C4-C5, Shaptak Mahbuba Grandeur, House # 17/1, Road # 6, Dhanmondi, Dhaka-1205"
  },
  {
    "company_name": "Sheba Holdings Ltd.",
    "category": "Holding Company",
    "email": "info@shebaholdings.com",
    "phone_mobile": "+8809617-222333, +88 01758-888333",
    "web": "www.shebaholdings.com",
    "address": "Sheba Nurjahan Eyecn Center, 60, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Sheltech Pvt. Limited",
    "category": "Real Estate",
    "email": "info@sheltech-bd.com",
    "phone_mobile": "09612444333, 09612555566",
    "web": "www.sheltech-bd.com",
    "address": "Sheltech Tower, 60 Shelkh Russel Square, West Panthapath, Dhaka"
  },
  {
    "company_name": "Shohoz Properties Ltd.",
    "category": "Real Estate",
    "email": "shohozproperties@gmail.com",
    "phone_mobile": "+88-02-226600405, +88 01896006505",
    "web": "www.shohozpropertiesltd.com.bd",
    "address": "Level-2, House # 18, Road # 11/A, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sierra Properties Ltd.",
    "category": "Real Estate",
    "email": "sierrabdinfo@gmail.com",
    "phone_mobile": "+88 01712614324",
    "web": null,
    "address": "61, Shah Makhdum Avenue, Sector # 12, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Signature Living Limited",
    "category": "Real Estate",
    "email": "sufian@signaturegroupbd.net",
    "phone_mobile": "+88-02-58810022, 01844-583050, 01844-583040",
    "web": "www.signaturegroupbd.net",
    "address": "Corporate Office: House # 10, Road # 16/A, Level # 4, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Six Segment Builders Ltd.",
    "category": "Construction",
    "email": "sixsegmentbuildersltd@gmail.com",
    "phone_mobile": "01711794696, 01794785461, 01730087199",
    "web": null,
    "address": "685/1, 5th Floor, Block # C, Khilgaon Chowdhurypara, Dhaka-1219"
  },
  {
    "company_name": "Sky Heights Real Estate Ltd.",
    "category": "Real Estate",
    "email": "skyheightsltd@outlook.com",
    "phone_mobile": "01312570561, 01312570565",
    "web": "www.skyheightsrealestate.com.bd",
    "address": "House # 02, Road # 08, Block # D, Banasree, Rampura, Dhaka-1219"
  },
  {
    "company_name": "Softland Construction Ltd.",
    "category": "Construction",
    "email": "softlandconstructionltdbd@gmail.com",
    "phone_mobile": "01733-226050, 01612-333048, 01972-336050",
    "web": "www.softlandconstructionltd.com",
    "address": "Softland Nazma Lodge, House # 46, Road # 04, Block-C, Mohanagar R/A, Hatirjehel, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Spring Field Developments Ltd.",
    "category": "Real Estate",
    "email": "info@springfieldbd.com",
    "phone_mobile": "01912132518, 01717535191",
    "web": "www.springfieldbd.com",
    "address": "House # 22, Road # 108, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Standard Design & Development Ltd.",
    "category": "Real Estate",
    "email": "sddl.info@gmail.com",
    "phone_mobile": "01324291997, 01324291998",
    "web": null,
    "address": "42/43, Purana Paltan, Fahimra Tower, 9th Floor, Flat-D & E, Dhaka-1000"
  },
  {
    "company_name": "Starkwood Real Estate Ltd.",
    "category": "Real Estate",
    "email": "admin@starkwoodrealestate.com",
    "phone_mobile": "01715406928, 01910445577, 01910446677",
    "web": "www.starkwoodrealestate.com",
    "address": "19 (New) Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Starpath Holdings Ltd.",
    "category": "Holding Company",
    "email": "info@starpathholdings.com",
    "phone_mobile": "02-55045231-3, 09610969260",
    "web": "www.starpathholdings.com",
    "address": "House #12, Road #137, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Star Unity Development Ltd.",
    "category": "Real Estate",
    "email": "starunityrv@gmail.com",
    "phone_mobile": "+88 01730711003, +88 01729035603",
    "web": null,
    "address": "Head Office: Star Shopping City (1st Floor), Plot #1193, Bashundhara Riverview, South Keraniganj, Dhaka-1311, Bangladesh"
  },
  {
    "company_name": "Structure Housing & Development Ltd.",
    "category": "Real Estate",
    "email": "info@shdlbd.com",
    "phone_mobile": "+88 01926628982",
    "web": "www.shdlbd.com",
    "address": "House #281/A, Road #19/C, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Styllent Realtors Ltd.",
    "category": "Real Estate",
    "email": "info@styllent-bd.com",
    "phone_mobile": "+88 01858008885",
    "web": "www.styllent-bd.com",
    "address": "House #121, Suite-3A, Road #01, Block-F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Sunbow Properties Limited",
    "category": "Real Estate",
    "email": "sunbow.bd@gmail.com",
    "phone_mobile": "+88-02-223329107, +88 01618-858890",
    "web": null,
    "address": "Corporate Office: 38/3, Ring Road (1st Floor), Shyamoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Suvastu Properties Ltd.",
    "category": "Real Estate",
    "email": "marketing@suvastu.com",
    "phone_mobile": "+88-02-222290482",
    "web": "www.suvastuproperties.com",
    "address": "Suvastu Imam Square, 5th Floor, 65 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Swadesh Properties Limited",
    "category": "Real Estate",
    "email": "sales@swadeshproperties.com",
    "phone_mobile": "+88-02-222261620, 01817030359, 01817030450, 01817040500, 01817040501",
    "web": "www.swadeshproperties.com",
    "address": "Corporate Head Office: Plot #10, 3rd Floor, Taher Tower, Gulshan Circle-2, Dhaka-1212"
  },
  {
    "company_name": "Talbiyah Properties Ltd.",
    "category": "Real Estate",
    "email": "talbiyah.properties@gmail.com",
    "phone_mobile": "+88 01715-147168",
    "web": null,
    "address": "Talbiyah Kadom Ali Palace (1st Floor), 10/1, North Mugdapara, Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "Terranova Development Ltd.",
    "category": "Real Estate",
    "email": "info@terranovadevelopments.com.bd",
    "phone_mobile": "+88-02-47120323-6, 01713669921, 01713669903, 01713669901",
    "web": "www.terranovadevelopments.com.bd",
    "address": "House #35 (1st & 2nd Floor), Road #18, Sector #07, Uttara Model Town, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Theme Engineers Ltd.",
    "category": "Engineering",
    "email": "info@themeengineers.com",
    "phone_mobile": "01978-021171, 01715-806884, 01406-473072",
    "web": "www.themeengineers.com",
    "address": "House #3/3 (3rd Floor), Block #E, Lamatia, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "The Premium Homes Ltd.",
    "category": "Real Estate",
    "email": "info@dpremiumhomes.com",
    "phone_mobile": "01767-490372, 01740-362000",
    "web": "www.dpremiumhomes.com",
    "address": "Corporate Office: 23/2, SEL Huq Sky Park, Shyamoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "T.M Assets Ltd.",
    "category": "Real Estate",
    "email": "info@tmassets.com.bd",
    "phone_mobile": "+88 01701696811-20",
    "web": "www.tmassets.com.bd",
    "address": "Jabbar Tower (17th Floor), Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Tokyo Development Engineers Ltd.",
    "category": "Engineering",
    "email": "tokyobd@yahoo.com",
    "phone_mobile": "+88-02-55088865, 55089047, 01707-202303, 01619-446688, 01619-456456",
    "web": "www.tokyobd.com",
    "address": "Corporate Office: Prime Tower, Suit #501 (5th Floor), 180-181, Syed Narzul Islam Sharani, Bijoy Nagar, Dhaka-1000, Bangladesh; Uttara Office: House #26, Road #9, Sector #13, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "UNIMAS Holdings Ltd.",
    "category": "Holding Company",
    "email": "info@unimassbd.com",
    "phone_mobile": "+88-02-41020276, 41020277",
    "web": "www.unimassbd.com",
    "address": "Corporate Office: House #04, Road #28 (Old) 15 (New), Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Union Development & Technologies Ltd.",
    "category": "Real Estate",
    "email": "union_development@yahoo.com",
    "phone_mobile": "01819557350, 01817043733, 01817043707",
    "web": "www.uniondevelopment.org",
    "address": "Union Heights (Level-4), 87, Sheikh Russel Square (new), 55-2, West Panthapath (old), Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Urban Design & Development Ltd.",
    "category": "Real Estate",
    "email": "marketing@uddl.com.bd",
    "phone_mobile": "09666774477",
    "web": "www.urban.com.bd",
    "address": "Corporate Office: House #34/A, Road #10/A, Dhanmondi R/A, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator Services",
    "email": null,
    "phone_mobile": "+88 0174606009, 01614606008",
    "web": "www.hyundai-elevator.com",
    "address": "Head Office: 40/F, Karwan Bazar, Dhaka-1215"
  },
  {
    "company_name": "US-Bangla Assets Ltd.",
    "category": "Real Estate",
    "email": "info@us-bangla.com, sales@us-bangla.com",
    "phone_mobile": "+88-02-222262610, 222284818, 222292608, 01708813250, 01708813242, 01708813240, 01708813253",
    "web": "www.usbassets.com",
    "address": "House # 77, Sohrawardi Avenue, Baridhara Diplomatic Zone, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Ventura Properties Limited",
    "category": "Real Estate",
    "email": "info@venturabd.com",
    "phone_mobile": "+880 9611446622, +880 1713434011-13",
    "web": "www.venturabd.com",
    "address": "Corporate Office: Ventura Avenue, CWN(C) # 8/B, Gulshan Avenue (Bir Uttam Mir Showkat Sharak), Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Vivek Real Estate Ltd.",
    "category": "Real Estate",
    "email": "info@vivekgroup.net",
    "phone_mobile": "+88-02-3363511, 58614257, 58612771, 01894865997, 01894865998",
    "web": "www.vivekgroup.net",
    "address": "Nasir Trade Center, Level-16, 89 Bir-Uttam C.R Datta Sarak, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Zubion Development Solutions Ltd.",
    "category": "Real Estate",
    "email": "info@zdslbd.com",
    "phone_mobile": "01898833300, 01618855557, 01618855558, 01618855559",
    "web": "www.zdslbd.com",
    "address": "Gold House, Road # 11, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Hillview Housing Ltd.",
    "category": "Real Estate",
    "email": "madaniuk23@gmail.com",
    "phone_mobile": "01719449091, 01716646608",
    "web": "www.hillviewbd.com",
    "address": "Islam Tower, 1039 College Row, Barishal-8200, Bangladesh"
  },
  {
    "company_name": "Accord Holdings Ltd.",
    "category": "Holding Company",
    "email": "info@accordgroup-bd.com",
    "phone_mobile": "+88-02-333367901-04, 01841412233, 01841412235",
    "web": "www.accordgroup-bd.com",
    "address": "Corporate Office: Akram Tower, 1st Floor, 28/33, Nowab Siraj-ud-Daula Road, Anderkilla, Chattogram, Bangladesh"
  },
  {
    "company_name": "Aerial Properties Limited",
    "category": "Real Estate",
    "email": "aerial2k18@gmail.com",
    "phone_mobile": "+88 01833329292",
    "web": "www.aerial-properties.com",
    "address": "Aerial Legend, 17th Floor, CDA Avenue, GEC Circle, Chattogram"
  },
  {
    "company_name": "AirBell Development Technologies Ltd.",
    "category": "Technology",
    "email": "info@airbellbd.com",
    "phone_mobile": "+88 01730024903-07",
    "web": "www.airbellbd.com",
    "address": "Pacific Tower (2nd Floor), 206/217 Jamal Khan Road, Chattogram, Bangladesh"
  },
  {
    "company_name": "Amity Apartment & Developers Ltd.",
    "category": "Real Estate",
    "email": "amityapartment2019@gmail.com",
    "phone_mobile": "01591146725, 01841776552",
    "web": "www.amityapartment.com.bd",
    "address": "Shovonur Villa, Plot # 06, Shyamoli R/A, Chattogram-4200, Bangladesh"
  },
  {
    "company_name": "Anvil Holdings Limited",
    "category": "Holding Company",
    "email": "anvilholdingsltd@gmail.com",
    "phone_mobile": "01819641107, 01810035900",
    "web": null,
    "address": "House # 07 (2nd Floor), Road # 01, O. R. Nizam Road R/A, GEC, Chattogram, Bangladesh"
  },
  {
    "company_name": "APL Holdings Ltd.",
    "category": "Holding Company",
    "email": "info@aplholding.com",
    "phone_mobile": "+88 01755662022",
    "web": "www.aplholding.com",
    "address": "IPL City Center (4th Floor), 162, O.R. Nizam Road, Golpahar Moor, Chittagong-4000, Bangladesh"
  },
  {
    "company_name": "CA Property Development Ltd. (CPDL)",
    "category": "Real Estate",
    "email": "mail@cpdl.com.bd",
    "phone_mobile": "+88-02-333354442, 333354443, 333351443, +88 01755663636",
    "web": "www.happycpdl.com",
    "address": "Corporate Office: 81, S.S. Khaled Road, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "City Home Properties Ltd.",
    "category": "Real Estate",
    "email": "info@smartjeansctg.com",
    "phone_mobile": "+88-02-41380571-76",
    "web": "www.smartgroupctg.com.bd",
    "address": "Corporate Head Office: 1206/A, Nasirabad I/A, Bayzid Thana Road, Bayzid, Chattogram-4210, Bangladesh"
  },
  {
    "company_name": "KPDL Builders Limited",
    "category": "Construction",
    "email": "najihajan15@gmail.com",
    "phone_mobile": "01616955865, 01818955865",
    "web": null,
    "address": "KPD Member Palace, Road # 4, Block # B, Chandgaon R/A, Chattogram"
  },
  {
    "company_name": "Coral Reef Properties Ltd.",
    "category": "Real Estate",
    "email": "info@coralreef.com.bd",
    "phone_mobile": "+88 01730725215-22",
    "web": "www.coralreef.com.bd",
    "address": "Coral Reef Amanat Khan Bari, Amanat Khan Road, Pathantuli Chowmuhany, Agrabad, Chattogram"
  },
  {
    "company_name": "Nifko Properties Limited",
    "category": "Real Estate",
    "email": "nifkoproperties@gmail.com",
    "phone_mobile": "01749003676, 01511003676",
    "web": "www.nifkogroup.com",
    "address": "CIKS Shopping Complex, 4th Floor, Nur Ahamed Sarak, Kazir Dewri, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Rahat Properties & Developer Co. Ltd.",
    "category": "Real Estate",
    "email": "rahatproperties@raghroupbd.com",
    "phone_mobile": "01919336621, 01919336640",
    "web": "www.raghroupbd.com",
    "address": "1440/A-3, Strand Road, Gosaildanga, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Rancon FC Properties Ltd.",
    "category": "Real Estate",
    "email": "info@ranconfc.com",
    "phone_mobile": "09617124124, +88 01713187353",
    "web": "www.ranconfc.com",
    "address": "Atlas Rangs Plaza (Level-9 & 10), 7, Sheikh Mujib Road, Agrabad C/A, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "RF Builders Limited",
    "category": "Construction",
    "email": "info@rfbuildersltd.com",
    "phone_mobile": "+88 01919335502",
    "web": "www.rfbuildersltd.com",
    "address": "House #1512/4, O.R. Nizam Road, Subarna R/A, Golpahar Moor, Chattogram, Bangladesh"
  },
  {
    "company_name": "Wecon Properties Ltd.",
    "category": "Real Estate",
    "email": "info@wecon.com.bd",
    "phone_mobile": "01709665070, 0170966508",
    "web": "www.wecon.com.bd",
    "address": "Head Office: 687, Mehedibag Road (Opposite of CDA Mosque), Chattogram"
  },
  {
    "company_name": "Perfect Living Properties Ltd.",
    "category": "Real Estate",
    "email": "info@perfectlivingbd.com",
    "phone_mobile": "01799-609791, 01708-589662, 01321-181030",
    "web": "www.perfectlivingbd.com",
    "address": "Paradise Bhaban, 179-180, Level-3, Alopotty Moor, Boaila, Rajshahi-6100"
  },
  {
    "company_name": "Mohona Construction & Housing Consultancy Ltd.",
    "category": "Construction",
    "email": "info@mohonahousing.com",
    "phone_mobile": "+88 01730854710",
    "web": "www.mohonahousing.com",
    "address": "82/2, Islambag, R.K. Road, Sadar, Rangpur, Bangladesh"
  },
  {
    "company_name": "Silkcity Asset Limited",
    "category": "Real Estate",
    "email": "silkcityassetld@gmail.com",
    "phone_mobile": "01999-694938, 01883-040235",
    "web": null,
    "address": "Alom Tower, 3rd Floor, College Road, Beacon More, Rangpur, Bangladesh"
  },
  {
    "company_name": "Ark Real Estate (Pvt.) Ltd.",
    "category": "Real Estate",
    "email": "info@arksylhet.com",
    "phone_mobile": "+88 01727442231",
    "web": "www.arksylhet.com",
    "address": "Dishari-1, Hawapara, East Zindabazar, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Dreamland Property Developer",
    "category": "Real Estate",
    "email": "dreamlandldpd@gmail.com",
    "phone_mobile": "+88 01712328822",
    "web": "www.dreamlandpropertydeveloper.com",
    "address": "Udichi, Anamika-30/A, East Shahi Eidgah, Sylhet, Bangladesh"
  },
  {
    "company_name": "Next Plan Development Ltd",
    "category": "Real Estate",
    "email": "info@nppdbd.com",
    "phone_mobile": "01715356380, 01740958269",
    "web": "www.nppdbd.com",
    "address": "NPDL, House #1/2, Road #1, Block #1 E, Shahjalal Upashahar, Sylhet-3100"
  },
  {
    "company_name": "Flair Group",
    "category": "Refractories",
    "email": "info@flairgroup.net",
    "phone_mobile": "+88 01817141904",
    "web": "www.flairgroup.net",
    "address": "House #48(1st Floor), Road #1/A, Block-1, Banani, Dhaka-1213"
  },
  {
    "company_name": "Razzak Enterprise",
    "category": "Refractories",
    "email": "mollanayeem78@gmail.com",
    "phone_mobile": "01874905180, 01928423741",
    "web": "www.refractorycementbd.com",
    "address": "237, Siraj Brothers Market, Shop #3, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "RTC Trade International",
    "category": "Refractories",
    "email": "rtcdhaka2013@gmail.com",
    "phone_mobile": "+88 01831016720",
    "web": null,
    "address": "Russel Center, 27 Hatchola Road, Tikatoly, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Delco Engineering",
    "category": "Refractories",
    "email": "delcoengineering58@yahoo.com",
    "phone_mobile": "+88-02-223387348, 223386904, 223387321, +88 01847350522, 01678518491, 01678518486",
    "web": "www.delcoengltd.com",
    "address": "58/1, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Dewan Engineering",
    "category": "Refractories",
    "email": "dewanengineeringbd2018@gmail.com",
    "phone_mobile": "+88-02-223358034, +88 01860-747429",
    "web": null,
    "address": "60/1, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Maruf Refrigeration Co.",
    "category": "Refractories",
    "email": "maruf_2gb@yahoo.com",
    "phone_mobile": "+88 01711-664892",
    "web": null,
    "address": "23, Joykali Mandir Road, Wari, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Savar Refractories PLC",
    "category": "Refractories",
    "email": "savar.ref@gmail.com",
    "phone_mobile": "+88 01722429253",
    "web": "www.savar-ref.com",
    "address": "108, Airport Road (3rd Floor), Tejgaon, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Delco International Co.",
    "category": "Refrigeration Equipment/Parts",
    "email": "rezdelco@gmail.com",
    "phone_mobile": "+88-02-223384292, 223355782, +88 01814660436-8",
    "web": "www.delcointernational.net",
    "address": "Head Office: 60/E/1, Purana Paltan, Dewan Complex (1st Floor), Dhaka-1000, Bangladesh; Outlet-1: 53/3, Al-Habib Business Centre, Kaptan Bazaar, Dhaka-1203"
  },
  {
    "company_name": "Monir Refrigeration & Engineering Works",
    "category": "Refrigeration Equipment/Parts",
    "email": "monirhossain5964@gmail.com",
    "phone_mobile": "+88 01711-025964, +88 01711-936432",
    "web": null,
    "address": "71, B.C.C Road, Thatai Bazar, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "M/S. Himel Enterprise",
    "category": "Refrigeration Equipment/Parts",
    "email": "himelent@hotmail.com",
    "phone_mobile": "+88 01711113340, +88 01811113374",
    "web": "www.hmlbd.com",
    "address": "House #38, Road #04, Sector #11, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "S.E Refrigeration",
    "category": "Refrigeration Equipment/Parts",
    "email": "ershad0512@gmail.com",
    "phone_mobile": "+88-02-223382525, +88 01711-521674, 01611-521674",
    "web": null,
    "address": "60/A, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "SIGMA LIFT COMPANY LTD.",
    "category": "Elevator Services",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": null
  },
  {
    "company_name": "Sved Gas & Chemicals Limited",
    "category": "Refrigeration Equipment/Parts",
    "email": "svedgas6@gmail.com",
    "phone_mobile": "+88-02-223385160, 223382944, 01756937304, 01817512104",
    "web": null,
    "address": "82, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "The Singapore Refrigeration",
    "category": "Refrigeration Equipment/Parts",
    "email": null,
    "phone_mobile": "01715-133334, 01615-133334",
    "web": null,
    "address": "58/1, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Amar Rent A Car",
    "category": "Rent-A-Car",
    "email": "jeniadu2011@gmail.com",
    "phone_mobile": "+88 01742330044",
    "web": "www.amarrentacar.com",
    "address": "37/2, Shyamoli, Shop # 37, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "BD Rent A Car",
    "category": "Rent-A-Car",
    "email": "bdrentacar.com@gmail.com, info@bdrentacar.com",
    "phone_mobile": "01832777740, 01840110100",
    "web": "www.bdrentacar.com",
    "address": "North Baridhara, Gulshan-2, Dhaka"
  },
  {
    "company_name": "Dewan Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "dewanrentalcar@gmail.com",
    "phone_mobile": "01912098555, 01714323377",
    "web": null,
    "address": "69/E, Green Road, Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Dhaka Enterprise",
    "category": "Rent-A-Car",
    "email": "ahsan5813@gmail.com",
    "phone_mobile": "+88 01919115813",
    "web": null,
    "address": "13/2, West Panthapath, Sukrabad, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Dhanmondi Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "contact@dhanmondientacar.com",
    "phone_mobile": "01712249012, 01841249012",
    "web": "www.dhanmondientacar.com",
    "address": "Level-2, House # 109, Road # 9/A, West Dhanmondi, Sankar, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Easy Rent A Car",
    "category": "Rent-A-Car",
    "email": "easyrentacarsbd@gmail.com",
    "phone_mobile": "+88 01328862310",
    "web": "www.easyrentacarbd.com",
    "address": "Masjid Market, Mirpur-2, Dhaka-1216"
  },
  {
    "company_name": "Greenway Tours & Rent A Car",
    "category": "Rent-A-Car",
    "email": "greenwayrentacar@gmail.com",
    "phone_mobile": "01611179530, 01841756856",
    "web": "www.greenwayrentacar.com.bd",
    "address": "Baishakhi Super Market, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Habib Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "mdhaiderali002@gmail.com",
    "phone_mobile": "01749454441, 01619454442",
    "web": null,
    "address": "84/B/4, Hossain Shaher Goli, Babri Jame Masjid Road, Mohammadpur Rayer Bazar, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Haque Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "haquerentacar@gmail.com",
    "phone_mobile": "+88 01715834829",
    "web": "www.haquerentacar.com",
    "address": "81, Sukrabad, Dhanmondi, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Hello Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "booking@hellorentacar.com",
    "phone_mobile": "+88-02-222284311, +88 01755008800",
    "web": "www.hellorentacar.com",
    "address": "House # 04 (2nd Floor), Road # 12, Block # J, Baridhara, Dhaka-1212"
  },
  {
    "company_name": "Janani Rent A Car",
    "category": "Rent-A-Car",
    "email": "jananienterprise1@gmail.com",
    "phone_mobile": "01712955618, 01963330387",
    "web": "www.jananirentacar.com",
    "address": "8/9, Senpara Parbata, Amtola Bazar, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Khaled Rent A Car",
    "category": "Rent-A-Car",
    "email": "kmosarrof@gmail.com",
    "phone_mobile": "+88 01933246577",
    "web": "www.khaledrentacar.com",
    "address": "Shop # 371, 4th Floor, 5 Mirpur Road, Boishakhi Super Market, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Maa Rent-A-Car",
    "category": "Rent-A-Car",
    "email": null,
    "phone_mobile": "01621182509, 01748352570",
    "web": null,
    "address": "Shop # 04, Murad Market, 3/26/1, Rayerbazar, Hashem Khan Road, Dhaka, Bangladesh"
  },
  {
    "company_name": "Maliha Rent A Car",
    "category": "Rent-A-Car",
    "email": "nasimakbar55@gmail.com",
    "phone_mobile": "+88 01828079934",
    "web": "www.maliharentacar.com",
    "address": "Humayun Road, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Masud Rent A Car",
    "category": "Rent-A-Car",
    "email": "masudcarrent@yahoo.com, masudrentacar@gmail.com",
    "phone_mobile": "01911344574, 01771109000, 01744264374",
    "web": "www.masudrentacar.com",
    "address": "33, North Avenue, Road # 45, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Morion Rent A Car",
    "category": "Rent-A-Car",
    "email": "morionrentacar40@gmail.com",
    "phone_mobile": "+88 01720013229",
    "web": "www.morionrentacar.com",
    "address": "KA-47/1, Riaz Villa, Kalachadpur, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sheba Rent A Car",
    "category": "Rent-A-Car",
    "email": "amarrentacardhaka@gmail.com",
    "phone_mobile": "+88 01764880099",
    "web": "www.shebarentacar.com",
    "address": "2/3/3 Tolarbag, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Naisha Enterprise",
    "category": "Real Estate",
    "email": "info@naishaenterprise.org",
    "phone_mobile": "01842089387, 01842089838",
    "web": "www.naishaenterprise.org",
    "address": "Rupayan Shopping Square, Level-4, Suite # 501, Plot # C-2, Sayem Sobhan Anvir Road, Block-G, Bashundhara R/A, Dhaka-1229"
  },
  {
    "company_name": "Popular Rent-A-Car",
    "category": "Rent-A-Car",
    "email": null,
    "phone_mobile": "+88 01333410488",
    "web": "www.popularrentacarbd.com",
    "address": "Bir Uttam Rafiqul Islam Avenue, Merul Badda Bazar, Dhaka-1212"
  },
  {
    "company_name": "Sarker Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "sarkerrrentacar@gmail.com",
    "phone_mobile": "+88 01681100022",
    "web": "www.sarkerrrentacar.com",
    "address": "Plot # 58, Road # 02, Sector # 03, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Siyam Rent A Car",
    "category": "Rent-A-Car",
    "email": "info@siyamrentacar.com",
    "phone_mobile": "01969765691, 01303463291",
    "web": "www.siyamrentacar.com",
    "address": "Hazariabagh Kulal Mohol Jame Masjid, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Swift Rent A Car",
    "category": "Rent-A-Car",
    "email": "swiftrentacarbd@gmail.com",
    "phone_mobile": "+88 01718415198",
    "web": null,
    "address": "House # 03, Flat # B6, Road # 20, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Tiger Rent-A-Car",
    "category": "Rent-A-Car",
    "email": null,
    "phone_mobile": "+88 01949898735",
    "web": null,
    "address": "37, RM Center, Plot # 05, 101, Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "VIP Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "viprentacar2@gmail.com",
    "phone_mobile": "01905199266, 01720277799",
    "web": null,
    "address": "Shop #6, Krishi Market, Ring Road, Mohammadpur, Dhaka-1207"
  },
  {
    "company_name": "Zohorul Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "zohorulrentacar@gmail.com",
    "phone_mobile": "+88 01748935167",
    "web": "www.zohorulrentacar.com",
    "address": "1-D, Avenue-2, House #1/2, Shop #4, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Zoom Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "info@zoomrentacar.com.bd",
    "phone_mobile": "+88 01711306557",
    "web": "www.zoomrentacar.com.bd",
    "address": "House #2/4, Tolarbag, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Asia Rent A Car",
    "category": "Rent-A-Car",
    "email": "asiarentacartcg@gmail.com",
    "phone_mobile": "+88 01717101010",
    "web": "www.asiarentacartcg.com",
    "address": "Panchlaish, Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "Chattogram Rent A Car",
    "category": "Rent-A-Car",
    "email": "chattogramrentacar24@gmail.com",
    "phone_mobile": "+88 01643808046",
    "web": "www.chattogramrentacar.com",
    "address": "Sheikh Mujib Road, Dewanhat, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Chittagong Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "info@ctgrentacar.com",
    "phone_mobile": "+88 01917059797",
    "web": "www.ctgrentacar.com",
    "address": "Katalongi, Panchlaish, Chattogram, Bangladesh"
  },
  {
    "company_name": "Faruk Rent-A-Car",
    "category": "Rent-A-Car",
    "email": "farukrentacar0@gmail.com",
    "phone_mobile": "01890077888, 01940046678",
    "web": "www.farukrentacar.com",
    "address": "Katalongi, Panchlaish, Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "Rent-A-Car Chittagong",
    "category": "Rent-A-Car",
    "email": "rentacartcg45@gmail.com",
    "phone_mobile": "01817891645, 01816282268",
    "web": "www.rentacartcg.com",
    "address": "Katalongi, Panchlaish, Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "Rent A Car Ctg",
    "category": "Rent-A-Car",
    "email": "rentacarsctg@gmail.com",
    "phone_mobile": "01886004004, 01886006008",
    "web": "www.rentacarsctg.com",
    "address": "O. R. Nizam Road, Panchlaish, Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "Rent A Car in Ctg",
    "category": "Rent-A-Car",
    "email": "rentacaricntg1@gmail.com",
    "phone_mobile": "01815339429, 01789999308",
    "web": "www.rentacaricntg.com",
    "address": "Katalongi, Panchlaish, Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "Royal Auto Rentals",
    "category": "Rent-A-Car",
    "email": "royalautorentalsbd@gmail.com",
    "phone_mobile": "+88 01825445577",
    "web": "www.royalautorentalsbd.com",
    "address": "87, Chatteshwari Road, Chawkbazar, Chattogram, Bangladesh"
  },
  {
    "company_name": "Tasfia Rent A Car",
    "category": "Rent-A-Car",
    "email": "tasfiarentacar@gmail.com",
    "phone_mobile": "+88 01721685938",
    "web": "www.tasfiarentacar.com",
    "address": "Alif Beponi Centre, 2nd Floor, 31, N.A. Chu. Road, Anderkilla, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Tayoba Rent A Car Chittagong",
    "category": "Rent-A-Car",
    "email": "tayobarentacartcg@gmail.com",
    "phone_mobile": "+88 01713594959",
    "web": "www.tayobarentacartcg.com",
    "address": "Subhan Tower, Murad Nagar, Baizid Bostami, Chattogram"
  },
  {
    "company_name": "Ananda Rent A Car",
    "category": "Rent-A-Car",
    "email": null,
    "phone_mobile": "+88 01711114204",
    "web": null,
    "address": "West of Alia Madrasa Math, Dargah Moholla, Minar Gate, Sylhet-3100"
  },
  {
    "company_name": "Junaid Rent-A-Car",
    "category": "Rent-A-Car",
    "email": null,
    "phone_mobile": "+88 01733793075",
    "web": null,
    "address": "Medical College Road, Sylhet"
  },
  {
    "company_name": "Sylhet Rent Car",
    "category": "Rent-A-Car",
    "email": "sylhetrentcarofficial@gmail.com",
    "phone_mobile": "+88 01978842772",
    "web": null,
    "address": "Subidbazar, Sylhet, Bangladesh"
  },
  {
    "company_name": "Eden Garden Resort",
    "category": "Resort",
    "email": "edengarden1340@gmail.com",
    "phone_mobile": "+88 01889977787",
    "web": "www.edengardenresortbd.com",
    "address": "Sinduriya, Diyabari Road, Savar, Dhaka-1345, Bangladesh"
  },
  {
    "company_name": "Green View Resort & Convention Centre Ltd.",
    "category": "Resort",
    "email": null,
    "phone_mobile": "01762682702-04",
    "web": "www.greenviewresortbd.com",
    "address": "Moinertek, Uttarkhan, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Fanush Resort",
    "category": "Resort",
    "email": "fanushresort.bandarban@gmail.com",
    "phone_mobile": "+88 01845779999",
    "web": null,
    "address": "Nilachal Tiger Para, Nilachol hd, Bandarban-4600, Bangladesh"
  },
  {
    "company_name": "Greenpeak Resorts",
    "category": "Resort",
    "email": "greenpeak.resorts@gmail.com",
    "phone_mobile": "01758554466, 01723334777, 0179339222, 01743335999",
    "web": "www.greenpeakresorts.com",
    "address": "Meghla, Opposite to TTC, Bandarban, Bangladesh"
  },
  {
    "company_name": "Labah Tong Hill Resort Ltd.",
    "category": "Resort",
    "email": "info@labahtong.com",
    "phone_mobile": "01894398151, 01894938150",
    "web": "www.labahtong.com",
    "address": "Hafezgona, Chimbuk Road, Bandarban-4600, Bangladesh"
  },
  {
    "company_name": "Shamol Bangla Resort",
    "category": "Resort",
    "email": "info@shamolbanglareresort.com",
    "phone_mobile": "01776508162, 01701793115",
    "web": "www.shamolbanglareresort.com",
    "address": "Guita Krishna Nagar, Taranagar, Kalatia, Keraniganj Model Thana, Dhaka-1313, Bangladesh"
  },
  {
    "company_name": "D'more Bandarban Hotel & Resort",
    "category": "Resort",
    "email": "reservation.bandarban@hoteldmre.com",
    "phone_mobile": "+88 01329723050-51",
    "web": "www.bandarban.hoteldmre.com",
    "address": "Lusai Bari, Chimbuk Road, Hafezgona, Bandarban, Bangladesh"
  },
  {
    "company_name": "Ecossense Resort",
    "category": "Resort",
    "email": "booking@ecossensbed.com, ecossenseresort@gmail.com",
    "phone_mobile": "+88 01777765789",
    "web": "www.ecossensbed.com",
    "address": "Nilachal, Bandarban-4600"
  },
  {
    "company_name": "Salru Hill Resorts Ltd.",
    "category": "Resort",
    "email": "reservation@sairuresort.com",
    "phone_mobile": "09194333333, 09619444444, +88 01847471301-09",
    "web": "www.sairuresort.com",
    "address": "Baro Mile, Chimbuk Road, Y Junction Shaulock, Bandarban-4600"
  },
  {
    "company_name": "Venus Resort",
    "category": "Resort",
    "email": "venus.resort2013@gmail.com",
    "phone_mobile": "+88 01552808000",
    "web": null,
    "address": "Lal Mohan Bahadur Bagan, Bandarban, Bangladesh"
  },
  {
    "company_name": "Brisa Marina CBC Resort",
    "category": "Resort",
    "email": "info@brisamarinabd.com",
    "phone_mobile": "01844135500, 01783871820",
    "web": "www.brisamarinabd.com",
    "address": "Ghat #11, Airport Road, East Patenga, Chattogram-4205, Bangladesh"
  },
  {
    "company_name": "ANZ Builders & Properties Ltd.",
    "category": "Construction",
    "email": "info.anz2025@gmail.com",
    "phone_mobile": "+88 01730222122",
    "web": "www.anz-bd.com",
    "address": "House # 93B, Road # 4, Block # F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Araf Holdings Ltd.",
    "category": "Holding Company",
    "email": "info.araf@gmail.com",
    "phone_mobile": "+88 01933-355885",
    "web": null,
    "address": "VIP Tower (3rd Floor), 51/1 VIP Road, Nayapaltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Arch Real Estate Ltd.",
    "category": "Real Estate",
    "email": "archrealestateltd@gmail.com, info@archrealestatebd.com",
    "phone_mobile": "+88 01716-012859",
    "web": "www.archrealestatebd.com",
    "address": "House # 22/C (5th Floor), Road # 36, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Ariana Developments Ltd.",
    "category": "Real Estate",
    "email": "hello@ariana.com.bd",
    "phone_mobile": "+88 01329733723, 01329733722, 01329733721",
    "web": "www.ariana.com.bd",
    "address": "Head Office: 128, Malek Mansion, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Arkam Builders Limited",
    "category": "Construction",
    "email": "arkambuilders@gmail.com",
    "phone_mobile": "01971360001, 01858478780, 01896-088804, 01896-088805",
    "web": "www.arkambuilders.com",
    "address": "Corporate Office: House # 02, Road # 13, Block-C, Banasree, Rampura, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Arman Real Estate Ltd.",
    "category": "Real Estate",
    "email": "armanrealestateltd@gmail.com",
    "phone_mobile": "01611406403, 01714591129, 01718297247",
    "web": "www.armanrealestateltd.com",
    "address": "House # 13, Road # 01, Sector # 01, Block # G, Aftab Nagar, Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Arma Real Estate Limited",
    "category": "Real Estate",
    "email": "info.armagroupbd@gmail.com",
    "phone_mobile": "01761115807, 01311468100, 01311468101, 01311468102",
    "web": "www.armagroup.com.bd",
    "address": "Corporate Office: \"Arma Complex\" House # 1/B, Road # NS-1 (Main Road), Block # A, Banasree, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Ashiyan Group",
    "category": "Real Estate",
    "email": "info@ashiygroupp.com",
    "phone_mobile": "+88-02-55051720-26, 01713090734, 01713423456, 01714161948, 01714161908",
    "web": "www.ashiygroupp.com",
    "address": "Unicorn Plaza (5th Floor), 40/2 North Avenue, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "Assetic Ltd.",
    "category": "Real Estate",
    "email": "assetictld@gmail.com",
    "phone_mobile": "+88 01880-087202",
    "web": "www.assetictld.com",
    "address": "House # 23 (3rd Floor), Road # 1, Sector # 12, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Ask Samarai Way Developers Ltd.",
    "category": "Real Estate",
    "email": "info@askamarivway.com",
    "phone_mobile": "+88-02-58816305, +88 01844646688",
    "web": "www.askamarivway.com",
    "address": "House # 11/B (1st Floor), Road # 130, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Assort Housing & Engineering Ltd.",
    "category": "Real Estate",
    "email": "assorthousing@gmail.com",
    "phone_mobile": "+88-02-222294471, 02-22226014, 01711535262, 01731679682, 01729596322, 0178634414",
    "web": "www.assorthousing.com",
    "address": "Assort Ark, House # 12, Level # 1 & 2, Road # 04, Block # F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Assurance Developments Ltd.",
    "category": "Real Estate",
    "email": "info@assurance.com.bd",
    "phone_mobile": "+8809606222444",
    "web": "www.assurance.com.bd",
    "address": "Assurance Tower, 65/B, Kemal Ataturk Avenue, Banani, Dhaka-1213"
  },
  {
    "company_name": "Baniz Construction Limited",
    "category": "Construction",
    "email": "construction2@banibz.com.bd",
    "phone_mobile": "+88 01958-092601",
    "web": "www.banibzconstruction.com",
    "address": "Head Office: House # 72, Road # 21, Block # B, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Basic Builders Ltd.",
    "category": "Construction",
    "email": "sales@basicbuildersltd.com",
    "phone_mobile": "+88-02-222290218, 222289246, 01301959875, 01714134392, 01713165730, 01714134393",
    "web": "www.basicbuildersltd.com",
    "address": "\"Basic Bluebell\" (1st & 2nd Floor), House # 06, Road # 16/A, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Austral Properties Limited",
    "category": "Real Estate",
    "email": "australpropertiesbd@gmail.com",
    "phone_mobile": "+88 01799448808",
    "web": "www.australproperties.com",
    "address": "Austral Palace, House # 25-26, Block # F, Ext Pallabi, Mirpur, Dhaka-1216"
  },
  {
    "company_name": "AWR Real Estate Ltd.",
    "category": "Real Estate",
    "email": "sales@awr.com.bd",
    "phone_mobile": "+88 01811409608",
    "web": "www.awr.com.bd",
    "address": "House # 4, Road # 27, Block # J, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Baitun Builders Ltd.",
    "category": "Construction",
    "email": "baitunbuildersltd@gmail.com",
    "phone_mobile": "+88 01711522976",
    "web": null,
    "address": "Head Office: House # 296/A (2nd Floor), Road # 19/B, Mohakhali DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Basumati Construction Ltd.",
    "category": "Construction",
    "email": "mbyasumati@gmail.com, support@basumaticonstruction.com",
    "phone_mobile": "01958214102, 01958214103",
    "web": "www.basumaticonstruction.com",
    "address": "Nassa Heights (Level-7), Plot # 47, Gulshan South Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Bay Developments Ltd.",
    "category": "Real Estate",
    "email": "bay@bayedvelopments.com",
    "phone_mobile": "+88 01730020488",
    "web": "www.bayedvelopments.com",
    "address": "Bay's Edgewater, NE (N) 12, North Avenue, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "Best-Tech Properties Ltd.",
    "category": "Real Estate",
    "email": "info@btplbd.com",
    "phone_mobile": "+88 01712981955",
    "web": "www.btplbd.com",
    "address": "Noor Tower (5th Floor), Garib-E-Newaz Avenue, Plot # 18, Sector # 11, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Foy's Lake Resort",
    "category": "Resort",
    "email": "info@foyslakeresort.net",
    "phone_mobile": "+88 01973676595",
    "web": "www.foyslakeresort.net",
    "address": "Foy's Lake, Khulshi, Chattogram-4202, Bangladesh"
  },
  {
    "company_name": "DERA Resort & Spa",
    "category": "Resort",
    "email": "deraresort@gmail.com",
    "phone_mobile": "+88 01896001112",
    "web": "www.deraresort.com",
    "address": "Marine Drive Road, Kutupalong, Inani Ukhia, Cox's Bazar-4750, Bangladesh"
  },
  {
    "company_name": "Mermaid Beach Resort",
    "category": "Resort",
    "email": "stay@mermaidbeachresort.net",
    "phone_mobile": "+88 01841416468-69",
    "web": "www.mermaidbeachresort.net",
    "address": "Pechar Dwip, Marine Drive Road, Cox's Bazar, Bangladesh"
  },
  {
    "company_name": "Moon Nest",
    "category": "Resort",
    "email": "shahin@moon-nest.com",
    "phone_mobile": "+88 01830330055",
    "web": "www.moon-nest.com",
    "address": "Pechardwip, Cox's Bazar, Bangladesh"
  },
  {
    "company_name": "Nitol Bay Resort",
    "category": "Resort",
    "email": "info@nitolbayresort.com",
    "phone_mobile": "09613141111, +88 01844662069",
    "web": "www.nitolbayresort.com",
    "address": "Plot # 13,14,17, Block # C, Kolatoli Beach Road, Cox's Bazar-4700"
  },
  {
    "company_name": "Sampan Beach Resort",
    "category": "Resort",
    "email": "booking.sampancafe@gmail.com",
    "phone_mobile": "01974767276, 01813726726",
    "web": "www.sampanresort.com",
    "address": "Himchori Kakra Beach, Marine Drive Road, Near Army Camp, Cox's Bazar, Bangladesh"
  },
  {
    "company_name": "Uni Resort",
    "category": "Resort",
    "email": "reservation@uniresort-bd.com, uniresort@gmail.com",
    "phone_mobile": "01713160165, 01713160167",
    "web": "www.uniresort-bd.com",
    "address": "Kolatali Main Road, Plot # 7, Block # C, Cox's Bazar, Bangladesh"
  },
  {
    "company_name": "The Wave Resorts Ltd.",
    "category": "Resort",
    "email": "booking@thewaveresorts.com",
    "phone_mobile": "+88 01985444805, +88 01985444806",
    "web": "www.thewaveresorts.com",
    "address": "Inani, Cox's Bazar, Bangladesh"
  },
  {
    "company_name": "Angana Resort",
    "category": "Resort",
    "email": "resort4reservation@gmail.com",
    "phone_mobile": "+88 01894803511",
    "web": null,
    "address": "Surjonarayanpur, Pabur Daibari Road, Kapasia, Gazipur, Bangladesh"
  },
  {
    "company_name": "Apon Bhubon Resort",
    "category": "Resort",
    "email": "aponbhubon.spot@gmail.com",
    "phone_mobile": "+88 01759403059",
    "web": "www.aponbhubonresort.com",
    "address": "Khilgaon, Pubail, Gazipur"
  },
  {
    "company_name": "Arnonobash Resort",
    "category": "Resort",
    "email": "arnonobash@gmail.com",
    "phone_mobile": "+88 01779175097",
    "web": "www.arnonobashbd.com",
    "address": "Bilashara, Vadhune, Pubail, Gazipur, Bangladesh"
  },
  {
    "company_name": "Arshinagar Resort",
    "category": "Resort",
    "email": "info@arshinagarresort.com",
    "phone_mobile": "01626462661, 01976462661",
    "web": "www.arshinagarresort.com",
    "address": "231 Uttar Chayabithi, Pajulia Joydebpur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Bhawal Resort & Spa",
    "category": "Resort",
    "email": "reservation@bhawalresort.com",
    "phone_mobile": "+8809611400700, 01871004007, 01871004015",
    "web": "www.bhawalresort.com",
    "address": "Noljahni, Mirjapur, Baroipara, Gazipur, Bangladesh"
  },
  {
    "company_name": "CCULB Resort & Convention Hall",
    "category": "Resort",
    "email": "info@cculbresort.com",
    "phone_mobile": "0199909055, 0199909443, 01958647051, 01714168010",
    "web": "www.cculbresort.com",
    "address": "Kuchilabari (Jora Pump), Ulokhola, Kaliganj, Gazipur-1720, Bangladesh"
  },
  {
    "company_name": "Chuti Resort",
    "category": "Resort",
    "email": "reservation@chutibd.com",
    "phone_mobile": "01777114488, 01777114499, 01951537777, 01951508888",
    "web": "www.chutiresort.com",
    "address": "Sukundi, Amtoli, Joydebpur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Dhaka Resort Ltd.",
    "category": "Resort",
    "email": "dhakaresortltd@gmail.com",
    "phone_mobile": "01762554422, 01762554444",
    "web": "www.dhakaresortltd.com",
    "address": "Bandhabari, Kaliakoir, Gazipur-1750, Bangladesh"
  },
  {
    "company_name": "Dream Square Resort",
    "category": "Resort",
    "email": "rsvn@dreamsquareresort.com",
    "phone_mobile": "01401020202, 01401120102-6",
    "web": "www.dreamsquareresort.com",
    "address": "Chalkpara, Medical Mor, Mawna, Sreepur, Gazipur-1740, Bangladesh"
  },
  {
    "company_name": "Namiir Green Resort",
    "category": "Resort",
    "email": "namirgreenresort@gmail.com",
    "phone_mobile": "01955124132, 01955124133",
    "web": "www.namirgreenresort.com",
    "address": "Tek Kathora, Moishanbari, Salna Bazar, Gazipur, Bangladesh"
  },
  {
    "company_name": "Nirvana Resort & Park",
    "category": "Resort",
    "email": "nirvanaresort625@gmail.com",
    "phone_mobile": "+88 01408247963",
    "web": null,
    "address": "Polan Para, Khude Barmi, Joydebpur, Gazipur, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Manufacturing",
    "email": "eyeshaeapabd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.eyeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Hazari Cottage & Resort",
    "category": "Resort",
    "email": null,
    "phone_mobile": "01819212418, 01810076792",
    "web": null,
    "address": "Taltia Bus Stand, Mirer Bazar, Pubail, Tongi, Gazipur-1712, Bangladesh"
  },
  {
    "company_name": "Joleswari Resort",
    "category": "Resort",
    "email": "jolesworiresort@gmail.com",
    "phone_mobile": "+88 01684788937",
    "web": null,
    "address": "Faugan, Rajendrapur, Sreepur, Gazipur"
  },
  {
    "company_name": "Mamata Palli Resort",
    "category": "Resort",
    "email": "mamatapalliresort@pkm-kbd.org",
    "phone_mobile": "+88 01877703158",
    "web": null,
    "address": "Dewan Idris Sarak, Zirabo, Ashulia, Savar, Dhaka-1341, Bangladesh"
  },
  {
    "company_name": "Matir Maya Eco Resort",
    "category": "Resort",
    "email": "matirmayaecoresort@gmail.com",
    "phone_mobile": "01619627812, 01867877677",
    "web": null,
    "address": "Udaykhali Road, Uttar Pelayed Telihati, Gazipur-1740, Bangladesh"
  },
  {
    "company_name": "Nokkhottrobari Resort",
    "category": "Resort",
    "email": "sales@nokkhottrobari.com",
    "phone_mobile": "01772224281, 01772224282, 01977356165",
    "web": "www.nokkhottrobari.com",
    "address": "Chinashukhania, Razabari Bazar, Sreepur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Pubail Resort Club",
    "category": "Resort",
    "email": "info@pubailresortclub.com",
    "phone_mobile": "01705555888, 01705555999",
    "web": "www.pubailresortclub.com",
    "address": "Plot # 801, Vadun (behind Vadun High School), Gazipur, Bangladesh"
  },
  {
    "company_name": "Rajendra Eco Resort Ltd.",
    "category": "Resort",
    "email": "rajendraeco2015@gmail.com",
    "phone_mobile": "01711874018, 01713638723",
    "web": "www.rajendraecoresort-ltd.com",
    "address": "Dhaka-Mymensingh Highway, Mahona, Bhabanipur, Gazipur-1740"
  },
  {
    "company_name": "Rass Resort",
    "category": "Resort",
    "email": "reservation@rassresort.com",
    "phone_mobile": "+88 01975249999",
    "web": "www.rassresort.com",
    "address": "Uttar Pelad, Saltallya Road, Telihati, Sreepur, Gazipur-1740, Bangladesh"
  },
  {
    "company_name": "The Palace Luxury Resort",
    "category": "Resort",
    "email": "info@thepalacelife.com",
    "phone_mobile": "01990001000, 01910001000",
    "web": "www.thepalacelife.com",
    "address": "Puttjur, Bahubal, Habiganj, Bangladesh"
  },
  {
    "company_name": "Dhill's Amber Nivaas",
    "category": "Resort",
    "email": "sales@dhallisamberresort.com",
    "phone_mobile": "01708590300, 01708590320",
    "web": "www.dhallisamberresort.com",
    "address": "Baherkochi, Ichapura, Sirajdikhan, Munshiganj, Bangladesh"
  },
  {
    "company_name": "Balishira Resort",
    "category": "Resort",
    "email": "balishiraresort@gmail.com",
    "phone_mobile": "+88 01766557760",
    "web": "www.balishiraresort.com",
    "address": "Radhanagar, Sreemangal, Moulvibazar"
  },
  {
    "company_name": "Reverie Resort",
    "category": "Resort",
    "email": "info@reverie.com.bd",
    "phone_mobile": "01705566335, 01705566336",
    "web": "www.reverie.com.bd",
    "address": "Teck Kathora, Moishanbari, Salna, Gazipur-1703, Bangladesh"
  },
  {
    "company_name": "Jalalpur Eco Resort",
    "category": "Resort",
    "email": "info@jalalpurecoresort.com",
    "phone_mobile": "+88 01977335523-24",
    "web": "www.jalalpurecoresort.com",
    "address": "Jalalpur Road, Katiadl, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Manabay Water Park",
    "category": "Water Park",
    "email": "info@manabay.com",
    "phone_mobile": "09606889999, +88 01958033008",
    "web": "www.manabay.com",
    "address": "Bausia, Gazaria, Munshiganj"
  },
  {
    "company_name": "DuSal Resort & Spa",
    "category": "Resort",
    "email": "rsvn@dusaireorts.com",
    "phone_mobile": "+88-02-996684100-5, +88 01617005511",
    "web": "www.dusaireorts.com",
    "address": "Srimangal Road, Niteshwar, Giashnagar, Moulvibazar"
  },
  {
    "company_name": "Saheb Bari Resort",
    "category": "Resort",
    "email": "sahebbariresort@gmail.com",
    "phone_mobile": "+88 01721163536",
    "web": null,
    "address": "Saheb Bari Road, Dolipara, Rajendrapur Cantonment, Bhawal Ghor Union, Gazipur Sadar, Gazipur-1742, Bangladesh"
  },
  {
    "company_name": "Kishoreganj Resort",
    "category": "Resort",
    "email": "info@kishoreganjresort.com",
    "phone_mobile": "+88 01711541362",
    "web": "www.kishoreganjresort.com",
    "address": "Pashchim Nogua, Hossainpur Road, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Mawa Resort",
    "category": "Resort",
    "email": "mawaresort12@gmail.com",
    "phone_mobile": "01711057947, 01755592585",
    "web": "www.mawaresort.com",
    "address": "Kandlipara Road, Mawa, Munshiganj"
  },
  {
    "company_name": "Grand Selim Resort & Tour",
    "category": "Resort",
    "email": "reservation@grandselimresort.com",
    "phone_mobile": "01709883333, 01678173185",
    "web": "www.grandselimresort.com",
    "address": "Ramnagar, Monipuripara, Sreemangal, Moulvibazar"
  },
  {
    "company_name": "Sarah Resort Ltd.",
    "category": "Resort",
    "email": "reservation@sarahresort.com",
    "phone_mobile": "+88 01969909000",
    "web": "www.sarahresort.com",
    "address": "Rajabari, Rajendrapur, Sreepur, Gazipur-1742, Bangladesh"
  },
  {
    "company_name": "President Resort Ltd.",
    "category": "Resort",
    "email": "info@presidentresortbd.com",
    "phone_mobile": "01810102874, 01810102875",
    "web": "www.presidentresortbd.com",
    "address": "Hossainpur, Bhati Ghagra, Mithamain, Kishoreganj-2371, Bangladesh"
  },
  {
    "company_name": "Meghna Village Holiday Resort",
    "category": "Resort",
    "email": null,
    "phone_mobile": "+88 01718471961",
    "web": null,
    "address": "Baluakandi, Gazaria, Munshiganj, Bangladesh"
  },
  {
    "company_name": "Grand Sultan Tea Resort & Golf",
    "category": "Resort",
    "email": "reservations@grandsultaresort.com",
    "phone_mobile": "+88-02-997738501-3, 09678785959, 01730793501-4, 01730793555",
    "web": "www.grandsultaresort.com",
    "address": "Srimongal, Moulvibazar-3210, Bangladesh"
  },
  {
    "company_name": "Shahidh Eco Resort",
    "category": "Resort",
    "email": "info@shaldaecoresort.com",
    "phone_mobile": "01329640566",
    "web": "www.shaldaecoresort.com",
    "address": "Kathachura, Fulbaria, Kallaokir, Gazipur-1750, Bangladesh"
  },
  {
    "company_name": "DERA Resort & Spa",
    "category": "Resort",
    "email": "deraresort@gmail.com",
    "phone_mobile": "+88 01896001212",
    "web": "www.deraresort.com",
    "address": "Baliyakhora, Manikganj-1800, Bangladesh"
  },
  {
    "company_name": "Magna Villa Holiday Resort",
    "category": "Resort",
    "email": null,
    "phone_mobile": "+88 01718471961",
    "web": null,
    "address": "Baluakandi, Gazaria, Munshiganj, Bangladesh"
  },
  {
    "company_name": "Lemon Garden Resort",
    "category": "Resort",
    "email": "lemongardenresort@gmail.com",
    "phone_mobile": "01779626330, 01758714972",
    "web": "www.lemongardenresort.com",
    "address": "Lawachara Road, Sreemangal, Moulvibazar, Bangladesh"
  },
  {
    "company_name": "Shohag Polli Resort",
    "category": "Resort",
    "email": "info@shohagpoll.com",
    "phone_mobile": "+88 01321213232",
    "web": "www.shohagpoll.com",
    "address": "Kalampur, Kaliakair, Chandra, Gazipur, Bangladesh"
  },
  {
    "company_name": "Shah Marine Resort",
    "category": "Resort",
    "email": "reservation@shahmarineresort.com",
    "phone_mobile": "01729274973",
    "web": "www.shahmarineresort.com",
    "address": "Bokchar, Zamitra, Singair, Manikganj"
  },
  {
    "company_name": "Subarna Bhumi Resort",
    "category": "Resort",
    "email": "info@subarnabhumiresort.com",
    "phone_mobile": "+88 01841921065",
    "web": "www.subarnabhumiresort.com",
    "address": "Ismanir Chor, Hossendi, Gazaria, Munshiganj, Bangladesh"
  },
  {
    "company_name": "Mukta Nagar Resort",
    "category": "Resort",
    "email": "muktanagarresort@gmail.com",
    "phone_mobile": "+88 01776436421",
    "web": "www.muktanagarresort.com",
    "address": "Sherpur, Moulvibazar Sadar, Moulvibazar-3200, Bangladesh"
  },
  {
    "company_name": "Syed Bari Resort",
    "category": "Resort",
    "email": "syedbariresort@gmail.com",
    "phone_mobile": "+88 01841810074",
    "web": null,
    "address": "Gajaripara, Jatio Bhawal Uddan Road, Rajendrapur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Shayan Resort",
    "category": "Resort",
    "email": "info@shayanresort.com",
    "phone_mobile": "+88 01886001133",
    "web": "www.shayanresort.com",
    "address": "Jamrita, Singair, Manikganj, Bangladesh"
  },
  {
    "company_name": "Silver Castle Resort",
    "category": "Resort",
    "email": "info@silvercastleresort.com",
    "phone_mobile": "+88 01810035005",
    "web": "www.silvercastleresort.com",
    "address": "337/2, Dholadia, Taltola, Mymensingh-2200, Bangladesh"
  },
  {
    "company_name": "La Riveria Resort & Park",
    "category": "Resort",
    "email": "larivierairesort@gmail.com",
    "phone_mobile": "+88 01810011142",
    "web": "www.larivierairesort.com",
    "address": "300 Feet Road, Purbachal-Kanchon Bridge, Rupganj, Narayanganj"
  },
  {
    "company_name": "Purbachal Shitalakshya Resort & Park",
    "category": "Resort",
    "email": null,
    "phone_mobile": "+88 01713572087",
    "web": null,
    "address": "Pitalganj Masjid Ghat, Pitalganj, Rupganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Saptarshi Riverside Pvt Resort",
    "category": "Resort",
    "email": "saptarshiresort@gmail.com",
    "phone_mobile": "+88 01810011140",
    "web": "www.saptarshiresort.com",
    "address": "Kanchon Bridge, Purachal, Rupganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Shaira Garden Hotel & Resorts",
    "category": "Hotel & Resort",
    "email": "reservation@shairagardenresorts.com",
    "phone_mobile": "01933700700, 01908809889",
    "web": "www.shairagardenresorts.com",
    "address": "Madanpur, Andhirpar, Opposite of Nazim Uddin Bhuiya University College, Bandar, Narayanganj-1412"
  },
  {
    "company_name": "SH Castle & Resort",
    "category": "Resort",
    "email": "info@schastleresort.com",
    "phone_mobile": "+88 01711681975",
    "web": "www.schastleresort.com",
    "address": "Bandar, Upazila: Bandar, Dhaka-Chittagong Highway, Malibag Station, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Heritage Resort",
    "category": "Resort",
    "email": "rsv1@heritageresortbd.com",
    "phone_mobile": "+8809617181818-19, +88 01404404853-4",
    "web": "www.heritageresortbd.com",
    "address": "Bagan Bari, Madhabdi, Narsingdi-1604, Bangladesh"
  },
  {
    "company_name": "Wonder Park & Eco Resort",
    "category": "Park & Resort",
    "email": "info@wonderparkbd.com",
    "phone_mobile": "+88 01759593166",
    "web": "www.wonderparkbd.com",
    "address": "Morjal, Raypura, Narsingdi-1630, Bangladesh"
  },
  {
    "company_name": "Rupkotha Eco Resort",
    "category": "Resort",
    "email": "restoration@ramdhoopresort.com",
    "phone_mobile": "01730374817",
    "web": "www.ramdhoopresort.com",
    "address": "South Ramchandrapur, Bangla Bazar, Pabna-6600, Bangladesh"
  },
  {
    "company_name": "Ratnodweep Resort",
    "category": "Resort",
    "email": "reservation@ratnodweepresort.com",
    "phone_mobile": "01730318953, 01714160691, 01730374812",
    "web": "www.ratnodweepresort.com",
    "address": "Dhaka Pabna Highway Road, Jalalpur, Pabna-6600, Bangladesh"
  },
  {
    "company_name": "Savpnorajjo Park & Resort",
    "category": "Park & Resort",
    "email": "savpnorajjo park@gmail.com",
    "phone_mobile": "01999801711",
    "web": "www.savpnorajjopark.com",
    "address": "Kalapara, Kuakata, Patuakhali"
  },
  {
    "company_name": "Sikder Resort & Villas",
    "category": "Resort",
    "email": "sikderresort@gmail.com",
    "phone_mobile": "01870704025",
    "web": "www.sikderresort.com",
    "address": "Opposite of ECO Park, Kuakata, Patuakhali-8652, Bangladesh"
  },
  {
    "company_name": "Shada Pathor Hotel & Resort",
    "category": "Hotel & Resort",
    "email": "info@shadapatrohotelresort.com",
    "phone_mobile": "01317355788, 01932291199",
    "web": "www.shadapatrohotelresort.com",
    "address": "Bholaganj, Shada Pathor, Companiganj, Sylhet, Bangladesh"
  },
  {
    "company_name": "Shuktara Nature Retreat",
    "category": "Resort",
    "email": "info@shuktararetreat.com, shuktararetreat@gmail.com",
    "phone_mobile": "01764543535, 01745500766",
    "web": "www.shuktararetreat.com",
    "address": "Uddin Hills, Shahporan Uposhohor, Khadimnagar, Sylhet, Bangladesh"
  },
  {
    "company_name": "TreeTop Sylhet",
    "category": "Resort",
    "email": "treetopbd@gmail.com",
    "phone_mobile": "01711975210, 01916971785",
    "web": "www.treetopbd.com",
    "address": "Jamished Ali Tilla, Lilapara, Kalagul, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Swiss Valley Resort",
    "category": "Resort",
    "email": "swissvalley1@yahoo.com",
    "phone_mobile": "01786493700, 01753167216",
    "web": "www.swissvalleysn.com",
    "address": "Kechukutee, Airport Road, Shamsher Nagar, Moulvi-bazar, Bangladesh"
  },
  {
    "company_name": "Tea Villa Luxury Resort",
    "category": "Resort",
    "email": "teavillaresort@gmail.com",
    "phone_mobile": "01712993633, 01716833633",
    "web": "www.teavillaresort.com",
    "address": "Mazdehee, Bhairabganj Bazar, Sreemangal, Moulvi-bazar, Bangladesh"
  },
  {
    "company_name": "Greenscape Eco Resort",
    "category": "Resort",
    "email": "greenscapesecoresort@gmail.com",
    "phone_mobile": "+88 01962486271",
    "web": "www.greenscapersesort.com",
    "address": "Beltochi Mor, Boroi Bilar Par (Near Shikarkanda), Mymensingh"
  },
  {
    "company_name": "Cafe Eden",
    "category": "Restaurant/Cafe",
    "email": null,
    "phone_mobile": "+88 01300586681",
    "web": null,
    "address": "House #1A, Road #61 & 56, Block #N (F), Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Eurosia Restaurant Limited",
    "category": "Restaurant",
    "email": "eurosiasrestaurant@gmail.com",
    "phone_mobile": "+88 01709371525",
    "web": null,
    "address": "147/1/A, Mirpur DOHS Link Road (Middle of ECB Circle & Mirpur DOHS), Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Khazana Restaurant",
    "category": "Restaurant",
    "email": "restaurant@khazanadhaka.com",
    "phone_mobile": "+88 01711476379",
    "web": "www.khazanadhaka.com",
    "address": "Plot #41, Road #113, Gulshan Model Town, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "Sajna Restaurant",
    "category": "Restaurant",
    "email": "sajnarest@gmail.com",
    "phone_mobile": "01911485766, 01978811684",
    "web": null,
    "address": "House #14, Road #11, Block-H, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Chef's Table Courtside",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01914001497",
    "web": null,
    "address": "United City, Madani Avenue (Near United International University), Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Four Season Restaurant",
    "category": "Restaurant",
    "email": "4seasons@grouprestaurant.com",
    "phone_mobile": "+88-02-41020520-21, +88 01755636264",
    "web": "www.fourseasons.grouprestaurant.com",
    "address": "House #5SA, Road #16 (new), 27 (old), Satmasjid Road, Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Koreana Restaurant",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "01886212334, 01621212334, 01621212335",
    "web": null,
    "address": "House #22, Road #123, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "SALITZ",
    "category": "Restaurant",
    "email": "ranque.saltz@gmail.com",
    "phone_mobile": "01711119692, 01712919015",
    "web": "www.salitzbd.com",
    "address": "Road #99, House #23A, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Chows",
    "category": "Restaurant",
    "email": "info@chowssbd.com",
    "phone_mobile": "+88 01730644444",
    "web": "www.chowssbd.com",
    "address": "Plot #6, Road #19A, Block #E, Banani, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Grand Buffet Restaurant",
    "category": "Restaurant",
    "email": "support@grandbuffetbd.com",
    "phone_mobile": "01913666321",
    "web": "www.grandbuffetbd.com",
    "address": "ANZ Huq Eleven Square, Plot #1, Road #11, Block #H (13th Floor), Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Sky View Restaurant",
    "category": "Restaurant",
    "email": "sales@skyviewrestaurantbd.com",
    "phone_mobile": "+88 01716109829",
    "web": "www.skyviewrestaurantbd.com",
    "address": "Novo Tower (14th & 15th Floor), 270, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Cielo-Rooftop",
    "category": "Restaurant",
    "email": "rooftopcielo@gmail.com",
    "phone_mobile": "+88 01879990001",
    "web": null,
    "address": "Borak Unique Heights, 117 Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Hakka Dhaka",
    "category": "Restaurant",
    "email": "hakka.dhk@gmail.com",
    "phone_mobile": "+88 01616666543",
    "web": null,
    "address": "Navana Rowshan Sayed Plaza, House #47, 4th Floor, Road #11, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Lokunow",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01874050405",
    "web": null,
    "address": "House #35, Road #18, Block #B, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Soil 71",
    "category": "Restaurant",
    "email": "nashra@soil71.net",
    "phone_mobile": "+88 01730315706",
    "web": "www.soil71.net",
    "address": "House #08, Road #101, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Dine Fine",
    "category": "Restaurant",
    "email": "dinefinebd@gmail.com",
    "phone_mobile": "+88 01956200300",
    "web": null,
    "address": "152/2A-2 (1st Floor), Rowshan Tower, Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Hongbao",
    "category": "Restaurant",
    "email": "hongbao@dekkelogacy.com",
    "phone_mobile": "+88 01870111222",
    "web": "www.hongbaobd.com",
    "address": "Floor 1, Suvastu Imam Square, 65, Gulshan Avenue, Dhaka-1212"
  },
  {
    "company_name": "MAnzo",
    "category": "Restaurant",
    "email": "contact@manzodhaka.com",
    "phone_mobile": "+88 01329668880",
    "web": "www.manzodhaka.com",
    "address": "Casablanca Tower (2nd Floor), 114 Gulshan Avenue, Dhaka 1212, Bangladesh"
  },
  {
    "company_name": "Texas Flame",
    "category": "Restaurant",
    "email": "texasflamebd@gmail.com",
    "phone_mobile": "+88 01722233926",
    "web": "www.texasflamebd.com",
    "address": "Point Eleven (BFC Building), House #25, Level-8, Road #11, Block #H, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "EL TORO",
    "category": "Restaurant",
    "email": "info@eltorobd.com",
    "phone_mobile": "+88 01717040005",
    "web": "www.eltorobd.com",
    "address": "House #9/A, Road #36, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Istanbul Restaurant Dhaka",
    "category": "Restaurant",
    "email": "info@istanbulrestaurantbd.com",
    "phone_mobile": "+88 01771000000",
    "web": "www.istanbulrestaurantbd.com",
    "address": "House #10, Road #53, Gulshan Circle-2, Top of Weavers, Lavel-6, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Red Orchid",
    "category": "Restaurant",
    "email": "redorchid0987@gmail.com",
    "phone_mobile": "01314909285",
    "web": "www.redorchidbd.com",
    "address": "400, New Eskaton Road, 3rd Floor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Thai Chi Restaurant & Cafe",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01711901034",
    "web": null,
    "address": "117/A, Rangs Bhaban (Level-7), Old Airport Road, Bijoy Sarani, Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "The Atrium Restaurant",
    "category": "Restaurant",
    "email": "info@atrium-bd.com",
    "phone_mobile": "+88 01712444422",
    "web": "www.atrium-bd.com",
    "address": "50 & 52 Pragati Avenue, Block # J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "The Grove Bistro",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01315063084",
    "web": null,
    "address": "Level-12, Hamid Tower, Gulshan Circle-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Tree House",
    "category": "Restaurant",
    "email": "contact@treehousebd.com",
    "phone_mobile": "+88 01670828528",
    "web": "www.treehousebd.com",
    "address": "Banani Outlet: House # 135, Road # 13/E, Banani, Dhaka-1213, Bangladesh; Dhanmondi Outlet: Level-11, Rangs Fortune Square, Plot # 32, Road # 2, Dhanmondi, Dhaka-1205"
  },
  {
    "company_name": "Weston Restaurant",
    "category": "Restaurant",
    "email": "westonrestaurant17@gmail.com",
    "phone_mobile": "01313766645, 01313766646",
    "web": null,
    "address": "Rupayan Taj (1st Floor), 1-1/1, Box Culvert Road, Nayapaltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Xinxian Restaurant",
    "category": "Restaurant",
    "email": "xinxian.dhan@x-grouprestaurant.com",
    "phone_mobile": "04478778843, +88 01755636263",
    "web": null,
    "address": "House # 7, Road # 8, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Ambrosia Restaurant Ltd.",
    "category": "Restaurant",
    "email": "info@ambrosia.com.bd",
    "phone_mobile": "+88-02-333313576, 333313460, +88 01730008733",
    "web": "www.ambrosiabd.com",
    "address": "Jibon Bima Bhaban, 1053, SK. Mujib Road, Agrabad, Chattogram-4100"
  },
  {
    "company_name": "Barcode Cafe",
    "category": "Cafe",
    "email": null,
    "phone_mobile": "+88 01915333333",
    "web": null,
    "address": "Jalil Building, 62 East Nasirabad B B Road, 2 No. Gate, Chattogram-4212, Bangladesh"
  },
  {
    "company_name": "Bellpepper Restaurant",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01975123020",
    "web": null,
    "address": "63, Zinnurine Complex, Ground Floor, 2 No. Gate, Chattogram-4203"
  },
  {
    "company_name": "Bir Chatalla",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01914240988",
    "web": null,
    "address": "87, Shahid Saifuddin Khaled Roadi, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Broast Cafe",
    "category": "Cafe",
    "email": null,
    "phone_mobile": "+88-02-41360559, +88 01819369233",
    "web": "www.broastcafe.com",
    "address": "Highway Plaza (1st Floor), 679/846 CDA Avenue, Lalkhan Bazar, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Cafe Milano",
    "category": "Cafe",
    "email": null,
    "phone_mobile": "+88 01797579936",
    "web": null,
    "address": "89/309, Yakub Trade Center (Level-i5), Beside Badsha Mia Petrol Pump, East Nasirabad, Chattogram-4226"
  },
  {
    "company_name": "Fusion Eats",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01321117787",
    "web": null,
    "address": "81, Shahid Saifuddin Khaled Roadi, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Grand Mughal Restaurant",
    "category": "Restaurant",
    "email": "grandmughalrestaurant@gmail.com",
    "phone_mobile": "+88 01707007307",
    "web": null,
    "address": "CMP Plaza, Dampara Police Line, Chattogram, Bangladesh"
  },
  {
    "company_name": "Handi Restaurant",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01819342634",
    "web": null,
    "address": "M M Ali Road, Punak Bhaban, CDA Avenue, Chattogram-4000"
  },
  {
    "company_name": "Lemongrass Restaurant",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01717444532",
    "web": null,
    "address": "S. Alam Center, 58 Sabdar Ali Road, Agrabad C/A, Chattogram"
  },
  {
    "company_name": "Meal City",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01707074487",
    "web": null,
    "address": "Equity Centrium, 5th Floor, G.E.C Circle, NCC Bank Building, O. R. Nizam Road, Chattogram-4000"
  },
  {
    "company_name": "Mezzan Halle Aaiun",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01992221100",
    "web": null,
    "address": "123, K.B Fazlul Kader Road, Panchlaish R/A, Chattogram"
  },
  {
    "company_name": "Saffron Restaurant",
    "category": "Restaurant",
    "email": "info@saffronrestaurantbd.com",
    "phone_mobile": "01839366266, 01780149144",
    "web": "www.saffronrestaurantbd.com",
    "address": "Saheb Mea Market, 2nd Floor, 39, Momin Road, Chattogram-4000"
  },
  {
    "company_name": "Silver Spoon",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01701229000",
    "web": null,
    "address": "Sattar Chamber, 99 Agrabad C/A, Commerce College Road, Chattogram"
  },
  {
    "company_name": "Tava Restaurant & Lounge",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01729298282",
    "web": null,
    "address": "4, Zakir Hossain Road, Chattogram"
  },
  {
    "company_name": "Pach Bhai Restaurant",
    "category": "Restaurant",
    "email": "restaurantpanchbhai@gmail.com",
    "phone_mobile": "+88 01711066431",
    "web": "www.pachbhairestaurant.com",
    "address": "Jallarpar Road, Dariapara, Sylhet-3100"
  },
  {
    "company_name": "Panshi Restaurant",
    "category": "Restaurant",
    "email": "panshirestaurant@yahoo.com",
    "phone_mobile": "+88 01893477771",
    "web": null,
    "address": "Jallarpar Road, Zindabazar, Sylhet"
  },
  {
    "company_name": "The Mad Grill",
    "category": "Restaurant",
    "email": "themadgrill1@gmail.com",
    "phone_mobile": "+88 01954556677",
    "web": null,
    "address": "Manik Pir Tila Road, Nayasarak Point, Sylhet, Bangladesh"
  },
  {
    "company_name": "Woondaal King Kebab",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01717020505",
    "web": null,
    "address": "465, East Zindabazar, Sylhet-3100"
  },
  {
    "company_name": "The Arrosto",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01847166370",
    "web": null,
    "address": "1st Floor, 15, O.R Nizam Road, Panchlaish Minar Building, Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "Bikrampur Rice Agency",
    "category": "Rice Agency/Seller",
    "email": "bikrampur.riceagencybd@gmail.com",
    "phone_mobile": "+88 01797053482",
    "web": null,
    "address": "189/2/1, Sultanqori Road, Rayer Bazar, Dhaka"
  },
  {
    "company_name": "The Green Shadow Restaurant",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01799399979",
    "web": null,
    "address": "6th Floor, K.M. Tower, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Kebab Garden",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 01766008874",
    "web": null,
    "address": "Al-Amin Complex, 2nd Floor, Hazrat Shahjalal Road, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Nawab's Kitchen",
    "category": "Restaurant",
    "email": null,
    "phone_mobile": "+88 0173027134",
    "web": null,
    "address": "7, Nayasarak Road, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Dinajpur Rice Agency",
    "category": "Rice Agency/Seller",
    "email": null,
    "phone_mobile": "01716177522, 01919177522",
    "web": null,
    "address": "5, Kamalapur Bazar Road, Dhaka-1217"
  },
  {
    "company_name": "Nazrul Rice Agency",
    "category": "Rice Agency/Seller",
    "email": "ashrafulislam3325@gmail.com",
    "phone_mobile": "01779723412, 01580800421",
    "web": null,
    "address": "95, Wasa Road, East Jurian, Dhaka"
  },
  {
    "company_name": "Sailful Rice Agency",
    "category": "Rice Agency/Seller",
    "email": "saifulriceagency@gmail.com",
    "phone_mobile": "01841222522, 0187777784",
    "web": "www.sailfulrice.com",
    "address": "House # 06, Road # 01, Rajabari, Kamarpara, Turag, Dhaka-1230"
  },
  {
    "company_name": "AR Specialized Auto Rice Mills Pvt. Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "arautoriceimills@gmail.com",
    "phone_mobile": "01878100001, 01878100002",
    "web": null,
    "address": "House #131, Road #04, Block #A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Boshakhi Automatic Rice Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "info@boshakhigroup-bd.com",
    "phone_mobile": "+88 01322854306",
    "web": "www.boshakhigroup-bd.com",
    "address": "Head Office: House #25, Road #47, Suite #A-3, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "City Auto Rice and Dal Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "corporate@citygroupbd.com",
    "phone_mobile": "+8809611611777, 09611611333",
    "web": "www.citygroup.com.bd",
    "address": "Head Office: City House, Plot # NW (J) 06, Road #51, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "NRK Auto Rice Mill Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "nrk.kaiserhamid@gmail.com",
    "phone_mobile": "02-22331118, +88 01714586918",
    "web": "www.nrkriceimill.com",
    "address": "Corporate Office: Wins Court, House #08, Road #14 (New), Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Rashid Automatic Rice Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "info@rashidgcc.com",
    "phone_mobile": "+88-02-48812953-4",
    "web": "www.rashidbd.com",
    "address": "Head Office: Tower of Akash, 7th Floor, N/W, Plot #54, Road #132, Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sahera Auto Rice Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "info@dbg.com.bd",
    "phone_mobile": "+88-02-41081489, 41081495",
    "web": "www.dbg.com.bd",
    "address": "Corporate Office: Mostafa Center, House #59, Road #27, Block #K, Banani, Dhaka-1213"
  },
  {
    "company_name": "Salman Automatic Rice Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "salmanautoric@gmail.com",
    "phone_mobile": "+88 01711185953",
    "web": "www.salmanautoric.com",
    "address": "Malek Mansion (5th Floor), 128 Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shamsul Haque Auto Rice Mills Pvt. Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "info@ovijatfood.com",
    "phone_mobile": "09647000025, +88 01733390331",
    "web": "www.ovijatfood.com",
    "address": "Shadharan Bima Bhaban-2, 139, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "ARF Automatic Rice Mill",
    "category": "Rice Mills (Auto)",
    "email": "arifautomaticriceimill@gmail.com",
    "phone_mobile": "01753974063",
    "web": "www.arifautoricriceimill.com",
    "address": "Head Office: Poschim Singra, Purbo Dhaka Road, Santahar-Adamdighi, Bogura"
  },
  {
    "company_name": "Atahar Ali Auto Rice Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "ataharaliauto@gmail.com",
    "phone_mobile": "01711876088",
    "web": "www.atahar.com",
    "address": "Noy Mail, Demajany, Shahjahanpur, Bogura, Bangladesh"
  },
  {
    "company_name": "Nawab Auto Rice & Feed Mills Pvt. Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "nawabautoric@gmail.com",
    "phone_mobile": "+88 01839904091",
    "web": "www.nawabgroupbd.com",
    "address": "16-22 BSCIC, Shilpo Nogori, Chapainawabganj, Bangladesh"
  },
  {
    "company_name": "S. Alam Auto Rice Mill",
    "category": "Rice Mills (Auto)",
    "email": "s.alamautoricemail@gmail.com",
    "phone_mobile": "+88 01711748128",
    "web": "www.s-alambd.com",
    "address": "Plot #C/35, BASIC I/A, Cumilla-3500"
  },
  {
    "company_name": "AJ Auto Rice Mills Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "ajautoricemillsltd@gmail.com",
    "phone_mobile": "+88 01761587587",
    "web": "www.ajautoricemills.com",
    "address": "Ward #03, Mushidhat (Thanapara), Bochaganj, Dinajpur-5216, Bangladesh"
  },
  {
    "company_name": "Rajpur Auto Rice Mills",
    "category": "Rice Mills (Auto)",
    "email": "info@rajpurautoricemills.com",
    "phone_mobile": "+88 01712552009",
    "web": "www.rajpurautoricemills.com",
    "address": "Kauga Road, Shimultola, Dinajpur-5200, Bangladesh"
  },
  {
    "company_name": "M/S. Golden Rice Mill",
    "category": "Rice Mills (Auto)",
    "email": "goldenoffice.bd@gmail.com",
    "phone_mobile": "+88 01995240523",
    "web": "www.golden.com.bd",
    "address": "Ailchara Bazar, Poradah, Kushtia"
  },
  {
    "company_name": "F.M Auto Rice Mill",
    "category": "Rice Mills (Auto)",
    "email": "fmautoricemail@gmail.com",
    "phone_mobile": "+88 01733351999",
    "web": "www.fmautoricemail.com",
    "address": "Baya Bazar (Airport Road) Airport, Paba, Rajshahi"
  },
  {
    "company_name": "Nabil Auto Rice Mill",
    "category": "Rice Mills (Auto)",
    "email": "info@nabilgroupbd.com",
    "phone_mobile": "+8809612330088",
    "web": "www.nabilgroupbd.com",
    "address": "Head Office: Nabil House, 15/2 Ahmadagor, Sopura, Baolai, Rajshahi, Bangladesh"
  },
  {
    "company_name": "M/S. Tanla Auto Rice Mill",
    "category": "Rice Mills (Auto)",
    "email": "prodhana.agro@gmail.com",
    "phone_mobile": "01713718593, 01711875923",
    "web": "www.prodhangroupbd.com",
    "address": "Sugar Mill's Road, Mohimagonj, Gobindagonj, Gaibandha, Bangladesh"
  },
  {
    "company_name": "Saki Auto Rice Mills Pvt. Ltd.",
    "category": "Rice Mills (Auto)",
    "email": "01823023838",
    "phone_mobile": "01823023838",
    "web": "www.sarmpl.com",
    "address": "Dhakolhati, Sherpur Town, Sherpur-2100, Bangladesh"
  },
  {
    "company_name": "Active Machineries & Engineering Ltd.",
    "category": "Rice Mill Machinery & Parts",
    "email": "info@ameld-bd.com",
    "phone_mobile": "01894947502",
    "web": "www.ameld-bd.com",
    "address": "Head Office: House #1, Road #1, Nikunja-2, khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Brothers International",
    "category": "Rice Mill Machinery & Parts",
    "email": "reza@brothersgrouppbd.net",
    "phone_mobile": "+88-02-223388318, +88 01711594750",
    "web": null,
    "address": "139, Motijheel C/A, Shadharan Bima Bhaban-2 (8th Floor), Dhaka-1000"
  },
  {
    "company_name": "Captains Group",
    "category": "Rice Mill Machinery & Parts",
    "email": "sales@captainsgroup.com.bd",
    "phone_mobile": "+88-02-22296558-4, 01819834857",
    "web": "www.captainsgroup.com.bd",
    "address": "Rahaman Palace (3rd Floor), House # 92, Road # 4, Block # B, Niketon, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "China Bangla Engineers & Consultants Ltd.",
    "category": "Rice Mill Machinery & Parts",
    "email": "cbec.l.info@yahoo.com",
    "phone_mobile": "+88091696752370, +88 01716752370",
    "web": "www.cbecl.info",
    "address": "House # 20, Road # 5, Sector # 6, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "MB Corporation",
    "category": "Rice Mill Machinery & Parts",
    "email": "info@mbcorporationbd.com",
    "phone_mobile": "01711185953, 01719129116",
    "web": "www.mbcorporationbd.com",
    "address": "Malek Mansion (5th Floor), 128 Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Techgen Engineering Ltd.",
    "category": "Rice Mill Machinery & Parts",
    "email": "techgen90@gmail.com",
    "phone_mobile": "+88 01911048757",
    "web": "www.techengengineering.com",
    "address": "Rupsha Tower, Suite # 7A, House # 07, Road # 17, Banani C/A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Al-Arafah Belt House",
    "category": "Roller Chain",
    "email": "alarafahbelthouse@gmail.com",
    "phone_mobile": "01732636146, 01732916985",
    "web": null,
    "address": "234, 235, 235/C, Nawabpur Road, Jabin Tower (1st Floor), Shop # D-8, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Double R Trade",
    "category": "Roller Chain",
    "email": "sadikulsefat798@gmail.com",
    "phone_mobile": "01722225333, 01631324343",
    "web": null,
    "address": "263, Tareque Centre, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Imam-Ul & Brothers",
    "category": "Roller Chain",
    "email": "imamulandbrothers@gmail.com",
    "phone_mobile": "+88 01749282689",
    "web": null,
    "address": "96/97, Nawabpur Road (Kazi Machinery Market), Shop # 06, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Maria Enterprise",
    "category": "Roller Chain",
    "email": "mariaenterprise89@yahoo.com",
    "phone_mobile": "01939750457, 01711931659",
    "web": "www.mariaenterprisebd.com",
    "address": "90, Nawabpur Road (Nawabpur Machineries Market), Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "People's Mill Store",
    "category": "Roller Chain",
    "email": "pms@dhaka.net",
    "phone_mobile": "01711618770, 01713006886",
    "web": "www.peoplesmillstore.com",
    "address": "Office: 38, Nawabpur Road (1st Floor), Dhaka-1100, Bangladesh; Show Room: 27, 43/4 & 228/1 Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Taha Mill Store",
    "category": "Roller Chain",
    "email": "tahamil786@yahoo.com",
    "phone_mobile": "01707842111, 0192482111",
    "web": "www.tahamilstore.com",
    "address": "Office: 100/103, Hazi Samsul Islam Tower, 8th Floor, Nawabpur Road, Dhaka-1100, Bangladesh; Show Room: 100/103, Hazi Samsul Islam Tower, 1st Floor, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "D.B.S Enterprise",
    "category": "Roller Chain",
    "email": "dbsenterprisectg@gmail.com",
    "phone_mobile": "01642998440, 01723360109",
    "web": null,
    "address": "Aziz Kaiyum Building (3rd Floor), Agrabad, Chattogram-4100"
  },
  {
    "company_name": "AZZ Automation Engineering",
    "category": "Rolling Shutter",
    "email": "azzautodoor@gmail.com",
    "phone_mobile": "+88 01902600700",
    "web": "www.azzautodoor.com",
    "address": "Plot # 20, Road # 02, Senpara, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Coeval Technology",
    "category": "Rolling Shutter",
    "email": "mk14924@gmail.com",
    "phone_mobile": "01772967518, 01722551143",
    "web": null,
    "address": "Lane # 8, House # 6, Block # B, Section # 10, Mirpur, Dhaka-1216"
  },
  {
    "company_name": "Intrust",
    "category": "Rolling Shutter",
    "email": "intrust.bd@gmail.com",
    "phone_mobile": "01730592808, 01841592808",
    "web": "www.intrust.com.bd",
    "address": "6 & 156, Mazar Co-operative Market (2nd Floor), Mirpur-1, Dhaka-1216"
  },
  {
    "company_name": "Prime Automation Engineering",
    "category": "Rolling Shutter",
    "email": "primeautomationbd@gmail.com",
    "phone_mobile": "01888000530, 01888000533",
    "web": "www.primeautomationcdoor.com",
    "address": "House # 62, Road # 11, Kallyanpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Sikder Steel Engineering",
    "category": "Rolling Shutter",
    "email": "ssengbd@gmail.com",
    "phone_mobile": "01730252366, 01683999630",
    "web": "www.sikdersteelengineering.com",
    "address": "House # 26, Road # 01, Nalvogh, Turag, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Dhaka Steel Solution",
    "category": "Rolling Shutter",
    "email": "dhakasteelsolution@gmail.com",
    "phone_mobile": "+88 01735776281",
    "web": "www.dhakasteelsolution.com",
    "address": "Salehpur, Aminbazar, Savar, Dhaka"
  },
  {
    "company_name": "Digital Automation BD",
    "category": "Rolling Shutter",
    "email": "digitalautomation247@gmail.com",
    "phone_mobile": "01711045505, 01676696996",
    "web": "www.digitalautomationbd.com",
    "address": "House # 9, Lane-1, Progoti Sarani, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Expert Automation BD",
    "category": "Rolling Shutter",
    "email": "info@expertautomationbd.com",
    "phone_mobile": "+88 01552471133",
    "web": "www.expertautomationbd.com",
    "address": "GP-Cha-173/1, Mohakhali TB Gate, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "SN Corporation",
    "category": "Rolling Shutter",
    "email": "info@sncorporation.com.bd",
    "phone_mobile": "01941822988, 01763723796",
    "web": "www.sncorporation.com.bd",
    "address": "Eastern Plaza, 6th Floor, Sonargaon Road, Hatirpool, Dhaka-1205"
  },
  {
    "company_name": "SR Engineering",
    "category": "Rolling Shutter",
    "email": "srengineeringbd120@gmail.com",
    "phone_mobile": "01826670120, 01768586161",
    "web": null,
    "address": "Sali Pur, Amin Bazar, Savar, Dhaka"
  },
  {
    "company_name": "Beaver UPVC Sheet Industry Ltd.",
    "category": "Roofing Sheet Manufacturers (UPVC)",
    "email": "info@beaverbldtd.com, beaverbldtd@gmail.com",
    "phone_mobile": "01717858143, 01862311146",
    "web": "www.beaverupvc.com",
    "address": "Corporate Office: Level-3, Room # 16/A, BTI Premier Plaza, Pragati Sarani, North Badda, Dhaka-1212"
  },
  {
    "company_name": "Anam Rubber & Plastic",
    "category": "Rubber & Plastic Spare Parts",
    "email": "anamrubberplastic@gmail.com",
    "phone_mobile": "01619302417, 01839302417",
    "web": null,
    "address": "Shop #02, 87 BCC Road, Ifty Sylhet Complex, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Anika Rubber & Plastic",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01712628553",
    "web": null,
    "address": "82, BCC Road, Dhaka-1203"
  },
  {
    "company_name": "A.R. Rubber",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01994880383",
    "web": null,
    "address": "M.R. Khan Market, 22/23, BCC Road, Thatari Bazar, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Beauty Rubber Engineering Works",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01819544732",
    "web": null,
    "address": "87, BCC Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "BM Rubber Industries",
    "category": "Rubber & Plastic Spare Parts",
    "email": "bulbul@bmrubberbd.com",
    "phone_mobile": "02-226637141, 09678800696, +88 01713521813",
    "web": "www.bmrubberbd.com",
    "address": "91, B.C.C Road, Thataribazar, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Desh Bangla Rubber & Plastic",
    "category": "Rubber & Plastic Spare Parts",
    "email": "bulbul@bmrubberbd.com",
    "phone_mobile": "02-226637141, 09678800696, +88 01713521813",
    "web": "www.bmrubberbd.com",
    "address": "58, B.C.C Road, Warri, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Hitech Rubber",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88-02-226637277, 01829012213, 01713030562",
    "web": null,
    "address": "90/1, BCC Road (Thatari Bazar), Wari, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "I.R. Rubber Industries",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01711855153",
    "web": null,
    "address": "91, BCC Road, Thatari Bazar, Dhaka"
  },
  {
    "company_name": "J.R. Rubber Industries",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88-02-226637277, 01829012213, 01713030562",
    "web": null,
    "address": "90, BCC Road, Thatari Bazar, Dhaka"
  },
  {
    "company_name": "Madina Trading",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01711312003",
    "web": null,
    "address": "218, Fazlur Rahman Plaza, Nawabpur, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Meghna Rubber & Engineering",
    "category": "Rubber & Plastic Spare Parts",
    "email": "meghanarubber.engr@gmail.com",
    "phone_mobile": "01817635377, 01919635377",
    "web": null,
    "address": "87, BCC Road, Ifty Sylhet Complex, Thatari Bazar, Wari, Dhaka-1203"
  },
  {
    "company_name": "M.I. Rubber Engineering",
    "category": "Rubber & Plastic Spare Parts",
    "email": "mirubber.bdf@gmail.com",
    "phone_mobile": "01306750090, 01323248661",
    "web": null,
    "address": "51, BCC Road, Thatari Bazar, Wari, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Sattar Rubber & Plastic",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88-02-223359878, +88 01734547583",
    "web": null,
    "address": "74, B.C.C Road, Thatari Bazar, Dhaka"
  },
  {
    "company_name": "S.H. Rubber & Plastic Industry",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01819341510",
    "web": null,
    "address": "20, B.C.C Road, Dhaka-1203"
  },
  {
    "company_name": "Tarek Rubber Enterprise",
    "category": "Rubber & Plastic Spare Parts",
    "email": "thossain21@yahoo.com",
    "phone_mobile": "+88 01725123630, +88 01715602047",
    "web": null,
    "address": "Show Room-1: 107, Nawabpur Road, Arzu Tower, Dhaka-1100, Bangladesh; Show Room-2: 96/97, Nawabpur Road, Kazi Machinery Market, Dhaka"
  },
  {
    "company_name": "Khawaja Rubber Industry Ltd.",
    "category": "Rubber & Plastic Spare Parts",
    "email": "info@khawarjubarrerind.com, khawarjubarrerind5@gmail.com",
    "phone_mobile": "01819317356, 01819611630",
    "web": "www.khawajarubarrerind.com",
    "address": "12/B, Muradpur, Panchlaish, Chattogram, Bangladesh"
  },
  {
    "company_name": "The Dhaka Rubber & Plastic Works",
    "category": "Rubber & Plastic Spare Parts",
    "email": null,
    "phone_mobile": "+88 01626548945",
    "web": null,
    "address": "168/B, Pathantuli 1st Lane, Agrabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "A. H. B International",
    "category": "Rubber Goods Manufacturers & Supplier",
    "email": "saddamhossein6041@gmail.com",
    "phone_mobile": "+88 01758936041",
    "web": null,
    "address": "27/32, Shop #16, Mukttijoddha Model Complex, Madan Pal Lane, Nawabpur, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "BDR Rubber",
    "category": "Rubber Goods Manufacturers & Supplier",
    "email": "sales@bdrrubber.com",
    "phone_mobile": "01771312590, 01840639073, 01716380789",
    "web": "www.bdruber.com",
    "address": "79, B.C.C Road, Thataribazar, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Desh Bangla Rubber & Plastic",
    "category": "Rubber Goods Manufacturers & Supplier",
    "email": null,
    "phone_mobile": "+88-02-223359745, +88 01611577195",
    "web": null,
    "address": "58, B.C.C Road, Warri, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Haque Mill Store",
    "category": "Rubber Goods Manufacturers & Supplier",
    "email": "haquemills@gmail.com",
    "phone_mobile": "+88 0170326538",
    "web": "www.haquemillstore.com",
    "address": "233, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Hasan Rubber & Plastic",
    "category": "Rubber Goods Manufacturers & Supplier",
    "email": null,
    "phone_mobile": "+88 01712835513",
    "web": null,
    "address": "87, BCC Road, Thatari Bazar, Wari, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "J.R. Rubber Industries",
    "category": "Rubber Goods Manufacturers & Supplier",
    "email": "infojrj@gmail.com",
    "phone_mobile": "+88-02-226637277, +88 01940979912",
    "web": null,
    "address": "90, BCC Road, Thatari Bazar, Dhaka"
  },
  {
    "company_name": "Nature Tech",
    "category": "Rubber Sole",
    "email": "info.naturetech@apexhusain.com",
    "phone_mobile": "01762690760, 01762690655",
    "web": "www.naturetechbd.com",
    "address": "Apex House, 18, Khaje Dewan (2nd Lane), Chawkbazar, Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Z Shoes & Accessories Ltd.",
    "category": "Rubber Sole",
    "email": null,
    "phone_mobile": "+88 01313547867",
    "web": null,
    "address": "Corporate Office: House # 498 (3rd Floor), Avenue # 3 Road # 7, Mirpur DOHS, Dhaka-1216"
  },
  {
    "company_name": "Apshora Desire Hair Salon",
    "category": "Salon (Hair Dresser)",
    "email": "lataislam41@gmail.com",
    "phone_mobile": "+88 01962899980",
    "web": null,
    "address": "House # 123 (3rd Floor), Road # 13/A, Zaman Rose Garden, West Dhanmondi, Dhaka"
  },
  {
    "company_name": "Barberette",
    "category": "Salon (Hair Dresser)",
    "email": "dareyoudye@gmail.com",
    "phone_mobile": "+88 01600330828",
    "web": null,
    "address": "27, Shaptak Square, Plot # 02, Road # 16, Dhanmondi, Dhaka, Bangladesh"
  },
  {
    "company_name": "Eve Salon",
    "category": "Salon (Hair Dresser)",
    "email": "evesalon@gmail.com",
    "phone_mobile": "+88 01919627183",
    "web": null,
    "address": "House # 11A, Road # 130, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Hair Box",
    "category": "Salon (Hair Dresser)",
    "email": "hairbox2016@gmail.com",
    "phone_mobile": "+88 01735915519, +88 01997505885, +88 01978388877",
    "web": "www.hairboxpremiumsalon.com",
    "address": "Gulshan Branch: Rupayan Golden Age, 1st Floor, 99 Gulshan Avenue, Dhaka-1212; Baridhara Branch: Madani Avenue, 100 Feet Road, Baridhara, Block # J, Dhaka-1212; Uttara Branch: House # 5 (2nd Floor), Near Kabab Factory, Sector # 07, Lake Drive Road, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Heaven Salon Banani",
    "category": "Salon (Hair Dresser)",
    "email": null,
    "phone_mobile": "+88 01794507488",
    "web": null,
    "address": "House # 77, Road # 12, Block # E, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Menz Crown",
    "category": "Salon (Hair Dresser)",
    "email": "info@menzcrown.com",
    "phone_mobile": "+88 01799335511",
    "web": "www.menzcrown.com",
    "address": "Shop # 10, Rupayan Golden Age (Ground Floor), 99 Gulshan Avenue, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Rejuvenate",
    "category": "Salon (Hair Dresser)",
    "email": "rejuvenate.gulshan@gmail.com",
    "phone_mobile": "+88 01406699612",
    "web": "www.rejuvenatedbd.com",
    "address": "House # 26 Road # 90, Gulshan-2, Gulshan Center Point, Ground Floor, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "ScissorHand",
    "category": "Salon (Hair Dresser)",
    "email": "info@scissor-hand.com",
    "phone_mobile": "+88 01755501130",
    "web": "www.scissor-hand.com",
    "address": "Plot # 11, 4th Floor, Paradise Tower, Dhaka-Mymensingh Road, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "ASA Salon",
    "category": "Salon (Hair Dresser)",
    "email": null,
    "phone_mobile": "+88 01894444266",
    "web": null,
    "address": "22-23, J.B.C Shopping Center, Station Road, Chattogram, Bangladesh"
  },
  {
    "company_name": "Hair & Care",
    "category": "Salon (Hair Dresser)",
    "email": null,
    "phone_mobile": "+88 01880320023",
    "web": null,
    "address": "APDL Baten, 26 Nawab Sirajuddaula Road, Anderkilla, Chattogram"
  },
  {
    "company_name": "Munna & Guys",
    "category": "Salon (Hair Dresser)",
    "email": null,
    "phone_mobile": "0189897799, 01837899899",
    "web": null,
    "address": "Mobarok House, 42 M.M Ali Road, Dampara WASA Circle, Chattogram"
  },
  {
    "company_name": "ACI Salt Limited",
    "category": "Salt Industries",
    "email": null,
    "phone_mobile": "+88-02-55068511-14",
    "web": null,
    "address": "ACI Centre 245, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "BMC Super Salt Ltd.",
    "category": "Salt Industries",
    "email": "bmc.com.bd@gmail.com",
    "phone_mobile": "+88 01313444550",
    "web": "www.bmc.com.bd",
    "address": "House # KA-24, Pragati Sarani, A Mozid Tower, 4th Floor, Kuril, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Krishibid Salt Ltd.",
    "category": "Salt Industries",
    "email": "info@krishibidgroup.com",
    "phone_mobile": "+88 09609008789",
    "web": "www.krishibidgroup.com",
    "address": "801, Rokeya Sarani, Kazipara, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Molla Salt Ltd.",
    "category": "Salt Industries",
    "email": "info@molla.com.bd",
    "phone_mobile": "+88-02-9899862, 9899862",
    "web": "www.molla.com.bd",
    "address": "House # 09, Road # 23/B, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Mostafa Salt Industries Ltd.",
    "category": "Salt Industries",
    "email": null,
    "phone_mobile": "+88-02-9825919, 9857221, +88 01972880446",
    "web": null,
    "address": "Dhaka Office: House # 39, Road # 24, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sonargaon Salt Industries Ltd.",
    "category": "Salt Industries",
    "email": "info@mgi.org",
    "phone_mobile": "+8809666777055",
    "web": "www.mgi.org",
    "address": "Head Office: Fresh Villa, House # 15, Road # 34, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Everest Wood Working Machine's",
    "category": "SAW MILL MACHINE",
    "email": "everestwoodworkingmachine@gmail.com",
    "phone_mobile": "+88 0197498079",
    "web": "",
    "address": "Ka-43/2-A Bir Uttam Rafiqul Islam Avenue, Shahjadpur, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Barishal Saw Mill",
    "category": "SAW MILLS",
    "email": "",
    "phone_mobile": "+88 01711526907",
    "web": "",
    "address": "Cha-87, North Badda, Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Dhaka Bismillah Timber Traders & Saw Mill",
    "category": "SAW MILLS",
    "email": "",
    "phone_mobile": "01742242584, 01911404748",
    "web": "",
    "address": "La/3/B, Progati Sarani, Merul Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Ratna Timber & Saw Mill",
    "category": "SAW MILLS",
    "email": "",
    "phone_mobile": "+88 01759707070",
    "web": "",
    "address": "428/429, East Podordiya, Near Satarkul Bridge, Dhaka-1212"
  },
  {
    "company_name": "Rupali Timber & Saw Mill",
    "category": "SAW MILLS",
    "email": "",
    "phone_mobile": "+88 01552639762",
    "web": "",
    "address": "Ka-32, 5 Bir Uttam Rafiqul Islam Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sagor Timber & Saw Mill",
    "category": "SAW MILLS",
    "email": "",
    "phone_mobile": "+88 01949808018",
    "web": "",
    "address": "Plot # 14, Lane # 22, Satarkul Road, Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Welcome Timber & Saw Mill",
    "category": "SAW MILLS",
    "email": "",
    "phone_mobile": "01532749370, 01532749371",
    "web": "",
    "address": "L-3, Merul Badda, D.I.T Road, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Mojibur Timber & Saw Mill Ltd.",
    "category": "SAW MILLS",
    "email": "mojiburtimberbd@gmail.com",
    "phone_mobile": "01711546613, 01708590400, 01708590405, 01708590406",
    "web": "www.mojiburgroup.com",
    "address": "Dighirpar Bazar (Loha Kath Potti), Central Jame Mosque Road & Central Bus Stand Road, Dighirpar, Tongibari, Munshiganj-1525"
  },
  {
    "company_name": "Arambag High School & College",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "arambag@gmail.com",
    "phone_mobile": "+88-02-41070930, 01714054584, 01309108589",
    "web": "www.arambaghsc.edu.bd",
    "address": "Arambag, Motijheel, Dhaka-1000"
  },
  {
    "company_name": "An-Naf Green Model High School",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "",
    "phone_mobile": "+88 01819271121",
    "web": "",
    "address": "15, North Manda (Khalpar), Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "Glory School & College",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "glorycollege@gmail.com",
    "phone_mobile": "+88-02-48034925, +88 01715537311",
    "web": "www.glorycollege.edu.bd",
    "address": "Main Campus: House # 07, Road # 08, Block # C, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "HEED Bangladesh",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "heed@agni.com",
    "phone_mobile": "+88 01713276478",
    "web": "www.heed-bangladesh.com",
    "address": "Plot # 19, Main Road, Block # A, Section-11, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Holy Cross Girls High School",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "",
    "phone_mobile": "+88-02-48119743",
    "web": "",
    "address": "Tejgaon, Dhaka, Bangladesh"
  },
  {
    "company_name": "Ideal School & College, Motijheel",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "iscmdhaka@gmail.com",
    "phone_mobile": "+88-02-48310177",
    "web": "www.iscm.edu.bd",
    "address": "Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "IQRA Bangladesh School",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "ibsmbinfo@gmail.com",
    "phone_mobile": "+88 01620008073",
    "web": "www.iqrabangladesh.com",
    "address": "1/G, East Rampura, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Life Preparatory School",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "preparatorylife@gmail.com",
    "phone_mobile": "+88 01716191113",
    "web": "www.lps.com.bd",
    "address": "House # 13, Road # 16, Sector # 06, Uttara, Dhaka-1230"
  },
  {
    "company_name": "National Ideal School Uttara",
    "category": "SCHOOL (BANGLA MEDIUM)",
    "email": "nisuttara@gmail.com",
    "phone_mobile": "+88-02-55093863, 01181295256, 01741163653",
    "web": "",
    "address": "House # 111, Road # 19, Sector # 14, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Academia School Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "academialschool202@academiabd.com, academiadhamondi@academiabd.com",
    "phone_mobile": "01678308554, 01621444777, +88 01678308574",
    "web": "www.academiaschool.edu.bd",
    "address": "Lalmatia Campus: House # 6/10, Block # F, Lalmatia, Dhaka-1207; Dhanmondi Campus: House # 33, Road # 9/A, Dhanmondi R/A, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "American International School Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@aisdhaka.org",
    "phone_mobile": "+88-02-41081837, 41081836",
    "web": "www.aisdhaka.org",
    "address": "12 United Nations Road, Dhaka-1212"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623345",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhanikhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Viquarninsa Noon School & College",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "www.vnc.edu@gmail.com",
    "phone_mobile": "02-58310500, 48317513, 01867264282, 01866785183",
    "web": "www.vnc.edu.bd",
    "address": "1/A, New Bailey Road, Ramna, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "SunUp International School & College",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "sunup.edu@gmail.com",
    "phone_mobile": "+88 01711223609, +88 01711133586",
    "web": "www.sunup.edu.bd",
    "address": "Campus-1: 93, N.S. Road, Thana Traffic More (Bak Chattar), Kushtha-7000, Bangladesh; Campus-2: 1/72, Jayanal Abedin Lane, Courtpara Kushtha, Bangladesh"
  },
  {
    "company_name": "Averroes International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@aisd.edu.bd",
    "phone_mobile": "01954123123, 01975430682, +88 01896183302, 01308983458, 01780499239",
    "web": "www.aisd.edu.bd",
    "address": "Head Office & Lamatia Branch: House # 7/16, Block # B, Lamatia Mohammadpur, Dhaka-1207; Mirpur Branch: 19/6, Pallabi, Section-12, Mirpur, Dhaka-1216; Uttara Branch: House # 03, Road # 07, Sector # 07, Uttara, Dhaka-1230"
  },
  {
    "company_name": "BACHA English Medium School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "office@bemsbd.org",
    "phone_mobile": "+88 02-48119240",
    "web": "www.bachabd.com",
    "address": "105/4 Monipuripara, Tejgaon, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "SANDWICH PANEL TECHNOLOGY",
    "email": "",
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": ""
  },
  {
    "company_name": "Bangladesh International School & College",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "bisschool@yahoo.com, office@bisc.com.bd",
    "phone_mobile": "++88-02-22286056, 222260621, 222288413, 01769018352, 01769018351",
    "web": "www.bisc.com.bd",
    "address": "Road # 27, DOHS, Mohakhali, Dhaka Cantonment, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Brighton International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "contact@brightonschoolbd.com",
    "phone_mobile": "01711180232, 01325075444",
    "web": "www.brightonschoolbd.com",
    "address": "House # 780/24/D, Bosila Road, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "British Standard School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@bssbd.org",
    "phone_mobile": "01798777772, 01979877773",
    "web": "www.bssbd.org",
    "address": "Dhanmondi Main Campus: House # 37/1, Road # 05, Dhanmondi R/A, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Canadian International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@canadaeducationbd.com",
    "phone_mobile": "+88 01841461000, +88 01841461999",
    "web": "www.canadaeducationbd.com",
    "address": "Senior Campus: Plot # 110, Road # 27, Block # A, Banani, Dhaka-1213, Bangladesh; Junior Campus: Plot # NE (B)-3B Road # 74, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Cardiff International School Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "cardiff@cisdbd.net",
    "phone_mobile": "01313485800-1, 01324436170",
    "web": "www.cisdbd.net",
    "address": "Campus-1 (Senior): House # 60/A, Road # 27 (Old) 16(New) Dhanmondi, Dhaka-1209; Campus-2 (Junior): House # 11, Road # 28 (Old) 15 (New) Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "DPS STS School Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@dpsstsdhaka.org",
    "phone_mobile": "01844277245, 01844277244, 01844277241, 01844277242",
    "web": "www.dpsstsdhaka.org",
    "address": "Junior Campus: Plot # 4, Road # 13, Sector # 6, Uttara, Dhaka-1230; Senior Campus: Plot # ED-01, Road # 1, Sector # 15, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Ebenezer International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "eisdhaka@gmail.com",
    "phone_mobile": "+88 01896189239",
    "web": "www.ebenezersibd.com",
    "address": "Plot # 288/A, Road # 15, Block # C, Bashudhara R/A, Dhaka-1229"
  },
  {
    "company_name": "French International School of Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "mizanur.rahman@aefe.fr",
    "phone_mobile": "+88 01713090457",
    "web": "",
    "address": "Plot # 13, Embassy Road, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Glenrich International School, Satarkul",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@glenrich.edu.bd",
    "phone_mobile": "+8809677444777",
    "web": "www.glenrich.edu.bd",
    "address": "Plot # E-2 & E-3, Road # 80, Sunvalley Sarani, Block # A, Sector # 01, Sunvalley Residential, Satarkul Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Grace International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "serve@grace.edu.bd, admissions@grace.edu.bd",
    "phone_mobile": "01713303468, 01713049952, 0171922355, 01755582355",
    "web": "www.grace.edu.bd",
    "address": "House # 68, Road # 02, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Guldance International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@guldance.edu.bd",
    "phone_mobile": "+88-02-48812164, 48812165, 01322547575, 01749236348",
    "web": "www.guldance.edu.bd",
    "address": "Campus-1: House # 6, Road # 24, Gulshan-1, Dhaka-1212, Bangladesh; Campus-2: House # 8, Road # 24, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "International Hope School Bangladesh",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@ihsb.edu.bd",
    "phone_mobile": "+88-02-48956999, 48953722-3",
    "web": "www.ihsbd.net",
    "address": "Plot # 7, Road # 6, Sector # 4, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "International School Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@isdbd.org",
    "phone_mobile": "01819231100, 01847265720",
    "web": "www.isdbd.org",
    "address": "Plot # 80, Block # E, Bashundhara R/A, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Security/Fire Safety",
    "email": "info@greenmountainsbd.com",
    "phone_mobile": "+88 01819250990, 01816334225",
    "web": "www.greenmountainsbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (109 Feet Road), Notun Basar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Mangrove School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "mangrove.school@gmail.com",
    "phone_mobile": "+88 01796259584-5",
    "web": "www.mangrove.school",
    "address": "7/B, Block-D, Lamatia, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Mastermind",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "admin@mastermindschool.org",
    "phone_mobile": "+88-02-55026528, 55026529, 58155196, 58153675, 01309759700, 01712508981",
    "web": "www.mastermindschool.org",
    "address": "Dhanmondi Campus: House # 05, Road # 12 (New), Dhanmondi, Dhaka-1209, Bangladesh; Uttara Campus: House # 39, Gausal Azam Avenue, Sector # 14, Uttara, Dhaka-1230"
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator Services",
    "email": "",
    "phone_mobile": "",
    "web": "www.hyundailelevatorltd.com",
    "address": ""
  },
  {
    "company_name": "Royal School Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "royalschooldhaka@edu.bd, royalschooldhaka2022@gmail.com",
    "phone_mobile": "09610999001, +88 01843749284",
    "web": "www.royalschooldhaka.edu.bd",
    "address": "2066, Ferojitola, Vatara, Dhaka"
  },
  {
    "company_name": "Scholastica",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "seniorsection_uttara@scholasticabd.com, farah_ahmed@scholasticabd.com, junior_uttara@scholasticabd.com, senior_mirpur@scholasticabd.com, junior_dhanmondi@scholasticabd.com, junior_gulshan1@scholasticabd.com, junior_banani@scholasticabd.com",
    "phone_mobile": "+88-02-41091391-96, +88 01819252813, +88-02-48956751-53, +88 01841792333, +88-02-41000101-06, +88 01819252815, 02-222243354, 48119095, 41021424, 41021425, +88 01819252807, +88-02-222286111, 58817096, +88 01819413141, 02222296020, 02222290019, +88 01894802393",
    "web": "www.scholasticabd.com",
    "address": "Multiple campuses in Uttara, Mirpur, Dhanmondi, Gulshan, Banani, Dhaka"
  },
  {
    "company_name": "South Breeze School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@southbreezeschoolbd.com",
    "phone_mobile": "+88 01714235839, +88 01754848152, +88 01713077094",
    "web": "www.southbreezeschoolbd.com",
    "address": "Dhanmondi Campus (Junior): House # 74, Road # 7A, Dhanmondi, Dhaka-1209, Bangladesh; Lalmatia Campus (Senior): House # 6/11, Block # F, Lalmatia (on Satmasjid Road), Dhaka-1207; Uttara Campus: House # 51, Road # 12, Sector # 11, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Springdale International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "admissions@springdeladhaka.org",
    "phone_mobile": "01407076608, 01407076609, 01407076610",
    "web": "www.springdeladhaka.org",
    "address": "Junior Campus: Road # 55, House # 11/A, Gulshan-2, Dhaka-1212; Senior Campus: Road # 76, House # 22, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "Sunbeams School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@sunbeams.edu.bd",
    "phone_mobile": "+88 01841777737, +88 01727343088",
    "web": "www.sunbeams.edu.bd",
    "address": "Dhanmondi Campus: House # 51, Road # 16, Dhanmondi, Dhaka-1205, Bangladesh; Uttara Campus: Plot # 6-12, Road # 13/A, Sector # 10, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Sunnydale School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "socialmedia@sunnydale.edu.bd",
    "phone_mobile": "+88 01324430197",
    "web": "www.sunnydale.edu.bd",
    "address": "Head Office: Plot # 19A, Road # 13, Block # G, Bashundhara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "The Aga Khan School, Dhaka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "inquiries@aksd.edu.bd",
    "phone_mobile": "+88-02-48959722",
    "web": "",
    "address": "Road # 6A, Sector # 4, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Chittagong Grammar School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "upperschool@cgs.com.bd, middleschool@cgs.com.bd, lowerschool@cgs.com.bd",
    "phone_mobile": "+88-02-333362472, 333355200, +88-02-333361078, 333350929, +88-02-33336536, +88 01850313928",
    "web": "www.cgs.com.bd",
    "address": "Upper School: 321/11 Sarson Road, Chattogram, Bangladesh; Middle School: Surson Valley, 448/B Joy Nagar Chattesswari Road, Chattogram; Lower School: 39, K.B. Fazlul Kader Road, Chattogram, Bangladesh"
  },
  {
    "company_name": "Japan International Dream School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "jids.dream@gmail.com",
    "phone_mobile": "01719847556, 01762083119",
    "web": "",
    "address": "Narayankul, Pubail, Gazipur Sadar"
  },
  {
    "company_name": "Pledge Harbor International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "admissions@pledgeharbor.org",
    "phone_mobile": "01713657831, 01713258899",
    "web": "",
    "address": "School Campus: Singer Dighi, Mawna, Gazipur-1741, Bangladesh; Admission Office: Le Méridien Dhaka (6th Floor), 79/A Commercial Area, Airport Road, Nikunja-2, Dhaka-1229"
  },
  {
    "company_name": "Haileybury Bhaluka",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "admissions@haileybury.com.bd",
    "phone_mobile": "+88 01321155000-02",
    "web": "www.haileybury.com.bd",
    "address": "Damshur Mallikbari, Mamarshipur, Bhaluka, Mymensingh-2240"
  },
  {
    "company_name": "International Hope School Bangladesh",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "",
    "phone_mobile": "01772511783, 01772511784",
    "web": "",
    "address": "77/A, East Nasirabad, Chattogram"
  },
  {
    "company_name": "Anandaniketan School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "anandaniketan@gmail.com",
    "phone_mobile": "+88 01709903500",
    "web": "www.ans.eshkul.com",
    "address": "West Subidbazar, Sylhet, Bangladesh"
  },
  {
    "company_name": "Bless International School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@blessbd.com",
    "phone_mobile": "+88 01732656767",
    "web": "www.blessbd.com",
    "address": "72 Ornab, Police Line Road, Mirer Moydan, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Jaffong Valley Boarding School",
    "category": "SCHOOL (ENGLISH MEDIUM)",
    "email": "info@jvbsbd.com",
    "phone_mobile": "01958496301, 01958496315, 01307090424",
    "web": "www.jvbs.edu.bd",
    "address": "Sreepur, Jaintapur, Sylhet, Bangladesh"
  },
  {
    "company_name": "A. Rahman Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "arahmanscientific2011@gmail.com",
    "phone_mobile": "01712535320, 01723470529, 01705385462",
    "web": "www.arahmanscientific.com",
    "address": "52/2, Toynbee Circular Road, Mamun Mansion (Ground Floor), Ittefaq Moor, Tikatuli, Dhaka-1203"
  },
  {
    "company_name": "Advance Technology System",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "atsbd.dk@gmail.com",
    "phone_mobile": "+88 01848305111-3",
    "web": "www.atsdhaka.com",
    "address": "Paramount Concord (3rd Floor), 9,9/1 & 9/2 Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Aleef Surgical Ltd.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "sale@aleefsurgical.com",
    "phone_mobile": "+88-02-41000286, 01713992472, 01713588554",
    "web": "www.aleefsurgical.com",
    "address": "Plot # C/35, Purobi Super Market (1st Floor), Main Road, Mirpur-11, Palbali, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Alfa Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "alfa.scientificbd@gmail.com",
    "phone_mobile": "0188052068, 01880852067",
    "web": "www.alfascientificbd.com",
    "address": "33/3, Hatchola Road, Dhaka-1203"
  },
  {
    "company_name": "Al-Noor Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "alnoor_scientific15@yahoo.com",
    "phone_mobile": "01727255375, 01923755672",
    "web": "www.alnoorscientific.com.bd",
    "address": "27, Rasel Center (1st Floor), Hatchola Road, Tikatuly, Dhaka-1203"
  },
  {
    "company_name": "Arnica Scientific Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "arnicascientific@yahoo.com",
    "phone_mobile": "01818418027, 01708524766",
    "web": "",
    "address": "Summer Center (Ground Floor), 33/3 Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Bangladesh Scientific Instrument Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "bssibd@citech.net",
    "phone_mobile": "+88-02-22338324, 223355490, +88 01819214243",
    "web": "www.bscibd.com",
    "address": "Rahmania International Complex, 28/1/C Toyenbee Circular Road, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Bangladesh Science & Technologies Solution",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "bsts.bd@gmail.com",
    "phone_mobile": "+88 01711109174",
    "web": "",
    "address": "32, Shahid Nazrul Islam Road, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Bismillah Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "sbismillahscientific@gmail.com",
    "phone_mobile": "+88-02-223355137, 01715223455, 01844991681-9",
    "web": "www.bismillahscientific.com",
    "address": "Corporate Office: 33/1, Shahid Nazrul Islam Sarak (5th Floor), Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Bright Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "brightscientific@gmail.com",
    "phone_mobile": "+88-02-223354019, 01711285976, 01884502294",
    "web": "www.brightscientific.com",
    "address": "32/1, Shahid Nazrul Islam Sarak, Hatchola Road, Tikatuly, Dhaka-1203"
  },
  {
    "company_name": "Bukhari Scientific & Surgical Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "bukhariscientific@gmail.com",
    "phone_mobile": "01732698890, 01812601836",
    "web": "www.bukhariscientific.com",
    "address": "Shop # 21, Kader Tropical Height, 10, Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Capital Scientific Industries",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "capitalscientificindustries@gmail.com",
    "phone_mobile": "01711019851, 01715664218",
    "web": "",
    "address": "27, Hatchola Road (Russell Center), Shop # 41, Tikatuli, Dhaka-1203"
  },
  {
    "company_name": "Continental Surgical House",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "info@continentalsurgicalbd.com",
    "phone_mobile": "+88 01709291440",
    "web": "www.continentalsurgicalbd.com",
    "address": "15/2, Topkhana Road, BMA Bhaban, Shop # 305 (2nd Floor), Dhaka-1000"
  },
  {
    "company_name": "Dhaka Scientific Instrument Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "dhakasscientific@discbd.com",
    "phone_mobile": "01816679186, 01811900441",
    "web": "www.discbd.com",
    "address": "Mukto Bangla Shopping Complex, Plot # 4, Suite # 391 (4th Floor), Mazar Road, Mirpur-1, Dhaka-1216"
  },
  {
    "company_name": "Dynam Science & Chemical Ltd.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "dymonbd@gmail.com",
    "phone_mobile": "+88 01714983039",
    "web": "",
    "address": "31, Shahid Nazrul Islam Sarak (Hatchola Road), Mamun Plaza, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "F.M. Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "fmscientific123@yahoo.com",
    "phone_mobile": "01678575959, 01684239794",
    "web": "",
    "address": "33/3, Hatchola Road, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Dymon Science Park",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "dymon@agni.com",
    "phone_mobile": "+88 01713066605",
    "web": "www.dymonbd.com",
    "address": "Delawar Complex, 26, Shahid Nazrul Islam Sarak (Hatchola Road), Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Elite Scientific & Meditech Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "elitetradebd@gmail.com",
    "phone_mobile": "01711196910, 01302993332, 01302983306",
    "web": "elitetradebd.com",
    "address": "Head Office: Russell Center (2nd Floor), 27, Shahid Nazrul Islam Road, Hatchola, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "FRS Scientific Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "frscientificcompany@gmail.com",
    "phone_mobile": "01786241211, 0170703024",
    "web": "www.frscientific.com",
    "address": "2/2 RK Mission Road, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "General Scientific Instruments Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "01754069874, 01737108578",
    "web": "",
    "address": "32, Shahid Nazrul Islam Sarak, Hatchola Road, Dhaka-1203"
  },
  {
    "company_name": "Glassco Scientific & Analytical Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "glasscoscientific@gmail.com",
    "phone_mobile": "+88 01715130348",
    "web": "www.gsac.com.bd",
    "address": "Salahuddin Bhaban, 34/2, Shahid Nazrul Islam Sarak, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "SIGMA LIFT COMPANY LTD.",
    "category": "Elevator Services",
    "email": "",
    "phone_mobile": "",
    "web": "",
    "address": ""
  },
  {
    "company_name": "Globe Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01745287772",
    "web": "",
    "address": "33/3, Summer Center, Hatchola Road, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Goodluck Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01844942292",
    "web": "",
    "address": "31, Mamun Plaza, Shahid Nazrul Islam Sharak, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Hatchola Scientific",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "farukhatkhola@gmail.com",
    "phone_mobile": "01615040180, 01615040181, 01715040180",
    "web": "www.hatkholascientific.com",
    "address": "Delowar Complex, 26, Hatchola Road (2nd Floor), Shop # 19, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Japan Digital Scientific Store",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "info@japanscientificbd.com",
    "phone_mobile": "01670814556, 01970814556",
    "web": "www.japanscientificbd.com",
    "address": "33/3, Hatchola Road, Dhaka-1203"
  },
  {
    "company_name": "Jonaki Scientific Store",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "jonakiscientific@gmail.com",
    "phone_mobile": "+01715315133, 01711561687",
    "web": "www.jonakiscientific.com",
    "address": "31, Shahid Nazrul Islam Sarak (Hatchola), Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "K.M Scientific Stores",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01817537074",
    "web": "",
    "address": "27 Russell Center, Shop # 34, 35, Shahid Nazrul Islam Sarak, Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Kuri & Company (Pvt.) Ltd.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "info@kuricompanys.com, sales@kuricompanys.com",
    "phone_mobile": "+88-02-223389062, +88 01670738852",
    "web": "www.kuricompanys.com",
    "address": "78, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Lab Asia",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "info@labasiabd.com, labasia2020@gmail.com",
    "phone_mobile": "+01715723388, 01885702014",
    "web": "www.labasiabd.com",
    "address": "34/A, Al-Noor Center (Ground Floor), Shop # 1, Ittefaq Moor, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Labtex Bangladesh",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "labtexbangla@gmail.com",
    "phone_mobile": "+01725696603, 01710136523",
    "web": "www.labtexbd.com",
    "address": "Eastern Kamlapur Complex (2nd Floor), 64-68, North Kamalapur, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Labtex Scientific World",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "info@labtextscientific.com, sales.labtex@gmail.com",
    "phone_mobile": "+01660147524, 01734683895",
    "web": "www.labtextscientific.com",
    "address": "10, Kader Tropical, Shahid Nazrul Islam Sarak, Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Master Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "mscbd.dk@gmail.com",
    "phone_mobile": "+01711446892, 01911848015",
    "web": "",
    "address": "33/3, Summer Centre & 27, Shahid Nazrul Islam Road, Hatchola, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Mission Scientific Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "mscobd@yahoo.com",
    "phone_mobile": "+01819200176, +01919200176",
    "web": "",
    "address": "33/3, Hatchola Road, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Modern Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+01711042619, 01727210089",
    "web": "",
    "address": "27, Hatchola Road (Russell Center), Tikatuly, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Monpura Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01716649693",
    "web": "",
    "address": "27, Rasel Center, Hatchola Road, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "National Scientific Corporation",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "nscbd@hotmail.com",
    "phone_mobile": "+01776233191, 01611833865",
    "web": "www.nscbd.com",
    "address": "House # 10, Road # 02, Sector # 06, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "N.S. Scientific Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01712839625",
    "web": "",
    "address": "32/1, Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Octopass Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "octopass_scientific1@yahoo.com, octopass.scientific1@gmail.com",
    "phone_mobile": "+88-02-223390763, +01711934592, 01817090552",
    "web": "www.octopassscientific.com",
    "address": "33/2, Hatchola Road, Zakaria Bhaban (Ground Floor), Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Ploneer Scientific Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "ploneersc7@gmail.com",
    "phone_mobile": "+01712420240, +01916002551",
    "web": "www.pscsale.com",
    "address": "House # 23, Road # 03, Sector # 10, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Platinum Scientific Company",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "platinumscientific@gmail.com",
    "phone_mobile": "+01682220887, +01756815617",
    "web": "",
    "address": "34/A, Al-Noor Center (Ground Floor), Shahid Nazrul Islam Sarak, Tikatuly, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Royal Scientific Store",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01712826361",
    "web": "",
    "address": "34, Hatchola Road (Science Complex), Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Padma Scientific Co.",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "padmascientificco@gmail.com",
    "phone_mobile": "+01720342211, +01312497470",
    "web": "www.padmascientificbd.com",
    "address": "Ittefaq Moor, Mamun Mansion (Gr. Floor), 52/2, Toyenbee Circular Road, Hatchola, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "RTC Trade International",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "rtcdhaka2013@gmail.com",
    "phone_mobile": "+88 01831016720",
    "web": "www.rtcdhaka.com",
    "address": "Russel Center, 27 Hatchola Road, Tikatuly, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Rupali Scientific Stores",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "",
    "phone_mobile": "+88 01711019065",
    "web": "",
    "address": "Shop # 18/19, 27 Rasel Center, Hatchola, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "ST International",
    "category": "SCIENTIFIC EQUIPMENT/INSTRUMENTS/PRODUCTS",
    "email": "shop.stinternationalbd@gmail.com",
    "phone_mobile": "+88 01715575665",
    "web": "www.stinternationalbd.com",
    "address": "Shop # G-12, Mamun Mansion, 52/2, Toyenbee Circular Road, Hatchola, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "S.A Safety Solution",
    "category": "SAFETY EQUIPMENT",
    "email": "",
    "phone_mobile": "01920588727, 01672424759, 01818086888",
    "web": "",
    "address": "113, Akbori Machinery Market, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Safety Gallery",
    "category": "SAFETY EQUIPMENT",
    "email": "alimullahforhad2015@gmail.com",
    "phone_mobile": "01820009456, 01786560423",
    "web": "",
    "address": "100/103, Hazi Samsul Islam Tower (Pipe Market), Shop # C-1, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Shanta Traders",
    "category": "SAFETY EQUIPMENT",
    "email": "aminbd.st@gmail.com",
    "phone_mobile": "01740838456, 01703424108",
    "web": "",
    "address": "198-202, Nawabpur Tower, Nawabpur, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "United Trading Company",
    "category": "SAFETY EQUIPMENT",
    "email": "utcdhk@gmail.com",
    "phone_mobile": "01819268691, 01715295798",
    "web": "",
    "address": "78, Nawabpur Road, Dhaka Market, Room # 80 (5th Floor), Dhaka-1100"
  },
  {
    "company_name": "Yeasin Enterprise",
    "category": "SAFETY EQUIPMENT",
    "email": "yeasinenterprise5@gmail.com",
    "phone_mobile": "01685146610, 01925507870, 01706473318",
    "web": "",
    "address": "108, Madina Arzu Complex, Shop # D11 (1st Floor), Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "AB Securities Bangladesh Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info.bd@absecurities.com",
    "phone_mobile": "+88 01615552277",
    "web": "www.absecuritiesbd.com",
    "address": "Cemex Shimul Trishna Trade Centre, Holding # Ka-86/1, Progati Sarani, Kuril Biswa Road, Dhaka-1229"
  },
  {
    "company_name": "Access Control Security Service Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@accesscontrolbd.org",
    "phone_mobile": "01401508677, 01329685850",
    "web": "www.accesscontrolbd.org",
    "address": "House # 46, Ground Floor, Road # 11, Nikunja-2, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Active Force",
    "category": "SECURITY/GUARD SERVICES",
    "email": "active.mahadi2015@gmail.com",
    "phone_mobile": "01630971218, 01844223070",
    "web": "www.activeissbd.com",
    "address": "Corporate Office: House # 5/4, Block # 1, Monipuri Para, Sangsaad Avenue, Tejgaon, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Aegis Services Limited",
    "category": "SECURITY/GUARD SERVICES",
    "email": "aegis-services@squaregroup.com",
    "phone_mobile": "+88-02-222296033, +88 01787772233",
    "web": "www.aegis.com.bd",
    "address": "Corporate Head Office: Square Centre, 48, Mohakhali C/A, Dhaka-1212, Bangladesh; Operational Head Office: House # 41, Road # 27, Block # A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "ASL Services",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@aslservices.com.bd",
    "phone_mobile": "+88 01609500030",
    "web": "www.aslservices.com.bd",
    "address": "House # 695/2/J, ECB Chattar, Dhaka Cantonment, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Blue Valley Security Service Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "bluevallyltdbd@gmail.com",
    "phone_mobile": "01958315700, 01911159592",
    "web": "www.bluevalleybd.com",
    "address": "Corporate Office: 97/B (Chand Plaza), Malibag Chowdhurypara, Dhaka-1219"
  },
  {
    "company_name": "Care Force Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "careforcebd@gmail.com",
    "phone_mobile": "01811590160, 01716401771",
    "web": "www.careforcebd.com",
    "address": "House # 42, Road # 02, Block-A, Mirpur-6, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Commando Guards Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "commandoguards@yahoo.com",
    "phone_mobile": "+88-02-223387818, 01976177529, 01926669866",
    "web": "www.commandoguardsbd.com",
    "address": "R. S. Bhaban (6th Floor), 120/A, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Complete Security Solution (C2S)",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@c2sbd.com",
    "phone_mobile": "+88-02-226616149, 01976830217, 01711029734",
    "web": "www.c2sbd.com",
    "address": "House # 2, Road # 1/A, Block # J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Delta One Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "deltaone.ss.ltd@gmail.com",
    "phone_mobile": "01772228777, 01999969946",
    "web": "",
    "address": "House # Ka-24/25 Jagannathpur, Shahid Abdul Aziz Sharak, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Elite Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "wecare@elitebd.com",
    "phone_mobile": "+88-02-222285141, 01944474444, 01944464444",
    "web": "www.elitebd.com",
    "address": "Elite Tower, House # 03, Road # 6/A, Block-J, Baridhara, Dhaka-1212"
  },
  {
    "company_name": "G4S Secure Solutions Bangladesh (P) Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@bd.g4s.com",
    "phone_mobile": "+880 9606001100, 01711310759, 01313209081-82",
    "web": "www.g4s.com",
    "address": "Head Office: G4S Dhaka House, 22, Progoti Sarani, Dhaka-1212"
  },
  {
    "company_name": "Garda Shield Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@gardashield.com",
    "phone_mobile": "+88 01729242732",
    "web": "www.gardashield.com",
    "address": "Corporate Office: 44, Pragati Sharani (Level-3 & 4), Block # J, Baridhara, Dhaka-1212"
  },
  {
    "company_name": "Generation Solution of Security Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info.gsslbd@gmail.com",
    "phone_mobile": "01911899619, 01713878344",
    "web": "www.gsslbd.com",
    "address": "House # 419, Road # 30, Mohakhali DOHS, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Euro Vigil Pvt. Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info.eurovigil.com.bd",
    "phone_mobile": "08002345678, 09612225538",
    "web": "www.euro-vigil.com.bd",
    "address": "Corporate Office: House # 04, Road # 02, Block # J, Baridhara, Dhaka-1212"
  },
  {
    "company_name": "Falcon Security Limited",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@falconslimited.com",
    "phone_mobile": "+88-02-222297282, +88 01618325266",
    "web": "www.falconslimited.com",
    "address": "House # 155, Lane # 3, Eastern Road, New DOHS, Mohakhali, Dhaka-1206"
  },
  {
    "company_name": "Fast One Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@fastonesecurity.com.bd",
    "phone_mobile": "01714044082, 01919776647",
    "web": "www.fastonesecurity.com.bd",
    "address": "521, Monipur (Near West Kazipara Bou Bazar), Mirpur-2, Dhaka-1216"
  },
  {
    "company_name": "Integrated Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "issheadoffice@gmail.com",
    "phone_mobile": "+88-02-41040060, 41040061-7, +88 01817145069",
    "web": "www.isslbd.net",
    "address": "Head Office: House # 34, Road # Lake Drive Road, Nikunja-1, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Ishakha Security Service (Pvt.) Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "isspl2017@gmail.com",
    "phone_mobile": "01787594589, 01706692297",
    "web": "www.ishakhasecurity.com",
    "address": "427-428, Farmview Super Market (3rd Floor), Farmgate, Tejgaon, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "JSS Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "jsslbd@gmail.com",
    "phone_mobile": "+88 01888686368",
    "web": "www.jssl.net",
    "address": "Corporate Office: House # 13, Road # 3/A, Nikunja-1, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Orion Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "orionss@dhaka.net",
    "phone_mobile": "+88-02-48955537, +91-9899993030, 01678706555",
    "web": "www.orionsecurity.bd.com",
    "address": "Corporate Office: Plot # 38 (Level 5&6), Rabindra Sarani, Sector # 7, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Security 360 Limited",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@security360bd.com",
    "phone_mobile": "+88 01913603600",
    "web": "www.security360bd.com",
    "address": "Corporate Office: BT Moonlight Serenade, 2nd Floor, House # 6, Road # 3, Block # 1, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "White Window Limited",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@whitewindowbd.com",
    "phone_mobile": "+91-777719603, 01777719602",
    "web": "www.whitewindowbd.com",
    "address": "Corporate Office: House # 365, Road # 28, Mohakhali DOHS, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "King Force",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@kingforcebd.com",
    "phone_mobile": "+88 01711007648",
    "web": "www.kingforcebd.com",
    "address": "Corporate Office: House # 01 (Level 5), Road # 11, Block # 1, Baharindra, Dhaka-1212"
  },
  {
    "company_name": "Ornate Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@ornategroupbd.com",
    "phone_mobile": "+88 01919676283",
    "web": "www.ornategroupbd.com",
    "address": "Corporate Office: 1134, Khilbaritek, Vatara, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Secure Line",
    "category": "SECURITY/GUARD SERVICES",
    "email": "secure.line@hotmail.com",
    "phone_mobile": "+91-177222277, 01712442007",
    "web": "www.securelinebd.com",
    "address": "Corporate Office: Ka-215, Kuril, Vatara, Dhaka-1229"
  },
  {
    "company_name": "Kashful Security Service Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "kashfulssl@gmail.com",
    "phone_mobile": "+91-967100145, 01819631668",
    "web": "",
    "address": "Corporate Office: Sekandar Center (5th Floor), Oxygen More, Chattogram, Bangladesh"
  },
  {
    "company_name": "Marshall Security Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "marshalbd.com@gmail.com",
    "phone_mobile": "+88 01844469307",
    "web": "",
    "address": "Corporate Office: House # 363 (Gr. Floor), Road # 06, Avenue # 4, Mirpur DOHS, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Piyal Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "pilyasecurity.com",
    "phone_mobile": "+88 01715578561",
    "web": "www.pilyasecurity.com",
    "address": "Corporate Office: 87, BNS Center, Litf-09, Sector # 07, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Securitas Bangladesh Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "securitasb@yahoo.com",
    "phone_mobile": "+91-1814660780, 01814660796",
    "web": "www.securitasbangladesh.com",
    "address": "Corporate Office: House # 194, Road # 1, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Navation Security Service Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "navationssl@gmail.com",
    "phone_mobile": "+88-02-333311735, +91-977529999, 01682577180",
    "web": "",
    "address": "Corporate Office: Navana Divine, 6th Floor, House # 18, Lane # 4, Road # 1, Block-L, Halishahar H/E, Agrabad Access Road, Chattogram, Bangladesh"
  },
  {
    "company_name": "Max Secure Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@maxsecure.com",
    "phone_mobile": "+91-165551551, 01614994499",
    "web": "www.maxsecurebd.com",
    "address": "Corporate Office: House # 16, Road # 6/A, Sector # 05, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Protection One (Pvt.) Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@protectionone.com.bd",
    "phone_mobile": "+91-1755551912, 01755551911",
    "web": "www.protectionone.com.bd",
    "address": "Head Office: House # 48, Road # 02, Block # L, Banani, Dhaka-1213"
  },
  {
    "company_name": "Unitrust Protection Service Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "unitrustprotection@gmail.com",
    "phone_mobile": "+88 01855527667",
    "web": "www.upslbd.com",
    "address": "J K Bhabhan, House # 14, Road # 02, Lane # 02, Block # L, Halishahar H/E, Agrabad Access Road, Chattogram, Bangladesh"
  },
  {
    "company_name": "Munshi Bangladesh Limited",
    "category": "Cleaning Services",
    "email": "cleaning@munshicorp.com",
    "phone_mobile": "+88 01979522500",
    "web": "www.mbmmunshibd.com",
    "address": "415, AP House, Nayanagar, Coca-Cola Road, Badda, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "SafeCo 24x7 Security Services Ltd.",
    "category": "SECURITY/GUARD SERVICES",
    "email": "info@safecosecuritybd.com",
    "phone_mobile": "+91-1700555722, 01911307326",
    "web": "www.safecosecuritybd.com",
    "address": "25/Ka, Shahid Abdul Aziz Road, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Starfeon",
    "category": "SECURITY/GUARD SERVICES",
    "email": "starfeons@starfeonsbd.com",
    "phone_mobile": "+91-1747579173, 01964777444",
    "web": "www.starfeonsbd.com",
    "address": "House # 29, Road # 13, Block # D, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Strong Force",
    "category": "SECURITY/GUARD SERVICES",
    "email": "strongforcebd@gmail.com",
    "phone_mobile": "+91-8809604109027",
    "web": "www.strongforcebd.com",
    "address": "House # 27, Flat # A-4, Diabari Main Road, Sector # 15, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Alamgir Seed Co.",
    "category": "Seed Company",
    "email": "alamgirseed@yahoo.com",
    "phone_mobile": "+88-02-22335245, +88 01976111151",
    "web": "",
    "address": "House # 2, Avoy Das Lane, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Top Ten Fabrics & Tailors Ltd.",
    "category": "Fabrics & Tailors",
    "email": "info@totpengroupbd.com",
    "phone_mobile": "+88 09677000111, 01959000111, 01929000111",
    "web": "www.toptemartltd.com",
    "address": "13-14, Mollik Tower, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "AINESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712823346",
    "web": "www.eyeshaeps.com",
    "address": "Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "A.B.S Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01710978509",
    "web": null,
    "address": "Plot # YS-9, Leather Industrial Area, Jhowchar, Savar, Dhaka-1340."
  },
  {
    "company_name": "Abul Hossain Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01924084238",
    "web": null,
    "address": "61/2/A, Gojmohal, Hazaribagh, Dhaka"
  },
  {
    "company_name": "Abdus Sattar Leather",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01862444344",
    "web": null,
    "address": "105/A, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Ahsan Habib & Brothers",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01535475155",
    "web": null,
    "address": "Plot # ZE-4, Leather I/A, Horindora Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "A K Leather Complex Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711543063",
    "web": null,
    "address": "Plot # YS1+YS2, Leather I/A, Jhowchoor, Heamayatpur, Savar, Dhaka"
  },
  {
    "company_name": "Angon Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01739772136",
    "web": null,
    "address": "Plot # ZE-23, Tannery Industrial Estate, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Anjuman Trading Corporation Ltd.",
    "category": "Tannery",
    "email": "shahleen@atc2020bd.com, universalpellis@gmail.com",
    "phone_mobile": "+88-02-223366511, 223369001, +88 01711522288",
    "web": "www.anjumantcl.com",
    "address": "Plot # ZE28, BSCIC Tannery I/E Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Arab Tannery Pvt. Limited",
    "category": "Tannery",
    "email": "arabtannery.sales@gmail.com",
    "phone_mobile": "+88 01711523548",
    "web": null,
    "address": "Plot # YS-12A, Tannery Industrial Estate, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Capital Tannery",
    "category": "Tannery",
    "email": "capitaltannery@gmail.com",
    "phone_mobile": "+88 01811934589",
    "web": null,
    "address": "Plot # YS-6B, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Emaleather Export",
    "category": "Tannery",
    "email": "abual45@gmail.com",
    "phone_mobile": "+88 01817046404",
    "web": null,
    "address": "Plot # YE3, H S Tannery, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka."
  },
  {
    "company_name": "F F M Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "01912236582, 01629765500",
    "web": null,
    "address": "Plot # ZE-6, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "A S. Leather Export Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711430626",
    "web": null,
    "address": "Plot # ZD-14, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Escort Footwears BD Ltd.",
    "category": "Footwear",
    "email": null,
    "phone_mobile": "+88 01711522288",
    "web": null,
    "address": "47, Uttar Sonatenger, Jhauchar Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "F K Leather Complex Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01920092974",
    "web": null,
    "address": "Plot # YE-15, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Asia Tannery Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01743764750",
    "web": null,
    "address": "Plot # ZS-26, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Chinese Leather Tanneries (Pvt.) Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01955327572",
    "web": null,
    "address": "Plot # XS-13, Horindora, Leather Industrial Area, Savar, Dhaka-1340."
  },
  {
    "company_name": "Eesut Tannery Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01937271560",
    "web": null,
    "address": "Plot # ZD-11, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Golden Leather Industry",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01788787136",
    "web": null,
    "address": "Plot # YS-6A, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Asian Leather Complex",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711523637",
    "web": null,
    "address": "143/1, Hazaribagh, Tannery Area, Dhaka, Bangladesh"
  },
  {
    "company_name": "Chowdhury & Co.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01821450425",
    "web": null,
    "address": "Plot # ZE-24, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Exim Leather",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01911366433",
    "web": null,
    "address": "Plot # ZE-1, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Gukul Tannery (Pvt.) Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01673257995",
    "web": null,
    "address": "126, Hazaribagh, Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Asif Leather Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711595882",
    "web": null,
    "address": "Plot # YS-9A, Tannery I/E, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Chowdhury Leather & Co. Ltd",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711526220",
    "web": null,
    "address": "Plot # YA-11+Y5-19, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Green Mountain BD",
    "category": "Safety & Consultancy",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 0181925090, 0181633425",
    "web": "www.greennmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Nodun Bazar, Vistar, Dhaka-1212"
  },
  {
    "company_name": "Bashar Leather Complex",
    "category": "Tannery",
    "email": "basharleathercomplex@gmail.com",
    "phone_mobile": "+88 01819279888, +88 01819269892",
    "web": null,
    "address": "136/2, Hazaribagh, Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "City Leather Tannery",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01819260992",
    "web": null,
    "address": "Plot # ZE-14, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Factory Leather & Footwear",
    "category": "Tannery & Footwear",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01819211752",
    "web": null,
    "address": "34, Kalunagar, Hazaribagh, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Gulshan Tannery (Pvt.) Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711522288",
    "web": null,
    "address": "Plot # ZB-3, Tannery Industrial Estate, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Bengal Pelli Export Co. Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 017116604010, 01675135412",
    "web": null,
    "address": "Plot # YE-4, Tannery Estate, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Dila Leather Complex",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711522288",
    "web": null,
    "address": "130, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Feni Tannery (Pvt.) Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01819199347",
    "web": null,
    "address": "Plot # ZS-9, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Helena Enterprise Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01716382824",
    "web": null,
    "address": "Plot # YA-10+Y8-3, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Bhuyian Leather Complex",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01715807400",
    "web": null,
    "address": "104, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "East Asia Tannery Ltd.",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01711524870",
    "web": null,
    "address": "Plot # YS-26, YC-3, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Ferdusi Leather",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 0173161011",
    "web": null,
    "address": "105/A, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Henna Tannery",
    "category": "Tannery",
    "email": "ashapal@yahoo.com",
    "phone_mobile": "+88 01720343434",
    "web": null,
    "address": "44/4, Sher-E-Bangla Road, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator",
    "email": null,
    "phone_mobile": "+88 01974600000",
    "web": "www.hyundailelevatoritd.com",
    "address": "Karvan Bazar, Dhaka-1215"
  },
  {
    "company_name": "Hi-Tech Leather Complex Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819475147",
    "web": null,
    "address": "Plot # ZE-3, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Holsmewood Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01712355255",
    "web": null,
    "address": "Tafin Tower, Tatul Jhora Collage Mor, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Hossain Brothers Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711137005",
    "web": null,
    "address": "Plot # YE-14, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "H S Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01727262129",
    "web": null,
    "address": "Plot # YE-3, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Huizhou Baijia Glove Co. Ltd.",
    "category": "Gloves",
    "email": null,
    "phone_mobile": "01915225308, 01713037133",
    "web": null,
    "address": "Manikgonj Para, Diakhli Mouja, Beron, Zirabo, Ashulia, Savar, Dhaka."
  },
  {
    "company_name": "Ibrahim Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01867787412",
    "web": null,
    "address": "Plot # ZE-39, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Ideal Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711891028",
    "web": null,
    "address": "94/A, Hazaribagh, Dhaka-1209."
  },
  {
    "company_name": "International Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01827906912",
    "web": null,
    "address": "Plot # ZE-35, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Iqbal Brothers Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "01819407890, 01715407890",
    "web": null,
    "address": "Plot # ZE-26, Tannery I/E, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Islamia Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01775270555",
    "web": null,
    "address": "Plot # ZE-5, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Island Tanneries",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01816559007",
    "web": null,
    "address": "Plot # ZE-42, Hamayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Ismail Leather Corporation",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01718232973",
    "web": null,
    "address": "Plot # ZE-13, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "J. A. Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711261537",
    "web": null,
    "address": "Plot # ZE-8, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Jaman Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819908781",
    "web": null,
    "address": "Plot # ZE-7, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Janata Tanning Industries Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711561646",
    "web": null,
    "address": "Plot # ZD-1, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Kabir & Brothers Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01719091548",
    "web": null,
    "address": "4, Kalunagar, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Kader Leather Complex",
    "category": "Tannery",
    "email": "atlikc@yahoo.com",
    "phone_mobile": "+88 01755677997",
    "web": null,
    "address": "YE-23 Tannery Industrial Estate, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Kalam & Brothers Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711334016",
    "web": null,
    "address": "Plot # YE-17, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Kalu Leather Corporation (Pvt.) Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819436805",
    "web": null,
    "address": "Plot # YS-7, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Karsaz Tannery Limited",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01821408995",
    "web": null,
    "address": "Plot # ZD (19-20), BSCIC Tannery I/E, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Kashem Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01721400060",
    "web": null,
    "address": "110, Hazaribagh, Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Lamsa Leather",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711307961",
    "web": null,
    "address": "Plot # ZC4+ZC5+ZC6, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Leather Industries of Bangladesh Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711537961",
    "web": null,
    "address": "Plot # YC1+YC2+YE-22, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-"
  },
  {
    "company_name": "Lien Enterprise",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711536927",
    "web": null,
    "address": "Plot # ZE-34, Tannery I/E, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Lotus Leather Products",
    "category": "Leather Products",
    "email": null,
    "phone_mobile": "+88 01789000400",
    "web": null,
    "address": "101/A, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475845, 01712223344",
    "web": "www.eyeshaepa.com",
    "address": "Patakata, Lahankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Khokon Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01841111118",
    "web": null,
    "address": "Plot # ZS-7, Leather Industrial Area, Heamayatpur, Jawchor, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Kiyum Leather Corporation",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01846753864",
    "web": null,
    "address": "55, Gajmohal, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Malkade Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01715593046",
    "web": null,
    "address": "Plot # ZE-27, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Kohinoor Tanneries Ltd.",
    "category": "Tannery",
    "email": "universalpellis@gmail.com",
    "phone_mobile": "+88 01711522288",
    "web": null,
    "address": "Plot # ZD-7+ZS-24, Tannery Industrial Estate, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Komola Tannery (Pvt.) Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01716117748",
    "web": null,
    "address": "125/1, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Mamun Traders Leather Industries Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01911366433",
    "web": null,
    "address": "Plot # ZE-1, Tannery Industrial Estate, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction Technology",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "Marsons Tannery Limited",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711536475",
    "web": null,
    "address": "Plot # YE-1, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "M.B Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711525265",
    "web": null,
    "address": "Plot # ZE-18, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Metro Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711115842",
    "web": null,
    "address": "Plot # ZE-17, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Millat Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01713014181",
    "web": null,
    "address": "Plot # ZS-22, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Milon Tanneries Limited",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819727892",
    "web": null,
    "address": "58, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Miraz Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 0171120363",
    "web": null,
    "address": "Plot # YS-12, Leather Industrial Area, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Mitali Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 017113002237",
    "web": null,
    "address": "Plot # ZS-162, ZD-4, BSCIC Chamra Shilpa Nagari, Jhauchar, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Mizan & Sumon Tannery (Pvt.) Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711525389",
    "web": null,
    "address": "Plot # ZD9+ZS-27, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Modhu Hazi Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01846666698",
    "web": null,
    "address": "Plot # YS-13A, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Mohammadia Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711619873",
    "web": null,
    "address": "63, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "M. M. Gloves Products & Footwear",
    "category": "Gloves & Footwear",
    "email": null,
    "phone_mobile": "+88 01711523637",
    "web": null,
    "address": "143/1, Hazaribagh, Dhaka-1209."
  },
  {
    "company_name": "Momotaj Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 0194909489",
    "web": null,
    "address": "Plot # XE-7, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Moon Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 018186362",
    "web": null,
    "address": "Plot # ZE-29, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Mother Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 0171262405",
    "web": null,
    "address": "Plot # ZE-32, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Mukta Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711831977",
    "web": null,
    "address": "Plot # ZS-29, Jhawchor Leather Industrial Area, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Murshed Brothers Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711528181",
    "web": null,
    "address": "Plot # XS-4, Leather Industrial Area, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Muslim Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01766755980",
    "web": null,
    "address": "Plot # ZE-43, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Muzahid Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01676675900",
    "web": null,
    "address": "80, Sonatengor, Hazaribagh Tannery Area, Dhaka-1209."
  },
  {
    "company_name": "Nabarun Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01713016411",
    "web": null,
    "address": "Plot # ZE-7, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Nabilpur Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01913222003",
    "web": null,
    "address": "141/A, Hazaribagh, Dhaka-1209."
  },
  {
    "company_name": "Nasim Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711523637",
    "web": null,
    "address": "148/3, Hazaribagh, Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Nazrul Leather & Co.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01919274423",
    "web": null,
    "address": "96/I/C, Hazaribagh, Dhaka-1209."
  },
  {
    "company_name": "Nishat Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01712533453",
    "web": null,
    "address": "Plot # ZE-30, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Pragati Leather Complex Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01712225568",
    "web": null,
    "address": "Plot # ZS-4, ZS-5, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Prince Leather Industries",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711533957",
    "web": null,
    "address": "Plot # ZE-36, Leather Industrial Area, Hemayatpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Rahman Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711865612",
    "web": null,
    "address": "78/1, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety & Consultancy",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 0181902598, 0181603425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Neturi Bazar, Vastara, Dhaka-1212"
  },
  {
    "company_name": "Noahsall Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711732557",
    "web": null,
    "address": "107, Hazaribagh, Dhaka-1209."
  },
  {
    "company_name": "Norman Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01913053391",
    "web": null,
    "address": "2/4, Shikaritola, Gojomahal, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Olympia Leather Complex",
    "category": "Tannery",
    "email": "info@olympiatealther.com",
    "phone_mobile": "+88 01712628405",
    "web": "www.olympiatealther.com",
    "address": "104/A/1, Hazaribagh Tannery Area, Hazaribagh, Jigatala, Dhaka-1209."
  },
  {
    "company_name": "Rahman Overseas Export Ltd.",
    "category": "Tannery",
    "email": "ramsimpsex08@gmail.com",
    "phone_mobile": "+88 01819433339",
    "web": null,
    "address": "Plot # ZE-15, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Ralsa Leather",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819876521",
    "web": null,
    "address": "Plot # YS-12 & BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Rajib Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819211572",
    "web": null,
    "address": "Plot # YS-23, Chamra Shilpa Nagari, Jhauchar, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "RAN Leather",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819264000",
    "web": null,
    "address": "Plot # ZE-19, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "R M Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819242585",
    "web": null,
    "address": "4/1, Shikaritola, Hazaribagh, Dhaka."
  },
  {
    "company_name": "Rashni Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01713037375",
    "web": null,
    "address": "Plot # ZD-17, Leather Industrial Area, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Reliance Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01713011344",
    "web": null,
    "address": "Plot # YA7, YA8, YO4, YB2, YS15, Leather Industrial Area, Jhauchar, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "R. K. Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01683312510",
    "web": null,
    "address": "Plot # XE-5 Leather Industrial Area, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Royel Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01819154863",
    "web": null,
    "address": "Plot # ZD-16, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Rubi Leather Complex Privet Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711137005",
    "web": null,
    "address": "Plot # YE-12, Leather Industrial Area, Horindora, Hemayetpur, Savar, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Ruma Leather Industries Ltd",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711532325, 01717109683",
    "web": null,
    "address": "Plot # ZD-8, ZS-25, BSCIC Leather Industrial Estate, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "S. A. Leather",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01714496883",
    "web": null,
    "address": "Plot # ZE-20, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Sabuj Corporation",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711525265",
    "web": null,
    "address": "Plot # ZE-16, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Sadar Tannery Ltd.",
    "category": "Tannery",
    "email": "sadartanneryltd@gmail.com",
    "phone_mobile": "+88 01707443834",
    "web": null,
    "address": "Plot # ZS-11, Tannery Industrial Estate, Savar, Dhaka-1340."
  },
  {
    "company_name": "Saddat Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01738342103",
    "web": null,
    "address": "11/A, Siraritola, Hazaribagh Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "SAF Industries Limited",
    "category": "Tannery",
    "email": "info@safleather.com",
    "phone_mobile": "+88-02-223357449, 223357451, +88 01313778855",
    "web": "www.safleather.com",
    "address": "Akij Chamber (6th Floor), 73 Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Saiful Islam Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01825563007",
    "web": null,
    "address": "Plot # ZE-21, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Salam Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01914127666, 01712142766",
    "web": null,
    "address": "Plot # ZE-5, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Salma Leather Corporation",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711568758",
    "web": null,
    "address": "Plot # XE-1, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Salma Tannery Ltd.",
    "category": "Tannery",
    "email": "salmatannery12@gmail.com",
    "phone_mobile": "+88 01727094988",
    "web": null,
    "address": "Plot # ZE-2, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Samata Leather Complex Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711525865, +88 01711528180",
    "web": null,
    "address": "Plot # ZC4+ZC5+ZC6, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Sarwar Leather Corporation Ltd.",
    "category": "Tannery",
    "email": "slclaliashraf@yahoo.com",
    "phone_mobile": "+88 01711959817",
    "web": null,
    "address": "Plot # YD5+YE6, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "S. B. Shahi Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01715668611",
    "web": null,
    "address": "Plot # YS6C (B-69), Leather Industrial Area, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Shadin Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01715668611",
    "web": null,
    "address": "Plot # ZS-28, Leather Industrial Area, Heamayatpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Shahajada Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711524898",
    "web": null,
    "address": "29, Moneshor Road, Dhaka-1209."
  },
  {
    "company_name": "Sonali Tannery (Pvt.) Ltd.",
    "category": "Tannery",
    "email": "sonalitannery.bd@gmail.com",
    "phone_mobile": "+88 01730911266",
    "web": null,
    "address": "Plot # ZE-31, BSCIC Chamra Shipla Nagari, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Sonar Bangla Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01715001807",
    "web": null,
    "address": "Plot # ZE-29, Leather Industrial Area, Heamayatpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "S & S Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01753909850",
    "web": null,
    "address": "Plot # YS-10, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Sumon Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01682171833",
    "web": null,
    "address": "126, Water Works Road, Dhaka."
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01716233446",
    "web": "www.eyeshaeps.com",
    "address": "Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Sharif Leather Corporation",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+91 951841725, 01914811769",
    "web": null,
    "address": "YS-8 BSCIC Leather Industrial Area, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Shathee Leather Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01911366433",
    "web": null,
    "address": "Plot # YE-21, Leather Industrial Estate, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Silva Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01713044084",
    "web": null,
    "address": "87, Hazaribagh, Tannery Area, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Sodesh Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01720091109",
    "web": null,
    "address": "Plot # ZE-44, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Sunlight Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711198463",
    "web": null,
    "address": "Plot # YE-19, BSCIC, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Supreme Tannery (BD) Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01713019198",
    "web": null,
    "address": "Plot # ZS-26, Chamra Shipla Nagari, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Taj Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711602044",
    "web": null,
    "address": "Plot # ZS2+ZS3, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Tajin Leather Corporation Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01711526190",
    "web": null,
    "address": "Plot # XE-4, Leather I/A, Horindora, Hemayetpur, Savar, Dhaka-1340."
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction Technology",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "The Comilla Tannery Limited",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01911287945",
    "web": null,
    "address": "Plot # XE-3, Leather Industrial Area, Jashuchar, Savar, Dhaka-1340."
  },
  {
    "company_name": "Yousuf Tannery Ltd.",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01937271560",
    "web": null,
    "address": "135/2, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Zakir Hossain Tannery",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01911360965",
    "web": null,
    "address": "Plot # ZE-25, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Zia Leather Complex",
    "category": "Tannery",
    "email": null,
    "phone_mobile": "+88 01682244297",
    "web": null,
    "address": "2/3, Shikartola, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Zindabad Tannery",
    "category": "Tannery",
    "email": "faruk.fattem@gmail.com",
    "phone_mobile": "+88 01819286748",
    "web": null,
    "address": "Plot # YE-18, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Zohir Trading",
    "category": "Tannery",
    "email": "jashore@yahoo.com",
    "phone_mobile": "+88 01922238367",
    "web": null,
    "address": "Plot # YE-2, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "SAF Industries Limited",
    "category": "Tannery",
    "email": "info@safleather.com",
    "phone_mobile": "+88-02-477770001, 4777700077, 0197777555, 01911560745",
    "web": "www.safleather.com",
    "address": "Holding # 46, Ward # 07, Akij City, Noapara, Abhaynagar, Jashore-7460."
  },
  {
    "company_name": "A. Wahab & Co.",
    "category": "Tax Consultants",
    "email": "info@awahabco.com",
    "phone_mobile": "+88-02-222275943, 222275946",
    "web": "www.awahabco.com",
    "address": "Plot # 19, Road # 13C, Block # E, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "DHAKA Tax Consultants (DTC)",
    "category": "Tax Consultants",
    "email": "info@dhakataxconsultants@gmail.com",
    "phone_mobile": "01716645486, 01723046699",
    "web": "www.dhakataxconsultants.com",
    "address": "34, Nur Jahan Sharif Plaza (4th Floor), Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Dr. Gazi & Associates",
    "category": "Tax Consultants",
    "email": "info@drgazianassociates.law, gsislam85@gmail.com",
    "phone_mobile": "+88-02-222220565, 222223958, 222223646, 01787696522, 01924165244",
    "web": "www.drgazianassociates.law",
    "address": "Zebun Index Trade Center, 4, Bijoynagar (11th Floor), Suite # A + B, Ramna, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "FM Associates",
    "category": "Tax Consultants",
    "email": "info@fmassociatesbd.com",
    "phone_mobile": "+88-02-222279789, 222278282, 01819212002, 01713061212",
    "web": "www.fmassociatesbd.com",
    "address": "1st Floor, House # 88, Road #10/1, Block-D, Niketon, Dhaka-1212."
  },
  {
    "company_name": "Islam Atab Kamrul & Co.",
    "category": "Tax Consultants",
    "email": "info@audit.com.bd",
    "phone_mobile": "+88 01790700404",
    "web": "www.audit.com.bd",
    "address": "Head Office: “Z-Tower” (5th Floor), Plot # 4, Road # 132, 54, Gulshan Avenue, Gulshan-1, Dhaka-1212. Branch Office: BSCIC Electronics Complex (Level-5), Plot # 1/1, Road # 3, Avenue-4, Section-7, Mirpur, Dhaka-1212."
  },
  {
    "company_name": "JK Associates",
    "category": "Tax Consultants",
    "email": "info@jkassociates.com.bd",
    "phone_mobile": "01511404971, 01973404971",
    "web": "www.jkassociates.com.bd",
    "address": "Head Office: 752/2, City Bank Building (6th Floor), Begum Rokeya Avenue, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Pinkal & Company",
    "category": "Tax Consultants",
    "email": "info@pinkalcdb.com",
    "phone_mobile": "+88 02 44863092",
    "web": "www.pinkalcdb.com",
    "address": "AHISANDELL, 2/A, Mymensingh Road (2nd Floor), Shahbag, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Rahamat & Associates Ltd.",
    "category": "Tax Consultants",
    "email": "info@rahamatassociates.com.bd",
    "phone_mobile": "+88 02 48954791, +88 01918930119",
    "web": "www.rahamatassociates.com.bd",
    "address": "Corporate Head Office: Tropical Alauddin Tower (11th Floor, Flat-11-B), Holding # 32/C, Road # 02, Sector # 03, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety & Consultancy",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01810252000, 01816334235",
    "web": null,
    "address": "Manufactured by: Green Mountain BD (Tehran), Noor Bazar, Vatan, Dhaka-1212"
  },
  {
    "company_name": "MABS & Partners",
    "category": "Tax Consultants",
    "email": "info@mabs.com",
    "phone_mobile": "+88-02-222275057-58",
    "web": "www.mabs.com",
    "address": "SMAC Tower (7th Floor), 33 Banani C/A, Road # 17, Dhaka-1213."
  },
  {
    "company_name": "Rahman's Chambers",
    "category": "Tax Consultants",
    "email": "info@rahmansc.com",
    "phone_mobile": "+88 09678626666",
    "web": "www.rahmansc.com",
    "address": "Suite # 5B, 4th Floor, Attaturk Tower, 22, Kamal Ataturk Avenue, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Rahman Mostafa Alam & Co.",
    "category": "Tax Consultants",
    "email": "info@rmabd.com",
    "phone_mobile": "+88-02-22338449, 47122659",
    "web": "www.rmabd.com",
    "address": "Principal Office: Paramount Heights (7th Floor): D2), 65/2/1, Box Culvert Road, Purana Palton, Dhaka-1000, Bangladesh. Branch Office: High Tower (7th Floor), 9 Mohakhali C/A, Dhaka-1212."
  },
  {
    "company_name": "RUSSO & Associates",
    "category": "Tax Consultants",
    "email": null,
    "phone_mobile": "+88 01716558043",
    "web": null,
    "address": "38, Nayapaltan (1st Floor), Dhaka. Branch Office: House # 19, Road # 05, Sector # 06, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Site Ltd.",
    "category": "Tax Consultants",
    "email": "info@segunbagicha.com",
    "phone_mobile": "+88-02-223386230, +91-033335500, 01933353516",
    "web": "www.segunbagicha.com",
    "address": "218, Shahid Syed Nazrul Islam Road (Old-45, Topkhana Road) Tropicana Tower, 8th Floor, Room B/1, Dhaka."
  },
  {
    "company_name": "Shubhankar Consulting",
    "category": "Tax Consultants",
    "email": "info@shubhankarconsulting.com",
    "phone_mobile": "+88-02-48318138, +88 01712298498",
    "web": "www.shubhankarconsulting.com",
    "address": "SEL Trident Tower, 57 VIP Road, Dhaka"
  },
  {
    "company_name": "Tax Accountant",
    "category": "Tax Consultants",
    "email": null,
    "phone_mobile": "+91-012226195, 01678706463",
    "web": null,
    "address": "Plot # 38 (Level-4), Rabindra Sarani, Sector # 07, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Union Associates",
    "category": "Tax Consultants",
    "email": null,
    "phone_mobile": "+91-0176473907, 01976473907",
    "web": null,
    "address": "Head Office: House # 323 (3rd Floor), Road # 5, Block # D, Baridhara DOHS, Dhaka-1206, Bangladesh. Branch Office: Room # 603, Rupayan square, 5th Floor, Plot # C-2, Block # G, Bashundhara R/A, Dhaka-1206."
  },
  {
    "company_name": "Zia & Associates",
    "category": "Tax Consultants",
    "email": "adv_zia@yahoo.com",
    "phone_mobile": "+88-02-223353336, +91-011152154, 01552486535",
    "web": "www.ziaandassociates.com",
    "address": "8/3, Segun Bagicha (1st-4th Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Zia Consulting Firm Ltd.",
    "category": "Tax Consultants",
    "email": "service@ziacfi.com",
    "phone_mobile": "+88 01755100000",
    "web": "www.ziacfi.com",
    "address": "Shah Ali Tower, 3rd Floor, 33 Kawran Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "R B Associates Firm",
    "category": "Tax Consultants",
    "email": "rakibfirms@gmail.com",
    "phone_mobile": "+88-02-477720555, +91-01720901890, 01914409000",
    "web": "www.rakibfirms.com",
    "address": "22, Faraji Para, KDA Commercial Plot ES Plaza, 7th Floor (Lift 7), KFC Building, Moyalpator More, Khulna."
  },
  {
    "company_name": "ASI Smart Tea Company",
    "category": "Tea Blender & Packers",
    "email": "info@asi.com.bd",
    "phone_mobile": "01971170479, 01326710080-85",
    "web": "www.asi.com.bd",
    "address": "10296, Chanpara Bazar, Uttarkhan, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "HRC Products Ltd.",
    "category": "Tea Blender & Packers",
    "email": "hrcsda@hrcbd.com",
    "phone_mobile": "+88-02-8124534, 9131763",
    "web": "www.hrcbd.com",
    "address": "14-17/A, Sangshad Avenue, Sher-E-Bangla Nagar, Dhaka-1215."
  },
  {
    "company_name": "Ispahani Tea Limited",
    "category": "Tea Blender & Packers",
    "email": "careline@mipsahani.com",
    "phone_mobile": "+88-02-223351006, 223351008",
    "web": "www.ispahanitea.com",
    "address": "Corporate Office: Ispahani Building, 14/15, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "Monpura Group",
    "category": "Tea Blender & Packers",
    "email": "monpuragroupbd@gmail.com",
    "phone_mobile": "+91-0300803700, 01926694519",
    "web": "www.monpuragroup.com",
    "address": "Head Office: Cha-75/2, Pragati Sarani (Ridgedale), North Badda, Dhaka."
  },
  {
    "company_name": "National Tea Company Limited",
    "category": "Tea Blender & Packers",
    "email": "info@ntclbd.org",
    "phone_mobile": "+88-02-41054117, +88 01313422906",
    "web": "www.ntclbd.org",
    "address": "\"BGIC Tower\" (7th Floor), 34, Topkhana Road, Dhaka-1000."
  },
  {
    "company_name": "Paragon Agro Ltd.",
    "category": "Tea Blender & Packers",
    "email": "info@paragonfood.com.bd",
    "phone_mobile": "+88-02-22228107, 222282108, +88 01787688677",
    "web": "www.paragonfood.com.bd",
    "address": "Paragon House, 5 Mohakhali C/A, Dhaka 1212, Bangladesh"
  },
  {
    "company_name": "Sabazpur Tea Company Ltd.",
    "category": "Tea Blender & Packers",
    "email": "imtiaz.firoze@squaregroup.com",
    "phone_mobile": "+8809612111333",
    "web": "www.sfbl.com.bd",
    "address": "Square Centre, 48, Mohakhali CA, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "The Consolidated Tea and Lands Company (Bangladesh) Ltd.",
    "category": "Tea Blender & Packers",
    "email": "infodhaka@jfteabd.com",
    "phone_mobile": "+88-02-222284121",
    "web": "www.jfteabd.com",
    "address": "Dhaka Office: Finlay House, House # 3, Road # 94, Gulshan North Avenue, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Abul Khair Group",
    "category": "Tea Blender & Packers",
    "email": null,
    "phone_mobile": "+88-02-333314541-44",
    "web": "www.abulkhaircgd.com",
    "address": "D.T. Road, Pahartali, Chattogram."
  },
  {
    "company_name": "Ispahani Tea Limited",
    "category": "Tea Blender & Packers",
    "email": "careline@mipsahani.com",
    "phone_mobile": "+88-02-333316153-6",
    "web": "www.ispahanitea.com",
    "address": "Head Office: Ispahani Building, Sk. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbdf@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623340",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhela, Bandar, Narayanganj"
  },
  {
    "company_name": "Super Tea & Company",
    "category": "Tea Blender & Packers",
    "email": "superteabd@gmail.com",
    "phone_mobile": "+88-02-48110604, +88 01779660912",
    "web": "www.sinthiagroup.com",
    "address": "Head Office: 24/11, Tajmohol Road, Block # C (3rd Floor), Ring Road, Mohammadapur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Tetley ACI (Bangladesh) Ltd.",
    "category": "Tea Blender & Packers",
    "email": "stcomercare@tetley-bd.com",
    "phone_mobile": "+88-02-55042281",
    "web": "www.tetley-bd.com",
    "address": "House # 35/E, Road # 7, Block # G, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Duncan Brothers (Bangladesh) Ltd.",
    "category": "Tea Garden",
    "email": "info@duncanbd.com",
    "phone_mobile": "+88-02-58611720-2",
    "web": "www.duncanbd.com",
    "address": "Camellia House, 22, Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fatehbagh Tea Company Ltd.",
    "category": "Tea Garden",
    "email": "info@paragongroup-bd.com",
    "phone_mobile": "+88-02-222282107",
    "web": "www.paragongroup-bd.com",
    "address": "Head Office: Paragon House, 5 Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction Technology",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "Kedarpur Tea Company Limited",
    "category": "Tea Garden",
    "email": "andaleeb.ktd@gmail.com",
    "phone_mobile": "+88-02-41020690, 01711564647, 01708051412",
    "web": null,
    "address": "Concord Orilash, House # 62, Road # 11/A, Dhanmondi R/A, Dhaka."
  },
  {
    "company_name": "M. Ahmed Tea & Lands Company Ltd.",
    "category": "Tea Garden",
    "email": "matlcdhaka@gmail.com",
    "phone_mobile": "+88-02-49349875, +88 01713485374",
    "web": "www.m-ahmedgroup.com",
    "address": "Dhaka (Marketing Office): Rupayan Karim Tower (Level-12), 80 Kakrail, VIP Road, Dhaka-1000."
  },
  {
    "company_name": "Marina Tea Company Limited",
    "category": "Tea Garden",
    "email": null,
    "phone_mobile": "+88 01713065440",
    "web": null,
    "address": "192/B (1st Floor), Tejgaon I/A, Dhaka."
  },
  {
    "company_name": "M. M. Ispahani Limited",
    "category": "Tea Garden",
    "email": "careline@mmispahani.com",
    "phone_mobile": "+88-02-223351006, 223351008",
    "web": "www.ispahanitea.com",
    "address": "Corporate Office: Ispahani Building, 14/15, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "National Tea Company Limited",
    "category": "Tea Garden",
    "email": "info@ntclbd.org",
    "phone_mobile": "+88-02-41054117, +88 01313422906",
    "web": "www.ntclbd.org",
    "address": "\"BGIC Tower\" (7th Floor), 34, Topkhana Road, Dhaka-1000."
  },
  {
    "company_name": "Langliya Chora Tea Estate Ltd.",
    "category": "Tea Garden",
    "email": "superteabd@gmail.com",
    "phone_mobile": "+88-02-48110604, +88 01779660912",
    "web": "www.sinthiyagroup.com",
    "address": "Head Office: 24/11, Tajmohol Road, Block # C, (3rd Floor), Ring Road, Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Phulbari Tea Estates Limited",
    "category": "Tea Garden",
    "email": "matlcdhaka@gmail.com",
    "phone_mobile": "+88-02-49349875, +88 01713485374",
    "web": "www.m-ahmedgroup.com",
    "address": "Rupayan Karim Tower (Level-12), 80 Kakrail, VIP Road, Dhaka-1000."
  },
  {
    "company_name": "Sathgao Tea Estate",
    "category": "Tea Garden",
    "email": null,
    "phone_mobile": "+88-02-48313596, 222221742, +88 01713018824",
    "web": null,
    "address": "\"Camellia House\" 11/A, Eskaton Garden Road, Dhaka."
  },
  {
    "company_name": "The Consolidated Tea and Lands Company (Bangladesh) Ltd.",
    "category": "Tea Garden",
    "email": "infodhaka@jiteabd.com",
    "phone_mobile": "+88-02-2222-8421",
    "web": "www.jiteabd.com",
    "address": "Dhaka Office: Finlay House, House # 3, Road # 94, Gulshan North Avenue, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "The Surmah Valley Tea Company Ltd.",
    "category": "Tea Garden",
    "email": null,
    "phone_mobile": "+88-02-41062006, +88 01711590250",
    "web": null,
    "address": "\"Camellia House\" 22, Kazi Nazrul Islam Avenue, Dhaka-1205."
  },
  {
    "company_name": "K. A. Rahaman & Company Ltd.",
    "category": "Tea Garden",
    "email": null,
    "phone_mobile": "+88-02-33357056, +88 01819312399",
    "web": null,
    "address": "321, Nawab Serajuddin Road, Dilar Market, Dewan Bazar, Chattogram, Bangladesh"
  },
  {
    "company_name": "M. Ahmed Tea & Lands Company Ltd.",
    "category": "Tea Garden",
    "email": "magnoliacgt921@gmail.com",
    "phone_mobile": "+88 01713485371",
    "web": "www.m-ahmedgroup.com",
    "address": "Chattogram (Marketing Office): Suraiya Mansion, 30 Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "M. M. Ispahani Limited",
    "category": "Tea Garden",
    "email": "careline@mmispahani.com",
    "phone_mobile": "+88-02-333316153-6",
    "web": "www.ispahanitea.com",
    "address": "Head Office: Ispahani Building, Sk. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Phulbari Tea Estates Limited",
    "category": "Tea Garden",
    "email": "magnoliacgt921@gmail.com",
    "phone_mobile": "+88 01713485371",
    "web": "www.m-ahmedgroup.com",
    "address": "Chattogram (Marketing Office): Suraiya Mansion, 30 Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Pacific Automation Systems",
    "category": "Automation Systems",
    "email": "palimited06@gmail.com, pasystems71@gmail.com",
    "phone_mobile": "+88-02-22335236, 01713653286",
    "web": "www.pacificautomation.net",
    "address": "121, Motijheel C/A (3rd Floor), Jiban Bima Bhaban, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Systems & Services Limited",
    "category": "Automation Systems",
    "email": "info@ssl.com.bd",
    "phone_mobile": "01730009521",
    "web": "www.ssl.com.bd",
    "address": "Tropical Cantt. View (3rd Floor), 167/4 North Vasantek, Matikata Main Road, Dhaka Cantonment, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety & Consultancy",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01719625000, 9181033423",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madarishan (190 Feet Road), Nuhn Square, Nuhn Square, Dhaka-1212"
  },
  {
    "company_name": "HS Engineering & Technology Ltd.",
    "category": "Telecommunication Tower & Antenna",
    "email": "info@hsengineeringbd.com, harun.jewel@hsengineeringbd.com",
    "phone_mobile": "+88 01712727688",
    "web": "www.hsengineeringbd.com",
    "address": "Head Office: House # Ta-133/1-A (Ground Floor), Middle Badda, Link Road (Boishakhi Sharoini), Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Power Ark Engineering",
    "category": "Telecommunication Tower & Antenna",
    "email": "pae.com.bd@gmail.com",
    "phone_mobile": "01712371306, 01303701214",
    "web": "www.pae.com.bd",
    "address": "Corporate Office: House # 24, Road # 12, Sector # 11, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "AB Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "abgroupit@gmail.com",
    "phone_mobile": "+88 01714109604",
    "web": "www.abe.com.bd",
    "address": "46/1, Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Best Electronics Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@bestelectronics.com.bd",
    "phone_mobile": "+88-02-223353031-36",
    "web": "www.bestelectronics.com.bd",
    "address": "Corporate Head Office: City Centre (Level-16), 90/1 Motijheel C/A, Dhaka 1000, Bangladesh"
  },
  {
    "company_name": "Chowdhury Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "chowdhuryelectronicsbd@gmail.com",
    "phone_mobile": "+88 01611646464",
    "web": "www.chowdhuryelectronics.com",
    "address": "51, New Elephant Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "DRM Electronics Limited",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "support@drm.com.bd",
    "phone_mobile": "+88 01730482940",
    "web": "www.drm.com.bd",
    "address": "Corporate Office: 46/48 New Elephant Road, Dhaka-1205."
  },
  {
    "company_name": "Electro Mart Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "ecommerce@electromartltd.com.bd",
    "phone_mobile": "+88-02-48810410-13, 09678333666, +88 01755696029",
    "web": "www.electromart.com.bd",
    "address": "Noor Holdings (Level-06, 07 & 08), 33, South Avenue, Gulshan Circle-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Esquire Electronics Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "online.query@esquirebd.com",
    "phone_mobile": "+8809612345345",
    "web": "www.esquireelectronicsltd.com",
    "address": "Esquire Tower (9th Floor), 21, Shaheed Tajuddin Ahmed Sharani, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Jamuna Electronics & Automobiles Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@jamunaelectronics.com",
    "phone_mobile": "+88-02-9824001-05",
    "web": "www.jamunagroup.com.bd",
    "address": "Jamuna Future Park, Dhaka-1229."
  },
  {
    "company_name": "MARCEL",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@marcelbd.com",
    "phone_mobile": "008809606-555555",
    "web": "www.marcelbd.com",
    "address": "Corporate Office: Plot # 1088, Block #1, Sabrina Sobhan Road, Khilkhet, Vatara, Bashundhara R/A, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Minister Hi-Tech Park Electronics Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@ministerbd.com",
    "phone_mobile": "09606700700, 41081751-52",
    "web": "www.ministerbd.com",
    "address": "Corporate Office: Minister Headquarters, House # 47, Road # 35/A, Gulshan-2, Dhaka-1212."
  },
  {
    "company_name": "M.K. Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "sales@mke.com.bd, info@mke.com.bd",
    "phone_mobile": "+88 09613333111, +88 01844617503-4",
    "web": "www.mke.com.bd",
    "address": "Atlanta Trade Center (11th Floor), Road # 1/A, House # 01, Sector # 04, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Myone Electronics Ind. Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "myoneelectronic@outlook.com",
    "phone_mobile": "09606700700, 41081751-52",
    "web": "www.myonebd.com",
    "address": "Corporate Office: House # 47, Road # 35/A, Gulshan-2, Dhaka-1212."
  },
  {
    "company_name": "Nitol Electronics Limited",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@niteloelectronics.com",
    "phone_mobile": "09636400400, 01953400400, 01926 684716",
    "web": "www.niteloelectronics.com",
    "address": "Nitol Center (12th Floor), 71, Mohakhali C/A, Dhaka-1212."
  },
  {
    "company_name": "Ponnobod Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@ponnobod.com",
    "phone_mobile": "+88 01856111313",
    "web": "www.ponnobod.com",
    "address": "46, West Shewrapara (3rd Floor), Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Rangs Electronics Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "marketing@rangs.com.bd",
    "phone_mobile": "+88 09612244244",
    "web": "www.rangs.com.bd",
    "address": "Sonartori Tower, 12, Sonargaon Road, Level-4, Banglamotor, Dhaka-1000."
  },
  {
    "company_name": "Singer Bangladesh Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@singerbd.com",
    "phone_mobile": "+88 09606600600, +88 01404452444",
    "web": "www.singerbd.com",
    "address": "Corporate Office: House # 5B, Road # 126, Gulshan-1, Dhaka-1212."
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Transcom Electronics Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@transcombd.com",
    "phone_mobile": "+88-02-58810561, 58814662",
    "web": "www.transcombd.com",
    "address": "Corporate Office: Gulshan Tower, Plot # 31, Road # 53, Gulshan North C/A, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Victor Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": null,
    "phone_mobile": "+88-02-47123047",
    "web": null,
    "address": "57, Bangabandhu National Stadium Market, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Vision Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@vision.com.bd",
    "phone_mobile": "08007777777",
    "web": "www.vision.com.bd",
    "address": "Corporate Office: PRAN Center, 105 Pragati Swarani, Middle Badda, Dhaka-1212."
  },
  {
    "company_name": "Walton HI-Tech Industries Ltd.",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@waltonbd.com",
    "phone_mobile": "008809606-555555",
    "web": "waltonbd.com",
    "address": "Corporate Office: Plot # 1088, Block # 1, Sabrina Sobhan Road, P.O-Khilkhet, P.S-Vatara, Bashundhara R/A, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Welcome Electronics",
    "category": "Television Manufacturers, Assemblers & Distributors",
    "email": "info@welcomeelectronics.com.bd",
    "phone_mobile": "+88 09678411444, +88 01713811904-5",
    "web": "www.welcomeelectronics.com.bd",
    "address": "AB Super Market, Dhaka Mymensingh Road, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "ALM Tensile Membrane Structure Ltd.",
    "category": "Tensile Membrane Structure Mfrs.",
    "email": "alm.tmsl@gmail.com",
    "phone_mobile": "+88 01777710007",
    "web": null,
    "address": "House # 466 (4th Floor), Road # 31, New DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "A S Tensile Membrane Structure BD",
    "category": "Tensile Membrane Structure Mfrs.",
    "email": "aaid.bd10@gmail.com",
    "phone_mobile": "0192366759, 01629840909",
    "web": null,
    "address": "House # 09, Shukrabad, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Shadetech Membrane Structure BD",
    "category": "Tensile Membrane Structure Mfrs.",
    "email": "info@shadetechbd.com",
    "phone_mobile": "01730020000, 01711540337, 01713381590",
    "web": "www.shadetechbd.com",
    "address": "House # 29, Road # 01, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Aaron Denim Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@aarondenimltd.com",
    "phone_mobile": "+88-02-22248807, 222248808",
    "web": "www.aarondenimltd.com",
    "address": "Unique Trade Centre (Level-9), 8, Panthapath Karwan Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Abdullah Dyeing Industries Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "abdullahdyeing@gmail.com, abdullahdyeing.factory@gmail.com",
    "phone_mobile": "+88-02-58314620, 8314620, 9338544, +88 01711534085",
    "web": null,
    "address": "Ka-90, Kuril (10th Floor), Suite # 11-G, Progoti Sharani, Dhaka-1229."
  },
  {
    "company_name": "Aboni Textiles Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": null,
    "phone_mobile": "+88-02-8023495-6, 8015128",
    "web": null,
    "address": "Plot # 169-171, Tetulzhora, Hemayetpur, Savar, Dhaka."
  },
  {
    "company_name": "Altex Industries Limited",
    "category": "Textile Dyeing & Printing",
    "email": "info@altextbd.com",
    "phone_mobile": "+8-02-48810664",
    "web": "www.altextbd.com",
    "address": "Suite # 5B, House # 1, Road # 27, Block # K, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Amber Denim Mills Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@ambergroom.com",
    "phone_mobile": "+88-02-9872370, 9872370, +88 01713367370",
    "web": "www.ambergroom.com",
    "address": "House # 02, Road # 09, Block # G, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Amber Yarn Dyeing Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@ambergroom.com",
    "phone_mobile": "+88-02-9872370, 9872370",
    "web": "www.ambergroup.com",
    "address": "House # 02, Road # 09, Block # G, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Anlima Yarn Dyeing Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@anlima.com",
    "phone_mobile": "+88-02-49349881-4, 49357719, 222221373, 48317216",
    "web": "www.anlima.com",
    "address": "Corporate Head Office: Suit # 4/3, City Heart, 67, Naya Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "A One Polar Limited",
    "category": "Textile Dyeing & Printing",
    "email": "info@mfgbd.net",
    "phone_mobile": "+8809612452222",
    "web": "www.mfgbd.net",
    "address": "Corporate Office: Navana Pristine Pavilion (6th & 7th Floor), 128, Gulshan Avenue, Block # CEN (H), Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Apon Textile Limited",
    "category": "Textile Dyeing & Printing",
    "email": null,
    "phone_mobile": "+88-02-9673936, +88 01926810803",
    "web": null,
    "address": "Building # 6, Shop # 63, Chandni Chawk Market (3rd Floor), Mirpur Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "APS Apparels Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@aps-group.org",
    "phone_mobile": "+88-02-55083091-95, 01817292847, 01817049134",
    "web": "www.aps-group.org",
    "address": "Plot # 14 & 16 Sonargoon Janapath Road, Khan Tower (08th-11th Floor), Sector # 11, Uttara Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bengal Hurricane Dyeing & Printing (Pvt.) Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@bhkast.com",
    "phone_mobile": "+88-02-8870457, 8870458",
    "web": "www.nhk-ast.com",
    "address": "122/A, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety & Consultancy",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025090, 01816033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Hossain Dyeing & Printing Mills Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "mail@anwargroup.net",
    "phone_mobile": "+88-02-223384033-36",
    "web": "www.hossaindyeing.com",
    "address": "Jatibor House Building (15th Floor), 27 Diluksha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Labras Textiles Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@labrastex.com",
    "phone_mobile": "+88-02-9859609-11, 9859691",
    "web": "www.labrastex.com",
    "address": "Jabber Tower, Level-11, 42, Gulshan Avenue, Gulshan-1, Dhaka-1212."
  },
  {
    "company_name": "Metro Knitting & Dyeing Mills Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@metrokd.com",
    "phone_mobile": "01714070358, 01713441204",
    "web": "www.metrokd.com",
    "address": "Navana Pristine Pavilion, Level 10th & 11th, 128 Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Pakkiza Group",
    "category": "Textile Dyeing & Printing",
    "email": "info@pakizagroup.com",
    "phone_mobile": "+88 01725402739",
    "web": "www.pakizagroup.com",
    "address": "House # 97, Road # 11/A, Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Rahim Textile Mills PLC.",
    "category": "Textile Dyeing & Printing",
    "email": "info@newasibad.com",
    "phone_mobile": "+880961211177",
    "web": "www.newasibad.com",
    "address": "117/A, Tejgaon I/A, Dhaka-1208."
  },
  {
    "company_name": "Ring Shine Textiles Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@ringshine.com",
    "phone_mobile": "+88 01713048612",
    "web": "www.ringshine.com",
    "address": "Head Office: Plot # 224-260, Extension Area, DEPZ, Ganakbari, Savar, Dhaka, Bangladesh"
  },
  {
    "company_name": "SEQUENTIAL",
    "category": "Textile Dyeing & Printing",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "INDUSTRIAL, COMMERCIAL, RESIDENTIAL"
  },
  {
    "company_name": "SECOTEX Dyeing & Printing Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@secotexgroup.com",
    "phone_mobile": "+88-02-58153015",
    "web": "www.secotexgroup.com",
    "address": "6/5, Moneshwar Road, Zigatola, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "TRU Fabrics Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@trufabrics.com",
    "phone_mobile": "+88-02-22289788, 01321127446, 01321127461",
    "web": "www.trugroup.com.bd",
    "address": "Head Office: Chamak Vintage (Level-4 & 5), House # 15/B, Road # 08, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Ambia Knitting & Dyeing Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@ambiatgroup.com",
    "phone_mobile": "+88-031-723575, 716447",
    "web": "www.ambiatgroup.com",
    "address": "7, Agrabad C/A, Chattogram-4000."
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "(A Concern of SIGMA Elevator Group)"
  },
  {
    "company_name": "Four H Dyeing & Printing Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "jamil@fourhgroup.com",
    "phone_mobile": "09619200400, 09619200401, 09619200402",
    "web": "www.fourhgroup.com",
    "address": "778, D.T. Road, Ashkarabad, Doublemooring, Chattogram."
  },
  {
    "company_name": "ACS Textiles (Bangladesh) Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "acsinfo@acstextiles.com",
    "phone_mobile": "09606500445, 09678500445, +88 01713229908",
    "web": "www.acstextiles.com",
    "address": "Tetlabo, Rupganj, Narayanganj."
  },
  {
    "company_name": "Hajee Akhter Textile & Processing Mills Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "info@hajeeaktertextile.com",
    "phone_mobile": "01711537985, 01713004043",
    "web": "www.hajeeaktertextile.com",
    "address": "Head Office: Girda-Nagarpara, Duptara, Araihazar, Narayanganj-1460, Bangladesh"
  },
  {
    "company_name": "M. S. Dyeing, Printing & Finishing Ltd.",
    "category": "Textile Dyeing & Printing",
    "email": "msdyeing@gmail.com, munni@msdyeing.com",
    "phone_mobile": "+88-02-47670244, 47670255, 47670266, 47670277, 47671801",
    "web": "www.msdyeing.com",
    "address": "Corporate Office & Factory: Plot # B-237-252, B-260-273, BSCIC Industrial Area, Enayet Nagar, Fatullah, Narayanganj-1400."
  },
  {
    "company_name": "Anwar Dyeing Printing & Finishing Mills",
    "category": "Textile Dyeing & Printing",
    "email": "astoriyatextile@gmail.com",
    "phone_mobile": "+88 01924939513",
    "web": null,
    "address": "Baghata, Shilmandi, Narsindi."
  },
  {
    "company_name": "Active Associates",
    "category": "Textile Machineries & Spare Parts",
    "email": "active@activeassociatesbd.com",
    "phone_mobile": "+88 01978091954",
    "web": "www.activeassociatesbd.com",
    "address": "4th Floor, House # 20, Road # 24, Sector # 7, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Asif Trade Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "office@atl.com.bd",
    "phone_mobile": "+88 01855901070-80",
    "web": "www.atl.com.bd",
    "address": "Baitul Khair Tower, 6th Floor, Suite # 603, 48/A-B, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "China Bangla Engineers & Consultants Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "cbec.linfo@yahoo.com, cbec.linfo@gmail.com",
    "phone_mobile": "+8809696752370, +88 01716752730",
    "web": "www.cbec.linfo",
    "address": "House # 20, Road # 5, Sector # 6, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Confidence International",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@confidenceint.com",
    "phone_mobile": "+88 01711544055",
    "web": "www.confidenceint.com",
    "address": "House # 211 (2nd - 5th Floor), Road # 13, Ranavola Avenue, Sector # 10, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Confidence Trading International",
    "category": "Textile Machineries & Spare Parts",
    "email": "afzal.confidence@gmail.com",
    "phone_mobile": "01716293503, 01711585964",
    "web": null,
    "address": "House # 4, Road # 18, Nikunjia-2, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Cott-tex Associates",
    "category": "Textile Machineries & Spare Parts",
    "email": "office@cott-tex.com",
    "phone_mobile": "+88-02-48954089, 58954792, 48958470",
    "web": "www.cott-tex.com",
    "address": "House # 39 (L-08), Road # 15 (Rabindra Sharani), Sector # 03, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Euro Asia Solutions",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@euroasiasolutions.com, euroasiasolutions.bd@gmail.com",
    "phone_mobile": "01715409957, 01713007327, 01619188875, 01975504790",
    "web": "www.euroasiasolutions.com",
    "address": "Corporate Office: House # 30/A (3rd Floor), Road # 04, Sector # 03, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Fabulous Technology",
    "category": "Textile Machineries & Spare Parts",
    "email": "info.fabulousbd@gmail.com",
    "phone_mobile": "+88 01717050001",
    "web": "www.fabulous.com.bd",
    "address": "House # 27, Road # 29, Sector # 7, Uttara-1230, Bangladesh"
  },
  {
    "company_name": "Fareetex Tech Co.",
    "category": "Textile Machineries & Spare Parts",
    "email": "faruque@fareetextechco.com",
    "phone_mobile": "+88 01911391269",
    "web": "www.fareetextechco.com",
    "address": "House # 431 (5th Floor), Road # 30, New DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "Glorious Tech BD",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@glorious-techbd.com",
    "phone_mobile": "+88 01712962472",
    "web": "www.glorious-techbd.com",
    "address": "House # 25, Road # 04, Sector # 03, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Hi-Tech Machinery Co., Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "hittechmclbd@gmail.com",
    "phone_mobile": "+88-02-58951654, 58955715, +88 01819432063",
    "web": "www.hittechmc.net",
    "address": "2, Shahjalal Avenue, Sector # 4, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "HNC Automation & Engineering",
    "category": "Textile Machineries & Spare Parts",
    "email": "hnc.ael@gmail.com",
    "phone_mobile": "+88 01716606922",
    "web": null,
    "address": "Room # 322, 2nd Floor, 198-202, Nawabpur Road, Dhaka-1100."
  },
  {
    "company_name": "Lisky Technology (BD) Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "lisky@liskytech.com",
    "phone_mobile": "+88-02-22285750-51, 22296179",
    "web": "www.liskytech.com",
    "address": "Flat-101, House # 02, Road # 76, Gulshan-2, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912478865, 01712622346",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Palakata, Lakhankhola, Bandar, Karayanagar"
  },
  {
    "company_name": "Golden Hill Tex Resources Company",
    "category": "Textile Machineries & Spare Parts",
    "email": "ghbltd@yahoo.com, info@goldenhillbd.com",
    "phone_mobile": "+88-02-47112097, +88 01675952032",
    "web": "www.goldenhillbd.com",
    "address": "Corporate Office: Rahman Chamber (2nd Floor), 12/13, Motijheel C/A, Dhaka-1000, Bangladesh. Factory & Warehouse: Lalpur Sardar Road, Punchaboti, Futullah, Narayanganj, Bangladesh"
  },
  {
    "company_name": "M.B. Trade Corporation",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@mbtradebd.com, atuldev@mbtradebd.com",
    "phone_mobile": "01713461968, 01977379668",
    "web": "www.mbtradecorp.com",
    "address": "House # 57 (1st Floor), Road # 14, Sector # 13, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Naz Corporation",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@nazcorporation.com",
    "phone_mobile": "01701443454, 01711110203",
    "web": "www.nazcorporation.com",
    "address": "House # 06, Suit # 05, Road # 33, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "NT International",
    "category": "Textile Machineries & Spare Parts",
    "email": "mdalam@ntintlbd.com",
    "phone_mobile": "+88 01911350025",
    "web": "www.ntintlbd.com",
    "address": "Flat # 3-B, House # 3, Road # 7, Block # C, Niketon Housing Society, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Trust Resources Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@trustresourcesltdbd.com, mosiur@trustresourcesltdbd.com",
    "phone_mobile": "01714694605, 01711232065, 01847280381",
    "web": "www.trustresourcesbd.com",
    "address": "226/A, Bhuiyan Plaza, Unit-1 & 20, South Pirebag, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Trusted Partner Bangladesh Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "alimallik@trustedpartnerbdltd.com, md.zahourali@yahoo.com",
    "phone_mobile": "01711332156, 01711385505",
    "web": "www.trustedpartnerbd.com",
    "address": "House # 40, Block # A, Road # 5, Flat # 2B (Level-2), Banasree Project, Rampura, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Uni Asia Associates Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "sales@unisia.net, info@unisia.net",
    "phone_mobile": "+88-02-58952950, 58951490, 58950476, 58952151",
    "web": "www.unisia.net",
    "address": "House # 20, Road # 6, Sector # 1, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Unitex Associates",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@unitexassociates.com",
    "phone_mobile": "01712433526, 01713205432, 01710413947",
    "web": "www.unitexassociates.com",
    "address": "House # 51, Road # 01, Sector # 09, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Universal Textile Machinery",
    "category": "Textile Machineries & Spare Parts",
    "email": "universaltextilemachinery01@gmail.com",
    "phone_mobile": "+88 01727623604",
    "web": "www.universaltextilemachinery.com",
    "address": "House # 684, Road # 09 Avenue # 06, DOHS, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Vertex Technology",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@vertextbd.com",
    "phone_mobile": "+88 01721561488",
    "web": "www.vertextbd.com",
    "address": "House # 05, Road # 08, Sector # 07, New Eskaton, Dhaka, Bangladesh"
  },
  {
    "company_name": "Wintex Resources Limited",
    "category": "Textile Machineries & Spare Parts",
    "email": "faruk@wintex.com.bd",
    "phone_mobile": "+88 01713177777",
    "web": "www.wintex.com.bd",
    "address": "8/ka (3rd Floor), P.C. Culture, Ring Road, Shyamoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "ZMZ Associates Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@zmzassociates.com",
    "phone_mobile": "+88-02-48963247, +88 01755592691-92",
    "web": "www.zmzassociates.com",
    "address": "House # 22 (2nd Floor), Flat # 2B, Road # 13, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Proknit Engineering Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "info@proknit.com.bd",
    "phone_mobile": "+88-02-9297788, +88 01711556122",
    "web": "www.proknit.com.bd",
    "address": "S/48, BSCIC Industrial Estate, Konabari, Gazipur-1346, Bangladesh"
  },
  {
    "company_name": "Pacific Associates Ltd.",
    "category": "Textile Machineries & Spare Parts",
    "email": "palngonj@pacificalbd.com",
    "phone_mobile": "+88 01819257029",
    "web": "www.pacificalbd.com",
    "address": "Narayanganj Office: 33/3, H.K. Banerjee Road, 3rd Floor, Mission Para More, Narayanganj-1400."
  },
  {
    "company_name": "A & T Flat Knit Industry",
    "category": "Textile Mills",
    "email": "antflatknit@gmail.com",
    "phone_mobile": "01711278994, 01731782766",
    "web": null,
    "address": "Plot # 06, Dewan Edrish Road, Zirabo, Ashulia, Dhaka, Bangladesh"
  },
  {
    "company_name": "AB Textiles Mills (BD) Ltd.",
    "category": "Textile Mills",
    "email": "info@abtextilesbd.com",
    "phone_mobile": "01911778280, 01779217957",
    "web": "www.abtextilesbd.com",
    "address": "House # 29 (1-A), Road # 16, Sector # 12, Uttara Model Town, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Afaz Textile & Composite Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@asiatic-group.com",
    "phone_mobile": "+88-02-223350202, 223358614, +88-02-55088219, 55088220",
    "web": "www.asiatictextile.com",
    "address": "28 Dilkusha, (2nd Floor), Dilkusha Center, Motijheel, Dhaka-1000. Marketing Address: House # 9 (1st Floor), Road # 10, Sector # 12, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Afsar Textile Industries (Pvt.) Ltd.",
    "category": "Textile Mills",
    "email": null,
    "phone_mobile": "+88 01754209523",
    "web": null,
    "address": "62/1, Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Aftab Spinning Mills Ltd.",
    "category": "Textile Mills",
    "email": "aftab_g@aitlbd.net",
    "phone_mobile": "02-223381980, 223351682-83",
    "web": "www.aftabgroup.com.bd",
    "address": "Uttara Bank Bhaban (4th & 5th Floor), 47, Bir Uttam Shahid Asfaqus Samad Sarak (Old-90), Motijheel C/A, Dhaka."
  },
  {
    "company_name": "Akij Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@akijtextilebd.com",
    "phone_mobile": "+8809613116609",
    "web": "www.akijtextilebd.com",
    "address": "Akij House, 198 Bir Uttam, Mir Shawkat Sarak, Gulshan Link Road, Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Alauddin Textile Mills (ATM) Pvt. Ltd.",
    "category": "Textile Mills",
    "email": "info@atmbd.com",
    "phone_mobile": "+88-02-222226160, +88 01713489017",
    "web": "www.atmbd.com",
    "address": "Head Office: Eastern Plus Commercial Complex, Suite # 8/1-3, 145 Shantinagar, Dhaka-1217 Bangladesh"
  },
  {
    "company_name": "Alhaj Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@alhajtextilemill.com",
    "phone_mobile": "+88-02-223390929",
    "web": "www.alhajtextilemill.com",
    "address": "Head Office: 66 Dilkusha C/A, 4th Floor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475885, 01712623346",
    "web": "www.eyeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "A.G. Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@ahossiangroup.com",
    "phone_mobile": "+88-02-9663393, 9663394, +88 01936014042",
    "web": "www.ahossiangroup.com",
    "address": "Head Office: House # 06, Road # 01, Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Ahsan Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": null,
    "phone_mobile": "+88 01713007250",
    "web": null,
    "address": "House # 14, Road # 07, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "AKSA Tex Knitwear (AKSA)",
    "category": "Textile Mills",
    "email": "mdkhairul@kastexknitwear.com, khairulkastex@gmail.com",
    "phone_mobile": "01625704081, 01731678614",
    "web": "www.aksatexknitwear.com",
    "address": "Dairy Farm, Ashulia, Savar, Dhaka-1349, Bangladesh"
  },
  {
    "company_name": "Al-Hamra Textile Mills (Pvt.) Ltd.",
    "category": "Textile Mills",
    "email": null,
    "phone_mobile": "+88 01711359241",
    "web": null,
    "address": "9/1, Kadamtala (1st Floor), 1st Lane, Basabo, Dhaka-1214."
  },
  {
    "company_name": "Alibaba Composite Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@alibabatetexlibbd.com",
    "phone_mobile": "+88 01731061974",
    "web": "www.alibabatetexlibbd.com",
    "address": "Plot # 25, Road # 07, Sector # 03, Rajlaxmi Complex (5th Floor), Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Alif Textile",
    "category": "Textile Mills",
    "email": "mazumder003@gmail.com, alif.textile@gmail.com",
    "phone_mobile": "+88 01716850710",
    "web": "www.aliftextile.com",
    "address": "House # 40, Plot # 3A, Rood # 03, Sector # 13, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction Technology",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "Alif Unitex Ltd.",
    "category": "Textile Mills",
    "email": "info@alifgroup-bd.com",
    "phone_mobile": "+88-02-9110065, +88-02-5881522, 58815227, 58815228, 58815229",
    "web": "www.alifgroup-bd.com",
    "address": "Head Office: 21/22, Babar Road, Block # B, Mohammadpur, Dhaka-1207, Bangladesh. Corporate Office: Bijus Tower (5th Floor), House # 06, Road # 46, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Al-Islam Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@pioneergroupbd.com",
    "phone_mobile": "+8809609383838",
    "web": "www.pioneergroupbd.com",
    "address": "Head Office: 37, Hemayetpur, Savar, Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Amanat Shah Fabrics Ltd.",
    "category": "Textile Mills",
    "email": "info@amanatshahfabrics.com",
    "phone_mobile": "+88 01321118200",
    "web": "www.amanatshahfabrics.com",
    "address": "Corporate Head Office: City Center Level-24, 90/1, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "AnonTex Group",
    "category": "Textile Mills",
    "email": "info@anontexgroup.com",
    "phone_mobile": "+88-02-8950541, 9812823",
    "web": "www.anontexgroup.com",
    "address": "Corporate Office: House # 30, Road # 3/F, Sector # 9, Uttara, Dhaka-1230, Bangladesh. Factory: 99, Auchapara, Sujib Road, Nishtanagar, Tongi, Gazipur-1711, Bangladesh"
  },
  {
    "company_name": "Apan Textile Mills",
    "category": "Textile Mills",
    "email": "info@apantextile.com",
    "phone_mobile": "+88-02-7912039, +88 01713452567",
    "web": "www.apantextile.com",
    "address": "Head Office: 6 (5th Floor East), Road # 13, Sector # 7, Uttara Model Town, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Aparupa Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": null,
    "phone_mobile": "+88 01711689621",
    "web": null,
    "address": "Head Office: 431, Road # 30, Flat-D (2nd Floor), New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Ajib Textile Mills",
    "category": "Textile Mills",
    "email": "info@ajistextile.com",
    "phone_mobile": null,
    "web": "www.ajistextile.com",
    "address": "Head Office: 6, Road # 13, Sector # 7, Uttara, Dhaka 1230, Bangladesh"
  },
  {
    "company_name": "Asend Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@asendtex.com",
    "phone_mobile": "01921444888, 01714374210",
    "web": "www.asendtex.com",
    "address": "Head Office: 05 (5th Floor), Road # 08, Block # F, Niketon, Gulshan, Dhaka."
  },
  {
    "company_name": "Ashik Composite Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@peninsulagroup.info",
    "phone_mobile": "+88-02-55011591-8",
    "web": "www.peninsulagroup.info",
    "address": "Corporate Office: BDBL Bhaban (12th Floor), 12, Kawran Bazar C/A, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Askona Textile Ltd.",
    "category": "Textile Mills",
    "email": null,
    "phone_mobile": "+88 01820266611",
    "web": null,
    "address": "House # 13/A, Road # 4/A, Dhanmondi R/A, Dhaka-1209."
  },
  {
    "company_name": "Asaud Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": null,
    "phone_mobile": "01711820532, 01973005060",
    "web": null,
    "address": "Lal Bhaban (4th Floor), 18, DIT Avenue, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Asiatic Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@asiatic-group.com",
    "phone_mobile": "+88-02-22335020, 223358614, +88-02-5588219, 55088220",
    "web": "www.asiatictextile.com",
    "address": "Corporate Head Office: 28 Diluksha, (2nd Floor), Diluksha Center, Motijheel, Dhaka-1000, Bangladesh. Marketing Address: House # 9 (1st Floor), Road # 10, Sector # 12, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Badsha Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@badshatex.com",
    "phone_mobile": "02-48810871-77, 09609222888",
    "web": "www.badshatex.com",
    "address": "Head Office: Holland Center (8th Floor), Cha-72/1-B, Pragati Sarani, Middle Badda, Dhaka-1212."
  },
  {
    "company_name": "Best Fabric Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@bestfabrictextiles.ltd",
    "phone_mobile": "+88 01717024008",
    "web": "www.bestfabrictextiles.ltd",
    "address": "Head Office: House # 2, Flat # B1, Road # 20, Sector # 3, Uttara Model Town, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bhawal Textile",
    "category": "Textile Mills",
    "email": "info@bhawaltextile.com",
    "phone_mobile": "+88 01711332722",
    "web": "www.bhawaitextile.com",
    "address": "Head Office: 32, Road # 12, Sector # 10, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Chowai Textile Ltd.",
    "category": "Textile Mills",
    "email": "info@chokid.com",
    "phone_mobile": "+88 09660500652, +88 01711544478",
    "web": "www.chokid.com",
    "address": "Head Office: 35, Road # 19, Sector # 7, Uttara, Uttara, Dhaka-1230."
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety & Consultancy",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01719025090, 01716033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Binwas Textiles Ltd.",
    "category": "Textile Mills",
    "email": "babu@binwaspgroup.net",
    "phone_mobile": "+88 02-9668835-7, 8611796",
    "web": "www.binwaspgroup.net",
    "address": "J.S. Bhaban, 95, Bir Uttam C.R. Dutta Road (299/2-A, Sonargaon Road)"
  },
  {
    "company_name": "Chaitiy Composite Ltd.",
    "category": "Textile Mills",
    "email": "yasar@chaitiy.com",
    "phone_mobile": "+88 01325086158",
    "web": "www.chaitiy.com",
    "address": "House # 14, Lake Drive Road, Sector # 7, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Envy Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@envoytextiles.com",
    "phone_mobile": "+88-02-41021684-95",
    "web": "www.envoytextiles.com",
    "address": "18/E, Lake Circus, Kalabagan, West Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Epyllion Knitex Ltd.",
    "category": "Textile Mills",
    "email": "info@epylliongroup.com",
    "phone_mobile": "+88 01730020020",
    "web": "www.epylliongroup.com",
    "address": "Corporate Office: NINAKABBO, Level-12-13, 227/A, Tejgaon-Gulshan Link Road, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Faro-Cot Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@farocottextile.com",
    "phone_mobile": "01768667200, 01717835551",
    "web": "www.farocottextile.com",
    "address": "Razzak Tower, Suite # 2A (2nd Floor), 5 Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "(A Concern of SIGMA Elevator Group)"
  },
  {
    "company_name": "Fahim Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "fariha.group@yahoo.com, info@farihagroup.com",
    "phone_mobile": "+88 01731304047",
    "web": "www.farihagroup.com",
    "address": "Corporate Office: Eastern Plus, 145, Shantinagar (7th Floor), Suite # 7/1-7, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Formosa Poly Cotton Textiles (BD) Ltd.",
    "category": "Textile Mills",
    "email": "info@formosatex.com",
    "phone_mobile": "+88 01847184051",
    "web": "www.formosatex.com",
    "address": "Alamin Icon Center, Level-8, Flat-8/A, 57/4, Progoti Sharani, Norda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Fakhruddin Textiles Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@urmigroup.com.bd",
    "phone_mobile": "09612451188",
    "web": "www.urmigroup.com.bd",
    "address": "Corporate Office: Sam Tower, Level-3, 4 & 5, House # 04, Road # 22, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Graphics Textiles Limited",
    "category": "Textile Mills",
    "email": "contact@graphics.com.bd",
    "phone_mobile": "+88-02-226601055, +8806139908880, +88 01730019945",
    "web": "www.graphicstextiles.com",
    "address": "Corporate Office: 225, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Hamza Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@dbl-group.com",
    "phone_mobile": "+88-02-58817735",
    "web": "www.dbl-group.com",
    "address": "Corporate Office: Capita South Avenue Tower, 6th Floor, House # 50, Road # 03, Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Hazrat Amanat Shah Spinning Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@asg-bd.com",
    "phone_mobile": "+88-02-223357949, 223358403",
    "web": "www.asg-bd.com",
    "address": "City Center (Level-24), 90/1 Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "H. H. Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@asiatic-group.com",
    "phone_mobile": "+88-02-223350202, 223358614",
    "web": "www.asiatictextile.com",
    "address": "Corporate Head Office: 28 Dilkusha (2nd Floor), Dilkusha Center, Motijheel, Dhaka-1000."
  },
  {
    "company_name": "Jahanara Cotton Tex Ltd.",
    "category": "Textile Mills",
    "email": "info@jahanaratex.com, alamgir@jahanaratex.com",
    "phone_mobile": "+88 01913456297",
    "web": "www.jahanaratex.com",
    "address": "Head Office: House # 10 (1st Floor), Road # 14, Sector # 4, Uttara Model Town, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Jahan Textile Mills",
    "category": "Textile Mills",
    "email": "fibres@jahangroup-bd.com",
    "phone_mobile": "+88 01711564900",
    "web": "www.jahangroup-bd.com",
    "address": "3 R. K. Mission Road, Lily Pond Center, Level-22, Motijheel, Dhaka."
  },
  {
    "company_name": "Jaj Bhuiyan Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "hjq@ajbhuiyan.com",
    "phone_mobile": "09613220223-4",
    "web": "www.jabhiuyan.com",
    "address": "Corporate Office: Gawsia Kashem Centre (7th & 8th Floor), 10/2, Arambag, Motijheel, Dhaka-1000."
  },
  {
    "company_name": "Jamaluddin Textile (Pvt.) Ltd.",
    "category": "Textile Mills",
    "email": "jamal@jamaluddinggroup.com",
    "phone_mobile": "+88-02-9551127, 9557334, 9571641, 9551636",
    "web": "www.jamaluddinggroup.com",
    "address": "Corporate Office: 28, Dilkhusha C/A (11th & 19th Floor), Motijheel, Dhaka"
  },
  {
    "company_name": "Joynpuri Ashrafia Textile Mills",
    "category": "Textile Mills",
    "email": "joynpuri@gmail.com, provati_teather@yahoo.com",
    "phone_mobile": "+88-02-9559802, 9559773, +88 01711533383",
    "web": null,
    "address": "21, North South Road (1st Floor), Bangshal, Dhaka-1100, Bangladesh. Factory: Kazipara, Rupshi, Rupganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Karim Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@purbanigroup.com",
    "phone_mobile": "+88-02-222285205, +88-02-222295208",
    "web": "www.purbanigroup.com",
    "address": "Richmond Concord, 1st, 5th & 6th Floor, 68, Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Mahathir Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "monir@mahathirtextile.com",
    "phone_mobile": "01715832353, 01714070410",
    "web": "www.mahathirtextile.com",
    "address": "Head Office: Rangs Tower, House # 14, Shah Jalal Avenue, Flat # A2 & B2 (2nd Floor), Sector # 04, Uttara Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Mother Textile Mills Limited",
    "category": "Textile Mills",
    "email": "info@mothertextile.com",
    "phone_mobile": "+88 01914064732",
    "web": "www.mothertextile.com",
    "address": "Sena Kalyan Bhaban (15th Floor), 195, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "Mymun Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@dbl-group.com",
    "phone_mobile": "+88-02-58817737",
    "web": "www.dbl-group.com",
    "address": "Corporate Office: House # 10/A, Road # 4, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Naheed Composite Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@naheedgroup.com",
    "phone_mobile": "02-55012059",
    "web": "www.naheedgroup.com",
    "address": "Corporate Office: BDDl Bhaban (12th Floor), 12 Karwan Bazar, Dhaka-1215."
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Manufacturer",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.ayeshacps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Mahin Textile",
    "category": "Textile Mills",
    "email": "mahintx@gmail.com",
    "phone_mobile": "+88 01840043381",
    "web": null,
    "address": "10/7, West Jatrabari, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Maxima Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@maximabd.com",
    "phone_mobile": "09614446666",
    "web": "www.maximabd.com",
    "address": "1st Floor, House # 40, Road # 6/C, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Mosharaf Composite Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "info@mosharafgroup.com",
    "phone_mobile": "+88 01758057414",
    "web": "www.mosharafgroup.com",
    "address": "Red Crescent Borak Tower (SW) Level-7, 71-72, Old Elephant Road, Eskaton, Ramna, Dhaka-1000."
  },
  {
    "company_name": "Nannu Textile Ltd.",
    "category": "Textile Mills",
    "email": "info@nannugroup.com",
    "phone_mobile": "02-57390266, 57392671, +88 0170781553",
    "web": "www.nannugroup.com",
    "address": "1st Floor, Daulat Complex, 109 Islampur Road, Dhaka-1100."
  },
  {
    "company_name": "Niagara Textiles Ltd.",
    "category": "Textile Mills",
    "email": "info@niagaratex.com",
    "phone_mobile": "+88 01778714920",
    "web": null,
    "address": "Head Office: 27, Bijoy Nagar, Suite # C-1 (1st Floor), Dhaka-1000."
  },
  {
    "company_name": "Noorjahan Textile Mills Ltd.",
    "category": "Textile Mills",
    "email": "arif@melagroupb.com",
    "phone_mobile": "+88 01841556678",
    "web": "www.melagroupb.com",
    "address": "House # 120 (Ground Floor), Lane # 05, Eastern Road, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Jalabad Steel Building Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@jalabadsteel.net",
    "phone_mobile": "01708515290",
    "web": "www.jalabadsteel.net",
    "address": "15/A (4th Floor), Road # 5, Block # F Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Joint Star Steel Structure Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "rongy@jointstarsteel-bd.com",
    "phone_mobile": "+88 01713077167",
    "web": "www.jointstarsteel-bd.com",
    "address": "Corporate Office: House # 56 (Gr. Floor), Gausul Azam Avenue, Sector # 13, Uttara, Dhaka-1230."
  },
  {
    "company_name": "KR Steel Structure Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@krsteelstructure.com",
    "phone_mobile": "+88 01708432501",
    "web": "www.krsteelstructure.com",
    "address": "Dhaka Office: House # 20/B, 1st Floor, Road # 26, Gulshan C.W.S.(B). Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Lexel Steel Building Systems Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@lexelsteel.com",
    "phone_mobile": "+88 01715575131",
    "web": "www.lexelsteel.com",
    "address": "House # 446 West (5th Floor), Road # 31, Mohakhali DOHS, Dhaka-1206."
  },
  {
    "company_name": "Major Steel Building Technology Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@majorsteel.com",
    "phone_mobile": "01622114455",
    "web": "www.majorsteelbd.com",
    "address": "Corporate Office: House # 77, Road # 04, Block # C, Banani, Dhaka-1213."
  },
  {
    "company_name": "MARN Steel Structure Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@marnsteel.com",
    "phone_mobile": "+88 01914242400",
    "web": "www.marnsteel.com",
    "address": "House # 09 (2nd Floor), Garib-E-Newaz Avenue, Sector # 11, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Macdonald Steel Bldg Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@masudsteel.com",
    "phone_mobile": "01916885277",
    "web": "www.masudsteel.com",
    "address": "Head Office: 19, Gareeb-E-Newaz Avenue, Sector # 13, Uttara, Dhaka."
  },
  {
    "company_name": "McDonald Steel Building Products Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "mcdnld@mcdonaldbdd.com",
    "phone_mobile": null,
    "web": "www.mcdonaldsteelbd.com",
    "address": "Head Office: Shanta Western Tower (Level-11) 186, Bir Uttam Mir Shawkat Ali Sarak Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Mec Tech Corporation Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@mectech.net",
    "phone_mobile": "+88 01708420275",
    "web": "www.mectech.net",
    "address": "House # 122 (1st Floor), Road # 1, Avenue-3, Mirpur DOHS, Dhaka-1216"
  },
  {
    "company_name": "Metal Building Systems Limited",
    "category": "Steel Building Manufacturers",
    "email": "emdad0201106@gmail.com",
    "phone_mobile": "+88 01712717538",
    "web": "www.mbsl-peb.com.bd",
    "address": "Flat-8/A-2, Mizan Tower (8th Floor) 115, Shaheed Tajuddin Ahamed Sarani, Baro Moghbazar, Dhaka-1217."
  },
  {
    "company_name": "Metal Core Limited",
    "category": "Steel Building Manufacturers",
    "email": "metalcorebd@gmail.com",
    "phone_mobile": "01672521603",
    "web": "www.metalcorebd.com",
    "address": "Corporate Office: House # 123, 1st Floor, Road # 03, Block-A, Section-12, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Modern Structures Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@modernstructuresltd.com",
    "phone_mobile": "01711527640",
    "web": "www.modernstructuresltd.com",
    "address": "Head Office: Bridge Momtaj Heigh's (Level-3), 15/2, Mirpur Road, Shaymoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Modern Structural Steel Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@modernsteel.com.bd",
    "phone_mobile": "01711540680",
    "web": "www.modernsteel.com.bd",
    "address": "19-B/2-C & 19-B/2-D (7th Floor), Ring Road, Mohammadapur Dhaka-1207."
  },
  {
    "company_name": "Multi-Concept Steel Building Products Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "multiconcept09@gmail.com",
    "phone_mobile": "+88 01711568408",
    "web": null,
    "address": "House # 465 (1st Floor), Road # 31, New DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "Nakshi Steel Building Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@nakshi-bd.com",
    "phone_mobile": "+88 01761745082",
    "web": "www.nakshi-bd.com",
    "address": "Nakshi Tower, House # 26/3, Road # 02, Block-B, Mirpur-12, Dhaka-1216."
  },
  {
    "company_name": "NDE Steel Structures Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info.steel@ndebd.com",
    "phone_mobile": "01708804102",
    "web": "www.steel.ndebd.com",
    "address": "Corporate Office: House # 22, Road # 4, Block-C, Banani, Dhaka-1213."
  },
  {
    "company_name": "NR Steel Alliance BD",
    "category": "Steel Building Manufacturers",
    "email": "nrsteelbd@gmail.com",
    "phone_mobile": "+88 01722306064",
    "web": "www.nrsteel-bd.com",
    "address": "Gp-Ga-3/1/B, 2nd Floor, Shahajadpur Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Orsand Steel & Engineering",
    "category": "Steel Building Manufacturers",
    "email": "orsandsteel.bd@gmail.com",
    "phone_mobile": "01912290087",
    "web": null,
    "address": "Corporate Office: House # 44 (3rd Floor), Road # 14, Sector # 07, Rabindra Sarani, Uttara, Dhaka-1230."
  },
  {
    "company_name": "PEB Steel Alliance Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@pebsteelalliance.com",
    "phone_mobile": null,
    "web": "www.pebsteelalliance.com",
    "address": "Head Office: The Alliance Building, 4th & 5th Floor, 63, Pragati Sarani, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Quantum Builders & Engineering Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "admin@qbelbd.com",
    "phone_mobile": "01841544700",
    "web": "www.qbelbd.com",
    "address": "Head Office: House # 278, Road # 19 (Lake Road), Level-4, DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Rapid Steel Structure Limited",
    "category": "Steel Building Manufacturers",
    "email": "info@rapidsteelbd.com",
    "phone_mobile": "+88 01611908148",
    "web": "www.rapidsteelbd.com",
    "address": "Ta-199 (4th Floor), Shahadat Sarani (Badda High School Road), South Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Robust Steel Building Technology Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@robuststeelbd.com",
    "phone_mobile": "01304347305",
    "web": "www.robuststeelbd.com",
    "address": "Head Office: House # 24 (Flat-A-4), Road # 01, Block # B, Niketan, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sarker Steel Limited",
    "category": "Steel Building Manufacturers",
    "email": "info@sarkersteelbd.com",
    "phone_mobile": null,
    "web": "www.sarkersteelbd.com",
    "address": "13/A, Planners' Tower (18th Level) Bir Uttam CR Datta Road, Sonargaon Road, Banglamotor, Dhaka-1000."
  },
  {
    "company_name": "SKS Steel Structure Limited",
    "category": "Steel Building Manufacturers",
    "email": "skssteelbd@gmail.com",
    "phone_mobile": "01711787556",
    "web": "www.skssteelbd.com",
    "address": "6/7, Ring Road, Shyamoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "SteelCraft PEB Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "steelcraftpebld@gmail.com",
    "phone_mobile": "+88 01855957900",
    "web": "www.steelcraftpeb.com",
    "address": "House # 6/4, Ground & 1st Floor, Block # D, Lalmatia, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Steelmark Buildings Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "admin@steelmark.com.bd",
    "phone_mobile": null,
    "web": "www.steelmark.com.bd",
    "address": "Corporate Office: DK Tower, Level-5, 94 Bir Uttam CR Dutta Road, Banglamotor, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Steelpac",
    "category": "Steel Building Manufacturers",
    "email": "info@energypac.com",
    "phone_mobile": null,
    "web": "www.steelpacbd.com",
    "address": "Energy Center, 25, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Steel Sign Construction Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@steelsign.com.bd",
    "phone_mobile": "+88 01777750400",
    "web": "www.steelsign.com.bd",
    "address": "Head Office: House # 06 (C6), Road # 06, Block # A Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Steel Link Limited",
    "category": "Steel Building Manufacturers",
    "email": "steeltskltd@gmail.com",
    "phone_mobile": null,
    "web": "www.steeltsk.com.bd",
    "address": "Corporate Office: House # 16 (1st Floor), Road # 13, Sector # 04, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Steeltech Building Systems Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@sbslbd.com",
    "phone_mobile": "01711205915",
    "web": "www.sbslbd.com",
    "address": "Corporate Office: House # 99, Road # 10/2, Block # D, Niketon, Gulshan-1, Dhaka-1212."
  },
  {
    "company_name": "Steeltech Engineering",
    "category": "Steel Building Manufacturers",
    "email": "steeltechbd@yahoo.com",
    "phone_mobile": "01711477609",
    "web": "www.steeltechbd.com",
    "address": "Head Office: House # 01 (4th Floor), Road # 02, Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Steel Trust Building System Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@stbslbd.com",
    "phone_mobile": "+88 01713206077",
    "web": "www.stbslbd.com",
    "address": "Flat-5A, Level-05, House # 31/A, Road # 21, Nikunj-2, Khilket Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Structural Engineering Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@steelsell.com",
    "phone_mobile": "01713024963",
    "web": "www.steelsell.com",
    "address": "A Mazid Tower, KA-24, Level-07 (In Front of Jamuna Future Park) Pragati Sarani, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Universal Structural Steel Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "universdsteel@gmail.com",
    "phone_mobile": null,
    "web": "www.universdsteel.com",
    "address": "House # 437 (Level-06), Road # 30, DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "Universal Structural Steel Ltd. (Mohammadpur)",
    "category": "Steel Building Manufacturers",
    "email": "universalsltd@gmail.com",
    "phone_mobile": "01729298919",
    "web": "www.universalsteelbd.com",
    "address": "House # 16/6, 2nd Floor, Block # B Babor Road, Mohammadpur, Dhaka."
  },
  {
    "company_name": "Zakir Steel Zone Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "zzlline@yahoo.com",
    "phone_mobile": "01912125708",
    "web": null,
    "address": "House # CES(F)11/B, 2nd Floor, Road # 130, Gulshan-1, Dhaka-1212."
  },
  {
    "company_name": "KR Steel Structure Ltd. (Chattogram)",
    "category": "Steel Building Manufacturers",
    "email": "info@krsteelstructure.com",
    "phone_mobile": "+88 01708432523",
    "web": "www.krsteelstructure.com",
    "address": "Head Office: BBC Steel Bhahan, South Shitalpur, Shitakunda, Chattogram, Bangladesh"
  },
  {
    "company_name": "Shahin & Brothers",
    "category": "Steel Building Products Suppliers",
    "email": null,
    "phone_mobile": "+88 01819105458",
    "web": null,
    "address": "5 No. Nawab Yousuf Extension Market, French Road, Dhaka-1100."
  },
  {
    "company_name": "Sreenagar Enterprise",
    "category": "Steel Building Products Suppliers",
    "email": "sreenagarenterprise@gmail.com",
    "phone_mobile": "01670172934",
    "web": null,
    "address": "40/1, French Road, Bangshal Nayabazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Unique Steel",
    "category": "Steel Building Products Suppliers",
    "email": null,
    "phone_mobile": "01714432142",
    "web": null,
    "address": "34, French Road, Bangshal, Dhaka."
  },
  {
    "company_name": "Al-Salauddin International",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": "info@al-salauddin.com",
    "phone_mobile": "01711561931",
    "web": "www.al-salauddin.com",
    "address": "Head Office: Al-Salauddin Tower, 44, 44/1, Sikkatuly Lane, Majed Sardar, Natun Sarak, Bangshal, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Asad Steel Corporation",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": "abdullahsteelhouse@gmail.com",
    "phone_mobile": "01675014254",
    "web": null,
    "address": "54/3, Bashi Choron Sen Pollan Street English Road, Tatibazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Ibn Shamim Steel & Iron Limited",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": "ibnshamim@yahoo.com",
    "phone_mobile": "01610080700",
    "web": null,
    "address": "66, Shahid Sayed Nazrul Islam Sarani (Level-3), Bangshal, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Iqbal Ahmed & Company",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": null,
    "phone_mobile": "+88 01674979969",
    "web": null,
    "address": "224, Nawabpur Road, Dhaka-1100."
  },
  {
    "company_name": "Mama Steel House",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": null,
    "phone_mobile": "01911724351",
    "web": null,
    "address": "40/2, Bangshal Old Chowrasta Nayabazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "SM Steel Corporation",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": "info.smsteelcorporation@gmail.com",
    "phone_mobile": "01711358262",
    "web": null,
    "address": "111/1, Lutfur Rahman Lane North South Road, Bangshal, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Sourov Steel Corporation Limited",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": null,
    "phone_mobile": "01600325243",
    "web": null,
    "address": "68, Shaheed Syed Nazrul Islam Sharani (North South Road), Bangshal, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Steel Times",
    "category": "Steel Coils & Sheets Importers/Wholesaler",
    "email": "steeltimes.pvt@gmail.com",
    "phone_mobile": "01977905298",
    "web": "www.steeltimes.org",
    "address": "40/1 (1st Floor), Nazira Bazar Lane North South Road, Bangshal, Dhaka."
  },
  {
    "company_name": "Akij Ispat Limited",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@akijispat.com",
    "phone_mobile": null,
    "web": "www.akijispat.com",
    "address": "Corporate Office: Akij House, 198 Bir Uttam Mir Shawkat Sarak, Gulshan Link Road, Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Ambient Steel (BD) Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@asbrm.net",
    "phone_mobile": "+88 0185428471",
    "web": "www.asbrm.net",
    "address": "Head Office: House # 12 (2nd Floor), Road # 2/3 Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Anwar Ispat Limited",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@anwargroup.net",
    "phone_mobile": "+88 01324721813",
    "web": "www.anwargroup.com",
    "address": "Corporate Office: Baitul Hossain Building (12th Floor) 27 Dilkusha, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Baizid Steel Industries Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@baizidsteel.com.bd",
    "phone_mobile": "+88 01977012745",
    "web": "www.baizidsteel.com.bd",
    "address": "Dhaka Office: EDB Trade Center (12th Floor), 93, Kazi Nazrul Islam Avenue, Karwan Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Bandar Steel Industries Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "bandarsteel@gmail.com",
    "phone_mobile": "01730909178",
    "web": "www.bandarsteel.com",
    "address": "Corporate Office: Suite # 6, 10th Floor, Akram Tower 15/5 Bijoy Nagar, Dhaka-1000."
  },
  {
    "company_name": "Bangladesh Steel Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "dhaka@bsrm.com",
    "phone_mobile": null,
    "web": "www.bsrm.com",
    "address": "Dhaka Corporate Office: Nasir Uddin Tower, 4th Floor, Bir Uttam Samsul Alam Road, 104/1 Kakrail, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bangladesh Steel Re-Rolling Mills Ltd. (Uttara)",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "Uttara Office: Atlanta Trade Center Level-6, Plot # 1, Road # 1/A, Sector # 4, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Binimoy Steel Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "binimoysteel@yahoo.com",
    "phone_mobile": "01711697804",
    "web": "www.binimoysteel.com",
    "address": "Head Office: 81, Shahid Sayed Nuzrul Islam Sarani (North South Road), Dhaka-1100."
  },
  {
    "company_name": "Chakda Steel & Re-Rolling Mills (Pvt.) Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@csrm.com.bd",
    "phone_mobile": "+88 01799627034",
    "web": "www.csrm.com.bd",
    "address": "Corporate Office: Nasir Uddin Tower, 16th Floor, Bir Uttam Samsul Alam Road, 104/1, Kakrail, Ramna, Dhaka."
  },
  {
    "company_name": "Eyar Ali Re-Rolling & Steel Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@eyaralistelel.com",
    "phone_mobile": "+88 01712415198",
    "web": "www.eyaralistelel.com",
    "address": "23/3, Begumganj Lane, Gendaria Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Famous Steel & Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "famoussteelltd@yahoo.com",
    "phone_mobile": "01625344732",
    "web": null,
    "address": "Plot # 73, Road # 24, Monshikhola I/A Dhaka-Narayanganj Hwy, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Golden Ispat Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@goldenispat.com",
    "phone_mobile": "+88 01701215011",
    "web": "www.goldenispat.com",
    "address": "Dhaka Office: A & A Tower (3rd Floor) 173, Arambagh, Motijheel, Dhaka-1000."
  },
  {
    "company_name": "Hi-Tech Steel & Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "contact@hittech-bd.com",
    "phone_mobile": "01762687491",
    "web": "www.hitech-bd.com",
    "address": "199, Syed Nazrul Islam Sarani (Bijoy Nagar), Level-6, Suite # 6, Dhaka."
  },
  {
    "company_name": "HKG Steel Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@hkgsteel.com",
    "phone_mobile": "+88 01770607070",
    "web": "www.hkgsteel.com",
    "address": "Corporate Head Office: Sena Kalyan Bhaban (17th Floor) 195, Motijheel, Toyenbee Circular Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "HM Steel & Industry Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@hmsteel.com.bd",
    "phone_mobile": null,
    "web": "www.hmsteel.com.bd",
    "address": "A & A Tower (3rd Floor), 173, Arambagh, Motijheel, Dhaka-1000."
  },
  {
    "company_name": "H.R.Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "rahima_ispat@yahoo.com",
    "phone_mobile": "01713002955",
    "web": "www.rahimagroup.com",
    "address": "Plot # 7, 9 & 11, Road # 13, Shampur I/A, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Magnum Steel Industries Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@magnumbd.com",
    "phone_mobile": null,
    "web": "www.magnumbd.com",
    "address": "Corporate Office: Sena Kalyan Business Mart, SKS Tower (5th Floor), VIP Road, Mohakhali, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Metrocem Ispat Limited",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@metrocem.com.bd",
    "phone_mobile": null,
    "web": "www.metrocemsteel.com.bd",
    "address": "Corporate & Registered Office: Eunoos Trade Center (Level-12) 52-53, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Julfikar Steel Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "mail@julfikarsteel.com",
    "phone_mobile": "+88 01409998242",
    "web": "www.julfikarsteel.com",
    "address": "Corporate Office: LANDVIEW (12th Floor), 28, Gulshan North C/A, Gulshan Circle-2, Dhaka-1212."
  },
  {
    "company_name": "Kadamtali Steel Mills (Pvt.) Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "kadamtalisteel.bd@gmail.com",
    "phone_mobile": "01788889999",
    "web": "www.ksmlbd.com",
    "address": "Head Office: 9/A, Matitola Lane (2nd Floor), North South Road, Bangshal, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Kamal Steel & Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "kamalsteelmill@gmail.com",
    "phone_mobile": "+88 01711560951",
    "web": "www.ksmbd.com",
    "address": "Shyampur, Kadamtoli I/A, Dhaka."
  },
  {
    "company_name": "Mohammadi Steel Works Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@msw.com.bd",
    "phone_mobile": "+88 01922106075",
    "web": "www.msw.com.bd",
    "address": "Head Office: 199, Shahid Syed Nazrul Islam Sarani Akram Tower (12th Floor), Suite # 8 & 9 (Bijoy Nagar), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Montaha Steel Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@montahasteelmills.com",
    "phone_mobile": "+88 01713178581",
    "web": "www.montahasteelmills.com",
    "address": "Corporate Office: Sima Blossom, 10th Floor, House # 03, Road # 16 (New) 27 (Old), Sheikh Kamal Sarani, Dhanmondi R/A, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Premier Steel Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@premiersteelbd.com",
    "phone_mobile": "01308212742",
    "web": "www.premiersteelbd.com",
    "address": "Navana FH Solaries, 198 Shahid Sayed Nazrul Islam Sharani (65 Bijoy Nagar), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shahiful Alam Steel Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "sasgroup777@yahoo.com",
    "phone_mobile": "01676557177",
    "web": "www.sasgroup.com.bd",
    "address": "Head Office: House # 4, Road # 18, Block # A Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "S. S. Steel Limited",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@ssteel.biz",
    "phone_mobile": null,
    "web": "www.sssteel.biz",
    "address": "Corporate Office: The Pearl Trade Center, Cha-90/3 Pragati Sarani, North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "The Rani Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@rrmsteel.com.bd",
    "phone_mobile": "+88 0177758178",
    "web": "www.rrmsteel.com.bd",
    "address": "Corporate Office: Plot # 44, Main Road, Block # J Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Vikrampur Steel Limited",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "sales@vikrampursteelldt.com",
    "phone_mobile": "+88 01787666966",
    "web": "www.vikrampursteelldt.com",
    "address": "Head Office: Police Plaza Concord, Flat # 04 (5th Floor), House # 02 Road # 144, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Zahir Steel & Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@zsrm.com.bd",
    "phone_mobile": "+88 01880161171",
    "web": "www.zsrm.com.bd",
    "address": "Corporate Office: 104/1, Nasiruddin Tower (13th Floor) Kakrail Road, Ramna, Dhaka-1000."
  },
  {
    "company_name": "Baizid Steel Industries Ltd. (Chattogram)",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@baizidsteel.com.bd",
    "phone_mobile": "01729264507",
    "web": "www.baizidsteel.com.bd",
    "address": "Corporate Office: Aerial Legend, Level-6, 1080, CDA Avenue, Nasirabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "HM Steel & Industry Ltd. (Chattogram)",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@hmsteel.com.bd",
    "phone_mobile": null,
    "web": "www.hmsteel.com.bd",
    "address": "Corporate Office: 218, D.T Road, Dewanhat Chattrogram-4100, Bangladesh"
  },
  {
    "company_name": "Kabir Steel Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "sales@ksrm.com.bd",
    "phone_mobile": "+88 01313428261",
    "web": "www.ksrm.com.bd",
    "address": "Head Office: Kabir Manzil, Sk. Mujib Road Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Sheema Automatic Re-Rolling Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "info@sheemasteel.com.bd",
    "phone_mobile": "01620221220",
    "web": "www.sarmbd.com",
    "address": "Corporate Office: Sheema Trade Center (3rd Floor) 818/A, Agrabad Access Road Chattogram, Bangladesh"
  },
  {
    "company_name": "Sitalpur Auto Steel Mills Ltd.",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "sitalpurauto@gmail.com",
    "phone_mobile": null,
    "web": "www.sasm.com.bd",
    "address": "House # A/19, Road # 03, DA Colonel Hat, Akbarshah, Chattogram-4217, Bangladesh"
  },
  {
    "company_name": "Julfikar Steel Re-Rolling Mills Ltd. (Narayanganj)",
    "category": "Steel Rolling/Re-rolling Mills",
    "email": "mail@julfikarsteel.com",
    "phone_mobile": "+88 01409998250",
    "web": "www.julfikarsteel.com",
    "address": "Head Office: B-342, Enayetnagar, Godnali, Siddhirganj, Narayanganj."
  },
  {
    "company_name": "Anika Enterprise",
    "category": "Stone & Sand Supplier",
    "email": "yearsirdx@gmail.com",
    "phone_mobile": "01715229758",
    "web": null,
    "address": "Dipnagar Pathorghat, Gabtoli, Dhaka."
  },
  {
    "company_name": "Shila & Brothers (Pvt.) Ltd.",
    "category": "Stone & Sand Supplier",
    "email": "shilabrothers14@gmail.com",
    "phone_mobile": "01312238025",
    "web": null,
    "address": "Cha-75/2 (5th Floor), Ridge Dale Tower, Pragoti Sarani, North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Khan Mohammad Enterprise",
    "category": "Stone & Sand Supplier",
    "email": null,
    "phone_mobile": "+88 01715750176",
    "web": null,
    "address": "Noyamat, Pagla, Narayanganj-1420."
  },
  {
    "company_name": "Al Amana Stone Crusher",
    "category": "Stone & Sand Supplier",
    "email": "alamanastonecrusher@gmail.com",
    "phone_mobile": "+88 01755673963",
    "web": "www.alamanatradingcompany.com",
    "address": "Dhopagul, Behind Osmani International Airport, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Diganta Trade International",
    "category": "Stone & Sand Supplier",
    "email": "digantatradein@gmail.com",
    "phone_mobile": "01755572372",
    "web": "www.digantatradeintbd.com",
    "address": "Suite # 707, 6th Floor, West World Shopping City, Zindabazar, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Fakhor Uddin Brothers",
    "category": "Stone & Sand Supplier",
    "email": "info@fakhoruddinbrothers.com",
    "phone_mobile": "01711329365",
    "web": "www.fakhoruddinbrothers.com",
    "address": "1 No. Ali Biponi, Laldighirpar Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Sylhet Sand",
    "category": "Stone & Sand Supplier",
    "email": "sylhetsandbd@gmail.com",
    "phone_mobile": "01788922614",
    "web": null,
    "address": "Head Office: Lawregor Bazar (Fazilpur), Tahirpur, Sunamganj."
  },
  {
    "company_name": "City Sugar Industries Ltd.",
    "category": "Sugar Mills",
    "email": "corporate@citygroupbd.com",
    "phone_mobile": null,
    "web": "www.citygroup.com.bd",
    "address": "Head Office: City House, Plot # NW (J) 06, Road # 51, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Deshbandhu Sugar Mills Ltd.",
    "category": "Sugar Mills",
    "email": "info@dbg.com.bd",
    "phone_mobile": null,
    "web": "www.dbg.com.bd",
    "address": "Mostafa Center, House # 59, Road # 27, Block-K, Banani, Dhaka-1213."
  },
  {
    "company_name": "Meghna Group of Industries",
    "category": "Sugar Mills",
    "email": "info@mgi.org",
    "phone_mobile": null,
    "web": "www.mgi.org",
    "address": "Head Office: Fresh Villa, House # 15, Road # 34, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "S. Alam Refined Sugar Industries Ltd.",
    "category": "Sugar Mills",
    "email": "sag@s.alamgroupbd.com",
    "phone_mobile": null,
    "web": "www.s.alamgroupbd.com",
    "address": "S. Alam Bhaban, 2119, Asadgonj Chattogram, Bangladesh"
  },
  {
    "company_name": "H.R Enterprise",
    "category": "Survey & Drawing Equipment",
    "email": null,
    "phone_mobile": "01817074867",
    "web": null,
    "address": "3/4-A, Purana Paltan, Sabbar Tower (3rd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Sugartex Engineering",
    "category": "Survey & Drawing Equipment",
    "email": "sagartex7@gmail.com",
    "phone_mobile": "01884299358",
    "web": null,
    "address": "House # 10 (1st Floor), Road # 02, Sector # 06, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Bangladesh Inspection & Survey (Pvt.) Ltd.",
    "category": "Survey Company & Surveyors",
    "email": "bdsurvey.pvt@gmail.com",
    "phone_mobile": "01713621947",
    "web": null,
    "address": "Shah Ali Plaza, Level # 12, Suite # 1210, Mirpur Circle-10, Dhaka-1216."
  },
  {
    "company_name": "MUNALISA SURVEY CORPORATION LTD.",
    "category": "Survey Company & Surveyors",
    "email": "munalisasurvey12@gmail.com",
    "phone_mobile": "01711843937",
    "web": "www.munalisasurvey.com",
    "address": "Corporate Office: House # 1, Road # 4, P C Culture Housing, Chowdhury House, Shekertek, Mohammadpur Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "National Survey Bangladesh Ltd.",
    "category": "Survey Company & Surveyors",
    "email": "nationalsurveybd@hotmail.com",
    "phone_mobile": "+88 01973802010",
    "web": "www.nationalsurveybangladesh.com",
    "address": "Jibon Bima Bhaban (4th Floor) 80, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "PK Survey Associates & Engineering",
    "category": "Survey Company & Surveyors",
    "email": "pksurveyengininger@gmail.com",
    "phone_mobile": "01796637735",
    "web": "www.bangladeshsurvey.com",
    "address": "Sundrom Bhabon, House # 163, 164, Flat-D8, Janata Housing, Shah Ali Bag, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Survey 2000",
    "category": "Survey Company & Surveyors",
    "email": "info@survey2000.net",
    "phone_mobile": "+88 01711323266",
    "web": "www.survey2000.net",
    "address": "House # 42, Road # 03, Nikunja-1 Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Survey Corporation (Pvt.) Ltd.",
    "category": "Survey Company & Surveyors",
    "email": "surveybd@yahoo.com",
    "phone_mobile": "01711338550",
    "web": "www.surveybd.net",
    "address": "Eastern Shopping Point (1st Floor) House # 51, New Eskaton Road 20 Eastern Tower, Dhaka-1000."
  },
  {
    "company_name": "The Mappa Ltd.",
    "category": "Survey Company & Surveyors",
    "email": "themappaltd@gmail.com",
    "phone_mobile": "019113921668",
    "web": "www.mappa.com.bd",
    "address": "137D/1, Jahanara Garden, Green Road, Farmgate, Dhaka-1205."
  },
  {
    "company_name": "Chittagong Survey Limited",
    "category": "Survey Company & Surveyors",
    "email": "info@ctgsurvey.com",
    "phone_mobile": "+88 01817782592",
    "web": "www.ctgsurvey.com",
    "address": "42, M.M Ali Road, Wasa Circle, Keya Mansion (3rd Floor), Chattogram."
  },
  {
    "company_name": "Mainamati Survey & Technology",
    "category": "Survey Company & Surveyors",
    "email": "mstbdorg@gmail.com",
    "phone_mobile": "01814479459",
    "web": "www.mstbd.org",
    "address": "Nur box Building, 3rd Floor, 198/318 CDA Avenue, Muradpur, Chattogram."
  },
  {
    "company_name": "National Survey Bangladesh Ltd. (Chattogram)",
    "category": "Survey Company & Surveyors",
    "email": "nationalsurveybdld@yahoo.com",
    "phone_mobile": "01714165060",
    "web": "www.nationalsurveybangladesh.com",
    "address": "Chattogram Office: S. Alam Center (6th Floor), 58, Agrabad, Chattogram."
  },
  {
    "company_name": "A Plus Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@aplusbd.com",
    "phone_mobile": "01833331839",
    "web": "www.aplusbd.com",
    "address": "House # 07, Road # 01, Block # L, Arifabad Housing Society Section # 7, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Sunwear LTD",
    "category": "Sweater Manufacturers",
    "email": "info@din-bd.com",
    "phone_mobile": "+88 01714202454",
    "web": "www.din-bd.com",
    "address": "248, Motalihe Mansion, Minnat Ali Road, B-Bangla, Gouripur, Ashulia, Savar, Dhaka-1341, Bangladesh"
  },
  {
    "company_name": "Disney Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@disneysweater.com",
    "phone_mobile": null,
    "web": "www.disneysweater.com",
    "address": "House # 07, Road # 20, Sector # 12 Shah Mokhdhum Avenue, Uttara Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Dragon Sweater Bangladesh Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@dslbd.com",
    "phone_mobile": "+88 01720345346",
    "web": "www.dslbd.com",
    "address": "Dragon Tower, 25/2 D.I.T Road, Malibagh Chowdhury Para, Dhaka."
  },
  {
    "company_name": "Bengal Sweater Fashion Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@bengalsweater.com",
    "phone_mobile": "01711533589",
    "web": "www.bengalsweater.com",
    "address": "Corporate Office: Sheba House (5th Floor), House # 34, Road # 46, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Best Wool Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@bestwoolbd.net",
    "phone_mobile": "01711568206",
    "web": "www.bestwoolbd.net",
    "address": "Best House, House # 25, Road # 13 Ranavola Avenue, Sector # 10, Uttara Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Deys Sweaters Ind. Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "+88 01711288432",
    "web": null,
    "address": "Burir Bazar, North Gazirchat, Ashulia Savar, Dhaka, Bangladesh"
  },
  {
    "company_name": "ESE Knitwear Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "House # 20/B, Road # 14, Sector # 4 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Everbright Sweater Limited",
    "category": "Sweater Manufacturers",
    "email": "info@everbright-group.net",
    "phone_mobile": "+88 01619996061",
    "web": "www.everbright-group.net",
    "address": "House # 63, Road # 1, Banani, Dhaka"
  },
  {
    "company_name": "Golden Times Sweater & Dyeing Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "+88 01713206585",
    "web": null,
    "address": "House # 06, Road # 13, Sector # 13 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "KTS International Fashion Arbiter (BD)",
    "category": "Sweater Manufacturers",
    "email": "info@ktsifa-bd.com",
    "phone_mobile": "+88 01816938352",
    "web": null,
    "address": "Muktobangla Shopping Complex, 6th Flr., Suite # 123, Mirpur-1, Dhaka"
  },
  {
    "company_name": "Mark Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@marksweater.com",
    "phone_mobile": null,
    "web": "www.marksweater.com",
    "address": "Head Office: LeMeridian Dhaka, Level 5, 79/A, C/A, Airport Road, Nikunja-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Masihata Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@masihata.com",
    "phone_mobile": null,
    "web": "www.masihata.com",
    "address": "House #117/A, Road #07, Sector #4, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Matrix Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@albigbgroup.com",
    "phone_mobile": null,
    "web": "www.albigbgroup.com",
    "address": "Tower Almagir, House #11/B, Road #55, Block #NW(F), Gulshan-2, Dhaka."
  },
  {
    "company_name": "Max Sweaters (BD) Ltd.",
    "category": "Sweater Manufacturers",
    "email": "contact.maxsweater@gmail.com",
    "phone_mobile": "+88 01755501106",
    "web": "www.maxsweater.com",
    "address": "House #01(Flat-CS), Road #36 Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Mohammadi Fashion Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@mohammadigroup.com",
    "phone_mobile": null,
    "web": "www.mohammadigroup.com",
    "address": "Lotus Kamal Tower-One (10th Floor) 57 Jasar Sahara C/A, Nikunja-2, Dhaka."
  },
  {
    "company_name": "One Up Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "rshqlm66@gmail.com",
    "phone_mobile": "01703978991",
    "web": null,
    "address": "House #41, Road #04, Sector #10 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Perfect Sweaters Limited",
    "category": "Sweater Manufacturers",
    "email": "info@perfectsweaters.com",
    "phone_mobile": "01713060542",
    "web": "www.perfectsweaters.com",
    "address": "923, Begum Rokeya Sarani, Shewrapara, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "River Side Sweaters Limited",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "01713001467",
    "web": "www.riversidesweater.com",
    "address": "Hasnabad, Ekuria, Dhaka Jute Mills Keraniganj, Dhaka, Bangladesh"
  },
  {
    "company_name": "Rose Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@rosesweater.com",
    "phone_mobile": null,
    "web": "www.rosesweater.com",
    "address": "Head Office: Flat #8, House #531, Lane #11, DOHS Baridhara, Dhaka."
  },
  {
    "company_name": "Sailormoon Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@sailormoon.com.bd",
    "phone_mobile": "01709673900",
    "web": "www.sailormoon.com.bd",
    "address": "House #779 (1st Floor), Road #11 Avenue-3, Mirpur DOHS, Dhaka-1216"
  },
  {
    "company_name": "Southeast Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@southeastswaters.com",
    "phone_mobile": "+88 01733000000",
    "web": "www.southeastswaters.com.bd",
    "address": "278/A, Meher Nagar, Dobadia Uttarkhan, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Space Sweater Limited",
    "category": "Sweater Manufacturers",
    "email": "aashraf@spacebd.biz",
    "phone_mobile": "01731512834",
    "web": "www.spacebd.biz",
    "address": "House #467, Lane #08, Baridhara DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Spring Trade Limited",
    "category": "Sweater Manufacturers",
    "email": "management@spring.com.bd",
    "phone_mobile": "01816411404",
    "web": "www.spring.com.bd",
    "address": "42, Konapara, Tenguri, Zirani Bazar BKSP, Savar, Dhaka-1349, Bangladesh"
  },
  {
    "company_name": "RNSCO Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@rnscosweater.com",
    "phone_mobile": "+88 01711725969",
    "web": "www.rnscosweater.com",
    "address": "212, Baizid Bostami Road Nasirabad I/A, Chattogram-4207, Bangladesh"
  },
  {
    "company_name": "R.S. Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "rssweater@gmail.com",
    "phone_mobile": "+88 01840700344",
    "web": null,
    "address": "2098/A, M. A. Aziz Road (5th Floor), South Middle Halishahar, Chattogram, Bangladesh"
  },
  {
    "company_name": "Arttex Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "+88 01712527888",
    "web": null,
    "address": "Jailkhana Road, Horinachala Gazipur, Bangladesh"
  },
  {
    "company_name": "Indesore Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@indesore.com",
    "phone_mobile": "+88 01711560770",
    "web": "www.indesore.com",
    "address": "275, Degarchala, National University Gazipur, Bangladesh"
  },
  {
    "company_name": "Lakhsma Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@lakhsma.net",
    "phone_mobile": "+88 01711565724",
    "web": "www.lakhsma.com",
    "address": "Joy Bangla Sarak, Khalikori KB Bazar, Barabari, Gazipur-1704, Bangladesh"
  },
  {
    "company_name": "Merchant Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "merchantsweater@yahoo.com",
    "phone_mobile": "+88 01711908104",
    "web": null,
    "address": "Vogra, Bashan Sarak, Gazipur, Bangladesh"
  },
  {
    "company_name": "M. T. Sweaters Limited",
    "category": "Sweater Manufacturers",
    "email": "mizan@mtsweatersbd.com",
    "phone_mobile": null,
    "web": "www.mtsweatersbd.com",
    "address": "Plot # 1703-1704, Gacha, Gazipur Sadar, Gazipur, Bangladesh"
  },
  {
    "company_name": "RR Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "rrinfo@rrsweaters.com",
    "phone_mobile": "+88 01711563506",
    "web": "www.rrsweaters.com",
    "address": "Plot # A-35 & A-39, BSCIC I/E, Konabari, Joydebpur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Platinum Sweater (Pvt.) Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "+88 01711174870",
    "web": null,
    "address": "Plot # 5, Block # B, Degarchala Road National University, Gazipur, Bangladesh"
  },
  {
    "company_name": "Smug Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@smugsweater.com",
    "phone_mobile": "01715008617",
    "web": "www.smugsweater.com",
    "address": "Talepara, Chandona, Gazipur-1702, Bangladesh"
  },
  {
    "company_name": "SRP Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": "info@srpsweaters.com",
    "phone_mobile": "01711515707",
    "web": "www.srpsweaters.com",
    "address": "73/1, North Kha Para Road Auchpara, Tongi, Gazipur."
  },
  {
    "company_name": "S.S. Sweater Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "+88 01730320857",
    "web": null,
    "address": "124, Darail, Sataih, Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "T.J. Sweaters Ltd.",
    "category": "Sweater Manufacturers",
    "email": null,
    "phone_mobile": "+88 01672037889",
    "web": null,
    "address": "16/7, Sataih Road, Gazipura Tongi, Gazipur-1712, Bangladesh"
  },
  {
    "company_name": "Dress Park",
    "category": "Sweater Manufacturers",
    "email": "drespark@gmail.com",
    "phone_mobile": "01552370828",
    "web": "www.dressparkbd.com",
    "address": "69 A.C Dhar Road (4th Floor), Kalir Bazar, Narayanganj-1400, Bangladesh"
  },
  {
    "company_name": "Hera Sweaters Limited",
    "category": "Sweater Manufacturers",
    "email": "contact@herasweters.com",
    "phone_mobile": "+88 01881500051",
    "web": "www.herasweters.com",
    "address": "Pechain, Jampur, Sonargaon Narayanganj, Bangladesh"
  },
  {
    "company_name": "DAD International (BD) Ltd.",
    "category": "Sweater Machineries",
    "email": "dad@daintternationalbd.com",
    "phone_mobile": "+88 01819211191",
    "web": "www.daintternationalbd.com",
    "address": "Dhaka Office: House # 104 (2nd Floor), Lake Drive Road, Sector # 07, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Garmentech Machinery Ltd.",
    "category": "Sweater Machineries",
    "email": "info@garmentech.net",
    "phone_mobile": "+88 01811412980",
    "web": "www.garmentech.net",
    "address": "House # 08, Suit # 6 B, Road # 7/C, Sector # 3, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Gousheng (BD) Ltd.",
    "category": "Sweater Machineries",
    "email": "goushengbd@gmail.com",
    "phone_mobile": "01755504192",
    "web": "www.goushengbd.com",
    "address": "House # 15, Road # 13, Sector # 10 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Kobra Corporation",
    "category": "Sweater Machineries",
    "email": "maysha14@hotmail.com",
    "phone_mobile": "+88 01711531492",
    "web": null,
    "address": "1146/B (Ground Floor), Flat # F-3 Malibagh Chowdhurypara R/A, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Sewing Mall BD Pvt. Ltd.",
    "category": "Sweater Machineries",
    "email": "info@sewingmall.net",
    "phone_mobile": "+88 01718028899",
    "web": "www.sewingmall.net",
    "address": "House # 38, Road # 9, Sector # 11 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Sewmak",
    "category": "Sweater Machineries",
    "email": "kamal.sewmak@gmail.com",
    "phone_mobile": "+88 01790494946",
    "web": null,
    "address": "House # 13 (GF), Road # 4, Sector # 4 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "South East Exim Ltd.",
    "category": "Sweater Machineries",
    "email": "southeastb@dhaka.net",
    "phone_mobile": "01714325990",
    "web": null,
    "address": "Corporate Office: House # 488/A (2nd Floor), Road # 32 Mohakhali DOHS, Dhaka-1206."
  },
  {
    "company_name": "Tricot Bangladesh Ltd.",
    "category": "Sweater Machineries",
    "email": null,
    "phone_mobile": "01717844873",
    "web": "www.tricotbd.com",
    "address": "House # 12, Road # 10, Sector # 12 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Ahmed Swimming Pool",
    "category": "Swimming Pool Construction & Equipment",
    "email": "californiadhaka@gmail.com",
    "phone_mobile": "01715698888",
    "web": "www.ahmedswimmingpool.com",
    "address": "79, Gulshan North Avenue, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "A Plus Bangladesh",
    "category": "Swimming Pool Construction & Equipment",
    "email": "info@aplusbangladesh.com",
    "phone_mobile": "01839600344",
    "web": "www.aplusbangladesh.com",
    "address": "12/1, Pallabi, Suit-GE, Dhaka-1216."
  },
  {
    "company_name": "Fountech Swimming Pool Company Ltd.",
    "category": "Swimming Pool Construction & Equipment",
    "email": "info@bangladeshwimmingpool.com",
    "phone_mobile": "01924424342",
    "web": "www.bangladeshwimmingpool.com",
    "address": "House # 115 (Level-6), Flat-6B, Al Nannu Tower, North Kalshi, Shagufa New Road, Mirpur DOHS, Dhaka."
  },
  {
    "company_name": "Total Engineering & Lifestyle Amenities Co.",
    "category": "Swimming Pool Construction & Equipment",
    "email": "nur_totalengg@yahoo.com",
    "phone_mobile": "01713062199",
    "web": "www.telco.com.bd",
    "address": "Corporate Office: House # 29, Road # 2, Nikunja-2, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Water Pool BD",
    "category": "Swimming Pool Construction & Equipment",
    "email": "info@waterpool.com",
    "phone_mobile": "01683848586",
    "web": "www.waterpoolbd.com",
    "address": "62/A, Kuril, Vatara, Dhaka-1229."
  },
  {
    "company_name": "Wird Craft Enterprise",
    "category": "Swimming Pool Construction & Equipment",
    "email": "info@wirdcraft.com",
    "phone_mobile": "01819219210",
    "web": "www.wirdcraft.com",
    "address": "House # 5 (Ground Floor), Road # 6/A Sector # 04, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "BELMONTE (Corporate Office)",
    "category": "Tailors & Fabrics",
    "email": "info@belmontebd.com",
    "phone_mobile": null,
    "web": "www.belmontebd.com",
    "address": "126/1, Elephant Road, Bata Signal Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "BELMONTE (Gulshan Branch)",
    "category": "Tailors & Fabrics",
    "email": null,
    "phone_mobile": "+88 01321214058",
    "web": "www.belmontebd.com",
    "address": "KA-41, Pragati Sarani Road (Ground Floor), Shahzadpur, Gulshan, Dhaka-1212."
  },
  {
    "company_name": "BELMONTE (Rampura Branch)",
    "category": "Tailors & Fabrics",
    "email": null,
    "phone_mobile": "+88 01321214061",
    "web": null,
    "address": "62, East Hazipara, DIT Road, Rampura Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Ideal Tailors (Pvt.) Ltd. (Ramna Branch)",
    "category": "Tailors & Fabrics",
    "email": null,
    "phone_mobile": "+88 01732965833",
    "web": null,
    "address": "76/9, Ramna Bhaban (1st Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ideal Tailors (Pvt.) Ltd. (Uttara Branch)",
    "category": "Tailors & Fabrics",
    "email": "info@idealtailorsbd.com",
    "phone_mobile": "+88 01732965832",
    "web": "www.idealtailorsbd.com",
    "address": "25/26 S.B. Plaza, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Invent Tailors & Fabrics",
    "category": "Tailors & Fabrics",
    "email": "info@inventtailors.com",
    "phone_mobile": "+88 01911334822",
    "web": "www.inventtailors.com",
    "address": "62, East Hazipara, Rampura Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "K.L Sweden Tailors & Fabrics",
    "category": "Tailors & Fabrics",
    "email": "klsweden.2005@gmail.com",
    "phone_mobile": "+88 01743959570",
    "web": null,
    "address": "Metropolitan Shopping Plaza, Plot # 2, Gulshan-2, Dhaka-1212."
  },
  {
    "company_name": "Sunmoon Tailors (Pvt.) Ltd.",
    "category": "Tailors & Fabrics",
    "email": "sunmoontailors@gmail.com",
    "phone_mobile": "+88 01835000016",
    "web": null,
    "address": "Dhanmondi Plaza, House # 18 Road # 6, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Top Ten-1 Ltd. (Elephant Road)",
    "category": "Tailors & Fabrics",
    "email": "topten_one@yahoo.com",
    "phone_mobile": "+88 0173399070",
    "web": "www.toptenone.com",
    "address": "G.M Plaza, 93 New Elephant Road Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Top Ten-1 Ltd. (Khairul Branch)",
    "category": "Tailors & Fabrics",
    "email": null,
    "phone_mobile": "+88 01921555996",
    "web": null,
    "address": "Ka-96/1, Kazi Shopping Center, Kuril Nagati Sarani, Vatara, Dhaka-1229."
  },
  {
    "company_name": "Swimming Pool Equipment & Construction",
    "category": "Swimming Pool Construction & Equipment",
    "email": "info@swimmingbd.com",
    "phone_mobile": "+88 01617588599",
    "web": "www.swimmingbd.com",
    "address": "12/1, Pallabi, Suit-GE, Dhaka-1216."
  },
  {
    "company_name": "Magnet Electronics",
    "category": "Electronics",
    "email": "magnetbd@gmail.com",
    "phone_mobile": "01712026780, 01713863838",
    "web": "www.magnetdbd.com",
    "address": "Road # 5, House # 5, Pallabi, Mirpur-11%, Dhaka-1216"
  },
  {
    "company_name": "Marsh Power Technology Ltd.",
    "category": "Power Technology",
    "email": "info@marshpowerbd.com",
    "phone_mobile": "01935909391, 01711145073",
    "web": "www.marshpowerbd.net",
    "address": "124/2, 124/6 New Kakrail Road, Shantinagar Plaza (1st Floor), Shantinagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "MegaStar Bangladesh Ltd.",
    "category": "General Business",
    "email": "info@megastar.com.bd",
    "phone_mobile": "+88 01730-584626",
    "web": "www.megastar.com.bd",
    "address": "Kha-199/3 & 4 Middle Badda, Venus Complex, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Metro Power Solution",
    "category": "Power Solutions",
    "email": "info@metropowersolutionbd.com",
    "phone_mobile": "01819288880, 01715446628",
    "web": "www.metropowersolutionbd.com",
    "address": "House # 441, Ground Floor, Senpara Parbata, Mirpur-10, Dhaka-1216"
  },
  {
    "company_name": "Micro Electronics Ltd.",
    "category": "Electronics",
    "email": "info@microelectronics84@gmail.com",
    "phone_mobile": "01711525749, 01819224266",
    "web": "www.microelectronicsltdbd.com",
    "address": "Head Office: BSCIC Electronics Complex, Bhawan (Level-7), Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Modern Power Solution",
    "category": "Power Solutions",
    "email": "mps070788@gmail.com",
    "phone_mobile": "01711306597, 01914343540",
    "web": null,
    "address": "House # 13, Avenue # 01, Section # 11/A, Mirpur, Pallabi, Dhaka-1216"
  },
  {
    "company_name": "National Power Pac",
    "category": "Power Solutions",
    "email": "nationalpowerpac@gmail.com",
    "phone_mobile": "+88 01632433218",
    "web": "www.nationalpowerpac.com",
    "address": "21/1, Mahbub Plaza, Level-14, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "New Century Power Electronics",
    "category": "Power Electronics",
    "email": "rahim@newcenturypower.com, sales@newcenturypower.com",
    "phone_mobile": "01711584922, 01911770951",
    "web": "www.newcenturypower.com",
    "address": "Road # 09, House # 09, Lane-2, Block # A, Pallabi, Mirpur-11, Dhaka-1216"
  },
  {
    "company_name": "Nova Powertronics",
    "category": "Power Electronics",
    "email": "info@nova-bd.com",
    "phone_mobile": "+8809611315315",
    "web": "www.nova-bd.com",
    "address": "Jadurchar, Hemayetpur, Savar Dhaka, Bangladesh"
  },
  {
    "company_name": "Optimistic Engineering",
    "category": "Engineering",
    "email": "info@optimisticengineering.com",
    "phone_mobile": "+88 01937117575",
    "web": "www.optimisticengineering.com",
    "address": "10 No. Ananda Mohan Bashak Lane Naya Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Perfect Electro Lines",
    "category": "Electrical",
    "email": "pelbd22@gmail.com, perfectbd@yahoo.com",
    "phone_mobile": "+88 01731722808, +88 01730930777",
    "web": "www.pelbd.com",
    "address": "Flat-5B, House # 13, Road # 16, Janata Housing, Shah Ali Bagh, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "PE System",
    "category": "Systems",
    "email": "pesystembd@gmail.com",
    "phone_mobile": "01302558693, 01922240730",
    "web": "www.pesystembd.net",
    "address": "House # 11, Road # 01, Kallyanpur Mirpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Power Ark Engineering",
    "category": "Engineering",
    "email": "pae.com.bd@gmail.com",
    "phone_mobile": "01712371306, 01303701214",
    "web": "www.pae.com.bd",
    "address": "House # 24, Road # 12, Sector # 11 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Power Control & Management",
    "category": "Power Management",
    "email": "info@powercom.com.bd",
    "phone_mobile": "01713069132, 01817574308",
    "web": "www.powercom.com.bd",
    "address": "BSCIC Electronics Complex, Level-08, 1/1 Industrial Plot, Main Road # 03, Avenue-4 Section-7, Mirpur, Dhaka"
  },
  {
    "company_name": "Power Generation Technology (PGT)",
    "category": "Power Generation",
    "email": "info@pgtbd.com",
    "phone_mobile": "01711672543, 01977672543",
    "web": "www.pgtbd.com",
    "address": "Zenova Tower (2nd Floor), Road # 4, House # 01, Mirpur-11, Dhaka-1216"
  },
  {
    "company_name": "Power-Sonic Trade International",
    "category": "Power Trade",
    "email": "info@powersonicgroup.com",
    "phone_mobile": "01711527298, 01611527298",
    "web": "www.powersonicgroup.com",
    "address": "49, Motijheel C/A, 8th Floor (Suite # 904), Dhaka-1000"
  },
  {
    "company_name": "Green Mountain BD",
    "category": "Safety & Security",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01711922059, 01811833425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madar Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Power Up Solution",
    "category": "Power Solutions",
    "email": "powerup1bd@gmail.com, supports@powerupbd.com",
    "phone_mobile": "01753054160, 0173054160, 01824751714",
    "web": "www.powerupbd.com",
    "address": "Rowshan Plaza, 83/60, Muslimnagar Badsha Mia Road, Matuail, Demra, Dhaka-1362, Bangladesh"
  },
  {
    "company_name": "Sadid Engineering",
    "category": "Engineering",
    "email": "info@sadidengineering.com",
    "phone_mobile": "01768979731, 01818412557",
    "web": "www.sadidengineering.com",
    "address": "House # 11, Road # 01, Kallyanpur Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Smart Power & Technologies Ltd.",
    "category": "Power Technology",
    "email": "smartpowerld@yahoo.com",
    "phone_mobile": "01743929850, 01911333525, 01711248546",
    "web": "www.smartpowerld.com",
    "address": "Commercial Apartment # D-1 (4th Floor), Plot # 33, Road # 13, Main Road, Rupnagar R/A, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Systech Engineering Ltd.",
    "category": "Engineering",
    "email": "info@systechbd.net",
    "phone_mobile": "+88 01713696324",
    "web": "www.systechbd.net",
    "address": "House # 8/A, Road # 7/A, Sector # 09 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "TNS Engineering Ltd.",
    "category": "Engineering",
    "email": "info@tnsgroup.com.bd",
    "phone_mobile": "+88 01731215065",
    "web": "www.tnsgroup.com.bd",
    "address": "Suite # A-6, Plot # 4, Block # F, Main Road, Banasree, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Transpower Engineering Ltd.",
    "category": "Engineering",
    "email": "transpowerbd@gmail.com, info@transpowerbd.com",
    "phone_mobile": "01766679701, 01731684897",
    "web": "www.transpowerbd.com",
    "address": "Firoza Tower (3rd Floor), 42/A/2 Hatchola Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Rynco Engineering Ltd.",
    "category": "Engineering",
    "email": "info@ryncoengineering.com.bd",
    "phone_mobile": "+88 01777 147215, +88 01713 380220",
    "web": "www.ryncoengineering.com.bd",
    "address": "House-20, Level-3, Road-12, Nikunja, Khilkhet, Dhaka-1229"
  },
  {
    "company_name": "Unicol Bangladesh Ltd.",
    "category": "General Business",
    "email": "sales@unicolbd.com",
    "phone_mobile": "+88 01708804462-84",
    "web": "www.unicolbd.com",
    "address": "APT-B5, Navana FH Solaris 198, Shahid Syed Nazrul Islam Sharani (65, Bijoy Nagar), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "VLSI Power Solution",
    "category": "Power Solutions",
    "email": "info@vlspowersolution.com",
    "phone_mobile": "01726706593, 01735145524",
    "web": "www.vlspowersolution.com",
    "address": "250/3, Modina Mansion, 2nd Colony Mazar Road, Mirpur-1, Dhaka-1216"
  },
  {
    "company_name": "J.B Enterprise",
    "category": "Enterprise",
    "email": null,
    "phone_mobile": "01914705339, 01979705339",
    "web": "www.jbenterprisebd.com",
    "address": "Alhaj Aziz Mansion, Near Hazera Toju University College, Arakan Road, Patania Goda, Chandgaon, Chattogram"
  },
  {
    "company_name": "Bangladesh Double Glazed Ltd.",
    "category": "UPVC Windows & Doors",
    "email": "info@bdgl.com.bd",
    "phone_mobile": "01755559640, 01711 484499",
    "web": "www.bdgl.com.bd",
    "address": "House # 105, Road # 13/A, Block # C Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "CEM UPVC Ltd.",
    "category": "UPVC Windows & Doors",
    "email": "upvc@cem-bd.com",
    "phone_mobile": "+88 01313034948",
    "web": "www.cemupvc.com",
    "address": "Plot # 64, Progati Sharani Main Road Baridhara, Block-J, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Dalco Building Systems",
    "category": "Building Systems",
    "email": "dalco.system@gmail.com",
    "phone_mobile": "+88 01769402981",
    "web": "www.dalco-bd.com",
    "address": "Plot # 03, Road # 9/A, Block # J Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Double Glazing Ltd.",
    "category": "Glazing",
    "email": "sales@worldglazing.com",
    "phone_mobile": "01756555472, 01711541085",
    "web": "www.worldglazing.net",
    "address": "House # 5, Road # 14, Nikunja-2 Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Euro Window Bangladesh",
    "category": "Windows",
    "email": "info@eurowindowbd.com",
    "phone_mobile": "01911030292, 01711269151",
    "web": "www.eurowindowbd.com",
    "address": "GA-185 (1st Floor), Wireless Gate, Mohakhali, Banani, Dhaka-1212"
  },
  {
    "company_name": "Whizz uPVC Win-door Ltd.",
    "category": "UPVC Windows & Doors",
    "email": "info@whizz-bd.com",
    "phone_mobile": "01919198128, 01919198130, 01713198127",
    "web": "www.whizz-bd.com",
    "address": "Rupayan Trade Centre, 15th Floor, Suite # 07, 114, Kazi Nazrul Islam Avenue, Dhaka, Bangladesh"
  },
  {
    "company_name": "Win Pen Ltd.",
    "category": "Windows",
    "email": "info@qbelbd.com",
    "phone_mobile": "+88 01814544700",
    "web": "www.winpenbd.com",
    "address": "Ayesha Villa, 21 Western Road, Apartment # 2A, Level-2, DOHS Banani, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Akota Valves & Fittings",
    "category": "Valves",
    "email": "kaif.akotaboiler@gmail.com",
    "phone_mobile": "01922595388, 01775081191, 01757501999",
    "web": "www.akotavalve.com",
    "address": "118/1, Luftar Rahman Lane, North South Road, Dhaka-1100"
  },
  {
    "company_name": "Alta Vista Trading International",
    "category": "Trading",
    "email": "yahyavista@gmail.com, info@altavistabd.com",
    "phone_mobile": "01925158182, 01947948378",
    "web": "www.altavistabd.com",
    "address": "3rd Floor, 15 Haji Osman Goni, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Ar-Rahman Boiler & Pneumatic",
    "category": "Boiler & Pneumatic",
    "email": "ar.rahmanboiler@gmail.com",
    "phone_mobile": "01727003031, 01617003031, 01977003031",
    "web": "www.arrahmanboiler.com",
    "address": "72/1, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Asgar Trading",
    "category": "Trading",
    "email": "sales.asgartrading@gmail.com",
    "phone_mobile": "01971233456, 01762326724",
    "web": "www.asgartrading.com",
    "address": "116/A, Luftor Rahman Lane, North South Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Boiler Agency",
    "category": "Boiler",
    "email": "boileragencybd@gmail.com",
    "phone_mobile": "+88 01922559142, +88 01715626246",
    "web": null,
    "address": "144/4, Hazi Osman Goni Road, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Boiler Museum",
    "category": "Boiler",
    "email": "bmuseum.dhaka@gmail.com",
    "phone_mobile": "+88 01675514737",
    "web": "www.boilermuseum-bd.com",
    "address": "17, 1 Haji Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Boiler & Valve Technology",
    "category": "Boiler & Valve",
    "email": "info@bvtechbd.com",
    "phone_mobile": "+88 01919060606",
    "web": "www.bvtechbd.com",
    "address": "5/7A, Hazi Osman Gani Road Alu Bazar, Nawabpur, Dhaka-1100"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS Packaging",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912473863, 01712623340",
    "web": "www.eyeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Bengal Trade International",
    "category": "Trading",
    "email": "bengaltradeinternational19@gmail.com",
    "phone_mobile": "01743336142, 01636670023",
    "web": "www.bengaltradeinternational.com",
    "address": "5/7A, Haji Osman Gani Road, Mazed Sardar Plaza (1st Floor), Dhaka-1100"
  },
  {
    "company_name": "Chan Industrial Spares Ltd.",
    "category": "Industrial Spares",
    "email": "info@chanindustrialsparesltd.com",
    "phone_mobile": "01733922007, 01819424625",
    "web": "www.chanindustrialsparesltd.com",
    "address": "116/2, Luftar Rahman Lane, North South Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Bijoy Boiler Corporation",
    "category": "Boiler",
    "email": "bijoyboilercorporation@gmail.com",
    "phone_mobile": "01715659275, 01919659275",
    "web": null,
    "address": "130/1, Haji Osman Gani Road (Alu Bazar), Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Bilal Trading Pvt. Ltd.",
    "category": "Trading",
    "email": "info@bilatrading.com",
    "phone_mobile": "+88 01711682324, +88 01917701683",
    "web": "www.bilatrading.com",
    "address": "216, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Dayamoy Trading",
    "category": "Trading",
    "email": "dayamoy1992@gmail.com",
    "phone_mobile": "01711523872, 01819287394, 01715381621",
    "web": null,
    "address": "156, Haji Osman Gani Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Duraflow Valves & Sanitary Mart",
    "category": "Valves & Sanitary",
    "email": "duraflow@gmail.com",
    "phone_mobile": "+88 01841446634-7",
    "web": null,
    "address": "9, Kazi Abdul Hamid Lane (1st Floor), North South Road (Siddique Bazar), Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "FN Corporation",
    "category": "Corporation",
    "email": "fncorporation10@gmail.com",
    "phone_mobile": "+88 017195519061",
    "web": null,
    "address": "4th Floor, Mazed Sarder Tower-2, 154 Hazi Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "H.R.S Trading Corporation",
    "category": "Trading",
    "email": "hrstrading2015@gmail.com",
    "phone_mobile": "+88 01791514692",
    "web": null,
    "address": "15, Hazi Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Khan Enterprise",
    "category": "Enterprise",
    "email": "khanenterprise487@gmail.com",
    "phone_mobile": "+88 01925559142",
    "web": null,
    "address": "144/4, Haji Osman Gani Road, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Maa Enterprise",
    "category": "Enterprise",
    "email": "maaenterprise2002@gmail.com, amran.kabir@yahoo.com",
    "phone_mobile": "01715048888, 01975048888",
    "web": "www.maa-enterprisebd.com",
    "address": "130, Hazi Osman Gani Road, Alu Bazar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Maheen Valve & Fittings",
    "category": "Valves & Fittings",
    "email": "maheenvalveandfittings@gmail.com",
    "phone_mobile": "0166813243, 01784673577",
    "web": "www.maheenvalveandfittings.com",
    "address": "36, Shahid Syed Nazrul Islam Sharani, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Makkah Tubes & Industries",
    "category": "Tubes & Industries",
    "email": "haque2318@gmail.com",
    "phone_mobile": "01711588050, 01846162194",
    "web": null,
    "address": "148-150, Haji Osman Gani Road, (Alu Bazar), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "M/S. Chan Traders",
    "category": "Trading",
    "email": "chantraders1996@gmail.com",
    "phone_mobile": "01711353457, 01733922007",
    "web": "www.chantradersbd.com",
    "address": "232, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "M/S. Rabeya Enterprise",
    "category": "Enterprise",
    "email": "info@rabeyaenterprisebd.com",
    "phone_mobile": "01713049052, 01912912305",
    "web": "www.rabeyaenterprisebd.com",
    "address": "145/147, Shop #12, Dhaka Tower Market, Alu Bazar, Hazi Osman Gani Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Multitech International",
    "category": "International Business",
    "email": "info@multitechint.com",
    "phone_mobile": "0189382199, 01755912521",
    "web": "www.multitechint.com",
    "address": "130/1/4, Hazi Osman Gani Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "New Boiler Zone",
    "category": "Boiler",
    "email": "newboilerzone42@gmail.com",
    "phone_mobile": "+88 01912846289",
    "web": null,
    "address": "20, Hazi Osman Gani Road, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "New Liverat Boiler House",
    "category": "Boiler",
    "email": "liveratboilerhouse123@gmail.com",
    "phone_mobile": "01715967784, 01936617515",
    "web": null,
    "address": "27/1, Hazi Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "New S. Alam Enterprise",
    "category": "Enterprise",
    "email": "salamenterprise111@gmail.com",
    "phone_mobile": "01795554381, 01616786180",
    "web": null,
    "address": "Mazed Sardar Tower-2, Level-1 154 Hazi Osman Gani Road, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "New-tech International Ltd.",
    "category": "International Business",
    "email": "nti@dhaka.net",
    "phone_mobile": "01877715700, 01715113358",
    "web": null,
    "address": "House #34, Road #13, Nikunja-2 Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Nippon Boiler House",
    "category": "Boiler",
    "email": "nippon.boiler.house04@gmail.com",
    "phone_mobile": "01914008048",
    "web": "www.nipponboilerhouse04@gmail.com",
    "address": "4, Haji Osman Gani Road, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "N.S. Trade Corporation",
    "category": "Trading",
    "email": "nstrade2012@gmail.com",
    "phone_mobile": "01711523872, 01919555888",
    "web": null,
    "address": "145/47, Hazi Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "O. M. International",
    "category": "International Business",
    "email": "omint107@gmail.com",
    "phone_mobile": "01815440748, 01718650998",
    "web": "www.omibd.com",
    "address": "107, Nawabpur Road, Arzoo Tower (1st Floor), Suite #4, Dhaka-1100"
  },
  {
    "company_name": "Pacific Trading Corporation",
    "category": "Trading",
    "email": null,
    "phone_mobile": "01715363444, 01838005555",
    "web": null,
    "address": "138, Haji Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Shaheen Traders",
    "category": "Trading",
    "email": "straders.bd@gmail.com",
    "phone_mobile": "01720032986",
    "web": null,
    "address": "223, Nawabpur Road (Tower Market) Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Shohel & Brothers",
    "category": "General Business",
    "email": "shohelandbrothers@yahoo.com, info@shohelandbrothers.com",
    "phone_mobile": "01711720815, 01713376699, 01713376700, 01713120804",
    "web": "www.shohelandbrothers.com",
    "address": "Suit #14/1 (13th Floor), City Heart 67 Naya Patan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Padma Trading International",
    "category": "Trading",
    "email": "padmatrading.bd@gmail.com",
    "phone_mobile": "01716418790",
    "web": "www.padmatradingbd.com",
    "address": "138, Hazi Osman Gani Road, Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "S.K. Traders",
    "category": "Trading",
    "email": "sktraders_1998@yahoo.com, info@sktraders-bd.com",
    "phone_mobile": "+88 01713011875",
    "web": "www.sktraders-bd.com",
    "address": "3, Haji Osman Gani Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Ripon Corporation",
    "category": "Corporation",
    "email": "riponcorporation@gmail.com",
    "phone_mobile": "01793056759, 01727547511",
    "web": null,
    "address": "70, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Smart Boiler House",
    "category": "Boiler",
    "email": null,
    "phone_mobile": "01799839588",
    "web": null,
    "address": "69/1, Lutfar Rahman Lane, Alu Bazar, Bangladesh"
  },
  {
    "company_name": "Sonali Traders",
    "category": "Trading",
    "email": "sonalitraders11@gmail.com",
    "phone_mobile": null,
    "web": "www.sonalitraders.com",
    "address": "Office: 21, Shahid Syed Nazrul Islam Soroni, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "S.R Boiler Museum",
    "category": "Boiler",
    "email": "s.r.boilermuseum@gmail.com",
    "phone_mobile": "01712577030, 01911191763",
    "web": null,
    "address": "8/9, Haji Osman Gani Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "S.S. Boiler House",
    "category": "Boiler",
    "email": "ssboiler1990@gmail.com",
    "phone_mobile": "01716977730, 01717757856",
    "web": "www.boilersteambd.com",
    "address": "198-202 Nawabpur Road, Nawabpur Tower, Shop # 58, Dhaka-1100"
  },
  {
    "company_name": "S.S. Corporation",
    "category": "Corporation",
    "email": "sscorporation86@gmail.com",
    "phone_mobile": "+88 01766444114",
    "web": "www.sscorporation-bd.com",
    "address": "53, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Steel Trade BD",
    "category": "Steel Trading",
    "email": "infosteeltradebd@gmail.com",
    "phone_mobile": "+88 01611670670",
    "web": "www.steeltradebd.net",
    "address": "Address-1: 129, Hazi Osman Goni Road, Bangshal, Dhaka-1100. Address-2: 28/1, Hazi Osman Goni Road, Bangshal, Dhaka-1100"
  },
  {
    "company_name": "Taqua Boiler House",
    "category": "Boiler",
    "email": null,
    "phone_mobile": "01727547511, 01793056759",
    "web": "www.taquaboilerbd.com",
    "address": "62/A, Nawabpur Road (Arafat Plaza) Shop # 6, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Techno Prism Trade International",
    "category": "Trading",
    "email": "technoprism18@gmail.com",
    "phone_mobile": "01622232223, 01689995138",
    "web": "www.technoprismbd.com",
    "address": "Office: 234, 235/235C, Nawabpur Road, Jabin Tower, 2nd Floor, Room # 4B, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Unique Boiler House",
    "category": "Boiler",
    "email": "russelmahim798@gmail.com",
    "phone_mobile": "01918888650, 01991169798",
    "web": null,
    "address": "75, Lutfar Rahman Lane, North South Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "United Trade Link",
    "category": "Trading",
    "email": "unitedtradelink@gmail.com",
    "phone_mobile": "01710824000, 01819424625",
    "web": "www.utlsolution.com",
    "address": "43, Sheuly Market, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Welltech Trading Corporation",
    "category": "Trading",
    "email": "welltechtradecorp@gmail.com, Sales@welltechtradecorp.com",
    "phone_mobile": "+88 01713273033/44, +88 01713288962/63/75",
    "web": "www.welltechtradecorp.com",
    "address": "138/139, Haji Osman Gani Road Alubazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Zephyr Boiler House",
    "category": "Boiler",
    "email": null,
    "phone_mobile": "01764204937, 01684826172",
    "web": null,
    "address": "116/2, Lutfar Rahman Lane, New 36 Shahid Sayed Nazrul Islam Sharani, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Zubayer Pneumatics & Valves",
    "category": "Pneumatics & Valves",
    "email": null,
    "phone_mobile": "+88 01761434483",
    "web": null,
    "address": "129, Haji Osman Gani Road, Dhaka"
  },
  {
    "company_name": "TT Engineering",
    "category": "Engineering",
    "email": "info@ttvalvebd.com",
    "phone_mobile": "+88 01967676737",
    "web": "www.ttvalvebd.com",
    "address": "Karim Mansion, 2nd Floor, 1495/A Commerce College Mohila Hostel Road, East Madarbari, Chattogram"
  },
  {
    "company_name": "Al-Arafah Belt House",
    "category": "V-Belts",
    "email": "alarafahbelthouse@gmail.com",
    "phone_mobile": "01732636146, 01732916985",
    "web": null,
    "address": "234, 235, 235/C, Nawabpur Road, Jabin Tower (1st Floor), Shop # D-8, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Bengal Roots",
    "category": "General Business",
    "email": "bengalroots@gmail.com",
    "phone_mobile": "+88 01711409894",
    "web": "www.bengalrootsbd.com",
    "address": "Mir Noor Square, House # 43, Road # 2/A, Dhanmondi, Dhaka-1209"
  },
  {
    "company_name": "Double R Trade",
    "category": "Trading",
    "email": "sadikulsefat798@gmail.com",
    "phone_mobile": "01722223533, 01631324343, 01677844538, 01684857775",
    "web": null,
    "address": "263, Tareque Centre, Nawabpur Road Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Imam-Ul & Brothers",
    "category": "General Business",
    "email": "imamulandbrothers@gmail.com",
    "phone_mobile": "+88 01749282689",
    "web": null,
    "address": "96/97, Nawabpur Road (Kazi Machinery Market), Shop # 06, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Micro Tools & Machineries",
    "category": "Tools & Machineries",
    "email": "info@microtoolsbd.com",
    "phone_mobile": "+88 0132972217",
    "web": "www.microtoolsbd.com",
    "address": "Dhaka Branch: 78 & 219-220, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Jahan Trading",
    "category": "Trading",
    "email": "sadikulsefat798@gmail.com",
    "phone_mobile": "+88 01631324343",
    "web": null,
    "address": "265, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Janata Mill & Belt Store",
    "category": "Mill & Belt Store",
    "email": null,
    "phone_mobile": "+88 01631324343",
    "web": null,
    "address": "Tarek Center, 263 Nawabpur Road Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Jonaki Machinery Store",
    "category": "Machinery Store",
    "email": null,
    "phone_mobile": "+88 01741307448",
    "web": null,
    "address": "192, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "International Mill Store",
    "category": "Mill Store",
    "email": "intbcdhk@bangla.net",
    "phone_mobile": "01733986972, 01715373652",
    "web": null,
    "address": "80, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "People's Mill Store",
    "category": "Mill Store",
    "email": "pps@dhaka.net",
    "phone_mobile": "01711618770, 01713026836",
    "web": "www.peoplesmillstore.com",
    "address": "Office: 38, Nawabpur Road (1st Floor), Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Saif Trading Corporation",
    "category": "Trading",
    "email": "mustafa86@live.co.uk, saiftradingcorporation589@gmail.com",
    "phone_mobile": "01745251105, 01715088416",
    "web": "www.saiftradingcorporation.com",
    "address": "85-87, Nawabpur Road, Dhaka Machinery Market, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "D.B.S Enterprise",
    "category": "Enterprise",
    "email": "dbsenterprisectg@gmail.com",
    "phone_mobile": "01642998440, 01723360109",
    "web": null,
    "address": "Head Office: Aziz Kaiyum Building (3rd Floor) Agrabad, Chattogram-4100"
  },
  {
    "company_name": "Chattogram Machines",
    "category": "Machinery",
    "email": "info@microtoolsbd.com",
    "phone_mobile": "+88 0193355309",
    "web": "www.microtoolsbd.com",
    "address": "Chattogram Branch: 41, Sadarghat Road, Chattogram"
  },
  {
    "company_name": "ABS Enterprise",
    "category": "Warehouse Racking",
    "email": "dinslam@absrackbd.com",
    "phone_mobile": "01701851226, 01873852126",
    "web": "www.absrackbd.com",
    "address": "28/1, Mission Madani, New Gendaria Road, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "ANH Enterprise",
    "category": "Warehouse Racking",
    "email": "info@anhenterprise.com",
    "phone_mobile": "+88 09677777888",
    "web": "www.anhenterprise.com",
    "address": "4, Probal Housing, Ring Road Mohammadpur, Dhaka-1207"
  },
  {
    "company_name": "Easy Racking",
    "category": "Warehouse Racking",
    "email": "easyrackingbd@gmail.com",
    "phone_mobile": "01685197167, 01785656414",
    "web": "www.easyrackingbd.com",
    "address": "53, Nawabpur, Dhaka-1100"
  },
  {
    "company_name": "Ferric Ltd.",
    "category": "Warehouse Racking",
    "email": "ferricitd@gmail.com",
    "phone_mobile": "+88 01322877000",
    "web": "www.ferric.com.bd",
    "address": "Mirpur Berbahad Road, Haji Kholi Madbor Sarak, 27 Haji Bari, Goran Chotbari, Mirpur-1, Dhaka-1216"
  },
  {
    "company_name": "UNIRAC",
    "category": "Warehouse Racking",
    "email": "uniracb@gmail.com",
    "phone_mobile": "01819217644, 01841554333",
    "web": "www.uniracbbd.com",
    "address": "Suite # A4, House # 120, Road # 1, Block # F, Banani, Dhaka-1213"
  },
  {
    "company_name": "Master Racks & Furniture",
    "category": "Warehouse Racking",
    "email": "info@masterracksbd.com",
    "phone_mobile": "01321201444, 0131319160",
    "web": "www.masterracksbd.com",
    "address": "Suite # B-3, House # 26, Alaoal Avenue Sector # 06, Uttara, Dhaka-1230"
  },
  {
    "company_name": "MinMax Rack Industry Ltd.",
    "category": "Warehouse Racking",
    "email": "info@minmaxbd.com",
    "phone_mobile": "+88 02-55085417-18",
    "web": "www.minmaxbd.com",
    "address": "House # 06, Road # 11, Sector # 12 Uttara Model Town, Dhaka-1230"
  },
  {
    "company_name": "Weltech Technology",
    "category": "Technology",
    "email": "weltechbd@gmail.com",
    "phone_mobile": "01781623268",
    "web": "www.weltechbd.com",
    "address": "House # 28 (3rd Floor), Road # 7/C, Sector # 09, Uttara, Dhaka-1230"
  },
  {
    "company_name": "The Tool Master & Engineering Co.",
    "category": "Tools & Engineering",
    "email": "info@toolmasterbd.com",
    "phone_mobile": "01313019171, 01681703657",
    "web": "www.toolmasterbd.com",
    "address": "B-28, BSCIC Industrial Estate Tongi, Gazipur-1710, Bangladesh"
  },
  {
    "company_name": "Al Islam Chemi Ltd.",
    "category": "Washing Chemicals",
    "email": "alislamchemi@gmail.com",
    "phone_mobile": "01711547943",
    "web": "www.alismchemie.com",
    "address": "House # 65 (2nd Floor), Road # 14/1, Block # G, Niketan, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "ChemSyte",
    "category": "Washing Chemicals",
    "email": "chemsyte@gmail.com",
    "phone_mobile": "01973116719",
    "web": "www.chemsyte.com.bd",
    "address": "18/3, A.N.A Tower, Armanian Street Armanita, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Tusuka Washing Ltd.",
    "category": "Washing",
    "email": "hemal@tusuka.com",
    "phone_mobile": "+8809666722222",
    "web": "www.tusuka.com",
    "address": "Corporate Office: House # 50 (5th Floor), Road # 11 Block-F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Admiral Denim Washing Ltd.",
    "category": "Washing",
    "email": null,
    "phone_mobile": "01711150367, 01711665578",
    "web": "www.kemsgroup.com",
    "address": "8 Dagerchala, National University Gazipur-1704, Bangladesh"
  },
  {
    "company_name": "Compliance Washing Plant Ltd.",
    "category": "Washing",
    "email": "info@compliancewash.com",
    "phone_mobile": "+88 01885938000",
    "web": "www.compliancewash.com",
    "address": "13/7, Kazi Kamruzzaman Road, Ershad Nagar, Tongi, Gazipura-1704, Bangladesh"
  },
  {
    "company_name": "Disari Washing Plant Ltd.",
    "category": "Washing",
    "email": null,
    "phone_mobile": "01777780600, 01777780667",
    "web": "www.goldstargroupbd.com",
    "address": "A-112, 113 (West Side), BSCIC I/E, Tongi, Gazipur-1710, Bangladesh"
  },
  {
    "company_name": "Radisson Washing Plant Ltd.",
    "category": "Washing",
    "email": "info@radissonwash.com",
    "phone_mobile": "+88 01958499903",
    "web": "www.radissonwash.com",
    "address": "C-125, 126 & 135, BSCIC, I/A, Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "Taj Washing Plant Ltd.",
    "category": "Washing",
    "email": "taj@tajwashingtonbd.com",
    "phone_mobile": "0170683030",
    "web": "www.tajwashingtonbd.com",
    "address": "House # C-145, BSCIC I/A, Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "Ultra Washing & Dyeing Ltd.",
    "category": "Washing & Dyeing",
    "email": "info@ultrawashingbd.com",
    "phone_mobile": "01711532378, 01841532378",
    "web": "www.ultrawashingbd.com",
    "address": "7/4/A-Squib Road, Kathaldia Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "Prime Washing Plant Ltd.",
    "category": "Washing",
    "email": "primeo02@primejeansbd.com, primeo03@primejeansbd.com",
    "phone_mobile": "01911204836, 01819517615",
    "web": "www.primejeansbd.com",
    "address": "Commercial Office: 25/7, Nawab Salimullah Road Chashara, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Citisun Watch Company Ltd.",
    "category": "Watch Manufacturing",
    "email": "citisun.company@gmail.com",
    "phone_mobile": "01741307660, 01741307666",
    "web": null,
    "address": "Neckrosebagh, Atasur Road Keraniganj Model Town, Dhaka"
  },
  {
    "company_name": "ABM Water Company Ltd.",
    "category": "Water Filter & Purifier",
    "email": "info@abmwater.com",
    "phone_mobile": "+88 01795888111",
    "web": "www.abmwater.com",
    "address": "House # B/113, Mosque Road, Mohakhali DOHS, Dhaka-1206"
  },
  {
    "company_name": "Adroit Environment Consultant Ltd.",
    "category": "Water Filter & Purifier",
    "email": "aecldhaka@gmail.com, saiful.aecld@gmail.com",
    "phone_mobile": "017711565728, 01733376609",
    "web": "www.aecld-bd.org",
    "address": "House # 01 (2nd Floor), Road # 16 Sector # 07, Uttara, Dhaka-1230"
  },
  {
    "company_name": "APEC Water Technology",
    "category": "Water Technology",
    "email": "info@apecwaterbd.com",
    "phone_mobile": "01712636163, 01968773232",
    "web": "www.apecwaterbd.com",
    "address": "Plot # 1, Road # 1, Block # Ka, Section-6 (1st Floor), Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Aqua Green Water Solution",
    "category": "Water Solution",
    "email": "aquagreen877@gmail.com",
    "phone_mobile": "+88 01780619058",
    "web": null,
    "address": "Head Office: Plot # 16/1 (1st Floor), Block # K, Section # 06, Mirpur-10, Dhaka-1216"
  },
  {
    "company_name": "Aqua Support Engineering",
    "category": "Water Engineering",
    "email": "aquafilterzone1@gmail.com",
    "phone_mobile": "01610072001, 01958493387",
    "web": "www.aquafiltershopbd.com",
    "address": "House # 19 (1st Floor), Road # 2, Block # Ka, Section # 6, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "BGD Enterprise",
    "category": "Enterprise",
    "email": "bgd.enterprise@gmail.com",
    "phone_mobile": "01778553075, 01511355575",
    "web": null,
    "address": "Head Office: Room # 26 (3rd Floor), Bagdad Shopping Complex, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Green Dot Limited",
    "category": "Water Purifier",
    "email": "purchase@greendotbd.com",
    "phone_mobile": "+88 01795888111",
    "web": "www.greendotbd.com",
    "address": "House # B/113, Mosque Road, New DOHS, Mohakhali, Dhaka-1206"
  },
  {
    "company_name": "CleanTech Engineering Ltd.",
    "category": "Water Treatment",
    "email": "info@cleantechbd.net",
    "phone_mobile": "01701666606, 017101961851",
    "web": "www.cleantech.com.bd",
    "address": "House # 1, Road # 16, Section # 10 Block-C, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "D-Water Tech",
    "category": "Water Technology",
    "email": "dwatertech88@gmail.com",
    "phone_mobile": "+88 01817610026",
    "web": "www.dwatertech.com",
    "address": "House # 328, Road # 05, DOHS Baridhara, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Heaven Trade Link",
    "category": "Trade",
    "email": "heaventrade333@gmail.com",
    "phone_mobile": "+88 01752069334",
    "web": "www.heaventradelink.com",
    "address": "Office: House # 16/A, Road # 13, Sector # 10, Uttara, Dhaka-1230"
  },
  {
    "company_name": "JEM Water Purification Systems",
    "category": "Water Purification",
    "email": "jem.wps@gmail.com",
    "phone_mobile": "01855903700",
    "web": "www.jemwaterbd.com",
    "address": "House # 02 (3rd Floor), Road # 01 Janota Housing, Ring Road, Adabor Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Mafco Aqua Research",
    "category": "Aqua Research",
    "email": "maksud.monir@yahoo.com, mafcoaqua@gmail.com",
    "phone_mobile": "01711596142, 01912275836",
    "web": "www.mafcobd.com",
    "address": "Rokeya Sarani, Orbit Building (2nd Floor), 974, Shewrapara, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Meem Water Technology Ltd.",
    "category": "Water Technology",
    "email": "meemwatertechnology@gmail.com",
    "phone_mobile": "01404002555, 01707555280",
    "web": "www.meemwater.com",
    "address": "Corporate Office: House # 18, Block # A, Section # 6, Boundary Road, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Momo Scientific Water Technology",
    "category": "Water Technology",
    "email": "momoswtech@gmail.com",
    "phone_mobile": "+88 01938345557",
    "web": "www.momoswt.com",
    "address": "Mouchak Tower, Level-9, Suite # 1006, 83/C Siddeshwari Circular Road Malibag Moor, Dhaka-1217"
  },
  {
    "company_name": "My Water Dispenser & Co.",
    "category": "Water Dispenser",
    "email": "ceomywater@gmail.com",
    "phone_mobile": "01611116661, 01911116661",
    "web": "www.mywaterbd.com",
    "address": "Plot # 4, Road # 4, Block # KA, Mirpur-2, Mirpur, Dhaka-1216"
  },
  {
    "company_name": "Osmotech BD",
    "category": "Water Technology",
    "email": "info@osmotechwaterfilter.com",
    "phone_mobile": "+88 01713481999",
    "web": "www.osmotechwaterfilter.com",
    "address": "House # 449 (5th Floor), Road # 31, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Prithula Corporation",
    "category": "Corporation",
    "email": "dhaka_prithu@yahoo.com",
    "phone_mobile": "01819742116, 01815067985",
    "web": null,
    "address": "Head Office: 231, Senpara Parbata, Central Plaza (2nd Floor), Begum Rokeya Sarani Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "PureLife",
    "category": "Water Purifier",
    "email": "bdpurelife@gmail.com",
    "phone_mobile": "+88 01919998881",
    "web": "www.purelifebd.com",
    "address": "House # 36, Road # 15, Sector # 11 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Roan Water Technologies Ltd.",
    "category": "Water Technology",
    "email": "info@roanbd.com",
    "phone_mobile": "+88 01713049696",
    "web": "www.roanbd.com",
    "address": "Rahbar Tower Annex Building, 77-78, Janata Housing Society (Apt # 6-A), Ring Road, Adabor, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Shamim Engineering & Water Station",
    "category": "Engineering & Water",
    "email": "shamimion@gmail.com",
    "phone_mobile": "01919192608, 01712192608",
    "web": null,
    "address": "Plot # 8/2, Boundary Road # 3 Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "SK Corporation",
    "category": "Corporation",
    "email": "info@skcorporationbd.com",
    "phone_mobile": "+88 01823064555",
    "web": "www.skkorporationbd.com",
    "address": "571/1, East Kazipara, Begum Rokeya Sarani, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Suntech RSR Engineering",
    "category": "Engineering",
    "email": "info@suntechrsr.com",
    "phone_mobile": "01756599565, 01739995001",
    "web": "www.suntechrsr.com",
    "address": "Borobari Pokurpar, Ashulia, Savar, Dhaka, Bangladesh"
  },
  {
    "company_name": "Technaf Engineering Pvt. Ltd.",
    "category": "Engineering",
    "email": "info@technafbd.com",
    "phone_mobile": "01713494592, 01733000022",
    "web": "www.technafbd.com",
    "address": "Dhaka Office: 350, East Rampura, Rampura, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Techno Bangla Engineering Ltd.",
    "category": "Engineering",
    "email": "info@technobangla.net",
    "phone_mobile": "01780006664, 01797060005",
    "web": "www.technobangla.net",
    "address": "House # 462 (4th Floor), Road # 31 New DOHS, Mohakhali, Dhaka-1206"
  },
  {
    "company_name": "Water Logic BD",
    "category": "Water Technology",
    "email": "waterlogicbd@gmail.com",
    "phone_mobile": "01711135883, 01926002200, 01813781178",
    "web": "www.waterlogicbd.com",
    "address": "South Bashabo, Tempo Stand, 1st Floor, Opposite of Islami Bank Bangladesh Ltd., Sabujbagh, Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "Water Technology BD Ltd.",
    "category": "Water Technology",
    "email": "info@wtbl.com.bd, hkfservice.in@gmail.com",
    "phone_mobile": "01713565696",
    "web": "www.wtbl.com.bd",
    "address": "House # 1248, Level-04, Road # 09 Avenue # 02, Mirpur DOHS, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Toptech Enterprise",
    "category": "Enterprise",
    "email": "totpechbd@yahoo.com",
    "phone_mobile": "01717180857",
    "web": "www.toptechenterprise.com.bd",
    "address": "House # 06 (1st Floor), Road # 03, Section # 06, Block # K, East Senpara, Parbata, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Water Link Bangladesh",
    "category": "Water Technology",
    "email": "waterlinkbang@gmail.com",
    "phone_mobile": "+88 01942741189",
    "web": "www.water-link.com.bd",
    "address": "Rupayan Millennium Square (3rd Floor, C-3), Plot # 69,70,71 Progoti Sarani, North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "WaterWin Limited",
    "category": "Water Technology",
    "email": "info@waterwinbd.com",
    "phone_mobile": "01712226670, 01911014599, 01982255771-9",
    "web": "www.waterwinbd.com",
    "address": "House # 29, Block # Kha, Section # 6, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Water World Engineering",
    "category": "Water Engineering",
    "email": "info@waterworld.com.bd",
    "phone_mobile": "01711978569, 01732412050, 01726292287",
    "web": "www.waterworld.com.bd",
    "address": "House # 38/3 (3rd Floor), New Airport Road, Amtoly, Mohakhali, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Bangladesh Machine House",
    "category": "Water Pump & Spares",
    "email": null,
    "phone_mobile": "017450804, 01751413542",
    "web": null,
    "address": "198/702, Nawabpur Tower Machinery Market, Shop #56, Nawabpur Road, Dhaka-1190, Bangladesh"
  },
  {
    "company_name": "Bongobashi Machineries Ltd.",
    "category": "Machinery",
    "email": "bongobashi@yahoo.com",
    "phone_mobile": "017812447, 01842770741",
    "web": null,
    "address": "106, Shah Bahadur (Standard Bank Building), Block Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "D-Swan Pump & Motors",
    "category": "Pump & Motors",
    "email": "info@dswan.com.bd",
    "phone_mobile": "+88 01709395925",
    "web": "www.dswan.com.bd",
    "address": "Corporate Office: 198-202, Nawabpur Tower (3rd Floor, Room # 418), Nawabpur, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Habib Motors & Machineries",
    "category": "Motors & Machineries",
    "email": "habibmotorsbd@gmail.com",
    "phone_mobile": "917337031, 01707337031",
    "web": "www.habibmotors.com",
    "address": "105, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Hamza Trading",
    "category": "Trading",
    "email": null,
    "phone_mobile": "+88 01913242145",
    "web": null,
    "address": "196, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Jobaida Corporation",
    "category": "Corporation",
    "email": "jobaida corporation89@gmail.com",
    "phone_mobile": "817852811, 01919752811",
    "web": "www.jobaida corporation.com",
    "address": "Room # 4 (1st Floor), Rupsa Machinery Market, 209, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "J.N Machinery",
    "category": "Machinery",
    "email": "jnmachinerystore@gmail.com",
    "phone_mobile": "8728624066, 01713178311",
    "web": null,
    "address": "93, Nawabpur Road (1st Floor) Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Kaiser Trade International",
    "category": "Trading",
    "email": null,
    "phone_mobile": "1171356803, 01680074753",
    "web": null,
    "address": "198-202, Shop # 81-82, Nawabpur Tower, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Malik Machinery",
    "category": "Machinery",
    "email": "machineriesmalik@gmail.com",
    "phone_mobile": "977124422, 01757299644",
    "web": null,
    "address": "Shop # 05, 206 Purbanchal Machinery Market, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "M.H Machineries",
    "category": "Machinery",
    "email": "mahmud_hasan28@yahoo.com",
    "phone_mobile": "1747651658",
    "web": null,
    "address": "82, Nawabpur Road, Shop # 11, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Modern Machinery Store",
    "category": "Machinery Store",
    "email": "mmshabib1@gmail.com",
    "phone_mobile": "1711832838",
    "web": null,
    "address": "212/1, Nawabpur Road Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Molla Machineries & Motors",
    "category": "Machineries & Motors",
    "email": "mollagroup@hotmail.com",
    "phone_mobile": "1730627953",
    "web": "www.mollagroup.com.bd",
    "address": "Shop # 306, Nawabpur Tower 198/202 Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "New Satata Enterprise",
    "category": "Enterprise",
    "email": "newsatataenterprise@gmail.com",
    "phone_mobile": "175536217",
    "web": null,
    "address": "198-202, Nawabpur Road, Nawabpur Tower Market (Ground Floor), Shop # 30, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Pump House",
    "category": "Pumps",
    "email": "ligmapmg@gmail.com",
    "phone_mobile": "173066660, 01919632259",
    "web": null,
    "address": "198, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Rashid Enterprise",
    "category": "Enterprise",
    "email": "info@rashidenterprise.com",
    "phone_mobile": "1929951648",
    "web": "www.rashidenterprise.com",
    "address": "204, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Tanimsa Enterprise",
    "category": "Enterprise",
    "email": "176tanishaenterprise@gmail.com",
    "phone_mobile": "915660080",
    "web": "www.tanisha-enterprise.com",
    "address": "176, Mohammadia Machinery Market (1st Floor), Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Alpine Fresh Water System Ltd.",
    "category": "Water Supplier",
    "email": "f.alpinefresh@gmail.com",
    "phone_mobile": "1711615625, 01839775507",
    "web": "www.alpinefreshwater.org",
    "address": "35/2, Monipuri Para (4th & 5th Floor), Gate-2, Sangsad Avenue, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Boss Plastic Industries Ltd.",
    "category": "Plastic Industries",
    "email": "bosstanik@gmail.com",
    "phone_mobile": "1730432677",
    "web": null,
    "address": "Shootkirtel, Kolatia, Kerangar, Dhaka-1313, Bangladesh"
  },
  {
    "company_name": "Desh Tanks Industries Ltd.",
    "category": "Tanks Industries",
    "email": "deshtanks@gmail.com",
    "phone_mobile": "1711531997, 0171404041",
    "web": "www.deshtanks.com",
    "address": "Head Office: Dr. Nawab Ali Tower, Suite # E-103 (1st Floor), 24-25/A, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Gazi Tanks",
    "category": "Tanks",
    "email": "info@gazitanks.net",
    "phone_mobile": null,
    "web": "www.gazi.com",
    "address": "37/2, Bir Protik Gazi Dastagar Road, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Blue Aqua",
    "category": "Water Supplier",
    "email": "info@blueaquabd.com",
    "phone_mobile": "+88 01313767080",
    "web": "www.blueaquabd.com",
    "address": "Head Office: Innovative Bhuiyan Orchid (Level-3 & 4), 1025/A, Bayazid Bostami Road, East Nasirabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "Madina Polymer Ind. Ltd.",
    "category": "Polymer",
    "email": "info.polymer@madina.co",
    "phone_mobile": "+88 01956666000",
    "web": "www.madinapolymer.com",
    "address": "Madina Square, 64/A, Buddhiyabari, Munir Chowdhury Sharak (Central Road), Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "National Polymer Industries Ltd.",
    "category": "Polymer Industries",
    "email": "info@nationalpolymer.net",
    "phone_mobile": "1786676666, 01971644758",
    "web": "www.nationalpolymer.net",
    "address": "Corporate Office: NPOLY House, GA-99/3, Pragati Shoron, Middle Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "FlowWater Solutions Ltd.",
    "category": "Water Treatment",
    "email": "info@flowwaterbd.com",
    "phone_mobile": "+88 01833320353",
    "web": "www.flowwaterbd.com",
    "address": "Plot # 19, Road # 68/A, Unit-A1 Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Green Genesis Engineering Ltd.",
    "category": "Water Treatment",
    "email": "karim@greengenesisbd.com",
    "phone_mobile": "01933032535",
    "web": "www.greengenesisbd.com",
    "address": "House # B/113, Mosque Road, New DOHS, Mohakhali, Dhaka-1206"
  },
  {
    "company_name": "Ecotech Water Technology",
    "category": "Water Technology",
    "email": "ewt@ecotechwaterbd.com",
    "phone_mobile": "01728026568, 01935469062",
    "web": "www.ecotechwaterbd.com",
    "address": "Kader Tropical Heights, 10, Hatchola Road, Tikatuli, Wari, Dhaka-1203"
  },
  {
    "company_name": "Green Water Solution",
    "category": "Water Solution",
    "email": "greenwatersolution2019@gmail.com",
    "phone_mobile": "+88 01775550888",
    "web": "www.gwsbd.com",
    "address": "272/2F, Baten Nagar, Mazar Road Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Hakim Water Technology Ltd.",
    "category": "Water Technology",
    "email": "hakimwater@gmail.com",
    "phone_mobile": "01711338989, 01611338986",
    "web": null,
    "address": "49/1-A, Purana Paltan Lane, Dhaka"
  },
  {
    "company_name": "Ananda Products",
    "category": "Wedding Card",
    "email": "anandaproducts34@gmail.com",
    "phone_mobile": "+88 01686641869",
    "web": "www.anandaproducts.com",
    "address": "Shop # 1, Nurjahan Shorif Plaza, 34, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Azad Products Pvt. Ltd.",
    "category": "Wedding Card",
    "email": "azadproducts@gmail.com",
    "phone_mobile": "01930003030, 01817143357",
    "web": "www.azadproducts.com.bd",
    "address": "22 Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Grameen Products",
    "category": "Wedding Card",
    "email": "grapemeninfo1997@gmail.com, grapemeninfo1997@gmail.com",
    "phone_mobile": "+88 01842046036",
    "web": null,
    "address": "24, Purana Paltan (Dr. Nawab Ali Tower), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Sajib Products",
    "category": "Wedding Card",
    "email": null,
    "phone_mobile": "+88 01873888999",
    "web": "www.sajibproducts.com",
    "address": "48/A B, Baitul Khair Tower, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Sky Products",
    "category": "Wedding Card",
    "email": null,
    "phone_mobile": "+88 01720139162",
    "web": "www.SKYPRODUCTS.COM",
    "address": "20, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ananta Events & Entertainment",
    "category": "Wedding Planner",
    "email": "info@anannta.com, info@anannta.com",
    "phone_mobile": "01813340400",
    "web": "www.anannta.com, www.ananntabdn.net",
    "address": "Level-7, Suite # 2, A K Complex, 19 Green Road, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Antora Wedding Planner",
    "category": "Wedding Planner",
    "email": "info@antoweddingplanner.com",
    "phone_mobile": "01827625059, 01704058797",
    "web": "www.antoweddingplanner.com, www.antoweddingplanner.com",
    "address": "House # 2/E, Road # 29, Level-4 Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Chayahobi",
    "category": "Wedding Planner",
    "email": "chayahobidboficial@gmail.com",
    "phone_mobile": "+88 01738898868",
    "web": "www.chayahobidb.com",
    "address": "House # 21 (First Floor), Road # 02 Nikunja-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Color's Event Management Ltd.",
    "category": "Event Management",
    "email": "colorsevent2014@gmail.com",
    "phone_mobile": "+88 01515606353",
    "web": null,
    "address": "61/6A, Narda Pragati Sharani Baridhara, Dhaka, Bangladesh"
  },
  {
    "company_name": "Creative Wedding Planner & Event Management",
    "category": "Wedding Planner",
    "email": "creativeeventsbd@gmail.com",
    "phone_mobile": "+88 01992505050",
    "web": null,
    "address": "House # 441, Road # 30, Mohakhali New DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "BD Event Management & Wedding Planners",
    "category": "Event Management",
    "email": "info@bdeventmanagement.com",
    "phone_mobile": "01719344312, 01919344312",
    "web": "bdweddingplanners.com, bdweddingplanner.com",
    "address": "1st & 3rd Floor, House # C-34, Block # E, Lalmatia, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Dhaka Event Planner",
    "category": "Event Planner",
    "email": "dhakeventplanners@gmail.com",
    "phone_mobile": "+88 01727710506",
    "web": "www.dhakeventplanner.com",
    "address": "16, Kemal Attaurk Avenue, Banani Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Dream Watch Event & Logistics",
    "category": "Event & Logistics",
    "email": "support@dreamwatchevent.com",
    "phone_mobile": "+88 01920873393",
    "web": "www.dreamwatchevent.com",
    "address": "House # 01, Road # 03, Badda Link Road, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Dream Weaver",
    "category": "Wedding Planner",
    "email": "dreamweaverphotographybd@gmail.com",
    "phone_mobile": "+88 01670078953",
    "web": "www.dreamweaver.com.bd",
    "address": "House # 23, Road # 1, Sector # 9 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Event Time Ltd.",
    "category": "Event Management",
    "email": "eventtimetd@gmail.com",
    "phone_mobile": "+88 01844542491",
    "web": "www.eventtimebd.com",
    "address": "04-B/A (2nd Floor), Mazar Road Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Friendz Event Management",
    "category": "Event Management",
    "email": "rafique@friendzeventmanagement.com, friendzevent24@gmail.com",
    "phone_mobile": "01711146787, 01611146787",
    "web": "www.friendzeventmanagement.com",
    "address": "Flat-A2, House # 17, Road # 1 Block-A, Niketon, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Golden Moment Wedding Planner & Event",
    "category": "Wedding Planner",
    "email": "info@goldenmomentevent.com",
    "phone_mobile": "01713490384, 01713490385",
    "web": "www.goldenmomentevent.com",
    "address": "House # 419 (Ground Floor), Road # 30, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Icon Event Management & Wedding Planner",
    "category": "Event Management",
    "email": "icon.events20@gmail.com",
    "phone_mobile": "+88 01316347627",
    "web": null,
    "address": "House # 13, Road # 07, Sector # 10 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Maa Event Management & Catering",
    "category": "Event Management",
    "email": "maaeventmanagementbd@gmail.com",
    "phone_mobile": "+88 01671711933",
    "web": null,
    "address": "Ka-44/2, Kalachandpur, Gulshan-2 Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Model Event Planner",
    "category": "Event Planner",
    "email": "modeleventplanner@gmail.com",
    "phone_mobile": "+88 01846340329",
    "web": null,
    "address": "400-B Malibagh Chowdhury Para Road, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Orchid Garden & Event Management",
    "category": "Event Management",
    "email": "orchidgarden2084@gmail.com",
    "phone_mobile": "+88 01882116777",
    "web": null,
    "address": "House # 416, Road # 30, Mohakhali DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Shahjahan Wedding Planner & Event Management",
    "category": "Wedding Planner",
    "email": "shahjahanevents@gmail.com",
    "phone_mobile": "+88 01911300003",
    "web": null,
    "address": "House # 316, 1st Floor, Road # 21 New DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Sky Born Event & Wedding Planner",
    "category": "Wedding Planner",
    "email": "skyborn.wm@gmail.com",
    "phone_mobile": "+88 01744325532",
    "web": null,
    "address": "1/2 (1st Floor), Block # E, Kazi Nazrul Islam Road, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "The Dream Trust",
    "category": "Event Management",
    "email": "thedreamtrust.bd@yahoo.com",
    "phone_mobile": "+88 01600010418",
    "web": null,
    "address": "House # 08, Gausul Azam Avenue Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Watermelon Communication Ltd.",
    "category": "Communication",
    "email": "mnh@nazmulhassan.com",
    "phone_mobile": "+88 01919264001",
    "web": "www.watermelonbd.com",
    "address": "Corporate Office: House # 14/1, Road 4, Dhanmondi R/A, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Wedding Diary",
    "category": "Wedding Planner",
    "email": "info@weddingdiary.com.bd",
    "phone_mobile": "01975556633, 01973311177",
    "web": "www.weddingdiary.com.bd",
    "address": "House # 40 (Flat # A2), Road # 05 Block-G, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Al-Amin Digital Scales",
    "category": "Weighing Machine",
    "email": "info@alamindigitalscales.com",
    "phone_mobile": "01711675223, 01999924600",
    "web": "www.alamindigitalscales.com",
    "address": "Eastern Plus Commercial Space, 7th Floor, 145, Shantinagar, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Avail Scales & Technologies Ltd.",
    "category": "Weighing Machine",
    "email": "availscales@gmail.com",
    "phone_mobile": "+88 01711321866",
    "web": null,
    "address": "11/2, Toyenbee Circular Road (Ground Floor), Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Diamond Digital Scale",
    "category": "Weighing Machine",
    "email": "ddscale44@gmail.com",
    "phone_mobile": "01719913144, 01745915338",
    "web": "www.ddscalebd.com",
    "address": "28/A-5, Khan Mansion (3rd Floor), Toyenbee Circular Road, Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Janata Digital Scale",
    "category": "Weighing Machine",
    "email": "janatascale@gmail.com, janatadigitalscale@gmail.com",
    "phone_mobile": "01723939190, 01914473671",
    "web": "www.janatadigitalscale.com",
    "address": "120/A, R.S Bhaban, 3rd Floor, Suite # 414, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bangladesh Digital Scales Technology",
    "category": "Weighing Machine",
    "email": "bdscalestech@gmail.com",
    "phone_mobile": "01711786824, 01919786824",
    "web": "www.bdscale.com",
    "address": "3/12, 1st Floor, Box Culvert Road Naya Paltan, Dhaka-1000"
  },
  {
    "company_name": "Madina Scale & Co.",
    "category": "Weighing Machine",
    "email": "info@madinascale.com, madinascale@yahoo.com",
    "phone_mobile": "01714758938, 01714989142",
    "web": "www.madinascale.com",
    "address": "133, Nurani Center, 1st Floor 16-17 Imamganj, Dhaka-1211"
  },
  {
    "company_name": "Mega Weighing Scale Co. Ltd.",
    "category": "Weighing Machine",
    "email": "megatrading100@hotmail.com, delawar@megadigitalscale.com",
    "phone_mobile": "01968844807, 01814089249",
    "web": "www.megadigitalscale.com",
    "address": "Head Office: 64-65, Nawabpur Road (Friends Tower), Dhaka-1100"
  },
  {
    "company_name": "Pioneer Scientific Company",
    "category": "Weighing Machine",
    "email": "pioneersc7@gmail.com",
    "phone_mobile": "01712420240, 01916002651",
    "web": "www.psscale.com",
    "address": "House # 23, Road # 03, Sector # 10 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "The Bengal Scales",
    "category": "Weighing Machine",
    "email": "bengalscales@gmail.com",
    "phone_mobile": "01711344926, 01971344926",
    "web": "www.thebengalscales.com",
    "address": "78, Outer Circular Road, Moghbazar Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Shova Advanced Technologies Ltd.",
    "category": "Weighing Machine",
    "email": "kironshova@yahoo.com",
    "phone_mobile": "+88 01730041771-75",
    "web": "www.shovabd.com",
    "address": "Malotinagar, Bakshibazar Road Bogura-5800, Bangladesh"
  },
  {
    "company_name": "Cas Scale (BD) Pvt. Ltd.",
    "category": "Weighing Machine",
    "email": "casscalebd@yahoo.com",
    "phone_mobile": "+88 01704118630, 01704118631",
    "web": "www.casscalebd.com",
    "address": "Chattogram Office: Mannan Bhaban (1st Floor), 156, Noor Ahamed Sarak (Jubilee Road), Chattogram, Bangladesh"
  },
  {
    "company_name": "Meghna Digital Scales",
    "category": "Weighing Machine",
    "email": "meghnadigitalscales@gmail.com",
    "phone_mobile": "01912855101, 0171277967",
    "web": "www.mdscales.com",
    "address": "Pilkuni Pulpar, Pagla, Fatullah Narayanganj-1421, Bangladesh"
  },
  {
    "company_name": "Abeer Machinery & Tools",
    "category": "Welding Machine",
    "email": "abeermachineryandtools@gmail.com",
    "phone_mobile": "+88 01715053133",
    "web": null,
    "address": "119/120, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Advanced Machinery",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "01727444742, 01764496116",
    "web": null,
    "address": "121/3, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Afraz Enterprise",
    "category": "Welding Machine",
    "email": "afrazenterprise99@gmail.com",
    "phone_mobile": "+88 01741967430",
    "web": null,
    "address": "38, J.B Market, Nawabpur Road Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Al-Abbas Enterprise",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 017111-399687",
    "web": null,
    "address": "52, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Aman Hardware Store",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01711-118235",
    "web": null,
    "address": "44/1, Sheuli Market, Nawabpur Road Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Amin Hardware & Machinery",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01911418105",
    "web": null,
    "address": "1/2, Tipusultan Road, Rathkholar More, Nawabpur Road, Nawabpur, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Araf Enterprise",
    "category": "Welding Machine",
    "email": "arafenterprise88@gmail.com",
    "phone_mobile": "01676563763, 01722131969",
    "web": "www.arafenterprisebd.com",
    "address": "108, Modina Arzu Complex (5th Floor), Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Aziz Machinery & Tools",
    "category": "Welding Machine",
    "email": "aziz64amt@yahoo.com",
    "phone_mobile": "01981133288, 01712797993",
    "web": null,
    "address": "64 Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Bidyut Hardware & Tools",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01715110010, +88 01715467757",
    "web": null,
    "address": "38, Nawabpur Road, J.B Market Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Bismillah Hardware Store",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01720462811",
    "web": null,
    "address": "233, Nawabpur Road, Nawabpur Mansion, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Fahmida Enterprise",
    "category": "Welding Machine",
    "email": "sabitweld@gmail.com",
    "phone_mobile": "01715298477, 01913709290",
    "web": null,
    "address": "198/202, Nawabpur Tower, Shop # 65 Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Faisal Hardware & Tools",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01771-769501",
    "web": null,
    "address": "198/202, Nawabpur Road, Nawabpur Tower, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Fakhri Mill Stores (Pvt.) Ltd.",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01711-679610",
    "web": null,
    "address": "230, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "F. Rahman Enterprise",
    "category": "Welding Machine",
    "email": "saimon_hassan@yahoo.com",
    "phone_mobile": "01716503598, 01712-291452",
    "web": null,
    "address": "58, Nawabpur Road (Hanif Boiler Market), Shop # 06, Dhaka-1100"
  },
  {
    "company_name": "Haji Enterprise",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01977376909",
    "web": null,
    "address": "Shop # L-5, Bangladesh Machinery Market, 175 Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Lakshmipur Machinery & Tools",
    "category": "Welding Machine",
    "email": "lakshmipurmachinery@gmail.com",
    "phone_mobile": "01819224925, 01894663131, 01795977687",
    "web": null,
    "address": "Akbari Machinery Market (1st Floor) 113, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Mahmoen Hardware",
    "category": "Welding Machine",
    "email": "mai_moon_786@hotmail.com",
    "phone_mobile": "01714-101752, 01789-242383",
    "web": null,
    "address": "205, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Majumder Trading",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01955-998944",
    "web": null,
    "address": "210, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Meghna Traders",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "01711009941, 01923300977",
    "web": null,
    "address": "168, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Milon Machinery",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01711-899344",
    "web": null,
    "address": "Mahbub Machinery Market, 10/2 Madan Pal Lane, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Modern Enterprise",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01675752722",
    "web": null,
    "address": "171, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Mohammed Hardware Mart",
    "category": "Welding Machine",
    "email": "mithun.das@mhmglobal.com",
    "phone_mobile": "01708137866, 01708137855, 01708137848",
    "web": "www.mhmartbd.com",
    "address": "Presidency Tower (2nd Floor) 205-205/1, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "National Machinery Corporation",
    "category": "Welding Machine",
    "email": "national.tania@gmail.com",
    "phone_mobile": "01711-529453, 01713-005877",
    "web": null,
    "address": "212/A, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Nawabpur Mill Store",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01788-757138",
    "web": null,
    "address": "Waiz Machinery Market 92 Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Omar Tools & Machinery",
    "category": "Welding Machine",
    "email": "info@omartools.net, sajurin1998@gmail.com",
    "phone_mobile": "01795515605, 01715881534",
    "web": "www.omartools.net",
    "address": "140, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Orient Machinery & Tools",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01760494960",
    "web": null,
    "address": "176, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Padma Machinery",
    "category": "Welding Machine",
    "email": "padmamstore@gmail.com",
    "phone_mobile": "+88 01886-229337",
    "web": null,
    "address": "1.B.C.C Road (Kadir Complex) Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "New Jes Machinery Corporation",
    "category": "Welding Machine",
    "email": "newjesmachinery@gmail.com",
    "phone_mobile": "01711832449, 01756943997",
    "web": "www.njesmc.com",
    "address": "209, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "New Kashem Machinery",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01744-555454",
    "web": null,
    "address": "203/2, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "New Star Machineries",
    "category": "Welding Machine",
    "email": "newstarmachineries@gmail.com",
    "phone_mobile": "01716-011459, 01619-000007",
    "web": null,
    "address": "210, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Olympia Machinery Store",
    "category": "Welding Machine",
    "email": "olympiamachinery@gmail.com",
    "phone_mobile": "+88 01916585211",
    "web": null,
    "address": "175, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Pathan Machinery Store",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01713-453246",
    "web": null,
    "address": "78, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "R.A.K Machinery Home & Hardware",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "01953021334, 01408134008",
    "web": null,
    "address": "186, Nawabpur Road, Dhaka-1100"
  },
  {
    "company_name": "Raja Hardware Mart",
    "category": "Welding Machine",
    "email": "rajahardwaremart@gmail.com",
    "phone_mobile": "01711276969, 01913140445, 01911393776",
    "web": null,
    "address": "79, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Rana Hardware",
    "category": "Welding Machine",
    "email": null,
    "phone_mobile": "+88 01930023313",
    "web": null,
    "address": "31/1, Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Ali Trade International",
    "category": "Wood Working Machinery",
    "email": "ruijiecncbd@gmail.com",
    "phone_mobile": "01912986598, 01404084412",
    "web": null,
    "address": "Bosila Main Road (In Front of Rab-2) Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "MG Machineries Corporation",
    "category": "Wood Working Machinery",
    "email": "mgmachineriesbd@gmail.com",
    "phone_mobile": "01300803700, 01926694508, 01926694530",
    "web": "www.mgmachineriesbd.com",
    "address": "Cha-75/2, Pragati Sarani (Ridgedale) North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Wood Master",
    "category": "Wood Working Machinery",
    "email": "info@woodmasterbd.com",
    "phone_mobile": "+88 01933325286",
    "web": "www.woodmasterbd.com",
    "address": "Corporate Office: 15, DIT Road, Malibagh Chowdhurypara, KBG Tower (5th Floor), Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Wood Tech Solution",
    "category": "Wood Working Machinery",
    "email": "info@woodtechsolutionbd.com",
    "phone_mobile": "01914252536, 01914252538, 01914252541",
    "web": "www.woodtechsolutionbd.com",
    "address": "Corporate Office: 218/3, Shefali Complex, 4th Floor Begum Rokeya Sharani (Metro Rail Pillar No. 328), Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Wood World CNC Design",
    "category": "Wood Working Machinery",
    "email": "allairi@yahoo.com",
    "phone_mobile": "01712985818, 01911295114",
    "web": "www.allairi.com",
    "address": "House # 1843/A, Sha Kabir Mazar Road (Under UCB Bank), Uttarkhan, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Hussain Traders",
    "category": "Workshop Machines/Equipments",
    "email": "hussain.moiz397@gmail.com",
    "phone_mobile": "01764797973, 01970006720",
    "web": "www.hussaintraders.org",
    "address": "177, Nawabpur Road, 1st Floor, Shimu Plaza Market Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "SA Trading Corporation",
    "category": "Workshop Machines/Equipments",
    "email": "sratradingbd22@gmail.com",
    "phone_mobile": "01718023905, 01716003128",
    "web": "www.satrading-bd.com",
    "address": "Corporate Office: 11/1, North Kafrul, Dhaka Cantonment, Dhaka-1206"
  },
  {
    "company_name": "Abid Trade International",
    "category": "X-Ray Machine & Parts",
    "email": "info.atil@yahoo.com",
    "phone_mobile": "+88 01736211666",
    "web": null,
    "address": "House # 8/3, Road # 4/A, West Dhanmondi, Dhaka-1209"
  },
  {
    "company_name": "Al-Fatah International",
    "category": "X-Ray Machine & Parts",
    "email": "info@alfatah-bd.com",
    "phone_mobile": null,
    "web": "www.alfatah-bd.net",
    "address": "Suite # 403, 4th Floor, 28 Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Anha Medical Technology",
    "category": "X-Ray Machine & Parts",
    "email": "anik.su77@gmail.com",
    "phone_mobile": "+88 01772959900",
    "web": null,
    "address": "42/3B Azimpur Road Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Anifco Healthcare",
    "category": "X-Ray Machine & Parts",
    "email": "info@anifco.com",
    "phone_mobile": "+88 01720519028",
    "web": "www.anifco.com",
    "address": "Plot # 05, Road # 12, Sector # 10 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "ATS Corporation",
    "category": "X-Ray Machine & Parts",
    "email": "info@atscorporationbd.com",
    "phone_mobile": "+88 01841905960",
    "web": "www.atscorporationbd.com",
    "address": "Doreen Vincita, Suite # 9 (Ground Floor), Plot # 4, Section # 5, Rupnagar, Mirpur, Dhaka-1216"
  },
  {
    "company_name": "Babel Corporation",
    "category": "X-Ray Machine & Parts",
    "email": "babelbd@gmail.com",
    "phone_mobile": "+88 01794470001",
    "web": "www.babel.com.bd",
    "address": "12/1, Sangsad Avenue, Monipuripara (1st Floor), Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Bangladesh Medical Items Ltd.",
    "category": "X-Ray Machine & Parts",
    "email": "info.bdmedicalitems@gmail.com",
    "phone_mobile": "+88 01877757591",
    "web": null,
    "address": "Rahman Chamber (8th Floor), 12-13 Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Ardent Corporation",
    "category": "X-Ray Machine & Parts",
    "email": "ardent@ardentcorporationbd.com",
    "phone_mobile": "+88 01322896445-47",
    "web": "www.bmeisa.com",
    "address": "Corporate Office: Rupayan Prime, House # 02 (3rd Floor), Road # 07, Dhanmondi R/A, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Atoms Trade International",
    "category": "X-Ray Machine & Parts",
    "email": "atomstradeint@gmail.com",
    "phone_mobile": "01712969131, 0172969131, 01885060195",
    "web": "www.atomstradeint.com",
    "address": "Head Office: 3/4-A, Sabbir Tower (7th Floor) Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bangladesh Science House",
    "category": "X-Ray Machine & Parts",
    "email": "info@bsh.com.bd",
    "phone_mobile": "01711529643, 01300565790",
    "web": "www.bsh.com.bd",
    "address": "H-27, Mohakhali, Amtoli, Airport Road, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Bioband Safetymatics Ltd.",
    "category": "X-Ray Machine & Parts",
    "email": "biobandsafetymatics8@gmail.com",
    "phone_mobile": "+88 01811146854",
    "web": null,
    "address": "House # 2/A, Road # 04, Block # A, Section # 06, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Bio Life International",
    "category": "X-Ray Machine & Parts",
    "email": "info@biolifeintl.com",
    "phone_mobile": "01711875518, 01894921212",
    "web": "www.biolifeintl.com",
    "address": "Darus Salam Arcade (6th Floor), 14, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "BioMedical Science Ltd.",
    "category": "X-Ray Machine & Parts",
    "email": "info@biomedicalscience.bio",
    "phone_mobile": "01685338115, 01710720123, 01711036467",
    "web": "www.biomedicalscience.bio",
    "address": "3/3/19, Bashhari, Mohammadpur Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "BioTech International",
    "category": "X-Ray Machine & Parts",
    "email": "contact@bio-techbd.com",
    "phone_mobile": "01612947754, 01711947754",
    "web": "www.bio-techbd.com",
    "address": "Rupayan Taj 1, H-6, 6th Floor 1/1 Box Culvert Road, Naya Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bismillah Trading",
    "category": "X-Ray Machine & Parts",
    "email": "bismillahtrading012@gmail.com",
    "phone_mobile": "01810152420, 01673324852",
    "web": "www.bismillahtradingbd.com",
    "address": "House #22C (Flat-J1), Road #36, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "City Electro-Medics Co.",
    "category": "X-Ray Machine & Parts",
    "email": "mohammadepipustulan@cemcbd.com",
    "phone_mobile": "01790736161, 01711530979, 01324440934, 01324440935",
    "web": "www.cemcbd.com",
    "address": "House #1186 (1st Floor), Avenue #11, Mirpur DOHS, Dhaka-1216"
  },
  {
    "company_name": "Daffodil Medi World",
    "category": "X-Ray Machine & Parts",
    "email": "daffodilmediworldbd@gmail.com",
    "phone_mobile": "81715481622",
    "web": "www.daffodilmediworldbd.com",
    "address": "184/3, Galaxy Habut Tower, Ahmed Nagar, Paik Para, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Delta Limited",
    "category": "X-Ray Machine & Parts",
    "email": "fazzul@deltapharmabd.com",
    "phone_mobile": "+88-01755598205",
    "web": "www.deltalimitedbd.com",
    "address": "House #462, Road #31, New DOHS Mohanbali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Desh Media",
    "category": "X-Ray Machine & Parts",
    "email": "desh.media@yahoo.com",
    "phone_mobile": "01817089496, 01817089496",
    "web": "www.deshmedia.com",
    "address": "15/2, Topkhana Road, BMA Bhaban Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Desire Power Medical Equipment & Surgical Suppliers",
    "category": "X-Ray Machine & Parts",
    "email": "info@desirepowerbd.com",
    "phone_mobile": "+88-01628575547",
    "web": "www.desirepowerbd.com",
    "address": "218, Shahid Syed Nazrul Islam Sharani (Old: 45 Topkhana Road), Tropicana Tower (6th Floor), Suit #A, Puran Paltan, Dhaka-1000"
  },
  {
    "company_name": "Dhaka Tech International Ltd.",
    "category": "X-Ray Machine & Parts",
    "email": "info@dhakatech.com.bd",
    "phone_mobile": null,
    "web": "www.dhakatech.com.bd",
    "address": "85, Lake Circus, Dolphin Goli Kalabagan, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Diamond",
    "category": "X-Ray Machine & Parts",
    "email": "info@diamondbd.com",
    "phone_mobile": null,
    "web": "www.diamondbd.com",
    "address": "Navana Obaid Eternia, Flat #A7,B7 (7th Floor), Kakrail VIP Road, Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ehsan Trade International",
    "category": "X-Ray Machine & Parts",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "34, Purana Paltan, Nurjahan Sharif Plaza (8th Floor), Dhaka-1000"
  },
  {
    "company_name": "Exim Trading Corporation",
    "category": "X-Ray Machine & Parts",
    "email": "exim.aks@gmail.com",
    "phone_mobile": "+88-01714112654",
    "web": null,
    "address": "205, Shahid Syed Nazrul Islam Sarani Ramna, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "General Medical Engineering Service Co.",
    "category": "X-Ray Machine & Parts",
    "email": "info@gmesco.net",
    "phone_mobile": "+88-01713039775",
    "web": "www.gmesco.net",
    "address": "34, Purana Paltan, Nurjahan Sharif Plaza, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Global Medical Engineering (BD) Ltd.",
    "category": "X-Ray Machine & Parts",
    "email": "info@gmedb.com",
    "phone_mobile": "01852278200, 01404003501, 01404003500",
    "web": "www.gmedb.com",
    "address": "Corporate Office: 17/2, Topkhana Road (2nd Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Mashruba Medical Technologies",
    "category": "X-Ray Machine & Parts",
    "email": "info@mashruba.com",
    "phone_mobile": "+88-01730798598",
    "web": "www.mashruba.com",
    "address": "House #3/1(Apt: 4C & 6D), Block #F Lalmatia, Dhaka, Bangladesh"
  },
  {
    "company_name": "Med Tech BD",
    "category": "X-Ray Machine & Parts",
    "email": "hospimedical@yahoo.com",
    "phone_mobile": "+88 01715036387",
    "web": null,
    "address": "3/1, D.C Ray Road, Bangshal Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "MediGear Corporation",
    "category": "X-Ray Machine & Parts",
    "email": "medizone1inter@gmail.com",
    "phone_mobile": null,
    "web": null,
    "address": "21/A, Topkhana Road, Mahbub Plaza (3rd Floor), Suit #G-3, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Mankind International",
    "category": "X-Ray Machine & Parts",
    "email": "ajmir.meekit@gmail.com",
    "phone_mobile": "01831940244, 01838830970",
    "web": "www.medikitinternational.com",
    "address": "House #20/21, 2nd Floor, Road #3, Chand Uddan Housing Ltd., Mohammadpur, Dhaka-1207"
  },
  {
    "company_name": "MediLife Corporation",
    "category": "X-Ray Machine & Parts",
    "email": "medilifecorp@gmail.com",
    "phone_mobile": null,
    "web": null,
    "address": "72, Lake Circus, Dolphin Goli Kalabagan, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Medinvest Limited",
    "category": "X-Ray Machine & Parts",
    "email": "info@medinvestbd.com",
    "phone_mobile": "0177775706, 01711543511",
    "web": "www.medinvestbd.com",
    "address": "House #42/1, Road #5A, Dhanmondi Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Vision Medical Technology",
    "category": "X-Ray Machine & Parts",
    "email": "visionmedicalbd@gmail.com",
    "phone_mobile": "01973018148, 01746705414",
    "web": "www.vmtbd.com",
    "address": "56/8, 4th Floor, Rouf Manson, Lake Circus, Kalabagan, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Widespread Solution Ltd.",
    "category": "X-Ray Machine & Parts",
    "email": "info@wslbd.com",
    "phone_mobile": "+88 01713120805",
    "web": "www.wslbd.com",
    "address": "F Haque Tower, 107 Sonargaon Road Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Al-Muslim Yarn Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "md@pacificbluejeans.com",
    "phone_mobile": "+88 09666777 879",
    "web": "www.al-muslimgroup.com",
    "address": "Head Office & Factory: 14, Gedda, Ulail, Savar, Dhaka-1340"
  },
  {
    "company_name": "Apex Yarn Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "info@apexthreads.com",
    "phone_mobile": "+880 9606669988",
    "web": "www.apexthreads.com",
    "address": "Head Office: 18, Gulshan Avenue, Shanta Skymark, Gulshan, Dhaka"
  },
  {
    "company_name": "Baly Yarn Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "sales@baly yarn.com, baly_yd@yahoo.com",
    "phone_mobile": "01936005604, 01713021479",
    "web": "www.baly yarn.com",
    "address": "Baly Complex (4th Floor), Plot # 33 Dhaka Mymensingh Road, Sector # 3 Uttara C/A, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Eco Threads & Yarns",
    "category": "Yarn (Dyed Yarn)",
    "email": "eco@dbl-group.com",
    "phone_mobile": "+88 01707557759",
    "web": "www.eco-threads.com",
    "address": "Corporate Office: BGMEA Complex, West Tower, 11th Floor, House # 7/7A, Block # H-1, Uttara, Sector # 17, Dhaka-1230"
  },
  {
    "company_name": "Everway Yarn Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "info@everwaygroup.com",
    "phone_mobile": null,
    "web": "www.everwaygroup.com",
    "address": "Head Office: House # 22, Road # 09, Sector # 04, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Fabian Thread Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "info@fabiangrp.com",
    "phone_mobile": "+88 01711538696",
    "web": "www.fabiangrp.com",
    "address": "Liaison Office: 159/D, Kunipara, Tejgaon I/A Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Farshe Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "dl@farshegroup.com",
    "phone_mobile": "+88 01711525777",
    "web": null,
    "address": "House # 352 (5th Floor), Road # 5, DOHS, Baridhara, Dhaka"
  },
  {
    "company_name": "Kamal Yarn Limited",
    "category": "Yarn (Dyed Yarn)",
    "email": "info@badshatex.com",
    "phone_mobile": null,
    "web": "www.badshatex.com",
    "address": "Head Office: Holland Center (8th Floor), Cha-72/1-B, Progati Sarani, Middle Badda, Dhaka-1212"
  },
  {
    "company_name": "Labib Dyeing Mills Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "info@labibgroup.com",
    "phone_mobile": null,
    "web": "www.labibgroup.com",
    "address": "Tower Alamgir, House # 11/B, Road # 55, Block # NW(F), Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "M & M Yarn Dyeing Mills Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "kamal@mnmyardneyng.com",
    "phone_mobile": "+88 01711993434",
    "web": "www.mnmyardneyng.com",
    "address": "Head Office: Flat # 6 A, House # 34, Road # 29, Block # D, Mirpur-12, Dhaka-1216"
  },
  {
    "company_name": "Paban Textile Mills Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "pabantex@gmail.com",
    "phone_mobile": "01711966399, 01678005255, 01979005255",
    "web": "www.pabantextile.com",
    "address": "Head Office: House # 363 (Ground Floor), Road # 27, DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Purbari Yarn Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": null,
    "phone_mobile": null,
    "web": "www.purbangroup.com",
    "address": "Richmond Concord, 1st, 5th & 6th Floor, 68, Gulshan Avenue, Gulshan-1 Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "M.L. Dyeing & Textile Ind. PLC",
    "category": "Yarn (Dyed Yarn)",
    "email": "info@mldyeing.com",
    "phone_mobile": null,
    "web": "www.mldyeing.com",
    "address": "Corporate Office: House # 11 (Floor: 6-A), Road # 12, Block # F, Niketon, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "M.L Thread & Accessories Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "rssdhk@gmail.com",
    "phone_mobile": null,
    "web": "www.rssbd.com",
    "address": "Corporate Office: House # 28, Road # 01, Sector # 06 Uttara Model Town, Dhaka-1230"
  },
  {
    "company_name": "Shepherd Yarn Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "admin@shepherdbd.com",
    "phone_mobile": null,
    "web": "www.shepherdbd.com",
    "address": "Shepherd Tower, House # 24 Road # 4, Sector # 4, Uttara, Dhaka"
  },
  {
    "company_name": "Tung Hal Knitting & Dyeing Ltd.",
    "category": "Yarn (Dyed Yarn)",
    "email": "mahbub@tunghaigroup.com",
    "phone_mobile": "+88 01711531139",
    "web": null,
    "address": "30/2, Darus Salam Road, Industrial Plot # 2C/1-B, Section # 1, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "NZ Textile Ltd.",
    "category": "Textile",
    "email": "info@nztexgroup.com",
    "phone_mobile": "+8809612654450, +8809612654360-1",
    "web": "www.nztexgroup.com",
    "address": "181 Khan Plaza, Arambagh, Motijheel, Dhaka-1000, Bangladesh (Arambagh Office); Empori Financial Center, Road #93, Plot #06, CNE(A), 1st Floor, Gulshan North Avenue, Dhaka-1212 (Gulshan Office)"
  },
  {
    "company_name": "Orion Knit Textiles Ltd.",
    "category": "Textile",
    "email": "orion@orion-group.net",
    "phone_mobile": "+88-02-8870133, 8870134",
    "web": "www.orion-group.net",
    "address": "Orion House, 153-154 Tejgaon Industrial Area, Dhaka-1208"
  },
  {
    "company_name": "Paramount Textile Ltd.",
    "category": "Textile",
    "email": "tavita@paramountgroupbd.com",
    "phone_mobile": "+88-02-55049834",
    "web": "www.paramountgroupbd.com",
    "address": "House #22, Level #II, V-VII, Road #113/A, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Queen South Textile Mills Ltd.",
    "category": "Textile",
    "email": "nuton@qstmills.com",
    "phone_mobile": "+88-02-8817216, 8855318",
    "web": "www.qstmills.com",
    "address": "House #235, Gr. Floor, Road #03, DOHS, Baridhara, Dhaka, Bangladesh"
  },
  {
    "company_name": "Rahim Textile Ltd.",
    "category": "Textile",
    "email": "info@newasiabd.com",
    "phone_mobile": "+8809612111177",
    "web": "www.newasiabd.com",
    "address": "117/A, Tejgaon I/A, Dhaka 1208, Bangladesh"
  },
  {
    "company_name": "Raihan Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@raihantextilebd@gmail.com",
    "phone_mobile": "01954997788, 01817012164",
    "web": "www.raihantextilebd.com",
    "address": "68-B (3rd Floor), Malibagh Chowdhurypara, Dhaka-1219"
  },
  {
    "company_name": "Ranka Denim Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@rootgroupbd.com",
    "phone_mobile": "+88-02-41082029, 41082030",
    "web": "www.rootgroupbd.com",
    "address": "A R Tower (10-12th Floor), 24, Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Redwan Textile Mills Ltd.",
    "category": "Textile",
    "email": "sohel@redwangroup.com",
    "phone_mobile": "01552103258, 01731685925",
    "web": "www.redwangroup.com",
    "address": "House #03 (3rd Floor), Road #12, Sector #04, Uttara, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Sadia Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@sadiatextile.com",
    "phone_mobile": "01711856850, 01714100878",
    "web": "www.sadiatextile.com",
    "address": "House #6, Road #13, Sector #7, Uttara, Dhaka 1230, Bangladesh"
  },
  {
    "company_name": "Saiham Textile Mills Ltd.",
    "category": "Textile",
    "email": "share@saiham.com",
    "phone_mobile": "+88-02-22226333, 22226284",
    "web": "www.saihamtextile.com",
    "address": "Saiham Tower, House #34, Road #136, Block #SE (C)-1, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Saireen Textile Mills Ltd.",
    "category": "Textile",
    "email": "saireentextilemills@yahoo.com",
    "phone_mobile": "01721269143, 01715669256",
    "web": null,
    "address": "House #438, Road #2, 6th Floor, Flat-6A, Baitul Aman Housing Society, Adabro, Shyamoli, Dhaka-1207"
  },
  {
    "company_name": "SBS Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@sbstextilebd.com",
    "phone_mobile": "+88-02-223380964, 22338105",
    "web": "www.sbstextilebd.com",
    "address": "Akram Center (5th Floor), 212 Shahid Sayed Nazrul Islam Sarani, Bijoy Nagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shah Fatehullah Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@shafatehullah.com",
    "phone_mobile": "+88-02-226602221-23",
    "web": "www.shafatehullah.com",
    "address": "Molly Capita Center, Level-5, 76 Gulshan Avenue, Dhaka-1212"
  },
  {
    "company_name": "Shohagpur Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@purbanigroup.com",
    "phone_mobile": "+88-02-222285205, 222295208",
    "web": "www.purbanigroup.com",
    "address": "Richmond Concord, 1st, 5th & 6th Floor, 68, Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Silver Line Composite Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@silverglobalfashion.com",
    "phone_mobile": "+88-02-41081240-47",
    "web": "www.silverlinebd.com",
    "address": "17th Floor, Silver Tower, 52, Gulshan Avenue, Gulshan-1, Dhaka-1212"
  },
  {
    "company_name": "Union Textile Mills Ltd.",
    "category": "Textile",
    "email": "alinoor@unicomtech.com",
    "phone_mobile": "+88-02-41002370",
    "web": "www.unicomtech.com",
    "address": "Youth Tower, 822/2 Rokeya Sarani, Dhaka-1216"
  },
  {
    "company_name": "Square Textiles PLC.",
    "category": "Textile",
    "email": "squarecenter@squaregroup.com",
    "phone_mobile": "+88-02-222283604, 222285870",
    "web": "www.squarecenterbd.com",
    "address": "Square Center, 48 Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Unified Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@unifiedgroup-bd.com",
    "phone_mobile": "+88-02-22228970, 01961212746",
    "web": "www.unifiedgroup-bd.com",
    "address": "Chamak Vintage (Level-4 & 5), House #15/B, Road #08, Gulshan-1, Dhaka-1212"
  },
  {
    "company_name": "United Textile Mills Ltd.",
    "category": "Textile",
    "email": "info@unitedgroup-bd.com",
    "phone_mobile": "+88-02-47116775, 09606990770",
    "web": "www.unitedgroup-bd.com",
    "address": "United Tower, 263 Bangshal Road, Dhaka-1100"
  },
  {
    "company_name": "Worthy Textile Mills Ltd.",
    "category": "Textile",
    "email": "akhlak@worthytextile.com",
    "phone_mobile": "+88-02-48956877",
    "web": "www.worthytextile.com",
    "address": "House #10 (3rd Floor), Road #14, Sector #04, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Younus Spinning Mills Ltd.",
    "category": "Textile",
    "email": "information@younusgroup.com",
    "phone_mobile": "+88-02-58610056, 58613965",
    "web": "www.younusgroup.com",
    "address": "51, Central Road, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Zaber & Zubair Fabrics Ltd.",
    "category": "Textile",
    "email": "info@znzfab.com",
    "phone_mobile": "+88-02-223358131, 223390499",
    "web": "www.znzfab.com",
    "address": "Adamjee Court Main Building (5th Floor), 115-120, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Adams Caps & Textiles Limited",
    "category": "Textile",
    "email": "abdullah@aht-bd.com",
    "phone_mobile": "+88-02-333341319, 01730025062",
    "web": null,
    "address": "Plot #49-52, Sector #01, EPZ, Chattogram, Bangladesh"
  },
  {
    "company_name": "Al-Salam Fabrics (Pvt.) Limited",
    "category": "Textile",
    "email": "info@alsalamfabrics.com, rmintl@rmibd.com",
    "phone_mobile": "+88-02-333311292, 333325741, +88-01711760291",
    "web": "www.alsalamfabrics.com",
    "address": "Plot #39-40, Sector #01, Road #04, CEPZ, Chattogram-4223, Bangladesh"
  },
  {
    "company_name": "KDS Textile Mills Ltd.",
    "category": "Textile",
    "email": "textile@kdsgroup.net",
    "phone_mobile": "+88-031-6812414",
    "web": "www.kdsgroup.net",
    "address": "251-252 Nasirabad I/A, Chattogram-4211, Bangladesh"
  },
  {
    "company_name": "Regent Textile Mills Ltd.",
    "category": "Textile",
    "email": "cs@regenttex.com",
    "phone_mobile": "+88-031-2868204-6",
    "web": "www.regenttex.com",
    "address": "H G. Tower, 1182, Jubilee Road, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "S. Islam & Sons Textile (Pvt.) Ltd.",
    "category": "Textile",
    "email": "islam71177@gmail.com",
    "phone_mobile": "+88-01732893346",
    "web": null,
    "address": "2 No. Side Raja Badsha Brickfield, Middle Halishahar, Bandar, Chattogram, Bangladesh"
  },
  {
    "company_name": "R.T.T Textile Industries (Pvt.) Ltd.",
    "category": "Textile",
    "email": "belayet_rtf@bbts.net",
    "phone_mobile": "+88-02-333340705, 333341903, +88-01731324398",
    "web": null,
    "address": "Plot #8 & 9, Sector #5/A, EPZ, Chattogram, Bangladesh"
  },
  {
    "company_name": "Bextex Limited",
    "category": "Textile",
    "email": "snih@beximtex.com",
    "phone_mobile": "+88-02-58611891, 58612040, +88-01713001659",
    "web": "www.bextex.net",
    "address": "Beximco Industrial Park, Sarabo, Kashimpur, Gazipur"
  },
  {
    "company_name": "Hashna Textile",
    "category": "Textile",
    "email": "haslnatex@gmail.com",
    "phone_mobile": "+88-01711199399",
    "web": null,
    "address": "Plot #B-08-10, BSCIC I/E, Maria, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Ahmed Towel (Pvt.) Limited",
    "category": "Textile",
    "email": "ahmed.towel@yahoo.com",
    "phone_mobile": "+88-01711687343",
    "web": null,
    "address": "Plot #B 10-12, BSCIC I/A, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Ayubpur Textile Mills Limited",
    "category": "Textile",
    "email": "ayubpur.tex@gmail.com",
    "phone_mobile": "+88-01713011245",
    "web": null,
    "address": "Baghata, Shaheprotap, Shillmandi, Narsingdi Sadar, Narsingdi"
  },
  {
    "company_name": "D. N. Textile Mills",
    "category": "Textile",
    "email": "arprita@dhaka.net",
    "phone_mobile": "+88-01713083952",
    "web": null,
    "address": "Plot #6-9, BSCIC Industrial Area, Kararchar, Shibpur, Narsingdi"
  },
  {
    "company_name": "Entrust Textile (BD) Limited",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88-01788972737",
    "web": null,
    "address": "Plot #1192, BSCIC Shilpa Nagari, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "GIA Fabrics & Apparels",
    "category": "Textile",
    "email": "alo.arian01@gmail.com",
    "phone_mobile": "+88-01715823501",
    "web": null,
    "address": "Asamandrichon, Panchdona, Narsingdi"
  },
  {
    "company_name": "Green Bangla Hometex Industries Ltd.",
    "category": "Textile",
    "email": "greenbanghometexindustries@gmail.com",
    "phone_mobile": "+88-01711689621",
    "web": null,
    "address": "BSCIC I/E, Kararchar, Shibpur, Narsingdi"
  },
  {
    "company_name": "Hana Textiles Limited",
    "category": "Textile",
    "email": "ansornatel@gmail.com",
    "phone_mobile": "+88-01962604204",
    "web": null,
    "address": "BSCIC Industrial Area, Plot #20, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "H. L. Textile",
    "category": "Textile",
    "email": "emranul76@yahoo.com",
    "phone_mobile": "+88-01788972737",
    "web": null,
    "address": "34, 35 Basci I/A, Kararchar, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Al-Khalil Textile Mills Ltd.",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88-01819485084",
    "web": null,
    "address": "Jatramura, Tarabo, Rupganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Alltex Industries Ltd.",
    "category": "Textile",
    "email": "info.alltex@yahoo.com",
    "phone_mobile": "+88-02-41081465, +88-01713366938",
    "web": "www.alltexbd.com",
    "address": "Aribabo, Barpa, Rupganj, Narayanganj"
  },
  {
    "company_name": "Apurbo Dyeling & Finishing Mills (Pvt.) Ltd.",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88-01711536298",
    "web": null,
    "address": "Tarabo, Rupganj, Narayanganj"
  },
  {
    "company_name": "Athol Textile Mills",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88-01820288244",
    "web": null,
    "address": "Hazi Super Market (1st Floor), 65/18, Nayamat, Narayanganj, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "EPS/Packaging",
    "email": "ayeshaepsbd@hotmail.com",
    "phone_mobile": "+88 01912476885, 01712623146",
    "web": "www.aeshaspa.com",
    "address": "Patakata, Lekhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Instinct Textile Limited",
    "category": "Textile",
    "email": "inictctbd@gmail.com",
    "phone_mobile": "+88-01740999994",
    "web": null,
    "address": "BSCIC Industrial Area, Kararchar, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "K. H Tex Industries Limited",
    "category": "Textile",
    "email": "khtexterry@gmail.com",
    "phone_mobile": "+88-01713402146",
    "web": null,
    "address": "BSCIC I/E, Kararchar, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "ACS Textiles Limited",
    "category": "Textile",
    "email": "acsinfo@acstextiles.com",
    "phone_mobile": "09606500445, 09678500445",
    "web": "www.acstextiles.com",
    "address": "Tetlabo, Rupganj, Narayanganj-1460"
  },
  {
    "company_name": "Al-Haj Textile Mills",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88-01711536035",
    "web": null,
    "address": "46/6, K.B. Saha Road, Amlapara, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Atique Ullah Textiles",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88-01914010363",
    "web": null,
    "address": "114, Khanpur Main Road, Don Chamber, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Barnali Textile & Printing Industries (Pvt.) Ltd.",
    "category": "Textile",
    "email": "info@barnalitextile.com.bd",
    "phone_mobile": "+88-01718622581",
    "web": "www.barnalitextile.com.bd",
    "address": "285 (147/3 New), Hazaribag, Godnali, Narayanganj-1432, Bangladesh"
  },
  {
    "company_name": "Hajee Akhter Textile & Processing Mills Ltd.",
    "category": "Textile",
    "email": "info@hajeeakhtertextile.com",
    "phone_mobile": "01711537985, 01713004043",
    "web": "www.hajeeakhtertextile.com",
    "address": "Girda-Nagarpara, Duptara, Araharaz, Narayanganj-1460"
  },
  {
    "company_name": "Hasan Textile Mills",
    "category": "Textile",
    "email": "hasantex161271@yahoo.com",
    "phone_mobile": "+88 01978161271",
    "web": null,
    "address": "Golakandali, Bhulta, Rupganj, Narayanganj"
  },
  {
    "company_name": "Heaven Textile Mills",
    "category": "Textile",
    "email": "info@heaventextilebd.com, heaventextile@yahoo.com",
    "phone_mobile": "+88 01777754428",
    "web": "www.heaventextilebd.com",
    "address": "1/1 Korongop, Tarabo Pourashava, Rupganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Impressive Textile Mills Ltd.",
    "category": "Textile",
    "email": "commercial@impressivetextile.com",
    "phone_mobile": "+88 01924005953",
    "web": "www.impressivetextile.com",
    "address": "53/1, S.M. Maleh Road (2nd Floor), Tanbazar, Narayanganj"
  },
  {
    "company_name": "Tara Spinning Mills Ltd.",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88 01937992116",
    "web": "www.taraspinning.com",
    "address": "Nabinagar, Enayatnagar, Fatullah, Narayanganj-1421, Bangladesh"
  },
  {
    "company_name": "AG Ceramics Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@agceramics.com.bd",
    "phone_mobile": "+88 01713369216",
    "web": "www.agceramics.com.bd",
    "address": "Ahsan Tower, 76 Bir Uttam A.K. Khandakar Road, Mohakhali C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Akij Ceramics Limited",
    "category": "Ceramics/Tiles",
    "email": "ceramics@akijbasher.com",
    "phone_mobile": "+8809612677677",
    "web": "www.akijceramics.net",
    "address": "Simplerece Lighthouse, 4th Floor, Plot #53, Road #21, Block-B, Kemal Ataturk Avenue, Banani, Dhaka-1213"
  },
  {
    "company_name": "ATI Ceramics Limited",
    "category": "Ceramics/Tiles",
    "email": "info@atticeramics.com",
    "phone_mobile": "+88 01710560739",
    "web": "www.atticeramics.com",
    "address": "Khwaja Enayatpur (Ir) Tower, 17, Bir Uttam K.M. Shafiullah Road (Green Road), Dhaka-1205"
  },
  {
    "company_name": "BCL Ceramic Industries Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@bclceramics.com",
    "phone_mobile": "+88-02-55168086, +88 01732661122",
    "web": "www.bclceramics.com",
    "address": "Navana Zohura Square (4th Floor), 28, Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "China Bangla Ceramic Industries Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@cbctiles.com",
    "phone_mobile": "+88-02-9611256-61, +8809612332233",
    "web": "www.cbctiles.com",
    "address": "CBC Tower, 36 Poribagh, Bir Uttam C.R. Dutta Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "DBL Ceramics Limited",
    "category": "Ceramics/Tiles",
    "email": "info@dblceramics.com",
    "phone_mobile": "09638113300, +88 01713-656565",
    "web": "www.dblceramics.com",
    "address": "2nd Floor, House #10, Road #04, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Excellent Tiles Ind. Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@excellentceramic.com.bd",
    "phone_mobile": "+88-02-44611991, +88 01730305361-69",
    "web": "www.excellentceramic.com.bd",
    "address": "Planner's Tower, 8th Floor, 13/A Bir Uttam C.R Datta (Sonargaon) Road, Bangla Motor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fu-Wang Ceramic Industry Ltd.",
    "category": "Ceramics/Tiles",
    "email": "fwcwt@fuwangceramic.com",
    "phone_mobile": "+88-02-226602528, 02-226602529, 01955-576966",
    "web": "www.fuwangceramic.com",
    "address": "Pearl Trade Center (2nd Floor), Cha-90/3, Progoti Sharani, North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Great Wall Ceramic Ind. Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@greatwallceramic.net",
    "phone_mobile": "+88-02-55168031-39, +88 01735353575",
    "web": "www.greatwallceramic.net",
    "address": "Navana Zohura Square, 28, Kazi Nazrul Islam Avenue, Bangla Motor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Hua Thai Ceramics Industry Ltd.",
    "category": "Ceramics/Tiles",
    "email": "operation@hoq-huathai.com",
    "phone_mobile": "+88 01616828424",
    "web": "www.hoq-huathai.com",
    "address": "House #121 (4th Floor), Road #21, DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Star Ceramics Limited",
    "category": "Ceramics/Tiles",
    "email": "inquiry@starceramicsbd.com",
    "phone_mobile": "16759, +88 01755-582874",
    "web": "www.starceramicsbd.com",
    "address": "Bijoy Rakeen City (Level-6 & 7), Plot #1/2, Block #D, Section-15, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Mir Ceramic Ltd.",
    "category": "Ceramics/Tiles",
    "email": "sales.info@mirceramic.com",
    "phone_mobile": "+88-02-55138529, 55138533-35, +8809601502523, +88 01713-296300",
    "web": "www.mirceramic.com",
    "address": "Red Crescent Borak Tower (Level-7), 37/A, Esaktan Garden Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Pa-Wang Ceramic Industry Ltd.",
    "category": "Ceramics/Tiles",
    "email": "sales@romatiles.com.bd",
    "phone_mobile": "+88 0963-8000311, +88 01972729264",
    "web": "www.romatiles.com.bd",
    "address": "38, Paribag Road, 1st Floor, Banglamotor, Dhaka-1000"
  },
  {
    "company_name": "Sun Power Ceramics Co. Ltd.",
    "category": "Ceramics/Tiles",
    "email": "sunpower@mail.com",
    "phone_mobile": "+88-02-55087601-06, 01999-936801, 01960-777722, 01986-777722, 01992-777722",
    "web": "www.sunpowerceramicsbd.com",
    "address": "House #9, Sonargaon Janapath Road, Sector #12, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Tushar Ceramics Ltd.",
    "category": "Ceramics/Tiles",
    "email": "farid@tusharceramics.com",
    "phone_mobile": "+88 01844-274333",
    "web": "www.tusharceramics.com",
    "address": "House #78, Road #2, Block #F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "X Ceramics Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@xceramics.com",
    "phone_mobile": "+88 01844224364",
    "web": "www.xceramics.com",
    "address": "XIC Point, 213/2, 213/3 & 213/5, Bir Uttam Rafiqul Islam Sarani, Middle Badda, Dhaka-1212"
  },
  {
    "company_name": "Sanita Ceramics Pvt. Ltd.",
    "category": "Ceramics/Tiles",
    "email": "info@sanitaceramics.com",
    "phone_mobile": "01708419710, 01324169208, 01708419705",
    "web": "www.sanitaceramics.com",
    "address": "Ramgoni Road, Tupamari, Nilphamari"
  },
  {
    "company_name": "Abdul Sanitary",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01911748855",
    "web": null,
    "address": "20/25, Habib Market, Siddique Bazar, Kotwali, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Alhaj Trade International",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01720508072",
    "web": null,
    "address": "Ka-25/4, Kuril, Pragati Sharani, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Amena Trading",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01715081894",
    "web": null,
    "address": "49, Bir Uttam C R Dutta Road, Hatirpool, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Artistry Marble & Granite",
    "category": "Tiles/Stone Retail",
    "email": "info@artistrymarble.com",
    "phone_mobile": "+88 01980556633",
    "web": "www.artistrymarble.com",
    "address": "Ground Floor, Ninakabbo, 227/A Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Azad Tiles & Sanitary",
    "category": "Tiles/Stone Retail",
    "email": "customer.care.azad@gmail.com",
    "phone_mobile": "+88-02-22227670, 01711628796, 01610255777",
    "web": null,
    "address": "476/C, Azad Tower, DIT Road, Malibagh, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Bengal Agencies",
    "category": "Tiles/Stone Retail",
    "email": "bengalay@dhaka.net",
    "phone_mobile": "+88-02-223369323",
    "web": "www.bengalagencies.com",
    "address": "JB Tower, 21 Paribagh, Hatirpool, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Buildtech Megamart Ltd.",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01710843860",
    "web": null,
    "address": "38, Paribag Road (1st Floor), Banglamotor, Dhaka-1000"
  },
  {
    "company_name": "Ceramic City Ltd.",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01715786403",
    "web": null,
    "address": "9/A, Link Road, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ceramic Palace",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01752284242",
    "web": null,
    "address": "Romzan Member Mansion, Kadamtoli, Keraniganj, Dhaka-1310"
  },
  {
    "company_name": "Crescent Sanitary Emporium",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01819211540",
    "web": null,
    "address": "23/1, Hazi Osman Goni Road, Alu Bazar, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Daco Stone",
    "category": "Tiles/Stone Retail",
    "email": "dacostone01@gmail.com",
    "phone_mobile": "01674033550, 01727564464",
    "web": null,
    "address": "Shop #21 (1st Floor), Navana Zohura Square, 28 Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000"
  },
  {
    "company_name": "Dhaka Mosaic Agency",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01718413464",
    "web": null,
    "address": "43, Mymensingh Link Road, Banglamotor, Dhaka-1000"
  },
  {
    "company_name": "Dhaka Mosaic Company",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01715199288",
    "web": null,
    "address": "38, North Jatrabari, Dhaka-1204"
  },
  {
    "company_name": "Dhaka Tiles Center",
    "category": "Tiles/Stone Retail",
    "email": "dhakatiles@gmail.com",
    "phone_mobile": "+88 01619224133",
    "web": null,
    "address": "77, Bir Uttam CR Datta Road, Dhaka"
  },
  {
    "company_name": "Eastern Agency",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01992918189",
    "web": null,
    "address": "122, Senpara, Rokeya Sarani, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Eastern Mosaic",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01712371643, 01740962178",
    "web": null,
    "address": "83, Bir Uttam C.R Dutta Road, Hatirpool, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fahad Enterprise",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01921100888",
    "web": null,
    "address": "123, Senpara, Parbota, Begum Rokeya Sarani, Mirpur-10, Dhaka"
  },
  {
    "company_name": "Five Star Tiles & Sanitary",
    "category": "Tiles/Stone Retail",
    "email": "abdurrahim7541524@gmail.com",
    "phone_mobile": "01716032753, 01616032753",
    "web": null,
    "address": "42/B, North Jatrabari, Dhaka-1204"
  },
  {
    "company_name": "Gaffar Tiles",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01715127625, 01919172625",
    "web": null,
    "address": "11/A North-West Jatrabari, Wasa Road, Jatrabari, Dhaka-1204"
  },
  {
    "company_name": "GANI Marble Tiles",
    "category": "Tiles/Stone Retail",
    "email": "bangladesh@ganimarbletiles.com",
    "phone_mobile": "+88 01841777250",
    "web": null,
    "address": "Ka-16/1-3, Kuratoli, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Marble World",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711324220",
    "web": null,
    "address": "Shop #09, Navana Zohura Square, 25,26,27 Kazi Nazrul Islam Avenue, Bangla Motor, Dhaka-1000"
  },
  {
    "company_name": "Mim Marble & Tiles",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01738716908",
    "web": null,
    "address": "44, Mymensingh Road, Paribagh Link Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Hossain Trading",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01715453495",
    "web": null,
    "address": "69, Bir Uttam, C.R Datta Road (1st Floor), Hatirpool, Dhaka-1205"
  },
  {
    "company_name": "Jatrabari Tiles Agency",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01915434404",
    "web": null,
    "address": "43, North Jatrabari, Jatrabari, Dhaka"
  },
  {
    "company_name": "J.M Sanitary Agency",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01675510594, 01829325622",
    "web": null,
    "address": "56, Siddique Bazar, Dhaka-1100"
  },
  {
    "company_name": "Khan Sanitary",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01710902094, 01714017722",
    "web": null,
    "address": "27/6, Sher Shah Suri Road, Mohammadpur Town Hall Market, Dhaka, Bangladesh"
  },
  {
    "company_name": "Kushita Tiles House & Sanitary",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01717706407",
    "web": null,
    "address": "18/7, Block #F, Tikkapara, Ring Road, Mohammadpur, Dhaka-1207"
  },
  {
    "company_name": "Mim Sanitary Agency",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711682222",
    "web": null,
    "address": "Ga-25/2-B, Shahjadpur, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Mohammed Trading",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01729252826",
    "web": null,
    "address": "Mazed Court (1st Floor), 16/1, Siddique Bazar, Syed Nazrul Islam Shawrani, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Mosaic Merchant",
    "category": "Tiles/Stone Retail",
    "email": "mosaicmerchant@gmail.com",
    "phone_mobile": "02-223364734, 09642607089",
    "web": "www.mosaicmerchantbd.com",
    "address": "25-27, Kazi Nazrul Islam Avenue, Banglamotor, Shahbagh, Dhaka-1000"
  },
  {
    "company_name": "N Alam Ceramic Center",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01613042208",
    "web": null,
    "address": "13/A, Planners Tower (Ground Floor), Sonargaon Road, Dhaka-1000"
  },
  {
    "company_name": "Parbata Agency",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01796527537, 01796527549",
    "web": null,
    "address": "121, Senpara, Rokeya Sarani, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Sanitiles",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01723078131",
    "web": null,
    "address": "Plot #17, Garib-E-Newz, Sector #13, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Mitali Emporium",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01611777111",
    "web": null,
    "address": "1731, Mitali Bhaban, P.C. Road, Natun Bazar, Halishahar, Chattogram"
  },
  {
    "company_name": "Sultan Trading Co.",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711814067",
    "web": null,
    "address": "108, Khan Jahan Ali Road, Khulna"
  },
  {
    "company_name": "Pathor Mela",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01714243084",
    "web": null,
    "address": "Mozaffar Tower, 55 C.R Datta Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shamin Marble & Sanitary",
    "category": "Tiles/Stone Retail",
    "email": "shamin.marble98@gmail.com",
    "phone_mobile": "+88-02-223340681, 223343836, +88 01688875067",
    "web": null,
    "address": "14/2-C, North West Jatrabari (Wasa Road), Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Mitali Stone",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711286363",
    "web": null,
    "address": "15 Municipal Shopping Complex, Nur Ahmed Road, Chattogram"
  },
  {
    "company_name": "Mahbuba Enterprise",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01714225845",
    "web": null,
    "address": "233/1, Bangobodhro Road, Press Club Building, Narayanganj-1400"
  },
  {
    "company_name": "Redhoy Mosaic Company",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01911390120",
    "web": null,
    "address": "8/9, Ideal School Market, Jatrabari, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Tiles Heritage",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711534162",
    "web": null,
    "address": "12/1, Darus Salam Road, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Mohammed Trading",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01729252832",
    "web": null,
    "address": "Rekha Chitra Tower (1st Floor), 110, Noor Ahmed Road, Kazir Dewri, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Sharma Marble & Tiles",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711327412",
    "web": null,
    "address": "Ali Building, Bandar Bazar Road, Subhani Ghat, Sylhet-3100"
  },
  {
    "company_name": "Reza Marble & Granite Industry (Pvt.) Ltd.",
    "category": "Tiles/Stone Retail",
    "email": "rezamarbeladgranite@gmail.com",
    "phone_mobile": "+88 01611381239",
    "web": null,
    "address": "325, Sonargaon Road, Hatirpitol, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Tokyo Sanitary Mart",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01819254930, 01715564507",
    "web": null,
    "address": "75/3-6 Green Road, Farmgate, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Razu & Co.",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01973104738",
    "web": null,
    "address": "1066 Stadium Shopping Complex, Nur Ahmed Road, Kazir Dewri, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Surma Enterprise",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01748095470",
    "web": null,
    "address": "East Subidbaraz, Sunamganj Road, Sylhet"
  },
  {
    "company_name": "Ronok Tiles & Sanitary Mart",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01680118990",
    "web": null,
    "address": "Ka-48, Progoti Sarani, Kuril, Dhaka"
  },
  {
    "company_name": "Trust Tiles & Sanitary",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01873047350",
    "web": null,
    "address": "Shop #10 (1st Floor), Navana Zohura Square, 28 Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Rudmila Ceramics",
    "category": "Tiles/Stone Retail",
    "email": "info@rcmb-bd.com",
    "phone_mobile": "+88 01844654202",
    "web": "www.rcmb-bd.com",
    "address": "Makkah Madina Trade Center (Ground Floor), 88, Sonargaon Janapath, Sector #11, Uttara, Dhaka"
  },
  {
    "company_name": "Win Bengal Tiles & Sanitation",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01716934821",
    "web": null,
    "address": "House #55, Sonargaon Janapath Road, Sector #7, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Super Sanitary & Co.",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711369579",
    "web": null,
    "address": "875, Jubilee Road, Chattogram"
  },
  {
    "company_name": "S.A. Trading International",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01914788828, 01849429904, 01812381819",
    "web": null,
    "address": "Shop #209 (1st Floor), 89 Bir Uttam C R Dutta Road, Nasir Trade Center, Hatirpitol, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Zahora Ceramic Touch",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01670019245",
    "web": null,
    "address": "26/C, Siddique Bazar, North South Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Fashion Mosaic",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01732638291, 01763475071",
    "web": null,
    "address": "109, Nur Ahmmed Road, Kazir Dewri, Kotwali, Chattogram-4000"
  },
  {
    "company_name": "Infinity Marble & Granite",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01819371934",
    "web": null,
    "address": "15/A Love Lane, Chattogram-4000"
  },
  {
    "company_name": "Sakiat Trading Company",
    "category": "Tiles/Stone Retail",
    "email": "info@sakiattradingbd.com",
    "phone_mobile": "+88 01810199565",
    "web": "www.sakiattradingbd.com",
    "address": "3rd Floor, 89, Bir Uttam C R Dutta Road, Nasir Trade Centre, Dhaka"
  },
  {
    "company_name": "Karnaphuli Tiles & Sanitary",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01828377039",
    "web": null,
    "address": "120, Nur Ahmed Road, Chattogram"
  },
  {
    "company_name": "Habib Trading Co.",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01743127660",
    "web": null,
    "address": "12-13, Khanjahan Ali Road, Khulna"
  },
  {
    "company_name": "Jannat Enterprise",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711909186",
    "web": null,
    "address": "12/13 Hazi Hanif Complex, Khan Jahan Ali Road, Khulna"
  },
  {
    "company_name": "Kumla Tiles & Decor",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "01777228566, 01777355464",
    "web": null,
    "address": "339, Khanjahan Ali Road, Khulna"
  },
  {
    "company_name": "M/s. Nazmul Enterprise",
    "category": "Tiles/Stone Retail",
    "email": null,
    "phone_mobile": "+88 01711575883",
    "web": null,
    "address": "52, KDA Avenue, Khulna, Bangladesh"
  },
  {
    "company_name": "Jenson & Nicholson (Bangladesh) Ltd.",
    "category": "Paint/Containers",
    "email": "info@jnbl.com.bd",
    "phone_mobile": "01844147401, 01799983009",
    "web": "www.jnbl.com.bd",
    "address": "House #8, Road #2, Sector #3, Uttara, Dhaka-1230 (Corporate Office); 70, East Nasirabad I/A, Bayezid Bostami Road, Chattogram (Factory)"
  },
  {
    "company_name": "Padma Cans & Closures Ltd.",
    "category": "Containers",
    "email": "info@padmagroupbd.com",
    "phone_mobile": "+88 02-41032670, 41032668, 41032669, 09644556677",
    "web": "www.padmagroupbd.com",
    "address": "Padma Center, 32/1, Dilu Road, New Eskaton, Dhaka-1000"
  },
  {
    "company_name": "Rafique Tin Containers Limited",
    "category": "Containers",
    "email": "rafique_tin@yahoo.com",
    "phone_mobile": "01711526150, 01715172679",
    "web": "www.rafiquetin.com",
    "address": "16/2, Khaje Dewan 2nd Lane, Lalbagh, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "VitaCan",
    "category": "Containers",
    "email": "info@vitacan.com.bd",
    "phone_mobile": "+88-02-8391379, 8391403, 8391053, 8391349",
    "web": "www.vitacan.com.bd",
    "address": "Saiham Sky View Tower (12th Floor), 45, Bijoy Nagar, Dhaka-1000"
  },
  {
    "company_name": "Xclusive Can Limited",
    "category": "Containers",
    "email": "marketing@qpail.com",
    "phone_mobile": "01819343635, 01680240524, 01624071737",
    "web": "www.qpail.com",
    "address": "Plot #53/1, Block #B, Kaligonj Road, Majukhan, Gazipur, Bangladesh"
  },
  {
    "company_name": "Bashundhara Paper Mills Ltd.",
    "category": "Paper/Tissue",
    "email": "info.paper@bgc-bd.com",
    "phone_mobile": "+88-02-8432289-93",
    "web": "www.bashundharapapermills.com",
    "address": "Bashundhara Industrial Headquarters-2, Plot #56/A, Block #C, Umme Kulsum Road, Bashundhara R/A, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Easy Industries (BD) Ltd.",
    "category": "Paper/Tissue",
    "email": "info@easytissuebd.com",
    "phone_mobile": "+88 09617669966",
    "web": "www.easytissuebd.com",
    "address": "Easy Centre, Keraniganj, Dhaka-1310"
  },
  {
    "company_name": "Janani Tissue Paper Industries",
    "category": "Paper/Tissue",
    "email": "jananitissueu.bd@gmail.com",
    "phone_mobile": "01840442255, 01885927302",
    "web": "www.jananitissuepaperbd.com",
    "address": "Meherba Plaza (9th Floor), 33 Topkhana Road, Dhaka-1000"
  },
  {
    "company_name": "Kallol Group of Companies",
    "category": "Paper/Tissue",
    "email": "info@kallolgroup.com",
    "phone_mobile": "+88-02-58816004-9",
    "web": "www.kallolgroup.com",
    "address": "199, Tejgaon I/A, Dhaka-1208"
  },
  {
    "company_name": "Meghna Pulp & Paper Mills Ltd.",
    "category": "Paper/Tissue",
    "email": "info@mgi.org",
    "phone_mobile": "+88 09666777055",
    "web": "www.mgi.org",
    "address": "Fresh Villa, House #15, Road #34, Gulshan-1, Dhaka-1212"
  },
  {
    "company_name": "Nissho Koeki Tissue Papers Co. Ltd.",
    "category": "Paper/Tissue",
    "email": "nktissue@yahoo.com, corporate@banglatissue.com",
    "phone_mobile": "+88 01713369453",
    "web": "www.banglatissue.com",
    "address": "Plot #24, Road #03 (Main Road), Block #A, Mirpur-11, Dhaka-1216 (Corporate Office); Darikandi, Murapara, Rupganj, Narayanganj, Bangladesh (Factory)"
  },
  {
    "company_name": "Partex Tissue Limited",
    "category": "Paper/Tissue",
    "email": "mail@psgbd.com",
    "phone_mobile": "+88-02-8878800-11, +88 01313012610",
    "web": "www.partextsargroup.com",
    "address": "Shanta Western Tower, Level-13, Bir Uttam Mir Shawkat Road, 186 Tejgaon I/A, Dhaka-1208"
  },
  {
    "company_name": "Rainbow Pulp & Paper Industries Ltd.",
    "category": "Paper/Tissue",
    "email": "rainbowpaperbd@gmail.com",
    "phone_mobile": "+88 09602666736-8, 01987707707, 01987707708, 01987707709, 01987707710-11",
    "web": "www.rainbowtissuepaper.com",
    "address": "House #06, Road #03, Block #J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "RFM Paper Mills",
    "category": "Paper/Tissue",
    "email": "info@rfmgroup.net",
    "phone_mobile": "+88 01711784508",
    "web": "www.rfmgroupbd.com",
    "address": "Flat #A4, House #10, Shah Makhdum Avenue, Sector #13, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "SSG Paper Ltd.",
    "category": "Paper/Tissue",
    "email": "info@ssgbd.com",
    "phone_mobile": "+88 09610774774",
    "web": "www.ssgbd.com",
    "address": "SSG Center, Nabosrista Plot #1/A, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Hakkani Pulp & Paper Mills Ltd.",
    "category": "Paper/Tissue",
    "email": "info@hakkanigroup.com",
    "phone_mobile": "+88-02-43151463, 43151464, 43150864, 43150865",
    "web": "www.hakkanigroup.com",
    "address": "2/10, Dhaka Trunk Road, North Pahartali, Chattogram"
  },
  {
    "company_name": "Kohinoor Chemical Company (BD) Ltd.",
    "category": "Toiletries",
    "email": "info@kccl-bd.com",
    "phone_mobile": "+88-02-226603881-84",
    "web": "www.kohinoor-bd.com",
    "address": "36, Shahid Tajuddin Ahmed Sarani, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Uro Toiletries Ltd.",
    "category": "Toiletries",
    "email": "urogroupbd@gmail.com",
    "phone_mobile": "+88 01703611101",
    "web": "www.urogroupbd.com",
    "address": "102, Kakrail, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Keya Cosmetics Ltd.",
    "category": "Toiletries",
    "email": "kgroup@keya-bd.com",
    "phone_mobile": "+88 01722099200",
    "web": "www.keyagroupbd.com",
    "address": "Jarun, Konabari, Gazipur, Bangladesh"
  },
  {
    "company_name": "Getwell Limited",
    "category": "Tooth Brush",
    "email": "crd@www.getwellltd.com",
    "phone_mobile": "08007777777, 09613737777",
    "web": "www.getwellltd.com",
    "address": "PRAN-RFL Center, 105 Pragati Sarani, Middle Badda, Dhaka-1212"
  },
  {
    "company_name": "Millat Chemical Co., Ltd.",
    "category": "Toiletries",
    "email": "mawintl@yahoo.com",
    "phone_mobile": "+88 01715298830",
    "web": "www.millatgroup.com",
    "address": "Nobosristo Plot #1, Tejgaon I/A, Dhaka"
  },
  {
    "company_name": "Square Toiletries Ltd.",
    "category": "Toiletries",
    "email": "infosquaretoiletriesltd@gmail.com",
    "phone_mobile": "0800-0888-000, 09613336666",
    "web": "www.squaretoiletries.com",
    "address": "Samson Centre, 43 South Avenue, Road #126, Plot #CES(G) 5A, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Tasmia Cosmetics & Toiletries Ltd.",
    "category": "Toiletries",
    "email": "smarttasmia@gmail.com",
    "phone_mobile": "+88 01713017259",
    "web": "www.tasmiacosmetics.com",
    "address": "House #209/E, Road #8, Block #C, Bashundhara R/A, Dhaka"
  },
  {
    "company_name": "Matador Toothbrush Industries Ltd.",
    "category": "Tooth Brush",
    "email": "khurshid.alam@matador-bd.com",
    "phone_mobile": "+88-02-8622283, +88 01713490277",
    "web": "www.matador.com.bd",
    "address": "Matador Harbour (8th Floor), 102, Azimpur Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Dal Health Care Bangladesh Ltd.",
    "category": "Healthcare",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": "3rd Floor, House #39, Road #126, Islam Mansion, Gulshan-1, Dhaka"
  },
  {
    "company_name": "Dragon Holidays BD",
    "category": "Tour Operators",
    "email": "booking@dragonholidaysbd.com",
    "phone_mobile": "01796232323, 01707722199",
    "web": "www.dragonholidaysbd.com",
    "address": "3rd Floor, House #39, Road #126, Islam Mansion, Gulshan-1, Dhaka"
  },
  {
    "company_name": "Evergreen Tourism Network",
    "category": "Tour Operators",
    "email": "evergreenn98bd@yahoo.com",
    "phone_mobile": "01711132842, 01819287251",
    "web": null,
    "address": "Suite #508 (Ibrahim Mansion), 11 Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Royal Bengal Tours",
    "category": "Tour Operators",
    "email": "info@royalbengaltours.com",
    "phone_mobile": "011-482-440812, 011-480-817407578",
    "web": "www.royalbengaltours.com",
    "address": "House #1132, Road #10, Avenue #8, DOHS Mirpur, Dhaka-1216"
  },
  {
    "company_name": "The Travel Group",
    "category": "Tour Operators",
    "email": "info@ttg.com.bd",
    "phone_mobile": "011-482-22023233",
    "web": "www.ttg.com.bd",
    "address": "5th Central Plaza, 95, Green Road, Suite #D4 (4th Floor), Dhaka-1215"
  },
  {
    "company_name": "Cosmos Holiday",
    "category": "Tour Operators",
    "email": null,
    "phone_mobile": "019678343434, 01778889203-5",
    "web": "www.cosmoholiday.com",
    "address": "House #2, Road #14, Plaza A.R (4th Floor), Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Sundarbans Wonders Tourism",
    "category": "Tour Operators",
    "email": "sundarbanwonders@yahoo.com, sundarbantourism@gmail.com",
    "phone_mobile": "01915440942, 01714843116",
    "web": null,
    "address": "04, B.I.W.T.A Launch Ghat, Khulna"
  },
  {
    "company_name": "Shukria",
    "category": "Tour Operators",
    "email": "info@shukriaholidays.com",
    "phone_mobile": "01712125379",
    "web": "www.shukriaholidays.com",
    "address": "House #57, Western Road, Ground Floor, Banani Old DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Adventure Holidays",
    "category": "Tour Operators",
    "email": "alsyedoverseas@gmail.com",
    "phone_mobile": "+88 01819432736",
    "web": null,
    "address": "70/G, Puran Paltan Line (5th Floor), VIP Road, Dhaka-10000, Bangladesh"
  },
  {
    "company_name": "Akash Bari Holidays",
    "category": "Tour Operators",
    "email": null,
    "phone_mobile": "01613212154",
    "web": "akashbariholidays.com",
    "address": "Flat-17/A, 19th Floor, House #21, Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Blue Marine Holidays",
    "category": "Tour Operators",
    "email": null,
    "phone_mobile": "+88 01713399001",
    "web": null,
    "address": "18, Rajuk Avenue, Lal Bhaban, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Dhana Holidays",
    "category": "Tour Operators",
    "email": "info@dhakaholidays.com, dhakaholiday@gmail.com",
    "phone_mobile": "01712125379, 01779579606",
    "web": "www.dhakaholidays.com",
    "address": "House #57, Western Road, Ground Floor, Banani Old DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Discover Tourism",
    "category": "Tour Operators",
    "email": "discover@dhaka.net",
    "phone_mobile": "01705683454, 01789377299",
    "web": null,
    "address": "House #61, Road #8, Block #F, Flat-B3, Banani, Dhaka-1213"
  },
  {
    "company_name": "Discovery Tours & Logistics",
    "category": "Tour Operators",
    "email": "discoverytour@gmail.com",
    "phone_mobile": "+88-02-222275823, 222275839, 222275844, 01713444361, 01713444369",
    "web": "www.discoverbangla.com",
    "address": "Suite #B-7, House #11, Road #17, Block #D, Banani, Dhaka-1213 (Corporate Office); HM Plaza, Suite #1(12th Floor), House #34, Road #2, Sector #3, Uttara C/A, Dhaka-1230 (Uttara Office)"
  },
  {
    "company_name": "Eco Trippers",
    "category": "Tour Operators",
    "email": "ecotrippersbd@gmail.com",
    "phone_mobile": "+88 01632164405",
    "web": null,
    "address": "Century Park Tower, Suite #301 (3rd Floor), House #36, Road #117, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Ehsan Air Travels",
    "category": "Tour Operators",
    "email": "ehsanairtravels@yahoo.com",
    "phone_mobile": "+88 01713082094",
    "web": null,
    "address": "Al Razi Complex (6th Floor), Suite #D-604, 167 Shahid Syed Najrul Islam Sharani, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Galaxy Holidays Ltd.",
    "category": "Tour Operators",
    "email": "holidays@galaxyholidays.com.bd",
    "phone_mobile": "+88 01711425221",
    "web": "www.galaxyholidays.com.bd",
    "address": "Tazcassilina (2nd Floor), 25 Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Gulshan Tours Ltd.",
    "category": "Tour Operators",
    "email": "info@gulshantours.com",
    "phone_mobile": "+88 01976603338",
    "web": "www.gulshantours.com",
    "address": "Room #601, 5th Floor, Plot #22, Rob Super Market, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Gungchil Tourism",
    "category": "Tour Operators",
    "email": "gungchil.tourism@gmail.com",
    "phone_mobile": "+88 01711146844",
    "web": null,
    "address": "Zakaria Bhaban (3rd Floor), 33/2, Shahid Nazrul Islam Sharak, Hathkola, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Heaven Touch Tourism",
    "category": "Tour Operators",
    "email": "heaventouch.tourism@yahoo.com",
    "phone_mobile": "01711789837, 01611789837",
    "web": null,
    "address": "Waqf Bhaban (Ground Floor), 4, New Eskaton Road, Dhaka-1000"
  },
  {
    "company_name": "ITS Holidays Ltd.",
    "category": "Tour Operators",
    "email": "itsholidaysbd@gmail.com",
    "phone_mobile": "01684720008, 01716151880",
    "web": "www.itsholidaysltd.com",
    "address": "Punnashi Villa, Flat-4/A, Level-04, House #150, Block #E, Road #10, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Jaba Tour Ltd.",
    "category": "Tour Operators",
    "email": "info@jabatour.com",
    "phone_mobile": "01711595113, 01755593423",
    "web": "www.jabatour.com",
    "address": "Flat-3B (3rd Floor), House #30, Block #A, Road #18, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Journey Plus",
    "category": "Tour Operators",
    "email": "journeyplus@yahoo.com",
    "phone_mobile": "+88 01819227901",
    "web": null,
    "address": "House #27/A-B, Flat-3C, Block #A, Road #1, Niketon, Gulshan-1, Dhaka"
  },
  {
    "company_name": "KEARI Tours & Services Ltd.",
    "category": "Tour Operators",
    "email": "tourismkeari@gmail.com",
    "phone_mobile": "01817148735, 01814658270, 01817048597, 01841091749",
    "web": "www.kearitourism.com",
    "address": "KEARI Plaza (6th Floor), 83 Satmasjid Road, 8/A, Dhanmondi, Dhaka-1209"
  },
  {
    "company_name": "Lexus Holidays",
    "category": "Tour Operators",
    "email": "info@lexusholidays.com",
    "phone_mobile": "+88-02-4103 2818-20, 01678000266, 01707888200",
    "web": "www.lexusholidays.com",
    "address": "Rupayan Trade Centre (3rd Floor), 114 Kazi Nazrul Islam Avenue, Banglamotor, Dhaka-1000"
  },
  {
    "company_name": "Nirjhor Tours & Travels",
    "category": "Tour Operators",
    "email": "ceo@nirjhorbd.com",
    "phone_mobile": "+88 01711532523",
    "web": "www.nirjhorbd.com",
    "address": "Oriental Trade Centre, 69/1 Purana Paltan Lane (7th Floor), VIP Road, Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Prabartana Ltd.",
    "category": "Tour Operators",
    "email": "sayyidaakhther@gmail.com",
    "phone_mobile": "01817518764, 01954476064",
    "web": null,
    "address": "6/8, Sir Syed Road, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Refresh Tours",
    "category": "Tour Operators",
    "email": "refreshtours2023@gmail.com",
    "phone_mobile": "+88 01786697174",
    "web": null,
    "address": "67, Purana Paltan Line (2nd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Makor Holidays",
    "category": "Tour Operators",
    "email": "makerholidays@gmail.com",
    "phone_mobile": "+88 01711166411",
    "web": null,
    "address": "Alif Tower, House #23, Flat-B4, Road #18, Block-A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Rockon Tourism",
    "category": "Tour Operators",
    "email": "rokontourismbd@gmail.com",
    "phone_mobile": "01711515220, 01552444612",
    "web": null,
    "address": "House #72, Road #3, Janata Housing Society, Ring Road, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Shabaz Tourism Ltd.",
    "category": "Tour Operators",
    "email": "khabiruddinahmed51@gmail.com",
    "phone_mobile": "01755592500, 01711693788",
    "web": null,
    "address": "House #53, Road #01, Block #I, Flat-D1, Banani, Dhaka-1213"
  },
  {
    "company_name": "Silver Wave Tours Ltd.",
    "category": "Tour Operators",
    "email": "info@silverwavetours.com",
    "phone_mobile": "+88-02-22227470, 222275992, 222274145, +88 01713452137-9",
    "web": "www.silverwavetours.com",
    "address": "House #05 (3rd Floor), Road #17, Block #E, Banani, Dhaka-121"
  },
  {
    "company_name": "Sky Holidays",
    "category": "Tour Operators",
    "email": "rezaskyholidays@gmail.com",
    "phone_mobile": "01926964560, 01926694561",
    "web": null,
    "address": "Park Plaza, Flat-N/6, House #31, Road #17, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Speed Holidays",
    "category": "Tour Operators",
    "email": "tzbangladesh@gmail.com",
    "phone_mobile": "01776462092, 01714094175",
    "web": "www.speedholidays.com.bd",
    "address": "The Emporium, Commercial Block, Level-2, Shyamoli, 14/1 Mirpur Road, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Straight Way Tours & Travels",
    "category": "Tour Operators",
    "email": "mdrafeuzzaman@gmail.com",
    "phone_mobile": "01711166561, 01611166561",
    "web": null,
    "address": "Apartment-9B, Sagufa De Nawer 01, House #Ta-136, Link Road Badda, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "The Bengal Tours Ltd.",
    "category": "Tour Operators",
    "email": "info@bengaltours.com",
    "phone_mobile": "+88-02-48812776, 01775105351, 01712609828",
    "web": "www.bengaltours.com",
    "address": "Flat #4/B, House #114, Road #15, Block #C, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "The Journey Wallet",
    "category": "Tour Operators",
    "email": "journeywallet@gmail.com",
    "phone_mobile": "+88 01911350828",
    "web": null,
    "address": "Falcon Garden (2nd Floor), Ga-36 Mohakhali School Road, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Tiger Tours Ltd.",
    "category": "Tour Operators",
    "email": "ceo@tigertoursbd.com",
    "phone_mobile": "01611535500, 01720042007",
    "web": "www.tigertoursbd.com",
    "address": "House #6, Road #7, Apt-B1 (1st Floor), Niketan, Block #C, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Treasure-Tour & Tourism",
    "category": "Tour Operators",
    "email": "info@ttn.com.bd",
    "phone_mobile": "+88 09606500552, +88 01713066070",
    "web": "www.ttn.com.bd",
    "address": "119/1 Fakirapool, Motijheel, Dhaka-100, Bangladesh"
  },
  {
    "company_name": "Tour De World Limited",
    "category": "Tour Operators",
    "email": "info@tdwltd.com",
    "phone_mobile": "01810100288, 01810100299",
    "web": "www.tdwltd.com",
    "address": "Green City Square (NRB Bank Building), Level-4, Plot #50, Sattamajid Road, Dhanmondi R/A, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Tour Group BD",
    "category": "Tour Operators",
    "email": "tourgroupbd@gmail.com",
    "phone_mobile": "+88 01840238946",
    "web": "www.tourgroupbd.com",
    "address": "20/5, West Panthapath (3rd Floor), Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Tour Planners Ltd.",
    "category": "Tour Operators",
    "email": "tourplanners.com.bd",
    "phone_mobile": "+88 01713034877",
    "web": null,
    "address": "32, Alaoel Avenue, Sector #6, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Tourist Channel Bangladesh",
    "category": "Tour Operators",
    "email": "touristchannelbd@gmail.com",
    "phone_mobile": "01713900008, 01919090008",
    "web": null,
    "address": "Hasan Plaza (5th Floor), 53, Kawran Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Bangladesh Eco Tours",
    "category": "Tour Operators",
    "email": "ecobangla@yahoo.com",
    "phone_mobile": "+88 01703299023",
    "web": null,
    "address": "Suite #6C, Level #5, 263 Jubilee Road, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "World View",
    "category": "Tour Operators",
    "email": "vview13@yahoo.com",
    "phone_mobile": "+88 01819342111",
    "web": null,
    "address": "600, Sk. Mujib Road, Wali Mansion (1st Floor), Chowmuhani, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Rupantar Eco-Tourism Ltd.",
    "category": "Tour Operators",
    "email": "info@rupantareco-tourism.com",
    "phone_mobile": "01711841276, 01711841241",
    "web": null,
    "address": "7, Hazi Mohsin Road (1st Floor), Khulna-9100, Bangladesh"
  },
  {
    "company_name": "Sundarban Wonders Tourism",
    "category": "Tour Operators",
    "email": null,
    "phone_mobile": "+88 01714848116",
    "web": null,
    "address": "4 No. Rocket Ghat, BIWTA Market Road, Khulna-9100, Bangladesh"
  },
  {
    "company_name": "Sonali Travels & Tours",
    "category": "Tour Operators",
    "email": null,
    "phone_mobile": "+88 01747150619",
    "web": null,
    "address": "207-208 Hazi Abdus Sattar Shopping Complex (2nd Flr), Beaniebarz, Sylhet"
  },
  {
    "company_name": "Alif Embroidery Village Limited",
    "category": "Towel Manufacturers",
    "email": "rana@alifammim-bd.com",
    "phone_mobile": "+88 01711592331",
    "web": null,
    "address": "Plot #29, 31, Kabi Faroque Sarani, Nikurjya-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Anaa Textile Limited",
    "category": "Towel Manufacturers",
    "email": "juhanatextild@gmail.com",
    "phone_mobile": "+88 01834153153",
    "web": null,
    "address": "65/2/1 Paramoont Heights (4th Floor), Box Culvart Road, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Anzir Terry Towels Ltd.",
    "category": "Towel Manufacturers",
    "email": "anzirterrytowels@gmail.com",
    "phone_mobile": "01675837243, 01817140068",
    "web": null,
    "address": "Gazirchat, Alia Madrasha, Asulia, Baipail, Savar, Bangladesh"
  },
  {
    "company_name": "Eketex Pvt. Limited",
    "category": "Towel Manufacturers",
    "email": "sales@bangladeshtowels.com",
    "phone_mobile": "+88 01713043186",
    "web": "www.bangladeshtowels.com",
    "address": "Razzab Villa (4th Floor, East), House #173/A, Road #4, Mohammadi Housing Ltd., Mohammadpur, Dhaka"
  },
  {
    "company_name": "Instinct Textile Limited",
    "category": "Towel Manufacturers",
    "email": "instictbd@gmail.com",
    "phone_mobile": "+88 01740999994",
    "web": "www.instinct.com.bd",
    "address": "Rupkotha (Flat# A2), House #198, 200, Road #2 (Old #10), Mirpur-12, DOHS, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Jaantex Industries Limited",
    "category": "Towel Manufacturers",
    "email": "info@jaantex.com",
    "phone_mobile": "+88-02-9550856",
    "web": "www.jaantex.com",
    "address": "Sena Kalyan Bhaban, 195, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "J. R. Towels Limited",
    "category": "Towel Manufacturers",
    "email": "mushfiq@texdrive.com",
    "phone_mobile": "+88 01711161027",
    "web": null,
    "address": "Dautia, Kalampur, Dhamrai, Dhaka, Bangladesh"
  },
  {
    "company_name": "Noman Terry Towel Mills Limited",
    "category": "Towel Manufacturers",
    "email": "info@nttm1.com",
    "phone_mobile": "+88 01755639565",
    "web": "www.nttm1.com",
    "address": "House #19, Road #44, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Shabab Fabrics Limited",
    "category": "Towel Manufacturers",
    "email": "mailbox@shababfabrics.com",
    "phone_mobile": "+88 01714111544",
    "web": "www.shababfabrics.com",
    "address": "House #340, Lane #05, DOHS, Baridhara, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Shamsuddin Towels Ltd.",
    "category": "Towel Manufacturers",
    "email": "info@shamsuddintowels.com",
    "phone_mobile": "+88-02-22274318, 222275966, 222276275, 22275975, +88 01711686990",
    "web": "www.shamsuddintowels.com",
    "address": "ABC House, 3rd Floor, 8, Kemal Ataturk Avenue, Dhaka-1213, Bangladesh (Head Office); BSCIC, I/E, Feni-3900 (Factory)"
  },
  {
    "company_name": "Stylus Towels Limited",
    "category": "Towel Manufacturers",
    "email": "director@stylustowels.com",
    "phone_mobile": "01711634606, 01971634606",
    "web": null,
    "address": "Plot #61, Vill: Katgnara, Zirabo, Ashulia, Dhaka, Bangladesh"
  },
  {
    "company_name": "Tex Drive Limited",
    "category": "Towel Manufacturers",
    "email": "info@texdrive.com",
    "phone_mobile": "+88 01711161027",
    "web": null,
    "address": "Dautia, Kalampur, Dhamrai, Dhaka-1351, Bangladesh"
  },
  {
    "company_name": "Tara Exim Corporation",
    "category": "Towel Manufacturers",
    "email": "taraeximcorporation@gmail.com",
    "phone_mobile": "01711298777, 01611298777, 01716169070",
    "web": null,
    "address": "Plot #13 & 14, Mongla, Export Processing Zone, Bagerhat"
  },
  {
    "company_name": "Chowdhury Links Industries",
    "category": "Towel Manufacturers",
    "email": "muchy72@yahoo.com",
    "phone_mobile": "+88 01824106468",
    "web": null,
    "address": "BSCIC Industrial Area, Nandanpur, Brahmanbaria"
  },
  {
    "company_name": "Al-Hamedi Textiles Limited",
    "category": "Towel Manufacturers",
    "email": "abdullah@aht-bd.com",
    "phone_mobile": "+88-02-333341319, 333341009, +88 01730025062",
    "web": null,
    "address": "Plot #49-52, Sector #01, EPZ, Chattogram, Bangladesh"
  },
  {
    "company_name": "Bangladesh Towel Industries (Pvt.) Ltd.",
    "category": "Towel Manufacturers",
    "email": "commercialbdtowel@gmail.com",
    "phone_mobile": "+88 01636140429",
    "web": "www.bdtowel.com",
    "address": "Plot #63 & 64, Sector #01, Export Processing Zone, Chattogram"
  },
  {
    "company_name": "Multi Textiles",
    "category": "Towel Manufacturers",
    "email": "multictg@gmail.com",
    "phone_mobile": "+88-02-333320140, 333310166, +88 01711883411",
    "web": null,
    "address": "985, East Nasirabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "Nasco Textiles Limited",
    "category": "Towel Manufacturers",
    "email": "rmintl@rmibd.com",
    "phone_mobile": "+88-02-333311292, 333325741, +88 01711760291",
    "web": null,
    "address": "Ward No. 07, 5 No. Barobkunda, Sitakunda, Chattogram, Bangladesh"
  },
  {
    "company_name": "N. Textile",
    "category": "Towel Manufacturers",
    "email": "sayeednnt@yahoo.com",
    "phone_mobile": "+88 01730429139",
    "web": null,
    "address": "4243, Panwala Para, Pathantuly, Agrabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "Premier 1888 Limited",
    "category": "Towel Manufacturers",
    "email": "murad@premier1888.com",
    "phone_mobile": "+88-02-333340270-71, +88 01711536536",
    "web": null,
    "address": "Plot #41-47 & 84 (Sector #7), 9-11 (Sector #1), 12-16 (Sector #1), 17-19 & 36-38 (Sector #2), 6-8 (Sector #5), 4-6 (Sector #5/A), Export Processing Zone, Chattogram, Bangladesh"
  },
  {
    "company_name": "R.T.T Towels (BD) Limited",
    "category": "Towel Manufacturers",
    "email": "tanvir.rtt@gmail.com",
    "phone_mobile": "+88-02-333340705, 333341903, +88 017194268601",
    "web": null,
    "address": "Plot #90, Sector #07, Export Processing Zone, Chattogram, Bangladesh"
  },
  {
    "company_name": "Sonar Cotton Mills (BD) Limited",
    "category": "Towel Manufacturers",
    "email": "commercialsonar@colbd.com",
    "phone_mobile": "+88 01711815244",
    "web": null,
    "address": "Plot #28-30, Road #04, Sector #01, Export Processing Zone, Chattogram, Bangladesh"
  },
  {
    "company_name": "Terry Fabrics Limited",
    "category": "Towel Manufacturers",
    "email": "abdullah@aht-bd.com",
    "phone_mobile": "+88-02-333341319, 333341009, +88 01730025062",
    "web": null,
    "address": "920/960 Badur Tola, Bhaddar Hat, Chattogram, Bangladesh"
  },
  {
    "company_name": "Towel Heaven Industries Limited",
    "category": "Towel Manufacturers",
    "email": "decenttextile94@gmail.com",
    "phone_mobile": "+88 01819389992",
    "web": null,
    "address": "Bahadur Sha Colony, South Halishahar, Bandartila, Chattogram, Bangladesh"
  },
  {
    "company_name": "Towellers (BD) Limited",
    "category": "Towel Manufacturers",
    "email": "towelers@colbd.com",
    "phone_mobile": "+88-02-333340973, +88 01794268601",
    "web": null,
    "address": "Plot #43, Sector #01, Export Processing Zone, Chattogram, Bangladesh"
  },
  {
    "company_name": "Anwar Silk Mills Limited",
    "category": "Towel Manufacturers",
    "email": "info@anwargroup.com",
    "phone_mobile": "+88 01711939792",
    "web": null,
    "address": "186 Tongi Industrial Area, Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "H. N. Cotton Product Industry Ltd.",
    "category": "Towel Manufacturers",
    "email": "hng@bdcom.com",
    "phone_mobile": "+88-02-9113776, +88 01711533579",
    "web": null,
    "address": "Naburabgh, Shafipur, Kaliakot, Gazipur, Bangladesh"
  },
  {
    "company_name": "Hosain Dyeing & Printing Mills Ltd.",
    "category": "Towel Manufacturers",
    "email": "info@hosaindyeing.com",
    "phone_mobile": "+88 01711522188",
    "web": null,
    "address": "Pagar, Tongi, Gazipur, Bangladesh"
  },
  {
    "company_name": "Matam Fibre Mills Limited",
    "category": "Towel Manufacturers",
    "email": "fahad_rum123@yahoo.com",
    "phone_mobile": "+88 01617707350",
    "web": null,
    "address": "Ghilarchar, Sreepur, Gazipur, Bangladesh"
  },
  {
    "company_name": "MS Textile BD",
    "category": "Towel Manufacturers",
    "email": "masterxiteilimited@gmail.com",
    "phone_mobile": "+88 01770054212",
    "web": null,
    "address": "Mulai, Tangra, Sreepur, Gazipur"
  },
  {
    "company_name": "Towel Tex Limited",
    "category": "Towel Manufacturers",
    "email": "sohel@toweltex.net",
    "phone_mobile": "+88 01713003409",
    "web": null,
    "address": "Chandra, Kaliakori, Gazipur"
  },
  {
    "company_name": "Unillionce Fabrics Limited",
    "category": "Towel Manufacturers",
    "email": "shah.alam@unillionce.com",
    "phone_mobile": "+88 01711545959",
    "web": null,
    "address": "South Bhangnahati, Sreepur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Unillionce Textiles Limited",
    "category": "Towel Manufacturers",
    "email": "shah.alam@unillionce.com",
    "phone_mobile": "+88 01711545959",
    "web": null,
    "address": "South Bhangnahati, Sreepur, Gazipur, Bangladesh"
  },
  {
    "company_name": "Efaz Bleaching & Dyeing Limited",
    "category": "Towel Manufacturers",
    "email": "info@marcobd.com",
    "phone_mobile": "+88 01711747166",
    "web": "www.marcobd.com",
    "address": "Plot #B-43-46 & S-10 (Part), BSCIC Industrial Estate, Maria, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Hasina Textile",
    "category": "Towel Manufacturers",
    "email": "hasinatex@gmail.com",
    "phone_mobile": "+88 01711199399",
    "web": null,
    "address": "Plot #B-08-10, BSCIC Industrial Estate, Maria, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Maanuri Textile Mills",
    "category": "Towel Manufacturers",
    "email": "info@marcobd.com",
    "phone_mobile": "+88 01711747166",
    "web": "www.marcobd.com",
    "address": "Plot #B: 47-50 & S-9 (Part), BSCIC Industrial Estate, Maria, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Marco Fabrics Limited",
    "category": "Towel Manufacturers",
    "email": "info@marcobd.com",
    "phone_mobile": "+88 01971747616",
    "web": "www.marcobd.com",
    "address": "Plot #B 32-34 & S-14 (Part), BSCIC Industrial Estate, Maria, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "Mearaj Tex Limited",
    "category": "Towel Manufacturers",
    "email": "mearaj@mearajtex.com",
    "phone_mobile": "+88 01625547793",
    "web": null,
    "address": "Plot #B-11-14 & S-13 (Part), BSCIC Industrial Estate, Maria, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "VIRGO Fashion Limited",
    "category": "Towel Manufacturers",
    "email": "kamal@virgo.com.bd",
    "phone_mobile": "+88 01847131432",
    "web": null,
    "address": "BSCIC Industrial Area, Maria, Sadar, Kishoreganj, Bangladesh"
  },
  {
    "company_name": "DEWAN FABRICS",
    "category": "Towel Manufacturers",
    "email": "albatross919@gmail.com",
    "phone_mobile": "+88 01713532248",
    "web": null,
    "address": "1,2,3, BSCIC Shilpo Nagari, Golara, Manikganj, Bangladesh"
  },
  {
    "company_name": "RASA Fashion",
    "category": "Towel Manufacturers",
    "email": "info@rasafashion.com",
    "phone_mobile": "+88 01726818691",
    "web": "www.rasafashion.com",
    "address": "House #171, Middle Courtgaon (Munshibari), Munshiganj-1500, Bangladesh"
  },
  {
    "company_name": "Debonair Padding & Quilting Solution Ltd.",
    "category": "Towel Manufacturers",
    "email": "md@debonairgroupbd.com",
    "phone_mobile": "+88 01939906501",
    "web": "www.debonairgroupbd.com",
    "address": "Chatanpara, Paragao, Valuka, Mymansingh, Bangladesh"
  },
  {
    "company_name": "ALTEK Industries Ltd.",
    "category": "Towel Manufacturers",
    "email": "info.altek@yahoo.com",
    "phone_mobile": "+88-02-41081465",
    "web": "www.altekbd.com",
    "address": "Aribabo, Barpa, Rupganj, Narayanganj"
  },
  {
    "company_name": "Rynco Engineering",
    "category": "Engineering/Safety",
    "email": null,
    "phone_mobile": "+88 01771381229",
    "web": "www.ryncoengineering.com.bd",
    "address": "House-20, Level-3, Road-12, Nikunja-2, Khilket, Dhaka-1229"
  },
  {
    "company_name": "Lituan Fabrics Limited",
    "category": "Textile",
    "email": "lituan@litunfabrics.com",
    "phone_mobile": "+88 01713044401",
    "web": null,
    "address": "Barpa, Rupganj, Narayanganj"
  },
  {
    "company_name": "Miray Towel Industries Limited",
    "category": "Towel Manufacturers",
    "email": "m.aftabuddin.ahmed@gmail.com",
    "phone_mobile": "+88 01737777760",
    "web": null,
    "address": "Mahona, Duptara, Rupganj, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Nice Composite Textile Limited",
    "category": "Textile",
    "email": "niceltds@gmail.com",
    "phone_mobile": "+88 01511250000",
    "web": null,
    "address": "Gukul Dasherbag, Madanpur, Bandar, Narayanganj, Bangladesh"
  },
  {
    "company_name": "Rownak Textile Mills Limited",
    "category": "Textile",
    "email": "pinubd@yahoo.com",
    "phone_mobile": "+88 01713341390",
    "web": null,
    "address": "Barpa, Rupsi, Rupganj, Narayanganj"
  },
  {
    "company_name": "SIM Fabrics Limited",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88 01711528707",
    "web": null,
    "address": "Thakurbari Tach, Masumabad, Bhulta, Rupganj, Narayanganj"
  },
  {
    "company_name": "Asia Tex Industries",
    "category": "Textile",
    "email": "asiatexinds@rahimafrooz.com",
    "phone_mobile": "+88 01711525427",
    "web": null,
    "address": "BSCIC Industrial Estate, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Entrust Textile (BD) Limited",
    "category": "Textile",
    "email": "chairman@entrusttextile.com",
    "phone_mobile": "+88-01788972737",
    "web": null,
    "address": "Plot #1192, BSCIC Shilpa Nagari, Shibpur, Narsingdi"
  },
  {
    "company_name": "GFA Fabrics & Apparels",
    "category": "Textile",
    "email": "alo.arian01@gmail.com",
    "phone_mobile": "+88-01715823501",
    "web": null,
    "address": "Asamandirchon, Panchdona, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Home Textile Mystic",
    "category": "Textile",
    "email": "shaimun13@gmail.com",
    "phone_mobile": "+88 01711141111",
    "web": null,
    "address": "16/2, Vhagdi, Narsingdi-1600, Bangladesh"
  },
  {
    "company_name": "K. H Tex Industries Limited",
    "category": "Textile",
    "email": "khtexterry@gmail.com",
    "phone_mobile": "+88-01713402146",
    "web": null,
    "address": "BSCIC I/E, Kararchar, Shibpur, Narsingdi"
  },
  {
    "company_name": "Maa Textile Mills",
    "category": "Textile",
    "email": "maatextilemillsnarsingdi@gmail.com",
    "phone_mobile": "+88 01711488799",
    "web": null,
    "address": "Plot #B-28, 29 & 30, BSCIC I/A, Kararchar, Shibpur, Narsingdi"
  },
  {
    "company_name": "M. H. Textile Mills",
    "category": "Textile",
    "email": "marttex08@yahoo.com",
    "phone_mobile": "+88 01711695931",
    "web": null,
    "address": "Syednagar, Shibpur, Narsingdi"
  },
  {
    "company_name": "Momin Textile",
    "category": "Textile",
    "email": "momin_miah@ymail.com",
    "phone_mobile": "+88 01715403050",
    "web": null,
    "address": "Baghata, Shahepratap, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Montex Expo Limited",
    "category": "Textile",
    "email": "nurul.chowdhury@montexexpo.com",
    "phone_mobile": "+88-02-58157345, 58154453, +88 01711998382",
    "web": null,
    "address": "Shilmandi, Panchdona, Narsingdi Sadar, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Purnata Textile",
    "category": "Textile",
    "email": "marttex08@yahoo.com",
    "phone_mobile": "+88 01711353785",
    "web": null,
    "address": "271 East Vhagadi, Narsingdi"
  },
  {
    "company_name": "Raptex Towel Industries",
    "category": "Textile",
    "email": null,
    "phone_mobile": "+88 0171188244",
    "web": null,
    "address": "BSCIC Industrial Estate, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "Everest Toys Industries Limited",
    "category": "Toys",
    "email": "everesttoy@gmail.com",
    "phone_mobile": "+88 01707044203",
    "web": "www.everesttoy.com",
    "address": "197/1, Water Works Road (2nd Floor), Chawk Bazar, Dhaka-1211"
  },
  {
    "company_name": "Nasir Plastic Toy",
    "category": "Toys",
    "email": null,
    "phone_mobile": "+88 01711269880",
    "web": null,
    "address": "9/10, Sowarighat Road, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Nazrul Toy Industry",
    "category": "Toys",
    "email": "info@nazrutoy.com",
    "phone_mobile": "+88 01950980708",
    "web": "www.nazrutoy.com",
    "address": "2, Debidas Ghat Lane, nearby Meghna Bank & Chand Boarding, 3rd Floor, Chawk Bazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Wonder Plastic Industries",
    "category": "Toys",
    "email": "wonderplas77@gmail.com",
    "phone_mobile": "01715058840, 01865014123",
    "web": null,
    "address": "460, West Mominbag, Kamrangirchar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Zihan Plastic Industries",
    "category": "Toys",
    "email": "info@zihantoys.com",
    "phone_mobile": "+8809666752828, +8801958152824",
    "web": "www.zihantoys.com",
    "address": "Atashur, Brammankitta, Keraniganj Model, Dhaka-1310, Bangladesh"
  },
  {
    "company_name": "AB Power Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@abpowerbd.com",
    "phone_mobile": "01715-956823, 01672-073817",
    "web": "www.abpowerbd.com",
    "address": "House #4/6, Road #9, Block #J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Adex Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@adexb.com",
    "phone_mobile": "+88-02-41010439, 41010440, 01713436286, 01713164503",
    "web": "www.adexb.com",
    "address": "374 (4th Floor), Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Akota Power Ltd.",
    "category": "Transformers/Power",
    "email": "info@akotabd.com",
    "phone_mobile": "+88-02-41009036-39, 01810-098908, 01810-098910",
    "web": "www.akotabd.com",
    "address": "House #04, Road #32, Sector #07, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "ATS Power Ltd.",
    "category": "Transformers/Power",
    "email": "atspowerltd@gmail.com",
    "phone_mobile": "+88 01724-826148",
    "web": "www.atspower.com.bd",
    "address": "House #58 (Level-3, C1), Road #12, Sector #10, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Automation Engineering & Controls Ltd.",
    "category": "Transformers/Power",
    "email": "automation@agni.com",
    "phone_mobile": "+88-022-3387519, 33892233, 3383070, +88 01844042022",
    "web": "www.automation-bd.com",
    "address": "Bhuiya Center (4th Floor), 68 Diluksha C/A, Dhaka-1000"
  },
  {
    "company_name": "Automation Power Generation Ltd.",
    "category": "Transformers/Power",
    "email": "automation.powergl@gmail.com, automationpower.bd@gmail.com",
    "phone_mobile": "01713034041, 01973221450-55, 01973221458",
    "web": "www.automationpower-bd.com",
    "address": "Mahbub Mansion (3rd Floor), 71 Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bachar Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@bacharbd.com",
    "phone_mobile": "+88 0967838844, +88 01318221900-15",
    "web": "www.bacharbd.com",
    "address": "House #17, Road #04, Sector #12, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bangla Power",
    "category": "Transformers/Power",
    "email": "info@banglapower.org, banglapower02@gmail.com",
    "phone_mobile": "01552-344535",
    "web": "www.banglapower.org",
    "address": "1st Floor, Pritom Bhaban, 215, Shaheed Syed Nazrul Islam Sarani, Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Basic Power Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@basicpowerbd.com",
    "phone_mobile": "+88-02-48033305, 01731279598",
    "web": "www.basicpowerbd.com",
    "address": "Spring Rahmat-E Tuba Complex, House #132 (3rd Floor), Block #A, Road #2, Section-12, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "BEST POWER ENGINEERING",
    "category": "Transformers/Power",
    "email": "bestpowerbpe@gmail.com",
    "phone_mobile": "+88-02-58957147, 01748196334, 01914198222",
    "web": null,
    "address": "House #44, Road #01, Sector #06, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Compact Power Engineering",
    "category": "Transformers/Power",
    "email": "mirza.compactbd@gmail.com",
    "phone_mobile": "01718517560, 01911531611",
    "web": null,
    "address": "Dogair Notun Para, Sarulia, Demra, Dhaka-1361, Bangladesh"
  },
  {
    "company_name": "ELECTROWIRE ENGINEERING CORPORATION",
    "category": "Transformers/Power",
    "email": "electrowire2019@gmail.com",
    "phone_mobile": "01964894728, 01766616015",
    "web": "www.electrowirebd.com",
    "address": "12/B, Purana Paltan Line, Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Energy Engineering Limited",
    "category": "Transformers/Power",
    "email": "info@energypac.com.bd",
    "phone_mobile": "+88 01777781118",
    "web": "www.energypac.com.bd",
    "address": "25, Energy Center, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Innova Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@innova-bd.net",
    "phone_mobile": "+88 0171180241",
    "web": "www.innova-bd.net",
    "address": "House #1/A, Road #1/B, Nikunjia-2, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Corona Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "corona@bangla.net",
    "phone_mobile": "+88-02-41020587, 41020588, 41020589, 41020590-91, 01711695862, 01711686819",
    "web": "www.corona.bd.com",
    "address": "Concord Royal Court (3rd Floor), House #40, Road #16(New), 27 (Old), Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Mapower Ltd.",
    "category": "Transformers/Power",
    "email": "sbe@agm.com",
    "phone_mobile": "+88 019638-33366, +88 01755694358",
    "web": "www.mapower.net",
    "address": "46, Para Dogair, Konapara, Demra, Dhaka-1362, Bangladesh"
  },
  {
    "company_name": "Megawatt Power Limited",
    "category": "Transformers/Power",
    "email": "info@mpowerbd.com",
    "phone_mobile": "+88-02-22338705, +88 0190783090",
    "web": "www.mpowerbd.com",
    "address": "MNSN Tower, 60 Diluksha C/A, Level-5, Suite #605-606, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Nissi Sakti Ltd.",
    "category": "Transformers/Power",
    "email": "services@nissisakti.com",
    "phone_mobile": "+88 01313648655, +88 01301213254",
    "web": "www.nissisakti.com",
    "address": "4D-2, 4th Floor, Rupayan Millenium Square, North Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "NS Power Solution Limited",
    "category": "Transformers/Power",
    "email": "nspowerltd16@gmail.com, info@nspowerltd.com",
    "phone_mobile": "+88 01777-009129",
    "web": "www.nspowerltd.com",
    "address": "House #09 (1st Floor), Road #12, Lane #06, Block #B, Section #11, Mirpur, Pallabi, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Petelco Ltd.",
    "category": "Transformers/Power",
    "email": "info@petelcobd.com",
    "phone_mobile": "+88 01977433371-74",
    "web": "www.petelcobd.com",
    "address": "83, Majed Sarder Notun Sarak, 1st Floor (Sat Rowja), Dhaka-1000"
  },
  {
    "company_name": "Polaris Power Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@polarispowerbd.com",
    "phone_mobile": "+88 01708465465",
    "web": "www.polarispowerbd.com",
    "address": "House #311 (1st Floor), Road #04, Mirpur DOHS, Dhaka-1216"
  },
  {
    "company_name": "Powerade Technology Ltd.",
    "category": "Transformers/Power",
    "email": "info@poveradebd.com.bd",
    "phone_mobile": "+88 01713443602",
    "web": "www.poverade.com.bd",
    "address": "House #472, Road #31, New DOHS, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Powerbreeze Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "jamil@powerbreezebd.com",
    "phone_mobile": "+8809617171444, +88 01914523427",
    "web": "www.powerbreezebd.com",
    "address": "House #9/5, Lane #1, Block #B, Section #6, Mirpur, Dhaka-1216"
  },
  {
    "company_name": "Power King Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@pkebd.com",
    "phone_mobile": "+88 01615707707",
    "web": "www.pkebd.com",
    "address": "Apon Heights, 8th Floor, Suite #A8, House #27/1/B, Road #03, Shyamoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Powermann Bangladesh Ltd.",
    "category": "Transformers/Power",
    "email": "info@powermannbd.net",
    "phone_mobile": "01711541485, 01711542331, 01974655561, 01974655572",
    "web": "www.powermannbd.net",
    "address": "Abdur Rahim Apartment, House #35-B, Road #63, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Power-Sonic Transformers & Switchgears Co.",
    "category": "Transformers/Power",
    "email": "info@powersonicgroup.com",
    "phone_mobile": "+88-02-47118482, 47119317, 471128838, 01711527298, 01611527298",
    "web": "www.powersonicgroup.com",
    "address": "49, Motijheel C/A, 8th Floor (Suite #904), Dhaka-1000"
  },
  {
    "company_name": "Protec Electronics Ltd.",
    "category": "Transformers/Power",
    "email": "info@powertrac-bd.com",
    "phone_mobile": "+88 01974655026, +88 01404405109",
    "web": "www.powertrac-bd.com",
    "address": "House #195 (3rd Floor), Road #01, Mohakhali DOHS, Dhaka-1206"
  },
  {
    "company_name": "Reverie Power & Automation Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "info@reverie-bd.com",
    "phone_mobile": "+8809643200300, +88 01841436100",
    "web": "www.reverie-bd.com",
    "address": "Evergreen Plaza, 5th & 7th Floor, 260/B Tejgaon I/A, Dhaka-1208"
  },
  {
    "company_name": "Salam & Brothers Ltd.",
    "category": "Transformers/Power",
    "email": "info@salamandbrothers.com",
    "phone_mobile": "01713084447, 01970868152",
    "web": "www.salamandbrothersltd.com",
    "address": "5, BCC Road (3rd Floor), Nawabpur, Dhaka-1203"
  },
  {
    "company_name": "Satco Electrical Industries Ltd.",
    "category": "Transformers/Power",
    "email": "satcobd@gmail.com",
    "phone_mobile": "02-223388340, 02-223385492, 02-223385726, 02-223385728, 02-223358099, 02-223358101, +88 01753-887635",
    "web": "www.satcobd.net",
    "address": "121, Motijheel C/A, Jibon Bima Bhaban (2nd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shakti Engineering Limited",
    "category": "Transformers/Power",
    "email": "info@shaktibd.com",
    "phone_mobile": "+88 01811412311, +88 01811412312",
    "web": "www.shaktibd.com",
    "address": "Plot #1/B, Road #90, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Syvan Technologies Limited",
    "category": "Transformers/Power",
    "email": "coo.stl@prangroup.com",
    "phone_mobile": "0800-7777777, +88 01704136353",
    "web": "www.sylvantechtld.com",
    "address": "PRAN Center, 105, Middle Badda, Dhaka-1212"
  },
  {
    "company_name": "Techno Power Electric Bangladesh Ltd.",
    "category": "Transformers/Power",
    "email": "technopowerbdt@gmail.com",
    "phone_mobile": "01714078343, 01714078342",
    "web": "www.technopowerbd.net",
    "address": "47, Lionhati, Trimohani, Khilgaon, Dhaka-1219"
  },
  {
    "company_name": "Techno Venture Ltd.",
    "category": "Transformers/Power",
    "email": "info@tvl-bd.com",
    "phone_mobile": "+88 01713244137",
    "web": "www.tvl-bd.com",
    "address": "Natun Nagar, Sreepur, Ashulia, Savar, Dhaka-1349, Bangladesh"
  },
  {
    "company_name": "Siemex Power Generation Ltd.",
    "category": "Transformers/Power",
    "email": "siemex@siemexgroup.com.bd",
    "phone_mobile": "+88 01705424993-4",
    "web": "www.siemexgroup.com.bd",
    "address": "Siemex Centre, Plot #10/1, Road #27, Block-M, Alubdi, Pallabi, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Smart Power & Technologies Ltd.",
    "category": "Transformers/Power",
    "email": "info@smartpowerltd.com, smartpowerltd@yahoo.com",
    "phone_mobile": "+88 01743929850, +88 01911333525, +88 01711248546",
    "web": "www.smartpowerltd.com",
    "address": "Commercial Apartment #D-1 (4th Floor), Plot #33, Road #13, Main Road, Rupnagar R/A, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Tokai Power Products Ltd.",
    "category": "Transformers/Power",
    "email": "tokai.power@yahoo.com",
    "phone_mobile": "+88 01313420925",
    "web": "www.tokaipower.com",
    "address": "8th Floor, Sabamun Tower, 152/1/H, Green Road, Panthapath, Dhaka"
  },
  {
    "company_name": "TOS Electric Company",
    "category": "Transformers/Power",
    "email": "toselectric_2014@yahoo.com",
    "phone_mobile": "01889175533, 01715885505, +88 0159994446",
    "web": "www.tosgroupbd.com",
    "address": "95/B, Rajarbagh, Kalibari, Sabujbagh, Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "Transpower Engineering Ltd.",
    "category": "Transformers/Power",
    "email": "transpowerbd@gmail.com",
    "phone_mobile": "01766679701, 01731684897",
    "web": "www.transpowerbd.com",
    "address": "Firoza Tower (3rd Floor), 42/A/2, Hathkola Road, Dhaka-1203"
  },
  {
    "company_name": "TS Transformers Limited",
    "category": "Transformers/Power",
    "email": "manir.hossain@tstransformers.com",
    "phone_mobile": "+91-13-12345678, +91-13-12345679",
    "web": "www.tstransformers.com",
    "address": "Suvastu Suraiya Trade Center, 57, Kemal Ataturk Avenue, 1213, Bangladesh"
  },
  {
    "company_name": "Vicar Electricals Ltd.",
    "category": "Transformers/Power",
    "email": "info@vicar.com.bd",
    "phone_mobile": "+88 01713658496, +88 01736584596",
    "web": "www.vicar.com.bd",
    "address": "Suvastu Suraiya Trade Center (Level-8), House #57, Road #21, Kemal Ataturk Avenue, Block #B, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Digital Power City Ltd.",
    "category": "Transformers/Power",
    "email": "info@digitalpowercityltd.com",
    "phone_mobile": "01741274404, 01704172445",
    "web": "www.digitalpowercityltd.com",
    "address": "VIP Tower (2nd Floor), 125, Noor Ahmed Road, Kazi Dewri, Chattogram"
  },
  {
    "company_name": "Dhaka Translation",
    "category": "Translation Services",
    "email": "dhaka.translation@live.com",
    "phone_mobile": "+88 01836969575",
    "web": null,
    "address": "1/B, DIT Avenue, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "New Al-Madina Translation Center",
    "category": "Translation Services",
    "email": null,
    "phone_mobile": "+88-02-223389580, +88 01320499540",
    "web": null,
    "address": "1/B D.I.T Avenue (Dainik Bangla Mor), Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Oriental Translation",
    "category": "Translation Services",
    "email": null,
    "phone_mobile": "+88 01671355686",
    "web": null,
    "address": "224-225, Gausul Azam Super Market, Nilkhet, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Purchasal Translation Center",
    "category": "Translation Services",
    "email": null,
    "phone_mobile": "+88 01974879022",
    "web": null,
    "address": "29, Toyenbee Circular Road, Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Reliance Translation Center",
    "category": "Translation Services",
    "email": "arafulslm78@gmail.com",
    "phone_mobile": "018-4169667, 01776070130",
    "web": "www.reliancetcdb.com",
    "address": "17/2/B, Topkhana Road, Segunbagicha (East Side of BMA Bhaban Lane), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Sundarban Translation Center",
    "category": "Translation Services",
    "email": "shishir.netbd@gmail.com",
    "phone_mobile": "0171747664, 01920484798",
    "web": null,
    "address": "60, Tejuri Bazar, Rahman Mansion, 1st Floor, Farmgate, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "AZZ Tour",
    "category": "Travel Agencies",
    "email": "info@azztourbd.com",
    "phone_mobile": "0176600023, 01676000017",
    "web": "www.azztourbd.com",
    "address": "Huda Apartment, House #59 (4th Floor), Block #C, Road #4, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "AAJ Travels",
    "category": "Travel Agencies",
    "email": "aajtravelsbd@gmail.com",
    "phone_mobile": "+88 01711907262",
    "web": "www.aaijtravelsbd.com",
    "address": "Ka-1/1 (2nd Floor), Jagannathpur, Bashundhara Road, Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Aero Travel & Tours",
    "category": "Travel Agencies",
    "email": "aerotrv_tours@yahoo.com",
    "phone_mobile": "+88 01712221395",
    "web": null,
    "address": "8/3 (2nd Floor), Topkhana Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Afro Asia Tours & Travels",
    "category": "Travel Agencies",
    "email": "ahmadexpress1966@gmail.com",
    "phone_mobile": "+88 01757697503",
    "web": null,
    "address": "3/7, City Heart Building (12th Floor), 67 Naya Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Air Castle Travels",
    "category": "Travel Agencies",
    "email": "aircastle.travels@gmail.com",
    "phone_mobile": "+88 01713303158",
    "web": null,
    "address": "House #48, Flat-3/B, Road #11, Block #C, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Air Confidence",
    "category": "Travel Agencies",
    "email": "airconfidenceacg@gmail.com",
    "phone_mobile": "+88-02-48810630-31, +88 01907473501-15",
    "web": "www.airconfidencebd.com",
    "address": "26/A Indira Road, Tejuri Bazar, Chalk Farmgate, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Air Confidence International Tours & Travels",
    "category": "Travel Agencies",
    "email": null,
    "phone_mobile": "012338607, 01920484923",
    "web": null,
    "address": "G-Nat Tower (8th Floor, Room #8/D), 116-117, Fakirpore, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Air Express International",
    "category": "Travel Agencies",
    "email": "airexpressbd@gmail.com",
    "phone_mobile": "+88 01713037497",
    "web": null,
    "address": "3/4 A, Sabit Tower (3rd Floor), Room #404, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN",
    "category": "Fire Safety & Security",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025090, 01816033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Madani Avenue (100 Feet Road), Notun Bazaar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Fire Safety & Security",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025090, 01816033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 18, Madani Avenue (100 Feet Road), Notun Bazar, Vatra, Dhaka-1212"
  },
  {
    "company_name": "SANDWICH PANEL TECHNOLOGY",
    "category": "Construction/Building Systems",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "Five-R-Footwear Ltd.",
    "category": "Footwear",
    "email": "five-r@jenny.com.bd",
    "phone_mobile": "+88 01714134197",
    "web": null,
    "address": "Jennys House, House # 6, Road # 68/A, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Footbed Footwear Ltd.",
    "category": "Footwear",
    "email": null,
    "phone_mobile": "+8801616340121",
    "web": "www.fbfootwear.com.bd",
    "address": "5th Floor, House # 06, Road # 109, Block # CEN(H), Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Footmark Footwear Ltd.",
    "category": "Footwear",
    "email": "ahsan@footmarkbd.com",
    "phone_mobile": "+88 01918172216",
    "web": "www.footmarkbd.com",
    "address": "House # 2A, Road # 2B, Sector # 11 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Frame House Footwear Ltd.",
    "category": "Footwear",
    "email": "info@framehousebd.com",
    "phone_mobile": "+88 01713302889",
    "web": "www.fhfootwear.com",
    "address": "Dakhsin Para, Thana Bus Stand Dhambari, Dhaka-1350, Bangladesh"
  },
  {
    "company_name": "Gancio Footwear Ltd.",
    "category": "Footwear",
    "email": "ganciofootwearltd@gmail.com",
    "phone_mobile": "+88 0171642501",
    "web": null,
    "address": "House # 15 (3rd Floor), Road # 18 Block # A, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Gardenia Footwear Ltd.",
    "category": "Footwear",
    "email": "gardeniafootwear.info@gmail.com",
    "phone_mobile": "+01866513899",
    "web": null,
    "address": "Hindu Bhakurta, Hemayetpur, Savar Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Glory Footwear Limited",
    "category": "Footwear",
    "email": "info@gloryfootwear.com",
    "phone_mobile": "01614405555",
    "web": "www.gloryfootwear.com",
    "address": "Haque Tower, Ja-28/8-D, Mohakhali C/A, Dhaka-1212."
  },
  {
    "company_name": "Golden Sky Footwear Ltd.",
    "category": "Footwear",
    "email": "info@goldenskyfootwear.com",
    "phone_mobile": "+8801717500808",
    "web": "www.goldenskyfootwear.com",
    "address": "House # 09, Road # 02, Sector # 03 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "IALT Footwear Ltd.",
    "category": "Footwear",
    "email": "info@ialtbd.com",
    "phone_mobile": "+8801306766498",
    "web": "www.ialtbd.com",
    "address": "House # 103, Flat-5B, Suhrawardy Avenue Road, Baridhara, Dhaka."
  },
  {
    "company_name": "Iqra Footwear Industries Ltd.",
    "category": "Footwear",
    "email": "info@iqrafootwearltd.com",
    "phone_mobile": "01711533640",
    "web": "www.iqrafootwearltd.com",
    "address": "Room # 501, 21/1 Haque Mansion Zigatola, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Italy Footwear Limited",
    "category": "Footwear",
    "email": "info@italyfootwearltd.com",
    "phone_mobile": "+8801856413550",
    "web": "www.italyfootwearltd.com",
    "address": "Plot # 5, Road # 5, Block # B, Ward # 5, Nolvog, Tartaret, Turaga, Dhaka."
  },
  {
    "company_name": "Jihan Footwear (Pvt.) Ltd.",
    "category": "Footwear",
    "email": "info@jihanfootwearbd.com",
    "phone_mobile": "+88017033038500",
    "web": "www.jihangroupbd.com",
    "address": "64/4, Naya Paltan (4th Floor) Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Lalmal Footwear Ltd.",
    "category": "Footwear",
    "email": "lflcom2001@yahoo.com",
    "phone_mobile": "+8801714101210",
    "web": null,
    "address": "Khan Mansion (5th Floor), 107, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "Perfect Footwear Ltd.",
    "category": "Footwear",
    "email": "perfectfootwearltd@gmail.com",
    "phone_mobile": "01755578538",
    "web": "www.perfectfootwear.ltd",
    "address": "Suite # 4-5, Level-14, Mahtab Center 177 Shahid Syed Nazrul Islam Sarani Bijoynagar, Paltan, Dhaka-1000."
  },
  {
    "company_name": "Pioneer Footwear Ltd.",
    "category": "Footwear",
    "email": "info@pioneerfootwearbd.com",
    "phone_mobile": "01711538556",
    "web": "www.pioneerfootwearbd.com",
    "address": "Sukonna Tower, 3rd Floor, 35-Mirpur Road, Newmarket, Dhaka-1205."
  },
  {
    "company_name": "Premier Footwear Ltd.",
    "category": "Footwear",
    "email": "info@premierfootwearbd.com",
    "phone_mobile": "01732236079",
    "web": null,
    "address": "Plot # A-85, BSCIC I/A, Kawnia Barishal-8200, Bangladesh"
  },
  {
    "company_name": "Royal Footwear Ltd.",
    "category": "Footwear",
    "email": "info@royalfootwear.com.bd",
    "phone_mobile": "01312807619",
    "web": "www.royalfootwear.com.bd",
    "address": "178-179, Two Star Tower (5th & 6th Floor), East Tejutri Bazar, Farmgate, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Runner Footwear Limited",
    "category": "Footwear",
    "email": "info@runnerfootwear.com",
    "phone_mobile": "+88 01730407102",
    "web": "www.runnerfootwear.com",
    "address": "Corporate Office: 138/1, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Samycon Footwear Ltd.",
    "category": "Footwear",
    "email": "msdamycon@gmail.com",
    "phone_mobile": "+88 01709644006",
    "web": "www.samycon.com",
    "address": "Head Office: House # 46 (1st Floor), Gausul Azam Avenue, Sector # 13, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Sen En Footwear Technology Ltd.",
    "category": "Footwear",
    "email": "senenfootwear.bd@gmail.com",
    "phone_mobile": "01721607057",
    "web": null,
    "address": "16, Suter Nooarda, Arapara, Savar Dhaka-1340, Bangladesh"
  },
  {
    "company_name": "Shoe Master Footwear Limited",
    "category": "Footwear",
    "email": "shoemasterbd@gmail.com",
    "phone_mobile": "01716590056",
    "web": null,
    "address": "House # 45, Shah Makhdum Avenue, Sector # 12, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Shoeniverse Footwear Ltd.",
    "category": "Footwear",
    "email": "info@shoeniverse.net",
    "phone_mobile": null,
    "web": "www.shoeniverse.net",
    "address": "NPOLY House, GA-99/3, Pragati Shoroni, Middle Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Smart Shoes Limited",
    "category": "Footwear",
    "email": "info@smartshoes.com.bd",
    "phone_mobile": "+88 01815807619",
    "web": "www.smartshoesbd.com",
    "address": "178-179, Two Star Tower (6th & 7th Floor), East Tejutri Bazar, Tejgaon, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "The Shoes Bangladesh Limited",
    "category": "Footwear",
    "email": "info@theshoesbd.com",
    "phone_mobile": "+88 01713017376",
    "web": "www.theshoesbd.com",
    "address": "House # 90, New Airport Road, Kakoli, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Tres International Bangladesh Ltd.",
    "category": "Footwear",
    "email": "info@tresjp.com",
    "phone_mobile": "01711975383",
    "web": "www.tresjp.com",
    "address": "Mia Manshion, Veron, Zirabo, Ashulia Savar, Dhaka-1341, Bangladesh"
  },
  {
    "company_name": "Tropical Shoes Ind. Ltd.",
    "category": "Footwear",
    "email": "shoes@tropicalbd.com",
    "phone_mobile": "+88 01711538338",
    "web": "www.tropicalbd.com",
    "address": "Head Office: A.R. Tower (3rd Floor), 24, Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "TTI Leather & Footwear Ind. Ltd.",
    "category": "Footwear",
    "email": "info@ttifootwear.com",
    "phone_mobile": "01304054699",
    "web": "www.ttileather.com",
    "address": "Head Office: Gawsia Kashem Center, 12th Floor, 10/2, Arambag, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Western Footwear Limited",
    "category": "Footwear",
    "email": "info@westernfw.com",
    "phone_mobile": null,
    "web": "www.westernfw.com",
    "address": "Rahman Center, House # 18, Road # 22, Block # K, Banani, Dhaka-1213."
  },
  {
    "company_name": "Lotus Footwear Ltd.",
    "category": "Footwear",
    "email": "info@lotusfootwearltd.com",
    "phone_mobile": "01855650069",
    "web": "www.lotusfootwearltd.com",
    "address": "Chankhola, Satkania, Chattogram."
  },
  {
    "company_name": "Maf Shoes Limited",
    "category": "Footwear",
    "email": "info@mafshoes.com",
    "phone_mobile": null,
    "web": "www.mafshoes.com",
    "address": "Outer Signal, Chandgaon I/A Chattogram-4221, Bangladesh"
  },
  {
    "company_name": "Patenga Footwear (Pvt.) Ltd.",
    "category": "Footwear",
    "email": "info@pfplbd.com",
    "phone_mobile": "+88 0171311260",
    "web": null,
    "address": "Head Office: Plot # 7 & 8, Sector # 6/A, Chattogram, Export Processing Zone, South Halishahar, Chattogram."
  },
  {
    "company_name": "Zubl Wear Limited",
    "category": "Footwear",
    "email": "jashimalamin226@gmail.com",
    "phone_mobile": "+88 01715134727",
    "web": null,
    "address": "338, Segunbagicha, Ramna, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Zubarl Footwear Ltd.",
    "category": "Footwear",
    "email": "info@zubairfootwearbd.com",
    "phone_mobile": "+88 01740641861",
    "web": null,
    "address": "Head Office: House # 30 (7th Floor), Gareeb-E-Newaz Avenue, Sector # 13, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "A & A Shoes Limited",
    "category": "Footwear",
    "email": "info@aandashoes.com",
    "phone_mobile": "01318881400",
    "web": "www.aandashoes.com",
    "address": "Kotta Bazar, Banshabaria, Sitakunda Chattogram, Bangladesh"
  },
  {
    "company_name": "RJM Footwear Limited",
    "category": "Footwear",
    "email": "info@rjmfl.com",
    "phone_mobile": "+88 01968813450",
    "web": "www.rjmfl.com",
    "address": "CJMCLL, Isphani Jettty Road, Mohora Kalurghat, Chattogram-4208."
  },
  {
    "company_name": "Rong Da International Enterprise Ltd.",
    "category": "Footwear",
    "email": "rongda888@yahoo.com",
    "phone_mobile": "+88 01873895999",
    "web": null,
    "address": "Head Office: 83, Baizid Bostami Road, Nasirabad I/A, Chattogram."
  },
  {
    "company_name": "Feruz Sons & Co.",
    "category": "Footwear",
    "email": "info@feruzsons.com",
    "phone_mobile": "+88 01713312299",
    "web": "www.feruzsons.com",
    "address": "House # 41, Gungchor, Thana Road Cumilla-3500, Bangladesh"
  },
  {
    "company_name": "Nabila Traders",
    "category": "Footwear",
    "email": "nrahmancap@gmail.com",
    "phone_mobile": "0193777999",
    "web": null,
    "address": "Ramchandrapur, Muradnagar, Cumilla, Bangladesh"
  },
  {
    "company_name": "Palmy Shoes Ltd.",
    "category": "Footwear",
    "email": "asheque.gmps@gmail.com",
    "phone_mobile": "+88 01712929777",
    "web": null,
    "address": "Kabilpur, Kurchhap, 14 No. Sultanpur Debidwar, Cumilla-3510, Bangladesh"
  },
  {
    "company_name": "Xin Chang Shoes BD Ltd.",
    "category": "Footwear",
    "email": "bruce.li@goldenchang.com",
    "phone_mobile": "01748130028",
    "web": null,
    "address": "Plot # 78-84, Cumilla EPZ, Cumilla."
  },
  {
    "company_name": "Bata Shoe Co. (BD) Ltd.",
    "category": "Footwear",
    "email": "bd.customercare@bata.com",
    "phone_mobile": null,
    "web": "www.batabd.com",
    "address": "Tongi, Gazipur-1710, Bangladesh"
  },
  {
    "company_name": "Touch Footwear Limited",
    "category": "Footwear",
    "email": "touchfi2020@gmail.com",
    "phone_mobile": "01711101372",
    "web": null,
    "address": "Mailakanda, Ward # 02, Shamgonj Gouripur, Mymensingh, Bangladesh"
  },
  {
    "company_name": "Nobabee Footwear Ltd.",
    "category": "Footwear",
    "email": "info@improve-group.com",
    "phone_mobile": "+88 01729019224",
    "web": "www.improve-group.com",
    "address": "Plot # B 27-31, BSCIC I/E Netrakona-2400, Bangladesh"
  },
  {
    "company_name": "Commander Soap Co. Ltd.",
    "category": "Soap & Detergents",
    "email": "contact@cosco-bd.com",
    "phone_mobile": "+88 01989363752",
    "web": "www.cosco-bd.com",
    "address": "265 Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Kallol Chemicals Limited",
    "category": "Soap & Detergents",
    "email": "info@kallolgroup.com",
    "phone_mobile": "+88 01787673633",
    "web": "www.kallolgroup.com",
    "address": "199, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Millat Chemical Co. Ltd.",
    "category": "Soap & Detergents",
    "email": "mawintl@yahoo.com",
    "phone_mobile": "+88 01715298830",
    "web": "www.millatgroup.com",
    "address": "Nobosristo Plot # 1, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Square Toiletries Ltd.",
    "category": "Soap & Detergents",
    "email": "infosquaretoiletriestld@gmail.com",
    "phone_mobile": null,
    "web": "www.squaretoiletries.com",
    "address": "Samson Centre, 43 South Avenue, Road # 126, Plot # CES(G) 5A, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "M/s. Noor Soap & Chemical Industries",
    "category": "Soap & Detergents",
    "email": null,
    "phone_mobile": "+88 01620373737",
    "web": null,
    "address": "Pachriya, Patiya, Chattogram."
  },
  {
    "company_name": "ARC Surfactants",
    "category": "Soap & Detergents",
    "email": "info@arcsurfactants.com",
    "phone_mobile": null,
    "web": "www.arcsurfactants.com",
    "address": "91, Tongi I/A, Gazipur-1710, Bangladesh"
  },
  {
    "company_name": "Keya Cosmetics Ltd.",
    "category": "Soap & Detergents",
    "email": "info@keya-bd.com",
    "phone_mobile": "+88 01722099200",
    "web": "www.keyagroupbd.com",
    "address": "Jarun, Konabari, Gazipur, Bangladesh"
  },
  {
    "company_name": "Alpha Soil & Foundation Engineers",
    "category": "Soil Consultants & Foundation",
    "email": "alphasoil@yahoo.com",
    "phone_mobile": "+88 01711612143",
    "web": "www.alphasoilbd.com",
    "address": "187, 2nd Floor North Shahjahanpur Khilgaon Railgate, Dhaka-1207."
  },
  {
    "company_name": "Geoscape Consultants Ltd.",
    "category": "Soil Consultants & Foundation",
    "email": "info@geoscapebd.com",
    "phone_mobile": "01951122912",
    "web": "www.geoscapebd.com",
    "address": "House # 135, Road # 05, Mohakhali DOHS, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "GeoTech Engineering Ltd.",
    "category": "Soil Consultants & Foundation",
    "email": "info@geotechengbd.com",
    "phone_mobile": "01774955599",
    "web": "www.geotechengbd.com",
    "address": "House # 53 (1st Floor), Road # 1, Avenue # 7, Block # G, Banasree, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Global Survey Consultants",
    "category": "Soil Consultants & Foundation",
    "email": "globalsc.bd@gmail.com",
    "phone_mobile": "01716305763",
    "web": "www.globalsc-bd.com",
    "address": "House # 545, Road # 11, 1st Floor Baitul Aman Housing Society, Adabor Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Iconic Engineering Limited",
    "category": "Soil Consultants & Foundation",
    "email": "info@iconic.com.bd",
    "phone_mobile": "+88 01977426642",
    "web": "www.iconic.com.bd",
    "address": "Islam Plaza (6th Floor), Section-7, Pallabi, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Lab Asia",
    "category": "Soil Consultants & Foundation",
    "email": "info@labasiabd.com",
    "phone_mobile": "01717523388",
    "web": "www.labasiabd.com",
    "address": "34/A, Al-Noor Center (Ground Floor), Shop # 1, Ittefaq Moor, Tikatuli, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Labtex Bangladesh",
    "category": "Soil Consultants & Foundation",
    "email": "labtexbangla@gmail.com",
    "phone_mobile": "01725696603",
    "web": null,
    "address": "Eastern Kamlapur Complex (2nd Floor), 64-68, North Kamalapur, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "BISMILAH Scientific Co.",
    "category": "Soil Testing & Measuring Instruments/Equipment",
    "email": "scientifictems@yahoo.com",
    "phone_mobile": "01715223455",
    "web": "www.bismillahscientific.com",
    "address": "33/1, Shahid Nazrul Islam Sarak (5th Floor), Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Elite Scientific & Meditech Co.",
    "category": "Soil Testing & Measuring Instruments/Equipment",
    "email": "elitetradebd@gmail.com",
    "phone_mobile": "0171196910",
    "web": "www.elitetradebd.com",
    "address": "Head Office: Russell Center (2nd Floor), 27, Shahid Nazrul Islam Road, Hatchola, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Paradise Scientific Company Ltd.",
    "category": "Soil Testing & Measuring Instruments/Equipment",
    "email": "paradisescientific@gmail.com",
    "phone_mobile": "01325065151",
    "web": "www.psc.com.bd",
    "address": "31, Mamun Plaza, Shahid Nazrul Islam Sharak, Tikatuli, Dhaka-1203."
  },
  {
    "company_name": "RTC Trade International",
    "category": "Soil Testing & Measuring Instruments/Equipment",
    "email": "rtcdhakala2013@gmail.com",
    "phone_mobile": "+88 01831016720",
    "web": "www.rtcdhakala.com",
    "address": "Russell Center, 27 Hatchola Road Tikatoly, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Sagartex Engineering",
    "category": "Soil Testing & Measuring Instruments/Equipment",
    "email": "sagartex7@gmail.com",
    "phone_mobile": "01884299358",
    "web": "www.sagartexbd.org",
    "address": "House # 10 (1st Floor), Road # 02, Sector # 06, Uttara, Dhaka-1230."
  },
  {
    "company_name": "TSS Corporation",
    "category": "Engineering",
    "email": "info@tsscbd.com",
    "phone_mobile": "+88 01913589807",
    "web": "www.tsscbd.com",
    "address": "Head Office: House # 9/3 (3rd Floor), Lane-1, Block-B, Mirpur-6, Dhaka."
  },
  {
    "company_name": "Aurora Power Engineering",
    "category": "Power/Solar",
    "email": "info@auroraengineering.net",
    "phone_mobile": "01613000183",
    "web": "www.auroraengineering.net",
    "address": "Suit # 35/B, Eastern Plaza (8th Floor) 70, Bir Uttam C.R. Dutta Road Hatirpool, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "ABS Power Ltd.",
    "category": "Power/Solar",
    "email": "abspowerfactory@gmail.com",
    "phone_mobile": "01768053244",
    "web": "www.abspower.com.bd",
    "address": "11/8/E, Panthapath, Dhaka-1205."
  },
  {
    "company_name": "AEP Corporation BD Ltd.",
    "category": "Power/Solar",
    "email": "info@aepcorporationbdtd.com",
    "phone_mobile": "01756342118",
    "web": "www.aepbd.com",
    "address": "Head Office: House # B-93, DIT Road, Malibagh Chowdhury Para, Joti Commercial Center, 5th Floor, Rampura, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Alif Power Solution Ltd.",
    "category": "Power/Solar",
    "email": "anwaraps@gmail.com",
    "phone_mobile": "01914129044",
    "web": null,
    "address": "Corporate Office: 42, South Azampur, Dakshinkhan, Dhaka-1230."
  },
  {
    "company_name": "Allied Solar Energy Ltd.",
    "category": "Power/Solar",
    "email": "info@alliesolar.com.bd",
    "phone_mobile": "+88 01730735310",
    "web": "www.alliesolarbd.com",
    "address": "Registered Address: 446/B Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Alpha Solar Energy",
    "category": "Power/Solar",
    "email": null,
    "phone_mobile": "01712638373",
    "web": null,
    "address": "Block # C, Road # 09, House # 116 (2nd Floor), Niketon, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "AVA Renewable Energy Ltd.",
    "category": "Power/Solar",
    "email": "info@avasolarbd.com",
    "phone_mobile": "+88 01712335516",
    "web": "www.avasolarbd.com",
    "address": "Bangladesh Office: Rozi Villa (2nd Floor), Shimultala, Jamgora, Ashulia, Savar, Dhaka-1349."
  },
  {
    "company_name": "Bangla Power",
    "category": "Power/Solar",
    "email": "info@banglapower.org",
    "phone_mobile": "01715347752",
    "web": "www.banglapower.org",
    "address": "1st Floor, Pritom Bhaban, 215, Shaheed, Syed Nazrul Islam Sarani, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bay Power Technology Ltd.",
    "category": "Power/Solar",
    "email": "khaleque@baypowertechnology.com.bd",
    "phone_mobile": "+88 01917703355",
    "web": "www.baypowertechnology.com.bd",
    "address": "House # 09 (Level-6), Road # 04, Block # F, Chairmanbari, Banani, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Best Power Engineering",
    "category": "Power/Solar",
    "email": "bestpowerbpe@gmail.com",
    "phone_mobile": "01748196334",
    "web": null,
    "address": "Head Office: House # 44, Road # 01, Sector # 06, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Bright Green Energy Foundation",
    "category": "Power/Solar",
    "email": "dipal@dipalbarua.com",
    "phone_mobile": "+88 01969630034",
    "web": "www.greenenergybyd.com",
    "address": "House # 57, Road # 07, DIT Project, Merul Badda, Dhaka-1212."
  },
  {
    "company_name": "Co-Trust Tech Limited",
    "category": "Power/Solar",
    "email": "customerservice@cotrusttech.ltd",
    "phone_mobile": "+880 9613200701",
    "web": "www.cotrusttech.com",
    "address": "Head Office: House # 22, Road # 19/A, Block # E, Banani, Dhaka-1213."
  },
  {
    "company_name": "Dhaka Solar Ltd.",
    "category": "Power/Solar",
    "email": "info@dhakasolarltd.com",
    "phone_mobile": "+88 01329691505",
    "web": "www.dhakasolarltd.com",
    "address": "Unit-2B, House # 15, Road # 105, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Eco Distribution Ltd.",
    "category": "Power/Solar",
    "email": "edl.bd2010@gmail.com",
    "phone_mobile": "01973367494",
    "web": null,
    "address": "Ka-96/D, Kuril (Kazi Bari), Progoti Sharon, Badda, Dhaka-1229."
  },
  {
    "company_name": "ElectroCom Ideas & Technologies Ltd.",
    "category": "Power/Solar",
    "email": "info@electrocombd.com",
    "phone_mobile": "01823072788",
    "web": "www.electrocombd.com",
    "address": "353/1 East Rampura (2nd, 3rd & 5th Floor), DIT Road, Dhaka-1219."
  },
  {
    "company_name": "Energy Bangla Solar Engineering",
    "category": "Power/Solar",
    "email": "energybanglasolarengineering@gmail.com",
    "phone_mobile": "+88 01708882438",
    "web": null,
    "address": "580, Middle Monipur, Mirpur Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Global Renewable Energy Ltd.",
    "category": "Power/Solar",
    "email": "info@renewableenergybd.com",
    "phone_mobile": "+88 01706666330",
    "web": "www.renewableenergybd.com",
    "address": "Corporate Office: S-F4, Jamidar Palace, 291 Toyenbee Circular Road, Motijheel, Dhaka-1000"
  },
  {
    "company_name": "Grameen Shakti",
    "category": "Power/Solar",
    "email": "info@gshakti.org",
    "phone_mobile": null,
    "web": "www.gsakti.org",
    "address": "Head Office: Telecom Bhaban (Level-3), 53/1 Box Nagar Zoo Road, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Greenergy Solutions Limited",
    "category": "Power/Solar",
    "email": "info@greenergy.com.bd",
    "phone_mobile": null,
    "web": "www.greenergy.com.bd",
    "address": "Flat-6B, House # 10, Road # 1, Block # B, Niketan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "G-Tech Solution Ltd.",
    "category": "Power/Solar",
    "email": "info@gttechgroupbd.com",
    "phone_mobile": "+88 01617334806",
    "web": "www.gttechgroupbd.com",
    "address": "Suite # 21-C, Navana Tower, 45, Gulshan-1, Dhaka-1212 Bangladesh"
  },
  {
    "company_name": "HK Power",
    "category": "Power/Solar",
    "email": "info@hkpowerbd.com",
    "phone_mobile": "+88 01717276988",
    "web": "www.hkpowerbd.com",
    "address": "Rangdhanu Complex, Shop # 301/302 (2nd Floor), Block # A, Road # 01, Section-11½, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "M.K Technology",
    "category": "Power/Solar",
    "email": "mktonline.bd@gmail.com",
    "phone_mobile": "01717476286",
    "web": "www.ipsmsksolar.com",
    "address": "63/5, Dhalpur, Jatrabari, Dhaka-1204."
  },
  {
    "company_name": "Navana Renewable Energy Ltd.",
    "category": "Power/Solar",
    "email": "info@navanarenegy.com",
    "phone_mobile": "01926999980",
    "web": "www.navanarenegy.com",
    "address": "113/B, Tejgaon R/A (1st Floor) Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Power King Engineering Ltd.",
    "category": "Power/Solar",
    "email": "info@pkebd.com",
    "phone_mobile": "+88 01615707707",
    "web": "www.pkebd.com",
    "address": "Corporate Office: Apon Heights, 8th Floor, Suite # A8, House # 27/1/B, Road # 03, Shyamoli, Dhaka-1207."
  },
  {
    "company_name": "Power Utility Bangladesh Limited",
    "category": "Power/Solar",
    "email": "solar@bengal.com.bd",
    "phone_mobile": "+88 01978111111",
    "web": "www.bengalsolar.com.bd",
    "address": "Bengal House, 75 Gulshan Avenue Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Rahimafrooz Renewable Energy Ltd.",
    "category": "Power/Solar",
    "email": "solar@rahimafrooz.com",
    "phone_mobile": null,
    "web": "www.rahimafrooz-solar.com",
    "address": "13 Bir Uttam AK Khandakar Road Mohakhali C/A, ARZED Chamber (4th Floor), Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Rural Sun Power",
    "category": "Power/Solar",
    "email": "info@ruralsunpower.com",
    "phone_mobile": "01713567628",
    "web": "www.ruralsunpower.com",
    "address": "House # 01, Road # 3/A, Main Road Noboudoy Housing Society, Mohammadpur, Dhaka-1207."
  },
  {
    "company_name": "Shangjog Power Pack",
    "category": "Power/Solar",
    "email": "shangjogpowerpack@gmail.com",
    "phone_mobile": "+88 01714295530",
    "web": null,
    "address": "1st Floor, Shop # 244-221, Kaptan Bazar Complex-1, Nawabpur Road, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Solar Electro Bangladesh Ltd.",
    "category": "Power/Solar",
    "email": "info@solarelectrobd.com",
    "phone_mobile": null,
    "web": "www.solarelectrobd.com",
    "address": "House # 7, Road # 54/A, Gulshan-2 Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Solar EPC Development Ltd.",
    "category": "Power/Solar",
    "email": "info@solarepc-bd.com",
    "phone_mobile": null,
    "web": "www.solarepc-bd.com",
    "address": "House # 16 (Level-3), Road # 10 Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Solar Home Co.",
    "category": "Power/Solar",
    "email": "irfan.ab.db@gmail.com",
    "phone_mobile": "+88 01672993247",
    "web": "www.solarhome-bd.com",
    "address": "House # 16, Road # 13, Niketon Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Solarland Bangladesh",
    "category": "Power/Solar",
    "email": "info@solarland.com.bd",
    "phone_mobile": "+88 0184114198",
    "web": "www.solarland.com.bd",
    "address": "Beverly Hills, House # 98/B, Block # CESA, Gulshan Avenue, Dhaka-1212."
  },
  {
    "company_name": "Solaric",
    "category": "Power/Solar",
    "email": "megaroof@solaricglobal.com",
    "phone_mobile": null,
    "web": "www.solaricglobal.com",
    "address": "Level-3, JCX Business Tower Block-I, Bashundhara, Dhaka."
  },
  {
    "company_name": "Transpower Engineering Ltd.",
    "category": "Power/Solar",
    "email": "transpowerbd@gmail.com",
    "phone_mobile": "017166679701",
    "web": "www.transpowerbd.com",
    "address": "Firoza Tower (3rd Floor), 42/A/2 Hatchlola Road, Dhaka-1203."
  },
  {
    "company_name": "World Power Engineering",
    "category": "Power/Solar",
    "email": "worldpowerengineering15@gmail.com",
    "phone_mobile": "01914345602",
    "web": null,
    "address": "Shop # 124, 1st Floor (upto gate-5) Sundarban Square Super Market Gulistan, Dhaka, Bangladesh"
  },
  {
    "company_name": "AB Textiles Mills (BD) Ltd.",
    "category": "Spinning Mills",
    "email": "info@abtextilesbd.com",
    "phone_mobile": "01911778280",
    "web": "www.abtextilesbd.com",
    "address": "House # 29 (1-A), Road # 16, Sector # 12, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Aftab Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "aftab_g@aitlbd.net",
    "phone_mobile": null,
    "web": null,
    "address": "Uttara Bank Bhaban (4th & 5th Floor) 47, Bir Uttam Shahid Asfaqus Samad Sarak (Old-90), Motijheel C/A, Dhaka."
  },
  {
    "company_name": "AKSA Tex Knitwear (AKSA)",
    "category": "Spinning Mills",
    "email": "khairulaksatex@gmail.com",
    "phone_mobile": "01625704081",
    "web": "www.aksatexknitwear.com",
    "address": "Dairy Farm, Ashulia, Savar, Dhaka-1349, Bangladesh"
  },
  {
    "company_name": "Alhaj Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@alhajtextilemills.com",
    "phone_mobile": null,
    "web": "www.alhajtextilemills.com",
    "address": "Head Office: 66 Diluksha C/A, 4th Floor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Alibaba Composite Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@alibabetextilebd.com",
    "phone_mobile": "+88 01731061974",
    "web": "www.alibabetextilebd.com",
    "address": "Plot # 25, Road # 07, Sector # 03, Rajlaxmi Complex (5th Floor), Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Aqib Textile Mills",
    "category": "Spinning Mills",
    "email": "info@sadiatextile.com",
    "phone_mobile": "01711856850",
    "web": "www.sadiatextile.com",
    "address": "House # 6, Road # 13, Sector # 7 Uttara, Dhaka 1230, Bangladesh"
  },
  {
    "company_name": "Best Fabric Textiles Ltd.",
    "category": "Spinning Mills",
    "email": "info@bestfabrictextiles.ltd",
    "phone_mobile": "+88 01717024008",
    "web": "www.bestfabrictextiles.ltd",
    "address": "Head Office: House # 2, Flat # B1, Road # 20, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "BSB Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@salmagroup.com.bd",
    "phone_mobile": null,
    "web": "www.salmagroup.com.bd",
    "address": "Corporate Office: Anabil Tower (Floor 14th & 15th), Plot # 03, Block # NW (J), Kemal Ataturk Avenue, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Armada Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@armadabad.com",
    "phone_mobile": null,
    "web": "www.armadabad.com",
    "address": "Head Office: 388, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "CRC Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@crctextile.com",
    "phone_mobile": null,
    "web": "www.crctextile.com",
    "address": "Akram Center (5th Floor), 212, Shahid Sayed Nazrul Islam Sarani Bijoy Nagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fab-Con Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@fabcontextile.com",
    "phone_mobile": "+88 01786867200",
    "web": "www.fabcontextile.com",
    "address": "Razzak Tower, Suite # 2A (2nd Floor) 5 Purana Paltan, Dhaka-1000"
  },
  {
    "company_name": "Farha Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "farha.goup@yahoo.com",
    "phone_mobile": "+88 01713130447",
    "web": "www.farhagroup.com",
    "address": "Eastenra Plus, 145, Shantinagar (7th Floor), Suite # 7/1-7, Dhaka-1217"
  },
  {
    "company_name": "Formosa Poly Cotton Textiles (BD) Ltd.",
    "category": "Spinning Mills",
    "email": "info@formosatex.com",
    "phone_mobile": "+88 01847184051",
    "web": "www.formosatex.com",
    "address": "Alamin Icon Center, Level-8, Flat-8/A 57/4, Progoti Sharani, Norda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Nannu Textile Ltd.",
    "category": "Spinning Mills",
    "email": "info@nannugroup.com",
    "phone_mobile": null,
    "web": "www.textile.nannugroup.com",
    "address": "1st Floor, Daulat Complex, 109 Islampur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Noorjahan Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "arif@melagroupbd.com",
    "phone_mobile": "+88 01841556678",
    "web": "www.melagroupbd.com",
    "address": "House # 120 (Ground Floor), Lane # 05, Eastern Road, New DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Rahim Textile Ltd.",
    "category": "Spinning Mills",
    "email": "info@newasibad.com",
    "phone_mobile": null,
    "web": "www.newasibad.com",
    "address": "117/A, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Jahana Cotton Tex Ltd.",
    "category": "Spinning Mills",
    "email": "info@jahanaratex.com",
    "phone_mobile": "+88 01913456297",
    "web": "www.jahanaratex.com",
    "address": "Head Office: House # 10 (1st Floor), Road # 14, Sector # 4, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Jamuna Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@jamunagroup.com.bd",
    "phone_mobile": null,
    "web": "www.jamunagroup.com.bd",
    "address": "Jamuna Future Park, Dhaka, Bangladesh"
  },
  {
    "company_name": "Matin Spinning Mills PLC",
    "category": "Spinning Mills",
    "email": "info@dbl-group.com",
    "phone_mobile": null,
    "web": "www.matinspinning.com",
    "address": "Corporate Office: South Avenue Tower (6th Floor), 7 Gulshan Avenue, House # 50, Road # 03, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Sadia Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@sadiatextile.com",
    "phone_mobile": "01711856850",
    "web": "www.sadiatextile.com",
    "address": "Corporate Office: House # 6, Road # 13, Sector # 7 Uttara, Dhaka 1230, Bangladesh"
  },
  {
    "company_name": "Safko Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@saihangroup.com",
    "phone_mobile": "+88 01713244195",
    "web": "www.saiham-safko.com",
    "address": "Head Office: House # 10 (6th Floor), Block-B, Road # 1, Niketan, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Syed Spinning & Cotton Mills Ltd.",
    "category": "Spinning Mills",
    "email": null,
    "phone_mobile": null,
    "web": "www.syedgroup.com.bd",
    "address": "Corporate Office: Eastern Mansion (1st Floor), 67/9 Pioneer Road, Kakrail, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "TRU Fabrics Ltd.",
    "category": "Spinning Mills",
    "email": "info@trufabrics.com",
    "phone_mobile": "01321127461",
    "web": "www.trugroup.com.bd",
    "address": "Chamak Vintage (Level-4 & 5), House # 15/B, Road # 08, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Saiham Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": null,
    "phone_mobile": null,
    "web": "www.saihamtextile.com",
    "address": "Head Office: Saiham Tower, House # 34, Road # 136, Block # SE (C)-1, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "SBS Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": null,
    "phone_mobile": null,
    "web": "www.sbstextile.com.bd",
    "address": "Akram Center (5th Floor), 212 Shahid Sayed Nazrul Islam Sarani, Bijoy Nagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Unifill Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": "info@trufabrics.com",
    "phone_mobile": "01321127446",
    "web": "www.trugroup.com.bd",
    "address": "Head Office: Chamak Vintage (Level-4 & 5), House # 15/B, Road # 08, Gulshan-1, Dhaka-1212."
  },
  {
    "company_name": "Worthy Textile Mills Ltd.",
    "category": "Spinning Mills",
    "email": null,
    "phone_mobile": "+88 01813129551",
    "web": "www.worthytextile.com",
    "address": "House # 10 (3rd Floor), Road # 14, Sector # 04, Uttara, Dhaka-1230."
  },
  {
    "company_name": "Younus Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": null,
    "phone_mobile": null,
    "web": "www.younusgroup.com",
    "address": "51, Central Road, Dhanmondi, Dhaka."
  },
  {
    "company_name": "Youth Spinning Mills Ltd.",
    "category": "Spinning Mills",
    "email": "billa@youthgroupbd.com",
    "phone_mobile": "+88 01711733217",
    "web": "www.youthgroupbd.com",
    "address": "Corporate Office: Youth Tower, 822/2 Rokeya Sarani, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Dawn Sports",
    "category": "Sports Goods",
    "email": "dawnsport1513154@gmail.com",
    "phone_mobile": "01866202837",
    "web": null,
    "address": "2 B.B. Avenue, Gulistan Shopping Complex, Shop # 1/153-154 (2nd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Fusion Sports",
    "category": "Sports Goods",
    "email": "support@fusionsports.com.bd",
    "phone_mobile": "+88 01707076715",
    "web": "www.fusionsports.com.bd",
    "address": "House # 18 Road # 6, Dhanmondi Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Jet Sports",
    "category": "Sports Goods",
    "email": null,
    "phone_mobile": "01717221212",
    "web": null,
    "address": "46, B.B Avenue, Shop # 2020 Shomobay Twin Tower Market 2nd Floor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Joy Sports",
    "category": "Sports Goods",
    "email": null,
    "phone_mobile": "+88 01770427501",
    "web": null,
    "address": "Gulistan Shopping Complex 1/138, 139, 140, 141, 2nd Floor 2 Bangabadh Avenue, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Quality Sports",
    "category": "Sports Goods",
    "email": null,
    "phone_mobile": "+88 01678040647",
    "web": null,
    "address": "14, Bangabadh Avenue (Ground Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Robin Sports",
    "category": "Sports Goods",
    "email": null,
    "phone_mobile": "+88 01742225555",
    "web": null,
    "address": "Ramna Bhaban, D-6, Bangabadh Avenue, Sports Market (2nd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Samim Sports",
    "category": "Sports Goods",
    "email": "samimsports8@gmail.com",
    "phone_mobile": "01795313697",
    "web": null,
    "address": "Gulistan Shopping Complex, 2nd Floor, Shop # 1/134, Dhaka-1000."
  },
  {
    "company_name": "Shah Sports",
    "category": "Sports Goods",
    "email": "info@shahssports.com.bd",
    "phone_mobile": "+88 01615550098",
    "web": "www.shahssports.com.bd",
    "address": "Corporate Office: 223/A, Tejgaon I/A, Gulshan Link Road, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Sports World",
    "category": "Sports Goods",
    "email": "info@sportsworld.com.bd",
    "phone_mobile": "01999067566",
    "web": "www.sportsworld.com.bd",
    "address": "G-11, DCC Market, Gulshan-2 Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Max Industries Limited",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@maxgroup-bd.com",
    "phone_mobile": null,
    "web": "www.maxgroup-bd.com",
    "address": "Corporate Office: RAOWA Complex, Level-11 VIP Road Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Nakneem Steel Pipe Industries Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@mspsteelbd.com",
    "phone_mobile": "01818860335",
    "web": "www.mspsteelbd.com",
    "address": "Corporate Office: 68, Shahid Syed Nazmul Islam Sharani (North South Road), Bangshal, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Nahee SS Pipes Industries Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@nahee.com.bd",
    "phone_mobile": "+88 01777763482",
    "web": "www.nahee.com.bd",
    "address": "Corporate Office: Advanced Noorani Tower (Level-8) 1 Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Steelmark Pipes Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "pipes@steelmark.com.bd",
    "phone_mobile": null,
    "web": "www.steelmark.com.bd",
    "address": "DK Tower, Level-8, 94 Bir Uttam CR Dutta Road, Banglamotor, Dhaka."
  },
  {
    "company_name": "Steelmark Stainless Steel Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": null,
    "phone_mobile": null,
    "web": "www.steelmark.com.bd",
    "address": "Corporate Office: DK Tower, Level-5, 94 Bir Uttam CR Dutta Road, Banglamotor, Dhaka."
  },
  {
    "company_name": "Steeltech Industries Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@steeltech-bd.com",
    "phone_mobile": "+88 01755668888",
    "web": "www.steeltech-bd.com",
    "address": "Head Office: Rangs Paramount, House # 11 (12th & 13th Floor), Road # 17, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Winner Stainless Steel Mills Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@winnersteelbd.com",
    "phone_mobile": "01991198080",
    "web": "www.winnersteelbd.com",
    "address": "Head Office: 169, Nawabpur Road (3rd Floor), Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "G.K.S. S Pipe Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "gksspipe@gkgroupbd.com",
    "phone_mobile": "+88 01811316300",
    "web": "www.gkgroupbd.com",
    "address": "Corporate Office: G.K House, 9218, Arakan Road, Moulavi Pukur Par, Chandgaon, Chattogram-4212."
  },
  {
    "company_name": "HATIM Industries Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@hatimgroup.com",
    "phone_mobile": null,
    "web": "www.hatimgroup.com",
    "address": "188/A Jubilee Road, Chattogram."
  },
  {
    "company_name": "NSP Industries Limited",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "info@nsp-bd.com",
    "phone_mobile": "+88 01978547954",
    "web": "www.nsp-bd.com",
    "address": "Vandardaha, Chuadanga Sadar, Chuadanga, Bangladesh"
  },
  {
    "company_name": "Sharif SS Industries Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "sharifsstpipe@gmail.com",
    "phone_mobile": "+88 01329664500",
    "web": "www.sharifsst.com",
    "address": "Office: 21/2, Stadium Road South Sewta, Manikganj, Bangladesh"
  },
  {
    "company_name": "Gram Bangla Tubes Ltd.",
    "category": "Stainless Steel Pipe Manufacturers",
    "email": "sales@grambanglatube.com",
    "phone_mobile": "01907084102",
    "web": "www.grambanglatube.com",
    "address": "Sadi pur, Mohojampur, Sonargaon Narayanganj, Bangladesh"
  },
  {
    "company_name": "Islam Steel",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "info@islamsteel.com",
    "phone_mobile": "+88 01707991746",
    "web": "www.islamsteel.com",
    "address": "23/3, Begumganj Lane, Dhaka-1204."
  },
  {
    "company_name": "Rahima Ispat Ltd.",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "rahima_ispat@yahoo.com",
    "phone_mobile": "01713002955",
    "web": "www.rahimagroup.com",
    "address": "Plot # 7, 9 & 11, Road # 13, Shampur I/A, Dhaka-1204, Bangladesh"
  },
  {
    "company_name": "Rahim Steel Mills Co. (Pvt.) Ltd.",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "info@rahimgroup.com",
    "phone_mobile": null,
    "web": "www.rahimgroup.com",
    "address": "29/10, K. M. Das Lane, Tikatuli Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Salam Steel Consact Re-Rolling Mills Ltd.",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "info@salamsteel.com",
    "phone_mobile": "01787691753",
    "web": "www.salamsteel.com",
    "address": "Corporate Office: Flat # 9/H, Police Plaza Concord, Plot # 02, Road # 144, Gulshan Model Town, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Shafiul Alam Special Steel Mills Ltd.",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "sasgroup777@yahoo.com",
    "phone_mobile": "01676557177",
    "web": "www.sasgroup.com.bd",
    "address": "Head Office: House # 4, Road # 18, Block # A Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Shahriar Steel Mills Ltd.",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "info@ssrm.com.bd",
    "phone_mobile": "+88 01976280163",
    "web": "www.ssrm.com.bd",
    "address": "Head Office & Factory: 18, Konapara, Jatrabari, Dhaka-1362, Bangladesh"
  },
  {
    "company_name": "Sonargaon Steels Ltd.",
    "category": "Steel Bar/Rod/Angle/Channel Manufacturers",
    "email": "info@rahimgroup.com",
    "phone_mobile": null,
    "web": "www.rahimgroup.com.bd",
    "address": "29/10, K. M. Das Lane, Tikatuli Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "A A Steel Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@aasteelbd.com",
    "phone_mobile": "+88 01987007808",
    "web": "www.aasteelbd.com",
    "address": "House # 35 (Ground Floor), Road # 06, Sector # 04, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bangladesh Building Systems Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@bbsepb.com",
    "phone_mobile": null,
    "web": "www.bbsepb.com",
    "address": "Corporate Office: Ga-64 (3rd Floor), Configure Bepari Tower, Middle Badda, Progoti Swarani, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "BEST Structural Steel Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@beststeelbd.com",
    "phone_mobile": "01877739000",
    "web": "www.beststeelbd.com",
    "address": "Head Office: House # 126/1/A (1f), Senpara, Parbata, Mirpur-10, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "BD Steel Building Design & Development Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "bdsteelbuilding@gmail.com",
    "phone_mobile": "01716092784",
    "web": null,
    "address": "House # 2/B, Road # 12, Nikunja-2 Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Confidence Steel Building Technologies Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "confidence.steel@yahoo.com",
    "phone_mobile": "+88 01919387105",
    "web": "www.confidencesteel.com",
    "address": "House # 625 (1st Floor), Road # 10, Avenue # 3, Mirpur-12, Dhaka-1216."
  },
  {
    "company_name": "Domingae Steel Building Systems Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@dominage.net",
    "phone_mobile": "+88 01733037304",
    "web": "www.dominage.net",
    "address": "Head Office: J.R Casero Tower (11th Floor), 46, Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Green PEB Steel Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "greenpebsteel@gmail.com",
    "phone_mobile": "+88 01911753742",
    "web": "www.greenpebsteeltd.com",
    "address": "Head Office: Eastern Housing, Pallabi, 2nd Phase, Mirpur, Dhaka."
  },
  {
    "company_name": "B.S.R. Steel Building Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "sharif.bsr13@gmail.com",
    "phone_mobile": "01742649290",
    "web": "www.bsrsteelebuildingltd.com",
    "address": "Head Office: 87, Purana Paltan Lane, Paltan Tower (6th Floor), Suite # 606, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Cosmic Steel Buildings Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "cosmicbd@gmail.com",
    "phone_mobile": "01312122000",
    "web": "www.cosmic.com.bd",
    "address": "Corporate Office: 134/7/D, Cosmic Garden (Level-2), Furfura Sharif Road Darussalam, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Icon Peb Steel (BD) Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "sales@iconsteelbd.com",
    "phone_mobile": "+88 01711876224",
    "web": "www.iconsteelbd.com",
    "address": "House # 9, Lift-3, Road # 5, Block # J, Banasree, Kampura, Dhaka-1219."
  },
  {
    "company_name": "Buildtrade Engineering Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@buildtradergroupbd.com",
    "phone_mobile": "+88 01911131703",
    "web": "www.buildtradergroupbd.com",
    "address": "37, Shahid Tajuddin Sarani (new) 340, Tejgaon I/A (old), Tejgaon Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "coSSeCTION Steel Limited",
    "category": "Steel Building Manufacturers",
    "email": "crossection.steel@gmail.com",
    "phone_mobile": "+88 01615444111",
    "web": "www.crossectionsteel.com",
    "address": "House # 398 (5th Floor), Road # 29, New DOHS, Mohakhali, Dhaka-1206."
  },
  {
    "company_name": "i-Mart Engineering PLC.",
    "category": "Steel Building Manufacturers",
    "email": "info@steelinfrabd.com",
    "phone_mobile": "01612435001",
    "web": "www.steelinfrabd.com",
    "address": "Head Office: 23/2, SEL HUQ SKYPARK (9th Floor), Khilji Road, Block-B, Shyamoli, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Classic Steel Limited",
    "category": "Steel Building Manufacturers",
    "email": "classicsteelbd@gmail.com",
    "phone_mobile": "01748782564",
    "web": null,
    "address": "House # 403, 2nd Floor, Road # 29 DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Composite Steel Structures Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@csslbd.com",
    "phone_mobile": "01766695100",
    "web": "www.csslbd.com",
    "address": "House # 320, Road # 21, DOHS Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Golden Pre Steel Bangladesh Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@goldensteelbd.com",
    "phone_mobile": "+88 01711462002",
    "web": "www.goldensteelbd.com",
    "address": "Corporate Office: Kamal Kunja (3rd Floor), 14, Bijoy Nagar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Innovation Steel Alliance Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@innovosteel.com",
    "phone_mobile": "01616701071",
    "web": "www.innovosteel.com",
    "address": "Corporate Office: Sundharam Plaza (3rd Floor) 20/3A West Panthapath, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Confidence Prefabricated Steel Building Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "cpsbl.scm@gmail.com",
    "phone_mobile": "+88 01929995663",
    "web": null,
    "address": "House # 29/A (2nd Floor), Road # 11 (new), Dhanmondi R/A, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Design Concept Steel Ltd.",
    "category": "Steel Building Manufacturers",
    "email": "info@designconceptsteel.com",
    "phone_mobile": null,
    "web": "www.designconceptsteel.com",
    "address": "Flat-5A (Lift-4), House # 01, Road # 07 Block # J, Baridhara, Dhaka-1212."
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Packaging",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865",
    "web": "www.ayeshapps.com",
    "address": "Factory & Office: PATAKATA, LAKHANKHOLA, BANDAR, NARAYANGANJ"
  },
  {
    "company_name": "SANDWICH PANEL TECHNOLOGY",
    "category": "Construction",
    "email": null,
    "phone_mobile": "+88 01713860009",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": null
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety & Security",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025090",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No.15, Madani Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Air Express Tours & Travels",
    "category": "Travel Agency",
    "email": "airexpress1234@gmail.com",
    "phone_mobile": "+88 01819255792, +88 01711829676",
    "web": "",
    "address": "11, Fakirapool (Ground Floor), Hotel Al-Belal, Motijheel Inner Circular Road, Dhaka-1000."
  },
  {
    "company_name": "Air Galaxy Ltd.",
    "category": "Travel Agency",
    "email": "info@airgalaxy.com.bd",
    "phone_mobile": "+88 01713001834",
    "web": "www.airgalaxy.com.bd",
    "address": "Taj Marriott, 5th Floor, 25 Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Air Home Tours & Travels",
    "category": "Travel Agency",
    "email": "airhome.md@gmail.com",
    "phone_mobile": "+88 01914849484",
    "web": "",
    "address": "House # 54/A (1st Floor), Road # 132 Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Air Infinity Travel & Tourism",
    "category": "Travel Agency",
    "email": "airinfinitytravel@yahoo.com",
    "phone_mobile": "01678032321, 01811213847",
    "web": "",
    "address": "53, Purana Paltan, Suite # 502 (5th Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Air King International",
    "category": "Travel Agency",
    "email": "atmsalahuddin@yahoo.com",
    "phone_mobile": "+88 01718180115",
    "web": "",
    "address": "S.A. Bhaban (2nd Floor), 115/23, Motijheel Circular Road, Dhaka-1000."
  },
  {
    "company_name": "Air Matco International",
    "category": "Travel Agency",
    "email": "airmatcointernational@gmail.com",
    "phone_mobile": "+88 01715030167",
    "web": "",
    "address": "Al-Bashir Plaza (1st Floor) 205/5, Fakirapool, Dhaka-1000."
  },
  {
    "company_name": "Air Net International",
    "category": "Travel Agency",
    "email": "shabubd@gmail.com",
    "phone_mobile": "+88 01715665563, +88 01716664568",
    "web": "",
    "address": "Rahmania International Complex (7th Floor), 28/1/C, Toyenbee Circular Road, Room # 17, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Aircraft Tour & Travels",
    "category": "Travel Agency",
    "email": "airphilistin@gmail.com",
    "phone_mobile": "+88 01711196964",
    "web": "",
    "address": "Tropicana Tower (3rd Floor), Room # 8, 45, Topkhana Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "A.K Chowdhury Tours & Travels",
    "category": "Travel Agency",
    "email": "chowdhury1831@gmail.com",
    "phone_mobile": "+88 01716721831",
    "web": "",
    "address": "Ruhama Tower (4th Floor), 50, Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Amazing Tours BD",
    "category": "Travel Agency",
    "email": "amazingtoursbd@gmail.com",
    "phone_mobile": "01971464084, 01972464084, 01973464084, 01974464084",
    "web": "www.amazingtoursbd.com",
    "address": "66/67 Elephant Road, 6th Floor Star Kabab Building, Dhaka."
  },
  {
    "company_name": "Amin Travels & Tours",
    "category": "Travel Agency",
    "email": "aminulh7@gmail.com",
    "phone_mobile": "01708528869, 01916036801",
    "web": "www.amintravels.com.bd",
    "address": "67/1, 68 Naya Paltan, Paltan China Town (Level-19, East Tower), Suite # E20/48-5, Dhaka-1000."
  },
  {
    "company_name": "A M S Aviation",
    "category": "Travel Agency",
    "email": "amsaviation70@gmail.com",
    "phone_mobile": "01711023351, 01611023351",
    "web": "",
    "address": "31, DIT Extension Road, Rafatun Mansion (4th Floor), Fakirapool, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Apon Tours",
    "category": "Travel Agency",
    "email": "apontours@gmail.com",
    "phone_mobile": "01844178200, 01844178201",
    "web": "",
    "address": "Eastern Arzoo, 197, Shahid Syed Nazrul Islam Sharani, 61, Bijoynagar, Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "A. Rahman Tours & Travels",
    "category": "Travel Agency",
    "email": "a_rahman_travels@live.com",
    "phone_mobile": "+88 01711819188",
    "web": "",
    "address": "House # 2, Block-G, Main Road, South Banasree (5th Floor), Khilgaon, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "A.R. Tours & Travels",
    "category": "Travel Agency",
    "email": "artravelsbd@gmail.com",
    "phone_mobile": "+88 01720208291, +88 01816171449",
    "web": "",
    "address": "89, Kakrail, Green City Edge (2nd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Arabians Tours & Travel",
    "category": "Travel Agency",
    "email": "info@arabiansbd.com",
    "phone_mobile": "+88 01939445511",
    "web": "www.arabiansbd.com",
    "address": "Baitul View Tower, 15th Floor (C-Unit), 56/1 Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "ASH Tours & Travels",
    "category": "Travel Agency",
    "email": "ashtoursbd@gmail.com",
    "phone_mobile": "+88 01711390705",
    "web": "",
    "address": "House # 6/1, Road # 03, Block # H Rampura, Banasree, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Best Ride Tours & Travels",
    "category": "Travel Agency",
    "email": "info@bestridebd.com",
    "phone_mobile": "+88 01840806061",
    "web": "www.bestridebd.com",
    "address": "Head Office: Rupsha Tower, Plot # 7 (13th Floor), Road # 17, Banani C/A, Dhaka-1213."
  },
  {
    "company_name": "BM Travels Ltd.",
    "category": "Travel Agency",
    "email": "bmttltd@gmail.com",
    "phone_mobile": "01964529590, 01940334511",
    "web": "www.bmtc.com.bd",
    "address": "Head Office: House # 05 (4th Floor), Road # 2D, Block # J, Dhaka-1212."
  },
  {
    "company_name": "British Bangla Travel Ltd.",
    "category": "Travel Agency",
    "email": "info@britishbanglatravel.com",
    "phone_mobile": "01318302427, 01318302445",
    "web": "www.britishbanglatravel.com",
    "address": "Suite # 2B, Level-1, 22 Ataturk Tower Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Manufacturing",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475665, 01712623446",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Aviation Tours & Travels Ltd",
    "category": "Travel Agency",
    "email": "dankedhaka@gmail.com",
    "phone_mobile": "+88 01619231884",
    "web": "",
    "address": "56/1, Baitul View Tower, Level # 13 Purana Paltan, Dhaka-1000."
  },
  {
    "company_name": "Citycom Travel",
    "category": "Travel Agency",
    "email": "info@citycomtravel.com, support@citycomtravel.com",
    "phone_mobile": "09611677933, +88 01710201414",
    "web": "www.citycomtravel.com",
    "address": "116/117 DIT Extension Road, G-Nat Tower, 5th Floor, Fakirapool, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Creative Tours & Travels",
    "category": "Travel Agency",
    "email": "bdcreativetours@gmail.com",
    "phone_mobile": "+88-02-55027656, +88 01711597010, +88 01819280502",
    "web": "www.creativetours.com.bd",
    "address": "Krishi Laboratory Jame Masjid Market, Suite # 35 (2nd Floor), Monipuripara, Farmgate, Dhaka-1215"
  },
  {
    "company_name": "Makhud Tours & Travels",
    "category": "Travel Agency",
    "email": "mahmudtours.travelsbd@gmail.com",
    "phone_mobile": "+88 01711003605",
    "web": "",
    "address": "Adept NR Complex Ka-5/2 (1st Floor) Bashundhara Road, Jagannathpur Vatara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Nova Tours & Travels",
    "category": "Travel Agency",
    "email": "nova_hoque@yahoo.com",
    "phone_mobile": "+88 01911350160",
    "web": "",
    "address": "95, Kazi Nazrul Islam Avenue (2nd Floor), Kawran Bazar C/A, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Rafiya Travels Agency",
    "category": "Travel Agency",
    "email": "rafiyatravelsagency@gmail.com",
    "phone_mobile": "+88 01921747478",
    "web": "www.rafiyatravels.com",
    "address": "121, D.I.T Extention Road, Fakirapool Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shams Air Tours & Travels Ltd.",
    "category": "Travel Agency",
    "email": "info@shamsair.com, Contact@shamsair.com",
    "phone_mobile": "+88-02-222286760, 58816761, +88 01678669763",
    "web": "www.shamsair.com",
    "address": "22, Rob Super Market (8th Floor) Gulshan Circle-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Makkah Tours & Travels",
    "category": "Travel Agency",
    "email": "",
    "phone_mobile": "+88 01711270361",
    "web": "",
    "address": "126 Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "N.Z. Foundation & Hajj Mission",
    "category": "Travel Agency",
    "email": "nzfoundationbd@gmail.com",
    "phone_mobile": "+88-02-222283726, +88 01783869860-69",
    "web": "www.nzfoundation.org",
    "address": "205/1A, Hashim Tower, Gulshan-Tejaaon Link Road, Tejgaon, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Ras Overseas Ltd.",
    "category": "Travel Agency",
    "email": "rasoverseas04@gmail.com",
    "phone_mobile": "+88 01711542722",
    "web": "",
    "address": "205/1 Shahid Syed Nazrul Islam Sarani (Near Bijoy Nagar Water Tank), 2nd Floor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "S. S. International Travels & Tours",
    "category": "Travel Agency",
    "email": "ssinternationaltravels@gmail.com",
    "phone_mobile": "01715955001, 01310551925, +88 01310551921",
    "web": "www.ssholidaybd.com",
    "address": "Green Mart (Level-2), 33/33/1, Beer Uttam KM Shafiullah Sarak, Green Road, Dhanmondi, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Motherland Tours & Travels",
    "category": "Travel Agency",
    "email": "motherlandtt17@gmail.com",
    "phone_mobile": "+88-02-57160758",
    "web": "",
    "address": "218, Shahid Syed Nazrul Islam Sarani Tropicana Tower (12th Floor), Room # E/2, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ocean Arena Travels",
    "category": "Travel Agency",
    "email": "sales@oceanarena travelss.com",
    "phone_mobile": "01714617773, 01730576441-2",
    "web": "www.oceanarena travelss.com",
    "address": "House # 24/A (2nd Floor, Road # 42 Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Orion Travels Ltd.",
    "category": "Travel Agency",
    "email": "oriontravels@yahoo.com",
    "phone_mobile": "+88 01711530330",
    "web": "",
    "address": "GF-1, Hotel Purbani Annex, 1, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Paradise Travels Limited",
    "category": "Travel Agency",
    "email": "",
    "phone_mobile": "+88 01717550951",
    "web": "",
    "address": "Malek Mansion (1st Floor), 128, Motijheel C/A, Dhaka-1000."
  },
  {
    "company_name": "Nirhor Tours & Travels",
    "category": "Travel Agency",
    "email": "ceo@nirjhorbd.com",
    "phone_mobile": "+88 01711532523",
    "web": "www.nirjhorbd.com",
    "address": "Oriental Trade Centre, 69/1 Purana Paltan Lane (7th Floor), VIP Road, Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Prinom International",
    "category": "Travel Agency",
    "email": "pritomtravels@gmail.com",
    "phone_mobile": "+88-02-48310226, 58311027",
    "web": "www.pritominternational.com",
    "address": "48, Naya Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Rupsha Air Services (Pvt.) Ltd.",
    "category": "Travel Agency",
    "email": "rupsha.air.services@gmail.com",
    "phone_mobile": "+88 01711537722",
    "web": "",
    "address": "Uday Tower (20th Floor), 57/57/A, Gulshan Avenue, Dhaka-1212."
  },
  {
    "company_name": "Sanjila Muntasir Travels & Tours Ltd.",
    "category": "Travel Agency",
    "email": "shahadatmona@yahoo.com",
    "phone_mobile": "+88 01713117699",
    "web": "",
    "address": "A. R. Khan Trade Center, Flat # B-4 (3rd Floor), 40/1, Naya Paltan, VIP Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shajalal Overseas Limited",
    "category": "Travel Agency",
    "email": "shajalaloverseas@gmail.com",
    "phone_mobile": "+88-02-222289439, +88 01712964454",
    "web": "www.shajalaloverseas.com",
    "address": "Navana Tower Office Complex, Type-A, Level-6, 45, Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Talon Corporation Ltd.",
    "category": "Corporate",
    "email": "taloncorporation@gmail.com",
    "phone_mobile": "+88-02-222294028",
    "web": "www.talon.com.bd",
    "address": "Corporate Office: House # 11/B (4th Floor), Road # 130 Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "The Bengal Tours Ltd.",
    "category": "Travel Agency",
    "email": "info@bengaltours.com",
    "phone_mobile": "+88-02-48812776, +88 01775105351, +88 017123609828",
    "web": "www.bengaltours.com",
    "address": "Flat # 4/B, House # 114, Road # 15 Block # C, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "i SANDWICH PANEL TECHNOLOGY",
    "category": "Manufacturing/Construction",
    "email": "",
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": "Sandwich Panel Technology & Heat Proof Steel Building System"
  },
  {
    "company_name": "Travel Door Limited",
    "category": "Travel Agency",
    "email": "info@traveldoorbd.com",
    "phone_mobile": "+88 01714080412",
    "web": "www.traveldoorbd.com",
    "address": "Plot # 35, 2nd Floor, Block # E, Road # 17, Banani, Dhaka-1213."
  },
  {
    "company_name": "World Famous Tours & Travels",
    "category": "Travel Agency",
    "email": "info.wfttbd@gmail.com",
    "phone_mobile": "01730594947, 01714078794, +88 01714078795, +88 01841416724",
    "web": "www.wfttbd.com",
    "address": "Blessing Jui, House # 13, Road # 17, Block # D, Floor-9, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Travel Touch BD",
    "category": "Travel Agency",
    "email": "bdtraveltouch@gmail.com",
    "phone_mobile": "+88 01754448862",
    "web": "www.traveltouchbd.com",
    "address": "69/A, Middle Pirerbag (Opposite of Paka Masjid), 60 Feet Road, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "World Travel Bangladesh",
    "category": "Travel Agency",
    "email": "admin@worldtravelbd.com",
    "phone_mobile": "+88 01917441144",
    "web": "www.worldtravelbd.com",
    "address": "House # 03, Road # 11, Block # D Mirpur-6, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Zamzam Travels BD",
    "category": "Travel Agency",
    "email": "info@zamzamtravelsbd.com",
    "phone_mobile": "01733391826, 01705401056",
    "web": "www.zamzamtravelsbd.com",
    "address": "Corporate Office: 32, Purana Paltan, Sultan Ahmad Plaza (East side Of Paltan Mosque), 11th Floor (Suite-1202), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Alfalah Travels & Tours",
    "category": "Travel Agency",
    "email": "info@alfalahtravels.com",
    "phone_mobile": "01730799965, 01730799966",
    "web": "www.alfalahtravels.com",
    "address": "1719, Sheikh Mujib Road, Agrabad Chattogram-4100 Bangladesh"
  },
  {
    "company_name": "Valencia Air Travel & Tours Ltd.",
    "category": "Travel Agency",
    "email": "valenciabd@gmail.com",
    "phone_mobile": "+88 01989925572",
    "web": "www.valenciabd.com",
    "address": "Paramount Height (2nd Floor), Box Culvert Road, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Vista Travels",
    "category": "Travel Agency",
    "email": "mahfuzulhuq4@gmail.com",
    "phone_mobile": "+88 01711521209",
    "web": "",
    "address": "142, Elephant Road, Dhanmondi Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Versatile Travels & Tours Ltd.",
    "category": "Travel Agency",
    "email": "info@versatiletravels.com",
    "phone_mobile": "01713194841, 01713194849",
    "web": "www.versatiletravels.com",
    "address": "107, Motijheel C/A, Khan Mansion (Ground Floor), Dhaka-1000."
  },
  {
    "company_name": "Bangladesh Hajje Baitullah Tours & Travels",
    "category": "Travel Agency",
    "email": "info@hajjebaitullah.com",
    "phone_mobile": "0173124506, 0173480501",
    "web": "www.hajjebaitullah.com",
    "address": "Head Office: 1850/3319, Sanam Tower-One (4th Floor), CDA Avenue, East Nasirabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "Mohim Overseas Limited",
    "category": "Travel Agency",
    "email": "mohimoversaes@gmail.com",
    "phone_mobile": "+88 01780700705",
    "web": "",
    "address": "Jalal Plaza (2nd Floor), 84, CDA Avenue, Muradpur, Chattogram."
  },
  {
    "company_name": "Shah Amanat Hajj Kafela Travels & Tours",
    "category": "Travel Agency",
    "email": "info@shahamanathajkafela.com",
    "phone_mobile": "01819539974, 01839430421",
    "web": "www.shahamanathajkafela.com",
    "address": "185/199 Muradpur, CDA Avenue, Chattogram, Bangladesh"
  },
  {
    "company_name": "The Air View Tours & Travels",
    "category": "Travel Agency",
    "email": "airview07@gmail.com",
    "phone_mobile": "+88 01849476764",
    "web": "",
    "address": "100 East Nasirabad, Behind Chattogram Shopping Complex Chattogram-4203, Bangladesh"
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety/Security",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01910250090, 01816024245",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Market, Shop No. 15, Malian Avenue (180 Feet Road), Nurpur, Sylhet, Bangladesh"
  },
  {
    "company_name": "Wings Travels Limited",
    "category": "Travel Agency",
    "email": "info@wings-travels.com",
    "phone_mobile": "+88 01766698143",
    "web": "www.wings-travels.com",
    "address": "Shahjadi Chamber (Ground Floor) 1331 B. Sk Mujib Road, Agrabad C/A Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Golden Bengal Travels & Tours",
    "category": "Travel Agency",
    "email": "info@goldenbelgactg@gmail.com",
    "phone_mobile": "01819835755, 01837772222",
    "web": "www.goldenbelgactg.com",
    "address": "Ahmed Arked (2nd Floor), 42, Shahid Soharwardi Road, Kotwali, Chattogram, Bangladesh"
  },
  {
    "company_name": "Worldview Tours & Travels",
    "category": "Travel Agency",
    "email": "www.lwmail.com",
    "phone_mobile": "+88 01823288437",
    "web": "www.worldview-bd.com",
    "address": "Wali Mansion (1st Floor), 600 S.K Mujib Road, Pathantully, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Zam Zam Travels & Tourism",
    "category": "Travel Agency",
    "email": "info@zamzamtravelsbd.com",
    "phone_mobile": "+88 01815018649",
    "web": "www.zamzamtravelsbd.com",
    "address": "Moss Rose Heights (2nd Floor), 42 M. M. Ali Road, CDA Avenue, Khulshi, Chattogram, Bangladesh"
  },
  {
    "company_name": "Al-Salam Travels Service",
    "category": "Travel Agency",
    "email": "",
    "phone_mobile": "+88 01711322014",
    "web": "",
    "address": "4/8, Surma Market, Sylhet, Bangladesh"
  },
  {
    "company_name": "Central Air Service",
    "category": "Travel Agency",
    "email": "centralnyc@yahoo.com",
    "phone_mobile": "01819654265, 01819653200",
    "web": "",
    "address": "Anonda Tower (Ground Floor) North Dopadighirpar, Jail Road Sylhet, Bangladesh"
  },
  {
    "company_name": "Iqbal Overseas Services",
    "category": "Travel Agency",
    "email": "iosbd@yahoo.com",
    "phone_mobile": "+88 01711984012",
    "web": "",
    "address": "32,34, Huraira Mansion (1st Floor) Amborkhana, Airport Road, Sylhet."
  },
  {
    "company_name": "Jatrik Travels",
    "category": "Travel Agency",
    "email": "jatriktravels@hotmail.com",
    "phone_mobile": "+88 01711332617",
    "web": "",
    "address": "North Dhupadigirpar, Jail Road, Sylhet, Bangladesh"
  },
  {
    "company_name": "Misbah Air Service",
    "category": "Travel Agency",
    "email": "misbahairservice@gmail.com",
    "phone_mobile": "+88 01711484867",
    "web": "",
    "address": "2/G Mitali Mansion (1st Floor) Zindabazar, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Mouri Air International",
    "category": "Travel Agency",
    "email": "mouirair@gmail.com",
    "phone_mobile": "+88 01711975004",
    "web": "",
    "address": "26-27, Hurayra Mansion (1st Floor) Airport Road, Amborkhana, Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "New Modern Travels International",
    "category": "Travel Agency",
    "email": "newmodern_travels@yahoo.com",
    "phone_mobile": "+88 01711331443",
    "web": "",
    "address": "32-33, Raja Mansion, Zindabazar Sylhet-3100, Bangladesh"
  },
  {
    "company_name": "Sonali Travels & Tours",
    "category": "Travel Agency",
    "email": "sonalitravels1992@gmail.com",
    "phone_mobile": "+88 01747150619",
    "web": "",
    "address": "207-208 Hazi Abdus Sattar Shopping Complex (2nd Floor), Beanibazar, Sylhet-3107, Bangladesh"
  },
  {
    "company_name": "ABC Radio FM 89.2",
    "category": "Media",
    "email": "",
    "phone_mobile": "+88 01737493051",
    "web": "",
    "address": "99 Kazi Nazrul Islam Avenue, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Anand TV",
    "category": "Media",
    "email": "nationaldeskatv@gmail.com",
    "phone_mobile": "+88-02-48812921",
    "web": "www.anandatvtv",
    "address": "79/E, 6th Floor, International Airport Road, Chairmanbani, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Asian TV",
    "category": "Media",
    "email": "news.asiantvonline@gmail.com",
    "phone_mobile": "+88-02-9852960-4",
    "web": "www.asiantvonline.com",
    "address": "House # 60, Block # A, Road # 1 Gulshan-1, Niketon, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "ATN Bangla",
    "category": "Media",
    "email": "atn@dhaka.agni.com",
    "phone_mobile": "+88-02-8189630-33",
    "web": "www.atnbangla.tv",
    "address": "WASA Bhaban, 1st Floor, 98 Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "ATN News Limited",
    "category": "Media",
    "email": "webmaster@atnnewstv.com",
    "phone_mobile": "+88-02-41010465-67",
    "web": "www.atnnewstv.com",
    "address": "Hassan Plaza (7th-12th Floor), 53, Karwan Bazar C/A, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Bangladesh Television",
    "category": "Media",
    "email": "btvbangladesh@gmail.com",
    "phone_mobile": "+88-02-55131920-29",
    "web": "www.btv.gov.bd",
    "address": "BTV Bhaban, Rampura, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Bangla Radio 95.2 FM",
    "category": "Media",
    "email": "banglaradiofm95.2@gmail.com",
    "phone_mobile": "+88 01317545745",
    "web": "",
    "address": "Swadesh Tower (16th Floor), 41/6 Box Culvert Road, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bangla TV",
    "category": "Media",
    "email": "info@banglatv.tv",
    "phone_mobile": "+88-02-58313468",
    "web": "www.banglatv.tv",
    "address": "83, Siddheswari Road, Mouchak Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Bangla Vision TV",
    "category": "Media",
    "email": "thebnews24@gmail.com",
    "phone_mobile": "+88-02-9632030-45",
    "web": "www.bnews24.com",
    "address": "Noor Tower, 110 Bir Uttam C. R. Dutta Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Channel 9",
    "category": "Media",
    "email": "info@channelinlnebd.tv, support@channelinlnebd.tv",
    "phone_mobile": "+88-02-9831121-6",
    "web": "www.channelinlnebd.tv",
    "address": "37, Shaheed Tajuddin Ahmed Sarani, Tejgaon Industrial Area, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Channel 24",
    "category": "Media",
    "email": "channel24central@gmail.com",
    "phone_mobile": "+88-02-55029724",
    "web": "www.channel24bd.tv",
    "address": "Times Media Bhaban, 387 South Tejgaon C/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Bijoy TV",
    "category": "Media",
    "email": "bijoytvdigital@bijoytv",
    "phone_mobile": "+88-02-9613615",
    "web": "www.bijoy.tv",
    "address": "Rahat Tower (7th Floor), 14, Link Road, Banglamotor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Channel i",
    "category": "Media",
    "email": "info@channelionline.com, news@channeli.tv",
    "phone_mobile": "+88-02-8891161-65",
    "web": "www.channelionline.com",
    "address": "40, Shahid Tajuddin Ahmed Sarani Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Colours FM",
    "category": "Media",
    "email": "",
    "phone_mobile": "+88 09610161016",
    "web": "",
    "address": "67/4, Pioneer road, Kakrail Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "DBC News",
    "category": "Media",
    "email": "news@dbcnews.tv",
    "phone_mobile": "+88-02-222282431, 222282432, +88 09666777322",
    "web": "www.dbcnews.tv",
    "address": "76, Bir Uttam AK Khandakar Road Mohakhali CA, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Deepo TV",
    "category": "Media",
    "email": "info@deepto.tv",
    "phone_mobile": "+88-02-9121056, 9121057, 09612333999, +88 01787682750, +88 01787682703",
    "web": "www.deepto.tv",
    "address": "7/A/GA, Tejgaon I/A, Dhaka-1208."
  },
  {
    "company_name": "Desh Television Limited",
    "category": "Media",
    "email": "desh.digital@desh.tv",
    "phone_mobile": "+88-02-58312958, 58312822",
    "web": "www.desh.tv",
    "address": "Karnaphuli Media Point, 42, Shaheed Sangbadik Selina Parveen Sarak Malibagh, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Dhaka FM 90.4",
    "category": "Media",
    "email": "info@dhafm90.4.com, sales90.4@dhafm90.4.com",
    "phone_mobile": "+88-02-58811720, 58811721, 01841904929, 01841904909",
    "web": "www.dhafm90.4.com",
    "address": "Navana Tower (15th Floor), 45 Gulshan South C/A, Circle-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Duronto TV",
    "category": "Media",
    "email": "contact@duronto.tv",
    "phone_mobile": "+88-02-222275361",
    "web": "www.duronto.tv",
    "address": "Ahmed Tower, 28 & 30, Kemal Ataturk Avenue, Banani, Dhaka-1213."
  },
  {
    "company_name": "Ekattor TV",
    "category": "Media",
    "email": "info@ekattor.tv",
    "phone_mobile": "+88 09666717100",
    "web": "www.ekattor.tv",
    "address": "57 Sohrawardi Avenue, Baridhara Dhaka, Bangladesh"
  },
  {
    "company_name": "Ekhon Television",
    "category": "Media",
    "email": "info@ekhon.tv",
    "phone_mobile": "+88 01324720001",
    "web": "www.ekhon.tv",
    "address": "City Park Lane, 19 Hatchkola Road Wari, Dhaka-1203, Bangladesh"
  },
  {
    "company_name": "Ekantha Television Ltd.",
    "category": "Media",
    "email": "info@ekushey-tv.com",
    "phone_mobile": "+88-02-55014316-25",
    "web": "www.ekushey-tv.com",
    "address": "Jahangir Tower, 10, Karwan Bazar Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Gaan Bangla TV",
    "category": "Media",
    "email": "",
    "phone_mobile": "+88-02-222261945, 222262944",
    "web": "www.gaanbangla.tv",
    "address": "48, Pragati Sarani, Block # J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Gazi Satellite Television Ltd.",
    "category": "Media",
    "email": "info@gazitv.com",
    "phone_mobile": "+88-02-8391021-5",
    "web": "www.gazitv.com",
    "address": "UCEP Cheyne Tower, 25, Segun Bagicha Road, Dhaka-1000."
  },
  {
    "company_name": "Global Television",
    "category": "Media",
    "email": "news@globaltvbd.com",
    "phone_mobile": "+88-02-9765433",
    "web": "www.globaltvbd.com",
    "address": "House # 189/A, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Independent Television Limited",
    "category": "Media",
    "email": "info@itvbd.com",
    "phone_mobile": "+88-02-8879000",
    "web": "www.itvbd.com",
    "address": "Beximco Media Complex, 149-150 Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Jago FM 94.4",
    "category": "Media",
    "email": "info@jago.fm",
    "phone_mobile": "+88 01994949444",
    "web": "www.jago.fm",
    "address": "PRAN-RFL Center 105 Middle Badda Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Jamuna Television Ltd.",
    "category": "Media",
    "email": "hello@jamuna.tv",
    "phone_mobile": "+88-02-9824034-43",
    "web": "www.jamuna.tv",
    "address": "Jamuna Television Bhajan Jamuna Future Park Complex Ka-244, Progoti Sarani, Baridhara Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Maasranga Television",
    "category": "Media",
    "email": "info@maasranga.tv",
    "phone_mobile": "+88-02-8715877",
    "web": "www.maasranga.tv",
    "address": "2 Bir Uttam Ziaur Rahman Road (New Airport Road), Banani, Dhaka-1213."
  },
  {
    "company_name": "Mohona TV",
    "category": "Media",
    "email": "info@mohona.tv",
    "phone_mobile": "+88-02-48034922, 48036157",
    "web": "www.mohona.tv",
    "address": "House # 08, Road # 04, Section # 07 Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "My TV",
    "category": "Media",
    "email": "admin@mytvbd.tv",
    "phone_mobile": "+88-02-55128896",
    "web": "www.mytvbd.tv",
    "address": "MyTV Bhaban, 155 East Ulan, Hatirjheel, Dhaka, Bangladesh"
  },
  {
    "company_name": "NEXUS 24",
    "category": "Media",
    "email": "online@nexus24bd.tv",
    "phone_mobile": "+88-02-5536652-55, 55036651",
    "web": "www.nexus24bd.tv",
    "address": "Plot # 371/A, Block # D, Bashundhara R/A, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Nexus Television",
    "category": "Media",
    "email": "ask@nexusbd.tv",
    "phone_mobile": "+88 09666881122",
    "web": "www.nexusbd.tv",
    "address": "Plot # SW (H) 05, Road # 2, Gulshan-I Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "NTV",
    "category": "Media",
    "email": "info@ntvbd.com",
    "phone_mobile": "+88-02-55012281-5",
    "web": "www.ntvbd.com",
    "address": "BSEC Building (6th Floor), 102, Kazi Nazrul Islam Avenue, Karwan Bazar, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "Peoples Radio 91.6 FM",
    "category": "Media",
    "email": "peoplesradiolimited@gmail.com",
    "phone_mobile": "+88-02-47123345, +88 01922101009",
    "web": "",
    "address": "56-57, PFI Tower, Diluksha C/A Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Radio Aamar 88.4 FM",
    "category": "Media",
    "email": "shakerquaderchowdhury@gmail.com",
    "phone_mobile": "+88-02-9893666",
    "web": "",
    "address": "Water Front (1st Floor), House # 28 Road # 130, Gulshan-I, Dhaka-1212"
  },
  {
    "company_name": "RADIO AMBER 102.4 FM",
    "category": "Media",
    "email": "info@radiomber.com",
    "phone_mobile": "+88 09611000333",
    "web": "www.radiomber.com",
    "address": "Navana Tower (13th Floor) 45 Gulshan South C/A Circle-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Radio Bhumi 92.8 FM",
    "category": "Media",
    "email": "radiobhumi@gmail.com",
    "phone_mobile": "+88-02-8891939",
    "web": "www.radiobhumi.fm",
    "address": "40, Shahid Tajuddin Ahmed Avenue Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Radio Ekattor 98.4 FM",
    "category": "Media",
    "email": "radioekattor@outlook.com",
    "phone_mobile": "+88 01617167171",
    "web": "www.ekattor.fm",
    "address": "63, Kakrail, Pioneer Road Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Radio Today FM 89.6",
    "category": "Media",
    "email": "news@radiotodaybd.fm, info@radiotodaybd.fm",
    "phone_mobile": "+88-02-9821027, 9821486",
    "web": "www.radiotodaybd.fm",
    "address": "34, Kemal Ataturk Avenue, Awal Centre, 19/F, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Radio Padma 99.2 FM",
    "category": "Media",
    "email": "radiopadma@gmail.com, News.radiopadma@gmail.com",
    "phone_mobile": "+88-02-58867001, 58867348, 01755575888, 01755575666",
    "web": "www.radiopadma.com",
    "address": "Holding # 418/1, Ward # 25, Monafer Mor, Rajshahi-6204, Bangladesh"
  },
  {
    "company_name": "Asian Automobiles Limited",
    "category": "Tyre Importer",
    "email": "info@pirelli.com.bd",
    "phone_mobile": "+88 01400440440",
    "web": "www.pirelli.com.bd",
    "address": "277, Tejgaon I/A, Dhaka-1208."
  },
  {
    "company_name": "BT Limited",
    "category": "Tyre Importer",
    "email": "info-yokohamatirebd.com",
    "phone_mobile": "+88-02-8333673-5, 5831152",
    "web": "www.yokohamatirebd.com",
    "address": "Hometown (Level-10), 87, New Eskaton Road, Dhaka-1000."
  },
  {
    "company_name": "Enam Motors",
    "category": "Tyre Importer",
    "email": "info@enammotors.com",
    "phone_mobile": "+88-02-22338963, +88 01678621900",
    "web": "www.enammotors.com",
    "address": "Corporate Office: Navana F.H. Solaries Tower, 198, Shahid Syed Nazrul Islam Sharani, 65, Bijoy Nagar, Dhaka-1000."
  },
  {
    "company_name": "HNS Automobiles",
    "category": "Tyre Importer",
    "email": "info@hnsautomobiles.com",
    "phone_mobile": "+88-02-55045148-9, 01708456014",
    "web": "www.hnsautomobiles.com",
    "address": "Police Plaza Concord, Tower-1, Level-7, Plot # 2, Road # 144, Gulshan C/A, Dhaka-1212."
  },
  {
    "company_name": "Mega International Trading Co.",
    "category": "Tyre Importer",
    "email": "megagroupbd.com@gmail.com",
    "phone_mobile": "+88 01715488492",
    "web": "www.megagroupbd.com",
    "address": "Dhaka Office: 108, Shaheed Tajuddin Ahmed Sarani, Bara Mogbazar, Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "Neera Group",
    "category": "Tyre Importer",
    "email": "info@neeragroupbd.com",
    "phone_mobile": "+88-02-226639558",
    "web": "www.neeragroupbd.com",
    "address": "96, Kazi Alauddin Road, Dhaka-1000."
  },
  {
    "company_name": "Panna Distribution Ltd.",
    "category": "Tyre Importer",
    "email": "",
    "phone_mobile": "+88-02-58613639, 01963607125, 01963607373",
    "web": "www.pannagroupbd.com",
    "address": "Corporate Office: Panna Tower, Hazaribagh Beribadh (Opposite of Hazaribagh Fire Service & Sheikh Rasel School), Dhaka-1211."
  },
  {
    "company_name": "SWAN International (Pvt.) Ltd.",
    "category": "Tyre Importer",
    "email": "info@swanixis.com.bd",
    "phone_mobile": "+88-02-22220458",
    "web": "www.swanixis.com.bd",
    "address": "Head Office: Shanabuddin Irade Center, 1230, D.T. Road, Dhanalipara Kadamtali, Chattogram-4100. Dhaka Office: Navana Rahim Ardent, Suite # C-2 (2nd Floor) 185, Shahid Syed Nazrul Islam Sharani, Bijoynagar Kakrail, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Bangladesh Academy of Medical & Diagnostic Ultrasonography (BAMDU)",
    "category": "Medical Training",
    "email": "bamdu.ultrasound@gmail.com",
    "phone_mobile": "01711222326, 01726762944",
    "web": "www.bamdu-bd.com",
    "address": "33-33/1 (2nd Floor), Green Road, Dhanmondi, Dhaka-1205."
  },
  {
    "company_name": "Afjal Sharif Umbrella",
    "category": "Umbrella Manufacturer",
    "email": "",
    "phone_mobile": "+88 01956949756",
    "web": "",
    "address": "79, Moulvibazar, Billal Market Imamganj, Chawkbazar, Dhaka-1211."
  },
  {
    "company_name": "Atlas Umbrella Factory BD Ltd.",
    "category": "Umbrella Manufacturer",
    "email": "tugrulnazim@gmail.com",
    "phone_mobile": "+88 01914210399",
    "web": "",
    "address": "139/1 Chawk Mugaltoli, Imamganj Mor, Dhaka-1211."
  },
  {
    "company_name": "King Umbrella",
    "category": "Umbrella Manufacturer",
    "email": "kingumbrella.bd@gmail.com",
    "phone_mobile": "01716597203, 01600000807",
    "web": "www.kingumbrella.bd.com",
    "address": "Shop # 54, 2nd Floor, Moulvibazar Trade Center, Imamganj, Chawkbazar, Dhaka-1211, Bangladesh"
  },
  {
    "company_name": "Mannan Umbrella",
    "category": "Umbrella Manufacturer",
    "email": "mannanchata70@gmail.com",
    "phone_mobile": "01786656140",
    "web": "www.mannanumbrella.bd.com",
    "address": "Shop # 40, Under Ground, Moulvibazar, Trade Center, Chawk Bazar, Dhaka-1211."
  },
  {
    "company_name": "Moon Umbrella",
    "category": "Umbrella Manufacturer",
    "email": "",
    "phone_mobile": "+88 01711666960",
    "web": "www.moonumbrella.com",
    "address": "Office: 144 Mitford Road, Al-Falah Market (1st Floor), Dhaka-1100, Bangladesh Showroom: 146-148, Mitford Road, Bismillah Tower (2nd Floor), 42/B, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Sankar Chata",
    "category": "Umbrella Manufacturer",
    "email": "sankar.saha115@gmail.com, sankar_saha1@yahoo.com, urainb.bd@gmail.com",
    "phone_mobile": "+88 01745156155",
    "web": "www.sankarchata.com",
    "address": "01, Moulvibazar, Baitul Aziz Market (Under Imamganj National Bank) Chawkbazar, Dhaka-1211"
  },
  {
    "company_name": "AL Hajj Travel Trade",
    "category": "Travel Agency",
    "email": "www.hajjtraveltrade@yahoo.com",
    "phone_mobile": "01819286653",
    "web": "www.hajtagent.com",
    "address": "A.B. Super Market (2nd Floor), Azampur, Room # 35/Ka, Plot # 60, Road # 2, Sector # 3, Uttara C/A, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Al Min Trading & Tours",
    "category": "Travel Agency",
    "email": "aminulh7@gmail.com",
    "phone_mobile": "01708528869",
    "web": "www.amintravels.com.bd",
    "address": "Al Min Trading & Tours 67/1, 68 Naya Paltan, Paltan China Town (Level-19, East Tower) Suite-E20/4&5, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD.",
    "category": "Elevator Services",
    "email": "",
    "phone_mobile": "",
    "web": "",
    "address": "(A Concern of SIGMA Elevator Group)"
  },
  {
    "company_name": "GREEEN MOUNTAIN BLDG.",
    "category": "Safety/Security",
    "email": "info@greenelectrical.com",
    "phone_mobile": "+88 01713292000, 01816334225",
    "web": "www.greenelectrical.com",
    "address": "Saturn Roller Chain Shop No. 15, Madani Avenue (10th Floor), Motijheel, Dhaka-1212"
  },
  {
    "company_name": "Babus Salam Sky Airways",
    "category": "Travel Agency",
    "email": "bssa069@gmail.com",
    "phone_mobile": "01731-880881, 01713-423108",
    "web": "",
    "address": "Navanah Rahim Ardent, Flat # C/3 (3rd Floor), 185 Shahid Sayed Nazrul Islam Sarani, Kakrail (Bijoynagar More), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ehsan Air Travels",
    "category": "Travel Agency",
    "email": "ehsanairtravels@yahoo.com",
    "phone_mobile": "+8809613150150",
    "web": "www.ehsantravels.com",
    "address": "Al-Razi Complex (6th Floor), Suite # D-604, 166-167 Shaheed Syed Nazrul Islam Sarani, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Haramain Hajj Umrah Ltd.",
    "category": "Travel Agency",
    "email": "info@haramainbd.com",
    "phone_mobile": "01711289121, 01616121130, 01977026439",
    "web": "www.haramainbd.com",
    "address": "Paltan China Town, East Tower-Suite #17/3, Level-16, 68 Naya Paltan, VIP Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Hijaz Hajj & Umrah Kafela",
    "category": "Travel Agency",
    "email": "hijazahijnumrah@gmail.com",
    "phone_mobile": "+88 01320587181",
    "web": "www.hijazahijnumrah.com",
    "address": "55, Azad Centre, Suite # 9/A, 9th Floor, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Jetway Hajj Group",
    "category": "Travel Agency",
    "email": "jetwaybdb@gmail.com",
    "phone_mobile": "+88-02-41052567, 41052568, +88 01795827700",
    "web": "www.jetwayhajigroup.com",
    "address": "4th Floor, Noakhali Tower 55/B Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Khadem Hajj Group",
    "category": "Travel Agency",
    "email": "info@khademhajjumrah.com",
    "phone_mobile": "01964001777, 01872606264",
    "web": "www.khademhajjumrah.com",
    "address": "Head Office: VIP Tower (1st Floor), 51/1, VIP Road Nayapaltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "K.M Travel & Tours",
    "category": "Travel Agency",
    "email": "kmt868@gmail.com",
    "phone_mobile": "+88 01713020077",
    "web": "www.kmtravelsandtoursbd.com",
    "address": "46/A, Purana Paltan (3rd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Labbaik Hajj Services",
    "category": "Travel Agency",
    "email": "labbaikhajservices898@yahoo.com",
    "phone_mobile": "01715098876, 01615098876",
    "web": "www.labbaikhajservices.com",
    "address": "KR Plaza, 31 Purana Paltan (3rd Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Madani Hajj Travels & Tours",
    "category": "Travel Agency",
    "email": "madanihajjtravels1980@gmail.com",
    "phone_mobile": "+88 01322884980",
    "web": "www.madanihajjbd.com",
    "address": "65, S.J Jahanara Imam Sharani Spectra Maqsood Tower Ground Floor, Elephant Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Noor Hajj Travels & Tours",
    "category": "Travel Agency",
    "email": "noorhajj1083@gmail.com",
    "phone_mobile": "01712510726, 01636677880",
    "web": "www.noorhajjbd.com",
    "address": "106/Ka Cosmic Tower (5th Floor), Naya Paltan, Box Culvert Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Safar Hajj Kafela",
    "category": "Travel Agency",
    "email": "safarhajjkafela@gmail.com",
    "phone_mobile": "+88 01714351359",
    "web": "www.safarhajjkafela.com",
    "address": "K.R Plaza, 31 Purana Paltan Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Salam-Abad Hajj Kafela",
    "category": "Travel Agency",
    "email": "saliancebdtravels@gmail.com",
    "phone_mobile": "+88-02-223327898, +88 01811120112",
    "web": "www.hajj.saliancebd.com",
    "address": "House # 246/2, West Katusar, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Shepherds Hajj & Umrah Services",
    "category": "Travel Agency",
    "email": "shephersdbsbd2014@gmail.com",
    "phone_mobile": "+88-02-48112087, 01705564674, 01618855432",
    "web": "www.shephersd-bd.com",
    "address": "Hossain Housing Society, 17-18 Mirpur Road, Shyamoli, Dhaka-1207."
  },
  {
    "company_name": "Suma International Services",
    "category": "Travel Agency",
    "email": "sumadac@yahoo.com",
    "phone_mobile": "01705444041, 01705444042",
    "web": "www.sumabd.com",
    "address": "Rupayan Taj (2nd Floor), 1/1 Naya Paltan (Box Culvert Road), Dhaka."
  },
  {
    "company_name": "Zilmajj Group",
    "category": "Travel Agency",
    "email": "zilmajjgroup@gmail.com",
    "phone_mobile": "01711165606, 01715595991",
    "web": "www.zilmajjgroup.com",
    "address": "51/1, VIP Tower, Level-5, VIP Road Naya Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ahsanullah University of Science and Technology",
    "category": "University (Private)",
    "email": "info@aust.edu, regr@aust.edu",
    "phone_mobile": "+88-02-8870422, 8870415-16, +88 01773500054",
    "web": "www.aust.edu",
    "address": "141 & 142, Love Road, Tejgaon I/A Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "American International University -Bangladesh (AIUB)",
    "category": "University (Private)",
    "email": "info@aibu.edu",
    "phone_mobile": "+88-02-8414046-9, 8414050, 01844115000, 01886566666, 01844515912",
    "web": "www.aibu.edu",
    "address": "408/1 (Old KA 66/1), Kuratoli, Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Anwer Khan Modern University (AKMU)",
    "category": "University (Private)",
    "email": "info@akmu.edu.bd",
    "phone_mobile": "+88-02-48957276-85, +88 01975214261-3",
    "web": "www.akmu.edu.bd",
    "address": "House # 6, Gareeb-E-Nawaz Road Sector # 11, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Bangladesh University (BU)",
    "category": "University (Private)",
    "email": "admission@bu.edu.bd",
    "phone_mobile": "01755559301, 01755559320",
    "web": "www.bu.edu.bd",
    "address": "Permanent Campus: 5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Canadian University of Bangladesh",
    "category": "University (Private)",
    "email": "admissions@cub.edu.bd, ssw@cub.edu.bd",
    "phone_mobile": "+88-02-226602580-6, +88 01707070282, +88 01707070280-4",
    "web": "www.cub.edu.bd",
    "address": "City Campus: 201/1, Pragati Sharani (Bir Uttam Rafiqul Islam Avenue) Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "East West University",
    "category": "University (Private)",
    "email": "info@ewubd.edu, Admissions@ewubd.edu",
    "phone_mobile": "02-55046678, 09666775577, 01755587224",
    "web": "www.ewubd.edu",
    "address": "A/2, Jahurul Islam Avenue Jahurul Islam City, Atabnagar Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "ASA University Bangladesh",
    "category": "University (Private)",
    "email": "info@asaub.edu.bd",
    "phone_mobile": "+88-02-22246311, 222246308, 222246298, +88 01713148578, +88 01678013170",
    "web": "www.asaub.edu.bd",
    "address": "ASA Tower, 23/3, Bir Uttam A.N.M Nuruzzaman Sarak, Shyamoli, Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Bangladesh University of Business and Technology (BUBT)",
    "category": "University (Private)",
    "email": "info@bubt.edu.bd",
    "phone_mobile": "+88-02-48036351, 48036352, 48036353, 01810033740, 01810033731, 01810033702",
    "web": "www.bubt.edu.bd",
    "address": "Rupnagar, Mirpur-2, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "City University",
    "category": "University (Private)",
    "email": "",
    "phone_mobile": "+88-02-44819070, 44819050, 09643-234234, 01854640476, 01854640491, 01819831111, 01778149097",
    "web": "www.cityuniversity.ac.bd",
    "address": "Khagan, Ashulia, Birulia, Savar, Dhaka-1343, Bangladesh"
  },
  {
    "company_name": "Eastern University",
    "category": "University (Private)",
    "email": "admission@easternuni.edu.bd",
    "phone_mobile": "09602666651, 09602666652, 01844169651, 01844169659, 01844169660, 01741300002",
    "web": "www.easternuni.edu.bd",
    "address": "Road # 6, Block # B, Ashulia Model Town, Akran, Savar, Dhaka, Bangladesh"
  },
  {
    "company_name": "Asian University of Bangladesh",
    "category": "University (Private)",
    "email": "info@aub.ac.bd",
    "phone_mobile": "+88 01678664413-19",
    "web": "www.aub.ac.bd",
    "address": "Bangabandhu Road, Tongabari Ashulia, Dhaka, Bangladesh"
  },
  {
    "company_name": "BGMEA University of Fashion & Technology (BUFT)",
    "category": "University (Private)",
    "email": "info@bufut.edu.bd",
    "phone_mobile": "+880 9606-808080, 950986, 950987, 01810063355, 01648485104",
    "web": "www.bufut.edu.bd",
    "address": "Nishatnagar, Turag, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Daffodil International University",
    "category": "University (Private)",
    "email": "admission@daffodilvarsity.edu.bd",
    "phone_mobile": "+88-02-22441833, 22441834, 09617901233, 09617901212",
    "web": "www.daffodilvarsity.edu.bd",
    "address": "Daffodil Smart City (DSC), Birulia Savar, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "European University of Bangladesh (EUB)",
    "category": "University (Private)",
    "email": "info@eub.edu.bd",
    "phone_mobile": "01968774927, 01968774933, 01968774930-32",
    "web": "www.eub.edu.bd",
    "address": "2/4, Gabtoli, Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Bangladesh Islamic University",
    "category": "University (Private)",
    "email": "info@biu.ac.bd",
    "phone_mobile": "+88 09666711456, 01915492003, 5,7,8",
    "web": "www.biu.ac.bd",
    "address": "Plot # B-51, Avenue # 03, Green Model Town, Manda, Mugda, Dhaka-1214, Bangladesh"
  },
  {
    "company_name": "BRAC University",
    "category": "University (Private)",
    "email": "info@bracu.ac.bd",
    "phone_mobile": "+88 09638464646",
    "web": "www.bracu.ac.bd",
    "address": "Kha-224, Bir Uttam Rafiqul Islam Avenue, Merul Badda, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Darul Ihsan University",
    "category": "University (Private)",
    "email": "info@diuedubdpcc.com",
    "phone_mobile": "0175770280, 01706044868",
    "web": "www.diuedubdpcc.com",
    "address": "Permanent Campus: Darul Ihsan Complex, Ganakbari, Dharmshona, Ashulia, Savar, Dhaka."
  },
  {
    "company_name": "Fareast International University (FIU)",
    "category": "University (Private)",
    "email": "info@fiu.edu.bd, admission@fiu.edu.bd",
    "phone_mobile": "+88-02-222291453, +88 01986810610",
    "web": "www.fiu.edu.bd",
    "address": "Permanent Campus: Plot # 1&2, Road # 1&2, Sector # 16/1, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Gono Bishwabidyalay",
    "category": "University (Private)",
    "email": "admin@gonouniversity.edu.bd",
    "phone_mobile": "01950003312, 01950003313, 01950003314, 01950003311",
    "web": "www.gonouniversity.edu.bd",
    "address": "Nolam, P.O. Mirzanagar via Savar Cantonment, Ashulia, Savar, Dhaka-1344, Bangladesh"
  },
  {
    "company_name": "IBAIS University",
    "category": "University (Private)",
    "email": "registrar@ibaisuniversity.org",
    "phone_mobile": "+88-02-58923899, 58915314, 01797765691, 0179776592",
    "web": "www.ibaisuniversity.org",
    "address": "House # 16, Road # 5, Sector # 4 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Independent University, Bangladesh",
    "category": "University (Private)",
    "email": "info@iub.edu.bd",
    "phone_mobile": "+88-02-8431645-53, 8432065-76, 09612939393",
    "web": "www.iub.ac.bd",
    "address": "Plot # 16, Block # B, Aftabuddin Ahmed Road, Bashundhara R/A, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "International Standard University (ISU)",
    "category": "University (Private)",
    "email": "info@isu.ac.bd",
    "phone_mobile": "+8809613100100, 01313037070, 01313037071, 01313037078, 01313400600",
    "web": "www.isu.ac.bd",
    "address": "69 Mohakhali C/A, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "International University of Business Agriculture and Technology (IUBAT)",
    "category": "University (Private)",
    "email": "info@iubat.edu",
    "phone_mobile": "+88-02-55091801-5, 01714014933, 01810030041-9, 01325080581-9",
    "web": "www.iubat.edu",
    "address": "4 Embankment Drive Road, Sector # 10, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Northern University Bangladesh",
    "category": "University (Private)",
    "email": "info@nub.ac.bd",
    "phone_mobile": "01755514661, 01755514650, 01755514651, 01755514652",
    "web": "www.nub.ac.bd",
    "address": "Permanent Campus: 111/2 Kawlar Jame Mosjid Road Ashkona (Near Hajj Camp) Dakshinkhan, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "North South University",
    "category": "University (Private)",
    "email": "registrar@northsouth.edu",
    "phone_mobile": "+88-02-55668200",
    "web": "www.northsouth.edu",
    "address": "Bashundhara, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Notre Dame University Bangladesh",
    "category": "University (Private)",
    "email": "info@ndub.edu.bd",
    "phone_mobile": "+88-02-41070719, 41070720, 01781910129, 01817453334, 01300683897, 01708661555",
    "web": "www.ndub.edu.bd",
    "address": "2/A, Arambagh, Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Presidency University",
    "category": "University (Private)",
    "email": "info@pu.edu.bd, registrar@pu.edu.bd",
    "phone_mobile": "+88-02-55052194-9, +88 01766554433",
    "web": "www.presidency.edu.bd",
    "address": "Gulshan Campus: House # 11/A, Road # 92, Gulshan-2 Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Primea University",
    "category": "University (Private)",
    "email": "info@primeasia.edu.bd, admission@primeasia.edu.bd",
    "phone_mobile": "+88-02-222275501, 222275680, 01958-665500, 01958-665501, 01958-665502",
    "web": "www.primeasia.edu.bd",
    "address": "Admission Office: Star Tower, Ground Floor, 12, Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Prime University",
    "category": "University (Private)",
    "email": "info@primeuniversity.edu.bd",
    "phone_mobile": "+88-02-48034888, +88 01710996196, +88 01939425030, +88 01687191986, +88 01866207160",
    "web": "www.primeuniversity.edu.bd",
    "address": "114/116 Mazar Road, Mirpur-1 Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Queens University",
    "category": "University (Private)",
    "email": "info@queensuniversity.edu.bd, queensuniversitybd@gmail.com",
    "phone_mobile": "+88 01712657152, +88 01731444997",
    "web": "www.queensuniversity.edu.bd",
    "address": "House # 43, Block # E, Road # 17A Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Royal University of Dhaka (RUD)",
    "category": "University (Private)",
    "email": "info@royal.edu.bd",
    "phone_mobile": "+88-02-223314603, 223314607, +88 01332544317, +88 01332544319",
    "web": "www.royal.edu.bd",
    "address": "Plot # 404, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Shanto-Mariam University of Creative Technology",
    "category": "University (Private)",
    "email": "info@smuct.ac.bd",
    "phone_mobile": "09638177177, +88 01969904000",
    "web": "www.smuct.ac.bd",
    "address": "Plot # 06, Avenue # 06, Sector # 17/H-1, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Sonargaon University",
    "category": "University (Private)",
    "email": "registrar@sue.edu.bd, mollahmasud.ch@gmail.com",
    "phone_mobile": "+88-02-41010352, 01955529725, 01780330055, 01780220099, 01955529721, +88-02-222292134, 01971337777, 01955529724, +88 01955529722, +88 01955529710",
    "web": "www.su.edu.bd",
    "address": "Green Road Campus: 147/I, Green Road, Tejgaon, Dhaka-1215, Bangladesh; Mohakhali Campus: GP Ja-146, Wireless Gate, Mohakhali, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Southeast University",
    "category": "University (Private)",
    "email": "admission@seu.edu.bd",
    "phone_mobile": "+88-02-2266036107, +88 01766348518, +88 01632261081",
    "web": "www.seu.edu.bd",
    "address": "252, Tejgaon I/A, Dhaka-1208, Bangladesh"
  },
  {
    "company_name": "Stamford University Bangladesh",
    "category": "University (Private)",
    "email": "admission@stamford.university, registrar@stamforduniversity.edu.bd",
    "phone_mobile": "09613626262, 41032671-81, +88 01321143632, +88 01321143633, +88 01321143634, +88 01321143635",
    "web": "www.stamforduniversity.edu.bd",
    "address": "Siddeswari Campus: 51, Siddeswari Road (Ramna), Dhaka-1217, Bangladesh"
  },
  {
    "company_name": "The Millennium University",
    "category": "University (Private)",
    "email": "info@themillenniumuniversity.edu.bd",
    "phone_mobile": "+88-02-48320836, 48310323, +88 01713185510",
    "web": "www.themillenniumuniversity.edu.bd",
    "address": "5 Momenbagh, Dhaka 1217, Bangladesh"
  },
  {
    "company_name": "The People's University of Bangladesh",
    "category": "University (Private)",
    "email": "thepeopleuniversity@yahoo.com",
    "phone_mobile": "+88 01685227772, +88 01766621386",
    "web": "www.pub.ac.bd",
    "address": "Dhaka Campus: 3/2, Block-A, Asad Avenue, Mohammadpur, Dhaka-1207 Bangladesh; Narsingdi Campus: Sristigar, Shibpur, Narsingdi, Bangladesh"
  },
  {
    "company_name": "University of Information Technology & Sciences (UITS)",
    "category": "University (Private)",
    "email": "info@uits.edu.bd",
    "phone_mobile": "+8809678008487, 01939915209, 01713487079",
    "web": "www.uits.edu.bd",
    "address": "Permanent Campus: Holding # 190, Road # 5, Block # J, Baridhara, Maddha Nayanagar, Vatara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Victoria University of Bangladesh",
    "category": "University (Private)",
    "email": "info@vub.edu.bd",
    "phone_mobile": "+88 01819203691-2",
    "web": "www.vub.edu.bd",
    "address": "58/11/A, Panthapath, Dhaka-1205."
  },
  {
    "company_name": "World University of Bangladesh",
    "category": "University (Private)",
    "email": "info@wub.edu.bd",
    "phone_mobile": "+88 09643204060, 01969945555, 01955384008",
    "web": "www.wub.edu.bd",
    "address": "Avenue G & Lake Drive Road, Sector # 17/H, Uttara, Dhaka-1230."
  },
  {
    "company_name": "East Delta University",
    "category": "University (Private)",
    "email": "",
    "phone_mobile": "+88 09638144413, 01311104531, 01311104534",
    "web": "",
    "address": "Abdullah Al Noman Road, Noman Society, East Nasirabad, Khulshi, Chattogram-4209."
  },
  {
    "company_name": "International Islamic University Chittagong",
    "category": "University (Private)",
    "email": "info@iuc.ac.bd",
    "phone_mobile": "+88-02-334461900-7",
    "web": "www.iuc.ac.bd",
    "address": "Kumira, Chattogram-4318."
  },
  {
    "company_name": "University of Liberal Arts Bangladesh",
    "category": "University (Private)",
    "email": "info@ulab.edu.bd",
    "phone_mobile": "+88-02-223328001-6, 223361301, 223361255, 01730082197, 01713091936",
    "web": "www.ulab.edu.bd",
    "address": "688, Beribadh Road, Mohammadpur Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Global University Bangladesh",
    "category": "University (Private)",
    "email": "info@globaluniversity.edu.bd",
    "phone_mobile": "+88 01700569030",
    "web": "www.globaluniversity.edu.bd",
    "address": "BN Tower, Natullahabad, Barishal."
  },
  {
    "company_name": "University of Scholars",
    "category": "University (Private)",
    "email": "info@ius.edu.bd",
    "phone_mobile": "+88 01844075476",
    "web": "www.ius.edu.bd",
    "address": "Main Campus: 40-Kemal Ataturk Avenue, Banani Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "University of South Asia",
    "category": "University (Private)",
    "email": "aminasionroom@gmail.com",
    "phone_mobile": "09614008008, 01763030636, 01686265125",
    "web": "www.southasiauni.ac.bd",
    "address": "Main Campus: Amin Bazar, Savar, Dhaka-1348, Bangladesh"
  },
  {
    "company_name": "Trust University, Barisal",
    "category": "University (Private)",
    "email": "admission@trustuniversity.edu.bd",
    "phone_mobile": "01844902012-14",
    "web": "www.trustuniversity.edu.bd",
    "address": "Ruiya, Nabagram Road, Barisal, Bangladesh"
  },
  {
    "company_name": "Port City International University",
    "category": "University (Private)",
    "email": "admission@portcity.edu.bd",
    "phone_mobile": "+88-02-33369877, 33369899, 01851120791, 01773225500",
    "web": "www.portcity.edu.bd",
    "address": "7-14, Nikunjai Housing Society South Khulshi, Chattogram. Permanent Campus: Plot # 5-1, CDA Kolpokol Residential Area, Bakalia, Chattogram."
  },
  {
    "company_name": "University of Development Alternative",
    "category": "University (Private)",
    "email": "registar@uoda.edu.bd",
    "phone_mobile": "+88-02-9145741, 01819260163, 01819280131",
    "web": "www.uoda.edu.bd",
    "address": "80, Satmosjid Road, Dhanmondi Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Uttar University",
    "category": "University (Private)",
    "email": "info@uttarainiversity.edu.bd",
    "phone_mobile": "+88-02-58952280, 58951116, 01872607360, 01872607361",
    "web": "www.uttarainiversity.edu.bd",
    "address": "Holding # 77, Beribadh Road, Turga, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Pundra University of Science & Technology",
    "category": "University (Private)",
    "email": "admin@pundrauniversity.ac.bd",
    "phone_mobile": "+88 01713377037",
    "web": "www.pundrauniversity.ac.bd",
    "address": "Rangpur Road, Gokul, Bogura."
  },
  {
    "company_name": "Premier University",
    "category": "University (Private)",
    "email": "info@puc.ac.bd",
    "phone_mobile": "+8809610828282, 01313044515-16",
    "web": "www.puc.ac.bd",
    "address": "541, O.R. Nizam Road, GEC Circle Chattogram, Bangladesh"
  },
  {
    "company_name": "Southern University Bangladesh",
    "category": "University (Private)",
    "email": "contact@southernbd.info",
    "phone_mobile": "+88 01881634452",
    "web": "www.southernbd.info",
    "address": "Main Campus: 748, O.R. Nizam Road (Opposite Royal Hospital), GEC, Chattogram."
  },
  {
    "company_name": "University of Science and Technology Chittagong (USTC)",
    "category": "University (Private)",
    "email": "admission@ustc.ac.bd",
    "phone_mobile": "+88 01810097025",
    "web": "www.ustc.ac.bd",
    "address": "Ground Floor, USTC D Block, Foy’s Lake, Zakir Hossain Road, Chattogram-4202, Bangladesh"
  },
  {
    "company_name": "Cox's Bazar International University",
    "category": "University (Private)",
    "email": "info@cbiu.ac.bd, admission@cbiu.ac.bd",
    "phone_mobile": "+88 01762686274",
    "web": "www.cbii.ac.bd",
    "address": "Kolatoli Circle, Cox's Bazar-4700, Bangladesh"
  },
  {
    "company_name": "Britannia University",
    "category": "University (Private)",
    "email": "info@britannia.edu.bd",
    "phone_mobile": "01762622220, 01762622221",
    "web": "www.britannia.edu.bd",
    "address": "Paduar Bazar, Bishwa Road Cumilla, Bangladesh"
  },
  {
    "company_name": "Comilla University",
    "category": "University (Private)",
    "email": "registrar@cou.ac.bd",
    "phone_mobile": "+88-02-33441145",
    "web": "www.cou.ac.bd",
    "address": "Administrative Building (2nd Floor) Cumilla-3506, Bangladesh"
  },
  {
    "company_name": "Feni University",
    "category": "University (Private)",
    "email": "registrar@feniuniversity.ac.bd",
    "phone_mobile": "+88-02-33447194, +88 01865041804",
    "web": "www.feniuniversity.ac.bd",
    "address": "1845, Barahipur, Trunk Road Feni-3900, Bangladesh"
  },
  {
    "company_name": "German University Bangladesh",
    "category": "University (Private)",
    "email": "info@gub.edu.bd",
    "phone_mobile": "+88-02-224495059, +88 01767600222",
    "web": "www.gub.edu.bd",
    "address": "38 T & T Road, Telepara, Chandana Chowrasta, Joydebpur, Gazipur-1702, Bangladesh"
  },
  {
    "company_name": "Ishakha International University Bangladesh (IIUB)",
    "category": "University (Private)",
    "email": "info@ishakha.edu.bd",
    "phone_mobile": "+88 01776181318",
    "web": "www.ishakha.edu.bd",
    "address": "Nilganj Road, 461 Sholakia Road Kishoreganj-2300, Bangladesh"
  },
  {
    "company_name": "Hamdard University Bangladesh",
    "category": "University (Private)",
    "email": "info@hamdarduniversity.edu.bd",
    "phone_mobile": "+88 01776439000",
    "web": "www.hamdarduniversity.edu.bd",
    "address": "Hamdard City of Science, Education & Culture, Gazaria, Munshiganj-1510, Bangladesh"
  },
  {
    "company_name": "Green University of Bangladesh (GUB)",
    "category": "University (Private)",
    "email": "admission@green.edu.bd",
    "phone_mobile": "+880 9614482482, 01324713503, 01324713502",
    "web": "www.green.edu.bd",
    "address": "Purbachal American City, Kanchan Rupganj, Narayanganj-1461."
  },
  {
    "company_name": "State University of Bangladesh",
    "category": "University (Private)",
    "email": "",
    "phone_mobile": "+88-02-58151782-4, 09613782338, 01766661210, 01766661555, 01766663557, 01766663558",
    "web": "www.sub.edu.bd",
    "address": "South Purbachal, Kanchan Rupganj, Narayanganj-1461, Bangladesh"
  },
  {
    "company_name": "Teesta University",
    "category": "University (Private)",
    "email": "teestaaniversity@gmail.com",
    "phone_mobile": "01894402222, 01894403333",
    "web": "www.teestaaniversity.ac.bd",
    "address": "Modern More, R K Road Rangpur-5404, Bangladesh"
  },
  {
    "company_name": "Leading University",
    "category": "University (Private)",
    "email": "info@lus.ac.bd",
    "phone_mobile": "+88 01313084499",
    "web": "www.lus.ac.bd",
    "address": "Ragibnagar, South Surma Sylhet-3112, Bangladesh"
  },
  {
    "company_name": "Metropolitan University",
    "category": "University (Private)",
    "email": "info@metrouni.edu.bd",
    "phone_mobile": "+88-02-996642907-09, 01313050044, 01313050066",
    "web": "www.metrouni.edu.bd",
    "address": "Bateshawar, Sylhet-3104, Bangladesh"
  },
  {
    "company_name": "Jagannath University",
    "category": "University (Public)",
    "email": "info@jnu.ac.bd",
    "phone_mobile": "+88-02-9534255",
    "web": "www.jnu.ac.bd",
    "address": "9-10, Chittaranjan Avenue, Dhaka."
  },
  {
    "company_name": "Jahangirnagar University",
    "category": "University (Public)",
    "email": "registrarju@gmail.com, registrar@juniv.edu",
    "phone_mobile": "+88-02-224491040",
    "web": "www.juniv.edu",
    "address": "New Registrar Building (1st Floor) Savar, Dhaka-1342, Bangladesh"
  },
  {
    "company_name": "Shere-en-Bangla Agricultural University",
    "category": "University (Public)",
    "email": "info@sau.edu.bd",
    "phone_mobile": "+88-02-44814020",
    "web": "www.sau.edu.bd",
    "address": "Shere-en-Bangla Nagar, Dhaka-1207."
  },
  {
    "company_name": "North East University Bangladesh",
    "category": "University (Private)",
    "email": "info@neub.edu.bd",
    "phone_mobile": "+88-02-996631220-2, +88 01755566994",
    "web": "www.neub.edu.bd",
    "address": "Tellihoor, Sheikhghat, Sylhet-3100."
  },
  {
    "company_name": "University of Dhaka",
    "category": "University (Public)",
    "email": "vcoffice@du.ac.bd, registrar@du.ac.bd",
    "phone_mobile": "+88 09666911463",
    "web": "www.du.ac.bd",
    "address": "Administrative Building (Ground Floor), Dhaka-1000."
  },
  {
    "company_name": "Chandpur Science and Technology University",
    "category": "University (Public)",
    "email": "info@cstu.ac.bd",
    "phone_mobile": "+88-02-41090771",
    "web": "www.cstu.ac.bd",
    "address": "Holding # 0937-02, Kohilashadi, Wapda Gate, Cumilla Road, Chandpur"
  },
  {
    "company_name": "Chattogram Veterinary and Animal Sciences University",
    "category": "University (Public)",
    "email": "registrar@cvasu.ac.bd",
    "phone_mobile": "+88-02-334466153",
    "web": "www.cvasu.ac.bd",
    "address": "Khulshi, Chattogram-4225."
  },
  {
    "company_name": "Alpha Technologies Ltd.",
    "category": "Electronics/Power",
    "email": "info@alphatech.com.bd, alphatech1997@gmail.com",
    "phone_mobile": "01715954985, 01678712601",
    "web": "www.alphatech.com.bd",
    "address": "House # 21, Road # 7, PC Culture Housing, Block-Kha, Adabar, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Apt Powers System",
    "category": "Electronics/Power",
    "email": "aptpowersbd@gmail.com, info@aptpowers.com",
    "phone_mobile": "01682846785, 01733436965",
    "web": "www.aptpowers.com",
    "address": "173/3, Arambag, Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Ark Power Ltd.",
    "category": "Electronics/Power",
    "email": "info@arkpowerltd.com.bd",
    "phone_mobile": "01678090037, 01678090036",
    "web": "www.arkpowerltd.com.bd",
    "address": "12B Ataturk Tower, 22 Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Astute Electronics",
    "category": "Electronics/Power",
    "email": "bdastute@gmail.com",
    "phone_mobile": "+88 01818212742",
    "web": "www.bdastute.com",
    "address": "House # 10, Road # 01, Block # A, Section-11 (1st & 2nd Floor), Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Best Power Engineering",
    "category": "Electronics/Power",
    "email": "bestpowerbpe@gmail.com",
    "phone_mobile": "+88-02-58957147, 01748196334, 01914198222",
    "web": "",
    "address": "Head Office: House # 03, Road # 20, Sector # 04 Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Delta Electronics",
    "category": "Electronics/Power",
    "email": "info@delta.com.bd",
    "phone_mobile": "+88 01977093000",
    "web": "www.delta.com.bd",
    "address": "House # 183/5, Road # 2, Block-A Mirpur-13 Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Dream Power Bangladesh",
    "category": "Electronics/Power",
    "email": "dreampowerbd@gmail.com, sales@dreampowerbd.com",
    "phone_mobile": "+88-02-58051184, +88 01748002954",
    "web": "www.dreampowerbd.com",
    "address": "House # 65, Road # 4, Block # B Mirpur-12, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "DRS Electronics",
    "category": "Electronics/Power",
    "email": "info@drselectronicsbd.com, drselectronics.bd@gmail.com",
    "phone_mobile": "01911712879, 01999026950",
    "web": "www.drselectronicsbd.com",
    "address": "House # 10, Road # 05, Block # A, Section-11, Mirpur, Palabhi, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Energy System Company",
    "category": "Electronics/Power",
    "email": "info@ensysco.com.bd",
    "phone_mobile": "+88 01713402744",
    "web": "www.ensysco.com.bd",
    "address": "583/C (2nd Floor), Block # C, Shahid Bakri Sharak, Khilgaon, Talitola, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Fusia Electronics",
    "category": "Electronics/Power",
    "email": "fusiabd@gmail.com, sales@fusiabd.com",
    "phone_mobile": "+88-02-44801092, 44801093, +88 01917200204, +88 01938864784",
    "web": "www.fusia.com.bd",
    "address": "Corporate Office: House # 1189/1191 (5th Floor) Road # 50 (Old) New 10, Avenue # 12 DOHS, Mirpur, Dhaka-1216, Bangladesh; Chattogram Office: Abul Monsur Bhaban (Gr. Floor), House # 57/60, Agrabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "G4 Technologies Limited",
    "category": "Electronics/Power",
    "email": "info@g4technologies.com.bd, jahid@g4technologies.com.bd",
    "phone_mobile": "+88 01776369871",
    "web": "www.g4technologies.com.bd",
    "address": "Sultana Tower, Level-10 (B), 2 Kalabagan, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Galaxy Electro Power Ltd.",
    "category": "Electronics/Power",
    "email": "galaxyelectropower@gmail.com",
    "phone_mobile": "02-47114671, 47115943, 47120406, +88 01922115150",
    "web": "www.gepl-bd.com",
    "address": "Corporate Office: 5 Rajuk Avenue, Printers Building (7th Floor), Motijheel C/A, Dhaka-1000, Bangladesh; Head Office: 219-220 Nawabpur Road, Dhaka-1100, Bangladesh"
  },
  {
    "company_name": "Giga Power Corporation",
    "category": "Electronics/Power",
    "email": "info@gigapowerbd.com",
    "phone_mobile": "+88 01678092825",
    "web": "www.gigapowerbd.com",
    "address": "Corporate Office: Fahim Villa, 4th & 5th Floor, 10/6, Pallabi, Mirpur-12, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Impress Corporation Limited",
    "category": "Electronics/Power",
    "email": "info@impress.com.bd",
    "phone_mobile": "09678566000, 01976566000, 01720566000",
    "web": "www.impress.com.bd",
    "address": "House # 183/5, Road # 2, Block-A Mirpur-13, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Innova Engineering Ltd.",
    "category": "Electronics/Power",
    "email": "info@innova-bd.net",
    "phone_mobile": "01872626372, 01852714107, 01744890824",
    "web": "www.innova-bd.net",
    "address": "House # 1/A, Road # 1/B, Nikunjaz-2 Khilkhet, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "IPS Bazar",
    "category": "Electronics/Power",
    "email": "ipsbazardhaka@gmail.com",
    "phone_mobile": "01749426789, 01816831862",
    "web": "www.ipsbazarbd.com",
    "address": "159/1, South Kamalapur, Motijheel, Dhaka, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Manufacturing",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712623346",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Patakata, Lakhankhola, Bandar, Narayanganj"
  },
  {
    "company_name": "Grameen Power Ltd.",
    "category": "Electronics/Power",
    "email": "alamin@grameenpower.com.bd, grameenpower786@gmail.com",
    "phone_mobile": "01713161783, 01552410380, 01713221192",
    "web": "www.grameenpower.com.bd",
    "address": "21/F, Mainroad, Bashhari Mohammadpur, Dhaka-1207, Bangladesh"
  },
  {
    "company_name": "Green Power Electrical & Electronics",
    "category": "Electronics/Power",
    "email": "gulzer@greenpower.com.bd",
    "phone_mobile": "01713082105, 01819251754",
    "web": "www.greenpower.com.bd",
    "address": "Sumi Tower, 12th Floor, 66 Zoo Road, Mirpur-2, Dhaka 1216, Bangladesh"
  },
  {
    "company_name": "Just Power Technology",
    "category": "Electronics/Power",
    "email": "justpowerbd@gmail.com",
    "phone_mobile": "01712348948, 01919348948",
    "web": "www.justpowerbd.com",
    "address": "House # 03, Avenue # 1, Block # B Section-10, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Lid Power Solutions Ltd.",
    "category": "Electronics/Power",
    "email": "mkt@lidpowerbd.com",
    "phone_mobile": "+88-02-44801088, +88 01711924647",
    "web": "www.lidpowerbd.com",
    "address": "House # 1152, Road # 9A, Avenue # 11, Mirpur DOHS, Mirpur, Dhaka."
  },
  {
    "company_name": "L-Tech Engineering BD Ltd.",
    "category": "Electronics/Power",
    "email": "office@ltcehengbd.com",
    "phone_mobile": "+88 01711018190",
    "web": "www.ltcehengbd.com",
    "address": "Plot # 120, Road # 03, Block-A Section-12, Mirpur, Dhaka-1216."
  },
  {
    "company_name": "Kashem Seed Company",
    "category": "Seed Company",
    "email": "",
    "phone_mobile": "+88 01715040643",
    "web": "",
    "address": "146, Siddique Bazar, Dhaka-1000"
  },
  {
    "company_name": "Krishibid Seed Limited",
    "category": "Seed Company",
    "email": "k.seed@krishibidgroup.com",
    "phone_mobile": "+88 01700729663",
    "web": "www.krishibidseed.com",
    "address": "801, Rokeya Sarani, Kazipara Mirpur, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Manik Seed Co.",
    "category": "Seed Company",
    "email": "manikseed@yahoo.com",
    "phone_mobile": "+88 01715455810",
    "web": "",
    "address": "145, Siddique Bazar, Dhaka-1000"
  },
  {
    "company_name": "Mohsin Seed Co.",
    "category": "Seed Company",
    "email": "",
    "phone_mobile": "+88 01711529903",
    "web": "",
    "address": "174, Siddique Bazar, Fulbaria, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Mollika Seed Company",
    "category": "Seed Company",
    "email": "mollikaseedbd@gmail.com",
    "phone_mobile": "01750060340, 01711665883",
    "web": "",
    "address": "145, Siddique Bazar, Dhaka-1000"
  },
  {
    "company_name": "National Agricare (NAC)",
    "category": "Seed/Agro",
    "email": "info@nationalagricare.com",
    "phone_mobile": "+88-02-223360530",
    "web": "www.nationalagricare.com",
    "address": "9 & 10, 3 Free School Street, Kathal Bagan, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Planten Agro Limited",
    "category": "Seed/Agro",
    "email": "info@plantenagro.com",
    "phone_mobile": "+88 01321230992",
    "web": "www.plantenagro.com",
    "address": "House # 43 (4th & 6th Floor), Road # 05, Sector # 13, Uttara, Dhaka-1230"
  },
  {
    "company_name": "Shawon Seed Company",
    "category": "Seed Company",
    "email": "",
    "phone_mobile": "+88 01711486752",
    "web": "",
    "address": "146, Siddique Bazar, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Shohel Rana Seed Co.",
    "category": "Seed Company",
    "email": "shohelrana_seed@yahoo.com",
    "phone_mobile": "01712108385, 01913987159",
    "web": "",
    "address": "174, Siddique Bazar, Fulbaria, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Siddiquis Seeds",
    "category": "Seed Company",
    "email": "info@siddiquisgroup.com",
    "phone_mobile": "01817141763, 01924443444",
    "web": "www.siddiquisgroup.com",
    "address": "11/A, 3/7 Main Road, Mirpur Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Supreme Seed Company Ltd.",
    "category": "Seed Company",
    "email": "info@supremeseed.net",
    "phone_mobile": "+88 01713145100",
    "web": "www.supremeseed.net",
    "address": "10, Gareb-E-Nawaz Avenue, Level-3 Sector # 13, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Toma Moseum & Uncommon Seeds",
    "category": "Seed Company",
    "email": "info@uncommonseedd.com",
    "phone_mobile": "+88 01790181018",
    "web": "www.uncommonseedd.com",
    "address": "4/S, MS Tower Haji Nagar, Sarulia Demra, Dhaka-1361, Bangladesh"
  },
  {
    "company_name": "United Seed Store",
    "category": "Seed Company",
    "email": "unitedseedstore@gmail.com",
    "phone_mobile": "+88 01903807263",
    "web": "",
    "address": "A K Complex (5th Floor), 19 Green Road, Dhaka-1205, Bangladesh"
  },
  {
    "company_name": "Brothers Seeds Co.",
    "category": "Seed Company",
    "email": "",
    "phone_mobile": "+88 01763685437",
    "web": "www.brotherssseeds.com",
    "address": "Chaudanga-Meherpur Highway Hatikata, Chuadanga-7200, Bangladesh"
  },
  {
    "company_name": "Konika Seed Company (Pvt.) Ltd.",
    "category": "Seed Company",
    "email": "konikaseed@gmail.com",
    "phone_mobile": "01842918497, 01972371662",
    "web": "www.konikaseed.com",
    "address": "Lokenathpur, Darshana Chuadanga-7221, Bangladesh"
  },
  {
    "company_name": "Kushliara Seeds",
    "category": "Seed Company",
    "email": "kushiaraseeds@gmail.com",
    "phone_mobile": "+88 01772842490",
    "web": "www.kushiaraseeds.com",
    "address": "204, Surma Tower (2nd Floor), Bondor Bazar, Sylhet, Bangladesh"
  },
  {
    "company_name": "Rafique Seeds",
    "category": "Seed Company",
    "email": "info@rafiqueseed.com",
    "phone_mobile": "01716491849, 01848045698",
    "web": "www.rafiqueseed.com",
    "address": "Holding # 1167 (Beside of Stadium) Ward # 05, Dinajpur Road, Purba Hazipara, Thakurgaon-5103"
  },
  {
    "company_name": "Alfa Trading",
    "category": "SEWING MACHINE & PARTS",
    "email": "",
    "phone_mobile": "+88 01911965012",
    "web": "",
    "address": "145, Misco Super Market (1st Floor), 4 Darus Salam Road, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Candid Dealings Limited",
    "category": "SEWING MACHINE & PARTS",
    "email": "candid@bol-online.com",
    "phone_mobile": "+88 01933339384",
    "web": "",
    "address": "102/A, Kakrail (Ground Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Esha Corporation",
    "category": "SEWING MACHINE & PARTS",
    "email": "billal@esha.com.bd",
    "phone_mobile": "+88 01978777222",
    "web": "www.esha.com.bd",
    "address": "Shop # 192, Misco Super Market, 4 Darussalam Road, Mirpur-1, Dhaka-1216, Bangladesh"
  },
  {
    "company_name": "Dhaka Stock Exchange PLC.",
    "category": "SHARE & STOCK MARKET",
    "email": "info@dse.com.bd",
    "phone_mobile": "+88-02-41040189 200",
    "web": "www.dsebd.org",
    "address": "Head Office: DSE Tower, Plot # 46, Road # 21, Nilkunja 2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Chittagong Stock Exchange PLC",
    "category": "SHARE & STOCK MARKET",
    "email": "info@cse.com.bd",
    "phone_mobile": "+88-02-333314632 3",
    "web": "www.cse.com.bd",
    "address": "Head Office: CSE Building, 1080, 5K, Mujib Road, Agrabad, Chattogram 4100, Bangladesh"
  },
  {
    "company_name": "BRAC EPL Stock Brokerage Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "info@brecp.com",
    "phone_mobile": "+88-02-22228246 48",
    "web": "www.brecp.com",
    "address": "Head & Corporate Office: Symphony (3rd Floor), 5F (1), Road # 142, Gulshan Avenue, Dhaka-1212"
  },
  {
    "company_name": "City Brokerage Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "info@citybrokerage.ltd",
    "phone_mobile": "+88 0171111111",
    "web": "www.citybrokerage.ltd",
    "address": "Registered Office: City Centre, Unit # 12A & 12B (12th Floor), Level 13, 90/1, Motijheel, C/A, Dhaka-1000"
  },
  {
    "company_name": "First Capital Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "fcs1.dhaka@gmail.com",
    "phone_mobile": "+88-02-223352096",
    "web": "www.fcslbd.com",
    "address": "Room # 422, DSE Annex Building (3rd Floor), 9/E Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Hassan Shares & Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "info@hassanshares.com",
    "phone_mobile": "+88-02-333366530, +88 01324449979",
    "web": "www.hassanshares.com",
    "address": "EHL Kamalapur (Level-4), 64-68, North Kamalapur, Dhaka-1217"
  },
  {
    "company_name": "IDLC Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "securities@idlc.com",
    "phone_mobile": "+88 09609994352, +88 01313770099",
    "web": "www.securities.idlc.com",
    "address": "Head Office: DR Tower (4th Floor), Bir Protik Gazi Golam Dastagir Road, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Green Delta Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "info@gdslbd.com",
    "phone_mobile": "16457",
    "web": "www.gdslbd.com",
    "address": "Corporate Office: Green Delta AIMS Tower (2nd Floor), 51-52 Mohakhali C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Islami Bank Securities Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "info@islamibanksecurities.com",
    "phone_mobile": "+88-02-47119116, 47119021, 47119153, 01730397300, 01709655796",
    "web": "www.islamibanksecurities.com",
    "address": "Head Office: 20, Dilkusha (5th Floor), C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "JAMAL Ahmed Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "jahmedsecurities@gmail.com",
    "phone_mobile": "+88-02-223384240, 223356114",
    "web": "www.jaslbd.com",
    "address": "Room # 403, DSE Building, 9/F Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Kazi Firoz Rashid Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "kfrs.29@gmail.com",
    "phone_mobile": "+88-02-223356183, +88 01912372605",
    "web": "www.kfrs.org",
    "address": "Head Office: Room # 408 & 409, Stock Exchange Building, 9/F Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "K-Securities & Consultants Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "info@ksclbd.com",
    "phone_mobile": "+88-02-223356293, 223356294",
    "web": "www.ksclbd.com",
    "address": "Suite # 604, 158-160, Motijheel C/A, Modhuma Building (5th Floor), Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Lanka Bangla Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "info@lbsbd.com",
    "phone_mobile": "+88-02-55110940-3, +88 01730038558",
    "web": "www.lbsbd.com",
    "address": "Corporate Office: A.A. Bhaban, Level-5, 23 Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "M.S. Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "msl.dse@gmail.com",
    "phone_mobile": "+88-02-223356068, +88 01321145447-51",
    "web": "www.mscecuritieslimited.com",
    "address": "Room # 434, DSE Annex Building, 9/E, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Mohammadi Stock Market Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "stock@mohammadi-group.com",
    "phone_mobile": "+88 01730019704",
    "web": "www.mohammadistock.com.bd",
    "address": "Head Office: Aziz Bhaban, 93, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Moshihor Securities Ltd",
    "category": "SHARE BROKER HOUSE",
    "email": "info@moshihor.com",
    "phone_mobile": "+88 01833318000",
    "web": "www.moshihor.com",
    "address": "Dilkusha Center, 28, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "MTB Securities Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "info.query@mtbsecurities.com",
    "phone_mobile": "+88-02-223388163, 223390563",
    "web": "www.mtbsecurities.com",
    "address": "WW Tower (Level-4), 68 Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "NBL Securities Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "customercare@nbls.com",
    "phone_mobile": "09638203203, 01754728527, 01324724838",
    "web": "www.nbls.com",
    "address": "Head Office: Eunoos Trade Centre (19th Floor), 52-53 Dilkusha C/A, Dhaka-1000"
  },
  {
    "company_name": "Prillink Securities Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "info@prillinkbd.com",
    "phone_mobile": "+88-02-223387627",
    "web": "www.prillinkbd.com",
    "address": "City Centre, Unit # C-11, Level-12, 103 Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "Quayum Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "qsl38@quayumsecurities.com.bd, qsl.motijheel@quayumsecurities.com.bd, qsl.banani@quayumsecurities.com.bd, qsl.uttara@quayumsecurities.com.bd",
    "phone_mobile": "+88-02-41040312, 01323149414, 01711458283, 01951527777, 01611458289, 01611458286, 0171168 8828, +88-02-48950710, 01618957010, 01711936644",
    "web": "www.quayumsecurities.com.bd",
    "address": "Head Office: DSE Tower, Suite # 188, Level # 10, Plot # 46, Road # 21, Nikunjia-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Rapid Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "info@rapidsecuritiesltd.com",
    "phone_mobile": "+88-02-223383287, 223382793, 01607338505, 01716492398",
    "web": "www.rapidsecuritiesltd.com",
    "address": "Head Office: Suite # 620, 621 DSE Annex Building (5th Floor), 9/E, Motijheel C/A, Dhaka-1000, Bangladesh; Corporate Office: Room # 241, DSE Tower (Level-12), Plot # 46, Road # 21, Nikunjia-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "Royal Capital Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "rcl@royalcapitalbd.com",
    "phone_mobile": "+88-02-223389826, +88 01708810915",
    "web": "www.royalcapitalbd.com",
    "address": "DSE Annex Building (2nd Floor), 9/E, Motijheel C/A, Dhaka-1000"
  },
  {
    "company_name": "SIRI Securities Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "sibls1@sibl-bd.com",
    "phone_mobile": "+88 09612001122",
    "web": "",
    "address": "Corporate Office: Zahed Ali Tower, 3rd Floor, 15 Dilkusha C/A, Dhaka"
  },
  {
    "company_name": "Stock & Bond Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "stockbond199@gmail.com",
    "phone_mobile": "+88-02-41040146-47",
    "web": "www.stockandbondltd.com",
    "address": "Head Office: DSE Tower, Room # 204, Level-10, House # 46, Road # 21, Nikunjia-2, Dhaka-1229, Bangladesh"
  },
  {
    "company_name": "UCB Stock Brokerage Limited",
    "category": "SHARE BROKER HOUSE",
    "email": "info@ucbstock.com.bd",
    "phone_mobile": "01714164945, 01324243200",
    "web": "www.ucbstock.com.bd",
    "address": "Head Office: \"Bulus Center\" (17th Floor, West Side), Plot # CWS (A)1, Road # 34, Gulshan Avenue, Gulshan, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Chittagong Capital Ltd.",
    "category": "SHARE BROKER HOUSE",
    "email": "ctgcap@gmail.com, info@ctgcap.com",
    "phone_mobile": "+88-02-333355773, 333360995, 333358926, +88-02-333317136, 333317137",
    "web": "www.ctgcap.com",
    "address": "Corporate Branch: Crown Chamber (3rd Floor), 325 Asadgonj, Chattogram-4000, Bangladesh; Agrabad Branch: B.M Heights (6th Floor), 318 Badamtoli, Circle, Agrabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "A G Ship Breaking Industries",
    "category": "SHIP BREAKING",
    "email": "",
    "phone_mobile": "+88 0171722926",
    "web": "",
    "address": "Lokman Tower (5th Floor), Sk. Mujib Road, Chowmuhani, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Be Rich Limited",
    "category": "SHIP BREAKING",
    "email": "info@berichbd.com",
    "phone_mobile": "+88 01730042539",
    "web": "www.berichbd.com",
    "address": "Central Office: C & F Tower (9th Floor), 1222 Sk. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Diamond Ship Breaking Industries",
    "category": "SHIP BREAKING",
    "email": "",
    "phone_mobile": "+88 01813389958",
    "web": "",
    "address": "Amir Market, Amir Ali Chowdhury Road, Khatungoni, Chattogram-4000"
  },
  {
    "company_name": "Four Star Ship Breaking Industries Ltd.",
    "category": "SHIP BREAKING",
    "email": "info@nrgroupbd.com",
    "phone_mobile": "+88-02-333312401, 01612100113, 01812100113",
    "web": "www.nrgroupbd.com",
    "address": "NR Tower (6th Floor), Plot # 07, Road # 02, Lane # 01, Block-L, Halishahar H/E, Agrabad Access Road, Chattogram"
  },
  {
    "company_name": "Khawaja Ship Breaking Ltd.",
    "category": "SHIP BREAKING",
    "email": "info@kabirshiprecycling.com",
    "phone_mobile": "+88-02-333311501-3, +88 01979329364",
    "web": "www.kabirshiprecycling.com",
    "address": "Head Office: Kabir Manzil, Sk. Mujib Road, Agrabad, Chattogram-4100"
  },
  {
    "company_name": "PHP Ship Breaking & Recycling Industries Ltd.",
    "category": "SHIP BREAKING",
    "email": "info@phpfamily.com",
    "phone_mobile": "+88-02-333352316-21",
    "web": "www.phpfamily.com",
    "address": "PHP Centre, 40/1, Zakir Hossain Road, Khulshi, Chattogram-4225, Bangladesh"
  },
  {
    "company_name": "Three Angle Marine Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "info@threeanglemarine.com",
    "phone_mobile": "+88-02-223388180",
    "web": "www.threeanglemarine.com",
    "address": "Level-14, 114 Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Chittagong Dry Dock Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "contact@cddl.gov.bd",
    "phone_mobile": "+88-02-333301610, 01769744423, 01769744417",
    "web": "www.cddl.gov.bd",
    "address": "East Patenga, Chattogram, Bangladesh"
  },
  {
    "company_name": "Highspeed Shipbuilding & Heavy Engineering Co. Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "info@birdscgt.com",
    "phone_mobile": "+88-02-333310012, 333312909",
    "web": "www.highspeedbd.com",
    "address": "Chattogram Office: Makkah Madina Trade Center, 78 Agrabad C/A, Chattogram-4100"
  },
  {
    "company_name": "Naxos Marine Service",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "technical@naxosmarine.com",
    "phone_mobile": "+88 01955774470",
    "web": "www.naxosmarine.com",
    "address": "Mouri Corner, 4th Floor, Port Connecting Road, Boropol, Chattogram-4216, Bangladesh"
  },
  {
    "company_name": "Patenga Shipbuilding & Engineering",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "patengase@gmail.com",
    "phone_mobile": "+88 01715162910",
    "web": "www.shiprepairco.com",
    "address": "Futchari Para, Ward # 41, South Patenga, Chattogram-4204"
  },
  {
    "company_name": "Prantik Marine Services Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "info@prantik.net",
    "phone_mobile": "+88-02-333310525-26, 01730004252, 01730004250",
    "web": "www.prantik.net",
    "address": "Portland MAM Tower, Level-7 & 8, 226, Strand Road, Bangla Bazar, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Radlant Shipyard Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "info@rsl.org.bd",
    "phone_mobile": "+88-02-226664812, 226664813",
    "web": "www.rsl.org.bd",
    "address": "Corporate Office: MCT Ally's Center (12th Floor), 186 Shahid Syed Nazrul Islam Sarani, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Total Marine & Safety Solutions Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "info@totalmarinebd.com",
    "phone_mobile": "01716481925, 01988324730",
    "web": "www.totalmarinebd.com",
    "address": "116, Strand Road, Bangla Bazar, Sadarghat, Chattogram-4100"
  },
  {
    "company_name": "Western Marine Services Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "wms@wms.com.bd",
    "phone_mobile": "+88-02-333330030",
    "web": "www.wmsbd.com",
    "address": "Corporate Office: Amin Future Park (6th Floor), 1440/A-8 Strand Road, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Dockyard & Engineering Works Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "contact@dewbn.gov.bd",
    "phone_mobile": "01769719810, 01769719295, 01769719818",
    "web": "www.dewnb.gov.bd",
    "address": "Sonakanda, Bandar, Narayanganj, Bangladesh"
  },
  {
    "company_name": "A R Shipbuilders & Engineering Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "arselbd1984@gmail.com",
    "phone_mobile": "01716661551, 01757548604",
    "web": "www.arsel.com.bd",
    "address": "Char Kaliganj, Shuvadda, South Keraniganj, Dhaka-1310, Bangladesh"
  },
  {
    "company_name": "Bay-Tech Ship Builders",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "tazul.islam@baytechship.com",
    "phone_mobile": "018702107311",
    "web": "www.baytechship.com",
    "address": "Corporate Office: Khan Mansion (4th Floor), 28/A-5, Toyenbee Circular Road, Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Highspeed Shipbuilding & Heavy Engineering Co. Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "info@birdskh.com",
    "phone_mobile": "+88-02-223387197",
    "web": "www.highspeedbd.com",
    "address": "Dhaka Office: 103 Motijheel C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Khan Brothers Shipways & Engineering Works Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "contact@kbgbd.com",
    "phone_mobile": "+88 01710123456",
    "web": "www.kbgbd.com",
    "address": "KBG Tower, 15, Malibagh Chowdhurypara, DIT Road, Dhaka-1219, Bangladesh"
  },
  {
    "company_name": "Karnafuly Ship Builders Ltd.",
    "category": "SHIP BUILDERS & REPAIRS",
    "email": "ksbldhaka@gmail.com",
    "phone_mobile": "+88-02-55040813",
    "web": "www.ksblbd.com",
    "address": "Dhaka Office: Flat # 3C, House # 06, (Nam Village) Road # 02, Banani, Dhaka-1213"
  },
  {
    "company_name": "Freedom Marine Service",
    "category": "SHIP CHANDLERS",
    "email": "info@freedommarineservice.com",
    "phone_mobile": "01977270111, 01712299288, 01771615252",
    "web": "www.freedommarineservice.com",
    "address": "501, Unit-1, 4th Floor, Singapore Market, Hazipara, Agrabad Access Road, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Southwind Marine Trade",
    "category": "SHIP CHANDLERS",
    "email": "shipchandler@southwind-bd.com",
    "phone_mobile": "+88-02-333317667, +88 01715256501",
    "web": "www.southwind-bd.com",
    "address": "518 Singapore Market U-2, Hazipara, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Angel Shipping Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "mshaifuddin@angelshippingbd.com, Info@angelshippingbd.com",
    "phone_mobile": "+88-02-48318401, 48319318, 58312175, 48322559, 01711799297, 01736309558",
    "web": "www.angelshippingbd.com",
    "address": "Dhaka Office: Paltan Tower, 7th Floor, Suite # 707, 87 Purana Paltan Line, Dhaka-1000"
  },
  {
    "company_name": "BNF Shipping Services",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "bnfshipping@gmail.com",
    "phone_mobile": "01772697582, 01767603159",
    "web": "www.bnfshipping.com",
    "address": "SKYLARK Point, Suite # G2 (6th Floor), 24/A, Bijoy Nagar, Dhaka-1000"
  },
  {
    "company_name": "Brothers Shipping",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "dhaka@brothers-shippingbd.com, hanifmir2@gmail.com",
    "phone_mobile": "01997011168, 01997011164",
    "web": "www.brothers-shippingbd.com",
    "address": "Dhaka Office: BN Tower (4th Floor), Suit # 503, 28/A/B Toyenbee Circular Road, Motijheel, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Container Worldwide Express (BD) Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "dhaka@cwegroupbd.com, sales.dhk@cwegroupbd.com",
    "phone_mobile": "01674551373, 01719292640",
    "web": "www.cwegroupbd.com",
    "address": "Dhaka Office: Apt-3B, House # 1/A, Road # 2, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Conveyor Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "conveyor@conveyor.com.bd",
    "phone_mobile": "+88-02-222275392-98",
    "web": "www.conveyor.com.bd",
    "address": "Corporate Office: 57 Kemal Ataturk Avenue, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "East Coast Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "eastcoast@ecg.com.bd",
    "phone_mobile": "+88-02-222284312-17",
    "web": "www.ecg.com.bd",
    "address": "Corporate Headquarter: SW(G) 8, Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Eastern Overseas Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "shafi@eoslbd.com, akmshafulcf@gmail.com",
    "phone_mobile": "01711691052, 01678112666",
    "web": "www.eoslbd.com",
    "address": "Head Office: House # 19-20, Road # 113/A, Gulshan-2, Dhaka-1212"
  },
  {
    "company_name": "Galaxy World Logistics Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@galaxylogistics.com",
    "phone_mobile": "+88-02-222293470",
    "web": "www.galaxylogistics.com",
    "address": "Taj Marriot, 25 Gulshan Avenue (5th Floor), Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "GP Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "hafiz@gpslbd.com",
    "phone_mobile": "+88-02-41090530, 41090531, 41090532, 41090533",
    "web": "www.gpslbd.com",
    "address": "Masum Plaza (13th Flr.), House # 13, Road # 15, Sector # 03, Rabindra Sarani, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Haque & Sons Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "haqsonsdhk@haqson.com",
    "phone_mobile": "+88-02-48964723, 48964725, 48964735",
    "web": "www.haqson.com",
    "address": "Dhaka Office: House # 12, Road # 8, Sector # 3, Uttara, Dhaka-1230, Bangladesh"
  },
  {
    "company_name": "Homebound",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@homeboundbd.com",
    "phone_mobile": "+88-02-22229475, 58811021-2",
    "web": "www.homeboundbd.com",
    "address": "SW (A) 26, Gulshan Avenue, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "HR Lines Limited",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@hrlinesbd.com",
    "phone_mobile": "+88-02-58310167-73",
    "web": "www.hrlinesbd.com",
    "address": "Corporate Head Office: HR Bhaban, 26/1 Kakrail Road, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Infinity Shipping & Logistics Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@infinitysl.com",
    "phone_mobile": "+88-02-47120067-8",
    "web": "www.infinitysl.com",
    "address": "Dhaka Office: Azad Center (5th Floor), Room # 5/D, 55, Purana Paltan, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "INTASL Shipping Limited",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@intasl.com",
    "phone_mobile": "02-222287521-4, 222288131-5, 2222887525",
    "web": "www.intasl.com",
    "address": "Corporate Office: Sheba House (Level-5 & 6), Plot # 34, Road # 46, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Interport Ship Agents Limited",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@interport.org",
    "phone_mobile": "+88-02-48311665, +88 01860753985",
    "web": "www.interport.group",
    "address": "MHK Terminal (5th Floor), 110 Kazi Nazrul Islam Avenue, Bangla Motor, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Marine (Agency) Services Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "gm@masbd.info",
    "phone_mobile": "+88 01841047480",
    "web": "www.mascrew.com",
    "address": "Dhaka Office: Shatabdi Tower (4th Floor), Room # 4C, 292 Inner Circular Road, Fakirapool, Motijheel, Dhaka"
  },
  {
    "company_name": "M.S. Line",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "import@mslinebd.com",
    "phone_mobile": "+88-02-222271328, 222271329, +88 01711604650",
    "web": "www.mslinebd.com",
    "address": "Dhaka Office: House # 59, Level # 6, Road # 1, Banani, Dhaka-1213"
  },
  {
    "company_name": "North Bengal Shipping Agencies (Pvt.) Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@nbsal.com",
    "phone_mobile": "+88 01713411052",
    "web": "www.nbsal.com",
    "address": "Eastern View Commercial Complex (9th Floor), Room # 9/8-9, 50, Naya Paltan, D.I.T. Extension Road, Dhaka"
  },
  {
    "company_name": "Karim Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@karimgroup.com",
    "phone_mobile": "+88-02-55058476, 55058477",
    "web": "www.karimgroup.com",
    "address": "Corporate Office: Level-6, SKS Tower, 7 VIP Road, Mohakhali, Dhaka-1206, Bangladesh"
  },
  {
    "company_name": "Maersk Bangladesh Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "bd.sales1@maersk.com",
    "phone_mobile": "09612888187, 09610996980",
    "web": "",
    "address": "Main Office: Gulshan Center Point, 20th Floor, House # 23-26, Road # 90, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Reliance Shipping & Logistics Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@rxlbd.com",
    "phone_mobile": "01925990010, 01300290624",
    "web": "www.rxlbd.com",
    "address": "Dhaka Office: Moonlight Serenade (7th Floor), Plot # 06, Road # 03, Block # J, Baridhara, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Seastar Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@shrgroup.com.bd, general.dhk@shrgroup.com.bd",
    "phone_mobile": "+88-02-58152220",
    "web": "www.shrgroup.com.bd",
    "address": "Corporate Office: SHR Tower, 61, Kazi Nazrul Islam Avenue, Dhaka-1215, Bangladesh"
  },
  {
    "company_name": "SW Shipping Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@swshippingbd.com",
    "phone_mobile": "++88-02-222295747, 222299112",
    "web": "www.swshippingbd.com",
    "address": "Dhaka Office: Commercial Cove (Level-6), House # 56/C, Road # 132, Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Trident Shipping Line Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@trident-bd.com",
    "phone_mobile": "+88-02-222292411",
    "web": "www.trident-bd.com",
    "address": "Concord I.K. Tower, 5th Floor, Plot # 2, Block # CEN (A), North Avenue, Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "A. A. Shipping Services",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "agency@ashipingservicesbd.com",
    "phone_mobile": "+88 01917161620",
    "web": "",
    "address": "655/A, K.B. Dobash Lane, Double Mooring, Chattogram, Bangladesh"
  },
  {
    "company_name": "Abhani Banijja Sangstha",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "abs.shahabuddin@gmail.com",
    "phone_mobile": "+88 01715965928",
    "web": "",
    "address": "Mir Aread Building, 304/B, Sk. Mujib Road, Dewanhat, Chattogram-4100"
  },
  {
    "company_name": "ABC Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "arif@abcshippinglines.com, info@abcshippinglines.com",
    "phone_mobile": "0170791969, 01819313018, 01730356443",
    "web": "www.abcshippinglines.com",
    "address": "Dare-e-Shahidi (3rd Floor), 69, Agrabad C/A, Chattogram, Bangladesh"
  },
  {
    "company_name": "Able Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "ableshippingctg@gmail.com",
    "phone_mobile": "01712905952, 0171310076, 01711191719",
    "web": "",
    "address": "Dubash Building (3rd Floor), 116, Strand Road, Bangla Bazar, Chattogram, Bangladesh"
  },
  {
    "company_name": "Abul Khair Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "operation@akslines.com",
    "phone_mobile": "+88 01912643863",
    "web": "",
    "address": "697, Badarpati Road, Chattogram"
  },
  {
    "company_name": "Advance Shipping Line",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "shipping.shossain@gmail.com",
    "phone_mobile": "+88 01823916031",
    "web": "",
    "address": "House # 2 (2nd Floor), Block-G, Road # 6, Boropool Circle, Chattogram"
  },
  {
    "company_name": "AHZ Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "bismillah@techno-bd.net",
    "phone_mobile": "+88 01711011489",
    "web": "",
    "address": "House # 348, Road # 14, CDA R/A, Agrabad, Chattogram, Bangladesh"
  },
  {
    "company_name": "A & J Traders",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "",
    "phone_mobile": "01715174600, 01983435445",
    "web": "",
    "address": "Banani Complex (3rd Floor), 942/A, Sk. Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Alam Shipping & Trading Agency",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "alamship@gmail.com",
    "phone_mobile": "01715091241, 01711305695",
    "web": "",
    "address": "310, Gulbagh R/A, Beparipara, Agrabad, Chattogram-4100"
  },
  {
    "company_name": "Albatross Ship Agencies Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "albtrsp@agni.com",
    "phone_mobile": "01711816675, 01711269823",
    "web": "",
    "address": "Chishty Tower (1st Floor), 728/775, Goshalidanga, Strand Road, Bandar, Chattogram, Bangladesh"
  },
  {
    "company_name": "Allied Maritime Services",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "azam@allied-bd.com",
    "phone_mobile": "+88 01819362100",
    "web": "",
    "address": "Hotel Saint Martin Building (Ground Floor), 25, Agrabad C/A, Chattogram"
  },
  {
    "company_name": "Al-United Maritime Business (Pvt.) Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "alunitedoprcgt@gmail.com",
    "phone_mobile": "01715606889, 01711539110",
    "web": "",
    "address": "House # 317, Road # 14, CDA R/A, Agrabad C/A, Chattogram"
  },
  {
    "company_name": "Alvi Line Bangladesh Limited",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@alviline.com",
    "phone_mobile": "01721005476, 01716145119",
    "web": "",
    "address": "Makkah Madinah Trade Centre (9th Floor), 78, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "AMAN Shipping Agency",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "kamrul_tti@yahoo.com",
    "phone_mobile": "+88 01711750585",
    "web": "",
    "address": "232, Mogaltooly, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "AMMS International Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "cm@ammsb.dom, info@ammsb.dom",
    "phone_mobile": "01730356443, 0171775106",
    "web": "",
    "address": "Dare-E-Shahidi (2nd Floor), 69, Agrabad C/A, Chattogram-4100"
  },
  {
    "company_name": "AMMS Logistics",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "",
    "phone_mobile": "+88 01819310783",
    "web": "www.ammslogistics.com",
    "address": "Chattogram Office: 1646, Lokman Tower (6th Floor), Sk. Mujib Road, Chowmuhani, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "APL (Bangladesh) Pvt. Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "chi.ehoque@cma-cgm.com, chi.aferdous@cma-cgm.com",
    "phone_mobile": "+88-02-33332001-004, +88 01730312726",
    "web": "",
    "address": "World Trade Center (5th Floor), 102-103, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Aquatrans Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "alctgbd2018@gmail.com, aquatrans.ops@gmail.com",
    "phone_mobile": "+88 01788343586",
    "web": "",
    "address": "Makkah Madina Trade Center (4th Floor), 78, Agrabad C/A, Chattogram"
  },
  {
    "company_name": "Ample Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "hosain_rt@yahoo.com",
    "phone_mobile": "01711898181, 01713386260",
    "web": "",
    "address": "R.B. Court (2nd Floor), 54, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Argo Shipping Services Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "mdali@argoship.net",
    "phone_mobile": "+88 01730730213",
    "web": "",
    "address": "Shafi Bhaban (1st Floor), 1216/A, Sheikh Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Anclent Steamship Co. Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "management@anclentsteamship.com",
    "phone_mobile": "+88 01768474678",
    "web": "",
    "address": "Hakim Mansion (2nd Floor), 87, Strand Road, Doublemooring, Chattogram, Bangladesh"
  },
  {
    "company_name": "Asiabulk Maritime Pvt. Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "anjan.mozumder@asiabulkbd.com",
    "phone_mobile": "018193110833, 01711691283, 01713112412",
    "web": "",
    "address": "As-Salam Tower (8th Floor), 57, Agrabad C/A, Chattogram-4100"
  },
  {
    "company_name": "Angel Shipping Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "mshaifuddin@angelshippingbd.com",
    "phone_mobile": "+88-02-333329194, 333324420, 01711799297, 01827867247",
    "web": "www.angelshippingbd.com",
    "address": "Faruk Chamber, 7th Floor, 1403 Sk. Mujib Road, Chowmuhani, Agrabad C/A, Chattogram, Bangladesh"
  },
  {
    "company_name": "Asia Pacific Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@asiapacific.com",
    "phone_mobile": "+88-02-333310681-2, 333315600, +88 01713453653",
    "web": "www.asiapacific.com",
    "address": "Facy Building (3rd Floor), 87, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Birds Bangladesh Agencies Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "mahmud@birdscgt.com, arif@birdscgt.com",
    "phone_mobile": "01730356448, 01818216553",
    "web": "",
    "address": "Makkah Madinah Trade Center, 78, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Bismillah International Shipping & Trading Co. Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "",
    "phone_mobile": "+88 01815647918",
    "web": "",
    "address": "18/19, Madina Market, Hotel Dubar (1st Floor), Chowmunhai, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Blossom Shipping Services Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@blossomshipping.com",
    "phone_mobile": "+88 01777797272",
    "web": "",
    "address": "Aziza Bhaban (2nd Floor), 1 No. CCT Gate, New Mooring, Chattogram, Bangladesh"
  },
  {
    "company_name": "Brave Royal Shipping Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "moonsur@royalcementbd.com",
    "phone_mobile": "01730341192, 01713432750",
    "web": "",
    "address": "Kabir Mazil, Sheikh Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Brothers Shipping",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "hanif@brothers-shippingbd.com, info@brothers-shippinfbd.com",
    "phone_mobile": "01713410045, 01997011161",
    "web": "www.brothers-shippingbd.com",
    "address": "Corporate Office: Kashfia Plaza (2nd Floor), 923/A, Sk. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "BS Cargo Agency Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "inform@bsgroupbd.com",
    "phone_mobile": "+88-02-333312564, 333323024, 333312804-6",
    "web": "www.bsgroupbd.com",
    "address": "Head Office: Collyer Towers, Block # G, Road # 2, Plot # 4, Lane # 4, Halishahar H/E, Chattogram-4216, Bangladesh"
  },
  {
    "company_name": "BS Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "inform@bsgroupbd.com",
    "phone_mobile": "+88-02-333312564, 333332024, 333312804-6",
    "web": "www.bsgroupbd.com",
    "address": "Head Office: Collyer Towers, Block # G, Road # 2, Plot # 4, Lane # 4, Halishahar H/E, Chattogram-4216, Bangladesh"
  },
  {
    "company_name": "Circle Shipping & Trading Agencies",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "shipping@rjrtradingbd.com, info@rjrtradingbd.com",
    "phone_mobile": "+88 01817721337",
    "web": "www.concordshippingbd.com",
    "address": "Road # 1, Lane # 6, Bashundhra R/A North Agrabad, Halishahar Chattogram, Bangladesh"
  },
  {
    "company_name": "Container Worldwide Express (BD) Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "operation@cwegroupbd.com, anam@cwegroupbd.com",
    "phone_mobile": "+88-02-333318861, 333318862, 333320627",
    "web": "www.cwegroupbd.com",
    "address": "Chattogram Office: RF Johura Tower (Level-6), 1401, S.K.Mujib Road, Chowmohoni, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Continental Line Agencies",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "operations@clabd.com",
    "phone_mobile": "+88 01711761629",
    "web": "",
    "address": "Banani Complex (6th Floor), Tower-B, 942/A, Sk. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Convexor Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "convexortg@conveyor.com.bd",
    "phone_mobile": "+88-02-333310751, 333310752",
    "web": "www.conveyor.com.bd",
    "address": "HAL's Anwar Trade Center (Level-8), 1728, SK. Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Coscol Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "ops@coscolbd.com",
    "phone_mobile": "01711117801, 01789398756, 01755627550, 01842815159",
    "web": "www.coscolbd.com",
    "address": "Aziz Court (18th Floor, South Side), 88-89, Agrabad C/A, Chattogram"
  },
  {
    "company_name": "Eagle Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@eagleshipping.com",
    "phone_mobile": "01911837404, 01783390344",
    "web": "www.eagleshippinglines.com",
    "address": "Metro Plaza, 4th Floor, 3 No. Fakir Hat, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "East Coast Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "ecslctg@ecg.com.bd",
    "phone_mobile": "+88 01711721645",
    "web": "www.ecg.com.bd",
    "address": "East Coast House, 138/A CDA R/A, Road # 1, Agrabad, Chattogram-4100"
  },
  {
    "company_name": "Eastern Overseas Shipping Lines Ltd.",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@eoslbd.com",
    "phone_mobile": "+88 01711790151",
    "web": "www.eoslbd.com",
    "address": "South Land Center (8th & 9th Floor), 5, Agrabad C/A, Chattogram-4100"
  },
  {
    "company_name": "Emess Shipping Agencies",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@emessbd.com",
    "phone_mobile": "+88 01611535324",
    "web": "www.emessbd.com",
    "address": "Facy Building (2nd Floor), 87, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Forazi Shipping Limited",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "info@fsltd.net",
    "phone_mobile": "01329711178, 01629722247",
    "web": "www.fsltd.net",
    "address": "Finlay House, Lift-4, Opposite of MMD Office, 11 Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Fortune Shipping Lines",
    "category": "SHIPPING COMPANIES/AGENTS",
    "email": "fortuneshippingbd@gmail.com",
    "phone_mobile": "+88 01716159791",
    "web": "",
    "address": "413/B, Azim Court (6th Floor), Mugaltuli, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Sandwich Panel Technology",
    "category": "Construction / Building Materials",
    "email": null,
    "phone_mobile": "+88 01713860009, 01636577917",
    "web": "www.sandwichpanelbd.com",
    "address": null
  },
  {
    "company_name": "Galaxy Lines Ltd.",
    "category": "Shipping / Logistics",
    "email": "ashish.sarkar@galaxylines.com",
    "phone_mobile": "+88-02-33332620, 333316538, 333316868",
    "web": null,
    "address": "Aziz Court, 88-89, Agrabad C/A Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "GPH Shipping Lines Ltd.",
    "category": "Shipping / Logistics",
    "email": "ataur@gpslbd.com",
    "phone_mobile": "+88-02-333314124, 3333314125, +88 01833904277",
    "web": "www.gpslbd.com",
    "address": "Ayub Trade Centre (8th Floor), 1269/B, Sheikh Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "H.S.A Shipping & Logistics Ltd.",
    "category": "Shipping / Logistics",
    "email": "arahaman77.ar@gmail.com",
    "phone_mobile": "+88 01774292780",
    "web": null,
    "address": "Jiban Bima Bhaban (4th Floor) 56, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Haque & Sons Ltd.",
    "category": "Shipping / Logistics",
    "email": "haqsonscgt@haqons.com",
    "phone_mobile": "+88-02-333316214, 333316215, 333316216",
    "web": "www.haqons.com",
    "address": "Rummana Haque Tower, 1267/A Goshaildanga, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Hasan Shipping Lines",
    "category": "Shipping / Logistics",
    "email": "ops@safeshippinglines.com",
    "phone_mobile": "+88-02-333301284-7, 333302533",
    "web": null,
    "address": "VOTT-B Campus, Airport Road, 2507/3977, North Patenga Chattogram, Bangladesh"
  },
  {
    "company_name": "HSR Ocean Trades",
    "category": "Shipping / Logistics",
    "email": "ops@hsr-oceantrades.com",
    "phone_mobile": "+88-02-333326354, 333324429",
    "web": "www.hsr-oceantrades.com",
    "address": "Bashar Square (4th Floor), 108, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Inchcape Shipping Lines Ltd.",
    "category": "Shipping / Logistics",
    "email": "ops@inchcapebd.com",
    "phone_mobile": "01713000081, 01755627550",
    "web": "www.inchapbcd.com",
    "address": "Aziz Court (18th Floor, South Side) 88-89, Agrabad C/A, Chattogram."
  },
  {
    "company_name": "Infinity Shipping & Logistics Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@infinitysl.com",
    "phone_mobile": "+88-02-333312463-4, +88 01795620337",
    "web": "www.infinitysl.com",
    "address": "Head Office: As-Salam Tower (12th Floor), 57, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "INTASL Shipping Limited",
    "category": "Shipping / Logistics",
    "email": "operation_ctg@intasl.com",
    "phone_mobile": "+88-02-333315870",
    "web": "www.intasl.com",
    "address": "Chattogram Branch: 531 Bashir Mohammad Road, Shantibag, Access Road, North Agrabad, Chattogram-4100."
  },
  {
    "company_name": "Jabun Associate Limited",
    "category": "Shipping / Logistics",
    "email": "jabun@royalshippingbd.com",
    "phone_mobile": "+88-02-333315272, 01712983680, 01819685568",
    "web": "www.jabunlimited.com",
    "address": "Corporate Office: Saima Abul Square, 1st Floor, Suite # D & E, Boropol, Halishahar Road, Chattogram."
  },
  {
    "company_name": "JAC Shipping Lines",
    "category": "Shipping / Logistics",
    "email": "agency@jacgroupbd.com",
    "phone_mobile": "+88 01713105903",
    "web": "www.jacgroupbd.net",
    "address": "Bashar Square, Level-5 (Ex. M-Court) 108, Agrabad C/A, Chattogram-4100."
  },
  {
    "company_name": "Kings Shipping Corporation",
    "category": "Shipping / Logistics",
    "email": "info@kingsshippingbd.com, kingsshippingbd@gmail.com",
    "phone_mobile": "+88-02-333320479",
    "web": "www.kingsshippingbd.com",
    "address": "Corporate Office: 95, Agrabad C/A, Chattogram-4100."
  },
  {
    "company_name": "Lata Shipping Agency",
    "category": "Shipping / Logistics",
    "email": "info@latashipping.com, Operation@latashipping.com",
    "phone_mobile": "01671788754, 01785901250",
    "web": "www.latashipping.com",
    "address": "Century Tower, 1558, Access Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Lushai Shipping & Trading",
    "category": "Shipping / Logistics",
    "email": "info@lushaishipping.com, Operation@lushaishipping.com",
    "phone_mobile": "+88-02-333316850-51, 01729274457",
    "web": "www.lushaishipping.com",
    "address": "1074/1108, Jahir Company House (2nd Floor), Rashid Building (1 No. Lane), Amir Hossain Dovash Road, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Marine (Agency) Services Ltd.",
    "category": "Shipping / Logistics",
    "email": "gm@masbd.info",
    "phone_mobile": "+88 01841047480",
    "web": "www.mascrew.com",
    "address": "Head Office: House # 1, Road # 1, Lane # 5, Block # L, Halishahar, Chattogram, Bangladesh"
  },
  {
    "company_name": "Mars Shipping & Logistics",
    "category": "Shipping / Logistics",
    "email": "info@marshippingbd.com, Operation@marshippingbd.com",
    "phone_mobile": "01827033045",
    "web": "www.marshippingbd.com",
    "address": "Office: 7th Floor, Aktaruzzaman Center, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Mazada Shipping Line Ltd.",
    "category": "Shipping / Logistics",
    "email": "offshore@mazadagroup.com",
    "phone_mobile": "+88 01318206541",
    "web": "www.mazadagroup.com",
    "address": "Suite # A4 (BTI Kanchan, 4th Floor), Plot # 25, Road # 02, O.R Nizam Road R/A, GEC Circle, Chattogram-4000."
  },
  {
    "company_name": "Megatrend Shipping Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@megatrendshipping.com",
    "phone_mobile": "+88 02-333327380-2",
    "web": "www.megatrendshipping.com",
    "address": "Makkah Madinah Trade Centre (16th Floor), 78, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Mermaid Marine Agency",
    "category": "Shipping / Logistics",
    "email": "ahasan@mermaidbd.com",
    "phone_mobile": "+88 02-333327543, 333327540",
    "web": "www.mermaidbd.com",
    "address": "Lokman Tower (7th Floor), 1646, Sk Mujib Road, Agrabad, Chowmahani, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "HYUNDAI ELEVATOR COMPANY LTD. (A Concern of SIGMA Elevator Group)",
    "category": "Elevator / Engineering Services",
    "email": null,
    "phone_mobile": null,
    "web": null,
    "address": null
  },
  {
    "company_name": "M.M. Ispahani Limited",
    "category": "Shipping / Logistics",
    "email": "ispiship_eap@ispahanibd.com",
    "phone_mobile": "+88-02-333316153-6",
    "web": "www.ispahanibd.com",
    "address": "Ispahani Building, 4th Floor, Sk. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Mother Shipping Lines Ltd.",
    "category": "Shipping / Logistics",
    "email": "mothershippingbd@gmail.com",
    "phone_mobile": "01712035085, 01711280124, 01711161133",
    "web": null,
    "address": "Portland Sattar Tower (7th Floor), 1776, Strand Road, Barik Building, Chattogram, Bangladesh"
  },
  {
    "company_name": "M. S. Line",
    "category": "Shipping / Logistics",
    "email": "info@mslinebd.com",
    "phone_mobile": "+88-02-226603195, 333310098, 01700764494, 01700764491",
    "web": "www.mslinebd.com",
    "address": "Head Office: BM Heights, 318, Sheikh Mujib Road (5th Floor), Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "NMC Bangladesh Ltd.",
    "category": "Shipping / Logistics",
    "email": "nmccgp@nmc-bd.com",
    "phone_mobile": "+88-02-333313829-31, 333314736",
    "web": "www.nmc-bd.com",
    "address": "Shahjadi Chamber (3rd Floor), 1331/B, S.K.Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Parabar Shipping",
    "category": "Shipping / Logistics",
    "email": "parabarshipping@gmail.com",
    "phone_mobile": "01711827512, 01765066612",
    "web": "www.parabarshipping.com",
    "address": "Gawsia Market (3rd Floor), 467 SK. Mujib Road, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "PIL (Bangladesh) Limited",
    "category": "Shipping / Logistics",
    "email": "akhter@cgp.pilship.com",
    "phone_mobile": "+88-02-333314411-5",
    "web": null,
    "address": "IIUC Tower (5th Floor), Sk. Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Pride Shipping Lines",
    "category": "Shipping / Logistics",
    "email": "operations@prideshippingbd.com",
    "phone_mobile": "+88-02-333317866, 333320774, +88 01788343586",
    "web": "www.prideshippingbd.com",
    "address": "Akhtaruzaman Center (10th Floor) 21/22, Agrabad C/A, Chattogram."
  },
  {
    "company_name": "Radiant Shipping Limited",
    "category": "Shipping / Logistics",
    "email": null,
    "phone_mobile": "+88 01819310783",
    "web": "www.ammslotgistics.com",
    "address": "1646, Lokman Tower (6th Floor), Sk. Mujib Road, Chowmuhani, Agrabad, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Real Logistics Limited",
    "category": "Logistics",
    "email": "info@reallogisticsbd.com",
    "phone_mobile": "+88-02333310415, 333320419, 01720520698, 01713462705, 01851991625",
    "web": "www.reallogisticsbd.com",
    "address": "Abul Mansur Bhaban (3rd Floor) 57/60 Azu Shah by Lane, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Reliance Shipping & Logistics Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@rxlbd.com",
    "phone_mobile": "+88-02-333316684, 333325574, 01971852591, 01300290624",
    "web": "www.rxlbd.com",
    "address": "Head Office: World Trade Centre (2nd Floor), 102-103, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Safesea Bangladesh Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@safeseabd.com",
    "phone_mobile": "+88-02-333313596",
    "web": "www.safeseabd.com",
    "address": "522, Sk. Mujib Road, Agrabad, Chattogram-4000, Bangladesh"
  },
  {
    "company_name": "Sea Glory Shipping Agencies Ltd.",
    "category": "Shipping / Logistics",
    "email": "cs@seaglorry.com.bd",
    "phone_mobile": "+88 01312354178",
    "web": "www.seaglorry.com.bd",
    "address": "Chattogram Office: Ayub Trade Center (13th Floor), 1269/B, Sk. Mujib Road, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "Sea King Marine Services Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@skmsbd.com",
    "phone_mobile": "+88-02-333327253, +88 01685616398",
    "web": "www.skmsbd.com",
    "address": "10th Floor, Akhteruzzaman Center, 21/22 Agrabad C/A, Chattogram."
  },
  {
    "company_name": "Seaport Ship Services Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@seaportbd.com",
    "phone_mobile": "+88-02-333327776",
    "web": "www.seaportbd.com",
    "address": "House # 04, Lane # 03, Road # 01, Block # L, Halishahar, Chattogram."
  },
  {
    "company_name": "Shabujangla Shipping Services Ltd.",
    "category": "Shipping / Logistics",
    "email": "info@shbss.com.bd",
    "phone_mobile": "+88-02-333327891, +88 01883671845",
    "web": "www.shbss.com.bd",
    "address": "House # 13 (Gr. Floor), Road # 2, Lane # 3, Block # K, Halishahar, Chattogram-4216, Bangladesh"
  },
  {
    "company_name": "UNIOCEAN Shipping Lines Ltd.",
    "category": "Shipping / Logistics",
    "email": "azizur.rahman@unioceanbd.com, anjam.mozumder@unioceanbd.com",
    "phone_mobile": "+88-02-333312584-85, 333312783",
    "web": "www.unioceanbd.com",
    "address": "Corporate Office: As-Salam Tower (7th Floor), 57, Agrabad C/A, Chattogram-4100, Bangladesh"
  },
  {
    "company_name": "AYESHA EPS INSULATION LIMITED",
    "category": "Manufacturing / Packaging",
    "email": "ayeshaepsbd@gmail.com",
    "phone_mobile": "+88 01912475865, 01712823148",
    "web": "www.ayeshaeps.com",
    "address": "Factory & Office: Pataksta, Lakhankhola, Bandar, Narsyanganj"
  },
  {
    "company_name": "Silk Container Lines Ltd.",
    "category": "Shipping / Logistics",
    "email": "shankar@silk-container.com",
    "phone_mobile": "+88-02-333310054, 333317431, 333323218",
    "web": "www.silk-container.com",
    "address": "Shafi Bhaban (2nd Floor), 1216/A, Sk. Mujib Road, Chattogram-4100."
  },
  {
    "company_name": "Haque & Sons Ltd. (Khulna)",
    "category": "Shipping / Logistics",
    "email": "haqsonkshl@haqson.com",
    "phone_mobile": "+88-02-477722601",
    "web": "www.haqson.com",
    "address": "Khulna Office: 47/3, Rupsha Strand Road, Khulna-9241, Bangladesh"
  },
  {
    "company_name": "SOLAR Shipping Lines",
    "category": "Shipping / Logistics",
    "email": "solar@solarshipping.net",
    "phone_mobile": "+88-02-333314208, +88 01711724335",
    "web": "www.solarshipping.net",
    "address": "S. Alam Center (4th Floor), 58, Agrabad C/A, Chattogram-4100."
  },
  {
    "company_name": "Khulna Agency",
    "category": "Shipping / Logistics",
    "email": "khulnaagency86@gmail.com",
    "phone_mobile": "+88-02-477723519, +88 01706179871",
    "web": "www.khulnaagency.com",
    "address": "269/2, Khan Jahan Ali Road, Jahanara Bhaban, Khulna-9100."
  },
  {
    "company_name": "Total Shipping Agencies",
    "category": "Shipping / Logistics",
    "email": "mongla@totalgroupbd.net",
    "phone_mobile": "+88-02-477720179",
    "web": "www.totalgroupbd.net",
    "address": "Khulna Office: Western Plaza (5th Floor), 18-D, K.D.A Avenue, Approach Road, Khulna, Bangladesh"
  },
  {
    "company_name": "SHOE/FOOTWEAR INDUSTRIES Ltd.",
    "category": "Footwear",
    "email": "footwear@afilgroup.com",
    "phone_mobile": "+88 01313778855",
    "web": "www.afilgroup.com",
    "address": "Akij Chamber (7th Floor), 73 Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Akij Footwear Limited",
    "category": "Footwear",
    "email": "momin@akijfootwear.com",
    "phone_mobile": "+88 01714046979",
    "web": "www.akijfootwear.com",
    "address": "Head Office: Akij Chamber (6th Floor), 73, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "Akij Shoes Limited",
    "category": "Footwear",
    "email": "momin@akijfootwear.com",
    "phone_mobile": "+88 01717452558",
    "web": "www.akijfootwear.com",
    "address": "Head Office: Akij Chamber (6th Floor), 73, Dilkusha C/A, Dhaka-1000, Bangladesh"
  },
  {
    "company_name": "AMICO Footwear",
    "category": "Footwear",
    "email": "amicofootwear777@gmail.com",
    "phone_mobile": "+88 01716506573",
    "web": null,
    "address": "Head Office: Boro Rangamatiya, Jorabo, Ashulia, Savar, Dhaka-1344, Bangladesh"
  },
  {
    "company_name": "Apex Footwear Limited",
    "category": "Footwear",
    "email": "info@apexfootwearltd.com",
    "phone_mobile": "+88 09617223344",
    "web": "www.apexfootwearltd.com",
    "address": "Head Office: House # 06, Road # 137, Block # SE(D), Gulshan-1, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "Arrow Footwear Ltd.",
    "category": "Footwear",
    "email": "mazhar@arrowfootwearltd.com",
    "phone_mobile": "01814399732, 01896026597",
    "web": null,
    "address": "Aragoan (Beside Aragoan Govt. Primary School), Ashulia, Savar, Dhaka, Bangladesh"
  },
  {
    "company_name": "Bay Footwear Ltd.",
    "category": "Footwear",
    "email": "info@baygroup.com",
    "phone_mobile": "+88-02-44866028",
    "web": "www.baygroupco.com",
    "address": "21, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Balmoral Shoe Industries Ltd.",
    "category": "Footwear",
    "email": "info@bengalshoe.com",
    "phone_mobile": "+88-02-44612433, 01818251325",
    "web": "www.bengalshoe.com",
    "address": "Head Office: 147/1, Hazaribagh, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Bling Leather Products Ltd.",
    "category": "Footwear / Leather",
    "email": "info@blingshoesltd.com",
    "phone_mobile": "01786492203",
    "web": "www.blingshoesltd.com",
    "address": "Corporate Head Office: Ataturk Tower, 22 Kemal Ataturk Avenue, 12th Floor, Suite # 13/B, Banani C/A, Dhaka-1213, Bangladesh"
  },
  {
    "company_name": "Esan A One Ltd.",
    "category": "Footwear",
    "email": null,
    "phone_mobile": "+88 01730268641",
    "web": null,
    "address": "Head Office: Zirabo, Zirabo, Ashulia, Savar, Dhaka-1341, Bangladesh"
  },
  {
    "company_name": "Escort Footwear (BD) Ltd.",
    "category": "Footwear",
    "email": "escortfootwear@gmail.com",
    "phone_mobile": "+88-02-223366511, +88 01715001547",
    "web": "www.escortfootwearltd.com",
    "address": "Corporate Office: Mir Noor Square, House # 43 (New) Road # 2/A, Apt. # 7B, Dhanmondi, Dhaka-1209, Bangladesh"
  },
  {
    "company_name": "Excellent Footwear Ltd.",
    "category": "Footwear",
    "email": "eflazad@gmail.com",
    "phone_mobile": "+88 01714055827",
    "web": null,
    "address": "Head Office: Palowan City (North), Chitrasail, Zirabo, Ashulia, Dhaka-1341."
  },
  {
    "company_name": "GREEN MOUNTAIN BD",
    "category": "Safety / Security Systems",
    "email": "info@greenmountainbd.com",
    "phone_mobile": "+88 01819025090, 01816033425",
    "web": "www.greenmountainbd.com",
    "address": "Hakim Dorji Markel, Shop No. 15, Madani Avenue (100 Feet Road), Notun Bazar, Vatara, Dhaka-1212"
  },
  {
    "company_name": "Fabia Footwear Ltd.",
    "category": "Footwear",
    "email": "fabihaofootwear@gmail.com",
    "phone_mobile": "+88-02-58611171-5",
    "web": null,
    "address": "Head Office: 5, Elephant Road, Dhaka-1205."
  },
  {
    "company_name": "Famos Shoes Limited",
    "category": "Footwear",
    "email": "skhastagir2015@gmail.com",
    "phone_mobile": "+88 01815642087",
    "web": null,
    "address": "Head Office: 43, Annexe Tower (4th Floor), 8, Phoenix Road, Fulbaria, Dhaka."
  },
  {
    "company_name": "FB Footwear Ltd.",
    "category": "Footwear",
    "email": "info@fbfootwear.com",
    "phone_mobile": "+88-02-55069911, 550699441, +88 01616340121",
    "web": "www.fbfootwear.com.bd",
    "address": "Head Office: 5th Floor, House # 06, Road # 109, Block # CEN(H), Gulshan-2, Dhaka-1212, Bangladesh"
  },
  {
    "company_name": "SIGMA LIFT COMPANY LTD. (A Concern of SIGMA Elevator Group)",
    "category": "Elevator / Engineering Services",
    "email": null,
    "phone_mobile": "+88 01974606009, 01614606009, 01614606007",
    "web": null,
    "address": "Head Office: 128/4, Tejburi Bazar (1st Floor), Karwan Bazar, Dhaka-1215"
  }
]

export default data;