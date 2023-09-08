import ViewTable from './view-table/view-table';
import ViewConfig from './view-config/view-config';
import { Container } from '@mui/material';
import { GridContainer, GridItem } from './view.styled-component';

const View: React.FC = () => {
    return (
      <Container maxWidth='lg'>
            <GridContainer container>
                  <GridItem item>
                      <ViewConfig/>
                  </GridItem>
                  <GridItem item>
                      <ViewTable />
                  </GridItem>
            </GridContainer>
      </Container>
    );  
}

export default View;