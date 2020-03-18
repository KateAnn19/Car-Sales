import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  //aways returns an object
  //returns out of it data
  //that will be added to the props of the connected component
  return {
    editing: state.editing,
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { toggleEditing }
)(AdditionalFeatures); //function currying


