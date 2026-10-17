// Static demo data used by the prototype. Names, prices and dates are placeholders;
// this is the seam where backend data (e.g. Supabase) will replace the static arrays.
const T3 = (a, b, c) => [a, b, c];
export const P = [
  {
    id: 1,
    c: 'c1',
    n: T3('Bordeaux mixture kit', 'ಬೋರ್ಡೊ ಮಿಶ್ರಣ ಕಿಟ್', 'बोर्डो मिश्रण किट'),
    q: T3('12 kg · 2 rounds', '12 ಕೆ.ಜಿ · 2 ಸುತ್ತು', '12 किग्रा · 2 दौर'),
    p: 2640,
    m: 3100,
    ic: 'water',
  },
  {
    id: 2,
    c: 'c2',
    n: T3('Urea + DAP + MOP set', 'ಯೂರಿಯಾ + DAP + MOP', 'यूरिया + DAP + MOP'),
    q: T3('210 kg', '210 ಕೆ.ಜಿ', '210 किग्रा'),
    p: 6180,
    m: 6900,
    ic: 'grow',
  },
  {
    id: 3,
    c: 'c2',
    n: T3('Magnesium sulphate', 'ಮ್ಯಾಗ್ನೀಸಿಯಂ ಸಲ್ಫೇಟ್', 'मैग्नीशियम सल्फेट'),
    q: T3('25 kg', '25 ಕೆ.ಜಿ', '25 किग्रा'),
    p: 1450,
    m: 1750,
    ic: 'grow',
  },
  {
    id: 4,
    c: 'c5',
    n: T3('Vermicompost', 'ಎರೆಹುಳು ಗೊಬ್ಬರ', 'केंचुआ खाद'),
    q: T3('500 kg', '500 ಕೆ.ಜಿ', '500 किग्रा'),
    p: 4750,
    m: 5400,
    ic: 'leaf',
  },
  {
    id: 5,
    c: 'c5',
    n: T3('Trichoderma bio-fungicide', 'ಟ್ರೈಕೊಡರ್ಮಾ', 'ट्राइकोडर्मा'),
    q: T3('4 kg', '4 ಕೆ.ಜಿ', '4 किग्रा'),
    p: 1360,
    m: 1600,
    ic: 'shield',
  },
  {
    id: 6,
    c: 'c4',
    n: T3('Knapsack sprayer 16 L', 'ಸಿಂಪರಣೆ ಯಂತ್ರ 16 ಲೀ', 'स्प्रेयर 16 ली'),
    q: T3('1 unit', '1 ಸಂಖ್ಯೆ', '1 नग'),
    p: 2100,
    m: 2650,
    ic: 'water',
  },
  {
    id: 7,
    c: 'c4',
    n: T3(
      'Areca climbing harness',
      'ಅಡಿಕೆ ಸುರಕ್ಷಾ ಪಟ್ಟಿ',
      'सुपारी सुरक्षा बेल्ट',
    ),
    q: T3('1 unit', '1 ಸಂಖ್ಯೆ', '1 नग'),
    p: 3400,
    m: 3900,
    ic: 'shield',
  },
  {
    id: 8,
    c: 'c3',
    n: T3('Boron (borax)', 'ಬೋರಾನ್', 'बोरॉन'),
    q: T3('5 kg', '5 ಕೆ.ಜಿ', '5 किग्रा'),
    p: 820,
    m: 980,
    ic: 'bean',
  },
  {
    id: 9,
    c: 'c6',
    n: T3('Balcony salad kit', 'ಬಾಲ್ಕನಿ ಸಲಾಡ್ ಕಿಟ್', 'बालकनी सलाद किट'),
    q: T3('4 pots · 6 seeds', '4 ಕುಂಡ · 6 ಬೀಜ', '4 गमले · 6 बीज'),
    p: 1290,
    m: 1690,
    ic: 'package',
  },
  {
    id: 10,
    c: 'c6',
    n: T3('Terrace vegetable kit', 'ತಾರಸಿ ತರಕಾರಿ ಕಿಟ್', 'छत सब्ज़ी किट'),
    q: T3('10 grow bags', '10 ಚೀಲ', '10 ग्रो बैग'),
    p: 3450,
    m: 4200,
    ic: 'package',
  },
];
export const CATS = [
  ['c1', T3('Crop protection', 'ಬೆಳೆ ರಕ್ಷಣೆ', 'फसल सुरक्षा'), 'shield'],
  ['c2', T3('Nutrition', 'ಪೋಷಣೆ', 'पोषण'), 'grow'],
  ['c3', T3('Seeds', 'ಬೀಜ', 'बीज'), 'bean'],
  ['c4', T3('Tools', 'ಸಲಕರಣೆ', 'औज़ार'), 'wrench'],
  ['c5', T3('Organic', 'ಸಾವಯವ', 'जैविक'), 'leaf'],
  ['c6', T3('Grow kits', 'ಕಿಟ್', 'किट'), 'package'],
];
export const PROBS = [
  T3('Leaves turning yellow', 'ಎಲೆ ಹಳದಿ ಆಗುತ್ತಿದೆ', 'पत्ते पीले हो रहे हैं'),
  T3('Nuts dropping early', 'ಕಾಯಿ ಬೇಗ ಉದುರುತ್ತಿದೆ', 'फल जल्दी गिर रहे हैं'),
  T3(
    'Something eating the leaves',
    'ಎಲೆ ಯಾವುದೋ ತಿನ್ನುತ್ತಿದೆ',
    'पत्ते कोई खा रहा है',
  ),
  T3('Soil stays too wet', 'ಮಣ್ಣು ತೇವವಾಗಿಯೇ ಇದೆ', 'मिट्टी गीली रहती है'),
];
export const STAGES = [
  T3(
    'Land prep + basal dose',
    'ಭೂಮಿ ಸಿದ್ಧತೆ + ಮೂಲ ಗೊಬ್ಬರ',
    'खेत तैयारी + आधार खाद',
  ),
  T3('Koleroga spray, round 1', 'ಕೊಳೆರೋಗ ಸಿಂಪರಣೆ 1', 'कोलेरोगा छिड़काव 1'),
  T3('Koleroga spray, round 2', 'ಕೊಳೆರೋಗ ಸಿಂಪರಣೆ 2', 'कोलेरोगा छिड़काव 2'),
  T3('Nut development nutrition', 'ಕಾಯಿ ಪೋಷಣೆ', 'फल पोषण'),
];
export const DATES = [
  T3('18 Jun', '18 ಜೂನ್', '18 जून'),
  T3('10 Jul', '10 ಜುಲೈ', '10 जुलाई'),
  T3('22 Aug', '22 ಆಗಸ್ಟ್', '22 अगस्त'),
  T3('15 Sep', '15 ಸೆಪ್ಟೆಂಬರ್', '15 सितंबर'),
];
export const TRACK = [
  T3('Packed at Bantwal hub', 'ಬಂಟ್ವಾಳ ಹಬ್‌ನಲ್ಲಿ ಪ್ಯಾಕ್', 'बंटवाल हब पर पैक'),
  T3('Out for delivery', 'ವಿತರಣೆಗೆ ಹೊರಟಿದೆ', 'डिलीवरी पर निकला'),
  T3('6 km away', '6 ಕಿ.ಮೀ ದೂರ', '6 किमी दूर'),
  T3('Delivered', 'ತಲುಪಿದೆ', 'पहुँच गया'),
];
export const TIERS = [
  {
    n: T3('Beeja', 'ಬೀಜ', 'बीज'),
    k: T3('BASIC', 'ಮೂಲ', 'मूल'),
    fee: 399,
    b: [
      T3('Crop calendar and reminders', 'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್', 'फसल कैलेंडर'),
      T3('Sapling and basal nutrition', 'ಸಸಿ + ಮೂಲ ಗೊಬ್ಬರ', 'पौधा + आधार पोषण'),
      T3('You buy the rest', 'ಉಳಿದದ್ದು ನೀವೇ', 'बाकी आप खुद'),
    ],
  },
  {
    n: T3('Bele', 'ಬೆಳೆ', 'बेले'),
    k: T3('STANDARD', 'ಸಾಮಾನ್ಯ', 'सामान्य'),
    fee: 699,
    b: [
      T3('Everything in Beeja', 'ಬೀಜದ ಎಲ್ಲವೂ', 'बीज का सब'),
      T3(
        'Full protection schedule',
        'ಪೂರ್ಣ ರಕ್ಷಣೆ ವೇಳಾಪಟ್ಟಿ',
        'पूरा सुरक्षा कार्यक्रम',
      ),
      T3('4 staged deliveries', '4 ಹಂತದ ವಿತರಣೆ', '4 चरण डिलीवरी'),
      T3('Unlimited agri-doctor', 'ಅನಿಯಮಿತ ಸಲಹೆ', 'असीमित सलाह'),
    ],
  },
  {
    n: T3('Samruddhi', 'ಸಮೃದ್ಧಿ', 'समृद्धि'),
    k: T3('PREMIUM', 'ಪ್ರೀಮಿಯಂ', 'प्रीमियम'),
    fee: 1499,
    b: [
      T3('Everything in Bele', 'ಬೆಳೆಯ ಎಲ್ಲವೂ', 'बेले का सब'),
      T3('Soil lab test included', 'ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ', 'प्रयोगशाला जाँच'),
      T3('Monthly agronomist visit', 'ತಿಂಗಳ ಭೇಟಿ', 'मासिक दौरा'),
      T3('Drone spray slot', 'ಡ್ರೋನ್ ಸಿಂಪರಣೆ', 'ड्रोन छिड़काव'),
      T3(
        'Pay after harvest, with insurance',
        'ಕೊಯ್ಲಿನ ನಂತರ + ವಿಮೆ',
        'कटाई बाद + बीमा',
      ),
    ],
  },
];
export const CROPS = [
  {
    id: 'areca',
    n: T3('Arecanut', 'ಅಡಿಕೆ', 'सुपारी'),
    f: T3('Best fit', 'ಅತ್ಯುತ್ತಮ', 'सबसे उपयुक्त'),
    st: 'available',
    s: T3('Suits laterite, pH 5.4', 'ಜಂಬಿಟ್ಟಿಗೆಗೆ ಸೂಕ್ತ', 'लैटेराइट के लिए'),
    ic: 'grow',
  },
  {
    id: 'coco',
    n: T3('Coconut', 'ತೆಂಗು', 'नारियल'),
    f: T3('Good', 'ಒಳ್ಳೆಯದು', 'अच्छा'),
    st: 'local',
    s: T3('Intercrop with areca', 'ಅಡಿಕೆ ಜೊತೆ', 'सुपारी के साथ'),
    ic: 'sun',
  },
  {
    id: 'cocoa',
    n: T3('Cocoa', 'ಕೊಕೊ', 'कोको'),
    f: T3('Good', 'ಒಳ್ಳೆಯದು', 'अच्छा'),
    st: 'local',
    s: T3('Shade crop, CAMPCO buys', 'ನೆರಳಿನ ಬೆಳೆ', 'छायादार फसल'),
    ic: 'grow',
  },
  {
    id: 'pepper',
    n: T3('Black pepper', 'ಕಾಳುಮೆಣಸು', 'काली मिर्च'),
    f: T3('Good', 'ಒಳ್ಳೆಯದು', 'अच्छा'),
    st: 'local',
    s: T3('Trains on areca palms', 'ಅಡಿಕೆ ಮರಕ್ಕೆ', 'सुपारी पर'),
    ic: 'water',
  },
  {
    id: 'banana',
    n: T3('Banana', 'ಬಾಳೆ', 'केला'),
    f: T3('OK', 'ಸರಿ', 'ठीक'),
    st: 'reserved',
    s: T3('Needs more water', 'ಹೆಚ್ಚು ನೀರು', 'ज़्यादा पानी'),
    ic: 'water',
  },
  {
    id: 'veg',
    n: T3('Vegetables', 'ತರಕಾರಿ', 'सब्ज़ी'),
    f: T3('OK', 'ಸರಿ', 'ठीक'),
    st: 'reserved',
    s: T3('3 cycles a year', 'ವರ್ಷಕ್ಕೆ 3', 'साल में 3'),
    ic: 'basket',
  },
];
export const SIGS = [
  T3('Location pin', 'ಸ್ಥಳ ಗುರುತು', 'स्थान बिंदु'),
  T3('ICAR soil series map', 'ICAR ಮಣ್ಣಿನ ನಕ್ಷೆ', 'ICAR मिट्टी नक्शा'),
  T3(
    'Soil Health Card on file',
    'ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್',
    'मिट्टी स्वास्थ्य कार्ड',
  ),
  T3(
    'Satellite history, 18 months',
    'ಉಪಗ್ರಹ ದಾಖಲೆ, 18 ತಿಂಗಳು',
    'उपग्रह रिकॉर्ड, 18 महीने',
  ),
  T3('Your past crops', 'ನಿಮ್ಮ ಹಿಂದಿನ ಬೆಳೆ', 'आपकी पिछली फसलें'),
  T3('Your photo', 'ನಿಮ್ಮ ಫೋಟೋ', 'आपकी फोटो'),
];
export const SOIL = [
  {
    l: T3('Texture', 'ಮಣ್ಣಿನ ರಚನೆ', 'बनावट'),
    v: T3(
      'Red laterite, gravelly clay loam',
      'ಕೆಂಪು ಜಂಬಿಟ್ಟಿಗೆ, ಜಲ್ಲಿ ಜಿಗಟು',
      'लाल लैटेराइट, कंकरीली दोमट',
    ),
    c: T3('Sure', 'ಖಚಿತ', 'पक्का'),
    s: 'available',
    why: T3(
      'Soil map, photo and your crop history all agree.',
      'ನಕ್ಷೆ, ಫೋಟೋ, ಹಿಂದಿನ ಬೆಳೆ — ಮೂರೂ ಒಂದೇ.',
      'नक्शा, फोटो और पिछली फसल तीनों एक।',
    ),
    p: 94,
  },
  {
    l: T3('pH', 'pH', 'pH'),
    v: T3('5.4 — acidic', '5.4 — ಆಮ್ಲೀಯ', '5.4 — अम्लीय'),
    c: T3('Fairly sure', 'ಸಾಕಷ್ಟು ಖಚಿತ', 'कुछ हद तक'),
    s: 'reserved',
    why: T3(
      'From your Soil Health Card, 14 months old.',
      '14 ತಿಂಗಳ ಹಳೆಯ ಆರೋಗ್ಯ ಕಾರ್ಡ್‌ನಿಂದ.',
      '14 महीने पुराने स्वास्थ्य कार्ड से।',
    ),
    p: 64,
  },
  {
    l: T3('Organic carbon', 'ಸಾವಯವ ಇಂಗಾಲ', 'जैविक कार्बन'),
    v: T3('0.71% — medium', '0.71% — ಮಧ್ಯಮ', '0.71% — मध्यम'),
    c: T3('Fairly sure', 'ಸಾಕಷ್ಟು ಖಚಿತ', 'कुछ हद तक'),
    s: 'reserved',
    why: T3(
      'Estimated from satellite and photo colour.',
      'ಉಪಗ್ರಹ ಮತ್ತು ಫೋಟೋ ಬಣ್ಣದಿಂದ ಅಂದಾಜು.',
      'उपग्रह और फोटो रंग से अनुमान।',
    ),
    p: 58,
  },
  {
    l: T3('N · P · K', 'N · P · K', 'N · P · K'),
    v: T3(
      'Low N · Medium P · Medium K',
      'ಕಡಿಮೆ N · ಮಧ್ಯಮ P · ಮಧ್ಯಮ K',
      'कम N · मध्यम P · मध्यम K',
    ),
    c: T3('Fairly sure', 'ಸಾಕಷ್ಟು ಖಚಿತ', 'कुछ हद तक'),
    s: 'reserved',
    why: T3(
      'From your Soil Health Card. Not visible in a photo.',
      'ಆರೋಗ್ಯ ಕಾರ್ಡ್‌ನಿಂದ. ಫೋಟೋದಲ್ಲಿ ಕಾಣದು.',
      'स्वास्थ्य कार्ड से। फोटो में नहीं दिखता।',
    ),
    p: 61,
  },
  {
    l: T3('Micronutrients', 'ಸೂಕ್ಷ್ಮ ಪೋಷಕಾಂಶ', 'सूक्ष्म पोषक'),
    v: T3('Not known', 'ತಿಳಿದಿಲ್ಲ', 'पता नहीं'),
    c: T3('Don’t know', 'ಗೊತ್ತಿಲ್ಲ', 'पता नहीं'),
    s: 'lowstock',
    why: T3(
      'A photo cannot show boron, zinc or magnesium.',
      'ಬೋರಾನ್, ಸತು, ಮ್ಯಾಗ್ನೀಸಿಯಂ ಫೋಟೋದಲ್ಲಿ ಕಾಣದು.',
      'बोरॉन, ज़िंक, मैग्नीशियम फोटो में नहीं दिखते।',
    ),
    p: 12,
  },
];
export const FEED = [
  {
    k: 'fPrice',
    ic: 'trendingUp',
    when: 'today',
    t: 'p1',
    b: 'p1b',
    w: 'p1w',
    act: 'seePrices',
    go: 'money',
    price: true,
  },
  {
    k: 'fAlert',
    ic: 'nearby',
    when: '1 d',
    t: 'p3',
    b: 'p3b',
    w: 'p3w',
    act: 'addToPlan',
    go: 'shop',
  },
  {
    k: 'fBench',
    ic: 'users',
    when: '2 d',
    t: 'p4',
    b: 'p4b',
    w: 'p4w',
    act: 'addToPlan',
    go: 'shop',
  },
  {
    k: 'fScheme',
    ic: 'landmark',
    when: '3 d',
    t: 'p5',
    b: 'p5b',
    w: 'p5w',
    act: 'applyH',
    go: 'money',
  },
  {
    k: 'fLearn',
    ic: 'play',
    when: '4 d',
    t: 'p6',
    b: 'p6b',
    w: 'p6w',
    act: 'watchIt',
    go: 'doctor',
  },
];
export const BILL = [
  {
    n: T3(
      'Copper sulphate 10 kg',
      'ಮೈಲುತುತ್ತು 10 ಕೆ.ಜಿ',
      'कॉपर सल्फेट 10 किग्रा',
    ),
    paid: 2950,
    mkt: 2380,
    f: 'up',
    d: '+24%',
  },
  {
    n: T3('Urea 2 bags', 'ಯೂರಿಯಾ 2 ಚೀಲ', 'यूरिया 2 बोरी'),
    paid: 540,
    mkt: 534,
    f: 'ok',
  },
  {
    n: T3('Growth tonic 1 L', 'ಬೆಳವಣಿಗೆ ಟಾನಿಕ್ 1 ಲೀ', 'ग्रोथ टॉनिक 1 ली'),
    paid: 1180,
    mkt: 0,
    f: 'no',
  },
  {
    n: T3('DAP 3 bags', 'DAP 3 ಚೀಲ', 'DAP 3 बोरी'),
    paid: 4260,
    mkt: 4050,
    f: 'up',
    d: '+5%',
  },
  {
    n: T3('Lime 25 kg', 'ಸುಣ್ಣ 25 ಕೆ.ಜಿ', 'चूना 25 किग्रा'),
    paid: 420,
    mkt: 410,
    f: 'ok',
  },
];
export const POSTS = [
  {
    a: 'Ganesh Bhat',
    i: 'GB',
    g: 'g1',
    when: '3 h',
    t: 'c1t',
    b: 'c1b',
    lk: 14,
    rp: 9,
    vr: true,
  },
  {
    a: 'Deepa Kamath',
    i: 'DK',
    g: 'g2',
    when: '6 h',
    t: 'c2t',
    b: 'c2b',
    lk: 41,
    rp: 12,
    vr: false,
  },
  {
    a: 'Shivaram Hegde',
    i: 'SH',
    g: 'g1',
    when: '1 d',
    t: 'c3t',
    b: 'c3b',
    lk: 63,
    rp: 21,
    vr: false,
  },
];
export const SVCS = [
  ['s1', 's1s', 1499, 'grow'],
  ['s2', 's2s', 649, 'water'],
  ['s3', 's3s', 399, 'bug'],
  ['s4', 's4s', 2999, 'briefcase'],
];
export const SPACES = [
  T3('Balcony', 'ಬಾಲ್ಕನಿ', 'बालकनी'),
  T3('Terrace', 'ತಾರಸಿ', 'छत'),
  T3('Backyard', 'ಹಿತ್ತಲು', 'पिछवाड़ा'),
  T3('Office', 'ಕಚೇರಿ', 'ऑफ़िस'),
];
export const SIZES = [
  T3('Under 30 sq ft', '30 ಚ.ಅಡಿಗಿಂತ ಕಡಿಮೆ', '30 वर्ग फुट से कम'),
  T3('30–80 sq ft', '30–80 ಚ.ಅಡಿ', '30–80 वर्ग फुट'),
  T3('80–200 sq ft', '80–200 ಚ.ಅಡಿ', '80–200 वर्ग फुट'),
  T3('Bigger', 'ಇನ್ನೂ ದೊಡ್ಡದು', 'इससे बड़ा'),
];
export const SUNS = [
  T3('Under 2', '2ಕ್ಕಿಂತ ಕಡಿಮೆ', '2 से कम'),
  T3('2–4', '2–4', '2–4'),
  T3('4–6', '4–6', '4–6'),
  T3('6+', '6+', '6+'),
];
export const KITS = [
  T3('Salad greens', 'ಸಲಾಡ್ ಸೊಪ್ಪು', 'सलाद के पत्ते'),
  T3('Kitchen herbs', 'ಅಡುಗೆ ಸೊಪ್ಪು', 'रसोई की जड़ी'),
  T3('Everyday vegetables', 'ದಿನದ ತರಕಾರಿ', 'रोज़ की सब्ज़ी'),
  T3('Flowers', 'ಹೂವು', 'फूल'),
];
export const SLOTS = [
  T3('Sat 09–11', 'ಶನಿ 09–11', 'शनि 09–11'),
  T3('Sat 16–18', 'ಶನಿ 16–18', 'शनि 16–18'),
  T3('Sun 09–11', 'ಭಾನು 09–11', 'रवि 09–11'),
  T3('Sun 16–18', 'ಭಾನು 16–18', 'रवि 16–18'),
];
export const BRINGS = [
  [
    T3(
      '6 grow bags + coir-pith mix',
      '6 ಗ್ರೋ ಬ್ಯಾಗ್ + ತೆಂಗಿನ ನಾರಿನ ಮಿಶ್ರಣ',
      '6 ग्रो बैग + कोकोपीट मिश्रण',
    ),
    'included',
  ],
  [
    T3(
      'Salad and herb seedlings',
      'ಸಲಾಡ್ ಮತ್ತು ಸೊಪ್ಪಿನ ಸಸಿಗಳು',
      'सलाद और जड़ी-बूटी के पौधे',
    ),
    'included',
  ],
  [
    T3('Vermicompost 5 kg', 'ಎರೆಹುಳು ಗೊಬ್ಬರ 5 ಕೆ.ಜಿ', 'केंचुआ खाद 5 किग्रा'),
    'included',
  ],
  [
    T3(
      'Trowel, gloves, watering can',
      'ಸಲಿಕೆ, ಕೈಗವಸು, ನೀರಿನ ಕ್ಯಾನ್',
      'खुरपी, दस्ताने, पानी का डिब्बा',
    ),
    'keeps',
  ],
];
export const HAND = [
  [T3('Bordeaux mixture', 'ಬೋರ್ಡೊ ಮಿಶ್ರಣ', 'बोर्डो मिश्रण'), '12 kg'],
  [T3('Knapsack sprayer 16 L', 'ಸಿಂಪರಣೆ ಯಂತ್ರ 16 ಲೀ', 'स्प्रेयर 16 ली'), '1'],
  [T3('Trichoderma', 'ಟ್ರೈಕೊಡರ್ಮಾ', 'ट्राइकोडर्मा'), '4 kg'],
];
export const TRIPLOG = [
  ['Vasanti Rai · Kedila', '₹92', '10:20'],
  ['Ganesh Bhat · Aletty', '₹128', '11:05'],
  ['Lakshmi Poojary · Aletty', '₹74', '12:40'],
  ['Suresh Shetty · Kedila', '₹92', '14:15'],
];
export const BARS = [
  [42, 'M'],
  [68, 'T'],
  [55, 'W'],
  [80, 'T'],
  [100, 'F'],
  [74, 'S'],
  [30, 'S'],
];
