import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="mt-5">
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">Breakpoint</th>
            <th scope="col">Class infix</th>
            <th scope="col">Dimensions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>X-Small</td>
            <td><em>None</em></td>
            <td>0–576px</td>
          </tr>
          <tr>
            <td>Small</td>
            <td><code>sm</code></td>
            <td>	≥576px</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td><code>sm</code></td>
            <td>≥768px</td>
          </tr>
          <tr>
            <td>Large</td>
            <td><code>lg</code></td>
            <td>≥992px</td>
          </tr>
          <tr>
            <td>Extra large</td>
            <td><code>xl</code></td>
            <td>≥1200px</td>
          </tr>
          <tr>
            <td>Extra extra large</td>
            <td><code>xxl</code></td>
            <td>≥1400px</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
