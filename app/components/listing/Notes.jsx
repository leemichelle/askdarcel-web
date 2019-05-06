import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Notes(props) {
  return props.notes && (
    <section
      className="service--section"
      id={props.id}
    >
      <header className="service--section--header">
        <h4>Notes</h4>
      </header>
      <ul className="service--section--list">
        {renderNotes(props.notes)}
      </ul>
    </section>
  );
}

Notes.defaultProps = {
  id: null,
};

function renderNotes(notes) {
  return notes.map(noteObj => (
    <li key={noteObj.id} className="service">
      <div className="service--description"><ReactMarkdown className="rendered-markdown" source={noteObj.note} /></div>
    </li>
  ));
}
