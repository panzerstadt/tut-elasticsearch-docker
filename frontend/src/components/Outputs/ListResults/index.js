import React from "react";

import Card from "../../atoms/Card";

const ListView = ({ results }) => {
  return (
    <ul>
      {results.map((result, i) => {
        return <Card key={i} data={result} />;
      })}
    </ul>
  );
};

export default ListView;
