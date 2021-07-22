import React from 'react';

import Buttons from './Buttons';
import DataTable, { columns, data } from './DataTable';

function App() {
  return (
    <>
      <Buttons />;
      <DataTable columns={columns} data={data} />
    </>
  );
}

export default App;
