import  { I18n } from 'i18n-js';
import {useContext} from 'react';
import Translations from './Translations.json';
import { MainContext,MainProvider } from '../Context/MainContext';

const i18n = new I18n({
    ...Translations
  });

i18n.defaultLocale = "English";
i18n.locale = "English";
i18n.fallbacks = true;



export default i18n;
