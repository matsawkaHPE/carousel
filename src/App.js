import React from 'react';
import { Anchor, Box, Grommet, Carousel, Image } from 'grommet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box height="small" width="medium" overflow="hidden" margin="small">
        <Carousel>
        <Box>
            <div className="heroClick" onClick={() => console.log('click')}></div>
          <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
      </Box>
      <Box>
              <div className="heroClick" onClick={() => console.log('click2')}></div>
          <Image src='//v2.grommet.io/assets/IMG_4245.jpg' />
      </Box>
      <Box>
               <div className="heroClick" onClick={() => console.log('click3')}></div>
          <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
      </Box>
        </Carousel>
      </Box>
      </header>
      
    </div>
  );
}

export default App;
