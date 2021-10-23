import { messages } from "./messages";
import { IntlProvider } from "react-intl";
type LanguageProviderPropType = {
  children?: any;
  language?: any;
};

const LanguageProvider = ({ children, language }: LanguageProviderPropType) => {
  return (
    <IntlProvider
      locale={language}
      defaultLocale={language}
      messages={messages[language]}
    >
      {children}
    </IntlProvider>
  );
};
export default LanguageProvider;
