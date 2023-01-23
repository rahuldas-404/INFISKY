import React from 'react';
// import { motion } from '../../node_modules/framer-motion/dist/framer-motion';

class StatusBar extends React.Component {
  
    render() {
    //   const transition={
    //   duration: 2,
    //   type:'spring'
    // }

      return (
      // <motion.div
      //   initial={{left: '25%'}}
      //   whileInView={{left: '36rem'}}
      //   transition={transition}
      //   style={{left: '28rem'}}>
        <div id="statusBar">
          {this.props.dataToDisplay.map(data => <p key={data.name}> <strong> {data.name} </strong>: {data.value +" "+data.units} </p> )}
        </div>
      // </motion.div>
      );
    }

}
export { StatusBar };