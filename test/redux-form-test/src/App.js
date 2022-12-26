import React from "react";
import DynamicForm from "./Pages/DynamicForm";

const App = () => {
  const handleSubmit = (values) => {
    alert("Successfully submited");
    // alert(JSON.stringify(values));
  };

  return (
    <div className="App">
      <DynamicForm
        onSubmit={handleSubmit}
        initialValues={{
          users: [{}],
        }}
      />
    </div>
  );
};

export default App;
