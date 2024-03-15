import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vattenfall.vfenergyhybrid',
  appName: 'cookieTest',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    CapacitorCookies: {
      enabled: true,
    },
  },
  ios: {
  limitsNavigationsToAppBoundDomains: true,
  },
  server: {
    hostname: 'app.vattenfall.nl',
    iosScheme: 'vfapp',
    androidScheme: 'https',
  },
};

export default config;
