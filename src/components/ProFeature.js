import React from 'react';

// export default function ProFeature(FeatureComponent) {
export default function ProFeature(props) {
  // return (props) => {
  //   if(props.pro) {
  //     // let { pro, ...childProps } = props;
  //     // return <FeatureComponent { ...childProps } />
  //     return props.render();
  //   } else {
  //     return (
  //       <h5 className="bg-warning text-white text-center">
  //         This is a Pro Feature
  //       </h5>
  //     );
  //   }
  // }

  if(props.pro) {
    // let { pro, ...childProps } = props;
    // return <FeatureComponent { ...childProps } />
    return props.render("Pro Feature");
  } else {
    return (
      <h5 className="bg-warning text-white text-center">
        This is a Pro Feature
      </h5>
    );
  }
}
