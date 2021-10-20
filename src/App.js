import React from 'react';
import { Anchor, Box, Grommet, Heading, Carousel, Image } from 'grommet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box height="large" full overflow="hidden" margin="small">
          <Carousel className="homepageCarousel">
            <Box key="1">
              <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
              <div className="heroClick" onClick={() => console.log('click')}></div>
              <Box direction="column" align="end" full className="heroText">
                <Box className="carouselText">
                  <Heading size="large" level={1} className="heroTitle"> #1: title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl a lacinia porta, ligula dolor tincidunt sapien, et iaculis leo lectus a est. Sed hendrerit faucibus sapien in suscipit. </Heading>

                  <Heading size="medium" level={3} className="heroSummary"> #1: sDonec in pulvinar tortor. Duis metus nunc, gravida ac enim quis, tempor lobortis nibh. Nulla non cursus ex. Fusce ac dolor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Heading>
                </Box>
              </Box>
            </Box>
            <Box key="2">
              <Image src='//v2.grommet.io/assets/IMG_4245.jpg' />
              <div className="heroClick" onClick={() => console.log('click2')}></div>

              <Box direction="column" align="end" full className="heroText">
                <Box className="carouselText">
                  <Heading size="large" level={1} className="heroTitle"> #2: title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl a lacinia porta, ligula dolor tincidunt sapien, et iaculis leo lectus a est. Sed hendrerit faucibus sapien in suscipit. </Heading>
                  <Heading size="medium" level={3} className="heroSummary"> #2: sDonec in pulvinar tortor. Duis metus nunc, gravida ac enim quis, tempor lobortis nibh. Nulla non cursus ex. Fusce ac dolor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Heading>
                </Box>
              </Box>
            </Box>
            <Box key="3">
              <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
              <div className="heroClick" onClick={() => console.log('click3')}></div>

              <Box direction="column" align="end" full className="heroText">
                <Box className="carouselText">
                  <Heading size="large" level={1} className="heroTitle"> #3: title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl a lacinia porta, ligula dolor tincidunt sapien, et iaculis leo lectus a est. Sed hendrerit faucibus sapien in suscipit. </Heading>

                  <Heading size="medium" level={3} className="heroSummary"> #3: sDonec in pulvinar tortor. Duis metus nunc, gravida ac enim quis, tempor lobortis nibh. Nulla non cursus ex. Fusce ac dolor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Heading>
                </Box>
              </Box>
            </Box>
            <Box key="4">
              <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
              <div className="heroClick" onClick={() => console.log('click3')}></div>

              <Box direction="column" align="end" full className="heroText">
                <Box className="carouselText">
                  <Heading size="large" level={1} className="heroTitle"> #4: title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl a lacinia porta, ligula dolor tincidunt sapien, et iaculis leo lectus a est. Sed hendrerit faucibus sapien in suscipit. </Heading>
                  <Heading size="medium" level={3} className="heroSummary"> #4: sDonec in pulvinar tortor. Duis metus nunc, gravida ac enim quis, tempor lobortis nibh. Nulla non cursus ex. Fusce ac dolor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Heading>
                </Box>
              </Box>
            </Box>
          </Carousel>
        </Box>
      </header>

    </div>
  );
}

export default App;
