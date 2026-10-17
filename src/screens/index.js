import SplashScreen from './onboarding/SplashScreen';
import LandingScreen from './onboarding/LandingScreen';
import PhoneScreen from './onboarding/PhoneScreen';
import OtpScreen from './onboarding/OtpScreen';
import RoleScreen from './onboarding/RoleScreen';
import FarmerHomeScreen from './home/FarmerHomeScreen';
import UrbanHomeScreen from './home/UrbanHomeScreen';
import PartnerHomeScreen from './home/PartnerHomeScreen';
import ShopScreen from './shop/ShopScreen';
import CartScreen from './shop/CartScreen';
import FeedScreen from './community/FeedScreen';
import ThreadScreen from './community/ThreadScreen';
import PlanLocationScreen from './plan/PlanLocationScreen';
import PlanAreaScreen from './plan/PlanAreaScreen';
import PlanCropScreen from './plan/PlanCropScreen';
import PlanSoilPhotoScreen from './plan/PlanSoilPhotoScreen';
import SoilReadingScreen from './plan/SoilReadingScreen';
import SoilScreen from './plan/SoilScreen';
import SeasonPlanScreen from './plan/SeasonPlanScreen';
import AdjustPlanScreen from './plan/AdjustPlanScreen';
import PaymentScreen from './plan/PaymentScreen';
import OrderPlacedScreen from './plan/OrderPlacedScreen';
import PestReadingScreen from './diagnose/PestReadingScreen';
import DiagnosisScreen from './diagnose/DiagnosisScreen';
import AgriDoctorScreen from './diagnose/AgriDoctorScreen';
import MoneyScreen from './money/MoneyScreen';
import OrdersScreen from './money/OrdersScreen';
import ProfileScreen from './money/ProfileScreen';
import BillReadingScreen from './money/BillReadingScreen';
import BillCheckScreen from './money/BillCheckScreen';
import PartnerTripScreen from './partner/PartnerTripScreen';
import PartnerDoneScreen from './partner/PartnerDoneScreen';
import PartnerEarningsScreen from './partner/PartnerEarningsScreen';
import ServicesScreen from './services/ServicesScreen';
import ServiceBookingScreen from './services/ServiceBookingScreen';
import ServiceDoneScreen from './services/ServiceDoneScreen';

// Screen id (see SCREENS in src/app/constants.js) -> component.
export const SCREEN_COMPONENTS = {
  splash: SplashScreen,
  landing: LandingScreen,
  obPhone: PhoneScreen,
  obOtp: OtpScreen,
  obWho: RoleScreen,
  home: FarmerHomeScreen,
  homeUrban: UrbanHomeScreen,
  homeVle: PartnerHomeScreen,
  shop: ShopScreen,
  cart: CartScreen,
  feed: FeedScreen,
  thread: ThreadScreen,
  pb1: PlanLocationScreen,
  pb2: PlanAreaScreen,
  pb3: PlanCropScreen,
  pb4: PlanSoilPhotoScreen,
  soilRead: SoilReadingScreen,
  soil: SoilScreen,
  plan: SeasonPlanScreen,
  adjust: AdjustPlanScreen,
  pay: PaymentScreen,
  done: OrderPlacedScreen,
  pestRead: PestReadingScreen,
  pest: DiagnosisScreen,
  doctor: AgriDoctorScreen,
  money: MoneyScreen,
  orders: OrdersScreen,
  profile: ProfileScreen,
  billRead: BillReadingScreen,
  bill: BillCheckScreen,
  vleTrip: PartnerTripScreen,
  vleDone: PartnerDoneScreen,
  vleEarn: PartnerEarningsScreen,
  services: ServicesScreen,
  svcBook: ServiceBookingScreen,
  svcDone: ServiceDoneScreen,
};
