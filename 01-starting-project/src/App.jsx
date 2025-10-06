import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((cpt) => (
              <>
                <CoreConcept {...cpt} />
              </>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
