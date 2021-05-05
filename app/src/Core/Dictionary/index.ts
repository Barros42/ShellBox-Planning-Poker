import Navigator, { NavigatorLanguage } from "Helpers/Navigator";
import EnglishDictionary from "./EnglishDictionary"
import IDictionary from "./IDictionary";
import PortugueseDictionary from "./PortugueseDictionary";
import SpanishDictionary from "./SpanishDictionaryy";

class DictionaryFactory {
  static getDictionary(language: NavigatorLanguage): IDictionary {
    switch (language) {
      case NavigatorLanguage.PT_BR:
        return new PortugueseDictionary()
      case NavigatorLanguage.ES_AR:
        return new SpanishDictionary()
      case NavigatorLanguage.EN_US:
        return new EnglishDictionary()
      default:
        return new EnglishDictionary()
    }
  }
}

export default DictionaryFactory.getDictionary(Navigator.getLanguague())