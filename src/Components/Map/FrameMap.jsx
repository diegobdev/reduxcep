import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cep_changed } from '../Input/InputActions.js'
import './Map.sass'
const FrameMap = (props) => {
  console.log(props)
  let cepToSearch
  console.log(cepToSearch)
  if (props.cep) {
    cepToSearch = props.cep.replace('-','');
  }
  return (
    <div className="map-frame">
      <iframe width='100%' height='350' frameBorder='0'  
        scrolling='no' marginHeight='0' marginWidth='0'    
        src={`https://maps.google.com/maps?q=${cepToSearch}&output=embed`}></iframe>
    </div>
  )
}
const mapStateToProps = (state) => ({
  logradouro: state.input.logradouro,
  cep: state.input.cep
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ cep_changed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FrameMap)


