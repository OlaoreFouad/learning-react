import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                onClick={() => handleSelect("components")}
                isSelected={selectedTopic === "components"}
              >
                Components
              </TabButton>
              <TabButton
                onClick={() => handleSelect("jsx")}
                isSelected={selectedTopic === "jsx"}
              >
                JSX
              </TabButton>
              <TabButton
                onClick={() => handleSelect("props")}
                isSelected={selectedTopic === "props"}
              >
                Props
              </TabButton>
              <TabButton
                onClick={() => handleSelect("state")}
                isSelected={selectedTopic === "state"}
              >
                State
              </TabButton>
            </>
          }
        ></Tabs>
      </Section>

      <div id="tab-content">
        {selectedTopic !== null ? (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        ) : (
          <p>Please select a topic</p>
        )}
      </div>
    </>
  );
}
