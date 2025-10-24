import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConceptList() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((cpt) => (
            <>
              <CoreConcept {...cpt} key={cpt.title} />
            </>
          ))}
        </ul>
      </section>
    </>
  );
}
