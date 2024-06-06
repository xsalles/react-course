import "./App.css"
import Headline from "./styles/css.modules/components/Headline";
import { Titulo } from "./styles/css.modules/components/Titulo/itens";
import Square from "./styles/styled-component/components/Square";




import Cta from "./styles/styled-component/components/Cta/index"
import Section from "./components/Team/pattern/composition/team-section.composition";
import Main from "./components/Team/pattern/composition/team-main.composition"
import PriceSection from "./components/Price/src/pattern/composition/price-section.composition"
import PricePlan from "./components/Price/src/pattern/composition/price-content.composition";
import EmptyImage from "./assets/images/Image.svg"
import Contact from "./styles/css.modules/components/Contact";

import Faq from "./hooks/components/Faq";




function App() {
  return (
    <body>

      <Faq />

    </body>
  );
}

export default App;