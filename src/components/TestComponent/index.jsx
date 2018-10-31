import React from "react";

import { color } from "../../constants";

const TestComponent = class extends React.Component {
  render() {
    return (
      <div>
        Test Component
        <style jsx>
          {`
            div {
              color: ${color};
            }
          `}
        </style>
      </div>
    );
  }
};

export default TestComponent;
