import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCaretRight,
  faCaretLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

export default function regIcons() {
  library.add(faBars, faCaretLeft, faCaretRight, faAngleDown);
}
