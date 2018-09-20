import { createStackNavigator } from 'react-navigation';
import { sharedNavigationOptions } from './config';
import { AlertVenueStaffContainer } from '../screens/Safety/AlertVenueStaff';
import { AllEventsContainer } from '../screens/Feed/AllEvents';
import { AllPromosContainer } from '../screens/Feed/AllPromos';
import { AllVenuesContainer } from '../screens/Feed/AllVenues';
import { CreateHerdContainer } from '../screens/Herd/CreateHerd';
import { EventContainer } from '../screens/Feed/Event';
import { FeedContainer } from '../screens/Feed';
import { HerdContainer } from '../screens/Herd';
import { IdContainer } from '../screens/ScanId/Id';
import { IncidentReportingContainer } from '../screens/Safety/IncidentReporting';
import { LogOutContainer } from '../screens/LogOut';
import { PromoContainer } from '../screens/Feed/Promo';
import { SafetyContainer } from '../screens/Safety';
import { ScanIdContainer } from '../screens/ScanId';
import { SendIncidentReportContainer } from '../screens/Safety/SendIncidentReport';
import { TonightContainer } from '../screens/Herd/Tonight';
import { VenueChatContainer } from '../screens/Safety/VenueChat';
import { VenueContainer } from '../screens/Feed/Venue';

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: FeedContainer,
      navigationOptions: () => ({
        title: 'Feed',
      }),
    },
    Promo: {
      screen: PromoContainer,
      navigationOptions: () => ({
        title: 'Promotion',
      }),
    },
    Event: {
      screen: EventContainer,
      navigationOptions: () => ({
        title: 'Event',
      }),
    },
    AllEvents: {
      screen: AllEventsContainer,
      navigationOptions: () => ({
        title: 'Events',
      }),
    },
    AllPromos: {
      screen: AllPromosContainer,
      navigationOptions: () => ({
        title: 'Promotions',
      }),
    },
    AllVenues: {
      screen: AllVenuesContainer,
      navigationOptions: () => ({
        title: 'Venues',
      }),
    },
    Venue: {
      screen: VenueContainer,
      navigationOptions: () => ({
        title: 'Venue',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Feed',
    }),
  }
);

const ScanIdStack = createStackNavigator(
  {
    ScanId: {
      screen: ScanIdContainer,
      navigationOptions: () => ({
        title: 'Scan ID',
      }),
    },
    Id: {
      screen: IdContainer,
      navigationOptions: () => ({
        title: 'ID',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'ScanId',
    }),
  }
);

const SafetyStack = createStackNavigator(
  {
    Safety: {
      screen: SafetyContainer,
      navigationOptions: () => ({
        title: 'Safety',
      }),
    },
    AlertVenueStaff: {
      screen: AlertVenueStaffContainer,
      navigationOptions: () => ({
        title: 'Alert Venue Staff',
      }),
    },
    IncidentReporting: {
      screen: IncidentReportingContainer,
      navigationOptions: () => ({
        title: 'Incident Reporting',
      }),
    },
    SendIncidentReport: {
      screen: SendIncidentReportContainer,
      navigationOptions: () => ({
        title: 'Send Incident Report',
      }),
    },
    VenueChat: {
      screen: VenueChatContainer,
      navigationOptions: () => ({
        title: 'Chat',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Safety',
    }),
  }
);

const HerdStack = createStackNavigator(
  {
    Herd: {
      screen: HerdContainer,
      navigationOptions: () => ({
        title: 'Herd',
      }),
    },
    Tonight: {
      screen: TonightContainer,
      navigationOptions: () => ({
        title: 'Tonight',
      }),
    },
    CreateHerd: {
      screen: CreateHerdContainer,
      navigationOptions: () => ({
        title: 'New Herd',
      }),
    },
    Event: {
      screen: EventContainer,
      navigationOptions: () => ({
        title: 'Event',
      }),
    },
    Promo: {
      screen: PromoContainer,
      navigationOptions: () => ({
        title: 'Promotion',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Herd',
    }),
  }
);

const LogOutStack = createStackNavigator(
  {
    LogOut: {
      screen: LogOutContainer,
      navigationOptions: () => ({
        title: 'Log Out',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'LogOut',
    }),
  }
);

export { FeedStack, ScanIdStack, SafetyStack, HerdStack, LogOutStack };
