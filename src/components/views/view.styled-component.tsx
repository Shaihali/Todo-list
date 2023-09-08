import { Grid, styled } from "@mui/material";

export const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid;
  border-radius: 14px;
  padding: 40px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const GridItem = styled(Grid)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding-left: 0;
`;