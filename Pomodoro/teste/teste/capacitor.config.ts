import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.teste',
  appName: 'teste',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
