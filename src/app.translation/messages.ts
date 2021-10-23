import localFr from "./lang/fr.json";
import localEn from "./lang/en.json";
import localDe from "./lang/de.json";

export interface Languages {
  fr: any;
  en: any;
  ar: any;
  es: any;
  de: any;
  zh: any;
  he: any;
}

export const messages: any = {
  fr: localFr,
  en: localEn,
  de: localDe,
};
