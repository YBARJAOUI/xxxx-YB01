import 'react-native-gesture-handler';

import { Assets } from '@react-navigation/elements';
import { registerRootComponent } from 'expo';
import { Asset } from 'expo-asset';

import Layout from './app/layout/layout';

Asset.loadAsync(Assets);

registerRootComponent(Layout);