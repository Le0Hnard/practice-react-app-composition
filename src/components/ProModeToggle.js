import React, { Component, useContext } from 'react';
import { ProModeContext } from './ProModeContext';

// export default class ProModeToggle extends Component {
//   render() {
//     return (
//       <ProModeContext.Consumer>
//         {contextData => (
//           <div className="form-check">
//             <input type="checkbox" 
//               className="form-check-input" 
//               value={ contextData.proMode } 
//               onChange={ contextData.toggleProMode } 
//             />
//             <label className="form-check-label">
//               { this.props.label }
//             </label>
//           </div>
//         )}
//       </ProModeContext.Consumer>
//     )
//   }
// }

export default function ProModeToggle(props) {
  const context = useContext(ProModeContext);

  return (
    <div className="form-check">
      <input type="checkbox" 
        className="form-check-input" 
        value={ context.proMode }
        onChange={ context.toggleProMode }
      />
      <label className="form-check-label">
        { props.label }
      </label>
    </div>
  );
}
